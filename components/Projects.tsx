import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects: projectsTranslations } = t;

  return (
    <Section
      id="projects"
      title={projectsTranslations.title}
      subtitle={projectsTranslations.subtitle}
      className="bg-lines"
    >
      <style>{`
        .bg-lines {
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.01),
            rgba(255, 255, 255, 0.01) 1px,
            transparent 1px,
            transparent 60px
          );
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsTranslations.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;