import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 reveal">
      <div className="max-w-3xl mx-auto text-center border border-gray-800 bg-neutral-900/70 backdrop-blur-md p-8 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500"></div>
        
        <h2 className="mono text-[11px] font-bold uppercase tracking-[0.4em] text-orange-600 mb-8">
          04 / Connectivity
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 uppercase">
          <span className="gradient-text">Napište mi.</span>
        </h3>
        <p className="text-gray-400 mb-12 font-light text-lg max-w-xl mx-auto leading-relaxed">
          Rád poznám další nadšence do technologií nebo proberu zajímavé projekty a nápady. Podjďmě <span className="text-orange-600 font-bold">společně vytvořit</span> svět, ve kterém chceme žít.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
          <a 
            href="mailto:martipu007@hotmail.com" 
            className="inline-block mono text-[11px] font-bold border-2 border-white px-12 py-4 hover:bg-white hover:text-black transition-all uppercase tracking-[0.2em] relative group overflow-hidden rounded-full"
          >
            <span className="relative z-10">Email</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
          </a>
          <a 
            href="https://discord.com/users/1135544046526410862" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mono text-[11px] font-bold border-2 border-white px-12 py-4 hover:bg-white hover:text-black transition-all uppercase tracking-[0.2em] relative group overflow-hidden rounded-full"
          >
            <span className="relative z-10">Discord</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-center gap-6 mono text-[8px] text-gray-300">
          <span>PORT: 8080</span>
          <span>●</span>
          <span>LOCATION: BRNO_CZ</span>
          <span>●</span>
          <span>STATUS: LISTENING</span>
        </div>
      </div>
    </section>
  );
};