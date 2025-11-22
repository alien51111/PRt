
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectSphereProps {
  projects: Project[];
}

const ProjectSphere: React.FC<ProjectSphereProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [sphereRotation, setSphereRotation] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const { t } = useLanguage();

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const startRotationRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const sphereRadius = 380;

  // Dynamically calculate positions in a single horizontal line (Ring)
  const positions = useMemo(() => {
    return projects.map((_, i) => {
      // Evenly distribute along the equator (horizontal line)
      // theta goes from 0 to 2PI
      const theta = (i / projects.length) * Math.PI * 2;
      // phi is fixed at PI/2 (90 degrees) for the equator
      return { phi: Math.PI / 2, theta };
    });
  }, [projects.length]);

  const projectTransforms = useMemo(() => {
    return projects.map((_, i) => {
      const pos = positions[i];
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
  }, [projects, sphereRadius, positions]);

  const handleInteractionStart = (clientX: number, clientY: number) => {
    if(activeProject) setActiveProject(null);

    isDraggingRef.current = true;
    dragStartRef.current = { x: clientX, y: clientY };
    startRotationRef.current = sphereRotation;
    setIsInteracting(true);
  };

  const handleInteractionMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;
    const rotationSensitivity = 0.25;

    // Lock X rotation to 0 (or very small range) to keep it looking like a "one line" horizontal ring
    // If you want strictly one line, newRotationX should stay 0.
    const newRotationX = 0; 
    const newRotationY = startRotationRef.current.y + deltaX * rotationSensitivity;
    
    setSphereRotation({ x: newRotationX, y: newRotationY });
  };

  const handleInteractionEnd = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
        if (!isDraggingRef.current) setIsInteracting(false)
    }, 200);
  };

  const handleProjectClick = (e: React.MouseEvent, project: Project, index: number) => {
    e.stopPropagation();
    isDraggingRef.current = false;
    
    // Center the project
    const pos = positions[index];
    
    // Calculate the Y rotation needed to bring this item to the front (0 degrees)
    // Item is currently at `pos.theta`. We need to rotate the container by `-pos.theta`.
    const targetY = -pos.theta * (180 / Math.PI);
    
    // Target X is 0 because we are on the equator
    const targetX = 0;

    setSphereRotation({ x: targetX, y: targetY });
    setActiveProject(project);
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
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
      {/* Main equatorial ring */}
      <div className="absolute inset-0 border border-prt-muted-gray/20 rounded-full opacity-50" style={{ transform: 'rotateX(90deg)' }}></div>
    </div>
  );

  return (
    <div 
        ref={containerRef}
        className="relative w-full h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <div 
        className={`w-full h-full absolute transition-all duration-1000 ease-in-out`}
        style={{ perspective: '2000px' }}
      >
         <div 
            className={`w-full h-full cursor-grab active:cursor-grabbing`}
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
                            onClick={(e) => handleProjectClick(e, project, index)}
                            className={`
                                w-full h-full bg-black cursor-pointer group overflow-hidden border 
                                transition-all duration-700 ease-in-out
                                ${isActive 
                                    ? 'border-prt-accent shadow-2xl shadow-prt-accent/30 scale-150 z-50' 
                                    : 'opacity-60 hover:opacity-100 border-prt-muted-gray/20 hover:border-prt-accent/50 hover:scale-110 grayscale hover:grayscale-0'}
                            `}
                            >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className={`
                                w-full h-full object-cover transition-all duration-700
                                ${isActive ? 'grayscale-0' : 'grayscale'}
                                `}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Left Panel: Title & Overview */}
       <div 
        className={`
            absolute left-[5%] top-1/2 -translate-y-1/2 w-[25%] text-left pointer-events-none
            transition-all duration-700 ease-out
            ${activeProject ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
        `}
       >
           {activeProject && (
               <div className="animate-fade-in-up text-shadow-lg" style={{ animationDelay: '100ms' }}>
                   <h3 className="text-3xl md:text-4xl font-bold text-prt-accent mb-6 leading-tight">{activeProject.title}</h3>
                   <h4 className="text-sm font-bold text-prt-light-gray uppercase tracking-widest mb-2 border-b border-prt-accent/50 inline-block pb-1">Overview</h4>
                   <p className="text-white/90 leading-relaxed text-lg">{activeProject.overview}</p>
               </div>
           )}
       </div>

      {/* Right Panel: Approach & Impact */}
       <div 
        className={`
            absolute right-[5%] top-1/2 -translate-y-1/2 w-[25%] text-left pointer-events-none
            transition-all duration-700 ease-out
            ${activeProject ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
        `}
       >
           {activeProject && (
               <div className="animate-fade-in-up text-shadow-lg space-y-8" style={{ animationDelay: '300ms' }}>
                    {activeProject.approach && activeProject.approach.length > 0 && (
                        <div>
                        <h4 className="text-sm font-bold text-prt-light-gray uppercase tracking-widest mb-3 border-b border-prt-accent/50 inline-block pb-1">{t.projects.approachLabel}</h4>
                        <ul className="space-y-2 text-sm text-white/90">
                            {activeProject.approach.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-prt-accent mr-2 mt-1">▪</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        </div>
                    )}

                    {activeProject.impact && activeProject.impact.length > 0 && (
                        <div>
                            <h4 className="text-sm font-bold text-prt-light-gray uppercase tracking-widest mb-3 border-b border-prt-accent/50 inline-block pb-1">{t.projects.impactLabel}</h4>
                            <ul className="space-y-2 text-sm text-white/90">
                            {activeProject.impact.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-prt-accent mr-2 mt-1">▪</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    )}
               </div>
           )}
       </div>

       {/* CTA / Instructions when inactive */}
      <div className={`absolute bottom-10 inset-x-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${activeProject ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center text-prt-muted-gray animate-pulse">
              <p className="font-semibold text-lg text-prt-light-gray/80 tracking-wider uppercase">Drag to Explore • Click to Reveal</p>
          </div>
      </div>
      
      {/* Close Button when active */}
      {activeProject && (
          <button 
            onClick={handleClose}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-prt-light-gray hover:text-prt-accent border border-prt-muted-gray/50 px-6 py-2 rounded-full backdrop-blur-md transition-colors z-50"
          >
              Close Detail
          </button>
      )}

    </div>
  );
};

export default ProjectSphere;
