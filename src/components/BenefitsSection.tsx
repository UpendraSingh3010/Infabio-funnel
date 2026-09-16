import React from 'react';
import { ShieldCheck, Lock, Magnet, Building2, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BenefitsSectionProps {
  onOpenAuditModal: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

  const OUTCOMES = [
    {
      title: "Build Authority",
      line: "Position you as the definitive, must-listen category leader in your sector.",
      icon: ShieldCheck,
      tag: "Category Leadership",
      color: "#6366f1"
    },
    {
      title: "Create Trust",
      line: "Let enterprise prospects understand how you think before they ever speak to your sales team.",
      icon: Lock,
      tag: "Pre-Call Conviction",
      color: "#fda4af"
    },
    {
      title: "Generate Inbound",
      line: "Turn strategic reach into high-intent inbound pipeline, partnerships, and introductions.",
      icon: Magnet,
      tag: "Pipeline Engine",
      color: "#c084fc"
    },
    {
      title: "Strengthen Company Brand",
      line: "Give your corporate identity a human, credible, and memorable competitive moat.",
      icon: Building2,
      tag: "Enterprise Recall",
      color: "#6366f1"
    },
    {
      title: "Attract Talent",
      line: "Inspire Tier-1 operators and leaders to build alongside an authentic, visible visionary.",
      icon: Users,
      tag: "A-Player Magnetism",
      color: "#fda4af"
    },
    {
      title: "Improve Investor Perception",
      line: "Turn your public digital footprint into an undeniable proof point of execution.",
      icon: TrendingUp,
      tag: "Capital Leverage",
      color: "#c084fc"
    }
  ];

  return (
    <section id="what-it-does" className={`py-24 md:py-32 bg-transparent border-t relative transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
            Commercial Outcomes
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            What Founder Marketing{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Does For You
            </span>
          </h2>
          <p className={`font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Tangible business leverage engineered around your commercial objectives.
          </p>
        </div>

        {/* 6-Card Icon Grid: 3 columns x 2 rows, one icon + one line each, NO paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {OUTCOMES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden ${
                  isLight
                    ? 'bg-gradient-to-br from-white via-indigo-50/20 to-pink-50/10 border border-slate-200/90 hover:border-indigo-300 hover:shadow-[0_18px_45px_rgba(99,102,241,0.12)] shadow-[0_8px_25px_rgba(99,102,241,0.04)]'
                    : 'bg-[#050713]/70 hover:bg-[#0a0d20] border border-white/5 hover:border-white/20 shadow-sm'
                }`}
              >
                {/* Micro Accent Glow on Hover */}
                <div
                  className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                  style={{ backgroundColor: item.color }}
                />

                <div className="space-y-4">
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isLight 
                        ? 'bg-indigo-50 border border-indigo-200/80 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 shadow-sm' 
                        : 'bg-white/5 border border-white/10 text-white group-hover:border-[#6366f1]/40 group-hover:text-[#fda4af]'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border transition-colors ${
                      isLight 
                        ? 'bg-slate-100 text-slate-700 border-slate-200 font-medium' 
                        : 'bg-white/5 text-slate-400 border-white/5'
                    }`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-display font-light transition-colors ${
                    isLight 
                      ? 'text-slate-900 group-hover:text-indigo-600' 
                      : 'text-white group-hover:text-slate-100'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Strictly One Line Description (No Paragraphs) */}
                  <p className={`text-sm font-sans font-light leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {item.line}
                  </p>
                </div>

                {/* Bottom Visual Indicator */}
                <div className={`pt-4 mt-5 border-t flex items-center justify-end text-[11px] font-mono ${
                  isLight ? 'border-slate-200 text-slate-500' : 'border-white/5 text-slate-400'
                }`}>
                  <span className="text-[#6366f1] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA with standard single repeated button */}
        <div className="text-center">
          <button
            onClick={onOpenAuditModal}
            className="btn-primary text-xs px-8 py-4 rounded-full uppercase tracking-widest font-black inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_35px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_45px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>BOOK MY STRATEGY SESSION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
