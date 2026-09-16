import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SystemStepperSectionProps {
  onOpenAuditModal: () => void;
}

export const SystemStepperSection: React.FC<SystemStepperSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

  const STEPS = [
    {
      number: "01",
      title: "Position",
      desc: "Define your category point of view, contrarian thesis, and what you will become known for.",
      color: "orange"
    },
    {
      number: "02",
      title: "Extract",
      desc: "Capture your raw ideas and battle-tested lessons through frictionless 30-minute weekly conversations.",
      color: "blue"
    },
    {
      number: "03",
      title: "Create",
      desc: "Convert extracted insights into high-retention written essays, visual carousels, and executive videos.",
      color: "orange"
    },
    {
      number: "04",
      title: "Publish",
      desc: "Orchestrate consistent multi-channel distribution during peak executive reading windows.",
      color: "blue"
    },
    {
      number: "05",
      title: "Amplify",
      desc: "Identify breakout winning angles and expand reach with organic distribution and precision paid boost.",
      color: "orange"
    },
    {
      number: "06",
      title: "Convert",
      desc: "Connect founder visibility directly into qualified inbound pipeline, booking links, and enterprise deal flow.",
      color: "blue"
    }
  ];

  return (
    <section id="the-system" className={`py-24 md:py-32 bg-transparent border-t relative overflow-hidden transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[150px] pointer-events-none rounded-full ${
        isLight ? 'bg-indigo-500/8' : 'bg-[#6366f1]/5'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="eyebrow inline-flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6366f1]" />
            Repeatable Framework
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            The INFABIO Founder{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Marketing System
            </span>
          </h2>
          <p className={`font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            A battle-tested 6-step engine turning executive knowledge into compounding inbound authority.
          </p>
        </div>

        {/* Desktop 6-Step Stepper */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Center Vertical Timeline Progress Line */}
          <div className={`absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] ${
            isLight ? 'bg-slate-200' : 'bg-white/10'
          }`}>
            <div className="w-full h-full bg-gradient-to-b from-[#6366f1] via-[#fda4af] to-[#6366f1] opacity-70" />
          </div>

          <div className="space-y-14">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isOrange = step.color === 'orange';

              const cardContent = (
                <div className={`group backdrop-blur-2xl rounded-3xl p-7 transition-all duration-300 text-left hover:-translate-y-1 ${
                  isLight 
                    ? 'bg-gradient-to-br from-white via-indigo-50/20 to-pink-50/15 border border-slate-200/90 hover:border-indigo-300 shadow-[0_15px_35px_rgba(99,102,241,0.06)] hover:shadow-[0_20px_45px_rgba(99,102,241,0.12)]' 
                    : 'bg-[#050713]/55 border border-white/5 hover:border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.55)]'
                }`}>
                  <span className={`font-mono font-black text-[10px] uppercase tracking-widest ${
                    isOrange 
                      ? isLight ? 'text-pink-600' : 'text-[#fda4af]' 
                      : isLight ? 'text-indigo-600' : 'text-[#c084fc]'
                  }`}>
                    Phase {step.number}
                  </span>
                  <h3 className={`text-2xl font-display font-light mt-1.5 mb-2.5 ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-sans font-light ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {step.desc}
                  </p>
                  <div className={`mt-5 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full ${
                    isOrange ? 'bg-gradient-to-r from-pink-500 to-pink-300 shadow-[0_0_8px_#fda4af]' : 'bg-gradient-to-r from-indigo-500 to-indigo-300 shadow-[0_0_8px_#6366f1]'
                  }`} />
                </div>
              );

              return (
                <div key={step.number} className="grid grid-cols-12 items-center gap-8 lg:gap-12 relative z-10">
                  
                  {/* Left Column */}
                  <div className={`col-span-5 ${isEven ? 'text-right' : 'opacity-0 pointer-events-none'}`}>
                    {isEven && cardContent}
                  </div>

                  {/* Center Node Circle */}
                  <div className="col-span-2 col-start-6 flex justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-medium text-sm text-white shadow-lg relative z-20 cursor-default transition-transform hover:scale-110 ${
                      isOrange
                        ? 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-[0_0_20px_rgba(244,63,94,0.4)] border border-rose-300/40'
                        : 'bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-indigo-300/40'
                    }`}>
                      {step.number}
                      <span className={`absolute inset-0 rounded-full animate-ping opacity-25 ${
                        isOrange ? 'bg-pink-400' : 'bg-indigo-500'
                      }`} style={{ animationDuration: '4s' }} />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className={`col-span-5 ${!isEven ? 'text-left' : 'opacity-0 pointer-events-none'}`}>
                    {!isEven && cardContent}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden relative max-w-lg mx-auto text-left">
          {/* Left Vertical Line */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#6366f1] via-[#fda4af] to-[#6366f1] opacity-60" />

          <div className="space-y-6">
            {STEPS.map((step) => {
              const isOrange = step.color === 'orange';
              return (
                <div key={step.number} className="flex items-start gap-4 relative z-10">
                  {/* Step Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-medium text-sm text-white shadow-lg shrink-0 ${
                    isOrange
                      ? 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-[0_0_15px_rgba(244,63,94,0.35)] border border-rose-300/40'
                      : 'bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-[0_0_15px_rgba(99,102,241,0.35)] border border-indigo-300/40'
                  }`}>
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 p-5 rounded-2xl space-y-1.5 transition-all ${
                    isLight 
                      ? 'bg-white border border-slate-200/90 shadow-sm' 
                      : 'bg-[#050713]/85 border border-white/10 shadow-sm'
                  }`}>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${
                      isOrange 
                        ? isLight ? 'text-pink-600 font-bold' : 'text-[#fda4af]' 
                        : isLight ? 'text-indigo-600 font-bold' : 'text-[#c084fc]'
                    }`}>
                      Phase {step.number}
                    </span>
                    <h3 className={`text-xl font-display font-light ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs font-sans font-light leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom Single Repeated CTA */}
        <div className="text-center pt-16">
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
