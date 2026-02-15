import React from 'react';

interface HeroProps {
  scrollPos: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollPos }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Background coordinates overlay (repositioned on mobile) */}
      <div className="absolute md:inset-0 inset-x-0 top-[55vh] bottom-0 flex items-start md:items-center justify-center pointer-events-none opacity-[0.05] select-none">
        <span className="text-[25vw] font-bold mono uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-transparent">Pustka</span>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-7">
          {/* Status (desktop) without INIT */}
          <div className="mono text-[11px] font-bold text-orange-600 mb-6 md:flex items-center gap-4 hidden">
            <span className="text-amber-500 font-bold">● ONLINE</span>
            <span className="animate-[blink_1s_infinite] text-red-500">_</span>
          </div>
          
          <div className="relative">
            <h1 className="text-[12vw] lg:text-[10rem] font-bold leading-[0.75] mb-6 md:mb-8 tracking-tighter">
              MARTIN <br />
              <span className="gradient-text animate-gradient-x">PUSTKA</span>
            </h1>
            {/* Status (mobile) positioned to the right of the name block */}
            <div className="mono text-[11px] font-bold text-orange-600 md:hidden flex items-center gap-3 absolute right-0 top-2">
              <span className="text-amber-500 font-bold">● ONLINE</span>
              <span className="animate-[blink_1s_infinite] text-red-500">_</span>
            </div>
          </div>
          
          <p className="text-base md:text-2xl text-gray-300 max-w-xl leading-snug mb-8 font-light mono">
            <span className="text-orange-500 opacity-70 font-bold">&gt;</span> IoT, embedded systémy a robotika <br />
            <span className="text-amber-500 opacity-70 font-bold">&gt;</span> Student EKT na FEKT VUT <br />
            <span className="text-red-500 opacity-70 font-bold">&gt;</span> Usnadnění života skrze technologie
          </p>
          
          <div className="flex items-center gap-4 mono text-[10px] text-gray-400">
            <span className="w-8 h-px bg-gray-800"></span>
            <span>DATA_FLOW_ACTIVE</span>
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
          </div>
        </div>

        <div className="lg:col-span-5 relative block mt-10 md:mt-0">
          <div 
            className="relative p-3 border border-gray-800 bg-neutral-900 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] transition-transform duration-500"
            style={{ transform: `rotate(${scrollPos * 0.01}deg) translateY(${scrollPos * -0.03}px)` }}
          >
            <div className="absolute -top-4 -right-4 mono text-[10px] text-white font-bold bg-orange-600 px-3 py-1 shadow-lg">
              SYNC_MODULE
            </div>
              <div className="aspect-square bg-gray-800 overflow-hidden relative group rounded-2xl max-w-xs mx-auto md:max-w-none">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                style={{ backgroundImage: 'url("profile_picture.jpg")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 mix-blend-overlay"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,1)] animate-[scan_3s_ease-in-out_infinite]"></div>
            </div>
            <div className="mt-4 flex justify-between mono text-[8px] text-gray-400 uppercase font-bold">
              <span className="text-orange-600">FRM: 0x442</span>
              <span className="text-amber-600">ST: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-move 8s ease infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};