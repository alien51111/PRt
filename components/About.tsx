import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const [beliefsVisible, setBeliefsVisible] = useState(false);
  const beliefsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();
  const { about: aboutTranslations } = t;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBeliefsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (beliefsRef.current) {
      observer.observe(beliefsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const beliefsSection = beliefsRef.current;
    if (!canvas || !beliefsSection) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let shapes: Shape[];
    let animationFrameId: number;

    class Shape {
        x: number;
        y: number;
        size: number;
        opacity: number;
        initialY: number;

        constructor(x: number, y: number, size: number) {
            this.x = x;
            this.y = y;
            this.initialY = y;
            this.size = size;
            this.opacity = Math.random() * 0.4 + 0.1;
        }

        draw() {
          if (!ctx) return;
          ctx.fillStyle = `rgba(188, 231, 201, ${this.opacity})`; // prt-primary
          ctx.beginPath();
          ctx.rect(this.x, this.y, this.size, this.size);
          ctx.fill();
        }

        update(scrollRatio: number) {
            this.y = this.initialY - scrollRatio * 150; 
        }
    }

    const init = () => {
        canvas.width = beliefsSection.offsetWidth;
        canvas.height = beliefsSection.offsetHeight;
        shapes = [];
        const numberOfShapes = (canvas.width * canvas.height) / 15000;
        for (let i = 0; i < numberOfShapes; i++) {
            const size = Math.random() * 3 + 1;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            shapes.push(new Shape(x, y, size));
        }
    };
    
    const animate = (scrollRatio: number) => {
      if(!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach(shape => {
          shape.update(scrollRatio);
          shape.draw();
      });
    };

    const handleScroll = () => {
      if (!beliefsSection) return;
      const { top, height } = beliefsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight && top + height > 0) {
          const scrollRatio = Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + height)));
          animationFrameId = requestAnimationFrame(() => animate(scrollRatio));
      }
    };

    const resizeObserver = new ResizeObserver(() => {
        init();
        handleScroll();
    });
    
    resizeObserver.observe(beliefsSection);
    
    init();
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Section 
      id="about" 
      title={aboutTranslations.title}
      className="bg-grid"
    >
      <style>{`
        .bg-grid {
          background-image: 
            linear-gradient(rgba(188, 231, 201, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(188, 231, 201, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .glitch-container {
          position: relative;
          overflow: hidden;
        }
        .glitch-img {
          transition: filter 0.3s ease;
          filter: grayscale(80%) brightness(0.9);
        }
        .glitch-container:hover .glitch-img {
          filter: grayscale(0%) brightness(1);
        }

        .belief-card .icon-path path,
        .belief-card .icon-path line,
        .belief-card .icon-path circle {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          transition: stroke-dashoffset 0.8s ease-in-out;
        }
        .belief-card:hover .icon-path path,
        .belief-card:hover .icon-path line,
        .belief-card:hover .icon-path circle {
          stroke-dashoffset: 0;
        }
      `}</style>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-prt-light-gray/90 space-y-4 rtl:text-right">
          <p>{aboutTranslations.aboutText}</p>
        </div>
         <div className="md:order-first glitch-container rounded-lg shadow-2xl">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=3542&auto=format&fit=crop" alt="PRt Agency Team" className="rounded-lg w-full h-full object-cover glitch-img"/>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-12 mt-20 max-w-6xl mx-auto rtl:text-right">
        <div className="bg-prt-dark-gray/50 p-8 rounded-lg border border-prt-muted-gray/20">
          <h3 className="text-2xl font-bold text-prt-accent mb-4">{aboutTranslations.mission.title}</h3>
          <p className="text-prt-light-gray/80">{aboutTranslations.mission.text}</p>
        </div>
        <div className="bg-prt-dark-gray/50 p-8 rounded-lg border border-prt-muted-gray/20">
          <h3 className="text-2xl font-bold text-prt-accent mb-4">{aboutTranslations.vision.title}</h3>
          <p className="text-prt-light-gray/80">{aboutTranslations.vision.text}</p>
        </div>
      </div>

      <div className="mt-24 max-w-6xl mx-auto relative isolate" ref={beliefsRef}>
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
        <h3 className="text-3xl font-bold text-center mb-16 text-prt-light-gray">{aboutTranslations.coreBeliefs.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {aboutTranslations.coreBeliefs.items.map((belief, index) => (
            <div 
              key={belief.title} 
              className={`belief-card group flex flex-col items-center justify-center text-center p-8 aspect-square rounded-full bg-black/40 border border-prt-muted-gray/20 backdrop-blur-sm transition-all duration-300 hover:border-prt-accent hover:shadow-2xl hover:shadow-prt-accent/10 hover:-translate-y-2 ${
                beliefsVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {belief.icon && (
                <div 
                  className="mb-4 text-prt-accent transition-transform duration-300 group-hover:scale-110" 
                  dangerouslySetInnerHTML={{ __html: belief.icon.replace('<svg', '<svg class="icon-path"') }} 
                />
              )}
              <h4 className="font-bold text-xl text-prt-light-gray">{belief.title}</h4>
              <p className="mt-2 text-prt-muted-gray text-sm">{belief.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;