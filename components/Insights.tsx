import React from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { Insight } from '../types';

const Insights: React.FC = () => {
  const { t } = useLanguage();
  const { insights: insightsTranslations } = t;

  return (
    <Section
      id="insights"
      title={insightsTranslations.title}
      subtitle={insightsTranslations.subtitle}
      className="bg-prt-dark-gray/30 bg-dots-pattern"
    >
      <style>{`
        .horizontal-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .horizontal-scrollbar::-webkit-scrollbar-track {
          background-color: #30332D;
          border-radius: 4px;
        }
        .horizontal-scrollbar::-webkit-scrollbar-thumb {
          background-color: #8A8B7D;
          border-radius: 4px;
        }
        .horizontal-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #CBFF08;
        }
      `}</style>
      <div className="flex space-x-8 rtl:space-x-reverse pb-8 -mb-8 overflow-x-auto horizontal-scrollbar">
        {insightsTranslations.items.map((insight: Insight, index: number) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 md:w-96 h-[450px] relative overflow-hidden group card-glow border border-prt-muted-gray/20 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
          >
            <img 
              src={insight.expertImage} 
              alt={insight.expertName} 
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white rtl:text-right">
              <h3 className="text-xl font-bold leading-tight mb-4">{insight.topic}</h3>
              <div className="border-t border-prt-accent w-1/4 pt-3">
                <p className="font-bold text-prt-accent">{insight.expertName}</p>
                <p className="text-sm text-prt-light-gray/80">{insight.expertTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Insights;