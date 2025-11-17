import React, { useState, useEffect, useRef } from 'react';
import CountUp from './CountUp';
import { useLanguage } from '../contexts/LanguageContext';

const Values: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="values"
            ref={sectionRef}
            className="bg-prt-accent text-prt-dark-gray py-16 md:py-20 bg-hash"
        >
            <style>{`
                .bg-hash {
                    background-image: repeating-linear-gradient(45deg, rgba(48, 51, 45, 0.1) 0, rgba(48, 51, 45, 0.1) 1px, transparent 0, transparent 50%);
                    background-size: 6px 6px;
                }
            `}</style>
            <div className={`container mx-auto px-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {t.valueStats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-4xl md:text-6xl font-extrabold text-prt-dark-gray">
                                {stat.prefix}
                                {isVisible && <CountUp end={stat.value} decimals={stat.decimals} />}
                                {stat.suffix}
                            </div>
                            <p className="mt-2 text-sm md:text-base font-semibold uppercase tracking-wider opacity-80">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;