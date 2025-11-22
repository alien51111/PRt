import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();
  const { process: processTranslations } = t;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background from Technology Section */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
          alt="Technology collaboration background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full py-20 md:py-0 min-h-screen flex flex-col md:flex-row">
        
        {/* Left Side: Text */}
        <div 
          className={`
            w-full md:w-1/2 flex flex-col justify-center md:pr-12 rtl:md:pr-0 rtl:md:pl-12 mb-12 md:mb-0 pointer-events-none
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}
        >
           <div className="pointer-events-auto">
              <div className="inline-block mb-6">
                 <h2 className="text-5xl md:text-7xl font-bold text-white mb-2">{processTranslations.title}</h2>
                 <div className="h-2 w-24 bg-prt-accent"></div>
              </div>
              <p className="text-xl md:text-2xl text-prt-light-gray/80 leading-relaxed max-w-lg">
                {processTranslations.subtitle}
              </p>
           </div>
        </div>

        {/* Right Side: Interactive Area */}
        <div 
          className={`
            w-full md:w-1/2 relative flex items-end justify-end min-h-[500px]
            transition-all duration-1000 delay-300 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}
        >
          
          {/* The Active Card Area - Positioned Bottom Right */}
          <div className="relative w-full h-full flex items-end justify-end pb-24 pr-4 md:pr-0">
            {processTranslations.steps.map((step, index) => (
               index === activeIndex && (
                <div 
                  key={step.id}
                  className="
                    relative w-full max-w-md aspect-square bg-prt-dark-gray/95 
                    border border-prt-accent/30 shadow-2xl shadow-prt-accent/10
                    flex flex-col p-8 md:p-12
                    origin-bottom-right
                  "
                  style={{
                    animation: 'popup 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                    borderRadius: '0px' // Sharp edges
                  }}
                >
                  <div className="flex justify-between items-start mb-8">
                     <span className="text-6xl font-bold text-prt-accent/20 font-plex">{step.id}</span>
                     {/* Small decoration */}
                     <div className="w-4 h-4 bg-prt-accent rounded-none"></div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6">{step.title}</h3>
                  
                  <ul className="space-y-3 overflow-y-auto custom-scrollbar flex-grow">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-prt-light-gray/80">
                        <span className="text-prt-accent mr-3 rtl:ml-3 mt-1.5 text-xs">■</span>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
               )
            ))}
          </div>

          {/* Rotary Dial Navigation - Fixed at Bottom Right */}
          <div className="absolute bottom-0 right-0 md:bottom-8 md:right-8 p-4">
             <div className="relative w-48 h-48 rounded-full border border-prt-muted-gray/20 bg-black/40 backdrop-blur-md flex items-center justify-center">
                {/* Dial Center Decoration */}
                <div className="absolute w-24 h-24 border border-dashed border-prt-muted-gray/30 rounded-full animate-spin-slow"></div>
                
                {processTranslations.steps.map((step, index) => {
                  // Position buttons in a circle
                  const total = processTranslations.steps.length;
                  const angle = (index / total) * 2 * Math.PI - (Math.PI / 2); // Start from top
                  const radius = 65; // px
                  const left = 50 + (Math.cos(angle) * radius / 1.92); // % approximation (192px width/2 approx 96)
                  const top = 50 + (Math.sin(angle) * radius / 1.92); 

                  // Calculate exact pixel offsets for cleaner CSS positioning
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        absolute w-10 h-10 flex items-center justify-center 
                        transition-all duration-300 ease-out z-20
                        border
                      `}
                      style={{
                        transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(0.8)' : 'scale(1)'}`, // Active shrinks to simulate "being inside" or pressed
                        borderRadius: '0px', // Sharp edges
                        backgroundColor: isActive ? '#CBFF08' : '#30332D',
                        borderColor: isActive ? '#CBFF08' : '#8A8B7D',
                        color: isActive ? '#000' : '#fff',
                      }}
                      aria-label={`View step ${step.id}`}
                    >
                      {isActive ? (
                        // Small square dot when active
                        <div className="w-3 h-3 bg-black"></div>
                      ) : (
                        <span className="text-xs font-bold">{step.id}</span>
                      )}
                    </button>
                  );
                })}
             </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes popup {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #CBFF08;
        }
      `}</style>
    </section>
  );
};

export default Process;