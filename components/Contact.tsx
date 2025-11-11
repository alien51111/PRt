import React, { useState } from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { t } = useLanguage();
  const { contact: contactTranslations } = t;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <Section
      id="contact"
      title={contactTranslations.title}
      subtitle={contactTranslations.subtitle}
      className="bg-prt-dark-gray/30 bg-glow"
    >
      <style>{`
        .bg-glow {
           background-image: radial-gradient(ellipse at center, rgba(188, 231, 201, 0.05) 0%, transparent 70%);
        }
      `}</style>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start rtl:text-right">
        <div className="space-y-8">
          <div>
             <h3 className="text-2xl font-bold text-prt-accent mb-3">{contactTranslations.details.title}</h3>
             <p className="text-prt-muted-gray">{contactTranslations.details.address}</p>
             <a href={`mailto:${contactTranslations.details.email}`} className="block mt-2 text-prt-light-gray hover:text-prt-accent transition-colors">{contactTranslations.details.email}</a>
             <a href={`tel:${contactTranslations.details.phone.replace(/\s/g, '')}`} className="block mt-1 text-prt-light-gray hover:text-prt-accent transition-colors">{contactTranslations.details.phone}</a>
          </div>
           <div>
             <h3 className="text-2xl font-bold text-prt-accent mb-3">{contactTranslations.careers.title}</h3>
             <p className="text-prt-muted-gray">{contactTranslations.careers.text}</p>
             <a href="#" className="inline-block mt-2 text-prt-accent hover:underline">{contactTranslations.careers.link}</a>
          </div>
        </div>

        {formStatus === 'sent' ? (
          <div className="bg-prt-dark-green/50 border border-prt-accent text-prt-light-gray rounded-lg p-8 text-center h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{contactTranslations.form.success.title}</h3>
            <p>{contactTranslations.form.success.message}</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">{contactTranslations.form.name}</label>
              <input type="text" id="name" placeholder={contactTranslations.form.name} required className="w-full bg-black/40 border border-prt-muted-gray/30 rounded-md p-3 text-prt-light-gray focus:ring-2 focus:ring-prt-accent focus:border-prt-accent outline-none transition-all rtl:text-right" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{contactTranslations.form.email}</label>
              <input type="email" id="email" placeholder={contactTranslations.form.email} required className="w-full bg-black/40 border border-prt-muted-gray/30 rounded-md p-3 text-prt-light-gray focus:ring-2 focus:ring-prt-accent focus:border-prt-accent outline-none transition-all rtl:text-right" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{contactTranslations.form.message}</label>
              <textarea id="message" placeholder={contactTranslations.form.message} rows={5} required className="w-full bg-black/40 border border-prt-muted-gray/30 rounded-md p-3 text-prt-light-gray focus:ring-2 focus:ring-prt-accent focus:border-prt-accent outline-none transition-all rtl:text-right"></textarea>
            </div>
            <div>
              <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-prt-accent text-prt-dark-gray font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                {formStatus === 'sending' ? contactTranslations.form.sending : contactTranslations.form.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
};

export default Contact;