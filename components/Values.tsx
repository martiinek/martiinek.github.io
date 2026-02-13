import React from 'react';
import { VALUES } from '../constants';

export const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 reveal">
      <div className="mb-16">
        <h2 className="mono text-[11px] font-bold text-orange-600 mb-4 tracking-widest">[03_CORE_PROTOCOL]</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {VALUES.map((value, idx) => (
          <div key={value.title} className="relative p-10 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 border border-gray-100 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-2xl">
            {/* Soft decorative light */}
            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity ${idx === 0 ? 'bg-orange-400' : idx === 1 ? 'bg-amber-400' : 'bg-red-400'}`}></div>
            
            <div className={`w-12 h-12 rounded-xl mb-8 flex items-center justify-center ${idx === 0 ? 'bg-orange-50 text-orange-600' : idx === 1 ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={value.icon} />
              </svg>
            </div>

            <h4 className="text-2xl mb-6 font-bold tracking-tight group-hover:gradient-text transition-all duration-300">
              {value.title}
            </h4>
            <p className="text-gray-500 leading-relaxed font-light text-sm mb-10">
              {value.description}
            </p>
            <div className={`mono text-[9px] font-bold tracking-widest uppercase ${idx === 0 ? 'text-orange-400' : idx === 1 ? 'text-amber-400' : 'text-red-400'}`}>
              ID_V0{idx + 1} // CRITICAL_LOAD
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};