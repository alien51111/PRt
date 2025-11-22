
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { Insight } from '../types';
import InsightModal from './InsightModal';

const Insights: React.FC = () => {
  const { t } = useLanguage();
  const { insights: insightsTranslations } = t;
  const [isVisible, setIsVisible] = useState(false);
  const [activeInsight, setActiveInsight] = useState<Insight | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Section
        id="insights"
        title={insightsTranslations.title}
        subtitle={insightsTranslations.subtitle}
        className="bg-black relative overflow-hidden pb-32"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid Texture */}
          <div 
              className="absolute inset-0 opacity-10"
              style={{
                  backgroundImage: `linear-gradient(to right, #30332D 1px, transparent 1px), linear-gradient(to bottom, #30332D 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
              }}
          ></div>
          {/* Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-prt-dark-green/20 blur-[100px] rounded-t-full"></div>
        </div>

        <div 
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {insightsTranslations.items.map((insight: Insight, index: number) => (
            <div
              key={index}
              onClick={() => setActiveInsight(insight)}
              className={`
                  group relative h-[500px] border border-prt-muted-gray/20 bg-prt-dark-gray/20 overflow-hidden
                  transition-all duration-700 ease-out transform cursor-pointer
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* 1. The Image Layer */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src={insight.expertImage} 
                    alt={insight.expertName} 
                    className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  {/* Overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* 2. Digital Noise/Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-5 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
              
              {/* 3. Animated Corner Brackets (The "Targeting" Effect) */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-prt-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-prt-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-prt-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-prt-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>

              {/* 4. Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 rtl:text-right">
                  
                  {/* Topic (Top) */}
                  <div className="relative">
                      <div className="w-12 h-1 bg-prt-accent mb-6 transform origin-left transition-all duration-500 group-hover:w-full"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-prt-accent transition-colors duration-300">
                          {insight.topic}
                      </h3>
                  </div>

                  {/* Expert Info (Bottom - Slides up) */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="overflow-hidden">
                          <p className="text-lg font-bold text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                              {insight.expertName}
                          </p>
                      </div>
                      <div className="overflow-hidden">
                          <p className="text-sm text-prt-muted-gray uppercase tracking-wider translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                              {insight.expertTitle}
                          </p>
                      </div>
                      
                      {/* Read More Indicator */}
                      <button 
                        className="mt-6 flex items-center text-prt-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 rtl:flex-row-reverse bg-transparent border-none p-0 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveInsight(insight);
                        }}
                      >
                          <span>READ INSIGHT</span>
                          <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                      </button>
                  </div>
              </div>
              
              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-prt-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            </div>
          ))}
        </div>
      </Section>
      
      {/* Render Modal if active */}
      {activeInsight && (
        <InsightModal insight={activeInsight} onClose={() => setActiveInsight(null)} />
      )}
    </>
  );
};

export default Insights;