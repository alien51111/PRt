
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const { clients: clientsTranslations } = t;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Duplicate logos to create a seamless infinite loop
  const marqueeLogos = [...clientsTranslations.logos, ...clientsTranslations.logos, ...clientsTranslations.logos];

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
    <section id="clients" ref={sectionRef} className="bg-black py-24 md:py-32 scroll-mt-24 overflow-hidden relative">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move by 1/3rd because we tripled the list */
        }
        .animate-scroll {
          animation: scroll-left 40s linear infinite;
        }
        /* Pause animation on hover */
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }
        /* Gradient Masks */
        .mask-fade-sides {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Centered */}
        <div 
          className={`mb-20 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
           <h2 className="text-4xl md:text-6xl font-bold text-prt-light-gray leading-tight mb-6">
            {clientsTranslations.title}
           </h2>
           <p className="text-lg text-prt-muted-gray leading-relaxed">
            {clientsTranslations.subtitle}
           </p>
        </div>

        {/* Infinite Marquee */}
        <div 
          className={`marquee-container relative w-full transition-opacity duration-1000 delay-300 ${
             isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Gradient Overlays for smooth edges (Modern Touch) */}
          <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden w-full">
            <div className="flex items-center gap-16 md:gap-24 w-max animate-scroll py-8">
              {marqueeLogos.map((logo, index) => {
                  // Check for specific logos that need size adjustment
                  const isLargeLogo = ['GIZ', 'Asiacell'].includes(logo.name);

                  return (
                    <div
                      key={`${logo.name}-${index}`}
                      className="
                        relative flex-shrink-0 flex items-center justify-center
                        h-24 md:h-32 w-auto px-4
                        filter grayscale opacity-60
                        transition-all duration-300
                        hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer
                      "
                    >
                       <img
                         src={logo.src}
                         alt={logo.alt}
                         // Conditional sizing: Make GIZ and Asiacell slightly larger
                         className={`
                            w-auto object-contain
                            ${isLargeLogo 
                                ? 'max-h-20 md:max-h-28 max-w-[200px] md:max-w-[300px]' 
                                : 'max-h-12 md:max-h-16 max-w-[150px] md:max-w-[220px]'}
                         `}
                       />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
