import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 reveal">
      <div className="max-w-3xl mx-auto text-center border border-gray-100 bg-white/70 backdrop-blur-md p-16 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500"></div>
        
        <h2 className="mono text-[11px] font-bold uppercase tracking-[0.4em] text-orange-600 mb-8">
          04 / Connectivity
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 uppercase">
          <span className="gradient-text">Napište mi.</span>
        </h3>
        <p className="text-gray-500 mb-12 font-light text-lg max-w-xl mx-auto leading-relaxed">
          Rád poznám další nadšence do technologií, proberu zajímavé projekty a nápady. Podjďmě <span className="text-orange-600 font-bold">společně vytvořit</span> svět, ve kterém chceme žít.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <a 
            href="mailto:martipu007@hotmail.com" 
            className="group mono text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-3 bg-black text-white rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
          >
            Email
          </a>
          <a 
            href="https://discord.com/users/1135544046526410862" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group mono text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all"
          >
            Discord
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-50 flex justify-center gap-6 mono text-[8px] text-gray-300">
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