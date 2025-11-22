
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
      title=""
      subtitle=""
      className="bg-black relative overflow-hidden py-24 md:py-32"
    >
      {/* --- Architectural Background --- */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Grid Lines */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `linear-gradient(to right, #30332D 1px, transparent 1px), linear-gradient(to bottom, #30332D 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }}
          ></div>
          {/* Glowing Orb */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-prt-dark-green/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Typography */}
          <div className="flex flex-col justify-center animate-fade-in-up rtl:text-right">
            <h4 className="text-prt-accent font-mono text-sm tracking-[0.3em] uppercase mb-4">
              {contactTranslations.subtitle}
            </h4>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-none">
              {contactTranslations.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-prt-muted-gray text-sm font-bold uppercase tracking-widest mb-2">Email Protocol</p>
                <a href={`mailto:${contactTranslations.details.email}`} className="text-2xl md:text-4xl text-white font-light group-hover:text-prt-accent transition-colors border-b border-transparent group-hover:border-prt-accent pb-1">
                  {contactTranslations.details.email}
                </a>
              </div>

              <div className="group cursor-pointer">
                <p className="text-prt-muted-gray text-sm font-bold uppercase tracking-widest mb-2">Voice Line</p>
                <a href={`tel:${contactTranslations.details.phone.replace(/\s/g, '')}`} className="text-2xl md:text-3xl text-white font-light group-hover:text-prt-accent transition-colors">
                  {contactTranslations.details.phone}
                </a>
              </div>

              <div>
                <p className="text-prt-muted-gray text-sm font-bold uppercase tracking-widest mb-2">Base of Operations</p>
                <p className="text-xl text-white/80 max-w-md leading-relaxed">
                  {contactTranslations.details.address}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-prt-accent/20 to-prt-dark-green/20 rounded-none blur opacity-50"></div>
            <div className="relative bg-black/60 backdrop-blur-xl border border-prt-muted-gray/20 p-8 md:p-12 h-full">
              
              {formStatus === 'sent' ? (
                <div className="h-full flex flex-col justify-center items-center text-center animate-scale-in">
                  <div className="w-20 h-20 border-2 border-prt-accent rounded-full flex items-center justify-center mb-6 text-prt-accent">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{contactTranslations.form.success.title}</h3>
                  <p className="text-prt-muted-gray">{contactTranslations.form.success.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-8">
                    <div className="group relative">
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="peer w-full bg-transparent border-b border-prt-muted-gray/50 py-4 text-lg text-white focus:border-prt-accent outline-none transition-all placeholder-transparent"
                        placeholder={contactTranslations.form.name}
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-0 top-4 text-prt-muted-gray text-lg transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-prt-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg"
                      >
                        {contactTranslations.form.name}
                      </label>
                    </div>

                    <div className="group relative">
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="peer w-full bg-transparent border-b border-prt-muted-gray/50 py-4 text-lg text-white focus:border-prt-accent outline-none transition-all placeholder-transparent"
                        placeholder={contactTranslations.form.email}
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-0 top-4 text-prt-muted-gray text-lg transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-prt-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg"
                      >
                        {contactTranslations.form.email}
                      </label>
                    </div>

                    <div className="group relative">
                      <textarea 
                        id="message" 
                        rows={4} 
                        required 
                        className="peer w-full bg-transparent border-b border-prt-muted-gray/50 py-4 text-lg text-white focus:border-prt-accent outline-none transition-all placeholder-transparent resize-none"
                        placeholder={contactTranslations.form.message}
                      ></textarea>
                      <label 
                        htmlFor="message"
                        className="absolute left-0 top-4 text-prt-muted-gray text-lg transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-prt-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg"
                      >
                        {contactTranslations.form.message}
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'} 
                    className="w-full group relative overflow-hidden bg-prt-light-gray hover:bg-prt-accent text-black font-bold py-4 px-8 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formStatus === 'sending' ? contactTranslations.form.sending : contactTranslations.form.submit}
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Contact;
