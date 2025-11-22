
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
  const [fileName, setFileName] = useState<string>('');
  const { t } = useLanguage();
  const { contact: contactTranslations } = t;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
          setFileName(e.target.files[0].name);
      }
  };

  return (
    <Section
      id="job-application"
      title=""
      className="bg-black min-h-screen pt-32"
    >
      <div className="max-w-5xl mx-auto px-6 animate-fade-in-up">
        
        {/* Header / Job Protocol Info */}
        <div className="mb-16 border-b border-prt-muted-gray/20 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <button 
                    onClick={onBack} 
                    className="flex items-center text-prt-muted-gray hover:text-prt-accent mb-6 transition-colors text-sm font-mono tracking-wider uppercase"
                >
                    <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    Abort Application
                </button>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase">
                    {job.title}
                </h1>
                <div className="flex items-center gap-4 text-prt-accent font-mono text-sm md:text-base">
                    <span className="bg-prt-accent/10 px-2 py-1 rounded border border-prt-accent/20">{job.location}</span>
                    <span className="bg-prt-accent/10 px-2 py-1 rounded border border-prt-accent/20">{job.type}</span>
                </div>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-prt-muted-gray text-xs font-mono mb-1">APPLICATION_ID</p>
                <p className="text-white font-mono">PRT-JOB-{Math.floor(Math.random() * 10000)}</p>
            </div>
        </div>

        {/* The Dossier Form */}
        {formStatus === 'sent' ? (
          <div className="bg-prt-dark-gray/30 border border-prt-accent/50 p-12 text-center animate-scale-in">
            <div className="w-20 h-20 mx-auto bg-prt-accent text-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Transmission Complete</h3>
            <p className="text-prt-muted-gray mb-8 text-lg">Your dossier for {job.title} has been securely uploaded to our servers. We will review your data shortly.</p>
            <button onClick={onBack} className="bg-white text-black hover:bg-prt-accent font-bold py-3 px-8 transition-colors uppercase tracking-widest text-sm">
              Return to Careers
            </button>
          </div>
        ) : (
          <form className="space-y-12" onSubmit={handleSubmit}>
            
            {/* Personal Data Section */}
            <div className="space-y-6">
                <h3 className="text-sm font-bold text-prt-muted-gray uppercase tracking-[0.2em] border-l-2 border-prt-accent pl-4">Personal Data</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                        <label htmlFor="name" className="block text-prt-light-gray text-sm mb-2">Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            required 
                            className="w-full bg-white/5 border border-white/10 focus:border-prt-accent text-white p-4 outline-none transition-colors"
                            placeholder="e.g. John Doe"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="email" className="block text-prt-light-gray text-sm mb-2">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            required 
                            className="w-full bg-white/5 border border-white/10 focus:border-prt-accent text-white p-4 outline-none transition-colors"
                            placeholder="e.g. john@example.com"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="phone" className="block text-prt-light-gray text-sm mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            className="w-full bg-white/5 border border-white/10 focus:border-prt-accent text-white p-4 outline-none transition-colors"
                            placeholder="+964 ..."
                        />
                    </div>
                </div>
            </div>

            {/* Documents Section */}
            <div className="space-y-6">
                <h3 className="text-sm font-bold text-prt-muted-gray uppercase tracking-[0.2em] border-l-2 border-prt-accent pl-4">Documents</h3>
                
                <div className="group">
                    <label htmlFor="cover-letter" className="block text-prt-light-gray text-sm mb-2">Cover Letter / Statement</label>
                    <textarea 
                        id="cover-letter" 
                        rows={6} 
                        required 
                        className="w-full bg-white/5 border border-white/10 focus:border-prt-accent text-white p-4 outline-none transition-colors resize-none"
                        placeholder="Tell us why you belong at PRt..."
                    ></textarea>
                </div>

                <div className="group">
                    <label className="block text-prt-light-gray text-sm mb-2">Resume / CV</label>
                    <div className="relative">
                        <input 
                            type="file" 
                            id="resume" 
                            required 
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="w-full bg-white/5 border-2 border-dashed border-white/20 group-hover:border-prt-accent p-8 text-center transition-colors flex flex-col items-center justify-center gap-2">
                            <svg className="w-8 h-8 text-prt-muted-gray group-hover:text-prt-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            {fileName ? (
                                <span className="text-prt-accent font-bold">{fileName}</span>
                            ) : (
                                <span className="text-prt-muted-gray">Drag & drop or <span className="text-white underline">browse</span> to upload PDF</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="pt-8 border-t border-prt-muted-gray/20 flex flex-col md:flex-row gap-4">
              <button 
                type="submit" 
                disabled={formStatus === 'sending'} 
                className="flex-1 bg-prt-accent text-black font-bold py-4 px-8 hover:bg-white transition-colors uppercase tracking-widest text-sm clip-path-button"
                style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 25%)' }}
              >
                {formStatus === 'sending' ? 'Transmitting Data...' : 'Submit Application'}
              </button>
              <button 
                type="button" 
                onClick={onBack} 
                className="md:w-48 bg-transparent border border-prt-muted-gray text-prt-muted-gray hover:text-white hover:border-white font-bold py-4 px-8 transition-colors uppercase tracking-widest text-sm"
              >
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
