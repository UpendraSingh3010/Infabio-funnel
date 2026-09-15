import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const InfabioSystemSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const SYSTEM_STEPS = [
    {
      number: "01",
      title: "Position",
      desc: "We understand you, your business, your audience and what you should become known for.",
    },
    {
      number: "02",
      title: "Extract",
      desc: "We capture your ideas through structured conversations, notes, voice inputs and existing knowledge.",
    },
    {
      number: "03",
      title: "Create",
      desc: "Our team converts those ideas into high-quality content across formats.",
    },
    {
      number: "04",
      title: "Publish",
      desc: "Content is distributed consistently across the platforms that matter.",
    },
    {
      number: "05",
      title: "Amplify",
      desc: "We identify winning ideas and increase their reach through distribution and paid amplification where required.",
    },
    {
      number: "06",
      title: "Convert",
      desc: "We connect your founder brand to business outcomes through strategic CTAs, lead magnets, inbound systems and funnels.",
    },
  ];

  return (
    <section id="the-system" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6366f1]/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="eyebrow inline-flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6366f1]" />
            Repeatable Framework
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            The INFABIO Founder{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Marketing System
            </span>
          </h2>
        </div>

        {/* 6 Step Linear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {SYSTEM_STEPS.map((step, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group text-left ${
                  isHovered
                    ? 'bg-[#0a0d20] border border-white/30 shadow-[0_20px_50px_rgba(99,102,241,0.25)] -translate-y-1'
                    : 'bg-[#050713]/60 border border-white/5 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="font-display font-light text-4xl text-slate-600 group-hover:text-[#fda4af] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Step {step.number}</span>
                  </div>

                  <h3 className="text-2xl font-display font-light text-white group-hover:text-slate-100 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 font-sans font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[#fda4af]">INFABIO Protocol</span>
                  <span className="text-[#6366f1] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Action */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenAuditModal}
            className="btn-primary text-xs px-8 py-4 rounded-2xl uppercase tracking-widest font-black inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
          >
            <span>Deploy The 6-Step System</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
