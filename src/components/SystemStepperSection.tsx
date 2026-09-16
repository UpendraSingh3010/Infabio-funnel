import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, ChevronRight, ChevronDown, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SystemStepperSectionProps {
  onOpenAuditModal: () => void;
}

export const SystemStepperSection: React.FC<SystemStepperSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAccordionView, setIsAccordionView] = useState<boolean>(false);
  const [openAccordionStep, setOpenAccordionStep] = useState<number | null>(0);

  const STEPS = [
    {
      number: "01",
      title: "Position",
      punchline: "Define your contrarian category POV and what you will be known for.",
      time: "Week 1 Setup",
      deliverables: ["Category Thesis Teardown", "Competitor Whitespace Map", "3 Core Narrative Pillars"],
      color: "orange"
    },
    {
      number: "02",
      title: "Extract",
      punchline: "Capture battle-tested lessons in 30 frictionless minutes weekly.",
      time: "30 Mins / Week",
      deliverables: ["Recorded Voice Briefing", "Strategic Framework Mining", "Zero Writing Burden"],
      color: "blue"
    },
    {
      number: "03",
      title: "Create",
      punchline: "Transform extracted insights into executive essays, carousels, and videos.",
      time: "Turnkey Production",
      deliverables: ["Ghostwriting in Your Voice", "High-Retention Visual Assets", "Executive Video Cuts"],
      color: "orange"
    },
    {
      number: "04",
      title: "Publish",
      punchline: "Orchestrate multi-channel distribution during peak C-suite reading windows.",
      time: "Optimal Timing",
      deliverables: ["Algorithmic Peak Scheduling", "Executive Comment Strategy", "Tier-1 Network Engagement"],
      color: "blue"
    },
    {
      number: "05",
      title: "Amplify",
      punchline: "Boost winning high-signal posts with targeted organic and paid distribution.",
      time: "Precision Reach",
      deliverables: ["Breakout Content Detection", "C-Suite ICP Retargeting", "Tier-1 Press Amplification"],
      color: "orange"
    },
    {
      number: "06",
      title: "Convert",
      punchline: "Channel founder visibility directly into qualified inbound enterprise pipeline.",
      time: "Commercial ROI",
      deliverables: ["Inbound Lead Routing", "Direct DM Warm Sequences", "Compounding Pipeline Moat"],
      color: "blue"
    }
  ];

  const currentStep = STEPS[activeStepIndex];

  return (
    <section id="the-system" className={`py-20 md:py-28 bg-transparent border-t relative overflow-hidden transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] blur-[140px] pointer-events-none rounded-full ${
        isLight ? 'bg-indigo-500/6' : 'bg-[#6366f1]/5'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
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

          {/* View Mode Toggle: Interactive Stepper vs All Expanded */}
          <div className="pt-2 flex justify-center">
            <div className={`inline-flex p-1 rounded-full border text-xs font-mono backdrop-blur-md ${
              isLight ? 'bg-white/80 border-slate-200 shadow-sm' : 'bg-[#0a0d20]/80 border-white/10'
            }`}>
              <button
                type="button"
                onClick={() => setIsAccordionView(false)}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  !isAccordionView
                    ? 'bg-gradient-to-r from-[#6366f1] to-rose-500 text-white shadow-sm font-semibold'
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive Phase View
              </button>
              <button
                type="button"
                onClick={() => setIsAccordionView(true)}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  isAccordionView
                    ? 'bg-gradient-to-r from-[#6366f1] to-rose-500 text-white shadow-sm font-semibold'
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                View All 6 Steps
              </button>
            </div>
          </div>
        </div>

        {/* MODE A: Interactive Single-Phase Spotlight (Ultra-clean & compact) */}
        {!isAccordionView ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step Selection Tabs */}
            <div className={`grid grid-cols-3 sm:grid-cols-6 gap-2 p-2 rounded-2xl backdrop-blur-xl transition-all ${
              isLight 
                ? 'bg-slate-100/90 border border-slate-200 shadow-sm' 
                : 'bg-[#050713]/80 border border-white/10'
            }`}>
              {STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`py-3 px-2 rounded-xl text-center transition-all duration-300 cursor-pointer flex flex-col items-center gap-1 ${
                      isActive
                        ? 'bg-gradient-to-b from-[#6366f1] to-indigo-700 text-white shadow-[0_4px_15px_rgba(99,102,241,0.35)] scale-102'
                        : isLight 
                          ? 'text-slate-600 hover:text-slate-900 hover:bg-white/80' 
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#fda4af]' : isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {step.number}
                    </span>
                    <span className="text-xs font-display tracking-tight font-medium">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Feature Box */}
            <div className={`rounded-3xl p-8 sm:p-10 backdrop-blur-2xl text-left relative overflow-hidden transition-all duration-300 ${
              isLight 
                ? 'bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
                : 'bg-[#050713]/90 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
            }`}>
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6366f1] via-[#fda4af] to-[#6366f1]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-medium text-lg text-white shadow-lg ${
                    currentStep.color === 'orange'
                      ? 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-[0_0_20px_rgba(244,63,94,0.35)]'
                      : 'bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                  }`}>
                    {currentStep.number}
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-bold block ${
                      currentStep.color === 'orange' 
                        ? isLight ? 'text-pink-600' : 'text-[#fda4af]' 
                        : isLight ? 'text-indigo-600' : 'text-[#c084fc]'
                    }`}>
                      Phase {currentStep.number}
                    </span>
                    <h3 className={`text-2xl sm:text-3xl font-display font-light ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono self-start sm:self-auto border ${
                  isLight 
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-medium' 
                    : 'bg-[#0a0d20] text-slate-300 border-white/10'
                }`}>
                  <Clock className="w-3.5 h-3.5 text-[#fda4af]" />
                  <span>{currentStep.time}</span>
                </div>
              </div>

              {/* Crisp Punchline */}
              <div className="py-6">
                <p className={`text-lg sm:text-xl font-display font-light leading-snug ${
                  isLight ? 'text-slate-800' : 'text-slate-100'
                }`}>
                  {currentStep.punchline}
                </p>
              </div>

              {/* Key Deliverables Chips */}
              <div className="space-y-2.5">
                <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                  isLight ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Core Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentStep.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 transition-colors ${
                        isLight 
                          ? 'bg-slate-50 border-slate-200 text-slate-700' 
                          : 'bg-[#0a0d20] border-white/5 text-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6366f1] shrink-0" />
                      <span className="text-xs font-sans font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className={`pt-6 mt-8 border-t flex items-center justify-between text-xs font-mono ${
                isLight ? 'border-slate-100' : 'border-white/5'
              }`}>
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className={`transition-colors cursor-pointer ${
                    activeStepIndex === 0 
                      ? 'opacity-30 cursor-not-allowed text-slate-500' 
                      : isLight ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  ← Previous Phase
                </button>

                <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>
                  {activeStepIndex + 1} of {STEPS.length}
                </span>

                <button
                  type="button"
                  disabled={activeStepIndex === STEPS.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(STEPS.length - 1, prev + 1))}
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    activeStepIndex === STEPS.length - 1 
                      ? 'opacity-30 cursor-not-allowed text-slate-500' 
                      : isLight ? 'text-indigo-600 font-semibold' : 'text-[#fda4af] hover:text-white'
                  }`}
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* MODE B: Collapsible 6-Step Accordion */
          <div className="max-w-3xl mx-auto space-y-3 text-left">
            {STEPS.map((step, idx) => {
              const isOpen = openAccordionStep === idx;
              const isOrange = step.color === 'orange';

              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isLight 
                      ? 'bg-white border-slate-200 shadow-sm' 
                      : 'bg-[#050713]/85 border-white/10'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenAccordionStep(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display text-xs text-white font-medium shrink-0 ${
                        isOrange
                          ? 'bg-gradient-to-br from-pink-500 to-rose-600'
                          : 'bg-gradient-to-br from-indigo-500 to-indigo-700'
                      }`}>
                        {step.number}
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono block ${
                          isOrange ? isLight ? 'text-pink-600 font-bold' : 'text-[#fda4af]' : isLight ? 'text-indigo-600 font-bold' : 'text-[#c084fc]'
                        }`}>
                          PHASE {step.number}
                        </span>
                        <h4 className={`text-lg font-display font-light ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}>
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`hidden sm:inline-block text-[11px] font-mono px-2.5 py-0.5 rounded ${
                        isLight ? 'bg-slate-100 text-slate-600' : 'bg-white/5 text-slate-400'
                      }`}>
                        {step.time}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#6366f1]' : isLight ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className={`px-5 pb-5 pt-0 border-t space-y-4 animate-in fade-in duration-200 ${
                      isLight ? 'border-slate-100' : 'border-white/5'
                    }`}>
                      <p className={`text-sm font-sans font-light mt-3 leading-relaxed ${
                        isLight ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        {step.punchline}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        {step.deliverables.map((del, dIdx) => (
                          <div
                            key={dIdx}
                            className={`p-2.5 rounded-lg border text-xs font-sans flex items-center gap-2 ${
                              isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-[#0a0d20] border-white/5 text-slate-300'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6366f1] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Section Bottom Single Repeated CTA */}
        <div className="text-center pt-14">
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
