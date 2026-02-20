"""
Portfolio Sync Script
=====================
Fetches public GitHub repos for a user, analyzes each repo's README and file
structure via the Gemini API, and writes a JSON file with AI-generated project
descriptions in Czech.

Required env vars:
    GITHUB_TOKEN   – GitHub PAT (or the built-in Actions token)
    GEMINI_API_KEY – Google Gemini API key
    GITHUB_USER    – GitHub username to scan (default: martiinek)
    OUTPUT_PATH    – Where to write projects.json (default: projects.json)
"""

from __future__ import annotations

import json
import os
import re
import sys
import time
import textwrap
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
import requests
from google import genai
from google.genai import types

# Load .env file for local development (ignored in CI)
load_dotenv()

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
GITHUB_USER: str = os.getenv("GITHUB_USER", "martiinek")
GITHUB_TOKEN: str = os.getenv("GITHUB_TOKEN", "")
GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
OUTPUT_PATH: str = os.getenv("OUTPUT_PATH", "projects.json")

GEMINI_MODEL: str = "gemini-2.5-flash"

GITHUB_API: str = "https://api.github.com"

# Repos to skip (forks, .github, profile repos, etc.)
SKIP_REPOS: set[str] = {
    GITHUB_USER,               # profile repo
    f"{GITHUB_USER}.github.io", # pages repo
    ".github",
}

# Rate-limit / retry settings
MAX_GEMINI_RETRIES: int = 3
GEMINI_RETRY_DELAY: float = 10.0  # seconds

# ---------------------------------------------------------------------------
# Helpers – GitHub
# ---------------------------------------------------------------------------

def _gh_headers() -> dict[str, str]:
    h: dict[str, str] = {"Accept": "application/vnd.github.v3+json"}
    if GITHUB_TOKEN:
        h["Authorization"] = f"token {GITHUB_TOKEN}"
    return h


def fetch_public_repos() -> list[dict[str, Any]]:
    """Return list of public, non-fork, non-archived repos."""
    repos: list[dict[str, Any]] = []
    page = 1
    while True:
        url = (
            f"{GITHUB_API}/users/{GITHUB_USER}/repos"
            f"?type=owner&sort=updated&per_page=100&page={page}"
        )
        resp = requests.get(url, headers=_gh_headers(), timeout=30)
        resp.raise_for_status()
        data = resp.json()
        if not data:
            break
        for repo in data:
            if repo.get("fork") or repo.get("archived") or repo.get("private"):
                continue
            if repo["name"] in SKIP_REPOS:
                continue
            repos.append(repo)
        page += 1
    return repos


def fetch_readme(repo_name: str) -> str | None:
    """Download decoded README.md content. Returns None when missing."""
    url = f"{GITHUB_API}/repos/{GITHUB_USER}/{repo_name}/readme"
    resp = requests.get(url, headers=_gh_headers(), timeout=30)
    if resp.status_code == 404:
        return None
    resp.raise_for_status()
    data = resp.json()
    # GitHub returns base64-encoded content
    import base64
    try:
        return base64.b64decode(data["content"]).decode("utf-8", errors="replace")
    except Exception:
        return None


def fetch_tree(repo_name: str, default_branch: str) -> list[str]:
    """Return a flat list of file paths (top-level tree, non-recursive limited depth)."""
    url = (
        f"{GITHUB_API}/repos/{GITHUB_USER}/{repo_name}"
        f"/git/trees/{default_branch}?recursive=1"
    )
    resp = requests.get(url, headers=_gh_headers(), timeout=30)
    if resp.status_code != 200:
        return []
    tree = resp.json().get("tree", [])
    # Limit to keep prompt manageable – first 120 entries
    return [
        item["path"]
        for item in tree[:120]
        if item.get("type") in ("blob", "tree")
    ]

# ---------------------------------------------------------------------------
# Helpers – Gemini
# ---------------------------------------------------------------------------

PROMPT_TEMPLATE = textwrap.dedent("""\
    Jsi expert na analýzu softwarových projektů. Na základě README a struktury
    souborů vygeneruj JSON objekt pro tento GitHub repozitář.

    Pravidla:
    - "id": krátký kebab-case identifikátor projektu (bez diakritiky).
    - "title": stručný český název projektu.
    - "description": 1-3 věty česky, profesionální tón, popisující CO projekt dělá
      a jaké technologie / přístupy využívá.
    - "technologies": pole řetězců – hlavní jazyky, frameworky, protokoly.
    - "learning": JEDEN konkrétní technický poznatek, který mohl autor na projektu
      získat (česky, 1-2 věty).
    - "link": URL repozitáře na GitHubu.

    Vrať POUZE platný JSON objekt (žádný markdown, žádné vysvětlení).

    ---
    Repozitář: {repo_name}
    URL: {repo_url}
    Výchozí větev: {default_branch}

    README.md:
    ```
    {readme}
    ```

    Struktura souborů:
    {file_tree}
    ---

    JSON:
""")


# Initialise the GenAI client once (uses GEMINI_API_KEY)
_genai_client: genai.Client | None = None


def _get_genai_client() -> genai.Client:
    global _genai_client
    if _genai_client is None:
        _genai_client = genai.Client(api_key=GEMINI_API_KEY)
    return _genai_client


