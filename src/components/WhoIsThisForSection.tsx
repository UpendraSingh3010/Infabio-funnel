import React from 'react';
import { Users, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import { TARGET_PERSONAS, ESPECIALLY_VALUABLE_CONDITIONS } from '../data/infabioData';
import { useTheme } from '../context/ThemeContext';

interface WhoIsThisForSectionProps {
  onOpenAuditModal: () => void;
}

export const WhoIsThisForSection: React.FC<WhoIsThisForSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

  return (
    <section id="who-is-this-for" className={`py-24 md:py-32 bg-transparent border-t relative transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#6366f1]" />
            Ideal Fit
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Who It's{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              For
            </span>
          </h2>
          <p className={`font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Engineered for high-conviction leaders who have real domain knowledge but lack time to produce consistent content.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Wrapping Row of Persona Chips / Tags */}
          <div className={`lg:col-span-6 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl flex flex-col justify-between text-left transition-all duration-300 ${
            isLight 
              ? 'bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
              : 'bg-[#050713]/80 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
          }`}>
            <div className="space-y-6">
              <div className={`flex items-center justify-between pb-3 border-b ${
                isLight ? 'border-slate-200' : 'border-white/10'
              }`}>
                <span className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                  isLight ? 'text-pink-600' : 'text-[#fda4af]'
                }`}>
                  Target Profiles
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  isLight ? 'bg-slate-100 text-slate-600' : 'bg-white/5 text-slate-400'
                }`}>
                  LEADERSHIP ROLES
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-display font-light ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Leaders With Real Substance
              </h3>

              <p className={`text-sm font-sans font-light leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                We work exclusively with leaders who have genuine expertise, verifiable client outcomes, and deep category conviction.
              </p>

              {/* Wrapping Row of Persona Chips */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {TARGET_PERSONAS.map((persona, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all shadow-sm flex items-center gap-2 ${
                      isLight 
                        ? 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-indigo-400 hover:bg-white hover:text-indigo-600' 
                        : 'bg-[#0a0d20] border border-white/10 text-slate-200 hover:border-[#6366f1]/50 hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fda4af]" />
                    <span>{persona}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t flex items-center gap-2 text-xs font-mono ${
              isLight ? 'border-slate-200 text-slate-500' : 'border-white/5 text-slate-400'
            }`}>
              <UserCheck className="w-4 h-4 text-[#6366f1]" />
              <span>We don't work with hype artists or superficial influencers.</span>
            </div>
          </div>

          {/* Right Column: Qualifying Pain Points Checklist */}
          <div className={`lg:col-span-6 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl flex flex-col justify-between text-left transition-all duration-300 ${
            isLight 
              ? 'bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
              : 'bg-[#050713]/80 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
          }`}>
            <div className="space-y-6">
              <div className={`flex items-center justify-between pb-3 border-b ${
                isLight ? 'border-slate-200' : 'border-white/10'
              }`}>
                <span className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                  isLight ? 'text-indigo-600' : 'text-[#6366f1]'
                }`}>
                  Qualifying Signals
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  isLight 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold' 
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                }`}>
                  HIGH FIT CRITERIA
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-display font-light ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Especially Valuable If
              </h3>

              {/* Checklist with check icons */}
              <div className="space-y-3.5 pt-1">
                {ESPECIALLY_VALUABLE_CONDITIONS.slice(0, 6).map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-start gap-3 transition-all ${
                      isLight 
                        ? 'bg-slate-50/80 border-slate-200/80 text-slate-700 hover:bg-indigo-50/30 hover:border-indigo-200' 
                        : 'bg-[#0a0d20]/80 border border-white/5 hover:border-emerald-500/30'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className={`text-xs sm:text-sm font-sans font-light leading-relaxed ${
                      isLight ? 'text-slate-700' : 'text-slate-200'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
              <button
                onClick={onOpenAuditModal}
                className="w-full btn-primary text-xs py-4 rounded-full uppercase tracking-widest font-black flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_35px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_45px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.01]"
              >
                <span>BOOK MY STRATEGY SESSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
