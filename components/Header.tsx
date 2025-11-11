import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const LanguageSwitcher = ({ isMobile = false }) => (
    <div className={`flex items-center space-x-4 text-sm text-prt-muted-gray ${isMobile ? 'justify-center pt-4 border-t border-prt-muted-gray/20' : ''}`}>
        <button onClick={() => setLanguage('en')} className={`transition-colors ${language === 'en' ? 'text-prt-accent font-bold' : 'hover:text-white'}`}>EN</button>
        <span className="opacity-50">|</span>
        <button onClick={() => setLanguage('ar')} className={`transition-colors ${language === 'ar' ? 'text-prt-accent font-bold' : 'hover:text-white'}`}>AR</button>
        <span className="opacity-50">|</span>
        <button onClick={() => setLanguage('ku')} className={`transition-colors ${language === 'ku' ? 'text-prt-accent font-bold' : 'hover:text-white'}`}>KU</button>
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-black/80 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-prt-accent tracking-wider" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            PRt
          </a>
          
          <nav className="hidden md:flex items-center">
            {t.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-prt-light-gray hover:text-prt-accent transition-colors duration-300 px-4 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-prt-light-gray focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-prt-dark-gray/95 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {t.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-prt-light-gray hover:text-prt-accent transition-colors duration-300 text-center py-2"
                >
                  {link.name}
                </a>
              ))}
              <LanguageSwitcher isMobile={true} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;