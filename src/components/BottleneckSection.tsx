import React from 'react';
import { AlertCircle, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const BottleneckSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

  return (
    <section id="bottleneck" className={`py-24 md:py-32 bg-transparent border-t relative transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#6366f1]" />
            Zero Executive Friction
          </span>
          <h2 className={`text-4xl sm:text-5xl md:text-[3.5rem] font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Built For Founders Who Are{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Busy Building
            </span>
          </h2>
        </div>

        {/* Bottleneck vs Infabio Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Left: The Failure Cycle */}
          <div className={`p-8 sm:p-10 rounded-3xl backdrop-blur-xl space-y-6 text-left transition-all duration-300 ${
            isLight 
              ? 'bg-gradient-to-br from-rose-50/90 via-white to-pink-50/50 border border-rose-200/90 shadow-[0_20px_50px_rgba(244,63,94,0.06)]' 
              : 'bg-[#050713]/80 border border-red-500/20 shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="space-y-2">
              <span className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                isLight ? 'text-rose-600' : 'text-red-400'
              }`}>
                Founder marketing usually breaks for one reason:
              </span>
              <h3 className={`text-2xl sm:text-3xl font-display font-light ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                The founder becomes the bottleneck.
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              <div className={`p-4 rounded-2xl border flex items-center gap-3 text-sm font-sans ${
                isLight 
                  ? 'bg-white border-slate-200/80 text-slate-700 shadow-sm' 
                  : 'bg-[#0a0d20]/90 border border-white/5 text-slate-300'
              }`}>
                <span className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center shrink-0 font-bold ${
                  isLight ? 'bg-rose-100 text-rose-600' : 'bg-red-500/20 text-red-400'
                }`}>1</span>
                <span>You approve one post.</span>
              </div>
              <div className={`p-4 rounded-2xl border flex items-center gap-3 text-sm font-sans ${
                isLight 
                  ? 'bg-white border-slate-200/80 text-slate-700 shadow-sm' 
                  : 'bg-[#0a0d20]/90 border border-white/5 text-slate-300'
              }`}>
                <span className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center shrink-0 font-bold ${
                  isLight ? 'bg-rose-100 text-rose-600' : 'bg-red-500/20 text-red-400'
                }`}>2</span>
                <span>Forget about the next three.</span>
              </div>
              <div className={`p-4 rounded-2xl border flex items-center gap-3 text-sm font-sans ${
                isLight 
                  ? 'bg-white border-slate-200/80 text-slate-700 shadow-sm' 
                  : 'bg-[#0a0d20]/90 border border-white/5 text-slate-300'
              }`}>
                <span className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center shrink-0 font-bold ${
                  isLight ? 'bg-rose-100 text-rose-600' : 'bg-red-500/20 text-red-400'
                }`}>3</span>
                <span>A month passes.</span>
              </div>
              <div className={`p-4 rounded-2xl border flex items-center gap-3 text-sm font-sans font-medium ${
                isLight 
                  ? 'bg-rose-50 border border-rose-200 text-rose-800' 
                  : 'bg-red-500/10 border border-red-500/20 text-red-200'
              }`}>
                <AlertCircle className={`w-5 h-5 shrink-0 ${isLight ? 'text-rose-600' : 'text-red-400'}`} />
                <span>Consistency disappears.</span>
              </div>
            </div>
          </div>

          {/* Right: How Infabio Designs It Differently */}
          <div className={`p-8 sm:p-10 rounded-3xl backdrop-blur-xl space-y-6 text-left flex flex-col justify-between transition-all duration-300 ${
            isLight 
              ? 'bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/50 border border-indigo-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)]' 
              : 'bg-gradient-to-br from-[#0a0d20] to-[#050713] border border-[#6366f1]/40 shadow-[0_25px_60px_rgba(99,102,241,0.2)]'
          }`}>
            <div className="space-y-4">
              <span className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                isLight ? 'text-indigo-600' : 'text-[#fda4af]'
              }`}>
                We design the process differently.
              </span>
              <h3 className={`text-2xl sm:text-3xl font-display font-light ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Our system is built to minimise the amount of time you need to spend while still keeping the content genuinely yours.
              </h3>
            </div>

            <div className={`p-6 rounded-2xl border space-y-3 ${
              isLight 
                ? 'bg-white/90 border-indigo-100 shadow-sm' 
                : 'bg-white/[0.03] border border-white/10'
            }`}>
              <div className="flex items-center gap-3 text-base font-sans font-medium">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                <span className={isLight ? 'text-slate-900' : 'text-white'}>You focus on running the company.</span>
              </div>
              <div className="flex items-center gap-3 text-base font-sans font-medium">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-indigo-600" />
                <span className={isLight ? 'text-slate-900' : 'text-white'}>We build the media engine around you.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="w-full btn-primary text-xs py-4 rounded-2xl uppercase tracking-widest font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
              >
                <span>Protect Your Executive Time</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
