import React from 'react';
import type { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useLanguage();
  
  return (
    <div
      className="
        group relative aspect-[3/4] rounded-2xl overflow-hidden
        border border-prt-muted-gray/20 
        transition-all duration-300 ease-out
        hover:border-prt-accent/60 
        hover:shadow-2xl hover:shadow-prt-accent/10
        animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-white transition-all duration-500 ease-in-out rtl:text-right">
        <h3 className="text-2xl font-bold text-prt-accent mb-2">{project.title}</h3>
        
        <div className="transition-all duration-300 ease-in-out transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 max-h-0 group-hover:max-h-96">
          <p className="text-prt-light-gray/80 text-base mb-4">{project.description}</p>
          <div className="pt-4 border-t border-prt-muted-gray/30">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-prt-muted-gray mb-2">{t.projects.impactLabel}</h4>
            <p className="font-semibold text-prt-light-gray">{project.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;