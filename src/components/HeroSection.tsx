import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Zap,
  CheckCircle2,
  Lock,
  Target
} from 'lucide-react';

interface HeroSectionProps {
  onOpenAuditModal: () => void;
  onExploreSystem?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold, High-Contrast Editorial Messaging */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div>
              <span className="eyebrow inline-flex items-center gap-2 border border-white/10 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
                <span className="font-mono tracking-widest uppercase text-[11px] font-medium text-slate-300">
                  Strategic Founder Marketing
                </span>
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.8rem] font-display font-light leading-[1.06] text-white tracking-tight">
                People Trust{' '}
                <span className="italic font-normal text-transparent bg-clip-text bg-brand-gradient">
                  Before They Buy
                </span>
              </h1>
              <p className="text-lg sm:text-2xl text-slate-300 font-display font-light">
                Your company has a brand. <span className="text-white font-normal">Today, your founder needs one too.</span>
              </p>
            </div>

            {/* Compressed, Crisp Core Thesis */}
            <p className="text-base sm:text-lg text-slate-300 font-sans font-light leading-relaxed max-w-2xl">
              People don’t just follow companies anymore — they follow the people behind them. INFABIO helps founders build visibility, authority and demand through strategic founder-led marketing.
            </p>

            {/* 4 Demands Micro Grid - Compact & Editorial */}
            <div className="grid grid-cols-2 gap-2.5 max-w-xl">
              <div className="p-3 rounded-xl bg-[#050713]/80 border border-white/5 backdrop-blur-md flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] shrink-0" />
                <span className="text-xs text-slate-300 font-sans"><strong>Customers</strong> look for who is building</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050713]/80 border border-white/5 backdrop-blur-md flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fda4af] shrink-0" />
                <span className="text-xs text-slate-300 font-sans"><strong>Investors</strong> evaluate founder thinking</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050713]/80 border border-white/5 backdrop-blur-md flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] shrink-0" />
                <span className="text-xs text-slate-300 font-sans"><strong>Top Talent</strong> choose strong leaders</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050713]/80 border border-white/5 backdrop-blur-md flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fda4af] shrink-0" />
                <span className="text-xs text-slate-300 font-sans"><strong>The Market</strong> seeks trusted voices</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAuditModal}
                id="hero-primary-cta"
                className="btn-primary text-xs px-8 py-3.5 rounded-full uppercase tracking-widest font-black flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_10px_35px_rgba(99,102,241,0.35)] hover:shadow-[0_15px_45px_rgba(99,102,241,0.55)]"
              >
                <span>BUILD MY FOUNDER BRAND</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Vanity Trends • Pure Category Authority</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Blueprint (No fake stats) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#050713]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.8)] text-left">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-5">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#fda4af]" />
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Founder Marketing Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#6366f1]/15 text-[#fda4af] border border-[#6366f1]/30">
                  INFABIO PROTOCOL
                </span>
              </div>

              {/* 4 Authentic Architecture Layers */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#0a0d20]/80 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Phase 01 • Positioning
                  </div>
                  <div className="text-base font-display font-light text-white">
                    Category Point of View
                  </div>
                  <p className="text-xs text-slate-400 font-sans font-light">
                    Clarify what you stand for, your contrarian thesis, and why the market should listen.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0a0d20]/80 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Phase 02 • Voice Amplification
                  </div>
                  <div className="text-base font-display font-light text-white">
                    Zero Ghostwriting Clichés
                  </div>
                  <p className="text-xs text-slate-400 font-sans font-light">
                    No artificial persona. We extract your raw battlefield lessons, tone, and actual worldview.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0a0d20]/80 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Phase 03 • Time Protection
                  </div>
                  <div className="text-base font-display font-light text-white">
                    30 Minutes Weekly
                  </div>
                  <p className="text-xs text-slate-400 font-sans font-light">
                    You speak freely. We capture, shape, design, and distribute across high-value channels.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAuditModal}
                    className="w-full btn-primary text-xs py-3 rounded-xl uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Strategic Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
