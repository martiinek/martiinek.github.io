import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const links = [
    { name: 'O MNĚ', href: '#about' },
    { name: 'PROJEKTY', href: '#projects' },
    { name: 'HODNOTY', href: '#values' },
    { name: 'KONTAKT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-32 flex justify-end items-center">
        <div className="flex items-center space-x-8 md:space-x-12">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group relative mono text-[12px] uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
            >
              <span className="relative z-12">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
          <div className="mono text-[9px] text-orange-600 font-bold hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            SYS_ONLINE
          </div>
        </div>
      </div>
    </nav>
  );
};