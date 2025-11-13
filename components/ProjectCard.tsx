import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        group relative aspect-[3/4] overflow-hidden cursor-pointer
        border border-prt-muted-gray/20 
        transition-all duration-300 ease-out
        hover:border-prt-accent/60 
        hover:shadow-2xl hover:shadow-prt-accent/10
        hover:-translate-y-2
        animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
    >
      <img 
        src={project.image} 
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-white transition-all duration-500 ease-in-out rtl:text-right">
        <h3 className="text-2xl font-bold text-prt-accent mb-2 transition-transform duration-300 group-hover:-translate-y-1">{project.title}</h3>
        <p className="text-prt-light-gray/80 text-sm line-clamp-3">{project.overview}</p>
      </div>
    </div>
  );
};

export default ProjectCard;