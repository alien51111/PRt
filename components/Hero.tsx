import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[];
    const mouse = { x: -200, y: -200, radius: 150 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      history: {x: number, y: number}[];

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = `rgba(203, 255, 8, ${Math.random() * 0.5 + 0.2})`;
        this.history = [{x: this.x, y: this.y}];
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        
        let lastPoint = this.history[0];
        ctx.moveTo(lastPoint.x, lastPoint.y);
        for(let i = 1; i < this.history.length; i++) {
            ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.stroke();
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius && distance > 0) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.speedX -= forceDirectionX * force * 0.5;
            this.speedY -= forceDirectionY * force * 0.5;
        }

        this.speedX *= 0.98;
        this.speedY *= 0.98;

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width + 5) this.x = -5;
        if (this.x < -5) this.x = canvas.width + 5;
        if (this.y > canvas.height + 5) this.y = -5;
        if (this.y < -5) this.y = canvas.height + 5;
        
        this.history.push({x: this.x, y: this.y});
        if (this.history.length > 10) {
            this.history.shift();
        }
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 25000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();

    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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

    return () => {
        moveArea.removeEventListener('mousemove', handleMouseMove);
        moveArea.removeEventListener('mouseleave', handleMouseLeave);
        if(button) button.style.transform = 'translate(0, 0) scale(1)';
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden text-center">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      
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
          className="mt-10 border-2 border-prt-accent text-prt-accent font-bold py-3 px-8 rounded-full hover:bg-prt-accent hover:text-prt-dark-gray transition-transform duration-200 ease-out animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          {t.hero.button}
        </a>
      </div>
    </section>
  );
};

export default Hero;