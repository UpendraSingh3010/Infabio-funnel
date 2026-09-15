import React from 'react';
import { ShieldAlert, Sparkles, UserX, CheckCircle2 } from 'lucide-react';

export const AuthenticitySection: React.FC = () => {
  const FAKE_PATTERNS = [
    "Generic.",
    "Over-polished.",
    "Corporate.",
    "AI-sounding.",
    "Forgettable."
  ];

  const AMPLIFY_POINTS = [
    "Your tone.",
    "Your opinions.",
    "Your experience.",
    "Your vocabulary.",
    "Your worldview."
  ];

  return (
    <section id="authenticity" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-[#fda4af]" />
            Radical Authenticity
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            We Don’t Ghostwrite A{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Fake Version Of You
            </span>
          </h2>
          <p className="text-2xl font-display font-light text-[#fda4af]">
            This matters.
          </p>
          <p className="text-base sm:text-lg text-slate-300 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Founder marketing fails when the content sounds like it could have been written for anyone.
          </p>
        </div>

        {/* The 5 Bad Trappings */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-16">
          {FAKE_PATTERNS.map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300 flex items-center gap-2 font-display text-lg"
            >
              <UserX className="w-4 h-4 text-red-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Our Job Box */}
        <div className="rounded-3xl bg-[#050713]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.6)] text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-xl sm:text-2xl text-slate-400 font-display font-light">
              Our job is not to manufacture a personality.
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-light text-white">
              Our job is to amplify the one you already have.
            </h3>
          </div>

          {/* 5 Amplified Elements */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {AMPLIFY_POINTS.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0a0d20]/80 border border-white/5 flex flex-col items-center justify-center space-y-2 text-center"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-white font-sans">{pt}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#6366f1]/20 to-[#fda4af]/20 border border-white/10 mt-6">
            <p className="text-xl sm:text-2xl font-display font-light text-white italic">
              Your content should sound like you on your best day.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
