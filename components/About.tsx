import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Team from './Team';

const About: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [activeScene, setActiveScene] = useState(0); // 0: initial, 1: mission, 2: vision, 3: beliefs
  
  const { t } = useLanguage();
  const { about: aboutTranslations } = t;
  const lastWheelTime = useRef(0);

  useEffect(() => {
    // Trigger hero animations on mount
    const timer = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    // Throttle scroll events to create a deliberate "step" between scenes
    if (now - lastWheelTime.current < 800) {
      e.preventDefault();
      return;
    }
    lastWheelTime.current = now;

    const isScrollingDown = e.deltaY > 0;

    if (isScrollingDown) {
      // If we are not on the last scene, prevent default scroll and go to next scene
      if (activeScene < 3) {
        e.preventDefault();
        setActiveScene(prev => prev + 1);
      } else {
        // If we are on the last scene, scroll the user down to the next section ('team')
        const teamSection = document.getElementById('team');
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else { // Scrolling up
      // If we are not on the first scene, prevent default scroll and go to previous scene
      if (activeScene > 0) {
        e.preventDefault();
        setActiveScene(prev => prev - 1);
      } else {
        // If we are on the first scene, scroll the user up to the top 'about' section
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  type SceneContentProps = {
    sceneId: number;
    children: React.ReactNode;
  };
  const SceneContent: React.FC<SceneContentProps> = ({ sceneId, children }) => (
    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${activeScene === sceneId ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
      {children}
    </div>
  );

  return (
    <>
      <div id="about" className="relative min-h-screen flex items-center bg-black text-white py-20 md:py-32 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/736x/b9/4c/37/b94c3789d565f66b695066fd8e0e3184.jpg" 
            alt="Abstract dark textured background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            
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
                  {aboutTranslations.title.split(' ').map((word, index) => (
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

      <div className="relative h-screen bg-black" onWheel={handleWheel}>
        <div className="h-full w-full overflow-hidden">
          {/* Background Media */}
          <div className="absolute inset-0">
            <video
              src="https://www.pexels.com/download/video/3209211/"
              autoPlay loop muted playsInline aria-label="Abstract background video for Mission section"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeScene === 1 ? 'opacity-100' : 'opacity-0'}`}
            />
            <video
              src="https://www.pexels.com/download/video/6774646/"
              autoPlay loop muted playsInline aria-label="Abstract background video for Vision section"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeScene === 2 ? 'opacity-100' : 'opacity-0'}`}
            />
            <video
              src="https://www.pexels.com/download/video/3129576/"
              autoPlay loop muted playsInline
              aria-label="Abstract background video of city night traffic for Core Beliefs section"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeScene === 3 ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
              (activeScene === 1 || activeScene === 2) ? 'opacity-60' :
              activeScene === 3 ? 'opacity-70' : 
              activeScene === 0 ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>

          {/* Content Scenes */}
          <div className="relative h-full w-full">
             <SceneContent sceneId={1}>
                <div className="container mx-auto px-6 w-full flex justify-start">
                    <div className="md:w-1/2">
                        <h2 className={`text-5xl font-bold text-prt-accent mb-4 transition-opacity duration-700 ease-out ${activeScene === 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>{aboutTranslations.mission.title}</h2>
                        <p className={`text-xl text-prt-light-gray italic transition-opacity duration-700 ease-out ${activeScene === 1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>"{aboutTranslations.mission.text}"</p>
                    </div>
                </div>
             </SceneContent>

             <SceneContent sceneId={2}>
                <div className="container mx-auto px-6 w-full flex justify-start">
                    <div className="md:w-1/2">
                        <h2 className={`text-5xl font-bold text-prt-accent mb-4 transition-opacity duration-700 ease-out ${activeScene === 2 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>{aboutTranslations.vision.title}</h2>
                        <p className={`text-xl text-prt-light-gray italic transition-opacity duration-700 ease-out ${activeScene === 2 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>"{aboutTranslations.vision.text}"</p>
                    </div>
                </div>
             </SceneContent>
             
             <SceneContent sceneId={3}>
                <div className="container mx-auto px-6 w-full flex flex-col items-center">
                    <h2 className={`text-5xl font-bold text-prt-light-gray mb-16 transition-opacity duration-700 ease-out ${activeScene === 3 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>{aboutTranslations.coreBeliefs.title}</h2>
                    <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-x-24 gap-y-12">
                      <div className="space-y-12">
                        {aboutTranslations.coreBeliefs.items.slice(0, 3).map((belief, index) => (
                          <div key={belief.title} className={`flex items-start space-x-4 rtl:space-x-reverse text-left transition-opacity duration-700 ease-out ${activeScene === 3 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${500 + index * 150}ms` }}>
                            {belief.icon && <div className="w-12 h-12 flex-shrink-0 text-prt-accent" dangerouslySetInnerHTML={{ __html: belief.icon }} />}
                            <div>
                              <h4 className="font-bold text-xl text-prt-light-gray mb-2">{belief.title}</h4>
                              <p className="text-prt-muted-gray text-sm italic">"{belief.description}"</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-12">
                        {aboutTranslations.coreBeliefs.items.slice(3, 6).map((belief, index) => (
                          <div key={belief.title} className={`flex items-start space-x-4 rtl:space-x-reverse text-left transition-opacity duration-700 ease-out ${activeScene === 3 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${500 + (index + 3) * 150}ms` }}>
                            {belief.icon && <div className="w-12 h-12 flex-shrink-0 text-prt-accent" dangerouslySetInnerHTML={{ __html: belief.icon }} />}
                            <div>
                              <h4 className="font-bold text-xl text-prt-light-gray mb-2">{belief.title}</h4>
                              <p className="text-prt-muted-gray text-sm italic">"{belief.description}"</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
             </SceneContent>
          </div>
        </div>
      </div>
      
      <Team />
    </>
  );
};

export default About;
