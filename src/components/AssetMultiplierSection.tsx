import React from 'react';
import { Award, Linkedin, Video, Layers, Quote, Zap, Briefcase, Mail, Globe, Sparkles, ArrowRight } from 'lucide-react';

export const AssetMultiplierSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const MULTIPLIER_ITEMS = [
    { title: "1 founder story", icon: Award },
    { title: "3 LinkedIn posts", icon: Linkedin },
    { title: "2 short-form videos", icon: Video },
    { title: "1 carousel", icon: Layers },
    { title: "5 thought-leadership snippets", icon: Quote },
    { title: "Multiple hooks", icon: Zap },
    { title: "Sales-enablement content", icon: Briefcase },
    { title: "Newsletter ideas", icon: Mail },
    { title: "Website insights", icon: Globe },
    { title: "Ad creatives", icon: Sparkles },
  ];

  return (
    <section id="multiplier" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
            Asymmetric Output
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            One Founder.{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Multiple Content Assets.
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-200 font-display font-light">
            One 30-minute founder conversation can become:
          </p>
        </div>

        {/* 10 Verbatim Derivative Deliverables */}
        <div className="rounded-3xl bg-[#050713]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 mb-14 shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {MULTIPLIER_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#0a0d20]/80 border border-white/5 hover:border-white/20 transition-all flex flex-col items-center text-center justify-center space-y-3 group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#6366f1] group-hover:text-[#fda4af] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm sm:text-base font-sans font-medium text-white">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Punchline Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#6366f1]/20 via-[#fda4af]/15 to-transparent border border-[#6366f1]/30 text-center max-w-3xl mx-auto shadow-lg">
            <p className="text-xl sm:text-2xl font-display font-light text-white">
              Your knowledge becomes an asset — not a conversation that disappears after a meeting.
            </p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenAuditModal}
              className="btn-primary text-xs px-8 py-3.5 rounded-full uppercase tracking-widest font-black inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
            >
              <span>Multiply Your Founder Knowledge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
