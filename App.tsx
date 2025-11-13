import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';
import Clients from './components/Clients';
import Careers from './components/Careers';
import JobApplication from './components/JobApplication';
import { LanguageProvider } from './contexts/LanguageContext';
import { Job } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [applyingForJob, setApplyingForJob] = useState<Job | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, applyingForJob]);

  const handleSetPage = (newPage: string) => {
    setApplyingForJob(null);
    setPage(newPage);
  };

  const renderPage = () => {
    if (applyingForJob) {
      return <JobApplication job={applyingForJob} onBack={() => setApplyingForJob(null)} />;
    }

    switch(page) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'careers':
        return <Careers onApply={setApplyingForJob} />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Clients />
            <Values />
          </>
        );
    }
  };

  return (
    <LanguageProvider setPage={handleSetPage}>
      <div className="bg-prt-dark-gray text-prt-light-gray font-sans antialiased">
        <Spotlight />
        <Header page={page} setPage={handleSetPage} />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;