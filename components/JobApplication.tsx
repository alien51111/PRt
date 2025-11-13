import React, { useState } from 'react';
import Section from './Section';
import { Job } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface JobApplicationProps {
  job: Job;
  onBack: () => void;
}

const JobApplication: React.FC<JobApplicationProps> = ({ job, onBack }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { t } = useLanguage();
  const { contact: contactTranslations } = t; // Reusing contact form translations for labels

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <Section
      id="job-application"
      title={`Apply for: ${job.title}`}
      subtitle={`${job.location} · ${job.type}`}
      className="bg-prt-dark-gray/30 bg-dots-pattern"
    >
      <div className="max-w-3xl mx-auto">
        {formStatus === 'sent' ? (
          <div className="bg-prt-dark-green/50 border border-prt-accent text-prt-light-gray p-8 text-center h-full flex flex-col justify-center animate-scale-in">
            <h3 className="text-2xl font-bold mb-4">{contactTranslations.form.success.title}</h3>
            <p>Your application for the {job.title} position has been submitted. We'll be in touch soon.</p>
            <button onClick={onBack} className="mt-6 mx-auto bg-prt-accent text-prt-dark-gray font-bold py-2 px-6 hover:bg-white transition-all duration-300">
              Back to Careers
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">{contactTranslations.form.name}</label>
                <input type="text" id="name" placeholder={contactTranslations.form.name} required className="w-full bg-black/40 border border-prt-muted-gray/30 p-3 text-prt-light-gray focus:ring-2 focus:ring-prt-accent focus:border-prt-accent outline-none transition-all rtl:text-right" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{contactTranslations.form.email}</label>
                <input type="email" id="email" placeholder={contactTranslations.form.email} required className="w-full bg-black/40 border border-prt-muted-gray/30 p-3 text-prt-light-gray focus:ring-2 focus:ring-prt-accent focus:border-prt-accent outline-none transition-all rtl:text-right" />
              </div>
            </div>
             <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input type="tel" id="phone" placeholder="Phone Number (Optional)" className="w-full bg-black/40 border border-prt-muted-gray/30 p-3 text-prt-light-gray focus:ring-2 focus:ring-prt-accent focus:border-prt-accent outline-none transition-all rtl:text-right" />
            </div>
            <div>
              <label htmlFor="cover-letter" className="sr-only">Cover Letter</label>
              <textarea id="cover-letter" placeholder="Cover Letter" rows={5} required className="w-full bg-black/40 border border-prt-muted-gray/30 p-3 text-prt-light-gray focus:ring-2 focus:ring-prt-accent focus:border-prt-accent outline-none transition-all rtl:text-right"></textarea>
            </div>
            <div>
              <label htmlFor="resume" className="block text-prt-muted-gray mb-2">Upload Resume/CV</label>
              <input type="file" id="resume" required className="w-full text-prt-light-gray file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-prt-accent file:text-prt-dark-gray hover:file:bg-white cursor-pointer" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
              <button type="submit" disabled={formStatus === 'sending'} className="w-full md:w-auto bg-prt-accent text-prt-dark-gray font-bold py-3 px-8 hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                {formStatus === 'sending' ? contactTranslations.form.sending : "Submit Application"}
              </button>
              <button type="button" onClick={onBack} className="w-full md:w-auto text-prt-muted-gray font-bold py-3 px-8 hover:text-white transition-colors duration-300">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
};

export default JobApplication;