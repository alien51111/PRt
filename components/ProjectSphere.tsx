import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectSphereProps {
  projects: Project[];
}

const ProjectSphere: React.FC<ProjectSphereProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [sphereRotation, setSphereRotation] = useState({ x: 10, y: 15 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const { t } = useLanguage();

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const startRotationRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const sphereRadius = 380;

  useEffect(() => {
    // When the active project changes, reset the expanded state
    setIsDetailsExpanded(false);
  }, [activeProject]);

  const projectTransforms = useMemo(() => {
    const positions = [
      { phi: Math.PI / 2, theta: 0 }, // 0: Front
      { phi: Math.PI / 2, theta: Math.PI * 0.4 }, // 1: Right
      { phi: Math.PI / 2, theta: -Math.PI * 0.4 }, // 2: Left
      { phi: Math.PI / 2, theta: Math.PI * 0.85 }, // 3: Back Right
      { phi: Math.PI / 2, theta: -Math.PI * 0.85 }, // 4: Back Left
      { phi: Math.PI * 0.2, theta: 0 }, // 5: Top
      { phi: Math.PI * 0.8, theta: Math.PI }, // 6: Bottom
    ];

    return projects.map((_, i) => {
      const pos = positions[i % positions.length];
      const phi = pos.phi;
      const theta = pos.theta;

      const x = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const y = -sphereRadius * Math.cos(phi);
      const z = sphereRadius * Math.sin(phi) * Math.cos(theta);

      const rotY = theta * (180 / Math.PI);
      const rotX = (phi - Math.PI / 2) * (180 / Math.PI);

      return {
        style: {
          transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateY(${rotY}deg) rotateX(${-rotX}deg)`,
        },
      };
    });
  }, [projects, sphereRadius]);

  const handleInteractionStart = (clientX: number, clientY: number) => {
    if (activeProject) return;
    isDraggingRef.current = true;
    dragStartRef.current = { x: clientX, y: clientY };
    startRotationRef.current = sphereRotation;
    setIsInteracting(true);
  };

  const handleInteractionMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current || activeProject) return;
    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;
    const rotationSensitivity = 0.25;

    let newRotationX = startRotationRef.current.x - deltaY * rotationSensitivity;
    const newRotationY = startRotationRef.current.y + deltaX * rotationSensitivity;
    
    newRotationX = Math.max(-90, Math.min(90, newRotationX));

    setSphereRotation({ x: newRotationX, y: newRotationY });
  };

  const handleInteractionEnd = () => {
    if(activeProject) return;
    isDraggingRef.current = false;
    setTimeout(() => {
        if (!isDraggingRef.current) setIsInteracting(false)
    }, 200);
  };

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    isDraggingRef.current = false;
    if (activeProject && activeProject.title === project.title) {
        setActiveProject(null);
    } else {
        setActiveProject(project);
    }
  };
  
  const handleClose = () => {
      if(activeProject) {
          setActiveProject(null);
      }
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [activeProject]);

  const OrbitalLines = () => (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(90deg)' }}>
      <div className="absolute inset-0 border border-prt-muted-gray/5 rounded-full opacity-50" style={{ transform: 'scale(0.7)' }}></div>
      <div className="absolute inset-0 border border-prt-muted-gray/5 rounded-full opacity-50" style={{ transform: 'scale(1.4)' }}></div>
      <div className="absolute inset-0 border-2 border-prt-muted-gray/5 rounded-full opacity-30" style={{ transform: 'translateY(-15%) scale(1.8) rotateX(20deg)' }}></div>
      <div className="absolute inset-0 border border-prt-muted-gray/5 rounded-full opacity-30" style={{ transform: 'translateY(15%) scale(2.2) rotateX(-20deg)' }}></div>
    </div>
  );

  return (
    <div 
        ref={containerRef}
        onClick={handleClose}
        className="relative w-full h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <div 
        className={`w-full h-full absolute transition-all duration-1000 ease-in-out`}
        style={{ perspective: '2000px', transform: activeProject ? 'translateX(-25%)' : 'translateX(0)' }}
      >
         <div 
            className={`
            w-full h-full
            ${!activeProject ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
            `}
            onMouseDown={(e) => handleInteractionStart(e.clientX, e.clientY)}
            onMouseMove={(e) => handleInteractionMove(e.clientX, e.clientY)}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchMove={(e) => handleInteractionMove(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchEnd={handleInteractionEnd}
            onMouseEnter={() => { if (!activeProject) setIsInteracting(true); }}
        >
            <div
            className="relative w-full h-full transition-transform duration-1000 ease-in-out"
            style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${sphereRotation.x}deg) rotateY(${sphereRotation.y}deg)`,
            }}
            >
                <div
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <OrbitalLines />
                    <div 
                    className="w-full h-full relative animate-spin-slow"
                    style={{
                        transformStyle: 'preserve-3d',
                        animationPlayState: isInteracting || activeProject ? 'paused' : 'running'
                    }}>
                    {projects.map((project, index) => {
                        const isActive = activeProject?.title === project.title;
                        return (
                        <div
                            key={project.title}
                            className="absolute top-1/2 left-1/2 -mt-[125px] -ml-[87.5px] w-[175px] h-[250px] transition-all duration-700 ease-in-out"
                            style={projectTransforms[index].style}
                        >
                            <div
                            onClick={(e) => handleProjectClick(e, project)}
                            className={`
                                w-full h-full bg-black cursor-pointer group overflow-hidden border 
                                transition-all duration-700 ease-in-out
                                ${activeProject ? (isActive ? 'border-prt-accent shadow-2xl shadow-prt-accent/30 scale-110' : 'opacity-20 blur-sm scale-90') : 'opacity-60 hover:opacity-100 border-prt-muted-gray/20 hover:border-prt-accent/50 hover:scale-110'}
                            `}
                            >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className={`
                                w-full h-full object-cover transition-all duration-700
                                ${activeProject && !isActive ? 'grayscale' : 'grayscale-0'} group-hover:grayscale-0
                                `}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
      </div>
      
       <div 
        className={`
            absolute right-0 w-2/5 max-w-lg px-8 text-prt-light-gray
            transition-all duration-1000 ease-in-out pointer-events-auto
            ${activeProject ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        onClick={e => e.stopPropagation()}
       >
           {activeProject && (
               <div className="animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
                   <h3 className="text-3xl font-bold text-prt-accent mb-4">{activeProject.title}</h3>
                   <p className="text-prt-light-gray/80 leading-relaxed text-base mb-4">{activeProject.overview}</p>
                   
                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDetailsExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        <div className="space-y-6 pb-4">
                            {activeProject.approach && activeProject.approach.length > 0 && (
                              <div>
                                <h4 className="text-xl font-bold text-prt-light-gray mb-3 border-b border-prt-muted-gray/20 pb-2">{t.projects.approachLabel}</h4>
                                <ul className="list-disc list-inside space-y-2 text-sm text-prt-light-gray/80">
                                  {activeProject.approach.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                              </div>
                            )}

                            {activeProject.impact && activeProject.impact.length > 0 && (
                                <div>
                                    <h4 className="text-xl font-bold text-prt-light-gray mb-3 border-b border-prt-muted-gray/20 pb-2">{t.projects.impactLabel}</h4>
                                    <ul className="list-disc list-inside space-y-2 text-sm text-prt-light-gray/80">
                                    {activeProject.impact.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                   </div>

                   <button 
                     onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                     className="text-prt-light-gray/80 underline hover:text-prt-accent transition-colors"
                   >
                     {isDetailsExpanded ? t.projects.cta_show_less : t.projects.cta_show_more}
                   </button>
               </div>
           )}
       </div>

      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${activeProject ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center text-prt-muted-gray animate-fade-in-up opacity-0" style={{animationDelay: '300ms'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <p className="font-semibold text-lg text-prt-light-gray/80">A Universe of Stories</p>
              <p className="text-sm">Click and drag to explore, or select a project.</p>
          </div>
      </div>
    </div>
  );
};

export default ProjectSphere;
