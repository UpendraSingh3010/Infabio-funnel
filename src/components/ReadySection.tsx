import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ReadySection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

  return (
    <section id="ready-section" className={`py-24 md:py-32 bg-transparent border-t relative transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className={`rounded-3xl p-8 sm:p-16 backdrop-blur-2xl space-y-8 relative overflow-hidden transition-all duration-300 ${
          isLight 
            ? 'bg-gradient-to-br from-indigo-50/90 via-white to-pink-50/70 border border-indigo-200/90 shadow-[0_30px_70px_rgba(99,102,241,0.12)]' 
            : 'bg-gradient-to-b from-[#0a0d20] to-[#050713] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)]'
        }`}>
          <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] pointer-events-none ${
            isLight ? 'from-indigo-500/10 via-transparent to-transparent' : 'from-[#6366f1]/15 via-transparent to-transparent'
          }`} />

          <div className="relative z-10 space-y-4">
            <span className="eyebrow inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
              Competitive Advantage
            </span>

            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light font-display tracking-tight leading-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              Ready To Become More Visible{' '}
              <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
                Than Your Competition?
              </span>
            </h2>

            <div className={`space-y-2 text-lg sm:text-xl font-sans font-light max-w-2xl mx-auto pt-2 leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              <p>Your company is already competing for attention.</p>
              <p className={isLight ? 'text-slate-900 font-medium' : 'text-white font-normal'}>
                Your founder brand can become one of its strongest advantages.
              </p>
            </div>

            <div className={`p-6 rounded-2xl max-w-lg mx-auto space-y-3 pt-4 text-left transition-all ${
              isLight 
                ? 'bg-white/85 border border-indigo-100 shadow-md' 
                : 'bg-[#020308]/60 border border-white/5'
            }`}>
              <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                isLight ? 'text-pink-600' : 'text-[#fda4af]'
              }`}>
                Let’s build a founder marketing system that turns your:
              </p>
              <div className={`space-y-2 text-base sm:text-lg font-display font-light ${
                isLight ? 'text-slate-800' : 'text-white'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                  <span>Experience into content.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fda4af]" />
                  <span>Content into authority.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                  <span>Authority into opportunities.</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAuditModal}
                className="btn-primary text-xs px-10 py-4.5 rounded-full uppercase tracking-widest font-black inline-flex items-center gap-3 cursor-pointer shadow-[0_10px_35px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_45px_rgba(99,102,241,0.6)]"
              >
                <span>BUILD MY FOUNDER BRAND</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
