import React from 'react';
import { Crosshair, Target, BookOpen, Video, Palette, Share2, Sparkles, ArrowRight } from 'lucide-react';

export const WhatWeHandleSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const WHAT_WE_HANDLE_MODULES = [
    {
      id: "positioning",
      title: "Founder Positioning",
      tagline: "We identify what you should be known for.",
      icon: Crosshair,
      points: [
        "Your category & expertise",
        "Narrative & unique viewpoint",
        "Brand voice & content pillars"
      ]
    },
    {
      id: "strategy",
      title: "Content Strategy",
      tagline: "Every piece serves a distinct commercial purpose:",
      icon: Target,
      points: [
        "Authority & trust building",
        "Targeted reach & engagement",
        "Lead generation & recruitment"
      ]
    },
    {
      id: "thought-leadership",
      title: "Thought Leadership Content",
      tagline: "Converting your ideas into commanding written assets:",
      icon: BookOpen,
      points: [
        "LinkedIn posts & founder stories",
        "Industry insights & contrarian takes",
        "Case studies & business breakdowns"
      ]
    },
    {
      id: "video-content",
      title: "Video Content",
      tagline: "Founder-led videos that feel natural, sharp and credible:",
      icon: Video,
      points: [
        "Short-form reels & talking-head clips",
        "Founder interviews & podcast cuts",
        "Educational explainers & behind-the-scenes"
      ]
    },
    {
      id: "brand-design",
      title: "Personal Brand Design",
      tagline: "A cohesive visual system matching your executive thinking:",
      icon: Palette,
      points: [
        "Custom carousels & post templates",
        "Video thumbnails & quote graphics",
        "Executive reports & whitepaper design"
      ]
    },
    {
      id: "distribution",
      title: "Distribution & Growth",
      tagline: "Optimised placement so the right buyers and investors see it:",
      icon: Share2,
      points: [
        "Multi-platform scheduling & formatting",
        "Engagement monitoring & signal tracking",
        "Continuous optimization on business outcomes"
      ]
    }
  ];

  return (
    <section id="what-we-handle" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
            Turnkey Deliverables
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            What We{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Handle
            </span>
          </h2>
        </div>

        {/* 6 Clean Modular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_HANDLE_MODULES.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-[#050713]/70 hover:bg-[#0a0d20] border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-left"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#6366f1] group-hover:text-[#fda4af] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-display font-light text-white group-hover:text-slate-100">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
                    {item.tagline}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-white/5">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#fda4af]">INFABIO MANAGED</span>
                  <button
                    onClick={onOpenAuditModal}
                    className="text-xs font-semibold text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Delegate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
