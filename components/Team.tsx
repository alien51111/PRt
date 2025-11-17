import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const { t } = useLanguage();
  const { team: teamTranslations } = t.about;

  return (
    <section id="team" className="bg-[#030303] py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block relative p-4">
             <h2 className="text-3xl md:text-5xl font-bold text-prt-light-gray">
                {teamTranslations.title}
             </h2>
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-prt-muted-gray">
            {teamTranslations.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamTranslations.members.map((member: TeamMember, index: number) => (
            <div 
              key={index}
              className="
                bg-prt-dark-green p-3 rounded-xl shadow-lg 
                transition-all duration-300 ease-in-out 
                hover:transform hover:-translate-y-2 
                hover:shadow-2xl hover:shadow-prt-accent/10
                animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center rounded-md" 
                  loading="lazy"
                />
              </div>
              <div className="text-center my-4 py-3 relative">
                <span className="absolute top-0 left-4 w-4 h-4 border-l-2 border-t-2 border-prt-medium-green/50"></span>
                <span className="absolute top-0 right-4 w-4 h-4 border-r-2 border-t-2 border-prt-medium-green/50"></span>
                <span className="absolute bottom-0 left-4 w-4 h-4 border-l-2 border-b-2 border-prt-medium-green/50"></span>
                <span className="absolute bottom-0 right-4 w-4 h-4 border-r-2 border-b-2 border-prt-medium-green/50"></span>

                <h4 className="text-xl font-bold text-white leading-tight">{member.name}</h4>
                <p className="text-prt-medium-green uppercase text-xs tracking-widest mt-1">{member.title}</p>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'sans-serif' }}>PRt</span>
                <div className="text-right text-[10px] text-prt-muted-gray">
                  <p>prt.com</p>
                  <p>hello@prt.com</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;