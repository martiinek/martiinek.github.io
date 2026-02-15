import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'O MNĚ', href: '#about' },
    { name: 'PROJEKTY', href: '#projects' },
    { name: 'HODNOTY', href: '#values' },
    { name: 'KONTAKT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-gray-800 py-4' : 'bg-transparent py-6 md:py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-32 flex items-center justify-between">
        {/* Brand / Status */}
        <button
          className="mono text-[9px] text-orange-600 font-bold hidden sm:flex items-center gap-2"
          aria-hidden="true"
          tabIndex={-1}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          SYS_ONLINE
        </button>

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
          className="md:hidden mono text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-orange-500 transition-colors"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          Menu
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pt-2 pb-6 space-y-2 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block mono text-[13px] uppercase tracking-[0.15em] text-gray-300 hover:text-white py-2"
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