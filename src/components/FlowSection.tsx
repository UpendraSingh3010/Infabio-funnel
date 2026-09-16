import React from 'react';
import { Brain, Mic, PenTool, Share2, Activity, ArrowRight, ArrowDown } from 'lucide-react';

export const FlowSection: React.FC = () => {
  const FLOW_NODES = [
    {
      step: "01",
      title: "Think",
      phrase: "30-Min Weekly Brief",
      icon: Brain,
      tag: "Founder",
      color: "#6366f1"
    },
    {
      step: "02",
      title: "Capture",
      phrase: "Extract Raw Insights",
      icon: Mic,
      tag: "INFABIO",
      color: "#fda4af"
    },
    {
      step: "03",
      title: "Shape",
      phrase: "High-Craft Editorial",
      icon: PenTool,
      tag: "Editorial",
      color: "#c084fc"
    },
    {
      step: "04",
      title: "Distribute",
      phrase: "Multi-Platform Syndication",
      icon: Share2,
      tag: "Distribution",
      color: "#6366f1"
    },
    {
      step: "05",
      title: "Optimise",
      phrase: "Inbound & Signal Iteration",
      icon: Activity,
      tag: "Analytics",
      color: "#fda4af"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#6366f1]" />
            Frictionless Operating Model
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-display tracking-tight leading-tight">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Works
            </span>
          </h2>
          <p className="text-slate-300 font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Zero calendar strain. A streamlined 5-stage pipeline engineered for busy founders.
          </p>
        </div>

        {/* Desktop / Tablet Horizontal 5-Node Flow with Arrows */}
        <div className="hidden lg:grid grid-cols-5 gap-3 items-center relative">
          {FLOW_NODES.map((node, idx) => {
            const IconComp = node.icon;
            const isLast = idx === FLOW_NODES.length - 1;

            return (
              <React.Fragment key={idx}>
                <div className="relative group">
                  {/* Card Container: Icon per node, 2-3 words, NO paragraph text */}
                  <div className="p-6 rounded-3xl bg-[#050713]/80 border border-white/10 hover:border-white/25 transition-all duration-300 text-center space-y-4 group-hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] relative">
                    {/* Top Step Pill */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 font-bold">
                        STAGE {node.step}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                        {node.tag}
                      </span>
                    </div>

                    {/* Icon Circle */}
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0a0d20] border border-white/10 flex items-center justify-center text-white group-hover:border-[#6366f1]/50 group-hover:text-[#fda4af] transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Node Title */}
                    <h3 className="text-xl font-display font-light text-white">
                      {node.title}
                    </h3>

                    {/* 2-3 Words Label (Strictly no paragraph text) */}
                    <p className="text-xs font-mono font-medium text-slate-300">
                      {node.phrase}
                    </p>

                    {/* Bottom Indicator */}
                    <div className="h-1 w-8 mx-auto rounded-full bg-white/10 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#fda4af] transition-all duration-300" />
                  </div>

                  {/* Flow Arrow to Next Node */}
                  {!isLast && (
                    <div className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0a0d20] border border-white/15 items-center justify-center text-slate-400 shadow-md">
                      <ArrowRight className="w-3.5 h-3.5 text-[#fda4af]" />
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical / Wrap Flow with Connecting Arrows */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto text-left">
          {FLOW_NODES.map((node, idx) => {
            const IconComp = node.icon;
            const isLast = idx === FLOW_NODES.length - 1;

            return (
              <div key={idx} className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#050713]/90 border border-white/10 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#0a0d20] border border-white/10 flex items-center justify-center text-white shrink-0">
                    <IconComp className="w-5 h-5 text-[#fda4af]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500">STAGE {node.step}</span>
                      <span className="text-[9px] font-mono px-2 py-0.2 rounded bg-white/5 text-slate-400">
                        {node.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-display text-white font-light">
                      {node.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-300">
                      {node.phrase}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <div className="flex justify-center -my-1">
                    <ArrowDown className="w-4 h-4 text-[#6366f1]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
