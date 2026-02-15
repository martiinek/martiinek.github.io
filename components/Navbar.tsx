import React, { useEffect, useRef, useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const links = [
    { name: 'O MNĚ', href: '#about' },
    { name: 'PROJEKTY', href: '#projects' },
    { name: 'HODNOTY', href: '#values' },
    { name: 'KONTAKT', href: '#contact' },
  ];

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (
        menuRef.current && !menuRef.current.contains(target) &&
        buttonRef.current && !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        bg-black/60 backdrop-blur-xl border-b border-gray-800 shadow-sm py-3
        ${scrolled ? 'md:bg-black/60 md:backdrop-blur-xl md:border-b md:py-4' : 'md:bg-transparent md:backdrop-blur-0 md:border-b-0 md:py-10'}`}
      style={{ WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-32 flex items-center justify-between">
        {/* Brand / Status */}
        {/* Mobile brand/status */}
        <div className="flex md:flex items-center gap-2 mono text-[10px] text-orange-600 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          MENU
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8 md:space-x-12">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="group relative mono text-[14px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden absolute right-4 top-2 mono text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-2 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-orange-500 transition-colors bg-black/60 backdrop-blur-xl"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          ref={buttonRef}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown merged into the navbar block */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden bg-black/60 backdrop-blur-xl border-b border-gray-800 shadow-sm ${open ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ WebkitBackdropFilter: 'blur(20px)' }}
        ref={menuRef}
      >
        <div className="px-6 pt-3 pb-6 space-y-1">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block mono text-[12px] uppercase tracking-[0.15em] text-gray-300 hover:text-white py-2 px-3"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};