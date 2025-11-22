
import React, { useState, useEffect } from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { Job } from '../types';

interface CareersProps {
  onApply: (job: Job) => void;
}

const Careers: React.FC<CareersProps> = ({ onApply }) => {
  const { t } = useLanguage();
  const { careers: careersTranslations } = t;
  const [visibleIndex, setVisibleIndex] = useState<number[]>([]);
  const [jobsVisible, setJobsVisible] = useState(false);

  // Staggered animation trigger
  useEffect(() => {
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];
    
    // Trigger perks
    careersTranslations.culture.perks.items.forEach((_, idx) => {
        const id = setTimeout(() => {
            setVisibleIndex(prev => [...prev, idx]);
        }, 200 + (idx * 100));
        timeoutIds.push(id);
    });

    // Trigger Jobs section after perks
    const jobsId = setTimeout(() => {
        setJobsVisible(true);
    }, 800);
    timeoutIds.push(jobsId);

    return () => timeoutIds.forEach(clearTimeout);
  }, [careersTranslations.culture.perks.items]);

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      
      {/* --- Dynamic Background: The Moving Blueprint --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Moving Grid Floor */}
         <div className="absolute inset-0 opacity-20"
              style={{
                  backgroundImage: `linear-gradient(to right, #30332D 1px, transparent 1px), linear-gradient(to bottom, #30332D 1px, transparent 1px)`,
                  backgroundSize: '4rem 4rem',
                  transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                  animation: 'grid-move 20s linear infinite',
              }}
         />
         {/* Top Gradient Fade */}
         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
         {/* Bottom Gradient Fade */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <style>{`
        @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 0 4rem; }
        }
        .scan-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #CBFF08;
            opacity: 0;
            box-shadow: 0 0 10px #CBFF08;
            z-index: 20;
        }
        .job-row:hover .scan-line {
            animation: scan-settle 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes scan-settle {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: calc(100% - 2px); opacity: 1; }
        }
      `}</style>

      <Section 
        id="careers" 
        title=""
        subtitle=""
        className="relative z-10 pt-32 pb-20"
      >
        {/* Header Area */}
        <div className="max-w-5xl mx-auto text-center mb-24 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                {careersTranslations.title.toUpperCase()}
            </h1>
            <div className="h-1 w-24 bg-prt-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-prt-light-gray/80 max-w-3xl mx-auto leading-relaxed">
                {careersTranslations.subtitle}
            </p>
        </div>

        {/* Culture & Perks Grid */}
        <div className="max-w-7xl mx-auto mb-32">
             <div className="text-center mb-16">
                <h3 className="text-sm font-bold text-prt-accent uppercase tracking-[0.3em] mb-4">
                    {careersTranslations.culture.title}
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {careersTranslations.culture.perks.title}
                </h2>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                {careersTranslations.culture.perks.items.map((perk: string, index: number) => (
                    <div 
                        key={index}
                        className={`
                            group relative bg-prt-dark-gray/30 backdrop-blur-sm border border-prt-muted-gray/20 p-8
                            hover:border-prt-accent/50 transition-all duration-500 hover:-translate-y-2
                            ${visibleIndex.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                        style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-prt-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-prt-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-prt-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-prt-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex items-center mb-4 text-prt-accent">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-prt-light-gray group-hover:text-white transition-colors">
                            {perk}
                        </h4>
                    </div>
                ))}
             </div>
        </div>

        {/* Interactive Job Board */}
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12 border-b border-prt-muted-gray/20 pb-4">
                <h3 className="text-3xl font-bold text-white">{careersTranslations.openings.title}</h3>
                <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-mono text-prt-muted-gray uppercase">System Online</span>
                </div>
            </div>

            <div className="space-y-4">
                {careersTranslations.openings.jobs.map((job: Job, index: number) => (
                    <div 
                        key={index}
                        className={`
                            job-row group relative bg-black/50 border-l-2 border-prt-muted-gray/30 hover:border-prt-accent overflow-hidden
                            transition-all duration-700 ease-out
                            ${jobsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        {/* Scan Line Effect */}
                        <div className="scan-line pointer-events-none"></div>

                        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center">
                            <div className="w-full md:w-2/3 text-center md:text-left rtl:text-right">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                    <h4 className="text-2xl font-bold text-white group-hover:text-prt-accent transition-colors">
                                        {job.title}
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-prt-muted-gray/20 text-prt-muted-gray rounded border border-prt-muted-gray/30">
                                        OPEN
                                    </span>
                                </div>
                                <p className="text-prt-muted-gray font-mono text-sm">
                                    {job.location} <span className="text-prt-accent mx-2">/</span> {job.type}
                                </p>
                            </div>

                            <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <button
                                    onClick={() => onApply(job)}
                                    className="bg-prt-accent text-black font-bold py-3 px-8 hover:bg-white transition-colors clip-path-button"
                                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 25%)' }}
                                >
                                    {careersTranslations.openings.cta}
                                </button>
                            </div>
                            
                            {/* Mobile visible button (fallback if hover isn't easy) */}
                            <div className="mt-6 md:hidden w-full">
                                 <button
                                    onClick={() => onApply(job)}
                                    className="w-full bg-prt-dark-gray border border-prt-accent text-prt-accent font-bold py-3 px-8"
                                >
                                    {careersTranslations.openings.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </Section>
    </div>
  );
};

export default Careers;
