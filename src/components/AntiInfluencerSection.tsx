import React from 'react';
import { XCircle, CheckCircle2, Shield, Lightbulb } from 'lucide-react';

export const AntiInfluencerSection: React.FC = () => {
  const KNOWLEDGE_POINTS = [
    "Your experience.",
    "Your perspective.",
    "Your story.",
    "Your expertise.",
    "Your company.",
    "Your category.",
    "Your beliefs.",
    "Your lessons."
  ];

  return (
    <section id="anti-influencer" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#6366f1]" />
            Zero Vanity • 100% Commercial Substance
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            Founder Marketing Is Not About{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Becoming An Influencer
            </span>
          </h2>
        </div>

        {/* 3 Stripped Away Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-3xl bg-[#050713]/70 border border-red-500/15 backdrop-blur-xl space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-left">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="font-display text-white text-xl">
              You don’t need to dance on trends.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans font-light leading-relaxed border-t border-white/5 pt-3">
              Chasing viral audio and algorithm fads harms executive credibility and attracts low-value tire-kickers.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#050713]/70 border border-red-500/15 backdrop-blur-xl space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-left">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="font-display text-white text-xl">
              You don’t need to post motivational quotes every morning.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans font-light leading-relaxed border-t border-white/5 pt-3">
              Empty platitudes do not convince enterprise buyers or institutional investors of your ability to execute.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#050713]/70 border border-red-500/15 backdrop-blur-xl space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-left">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="font-display text-white text-xl">
              And you definitely don’t need to turn your life into content.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans font-light leading-relaxed border-t border-white/5 pt-3">
              Your personal privacy remains completely protected. We build authority purely around commercial substance.
            </p>
          </div>
        </div>

        {/* The Core Shift */}
        <div className="rounded-3xl bg-[#050713]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative overflow-hidden text-center">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#6366f1]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-[#fda4af] text-xs font-bold uppercase tracking-wider font-mono">
              <Lightbulb className="w-4 h-4" /> The Strategic Truth
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-display leading-tight">
              Founder Marketing is about building strategic visibility around what you already know.
            </h3>

            {/* 8 Knowledge points verbatim */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-left">
              {KNOWLEDGE_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0a0d20]/80 border border-white/5 flex items-center gap-2.5 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#6366f1] shrink-0" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-sans font-light pt-4 max-w-2xl mx-auto">
              We turn those into a content system that makes the right people notice you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
