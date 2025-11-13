import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects: projectsTranslations } = t;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Section
        id="projects"
        title={projectsTranslations.title}
        className="bg-dots-pattern"
      >
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
           <h3 className="text-xl font-bold uppercase tracking-widest text-prt-muted-gray mb-4">{projectsTranslations.subtitle}</h3>
           <p className="text-prt-light-gray/80">{projectsTranslations.subtitle_detail}</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20 md:mb-24">
          {projectsTranslations.summaries.map((summary) => (
            <div key={summary.title} className="bg-black/20 p-8 border border-prt-muted-gray/20 transition-all duration-300 card-glow">
              <h3 className="text-2xl font-bold text-prt-accent mb-4">{summary.title}</h3>
              <p className="text-prt-light-gray/80 italic">"{summary.description}"</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsTranslations.items.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onClick={() => handleOpenModal(project)} />
          ))}
        </div>
      </Section>
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    </>
  );
};

export default Projects;