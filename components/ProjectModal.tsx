import React, { useEffect } from 'react';
import type { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();
  const { language } = useLanguage();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        
        .modal-content {
            animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
      <div 
        className="modal-content bg-prt-dark-gray w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-prt-muted-gray/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className={`absolute top-4 ${language === 'en' ? 'right-4' : 'left-4'} text-prt-muted-gray hover:text-white z-10 transition-colors`} aria-label="Close project details">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <img src={project.image} alt={project.title} className="w-full h-56 md:h-72 object-cover" />
        
        <div className="p-8 md:p-12 rtl:text-right">
          <h2 id="project-title" className="text-3xl md:text-4xl font-bold text-prt-accent mb-6">{project.title}</h2>
          
          <div className="space-y-8 text-prt-light-gray/90 text-lg">
            <div>
              <h3 className="text-xl font-bold text-prt-light-gray mb-3 border-b border-prt-muted-gray/20 pb-2">Overview</h3>
              <p className="whitespace-pre-line">{project.overview}</p>
            </div>

            {project.approach && project.approach.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-prt-light-gray mb-3 border-b border-prt-muted-gray/20 pb-2">Our Approach</h3>
                <ul className="list-disc list-inside space-y-2">
                  {project.approach.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-prt-light-gray mb-3 border-b border-prt-muted-gray/20 pb-2">{t.projects.impactLabel}</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.impact.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;