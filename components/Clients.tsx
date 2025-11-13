import React from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const { clients: clientsTranslations } = t;

  return (
    <Section
      id="clients"
      title={clientsTranslations.title}
      subtitle={clientsTranslations.subtitle}
      className="bg-prt-dark-gray"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {clientsTranslations.list.map((clientName) => (
            <div
              key={clientName}
              className="border border-prt-muted-gray/30 bg-black/30 text-prt-light-gray/80 font-medium py-2 px-5 cursor-default card-bg-wipe"
            >
              {clientName}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Clients;