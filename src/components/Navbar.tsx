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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isLight
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)] py-3 sm:py-3.5'
            : 'bg-[#020308]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)] py-3 sm:py-3.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with prominent visibility */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          <div className="relative flex items-center">
            <img
              src={isLight ? "/infabio-logo-light.webp" : "/infabio-logo-trimmed.webp"}
              alt="INFABIO"
              className={`h-10 sm:h-12 md:h-13 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isLight
                  ? 'filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]'
                  : 'filter drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]'
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

        {/* Compact, Frosted Island for Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center px-4 py-1.5 rounded-full border backdrop-blur-md shadow-inner gap-5 xl:gap-7 transition-colors duration-300 ${
          isLight
            ? 'bg-slate-900/[0.04] border-slate-900/10'
            : 'bg-white/[0.04] border-white/10'
        }`}>
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(link.target)}
              className={`text-[11px] xl:text-xs tracking-wider uppercase font-medium transition-colors cursor-pointer py-1 font-mono whitespace-nowrap ${
                isLight
                  ? 'text-slate-600 hover:text-slate-900 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]'
                  : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
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
            className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center ${
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

          {/* Primary CTA */}
          <button
            onClick={onOpenAuditModal}
            id="nav-cta-button"
            className="btn-primary text-xs px-5 py-2.5 rounded-full uppercase tracking-wider font-bold hidden sm:inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25 hover:shadow-[#6366f1]/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className={`lg:hidden p-2 rounded-xl border transition-colors ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-800'
                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top duration-200 ${
          isLight
            ? 'bg-white/98 border-slate-200 text-slate-900 shadow-xl'
            : 'bg-[#050713]/98 border-white/10 text-white'
        }`}>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(link.target)}
                className={`text-left text-sm uppercase tracking-wider py-2 font-mono border-b ${
                  isLight
                    ? 'text-slate-700 hover:text-slate-950 border-slate-100'
                    : 'text-slate-300 hover:text-white border-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full btn-primary text-xs py-3 rounded-full uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build My Founder Brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
