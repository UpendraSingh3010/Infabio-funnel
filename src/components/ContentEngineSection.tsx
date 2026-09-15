import React from 'react';
import { Brain, Mic, PenTool, Send, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const ENGINE_PILLARS = [
  {
    step: "01",
    phase: "You think.",
    desc: "You have the insight and the battlefield experience. You speak freely during a 30-minute weekly conversation.",
    icon: Brain,
  },
  {
    step: "02",
    phase: "We capture.",
    desc: "Our editorial directors record and extract your core thesis, nuanced frameworks, and raw stories.",
    icon: Mic,
  },
  {
    step: "03",
    phase: "We shape.",
    desc: "We write high-retention posts, video scripts, and carousels crafted specifically in your authentic voice.",
    icon: PenTool,
  },
  {
    step: "04",
    phase: "We distribute.",
    desc: "We schedule, format, and push your content across platforms where your buyers and investors congregate.",
    icon: Send,
  },
  {
    step: "05",
    phase: "We optimise.",
    desc: "We analyze signals and inbound flow to continuously double down on high-resonance topics.",
    icon: TrendingUp,
  },
];

export const ContentEngineSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  return (
    <section id="content-engine" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
            Extraction &amp; Conversion System
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            We Turn Your Expertise Into A{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Content Engine
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-sans font-light pt-2 max-w-2xl mx-auto leading-relaxed">
            You have the knowledge, stories, and opinions — just not the hours. INFABIO extracts your ideas and converts them into a structured founder marketing engine.
          </p>
        </div>

        {/* 5 Connected Step Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {ENGINE_PILLARS.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#050713]/70 hover:bg-[#0a0d20] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-sm text-left relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-[#6366f1] group-hover:text-[#fda4af] flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Step {pillar.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-light text-white group-hover:text-slate-100">
                    {pillar.phase}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-mono text-[#fda4af]">
                  PHASE {pillar.step}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onOpenAuditModal}
            className="btn-primary text-xs px-8 py-3.5 rounded-full uppercase tracking-widest font-black inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
          >
            <span>Initialize Your Content Engine</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
