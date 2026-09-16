import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`relative border-t pt-16 pb-12 overflow-hidden transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#020308] border-white/5 text-white'
    }`}>
      {/* Background ambient decorative glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[140px] pointer-events-none rounded-full ${
        isLight ? 'bg-[#6366f1]/5' : 'bg-[#6366f1]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b ${
          isLight ? 'border-slate-200' : 'border-white/5'
        }`}>
          
          {/* Brand Info & Mission */}
          <div className="md:col-span-6 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <img
                src={isLight ? "/infabio-logo-light.webp" : "/infabio-logo-trimmed.webp"}
                alt="INFABIO"
                className={`h-10 w-auto object-contain ${
                  isLight
                    ? 'filter drop-shadow-[0_2px_8px_rgba(99,102,241,0.2)]'
                    : 'filter drop-shadow-[0_0_15px_rgba(99,102,241,0.35)]'
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

            <div className="space-y-1">
              <p className="text-xl sm:text-2xl font-display font-light text-transparent bg-clip-text bg-brand-gradient italic">
                Building brands around the people building businesses.
              </p>
            </div>

            <p className={`text-sm font-sans font-light leading-relaxed max-w-lg ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              We help visionary founders, CXOs, and entrepreneurs build visibility, authority, and demand through strategic founder-led marketing.
            </p>

            {/* Strategic Locations */}
            <div className="pt-2 space-y-1.5">
              <div className={`flex items-center gap-2 text-xs ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                <MapPin className="w-3.5 h-3.5 text-[#6366f1]" />
                <span><strong>HQ & Strategy:</strong> Gurugram, NCR, India</span>
              </div>
              <div className={`flex items-center gap-2 text-xs ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                <MapPin className="w-3.5 h-3.5 text-[#fda4af]" />
                <span><strong>Creative & Growth Division:</strong> Jaipur, India</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              The Funnel
            </h4>
            <ul className={`space-y-2.5 text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              <li>
                <button onClick={() => scrollToSection('judged-section')} className={`transition-colors cursor-pointer ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
                  Why Founder Brand
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('anti-influencer')} className={`transition-colors cursor-pointer ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
                  The Anti-Influencer Model
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('benefits')} className={`transition-colors cursor-pointer ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
                  Commercial Benefits
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('content-engine')} className={`transition-colors cursor-pointer ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
                  Content Engine System
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('what-we-handle')} className={`transition-colors cursor-pointer ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
                  What We Handle
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('the-system')} className={`transition-colors cursor-pointer ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
                  6-Step System
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('multiplier')} className={`transition-colors cursor-pointer ${isLight ? 'hover:text-slate-900' : 'hover:text-white'}`}>
                  Asset Multiplier
                </button>
              </li>
            </ul>
          </div>

          {/* Action & Contact */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-widest ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Get Started
            </h4>
            <p className={`text-xs font-sans font-light ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Turn your experience into content, content into authority, and authority into high-value opportunities.
            </p>
            <button
              onClick={onOpenAuditModal}
              className="btn-primary text-xs w-full py-3 rounded-full uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/20"
            >
              <span>Book Strategy Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className={`pt-2 text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
              team@infabio.com
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono gap-6 ${
          isLight ? 'text-slate-500' : 'text-slate-500'
        }`}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Infabio Marketing Defense Agency. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span className="hover:underline cursor-pointer">NDA Protected</span>
            </div>
          </div>

          {/* Site Credits */}
          <div className="flex items-center gap-5 shrink-0 justify-center md:justify-end">
            <a
              href="https://fabulousmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-all hover:scale-105"
              title="Fabulous Media"
            >
              <img
                src={isLight ? "/fabulous-logo-dark.webp" : "/fabulous-logo.webp"}
                alt="Fabulous Media"
                className={`h-6 w-auto object-contain transition-opacity ${
                  isLight ? 'opacity-90 hover:opacity-100' : 'opacity-65 hover:opacity-100'
                }`}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (isLight && !target.src.includes('fabulous-logo.webp')) {
                    target.src = '/fabulous-logo.webp';
                    target.style.filter = 'invert(1) hue-rotate(180deg)';
                  }
                }}
              />
            </a>
            <span className={`h-3.5 w-[1px] ${isLight ? 'bg-slate-300' : 'bg-white/15'}`} />
            <a
              href="https://gocommercially.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-all hover:scale-105"
              title="GoCommercially"
            >
              <img
                src={isLight ? "/gocommercially-logo-dark.webp" : "/gocommercially-logo.webp"}
                alt="GoCommercially"
                className={`h-5 w-auto object-contain transition-opacity ${
                  isLight ? 'opacity-90 hover:opacity-100' : 'opacity-65 hover:opacity-100'
                }`}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (isLight && !target.src.includes('gocommercially-logo.webp')) {
                    target.src = '/gocommercially-logo.webp';
                    target.style.filter = 'invert(1)';
                  }
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
