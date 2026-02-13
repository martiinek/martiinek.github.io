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
              "Kdo chce, hledá způsoby. Kdo nechce, hledá důvody."
              <br />
              —J. Werich
            </div>
            <div className="w-full h-[1px] bg-gray-100 mb-8"></div>
            <div className="space-y-4">
              <div className="flex justify-between mono text-[10px]">
                <span className="text-gray-400 uppercase font-bold">Core:</span>
                <span className="text-orange-600">PASSION_TO_BUILD</span>
              </div>
              <div className="flex justify-between mono text-[10px]">
                <span className="text-gray-400 uppercase font-bold">Input:</span>
                <span className="text-amber-600">NEW_IDEAS</span>
              </div>
              <div className="flex justify-between mono text-[10px]">
                <span className="text-gray-400 uppercase font-bold">Focus:</span>
                <span className="text-red-600">HAVING_FUN</span>
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
                Jsem studentem 1. ročníku oboru Elektronika a komunikační technologie na Fakultě elektrotechniky a komunikačních technologií VUT v Brně.
              </p>

              <div className="p-8 border border-gray-100 bg-white/70 backdrop-blur-md mono text-base shadow-sm leading-relaxed italic rounded-2xl relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 rounded-l-2xl"></div>
                <span className="text-gray-500">
                  K elektru jsem se více dostal v 15 letech, kdy jsem poprvé objevil platformu Arduino. Okamžitě mě nadchly možnosti, které nabízí, a začal jsem tvořit vlastní jednoduché projekty. Postupně jsem přešel na pokročilejší platformy, jako jsou ESP32, Raspberry Pi a STM32, a dál si rozšiřoval znalosti v oblasti embedded systémů a IoT.
                  <br />
                  Velkým krokem pro mě bylo také pořízení první 3D tiskárny, díky které jsem mohl své nápady převádět z digitálního světa do fyzické podoby. S postupně se rozšiřujícím vybavením mé malé laboratoře jsem mohl realizovat stále složitější a ambicióznější projekty a hlavně měl možnost se učit prostřednictvím experimentů a vlastních chyb, což mi dalo nejvíce.
                  </span>
              </div>
              
             <p>
                Nyní se snažím rozvíjet jak v rámci akademického studia, tak i prostřednictvím vlastních projektů a experimentů (viz 
                <a href="https://martiinek.github.io/#projects" className="text-orange-600 font-bold hover:underline">
                  níže
                </a>).
          </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              <div className="p-6 border border-gray-100 bg-white/70 backdrop-blur-md hover:border-orange-500 transition-all group rounded-2xl shadow-sm hover:shadow-md">
                <div className="mono text-[9px] text-orange-600 mb-4 uppercase tracking-widest font-bold">Oblasti zájmu</div>
                <div className="flex flex-wrap gap-2 text-xs mono">
                  {['Embedded systems', 'Linux', 'Matlab', 'Python', 'C/C++', 'Git', 'CAD', 'PCB design'].map(t => (
                    <span key={t} className="px-2 py-1 bg-white border border-gray-100 rounded-lg group-hover:border-orange-200 transition-colors">+{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 border border-gray-100 bg-white/70 backdrop-blur-md hover:border-amber-400 transition-all group rounded-2xl shadow-sm hover:shadow-md">
                <div className="mono text-[9px] text-amber-600 mb-4 uppercase tracking-widest font-bold">Cíle</div>
                <div className="flex flex-wrap gap-2 text-xs mono">
                  {['Nezávislost', 'Růst', 'Vzdělání', 'Efektivita'].map(t => (
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