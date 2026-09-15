import React from 'react';
import { Sparkles, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const CategoryVoiceSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const TRIGGERS = [
    "A solution.",
    "A partner.",
    "A vendor.",
    "An expert.",
    "An employer.",
    "An investment opportunity.",
    "Or simply an opinion they trust."
  ];

  const COMPOUND_STEPS = [
    { title: "Every post adds credibility.", sub: "Proving depth over noise with each published breakdown." },
    { title: "Every video increases familiarity.", sub: "Building psychological trust before the first pitch." },
    { title: "Every insight strengthens authority.", sub: "Cementing your contrarian category position." },
    { title: "Every conversation creates another opportunity.", sub: "Turning casual readers into strategic inbound partners." },
  ];

  return (
    <section id="category-voice" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: From Invisible Founder To Category Voice */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
            Mindshare Dominance
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            From Invisible Founder To{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Category Voice
            </span>
          </h2>
          <div className="space-y-2 pt-2">
            <p className="text-xl sm:text-2xl text-slate-300 font-display font-light">
              The goal isn’t followers.
            </p>
            <p className="text-2xl sm:text-3xl font-display font-normal text-[#fda4af]">
              The goal is recognition.
            </p>
          </div>
          <p className="text-base sm:text-lg text-slate-300 font-sans font-light max-w-2xl mx-auto leading-relaxed pt-2">
            We want the right people in your market to repeatedly see your ideas until your name becomes associated with your category.
          </p>
        </div>

        {/* Triggers Box */}
        <div className="rounded-3xl bg-[#050713]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 mb-20 shadow-[0_30px_70px_rgba(0,0,0,0.6)] text-center max-w-4xl mx-auto space-y-6">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            So when they need:
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {TRIGGERS.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-full bg-[#0a0d20] border border-white/10 text-white font-display text-base hover:border-[#6366f1]/40 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <p className="text-3xl sm:text-4xl font-display font-light text-transparent bg-clip-text bg-brand-gradient italic">
              They think of you.
            </p>
          </div>
        </div>

        {/* Part 2: Your Founder Brand Should Become A Business Asset */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0a0d20] via-[#050713] to-[#020308] border border-white/10 p-8 sm:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Compounding Equity
            </span>
            <h3 className="text-3xl sm:text-5xl font-display font-light text-white leading-tight">
              Your Founder Brand Should Become A Business Asset
            </h3>
            <p className="text-xl sm:text-2xl font-display font-light text-[#fda4af]">
              A good founder brand compounds.
            </p>
          </div>

          {/* 4 Compounding Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
            {COMPOUND_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#050713]/80 border border-white/5 space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
                  <h4 className="text-lg font-display text-white">
                    {step.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 font-sans font-light pt-2 border-t border-white/5">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Contrast Quote */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-slate-200 font-sans font-light leading-relaxed">
              And unlike an ad campaign that stops the moment you stop spending,{' '}
              <strong className="text-white font-semibold">your body of content continues working for you.</strong>
            </p>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenAuditModal}
              className="btn-primary text-xs px-8 py-4 rounded-full uppercase tracking-widest font-black inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
            >
              <span>Build A Compounding Asset</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
