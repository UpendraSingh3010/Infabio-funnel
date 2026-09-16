import React from 'react';
import { Shield } from 'lucide-react';
import { PositioningMatrix } from './PositioningMatrix';
import { useTheme } from '../context/ThemeContext';

export const ComparisonSection: React.FC = () => {
  const { isLight } = useTheme();

  const NOT_ITEMS = [
    "Dancing on TikTok trends or chasing fleeting algorithmic gimmicks",
    "Posting generic, copy-pasted motivational quotes every morning",
    "Turning your personal or private life into vulnerable public spectacle",
    "Manufacturing an artificial persona disconnected from how you operate",
    "Collecting empty vanity metrics that never convert into commercial revenue"
  ];

  const IS_ITEMS = [
    "Translating your battle-tested lessons and contrarian category perspective into market authority",
    "Clarifying your thesis so prospective buyers understand how you solve their problems",
    "Protecting your calendar: zero writing burden, just 30 minutes of voice extraction weekly",
    "Distributing high-signal essays, frameworks, and videos across executive decision-makers",
    "Generating predictable inbound pipeline, Tier-1 talent applications, and investor conviction"
  ];

  return (
    <section id="what-this-is" className={`py-24 md:py-32 bg-transparent border-t relative overflow-hidden transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#6366f1]" />
            Positioning vs Vanity
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Founder Marketing Is Not About{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Becoming An Influencer
            </span>
          </h2>
          <p className={`font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Zero vanity metrics. Zero social gimmicks. 100% focused on commercial authority and pipeline.
          </p>
        </div>

        {/* 2-Column Comparison Grid Reusing Drift vs Armor Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: ✕ What It's Not (Drift / Vanity) */}
          <div className={`backdrop-blur-2xl rounded-3xl p-8 sm:p-12 relative overflow-hidden text-left flex flex-col justify-between group transition-all duration-300 ${
            isLight 
              ? 'bg-gradient-to-br from-rose-50/90 via-white to-pink-50/60 border border-rose-200/90 shadow-[0_20px_50px_rgba(244,63,94,0.08)] hover:border-rose-300' 
              : 'bg-[#050713]/40 border border-pink-950/60 shadow-[0_30px_70px_rgba(0,0,0,0.65)] hover:border-pink-900/50'
          }`}>
            {/* Massive Faint Background Watermark */}
            <div className={`absolute top-1/2 right-4 -translate-y-1/2 text-[8rem] sm:text-[10rem] font-black select-none pointer-events-none font-display ${
              isLight ? 'text-rose-500/10' : 'text-pink-500/5'
            }`}>
              DRIFT
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                  isLight 
                    ? 'bg-rose-100 border border-rose-200 text-rose-600 shadow-sm' 
                    : 'bg-pink-950/50 border border-pink-900/30 text-pink-400 shadow-[0_0_15px_rgba(219,39,119,0.15)]'
                }`}>
                  ✕
                </div>
                <h3 className={`text-lg font-display font-light uppercase tracking-widest ${
                  isLight ? 'text-rose-600 font-semibold' : 'text-pink-400'
                }`}>
                  WHAT IT'S NOT
                </h3>
              </div>

              <p className={`text-xl sm:text-2xl font-display font-light leading-snug ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                It's not about becoming an influencer, posting quotes, or manufacturing a personality.
              </p>

              <ul className="space-y-4 pt-2 font-sans font-light">
                {NOT_ITEMS.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-3.5 text-sm sm:text-base leading-relaxed ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    <span className="text-rose-500 mt-1 shrink-0 font-bold text-sm">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative z-10 pt-6 mt-6 border-t text-xs font-mono ${
              isLight 
                ? 'border-rose-200/80 text-rose-700 font-medium' 
                : 'border-pink-950/40 text-pink-400/70'
            }`}>
              RESULT: Low-status tire-kickers &amp; diluted executive credibility
            </div>
          </div>

          {/* Right Column: ✓ What It Actually Is (Armor / Authority) */}
          <div className={`backdrop-blur-2xl rounded-3xl p-8 sm:p-12 relative overflow-hidden text-left flex flex-col justify-between group transition-all duration-300 ${
            isLight 
              ? 'bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/50 border border-indigo-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] hover:border-indigo-300' 
              : 'bg-[#050713]/65 border border-indigo-950/60 shadow-[0_30px_70px_rgba(99,102,241,0.15)] hover:border-indigo-900/60'
          }`}>
            {/* Top Infabio Signature Gradient Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6366f1] to-[#fda4af] rounded-t-3xl shadow-[0_2px_15px_rgba(99,102,241,0.3)]" />

            {/* Massive Faint Background Watermark */}
            <div className={`absolute top-1/2 right-4 -translate-y-1/2 text-[7rem] sm:text-[9rem] font-black select-none pointer-events-none font-display ${
              isLight ? 'text-indigo-500/10' : 'text-indigo-500/5'
            }`}>
              ARMOR
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                  isLight 
                    ? 'bg-indigo-100 border border-indigo-200 text-indigo-600 shadow-sm' 
                    : 'bg-indigo-950/50 border border-indigo-900/30 text-[#6366f1] shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                }`}>
                  ✓
                </div>
                <h3 className={`text-lg font-display font-light uppercase tracking-widest ${
                  isLight ? 'text-indigo-600 font-semibold' : 'text-[#6366f1]'
                }`}>
                  WHAT IT ACTUALLY IS
                </h3>
              </div>

              <p className={`text-xl sm:text-2xl font-display font-light leading-snug ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                It's about amplifying the expertise and authentic commercial voice you already have.
              </p>

              <ul className="space-y-4 pt-2 font-sans font-light">
                {IS_ITEMS.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-3.5 text-sm sm:text-base leading-relaxed ${
                    isLight ? 'text-slate-800' : 'text-slate-200'
                  }`}>
                    <span className="text-[#6366f1] mt-1 shrink-0 font-black text-sm">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative z-10 pt-6 mt-6 border-t text-xs font-mono ${
              isLight 
                ? 'border-indigo-200/80 text-indigo-700 font-medium' 
                : 'border-indigo-950/40 text-[#fda4af]'
            }`}>
              RESULT: Category ownership, pre-sold buyers &amp; sovereign deal flow
            </div>
          </div>

        </div>

        {/* Visual Category Whitespace Scatter Matrix */}
        <PositioningMatrix />

      </div>
    </section>
  );
};
