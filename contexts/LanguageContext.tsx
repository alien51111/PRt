import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '../translations';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  setPage: (page: string) => void;
  t: any; 
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: ReactNode, setPage: (page: string) => void }> = ({ children, setPage }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const dir = (language === 'ar' || language === 'ku') ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    
    if (dir === 'rtl') {
      document.body.style.fontFamily = '"Tajawal", sans-serif';
    } else {
      document.body.style.fontFamily = '"IBM Plex Sans", sans-serif';
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    setPage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};