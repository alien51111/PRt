
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import ProjectSphere from './ProjectSphere';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects: projectsTranslations } = t;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(projectsTranslations.items.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All' 
    ? projectsTranslations.items 
    : projectsTranslations.items.filter(p => p.category === activeFilter);

  // Intersection Observer for project reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleProjects((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <>
      {/* Hero Section with Sphere */}
      <Section
        id="projects-hero"
        title={projectsTranslations.title}
        subtitle=""
        className="relative overflow-hidden pb-0 bg-black"
      >
        {/* --- Cyber-Architectural Background Start --- */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
            
            {/* 1. Deep Ambient Glow (Teal) - Backlights the sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-prt-dark-green/20 rounded-full blur-[120px] animate-pulse"></div>

            {/* 2. Architectural Grid with Radial Mask */}
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #30332D 1px, transparent 1px), linear-gradient(to bottom, #30332D 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 0%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 0%, transparent 80%)',
                }}
            ></div>

            {/* 3. Floating Particles (CSS Animation) */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-prt-muted-gray/30 w-1 h-1 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float-up ${10 + Math.random() * 20}s linear infinite`,
                            opacity: Math.random() * 0.5,
                        }}
                    ></div>
                ))}
            </div>
            
            <style>{`
                @keyframes float-up {
                    0% { transform: translateY(0) scale(1); opacity: 0; }
                    20% { opacity: 0.5; }
                    80% { opacity: 0.5; }
                    100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
                }
            `}</style>
        </div>
        {/* --- Cyber-Architectural Background End --- */}


        <ProjectSphere projects={projectsTranslations.items} />
        
        {/* Disclaimer Text */}
        <div className="container mx-auto px-6 pb-20 text-center relative z-10">
            <p className="text-prt-muted-gray max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                {projectsTranslations.disclaimer}
            </p>
        </div>
      </Section>

      {/* Impact Stats Section - ACCURATE DATA */}
      <section className="bg-black py-20 border-y border-prt-muted-gray/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[radial-gradient(#CBFF08_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {/* Updated based on About/Values text */}
                <div className="p-8 border border-prt-accent/20 bg-prt-dark-gray/30 card-glow transition-all duration-500 hover:bg-prt-dark-gray/50">
                    <div className="text-4xl md:text-5xl font-bold text-prt-accent mb-2">18</div>
                    <p className="text-prt-light-gray/80 uppercase tracking-widest text-sm">Governorates Covered</p>
                </div>
                {/* Updated based on About text "$3.5M managed annually" */}
                <div className="p-8 border border-prt-accent/20 bg-prt-dark-gray/30 card-glow transition-all duration-500 hover:bg-prt-dark-gray/50">
                    <div className="text-4xl md:text-5xl font-bold text-prt-accent mb-2">$3.5M+</div>
                    <p className="text-prt-light-gray/80 uppercase tracking-widest text-sm">Annual Portfolio Managed</p>
                </div>
                {/* Updated based on Project Text (200k Yalla + 25k Ramadan + others) */}
                <div className="p-8 border border-prt-accent/20 bg-prt-dark-gray/30 card-glow transition-all duration-500 hover:bg-prt-dark-gray/50">
                    <div className="text-4xl md:text-5xl font-bold text-prt-accent mb-2">250K+</div>
                    <p className="text-prt-light-gray/80 uppercase tracking-widest text-sm">Live Engagements</p>
                </div>
            </div>
        </div>
      </section>

      {/* Selected Works - Creative Zig-Zag Layout */}
      <Section id="portfolio-grid" title="Selected Works" className="bg-prt-dark-gray overflow-hidden">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-24 relative z-10">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`
                        px-6 py-2 text-sm uppercase tracking-wider font-bold transition-all duration-300 relative group overflow-hidden
                        ${activeFilter === cat 
                            ? 'text-black' 
                            : 'text-prt-muted-gray hover:text-white'}
                    `}
                >
                    <span className={`absolute inset-0 w-full h-full bg-prt-accent transition-transform duration-300 ease-out ${activeFilter === cat ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}></span>
                    <span className="relative z-10">{cat}</span>
                </button>
            ))}
        </div>

        {/* Dynamic Zig-Zag List */}
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
            {filteredProjects.map((project, index) => {
                const isEven = index % 2 === 0;
                const isVisible = visibleProjects.includes(index);

                return (
                  <div 
                    key={index}
                    data-index={index}
                    className={`
                      project-item relative flex flex-col md:flex-row items-center gap-8 md:gap-16 
                      ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                    `}
                  >
                    {/* Giant Background Number */}
                    <div 
                      className={`
                        absolute -top-12 md:-top-20 text-[120px] md:text-[200px] font-black text-white/5 select-none pointer-events-none leading-none z-0
                        ${isEven ? 'left-0 md:-left-10' : 'right-0 md:-right-10'}
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                      `}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    {/* Image Container with Creative Shape */}
                    <div 
                       onClick={() => setSelectedProject(project)}
                       className={`
                          w-full md:w-3/5 relative group cursor-pointer z-10
                          transition-all duration-1000 ease-out delay-100
                          ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`}
                       `}
                    >
                        <div className="relative aspect-[16/9] overflow-hidden bg-black">
                            {/* Creative Clip Path: Chamfered Corner */}
                            <div 
                              className="absolute inset-0 w-full h-full bg-gray-900 transition-transform duration-700 group-hover:scale-105"
                              style={{
                                clipPath: isEven ? 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' : 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 15%)',
                              }}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 grayscale group-hover:grayscale-0"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            </div>

                            {/* Decorative Borders echoing the shape */}
                            <div 
                                className="absolute inset-0 border border-prt-accent/30 pointer-events-none transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
                                style={{
                                  clipPath: isEven ? 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' : 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 15%)',
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div 
                      className={`
                        w-full md:w-2/5 relative z-10 rtl:text-right
                        transition-all duration-1000 ease-out delay-300
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                      `}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-px w-12 bg-prt-accent"></span>
                            <span className="text-prt-accent font-bold uppercase tracking-widest text-sm">{project.category}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-prt-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-prt-muted-gray text-lg leading-relaxed mb-8 line-clamp-4">
                          {project.overview}
                        </p>
                        
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="text-white font-bold uppercase tracking-wider text-sm border-b border-prt-accent pb-1 hover:text-prt-accent transition-colors"
                        >
                          Explore Case Study
                        </button>
                    </div>

                  </div>
                );
            })}
        </div>
      </Section>

      {/* Proof in Practice Section */}
      <section className="bg-black py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-prt-light-gray mb-4">{projectsTranslations.proofInPractice.title}</h2>
             <div className="w-24 h-1 bg-prt-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {projectsTranslations.proofInPractice.items.map((item, idx) => (
               <div 
                  key={idx}
                  className="group relative bg-prt-dark-gray/20 border border-prt-muted-gray/10 p-8 md:p-10 backdrop-blur-sm hover:bg-prt-dark-gray/40 transition-all duration-500 hover:-translate-y-2"
               >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-prt-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Border Accent */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prt-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <h3 className="text-2xl font-bold text-prt-accent mb-6 relative z-10">{item.title}</h3>
                  <p className="text-prt-light-gray/80 leading-relaxed relative z-10">
                    {item.description}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default Projects;
