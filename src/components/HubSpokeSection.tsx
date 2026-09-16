import React from 'react';
import { 
  Mic, Linkedin, Video, Layers, BookOpen, Mail, 
  Quote, Briefcase, Sparkles, Globe, Users, ArrowRight 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HubSpokeSectionProps {
  onOpenAuditModal: () => void;
}

export const HubSpokeSection: React.FC<HubSpokeSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

  const SPOKE_ASSETS = [
    { name: "3x High-Impact LinkedIn Posts", icon: Linkedin, tag: "Written Authority" },
    { name: "2x Short-Form Video Reels", icon: Video, tag: "Video" },
    { name: "1x Visual Framework Carousel", icon: Layers, tag: "Visual IP" },
    { name: "1x Deep Category Essay", icon: BookOpen, tag: "Thought Leadership" },
    { name: "2x Executive Newsletter Angles", icon: Mail, tag: "Audience Retention" },
    { name: "6x Quotable Thought Snippets", icon: Quote, tag: "Micro-Content" },
    { name: "2x Sales-Enablement Teardowns", icon: Briefcase, tag: "Pipeline Assets" },
    { name: "2x Founder-Led Paid Ad Creatives", icon: Sparkles, tag: "Paid Amplification" },
    { name: "1x Category Landing Page Snippet", icon: Globe, tag: "Conversion Copy" },
    { name: "1x Strategic Talent Attraction Post", icon: Users, tag: "Recruitment" },
  ];

  // Divide for balanced desktop 2-column flanking layout around central hub
  const leftSpokes = SPOKE_ASSETS.slice(0, 5);
  const rightSpokes = SPOKE_ASSETS.slice(5, 10);

  return (
    <section id="multi-asset-engine" className={`py-24 md:py-32 bg-transparent border-t relative overflow-hidden transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      {/* Ambient center pulse */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none ${
        isLight ? 'bg-indigo-500/10' : 'bg-[#6366f1]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Mic className="w-3.5 h-3.5 text-[#6366f1]" />
            Asset Multiplier Engine
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            One Conversation,{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Many Assets
            </span>
          </h2>
          <p className={`font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            You talk for 30 minutes. INFABIO engineers an entire ecosystem of omni-channel founder marketing assets.
          </p>
        </div>

        {/* Desktop Hub-and-Spoke Diagram */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-center max-w-6xl mx-auto py-8">
          
          {/* Left Branching Chips (5 Spokes) */}
          <div className="col-span-4 space-y-4 text-right">
            {leftSpokes.map((spoke, idx) => {
              const IconComp = spoke.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-end gap-3 group ${
                    isLight 
                      ? 'bg-white/95 border border-slate-200/90 hover:border-indigo-400 hover:shadow-[0_10px_25px_rgba(99,102,241,0.12)] shadow-sm' 
                      : 'bg-[#050713]/80 hover:bg-[#0a0d20] border border-white/10 hover:border-[#6366f1]/50 shadow-md'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                      isLight ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      {spoke.tag}
                    </span>
                    <span className={`text-xs sm:text-sm font-display transition-colors font-medium ${
                      isLight ? 'text-slate-900 group-hover:text-indigo-600' : 'text-white group-hover:text-[#fda4af]'
                    }`}>
                      {spoke.name}
                    </span>
                  </div>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isLight 
                      ? 'bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' 
                      : 'bg-[#0a0d20] border border-white/10 text-[#fda4af] group-hover:border-[#fda4af]/40'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Hub Node (30-min conversation circle) */}
          <div className="col-span-4 flex justify-center relative">
            {/* Glowing outer pulse rings */}
            <div className={`absolute inset-0 m-auto w-64 h-64 rounded-full border animate-ping opacity-20 pointer-events-none ${
              isLight ? 'border-indigo-500/40' : 'border-[#6366f1]/20'
            }`} style={{ animationDuration: '6s' }} />
            <div className={`absolute inset-0 m-auto w-56 h-56 rounded-full border pointer-events-none ${
              isLight ? 'border-pink-500/40' : 'border-[#fda4af]/30'
            }`} />

            {/* Central Frosted Sphere Card */}
            <div className={`w-56 h-56 rounded-full p-6 flex flex-col items-center justify-center text-center space-y-2 z-10 group transition-all duration-500 ${
              isLight 
                ? 'bg-gradient-to-br from-white via-indigo-50/50 to-pink-50/40 border-2 border-indigo-400/90 shadow-[0_15px_45px_rgba(99,102,241,0.2)] hover:border-pink-400 hover:shadow-[0_20px_50px_rgba(244,63,94,0.25)]' 
                : 'bg-gradient-to-br from-[#12172b] via-[#050713] to-[#020308] border-2 border-[#6366f1]/60 shadow-[0_0_50px_rgba(99,102,241,0.35)] hover:border-[#fda4af]'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-inner ${
                isLight 
                  ? 'bg-indigo-100 border border-indigo-300 text-indigo-600' 
                  : 'bg-[#6366f1]/20 border border-[#6366f1]/40 text-[#fda4af]'
              }`}>
                <Mic className="w-5 h-5 animate-pulse" />
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                isLight ? 'text-indigo-600' : 'text-[#fda4af]'
              }`}>
                THE STRATEGIC HUB
              </span>
              <h3 className={`text-base font-display font-light leading-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                30-Min Founder Conversation
              </h3>
              <p className={`text-[10px] font-mono ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                1 Session = 10+ High-Value Assets
              </p>
            </div>
          </div>

          {/* Right Branching Chips (5 Spokes) */}
          <div className="col-span-4 space-y-4 text-left">
            {rightSpokes.map((spoke, idx) => {
              const IconComp = spoke.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-start gap-3 group ${
                    isLight 
                      ? 'bg-white/95 border border-slate-200/90 hover:border-indigo-400 hover:shadow-[0_10px_25px_rgba(99,102,241,0.12)] shadow-sm' 
                      : 'bg-[#050713]/80 hover:bg-[#0a0d20] border border-white/10 hover:border-[#6366f1]/50 shadow-md'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isLight 
                      ? 'bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' 
                      : 'bg-[#0a0d20] border border-white/10 text-[#fda4af] group-hover:border-[#fda4af]/40'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                      isLight ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      {spoke.tag}
                    </span>
                    <span className={`text-xs sm:text-sm font-display transition-colors font-medium ${
                      isLight ? 'text-slate-900 group-hover:text-indigo-600' : 'text-white group-hover:text-[#fda4af]'
                    }`}>
                      {spoke.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile & Tablet: Hub on top + Connected Vertical Spoke List */}
        <div className="lg:hidden space-y-8 max-w-md mx-auto text-left relative">
          {/* Top Hub */}
          <div className={`p-6 rounded-3xl text-center space-y-2.5 shadow-lg relative ${
            isLight 
              ? 'bg-gradient-to-br from-indigo-50 via-white to-pink-50 border-2 border-indigo-300 shadow-[0_15px_35px_rgba(99,102,241,0.12)]' 
              : 'bg-[#050713]/90 border border-[#6366f1]/40'
          }`}>
            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
              isLight 
                ? 'bg-indigo-100 border border-indigo-200 text-indigo-600' 
                : 'bg-[#6366f1]/20 border border-[#6366f1]/40 text-[#fda4af]'
            }`}>
              <Mic className="w-5 h-5" />
            </div>
            <span className={`text-[10px] font-mono uppercase tracking-widest font-bold block ${
              isLight ? 'text-indigo-600' : 'text-[#fda4af]'
            }`}>
              THE STRATEGIC HUB
            </span>
            <h3 className={`text-xl font-display font-light ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              30-Min Founder Conversation
            </h3>
            <p className={`text-xs font-sans font-light ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Yields 10+ custom assets deployed across your channels
            </p>
          </div>

          {/* Connected Vertical Spoke List */}
          <div className="relative pl-6 space-y-3">
            {/* Vertical connector line */}
            <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6366f1] via-[#fda4af] to-[#6366f1] opacity-50" />

            {SPOKE_ASSETS.map((spoke, idx) => {
              const IconComp = spoke.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl flex items-center gap-3 relative z-10 shadow-sm ${
                    isLight 
                      ? 'bg-white border border-slate-200/90' 
                      : 'bg-[#050713]/80 border border-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isLight 
                      ? 'bg-indigo-50 border border-indigo-100 text-indigo-600' 
                      : 'bg-[#0a0d20] border border-white/10 text-[#fda4af]'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">
                      {spoke.tag}
                    </span>
                    <span className={`text-xs sm:text-sm font-display font-light ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {spoke.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
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
