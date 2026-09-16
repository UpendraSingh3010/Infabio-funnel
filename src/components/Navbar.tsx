import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Why', target: 'judged-section' },
    { label: 'The System', target: 'the-system' },
    { label: 'Deliverables', target: 'what-we-handle' },
    { label: "Who It's For", target: 'who-is-this-for' },
    { label: 'Audit', target: 'founder-audit' },
  ];

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none"
    >
      {/* Floating Header Box Container */}
      <div className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-300 rounded-2xl sm:rounded-full relative overflow-hidden ${
        isLight
          ? scrolled
            ? 'bg-white/95 backdrop-blur-2xl border border-indigo-200/90 shadow-[0_15px_35px_rgba(99,102,241,0.12),0_2px_8px_rgba(0,0,0,0.06)] py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_10px_30px_rgba(99,102,241,0.08),0_1px_3px_rgba(0,0,0,0.04)] py-2.5 sm:py-3.5 px-4 sm:px-6'
          : scrolled
            ? 'bg-[#050713]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-[#050713]/85 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] py-2.5 sm:py-3.5 px-4 sm:px-6'
      }`}>
        
        {/* Subtle Top Glass Reflection Line */}
        <div className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${
          isLight 
            ? 'from-transparent via-indigo-400/40 to-transparent' 
            : 'from-transparent via-white/20 to-transparent'
        } pointer-events-none`} />

        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              id="nav-logo"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="relative flex items-center">
                <img
                  src={isLight ? "/infabio-logo-light.webp" : "/infabio-logo-trimmed.webp"}
                  alt="INFABIO"
                  className={`h-9 sm:h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                    isLight
                      ? 'filter drop-shadow-[0_2px_8px_rgba(99,102,241,0.25)]'
                      : 'filter drop-shadow-[0_0_18px_rgba(99,102,241,0.45)]'
                  }`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (isLight && !target.src.includes('infabio.com')) {
                      target.src = 'https://www.infabio.com/infabio-logo-light.webp';
                    } else if (!target.src.includes('infabio-logo-trimmed.webp')) {
                      target.src = '/infabio-logo-trimmed.webp';
                    }
                  }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links Island */}
          <nav className={`hidden lg:flex items-center px-4 py-1.5 rounded-full border backdrop-blur-md gap-4 xl:gap-6 transition-colors duration-300 ${
            isLight
              ? 'bg-slate-100/80 border-slate-200/80 shadow-inner'
              : 'bg-white/[0.04] border-white/10 shadow-inner'
          }`}>
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(link.target)}
                className={`text-[11px] xl:text-xs tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer py-1 px-2 rounded-full font-mono whitespace-nowrap ${
                  isLight
                    ? 'text-slate-600 hover:text-indigo-600 hover:bg-white shadow-none hover:shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA & Theme Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-button"
              className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 shadow-sm hover:text-slate-950 hover:scale-105'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:text-amber-200 hover:scale-105'
              }`}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle theme"
            >
              {isLight ? (
                <Moon className="w-4 h-4 transition-transform rotate-0 hover:-rotate-12 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 transition-transform rotate-0 hover:rotate-45 text-amber-300" />
              )}
            </button>

            {/* Primary Header CTA Button */}
            <button
              onClick={onOpenAuditModal}
              id="nav-cta-button"
              className="btn-primary text-xs px-4 sm:px-5 py-2 sm:py-2.5 rounded-full uppercase tracking-wider font-bold hidden sm:inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
              <span>Book Strategy Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className={`lg:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown (Nested cleanly within the header box) */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-3 pt-3 border-t space-y-3 animate-in slide-in-from-top-2 duration-200 ${
            isLight
              ? 'border-slate-200 text-slate-900'
              : 'border-white/10 text-white'
          }`}>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.target)}
                  className={`text-left text-xs uppercase tracking-wider py-2 px-3 rounded-lg font-mono transition-colors ${
                    isLight
                      ? 'text-slate-700 hover:bg-slate-100'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full btn-primary text-xs py-3 rounded-full uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#6366f1]/25"
              >
                <span>Book My Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
