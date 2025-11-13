import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const [beliefsVisible, setBeliefsVisible] = useState(false);
  const beliefsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { about: aboutTranslations } = t;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBeliefsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (beliefsRef.current) {
      observer.observe(beliefsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section 
      id="about" 
      title={aboutTranslations.title}
      className="bg-dots-pattern"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-last text-lg text-prt-light-gray/90 space-y-6 rtl:text-right">
          {aboutTranslations.aboutText.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="p-2">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3540&auto=format&fit=crop" alt="PRt Agency Team in a professional meeting" className="w-full h-full object-cover" loading="lazy"/>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-20 md:my-24">
        <blockquote className="relative p-8">
          <p className="text-2xl md:text-3xl text-center font-medium italic text-prt-light-gray leading-relaxed">
            "{aboutTranslations.quote}"
          </p>
        </blockquote>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto rtl:text-right">
        <div className="bg-prt-dark-gray/50 p-8 border border-prt-muted-gray/20 transition-all duration-300 card-glow">
          <h3 className="text-2xl font-bold text-prt-accent mb-4">{aboutTranslations.mission.title}</h3>
          <p className="text-prt-light-gray/80 italic">"{aboutTranslations.mission.text}"</p>
        </div>
        <div className="bg-prt-dark-gray/50 p-8 border border-prt-muted-gray/20 transition-all duration-300 card-glow">
          <h3 className="text-2xl font-bold text-prt-accent mb-4">{aboutTranslations.vision.title}</h3>
          <p className="text-prt-light-gray/80 italic">"{aboutTranslations.vision.text}"</p>
        </div>
      </div>

      <div className="mt-24 max-w-6xl mx-auto relative isolate card-tilt-area" ref={beliefsRef}>
        <h3 className="text-3xl font-bold text-center mb-16 text-prt-light-gray">{aboutTranslations.coreBeliefs.title}</h3>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-1000 ${beliefsVisible ? 'opacity-100' : 'opacity-0'}`}>
          {aboutTranslations.coreBeliefs.items.map((belief, index) => (
            <div 
              key={belief.title}
              className="bg-black/20 p-6 border border-prt-muted-gray/20 card-tilt"
            >
              <h4 className="font-bold text-xl text-prt-accent mb-2">{belief.title}</h4>
              <p className="text-prt-light-gray/80 italic">"{belief.description}"</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;