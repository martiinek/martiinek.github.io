import React from 'react';

interface HeroProps {
  scrollPos: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollPos }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Background coordinates overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] select-none">
        <span className="text-[25vw] font-bold mono uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-transparent">Pustka</span>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-8">
          <div className="mono text-[11px] font-bold text-orange-600 mb-6 flex items-center gap-4">
            <span className="px-2 py-0.5 border border-orange-600 bg-orange-50/50">INIT: MARTIN_PUSTKA</span>
            <span className="text-amber-500 font-bold">● ONLINE</span>
            <span className="animate-[blink_1s_infinite] text-red-500">_</span>
          </div>
          
          <h1 className="text-[12vw] lg:text-[10rem] font-bold leading-[0.75] mb-8 tracking-tighter">
            MARTIN <br />
            <span className="gradient-text animate-gradient-x">PUSTKA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-snug mb-8 font-light mono">
            <span className="text-orange-500 opacity-70 font-bold">&gt;</span> IoT, embedded systémy a robotika <br />
            <span className="text-amber-500 opacity-70 font-bold">&gt;</span> Student EKT na FEKT VUT <br />
            <span className="text-red-500 opacity-70 font-bold">&gt;</span> Usnadnění života skrze technologie
          </p>
          
          <div className="flex items-center gap-4 mono text-[10px] text-gray-400">
            <span className="w-8 h-px bg-gray-200"></span>
            <span>DATA_FLOW_ACTIVE</span>
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
          </div>
        </div>

        <div className="lg:col-span-4 relative hidden lg:block">
          <div 
            className="relative p-3 border border-gray-200 bg-white shadow-[20px_20px_60px_rgba(0,0,0,0.05)] transition-transform duration-500"
            style={{ transform: `rotate(${scrollPos * 0.01}deg) translateY(${scrollPos * -0.03}px)` }}
          >
            <div className="absolute -top-4 -right-4 mono text-[10px] text-white font-bold bg-orange-600 px-3 py-1 shadow-lg">
              SYNC_MODULE
            </div>
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative group rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                style={{ backgroundImage: 'url("/martin.jpg"), url("https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1000")' }}
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