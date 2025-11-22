import React, { useEffect } from 'react';
import { Insight } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface InsightModalProps {
  insight: Insight;
  onClose: () => void;
}

const InsightModal: React.FC<InsightModalProps> = ({ insight, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-0 md:p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .scan-lines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
          pointer-events: none;
        }
      `}</style>

      {/* Modal Content Container */}
      <div 
        className="
            relative w-full max-w-5xl h-full md:h-[85vh] bg-[#0a0a0a] 
            border-y md:border border-prt-muted-gray/20 md:rounded-sm 
            overflow-hidden shadow-2xl shadow-black
            animate-slide-up flex flex-col md:flex-row
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decoration: Scan Lines */}
        <div className="absolute inset-0 scan-lines opacity-30 z-0 pointer-events-none"></div>
        
        {/* Close Button */}
        <button 
            onClick={onClose} 
            className="absolute top-6 right-6 z-50 text-prt-muted-gray hover:text-prt-accent transition-colors bg-black/50 p-2 rounded-full md:bg-transparent md:p-0"
            aria-label="Close"
        >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        {/* Left Side: Expert Image & Stats */}
        <div className="w-full md:w-2/5 h-64 md:h-full relative group">
             <div className="absolute inset-0 bg-prt-accent/10 mix-blend-overlay z-10"></div>
             <img 
                src={insight.expertImage} 
                alt={insight.expertName} 
                className="w-full h-full object-cover filter grayscale contrast-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
             
             {/* Overlay Text on Image */}
             <div className="absolute bottom-0 left-0 p-8 z-20 rtl:text-right w-full">
                 <p className="text-prt-accent font-mono text-xs mb-2 tracking-widest uppercase">:: SYSTEM ID: {insight.expertName.split(' ')[0].toUpperCase()} ::</p>
                 <h2 className="text-3xl font-bold text-white mb-1">{insight.expertName}</h2>
                 <p className="text-prt-muted-gray text-sm uppercase tracking-wider font-bold">{insight.expertTitle}</p>
             </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/5 h-full overflow-y-auto custom-scrollbar relative bg-[#0a0a0a]">
             <div className="p-8 md:p-12 pt-8 relative z-10">
                {/* Header Metadata */}
                <div className="flex items-center justify-between border-b border-prt-muted-gray/10 pb-6 mb-8">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-prt-accent rounded-full animate-pulse"></span>
                        <span className="text-xs font-mono text-prt-muted-gray uppercase tracking-widest">Transmission Decoded</span>
                    </div>
                    <span className="text-xs font-mono text-prt-dark-green uppercase">SECURE CONNECTION</span>
                </div>

                {/* Topic Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight rtl:text-right">
                    {insight.topic}
                </h3>

                {/* Article Content */}
                <div className="space-y-6 text-prt-light-gray/80 text-lg leading-relaxed rtl:text-right">
                    {insight.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>

                {/* Footer / CTA */}
                <div className="mt-16 pt-8 border-t border-prt-muted-gray/10 flex flex-col md:flex-row justify-between items-center gap-4 rtl:flex-row-reverse">
                    <p className="text-xs font-mono text-prt-muted-gray">PRt INTELLIGENCE DATABASE</p>
                    <button 
                        onClick={onClose}
                        className="px-8 py-3 border border-prt-accent text-prt-accent hover:bg-prt-accent hover:text-black transition-all duration-300 uppercase text-sm font-bold tracking-widest"
                    >
                        Close Protocol
                    </button>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default InsightModal;