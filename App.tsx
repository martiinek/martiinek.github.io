import React, { useEffect, useState, useCallback } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const App: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeSection, setActiveSection] = useState('INIT');

  const createPacketBurst = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      life: 1.0,
    }));
    setParticles(prev => [...prev, ...newParticles].slice(-40));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPos(currentScroll);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          reveal.classList.add('active');
        }
      });

      // Simple section detection
      const sections = ['about', 'projects', 'values', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 300 && rect.bottom > 300) {
            setActiveSection(section.toUpperCase());
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      createPacketBurst(e.clientX, e.clientY);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleClick);

    // Particle animation loop
    const interval = setInterval(() => {
      setParticles(prev => prev
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 0.05
        }))
        .filter(p => p.life > 0)
      );
    }, 30);

    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleClick);
      clearInterval(interval);
    };
  }, [createPacketBurst]);

  return (
    <div className="min-h-screen bg-tech-grid bg-fixed relative cursor-crosshair">
      {/* Background Aurora */}
      <div 
        className="aurora-blur transition-opacity duration-1000" 
        style={{ 
          left: `${mousePos.x - 250}px`, 
          top: `${mousePos.y - 250}px`,
          opacity: 0.3
        }} 
      />

      {/* Interactive Particles (Data Packets) */}
      {particles.map(p => (
        <div 
          key={p.id}
          className="fixed pointer-events-none z-[100] w-1.5 h-1.5 bg-orange-500"
          style={{ 
            left: p.x, 
            top: p.y, 
            opacity: p.life,
            transform: `scale(${p.life}) rotate(${p.life * 90}deg)` 
          }}
        />
      ))}

      {/* Vertical Status Indicator */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-4 pointer-events-none">
        <div className="mono text-[8px] text-gray-300 vertical-text tracking-widest uppercase">
          System_Pointer: {activeSection}
        </div>
        <div className="h-32 w-[1px] bg-gray-800 relative">
          <div 
            className="absolute top-0 left-0 w-full bg-orange-500 transition-all duration-300"
            style={{ height: `${(scrollPos / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
          />
        </div>
        <div className="mono text-[8px] text-orange-600 font-bold">
          {Math.round((scrollPos / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%
        </div>
      </div>
      
      <Navbar scrolled={scrollPos > 50} />
      
      <main className="relative z-10">
        <Hero scrollPos={scrollPos} />
        <div className="px-6 md:px-24 lg:px-48">
          <About />
          <Projects />
          <Values />
          <Contact />
        </div>
      </main>

      <footer className="py-20 border-t border-gray-800 bg-black/50 backdrop-blur-sm px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mono text-[10px] text-gray-400 gap-4">
          <p className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse"></span>
            LOG_STREAM: ESTABLISHED
          </p>
          <p className="hover:text-orange-500 transition-colors">
            &copy; {new Date().getFullYear()} / MARTIN_PUSTKA
          </p>
        </div>
      </footer>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default App;