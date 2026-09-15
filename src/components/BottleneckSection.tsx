import React from 'react';
import { AlertCircle, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const BottleneckSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  return (
    <section id="bottleneck" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#6366f1]" />
            Zero Executive Friction
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            Built For Founders Who Are{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Busy Building
            </span>
          </h2>
        </div>

        {/* Bottleneck vs Infabio Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Left: The Failure Cycle */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#050713]/80 border border-red-500/20 backdrop-blur-xl space-y-6 text-left shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="space-y-2">
              <span className="text-xs font-mono text-red-400 uppercase tracking-wider block">
                Founder marketing usually breaks for one reason:
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-light text-white">
                The founder becomes the bottleneck.
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#0a0d20]/90 border border-white/5 flex items-center gap-3 text-slate-300 text-sm font-sans">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-mono text-xs flex items-center justify-center shrink-0">1</span>
                <span>You approve one post.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0a0d20]/90 border border-white/5 flex items-center gap-3 text-slate-300 text-sm font-sans">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-mono text-xs flex items-center justify-center shrink-0">2</span>
                <span>Forget about the next three.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0a0d20]/90 border border-white/5 flex items-center gap-3 text-slate-300 text-sm font-sans">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-mono text-xs flex items-center justify-center shrink-0">3</span>
                <span>A month passes.</span>
              </div>
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-200 text-sm font-sans font-medium">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>Consistency disappears.</span>
              </div>
            </div>
          </div>

          {/* Right: How Infabio Designs It Differently */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a0d20] to-[#050713] border border-[#6366f1]/40 backdrop-blur-xl space-y-6 text-left shadow-[0_25px_60px_rgba(99,102,241,0.2)] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#fda4af] uppercase tracking-wider block">
                We design the process differently.
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-light text-white">
                Our system is built to minimise the amount of time you need to spend while still keeping the content genuinely yours.
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-emerald-400 text-base font-sans font-medium">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-white">You focus on running the company.</span>
              </div>
              <div className="flex items-center gap-3 text-[#fda4af] text-base font-sans font-medium">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-white">We build the media engine around you.</span>
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
