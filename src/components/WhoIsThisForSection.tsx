import React from 'react';
import { Users, CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const WhoIsThisForSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const PERSONAS = [
    "Startup Founders",
    "Agency Founders",
    "SaaS Founders",
    "D2C Founders",
    "Consultants",
    "Business Owners",
    "CXOs",
    "Second-generation Entrepreneurs",
    "Industry Experts",
    "Professionals building category authority"
  ];

  const ESPECIALLY_VALUABLE_IF = [
    "You have strong experience but almost no online presence.",
    "Your competitors’ founders are becoming more visible.",
    "You want more inbound opportunities.",
    "You are entering a new market.",
    "You are raising capital.",
    "You are hiring aggressively.",
    "You want to become a category voice.",
    "You want customers to trust the people behind your company.",
    "You know you should post — but never have the time."
  ];

  return (
    <section id="who-is-this-for" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Who Is This For */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#6366f1]" />
            Ideal Fit
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            Who Is{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              This For?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-display font-light">
            INFABIO Founder Marketing is built for:
          </p>
        </div>

        {/* 10 Personas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {PERSONAS.map((role, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#050713]/70 hover:bg-[#0a0d20] border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all flex flex-col items-center justify-center text-center group shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#6366f1] group-hover:scale-150 transition-transform mb-2.5" />
              <span className="text-sm font-sans font-medium text-white group-hover:text-slate-100">
                {role}
              </span>
            </div>
          ))}
        </div>

        {/* High-Impact Qualification Statement */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#6366f1]/20 via-[#fda4af]/15 to-transparent border border-[#6366f1]/30 text-center max-w-3xl mx-auto mb-20 shadow-md">
          <p className="text-lg sm:text-xl font-display font-light text-white">
            If your reputation can influence your company’s growth, founder marketing matters.
          </p>
        </div>

        {/* Part 2: This Is Especially Valuable If... */}
        <div className="rounded-3xl bg-[#050713]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fda4af]/10 border border-[#fda4af]/20 text-[#fda4af] text-xs font-mono uppercase tracking-wider">
              <Star className="w-3.5 h-3.5" /> Diagnostic Checklist
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-light text-white">
              This Is Especially Valuable If…
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {ESPECIALLY_VALUABLE_IF.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0a0d20]/80 border border-white/5 hover:border-white/15 flex items-start gap-3 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span className="text-sm text-slate-200 font-sans font-light leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenAuditModal}
              className="btn-primary text-xs px-9 py-4 rounded-full uppercase tracking-widest font-black inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
            >
              <span>Build My Founder Brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