def call_gemini(prompt: str) -> dict[str, Any] | None:
    """Call Gemini API via google-genai with retries. Returns parsed JSON dict or None."""
    client = _get_genai_client()
    config = types.GenerateContentConfig(
        temperature=0.3,
        max_output_tokens=4096,
    )

    for attempt in range(1, MAX_GEMINI_RETRIES + 1):
        try:
            response = client.models.generate_content(
                model=GEMINI_MODEL,
                contents=prompt,
                config=config,
            )
            text = response.text or ""
            if not text.strip():
                print(f"  ⚠ Gemini returned empty text. Candidates: {response.candidates}")
                return None
            return _parse_json_from_text(text)

        except Exception as exc:
            err_msg = str(exc)
            if "429" in err_msg or "RESOURCE_EXHAUSTED" in err_msg:
                wait = GEMINI_RETRY_DELAY * attempt
                print(f"  ⏳ Rate limit hit, waiting {wait}s (attempt {attempt}/{MAX_GEMINI_RETRIES})")
                time.sleep(wait)
                continue
            print(f"  ⚠ Gemini error on attempt {attempt}: {exc}")
            if attempt < MAX_GEMINI_RETRIES:
                time.sleep(GEMINI_RETRY_DELAY)
                continue
            return None

    return None


def _parse_json_from_text(text: str) -> dict[str, Any] | None:
    """Extract and parse a JSON object from model output (may contain markdown fences)."""
    # Strip markdown code fences (```json ... ``` or ``` ... ```)
    fence_match = re.search(r"```(?:json)?\s*\n?([\s\S]*?)\n?\s*```", text)
    if fence_match:
        cleaned = fence_match.group(1).strip()
        try:
            obj = json.loads(cleaned)
            if isinstance(obj, dict):
                return obj
        except json.JSONDecodeError:
            pass

    # Try parsing the whole text as JSON directly
    try:
        obj = json.loads(text.strip())
        if isinstance(obj, dict):
            return obj
    except json.JSONDecodeError:
        pass

    # Try to find a JSON object within the text
    match = re.search(r"\{[\s\S]*\}", text)
    if match:
        try:
            obj = json.loads(match.group())
            if isinstance(obj, dict):
                return obj
        except json.JSONDecodeError:
            pass

    print("  ⚠ Failed to parse valid JSON from Gemini response.")
    print(f"  ⚠ Raw response (first 500 chars): {text[:500]}")
    return None


def validate_project(project: dict[str, Any]) -> bool:
    """Check that the project dict has all required fields with correct types."""
    required_str_fields = {"id", "title", "description", "learning", "link"}
    for field in required_str_fields:
        if field not in project or not isinstance(project[field], str) or not project[field].strip():
            print(f"  ⚠ Missing or invalid field: {field}")
            return False
    if "technologies" not in project or not isinstance(project["technologies"], list):
        print("  ⚠ Missing or invalid field: technologies")
        return False
    if not all(isinstance(t, str) for t in project["technologies"]):
        print("  ⚠ technologies contains non-string values")
        return False
    return True

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    if not GEMINI_API_KEY:
        print("❌ GEMINI_API_KEY is not set. Exiting.")
        sys.exit(1)

    print(f"📦 Fetching public repos for {GITHUB_USER}…")
    repos = fetch_public_repos()
    print(f"   Found {len(repos)} repo(s) to process.\n")

    if not repos:
        print("No repos found. Nothing to do.")
        return

    projects: list[dict[str, Any]] = []

    for repo in repos:
        name: str = repo["name"]
        url: str = repo["html_url"]
        branch: str = repo.get("default_branch", "main")
        print(f"🔍 Processing: {name}")

        # 1. Fetch README
        readme = fetch_readme(name)
        if readme is None:
            print(f"  ⏭ Skipping (no README).\n")
            continue

        # Truncate very long READMEs to stay within token limits
        if len(readme) > 8000:
            readme = readme[:8000] + "\n\n... (truncated)"

        # 2. Fetch file tree
        file_tree = fetch_tree(name, branch)
        tree_str = "\n".join(file_tree) if file_tree else "(not available)"

        # 3. Build prompt & call Gemini
        prompt = PROMPT_TEMPLATE.format(
            repo_name=name,
            repo_url=url,
            default_branch=branch,
            readme=readme,
            file_tree=tree_str,
        )

        project = call_gemini(prompt)
        if project is None:
            print(f"  ⚠ Gemini returned no usable data. Skipping.\n")
            continue

        # Ensure link is correct
        project["link"] = url

        # 4. Validate
        if not validate_project(project):
            print(f"  ⚠ Validation failed. Skipping.\n")
            continue

        projects.append(project)
        print(f"  ✅ Done.\n")

        # Small delay between API calls to be polite
        time.sleep(1)

    print(f"\n📝 {len(projects)} project(s) generated successfully.")

    if not projects:
        print("⚠ No valid projects. File will NOT be written.")
        return

    # Write output
    output = Path(OUTPUT_PATH)
    output.parent.mkdir(parents=True, exist_ok=True)
    content = json.dumps(projects, ensure_ascii=False, indent=2)
    output.write_text(content, encoding="utf-8")
    print(f"✅ Written to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
