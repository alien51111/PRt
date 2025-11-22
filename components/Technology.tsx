import React from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const Technology: React.FC = () => {
  const { t } = useLanguage();
  const { technology: techTranslations } = t;

  const FeatureCard = ({ title, text, icon, delay }: { title: string, text: string, icon: React.ReactNode, delay: string }) => (
    <div
      className="bg-black/40 backdrop-blur-sm p-8 border border-prt-muted-gray/20 transition-all duration-300 card-glow animate-fade-in-up"
      style={{ animationDelay: delay, opacity: 0 }}
    >
      <div className="flex items-start space-x-6 rtl:space-x-reverse">
        <div className="flex-shrink-0 text-prt-accent w-12 h-12">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-prt-light-gray mb-3">{title}</h3>
          <p className="text-prt-muted-gray leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 z-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
          alt="Technology collaboration background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black/50"></div>
      </div>
      <Section
        id="technology"
        title={techTranslations.title}
        subtitle={techTranslations.subtitle}
        className="relative z-10 bg-transparent"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <FeatureCard 
            title={techTranslations.feature1.title}
            text={techTranslations.feature1.text}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A2.25 2.25 0 011.5 18.75v-2.625c0-.621.504-1.125 1.125-1.125h2.25Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 18.75h2.25c.621 0 1.125-.504 1.125-1.125v-8.625c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125v8.625c0 .621.504 1.125 1.125 1.125Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 16.5h2.25c.621 0 1.125-.504 1.125-1.125v-6.75c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            }
            delay="150ms"
          />
          <FeatureCard 
            title={techTranslations.feature2.title}
            text={techTranslations.feature2.text}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M19.5 8.25h-1.5m-15 3.75h1.5m15 0h1.5m-15 3.75h1.5m15 0h1.5M12 6.75h.008v.008H12V6.75zM12 12h.008v.008H12V12zm0 5.25h.008v.008H12v-.008z" />
              </svg>
            }
            delay="300ms"
          />
        </div>
      </Section>
    </div>
  );
};

export default Technology;