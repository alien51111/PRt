import React, { useState } from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const { t } = useLanguage();
  const { services: servicesTranslations } = t;

  const activeService = servicesTranslations.items[activeServiceIndex];

  return (
    <Section id="services" title={servicesTranslations.title} className="bg-prt-dark-gray/30 bg-dots-pattern">
      <style>{`
        .service-icon path,
        .service-icon line,
        .service-icon circle,
        .service-icon polygon,
        .service-icon rect {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 1s ease-in-out forwards;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Left Column: Triggers */}
        <div className="md:py-24">
          <ul className="flex flex-col space-y-4 md:space-y-12 rtl:text-right">
            {servicesTranslations.items.map((service, index) => (
              <li
                key={service.title}
                onClick={() => setActiveServiceIndex(index)}
                className="cursor-pointer"
              >
                <h3
                  className={`text-2xl md:text-4xl font-bold transition-colors duration-300 ${
                    activeServiceIndex === index ? 'text-prt-accent' : 'text-prt-muted-gray/50 hover:text-prt-muted-gray'
                  }`}
                >
                  {service.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Sticky Content */}
        <div className="hidden md:block h-[600px] rtl:text-right">
          <div className="sticky top-32">
            <div className="bg-black/40 p-8 border border-prt-muted-gray/20 transition-all duration-300 shadow-2xl shadow-prt-accent/5">
                <div key={activeServiceIndex} className="content-fade-enter content-fade-enter-active">
                  {activeService.icon && (
                     <div 
                      className="mb-6 text-prt-accent" 
                      dangerouslySetInnerHTML={{ __html: activeService.icon.replace('<svg', '<svg class="service-icon"') }} 
                    />
                  )}
                  <p className="text-prt-light-gray/80 mb-6">{activeService.description}</p>
                  <ul className="space-y-3">
                    {activeService.items.map((item, index) => (
                      <li key={item} className="flex items-start service-item" style={{ animationDelay: `${150 + index * 100}ms` }}>
                        <svg className="w-5 h-5 text-prt-accent rtl:ml-3 ltr:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-prt-light-gray/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;