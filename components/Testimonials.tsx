import React from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const { testimonials: testimonialsTranslations } = t;

    return (
        <Section
            id="testimonials"
            title={testimonialsTranslations.title}
            subtitle={testimonialsTranslations.subtitle}
            className="bg-prt-dark-gray"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsTranslations.items.map((testimonial, index) => (
                    <div 
                        key={index}
                        className="
                            bg-black/20 p-8 border border-prt-muted-gray/20 
                            flex flex-col
                            transition-all duration-300 card-glow
                            animate-fade-in-up"
                        style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
                    >
                        <svg className="w-12 h-12 text-prt-accent/50 mb-4" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.981 19.923c0 2.395-1.874 4.35-4.167 4.35-2.292 0-4.167-1.955-4.167-4.35 0-2.395 1.875-4.35 4.167-4.35 0.94 0 1.563 0.323 2.084 0.958-0.001-2.083-0.002-4.167-0.002-6.25h4.168c-0.001 2.083-0.002 4.167-0.002 6.25 0 0.417-0.033 0.813-0.082 1.188zM25.999 19.923c0 2.395-1.874 4.35-4.167 4.35-2.292 0-4.167-1.955-4.167-4.35 0-2.395 1.875-4.35 4.167-4.35 0.94 0 1.563 0.323 2.084 0.958-0.001-2.083-0.002-4.167-0.002-6.25h4.168c-0.001 2.083-0.002 4.167-0.002 6.25 0 0.417-0.033 0.813-0.082 1.188z"></path>
                        </svg>
                        <blockquote className="flex-grow text-prt-light-gray/90 italic mb-6">
                            "{testimonial.quote}"
                        </blockquote>
                        <footer className="mt-auto">
                            <p className="font-bold text-prt-light-gray">{testimonial.author}</p>
                            <p className="text-sm text-prt-muted-gray">{testimonial.title}</p>
                        </footer>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
