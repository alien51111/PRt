import React from 'react';
import Section from './Section';
import ProjectSphere from './ProjectSphere';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects: projectsTranslations } = t;

  return (
    <Section
      id="projects"
      title={projectsTranslations.title}
      subtitle={projectsTranslations.subtitle_detail}
      className="bg-dots-pattern overflow-hidden"
    >
      <ProjectSphere projects={projectsTranslations.items} />
    </Section>
  );
};

export default Projects;