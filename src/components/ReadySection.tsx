import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export const ReadySection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  return (
    <section id="ready-section" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="rounded-3xl bg-gradient-to-b from-[#0a0d20] to-[#050713] border border-white/10 p-8 sm:p-16 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.8)] space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6366f1]/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="eyebrow inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
              Competitive Advantage
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white font-display tracking-tight leading-tight">
              Ready To Become More Visible{' '}
              <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
                Than Your Competition?
              </span>
            </h2>

            <div className="space-y-2 text-lg sm:text-xl text-slate-300 font-sans font-light max-w-2xl mx-auto pt-2 leading-relaxed">
              <p>Your company is already competing for attention.</p>
              <p className="text-white font-normal">Your founder brand can become one of its strongest advantages.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#020308]/60 border border-white/5 max-w-lg mx-auto space-y-3 pt-4 text-left">
              <p className="text-xs font-mono text-[#fda4af] uppercase tracking-wider">
                Let’s build a founder marketing system that turns your:
              </p>
              <div className="space-y-2 text-base sm:text-lg text-white font-display font-light">
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
