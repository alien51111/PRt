import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-black/30 footer-lines">
      <style>{`
        .footer-lines {
           background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
           background-size: 100% 30px;
        }
      `}</style>
      <div className="container mx-auto px-6 py-8 text-center text-prt-muted-gray">
        <p className="text-xl font-bold text-prt-accent mb-2">PRt</p>
        <p>{t.footer.subtitle}</p>
        <div className="my-4">
            <a href={`mailto:${t.footer.email}`} className="hover:text-prt-accent transition-colors">{t.footer.email}</a>
        </div>
        <p className="text-sm">{t.footer.copyright.replace('{year}', currentYear.toString())}</p>
      </div>
    </footer>
  );
};

export default Footer;