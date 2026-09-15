import React from 'react';
import { Award, Lock, MessageSquare, Building2, Users2, Briefcase, ArrowUpRight } from 'lucide-react';

export const BenefitsSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const SIX_BENEFITS = [
    {
      title: "Build Authority",
      desc: "Position you as someone worth listening to in your industry.",
      icon: Award,
    },
    {
      title: "Create Trust",
      desc: "Let prospects understand how you think before they ever speak to your team.",
      icon: Lock,
    },
    {
      title: "Generate Inbound Opportunities",
      desc: "Turn content into conversations, leads, collaborations and partnerships.",
      icon: MessageSquare,
    },
    {
      title: "Strengthen Your Company Brand",
      desc: "A visible founder can make the company feel more credible, human and memorable.",
      icon: Building2,
    },
    {
      title: "Attract Better Talent",
      desc: "Strong people often want to work with strong leaders.",
      icon: Users2,
    },
    {
      title: "Improve Investor & Partner Perception",
      desc: "Your digital presence becomes an extension of your credibility.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="benefits" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#6366f1]" />
            Commercial Multipliers
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            What Founder Marketing{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Can Do For You
            </span>
          </h2>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIX_BENEFITS.map((b, idx) => {
            const IconComponent = b.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-[#050713]/60 hover:bg-[#0a0d20]/80 border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-left"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#6366f1] group-hover:text-[#fda4af] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-display font-light text-white group-hover:text-slate-100 transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-slate-300 font-sans font-light text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#fda4af]">
                    FOUNDER ADVANTAGE
                  </span>
                  <button
                    onClick={onOpenAuditModal}
                    className="text-xs font-semibold text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
