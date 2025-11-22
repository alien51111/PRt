import React, { useState, useEffect } from 'react';
import Section from './Section';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const { testimonials: testimonialsTranslations } = t;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const total = testimonialsTranslations.items.length;

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % total);
            setIsAnimating(false);
        }, 400); // Wait for exit animation
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev - 1 + total) % total);
            setIsAnimating(false);
        }, 400);
    };

    return (
        <Section
            id="testimonials"
            title="" 
            className="bg-prt-dark-gray relative overflow-hidden py-24 md:py-40"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Left Column: Static Header & Controls */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[200px]">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            {testimonialsTranslations.title}
                        </h2>
                        <div className="h-1 w-20 bg-prt-accent mb-8"></div>
                        <p className="text-prt-muted-gray text-lg leading-relaxed">
                            {testimonialsTranslations.subtitle}
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden lg:flex gap-4 mt-12">
                        <button 
                            onClick={handlePrev}
                            className="w-14 h-14 border border-prt-muted-gray/30 text-prt-light-gray hover:bg-prt-accent hover:text-black hover:border-prt-accent transition-all duration-300 flex items-center justify-center group"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button 
                            onClick={handleNext}
                            className="w-14 h-14 border border-prt-muted-gray/30 text-prt-light-gray hover:bg-prt-accent hover:text-black hover:border-prt-accent transition-all duration-300 flex items-center justify-center group"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Column: The Testimonial Slider */}
                <div className="lg:col-span-8 relative">
                    
                    {/* Giant Quote Mark Background */}
                    <div className="absolute -top-20 -left-10 text-[200px] leading-none text-prt-accent opacity-10 font-serif select-none pointer-events-none">
                        &ldquo;
                    </div>

                    <div className="relative min-h-[300px] flex flex-col justify-center">
                        {/* Content Switcher */}
                        <div 
                            className={`transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        >
                            <blockquote className="text-2xl md:text-4xl font-light italic text-prt-light-gray leading-snug mb-10 relative z-10">
                                "{testimonialsTranslations.items[activeIndex].quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-prt-muted-gray"></div>
                                <div>
                                    <p className="text-xl font-bold text-prt-accent">
                                        {testimonialsTranslations.items[activeIndex].author}
                                    </p>
                                    <p className="text-sm text-prt-muted-gray uppercase tracking-wider">
                                        {testimonialsTranslations.items[activeIndex].title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar (Mobile/All) */}
                    <div className="mt-12 flex items-center gap-2">
                        {testimonialsTranslations.items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (isAnimating || activeIndex === index) return;
                                    setIsAnimating(true);
                                    setTimeout(() => {
                                        setActiveIndex(index);
                                        setIsAnimating(false);
                                    }, 400);
                                }}
                                className={`h-1 transition-all duration-300 ${activeIndex === index ? 'w-12 bg-prt-accent' : 'w-4 bg-prt-muted-gray/30 hover:bg-prt-muted-gray'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                     {/* Mobile Navigation Buttons */}
                     <div className="flex lg:hidden gap-4 mt-8">
                        <button 
                            onClick={handlePrev}
                            className="w-12 h-12 border border-prt-muted-gray/30 text-prt-light-gray active:bg-prt-accent active:text-black transition-colors flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button 
                            onClick={handleNext}
                            className="w-12 h-12 border border-prt-muted-gray/30 text-prt-light-gray active:bg-prt-accent active:text-black transition-colors flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Testimonials;