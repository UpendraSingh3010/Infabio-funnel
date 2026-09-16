import React, { useState } from 'react';
import { 
  Crosshair, Target, BookOpen, Video, Palette, Share2, 
  CheckCircle2, ArrowRight, ChevronDown, Sparkles 
} from 'lucide-react';
import { WHAT_WE_HANDLE } from '../data/infabioData';
import { useTheme } from '../context/ThemeContext';

interface WhatWeHandleSectionProps {
  onOpenAuditModal: () => void;
}

const TAB_ICONS: Record<string, React.ElementType> = {
  positioning: Crosshair,
  strategy: Target,
  'thought-leadership': BookOpen,
  'video-content': Video,
  'brand-design': Palette,
  distribution: Share2,
};

export const WhatWeHandleSection: React.FC<WhatWeHandleSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();
  const [activeTabId, setActiveTabId] = useState<string>(WHAT_WE_HANDLE[0].id);
  const [expandedMobileAccordion, setExpandedMobileAccordion] = useState<string | null>(WHAT_WE_HANDLE[0].id);

  const activeModule = WHAT_WE_HANDLE.find(m => m.id === activeTabId) || WHAT_WE_HANDLE[0];
  const ActiveIcon = TAB_ICONS[activeModule.id] || Crosshair;

  const toggleMobileAccordion = (id: string) => {
    setExpandedMobileAccordion(prev => (prev === id ? null : id));
  };

  return (
    <section id="what-we-handle" className={`py-24 md:py-32 bg-transparent border-t relative transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
            Full-Stack Execution
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            What We{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Handle
            </span>
          </h2>
          <p className={`font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            From raw founder worldview to polished multi-channel distribution. Select a capability below.
          </p>
        </div>

        {/* Desktop & Tablet: Tabbed Interface */}
        <div className="hidden md:block space-y-8">
          {/* Tab Selector Bar */}
          <div className={`flex flex-wrap items-center justify-center gap-2.5 p-2 rounded-2xl backdrop-blur-xl max-w-4xl mx-auto transition-all ${
            isLight 
              ? 'bg-slate-100/90 border border-slate-200 shadow-sm' 
              : 'bg-[#050713]/80 border border-white/10'
          }`}>
            {WHAT_WE_HANDLE.map((module) => {
              const Icon = TAB_ICONS[module.id] || Crosshair;
              const isActive = activeTabId === module.id;

              return (
                <button
                  key={module.id}
                  onClick={() => setActiveTabId(module.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6366f1] to-rose-500 text-white shadow-[0_4px_20px_rgba(99,102,241,0.35)] scale-102 font-semibold'
                      : isLight 
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-white' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{module.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className={`max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 backdrop-blur-2xl text-left relative overflow-hidden group transition-all duration-300 ${
            isLight 
              ? 'bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
              : 'bg-[#050713]/90 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
          }`}>
            {/* Ambient Corner Glow */}
            <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
              isLight ? 'bg-indigo-500/10' : 'bg-[#6366f1]/10'
            }`} />

            <div className="relative z-10 space-y-8">
              {/* Header inside active panel */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b ${
                isLight ? 'border-slate-200' : 'border-white/10'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                    isLight 
                      ? 'bg-indigo-50 border border-indigo-200 text-indigo-600' 
                      : 'bg-[#0a0d20] border border-white/15 text-[#fda4af]'
                  }`}>
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#6366f1] uppercase tracking-wider block font-semibold">
                      CAPABILITY 0{WHAT_WE_HANDLE.findIndex(m => m.id === activeModule.id) + 1}
                    </span>
                    <h3 className={`text-2xl sm:text-3xl font-display font-light ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {activeModule.title}
                    </h3>
                  </div>
                </div>

                <span className={`text-xs font-mono px-3 py-1 rounded-full border self-start sm:self-auto ${
                  isLight 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium' 
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                }`}>
                  Turnkey INFABIO Execution
                </span>
              </div>

              {/* Tagline / Focus */}
              <p className={`text-lg sm:text-xl font-display font-light leading-relaxed ${
                isLight ? 'text-slate-800' : 'text-slate-200'
              }`}>
                {activeModule.tagline}
              </p>

              {/* Active Tab Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {activeModule.points.map((point, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-colors ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/20' 
                        : 'bg-[#0a0d20]/80 border-white/5 hover:border-[#6366f1]/30'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${isLight ? 'text-indigo-600' : 'text-[#fda4af]'}`} />
                    <span className={`text-sm font-sans font-light ${
                      isLight ? 'text-slate-700' : 'text-slate-200'
                    }`}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Micro Action Bar */}
              <div className={`pt-4 flex items-center justify-between text-xs font-mono ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                <span>Integrated into your weekly 30-min briefing</span>
                <button
                  onClick={onOpenAuditModal}
                  className={`flex items-center gap-1.5 cursor-pointer transition-colors font-medium ${
                    isLight ? 'text-indigo-600 hover:text-indigo-800' : 'text-[#fda4af] hover:text-white'
                  }`}
                >
                  <span>Audit your brand voice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3 max-w-lg mx-auto text-left">
          {WHAT_WE_HANDLE.map((module, idx) => {
            const Icon = TAB_ICONS[module.id] || Crosshair;
            const isExpanded = expandedMobileAccordion === module.id;

            return (
              <div
                key={module.id}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isLight 
                    ? 'bg-white border border-slate-200/90 shadow-sm' 
                    : 'bg-[#050713]/90 border border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleMobileAccordion(module.id)}
                  className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isLight 
                        ? 'bg-indigo-50 border border-indigo-200 text-indigo-600' 
                        : 'bg-[#0a0d20] border border-white/10 text-[#fda4af]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono block ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                        STAGE 0{idx + 1}
                      </span>
                      <span className={`text-base font-display font-light ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}>
                        {module.title}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-indigo-500' : isLight ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className={`p-4 pt-0 border-t space-y-3 ${isLight ? 'border-slate-100' : 'border-white/5'}`}>
                    <p className={`text-xs font-sans font-light mt-2 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                      {module.tagline}
                    </p>
                    <div className="space-y-2">
                      {module.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-sans">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-indigo-600' : 'text-[#fda4af]'}`} />
                          <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

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
