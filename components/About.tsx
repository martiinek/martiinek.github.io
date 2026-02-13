import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 reveal relative">
      <div className="absolute -left-24 top-0 w-64 h-64 bg-orange-400/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4">
          <div className="sticky top-32 p-10 border border-gray-100 bg-white/70 backdrop-blur-md shadow-sm rounded-2xl relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 rounded-l-2xl"></div>
            <h2 className="mono text-sm font-bold uppercase tracking-tighter mb-4 text-orange-600">
              [01_MANIFESTO]
            </h2>
            <div className="mono text-[10px] text-gray-500 leading-relaxed mb-8">
              "Když stavím hardware, nepoužívám jen nástroje. Formuji hranici mezi pozorovaným a pozorovatelem."
            </div>
            <div className="w-full h-[1px] bg-gray-100 mb-8"></div>
            <div className="space-y-4">
              <div className="flex justify-between mono text-[10px]">
                <span className="text-gray-400 uppercase font-bold">Core:</span>
                <span className="text-orange-600">EMBEDDED_DEV</span>
              </div>
              <div className="flex justify-between mono text-[10px]">
                <span className="text-gray-400 uppercase font-bold">Input:</span>
                <span className="text-amber-600">FEKT_VUT_CZ</span>
              </div>
              <div className="flex justify-between mono text-[10px]">
                <span className="text-gray-400 uppercase font-bold">Focus:</span>
                <span className="text-red-600">SYSTEMS_EMERGENCE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight uppercase">
              <span className="gradient-text">O MNĚ.</span>
            </h3>
            
            <div className="prose prose-xl text-gray-600 font-light leading-snug space-y-6">
              <p>
                Studuji na FEKT VUT, ale můj zájem sahá za hranice učebnic. Vidím svět jako soubor propojených systémů – od tranzistorů v ESP32 po emergentní chování trhů a lidské mysli.
              </p>
              
              <div className="p-8 border border-gray-100 bg-white/70 backdrop-blur-md mono text-base shadow-sm leading-relaxed italic rounded-2xl relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 rounded-l-2xl"></div>
                <span className="text-gray-500">
                  Zajímá mě suverenita. Hardware, který vlastníš. Kód, který můžeš číst. Systémy, které nepotřebují prostředníka. 3D tisk a PET recyklace jsou pro mě nástroje fyzické nezávislosti.
                </span>
              </div>
              
              <p>
                Filozofie mě naučila, že vnímání je konstrukt. Technika mi dává možnost ten konstrukt modifikovat, měřit a rozšiřovat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              <div className="p-6 border border-gray-100 bg-white/70 backdrop-blur-md hover:border-orange-500 transition-all group rounded-2xl shadow-sm hover:shadow-md">
                <div className="mono text-[9px] text-orange-600 mb-4 uppercase tracking-widest font-bold">Technologický zásobník</div>
                <div className="flex flex-wrap gap-2 text-xs mono">
                  {['STM32', 'ESP32', 'FreeRTOS', 'Python', 'C/C++', 'CAD', 'PCB'].map(t => (
                    <span key={t} className="px-2 py-1 bg-white border border-gray-100 rounded-lg group-hover:border-orange-200 transition-colors">+{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 border border-gray-100 bg-white/70 backdrop-blur-md hover:border-amber-400 transition-all group rounded-2xl shadow-sm hover:shadow-md">
                <div className="mono text-[9px] text-amber-600 mb-4 uppercase tracking-widest font-bold">Filozofické moduly</div>
                <div className="flex flex-wrap gap-2 text-xs mono">
                  {['Decentralizace', 'Emergence', 'Vědomí', 'Sovereignty'].map(t => (
                    <span key={t} className="px-2 py-1 bg-white border border-gray-100 rounded-lg group-hover:border-amber-200 transition-colors">*{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};