import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

interface HeaderProps {
  page: string;
  setPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ page, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, newPage: string) => {
    e.preventDefault();
    setPage(newPage);
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
    <header className="sticky top-0 z-50 bg-black/80 shadow-lg backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-prt-accent" onClick={(e) => handleNavClick(e, 'home')}>
            <Logo />
          </a>
          
          <nav className="hidden md:flex items-center">
            {t.navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`transition-colors duration-300 px-4 whitespace-nowrap ${
                  page === link.id ? 'text-prt-accent font-bold' : 'text-prt-light-gray hover:text-prt-accent'
                }`}
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
          <nav className="md:hidden mt-4 bg-prt-dark-gray/95 backdrop-blur-sm p-4">
            <div className="flex flex-col space-y-4">
              {t.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
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