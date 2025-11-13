import React from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { Job } from '../types';

interface CareersProps {
  onApply: (job: Job) => void;
}

const Careers: React.FC<CareersProps> = ({ onApply }) => {
  const { t } = useLanguage();
  const { careers: careersTranslations } = t;

  return (
    <Section 
      id="careers" 
      title={careersTranslations.title}
      subtitle={careersTranslations.subtitle}
      className="careers-page bg-dots-pattern"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rtl:text-right">
          <h3 className="text-3xl font-bold text-prt-light-gray mb-4">{careersTranslations.culture.title}</h3>
          <p className="text-lg text-prt-light-gray/80 mb-8">{careersTranslations.culture.text}</p>
          
          <h4 className="text-2xl font-bold text-prt-accent mb-4">{careersTranslations.culture.perks.title}</h4>
          <ul className="grid grid-cols-2 gap-4">
            {careersTranslations.culture.perks.items.map((perk: string) => (
              <li key={perk} className="flex items-start">
                 <svg className="w-5 h-5 text-prt-accent rtl:ml-3 ltr:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-prt-light-gray/90">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-2">
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3540&auto=format&fit=crop" alt="PRt Agency team collaborating and planning" className="w-full h-full object-cover" loading="lazy"/>
        </div>
      </div>

      <div className="mt-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <div className="inline-block relative p-4">
                <h3 className="text-3xl md:text-4xl font-bold text-prt-light-gray">{careersTranslations.openings.title}</h3>
            </div>
        </div>
        <div className="space-y-4">
          {careersTranslations.openings.jobs.map((job: Job, index: number) => (
            <div 
              key={index} 
              className="job-listing group bg-black/30 border border-prt-muted-gray/20 p-6 flex flex-col md:flex-row justify-between items-center transition-all duration-300 hover:border-prt-accent hover:bg-black/50"
            >
              <div className="rtl:text-right text-center md:text-left">
                <h4 className="text-xl font-bold text-prt-light-gray">{job.title}</h4>
                <p className="text-prt-muted-gray">{job.location} &middot; {job.type}</p>
              </div>
              <button
                onClick={() => onApply(job)}
                className="mt-4 md:mt-0 bg-prt-dark-gray border border-prt-accent text-prt-accent font-bold py-2 px-6 hover:bg-prt-accent hover:text-prt-dark-gray transition-all duration-300 flex items-center"
              >
                {careersTranslations.openings.cta}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ltr:ml-2 rtl:mr-2 transition-transform duration-300 transform ltr:group-hover:translate-x-2.5 rtl:group-hover:-translate-x-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Careers;