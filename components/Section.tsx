import React, { useState, useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-20 md:py-32 scroll-mt-24 ${className}`}>
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block relative p-4">
             <h2 className="text-3xl md:text-5xl font-bold text-prt-light-gray">
                {title}
             </h2>
          </div>
          {subtitle && (
            <p className="mt-4 max-w-3xl mx-auto text-lg text-prt-muted-gray">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;