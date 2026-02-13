
import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-gray-100">
      <div className="mb-16 flex items-end justify-between reveal">
        <div>
          <h2 className="mono text-[11px] font-bold text-orange-500 mb-4 tracking-widest">[02_OUTPUT_LOG]</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter gradient-text">IMPLEMENTACE.</h3>
        </div>
        <div className="mono text-[10px] text-gray-400 hidden md:block text-right">
          TOTAL_RECORDS: {PROJECTS.length} <br />
          <span className="text-orange-500">STATUS: COMPILED_SUCCESS</span>
        </div>
      </div>

      <div className="grid gap-4">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="group relative border border-gray-100 bg-white/70 backdrop-blur-md hover:border-gray-300 transition-all duration-300 p-8 reveal shadow-sm hover:shadow-xl rounded-2xl"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-1 mono text-[10px] font-bold text-gray-300 group-hover:text-orange-500 transition-colors">
                0x0{index}
              </div>
              
              <div className="lg:col-span-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h4 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase transition-all duration-500 hover:gradient-text group-hover:gradient-text cursor-pointer flex items-center gap-3">
                    {project.title}
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-40 transition-opacity text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h4>
                </a>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="mono text-[9px] uppercase tracking-widest px-2 py-0.5 bg-white border border-gray-100 group-hover:border-orange-200 group-hover:text-orange-600 transition-all rounded-md">
                      [{tech}]
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 border-l border-gray-100 pl-8">
                <p className="text-gray-500 text-sm leading-relaxed mb-4 mono italic">
                  // {project.description}
                </p>
                <div className="hidden group-hover:block animate-in fade-in slide-in-from-left-2">
                  <div className="border border-gray-100 bg-white p-4 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                    <span className="mono text-[9px] font-bold text-orange-600 block mb-1">LEARNING_INSIGHT:</span>
                    <p className="text-xs text-gray-700 font-medium">{project.learning}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href="https://github.com/martiinek?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-block mono text-[11px] font-bold border-2 border-black px-12 py-4 hover:bg-black hover:text-white transition-all uppercase tracking-[0.2em] relative group overflow-hidden rounded-full">
          <span className="relative z-10">Fetch_all_repositories.sh</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
        </a>
      </div>
    </section>
  );
};
