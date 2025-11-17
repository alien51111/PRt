import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();
  const { process: processTranslations } = t;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % processTranslations.steps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + processTranslations.steps.length) % processTranslations.steps.length);
  };

  const icons = processTranslations.steps.map(step => step.icon);
  
  const floatingIcons = [
    { icon: icons[0], top: '15%', left: '5%', size: 48, delay: '0s', duration: '8s' },
    { icon: icons[1], top: '25%', left: '90%', size: 64, delay: '2s', duration: '10s' },
    { icon: icons[2], top: '70%', left: '10%', size: 56, delay: '4s', duration: '9s' },
    { icon: icons[3], top: '80%', left: '85%', size: 40, delay: '6s', duration: '12s' },
    { icon: icons[1], top: '50%', left: '55%', size: 32, delay: '1s', duration: '7s' },
    { icon: icons[3], top: '5%', left: '30%', size: 36, delay: '3s', duration: '11s' },
  ];

  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden bg-black text-prt-light-gray">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(203,255,8,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(203,255,8,0.1)_0%,_transparent_60%)]"></div>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute text-prt-accent/10"
            style={{
              top: item.top,
              left: item.left,
              width: `${item.size}px`,
              height: `${item.size}px`,
              animation: `float ${item.duration} ease-in-out infinite`,
              animationDelay: item.delay,
            }}
            dangerouslySetInnerHTML={{ __html: item.icon }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text and Navigation */}
        <div className="rtl:text-right">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-wide">
            {processTranslations.title.split(' ').map((word, index) => (
                <span key={index} className="block">{word}</span>
            ))}
          </h2>
          <p className="mt-6 text-lg text-prt-muted-gray max-w-md">
            {processTranslations.subtitle}
          </p>
          <div className="mt-10 flex items-center space-x-4 rtl:space-x-reverse">
            <button onClick={handlePrev} aria-label="Previous step" className="w-12 h-12 flex items-center justify-center border-2 border-prt-muted-gray/50 text-prt-muted-gray/80 hover:border-prt-accent hover:text-prt-accent transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button onClick={handleNext} aria-label="Next step" className="w-12 h-12 flex items-center justify-center border-2 border-prt-muted-gray/50 text-prt-muted-gray/80 hover:border-prt-accent hover:text-prt-accent transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Card Carousel */}
        <div className="relative h-[450px] w-full" style={{ perspective: '1200px' }}>
          {processTranslations.steps.map((step, index) => {
            const offset = index - activeIndex;
            const isVisible = Math.abs(offset) <= 1;
            
            const style = {
              transform: `translateX(${offset * 70}%) scale(${1 - Math.abs(offset) * 0.2}) translateZ(${-Math.abs(offset) * 100}px) rotateY(${offset * -25}deg)`,
              opacity: isVisible ? (offset === 0 ? 1 : 0.3) : 0,
              zIndex: processTranslations.steps.length - Math.abs(offset),
              pointerEvents: offset === 0 ? 'auto' : 'none',
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            } as React.CSSProperties;

            return (
              <div
                key={index}
                className={`absolute w-full h-full p-8 border border-prt-accent/20 bg-prt-dark-gray/30 backdrop-blur-sm shadow-2xl shadow-prt-dark-gray flex flex-col justify-center
                  ${offset === 0 ? 'shadow-[0_0_45px_rgba(203,255,8,0.2)]' : ''}
                `}
                style={style}
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 text-prt-accent" dangerouslySetInnerHTML={{ __html: step.icon }} />
                  <div>
                     <h3 className="text-xl font-bold text-prt-accent mb-3">{`0${index + 1}. ${step.title}`}</h3>
                     <p className="text-prt-light-gray/80">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;