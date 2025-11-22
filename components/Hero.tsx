import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t, setPage } = useLanguage();

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const moveArea = button.parentElement;
    if (!moveArea) return;

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = button.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const radius = 150;

        if (distance < radius) {
            const pullFactor = 1 - (distance / radius);
            const moveX = deltaX * pullFactor * 0.5;
            const moveY = deltaY * pullFactor * 0.5;
            button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        } else {
            button.style.transform = 'translate(0, 0) scale(1)';
        }
    };

    const handleMouseLeave = () => {
        button.style.transform = 'translate(0, 0) scale(1)';
    };

    moveArea.addEventListener('mousemove', handleMouseMove);
    moveArea.addEventListener('mouseleave', handleMouseLeave);
    
    // Ensure video plays
    if(videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently ignore autoplay errors (e.g. AbortError, NotAllowedError)
        // caused by browser policies or power saving modes.
      });
    }

    return () => {
        moveArea.removeEventListener('mousemove', handleMouseMove);
        moveArea.removeEventListener('mouseleave', handleMouseLeave);
        if(button) button.style.transform = 'translate(0, 0) scale(1)';
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPage('contact');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          ref={videoRef}
          src="https://videos.pexels.com/video-files/3141208/3141208-hd_1920_1080_25fps.mp4" 
          poster="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&auto=format&fit=crop"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          aria-label="Abstract background video of plexus lines."
        ></video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-prt-light-gray leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          {t.hero.title.part1} <span className="text-prt-accent">{t.hero.title.highlighted}</span> {t.hero.title.part2}
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-prt-light-gray/80 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          {t.hero.subtitle}
        </p>

        <a 
          ref={buttonRef}
          href="#contact" 
          onClick={handleButtonClick}
          className="mt-10 border-2 border-prt-accent text-prt-accent font-bold py-3 px-8 hover:bg-prt-accent hover:text-prt-dark-gray transition-transform duration-200 ease-out animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          {t.hero.button}
        </a>
      </div>
    </section>
  );
};

export default Hero;