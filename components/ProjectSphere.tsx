
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
  const [showFullDetails, setShowFullDetails] = useState(false);
  const { t } = useLanguage();

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const startRotationRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const sphereRadius = 380;

  // Dynamically calculate positions in a single horizontal line (Ring)
  const positions = useMemo(() => {
    return projects.map((_, i) => {
      // Evenly distribute along the equator (horizontal line)
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

  // Auto Rotation Loop
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // Only auto-rotate if not interacting and no project is active
      if (!isInteracting && !activeProject && !isDraggingRef.current) {
        setSphereRotation(prev => ({
          ...prev,
          y: prev.y + (0.02 * delta) // Adjust speed: 0.02 deg/ms ~= 20 deg/sec
        }));
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isInteracting, activeProject]);

  const handleInteractionStart = (clientX: number, clientY: number) => {
    if(activeProject) {
        setActiveProject(null);
        setShowFullDetails(false);
    }

    isDraggingRef.current = true;
    dragStartRef.current = { x: clientX, y: clientY };
    startRotationRef.current = sphereRotation;
    setIsInteracting(true);
  };

  const handleInteractionMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - dragStartRef.current.x;
    const rotationSensitivity = 0.25;

    // Lock X rotation to 0 for the horizontal ring look
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
    
    const pos = positions[index];
    const itemAngleDeg = pos.theta * (180 / Math.PI);
    
    // We want the item to settle slightly to the right of the center (from user POV).
    // offset = 20 degrees puts it comfortably to the right.
    const offset = 20; 
    const currentY = sphereRotation.y;
    
    // Calculate the shortest rotation path
    // The absolute angle of the item in world space is (currentY + itemAngleDeg)
    // We want that to equal 'offset'.
    // So: currentY + itemAngleDeg + delta = offset
    // delta = offset - (currentY + itemAngleDeg)
    
    const currentAbsoluteAngle = currentY + itemAngleDeg;
    let diff = offset - currentAbsoluteAngle;
    
    // Normalize diff to -180 to 180 for shortest path
    diff = ((diff % 360) + 540) % 360 - 180;
    
    const targetY = currentY + diff;

    setSphereRotation({ x: 0, y: targetY });
    setActiveProject(project);
    setShowFullDetails(false); // Reset details on new selection
  };
  
  const handleClose = () => {
      if(activeProject) {
          setActiveProject(null);
          setShowFullDetails(false);
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
            // Apply transition only when snapping to a project. 
            // During auto-rotation or drag, we want instant updates (no transition).
            className={`relative w-full h-full ${activeProject ? 'transition-transform duration-1000 ease-in-out' : ''}`}
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
                    {/* Items Container */}
                    <div 
                        className="w-full h-full relative"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
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
      
      {/* Combined Detail Panel (Left) */}
       <div 
        className={`
            absolute left-[5%] w-[90%] md:w-[35%] text-left 
            transition-all duration-700 ease-out z-40
            ${activeProject ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}
            ${showFullDetails 
                ? 'top-[10%] bottom-[10%] pointer-events-auto overflow-y-auto pr-4 translate-y-0' // Expanded
                : 'top-1/2 -translate-y-1/2 pointer-events-none' // Collapsed
            }
        `}
       >
           <style>{`
             ::-webkit-scrollbar { width: 4px; }
             ::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
             ::-webkit-scrollbar-thumb { background: #CBFF08; }
           `}</style>

           {activeProject && (
               <div className="animate-fade-in-up text-shadow-lg pointer-events-auto pb-8" style={{ animationDelay: '100ms' }}>
                   <h3 className="text-3xl md:text-5xl font-bold text-prt-accent mb-6 leading-tight">{activeProject.title}</h3>
                   <h4 className="text-sm font-bold text-prt-light-gray uppercase tracking-widest mb-2 border-b border-prt-accent/50 inline-block pb-1">Overview</h4>
                   
                   {/* Description Area */}
                   <div className="relative mb-6">
                       <p className={`text-white/90 leading-relaxed text-lg transition-all duration-500 ${showFullDetails ? '' : 'line-clamp-4'}`}>
                           {activeProject.overview}
                       </p>
                   </div>
                   
                   {/* Collapsed State: Read More Button */}
                   {!showFullDetails && (
                        <button 
                            onClick={() => setShowFullDetails(true)}
                            className="mt-2 text-sm font-bold text-white uppercase tracking-widest border-b border-white hover:text-prt-accent hover:border-prt-accent transition-colors pb-1"
                        >
                            Read More
                        </button>
                    )}

                   {/* Expanded Content: Approach & Impact */}
                   {showFullDetails && (
                       <div className="space-y-8 animate-fade-in mt-8">
                            {/* Approach */}
                            {activeProject.approach && activeProject.approach.length > 0 && (
                                <div>
                                <h4 className="text-sm font-bold text-prt-light-gray uppercase tracking-widest mb-3 border-b border-prt-accent/50 inline-block pb-1">{t.projects.approachLabel}</h4>
                                <ul className="space-y-3 text-sm text-white/90">
                                    {activeProject.approach.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-prt-accent mr-3 mt-1.5 text-xs">■</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            )}

                            {/* Impact */}
                            {activeProject.impact && activeProject.impact.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-bold text-prt-light-gray uppercase tracking-widest mb-3 border-b border-prt-accent/50 inline-block pb-1">{t.projects.impactLabel}</h4>
                                    <ul className="space-y-3 text-sm text-white/90">
                                    {activeProject.impact.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-prt-accent mr-3 mt-1.5 text-xs">■</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            )}

                            {/* Show Less Button */}
                            <button 
                                onClick={() => { setShowFullDetails(false); if(containerRef.current) containerRef.current.scrollTop = 0; }}
                                className="mt-6 text-xs font-bold text-prt-muted-gray uppercase tracking-widest hover:text-white transition-colors"
                            >
                                Show Less
                            </button>
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
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-prt-light-gray hover:text-prt-accent border border-prt-muted-gray/50 px-6 py-2 rounded-full backdrop-blur-md transition-colors z-50 pointer-events-auto"
          >
              Close Detail
          </button>
      )}

    </div>
  );
};

export default ProjectSphere;
