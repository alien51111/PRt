import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Team from './Team';

interface BeliefItemProps { 
  belief: any;
  index: number; 
  realIndex: number; 
  hoveredBeliefIndex: number | null; 
  setHoveredBeliefIndex: (i: number | null) => void;
}

const BeliefItem: React.FC<BeliefItemProps> = ({ 
  belief, 
  index, 
  realIndex, 
  hoveredBeliefIndex, 
  setHoveredBeliefIndex 
}) => { 
    const isHovered = hoveredBeliefIndex === realIndex;
    const isAnyHovered = hoveredBeliefIndex !== null;
    
    // Simple Focus Effect: Dim others, highlight current
    const opacityClass = !isAnyHovered || isHovered ? 'opacity-100' : 'opacity-30 blur-[1px]';
    const translateClass = isHovered ? 'translate-x-2' : 'translate-x-0';

    return (
        <div 
            onMouseEnter={() => setHoveredBeliefIndex(realIndex)}
            className={`relative cursor-default transition-all duration-500 ease-out ${opacityClass} ${translateClass}`}
        >
            <div className="flex items-start gap-6 py-6 border-b border-prt-muted-gray/20 hover:border-prt-accent/50 transition-colors">
                {/* Number */}
                <span className={`text-sm font-mono mt-1 transition-colors duration-300 ${isHovered ? 'text-prt-accent' : 'text-prt-muted-gray'}`}>
                    {(realIndex + 1).toString().padStart(2, '0')}
                </span>

                {/* Title & Description Container */}
                <div className="flex-1 text-left rtl:text-right">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-prt-light-gray/80'}`}>
                        {belief.title}
                    </h3>
                    <p className={`text-base leading-relaxed transition-colors duration-300 ${isHovered ? 'text-prt-light-gray' : 'text-prt-muted-gray'}`}>
                        {belief.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const About: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const { t } = useLanguage();
  const { about: aboutTranslations } = t;

  const storyContainerRef = useRef<HTMLDivElement>(null);
  
  // Container Refs for direct DOM manipulation (Performance optimization)
  const missionContainerRef = useRef<HTMLDivElement>(null);
  const visionContainerRef = useRef<HTMLDivElement>(null);
  const beliefsContainerRef = useRef<HTMLDivElement>(null);

  // Video Refs for playback control
  const missionVideoRef = useRef<HTMLVideoElement>(null);
  const visionVideoRef = useRef<HTMLVideoElement>(null);
  const beliefsVideoRef = useRef<HTMLVideoElement>(null);

  const [beliefsHaveBeenVisible, setBeliefsHaveBeenVisible] = useState(false);
  const [hoveredBeliefIndex, setHoveredBeliefIndex] = useState<number | null>(null);

  useEffect(() => {
    // Trigger hero animations on mount
    const timer = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = storyContainerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      // Helper to manage video playback efficiently
      const manageVideoPlayback = (video: HTMLVideoElement | null, opacity: number) => {
        if (!video) return;
        if (opacity > 0.05) {
            if (video.paused && video.readyState >= 2) {
                video.play().catch(() => {});
            }
        } else {
            if (!video.paused) {
                video.pause();
            }
        }
      };

      if (top > window.innerHeight || top < -height) {
        // Reset opacities
        if (missionContainerRef.current) missionContainerRef.current.style.opacity = '0';
        if (visionContainerRef.current) visionContainerRef.current.style.opacity = '0';
        if (beliefsContainerRef.current) beliefsContainerRef.current.style.opacity = '0';
        
        // Pause all videos
        [missionVideoRef.current, visionVideoRef.current, beliefsVideoRef.current].forEach(video => {
             if (video && !video.paused) video.pause();
        });
        return;
      }

      const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
      
      const totalScenes = 3;
      const sceneDuration = 1 / totalScenes;
      const transitionPoint = 0.25; // 25% of scene duration for fade in/out

      const getOpacityForScene = (sceneIndex: number) => {
        const sceneStart = sceneIndex * sceneDuration;
        const sceneEnd = (sceneIndex + 1) * sceneDuration;
        
        const fadeInStart = sceneStart;
        const fadeInEnd = sceneStart + sceneDuration * transitionPoint;
        const fadeOutStart = sceneEnd - sceneDuration * transitionPoint;
        const fadeOutEnd = sceneEnd;

        if (progress >= fadeInStart && progress < fadeInEnd) {
          return (progress - fadeInStart) / (fadeInEnd - fadeInStart);
        }
        
        if (progress >= fadeInEnd && progress < fadeOutStart) {
          return 1;
        }

        if (progress >= fadeOutStart && progress < fadeOutEnd) {
          return 1 - ((progress - fadeOutStart) / (fadeOutEnd - fadeOutStart));
        }
        
        return 0;
      };
      
      const mOp = getOpacityForScene(0);
      const vOp = getOpacityForScene(1);
      const bOp = getOpacityForScene(2);

      // Direct DOM updates for smooth performance
      if (missionContainerRef.current) missionContainerRef.current.style.opacity = mOp.toString();
      if (visionContainerRef.current) visionContainerRef.current.style.opacity = vOp.toString();
      if (beliefsContainerRef.current) beliefsContainerRef.current.style.opacity = bOp.toString();

      // Update State for text animations
      if (bOp > 0.1 && !beliefsHaveBeenVisible) {
        setBeliefsHaveBeenVisible(true);
      }

      // Update Videos
      manageVideoPlayback(missionVideoRef.current, mOp);
      manageVideoPlayback(visionVideoRef.current, vOp);
      manageVideoPlayback(beliefsVideoRef.current, bOp);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set correct state on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [beliefsHaveBeenVisible]);
  
  // Split beliefs for the 2-column layout
  const allBeliefs = aboutTranslations.coreBeliefs.items;
  const midIndex = Math.ceil(allBeliefs.length / 2);
  const leftBeliefs = allBeliefs.slice(0, midIndex);
  const rightBeliefs = allBeliefs.slice(midIndex);

  return (
    <>
      <div id="about" className="relative min-h-screen flex items-center bg-black text-white py-20 md:py-32 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 z-0">
          <video
            src="https://cdn.pixabay.com/video/2022/04/09/113363-697718051_large.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-label="Abstract background video"
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">

          <div className="grid md:grid-cols-12 gap-8 items-end relative z-10">
            
            <div className="md:col-span-7">
              <div className="relative pt-8 pl-8">
                {/* Top-Left Decorative Lines */}
                <div
                  className="absolute top-0 left-0 w-0.5 h-24 bg-prt-accent origin-top"
                  style={{ transform: 'scaleY(0)', animation: isHeroVisible ? 'drawHeight 0.5s ease-out 0s forwards' : 'none' }}
                />
                <div
                  className="absolute top-0 left-0 w-24 h-0.5 bg-prt-accent origin-left"
                  style={{ transform: 'scaleX(0)', animation: isHeroVisible ? 'drawWidth 0.5s ease-out 0s forwards' : 'none' }}
                />

                <div 
                  className={`text-to-reveal ${isHeroVisible ? 'animate-reveal-text' : ''}`}
                  style={{ animationName: isHeroVisible ? 'revealText' : 'none', animationDelay: '0.2s' }}
                >
                  <p className="tracking-[0.2em] text-sm uppercase mb-4 text-prt-accent">
                    Cultural Architects
                  </p>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 flex flex-wrap gap-x-6" aria-label={aboutTranslations.title}>
                  {aboutTranslations.title.split(' ').map((word: string, index: number) => (
                    <span
                      key={index}
                      aria-hidden="true"
                      className={`inline-block text-to-reveal ${isHeroVisible ? 'animate-reveal-text' : ''}`}
                      style={{
                        animationName: isHeroVisible ? 'revealText' : 'none',
                        animationDelay: `${0.3 + index * 0.1}s`,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                <div 
                  className={`text-to-reveal ${isHeroVisible ? 'animate-reveal-text' : ''}`}
                  style={{ animationName: isHeroVisible ? 'revealText' : 'none', animationDelay: `${0.3 + aboutTranslations.title.split(' ').length * 0.1}s` }}
                >
                  <div className="space-y-4 text-white/80 max-w-2xl">
                    {aboutTranslations.aboutText.map((p: string, i: number) => <p key={i}>{p.replace(/"/g, '')}</p>)}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex items-center justify-center md:justify-end">
              <div className="relative p-8 text-right">
                {/* Bottom-Right Decorative Lines */}
                <div
                  className="absolute bottom-0 right-0 w-0.5 h-24 bg-prt-accent origin-bottom"
                  style={{ transform: 'scaleY(0)', animation: isHeroVisible ? 'drawHeight 0.5s ease-out 0.5s forwards' : 'none' }}
                />
                <div
                  className="absolute bottom-0 right-0 w-24 h-0.5 bg-prt-accent origin-right"
                  style={{ transform: 'scaleX(0)', animation: isHeroVisible ? 'drawWidth 0.5s ease-out 0.5s forwards' : 'none' }}
                />

                <div 
                  className={`text-to-reveal ${isHeroVisible ? 'animate-reveal-text' : ''}`}
                  style={{ animationName: isHeroVisible ? 'revealText' : 'none', animationDelay: '0.7s' }}
                >
                  <blockquote className="italic text-lg max-w-sm text-white/90">
                    "{aboutTranslations.quote}"
                  </blockquote>
                  <p className="mt-4 tracking-[0.4em] text-xs uppercase text-white/70">
                    Influence & Impact
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div ref={storyContainerRef} className="relative h-[450vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Mission Scene */}
          <div ref={missionContainerRef} className="absolute inset-0 flex items-center justify-center text-center transition-opacity duration-75 ease-linear opacity-0">
            <video
              ref={missionVideoRef}
              src="https://videos.pexels.com/video-files/3209211/3209211-hd_1280_720_25fps.mp4"
              preload="auto"
              loop 
              muted 
              playsInline 
              aria-label="Abstract background video for Mission section"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 container mx-auto px-6 max-w-4xl">
              <h2 className="text-5xl font-bold text-prt-accent mb-4">{aboutTranslations.mission.title}</h2>
              <p className="text-2xl text-prt-light-gray italic">"{aboutTranslations.mission.text}"</p>
            </div>
          </div>

          {/* Vision Scene */}
          <div ref={visionContainerRef} className="absolute inset-0 flex items-center justify-center text-center transition-opacity duration-75 ease-linear opacity-0">
            <video
              ref={visionVideoRef}
              src="https://videos.pexels.com/video-files/853889/853889-hd_1280_720_25fps.mp4"
              preload="auto"
              loop 
              muted 
              playsInline 
              aria-label="Abstract background video for Vision section"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 container mx-auto px-6 max-w-4xl">
              <h2 className="text-5xl font-bold text-prt-accent mb-4">{aboutTranslations.vision.title}</h2>
              <p className="text-2xl text-prt-light-gray italic">"{aboutTranslations.vision.text}"</p>
            </div>
          </div>
          
          {/* Core Beliefs Scene - Split Layout */}
          <div ref={beliefsContainerRef} className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-75 ease-linear opacity-0">
            <video
              ref={beliefsVideoRef}
              src="https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4"
              preload="auto"
              loop 
              muted 
              playsInline
              aria-label="Abstract background video for Core Beliefs section"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
            
            <div className={`relative z-10 container mx-auto px-6 h-full flex flex-col justify-center`}>
                
                <div className="w-full max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16 flex-shrink-0">
                        <h2 className="text-3xl md:text-5xl font-bold text-prt-light-gray mb-4">{aboutTranslations.coreBeliefs.title}</h2>
                        <div className="h-1 w-24 bg-prt-accent mx-auto"></div>
                    </div>

                    {/* The List - Two Columns */}
                    <div 
                        className="grid md:grid-cols-2 gap-x-16 gap-y-8" 
                        onMouseLeave={() => setHoveredBeliefIndex(null)}
                    >
                        {/* Left Column */}
                        <div className="space-y-2">
                            {leftBeliefs.map((belief: any, index: number) => (
                                <BeliefItem 
                                    key={index} 
                                    belief={belief} 
                                    index={index} 
                                    realIndex={index} 
                                    hoveredBeliefIndex={hoveredBeliefIndex}
                                    setHoveredBeliefIndex={setHoveredBeliefIndex}
                                />
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-2">
                             {rightBeliefs.map((belief: any, index: number) => (
                                <BeliefItem 
                                    key={index + midIndex} 
                                    belief={belief} 
                                    index={index} 
                                    realIndex={index + midIndex} 
                                    hoveredBeliefIndex={hoveredBeliefIndex}
                                    setHoveredBeliefIndex={setHoveredBeliefIndex}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      <Team />
    </>
  );
};

export default About;