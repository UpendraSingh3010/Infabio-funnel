import React, { useState } from 'react';
import { Search, UserCheck, FileText, Compass, ShieldCheck, AlertCircle, ArrowRight, Eye, CheckCircle2, XCircle } from 'lucide-react';

export const JudgedSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'uncontrolled' | 'controlled'>('controlled');

  const JUDGED_STEPS = [
    {
      step: "01",
      action: "When someone hears about you or your company, they search.",
      subtext: "Before visiting your pricing page, high-value prospects, investors, and prospective executives Google your name.",
      icon: Search,
    },
    {
      step: "02",
      action: "They check your LinkedIn.",
      subtext: "They want to verify who is steering the ship and whether you look like an active leader or a ghost account.",
      icon: UserCheck,
    },
    {
      step: "03",
      action: "They look at your content.",
      subtext: "They look to see if you have published recent thinking, original breakdowns, or if your page has been dead for months.",
      icon: FileText,
    },
    {
      step: "04",
      action: "They see whether you have a point of view.",
      subtext: "Do you challenge category conventions with clarity, or do you regurgitate generic corporate announcements?",
      icon: Compass,
    },
    {
      step: "05",
      action: "They decide whether you feel credible.",
      subtext: "In seconds, they form an unconscious conviction about whether your company can solve high-stakes problems.",
      icon: ShieldCheck,
    },
    {
      step: "06",
      action: "And often, they make that decision before ever speaking to you.",
      subtext: "The sale, investment, or recruitment offer is won or lost before your first meeting is ever scheduled.",
      icon: AlertCircle,
    },
  ];

  return (
    <section id="judged-section" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#6366f1]" />
            The Silent Commercial Audit
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            Your Personal Brand Is{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Already Being Judged
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-200 font-display font-light">
            The question is whether you’re controlling the narrative.
          </p>
        </div>

        {/* 6-Step Judgment Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {JUDGED_STEPS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 sm:p-7 bg-[#050713]/60 hover:bg-[#0a0d20]/80 border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-light font-display text-slate-600 group-hover:text-[#fda4af] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-[#6366f1] group-hover:border-[#6366f1]/30 transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-light text-white leading-snug group-hover:text-slate-100 transition-colors">
                    {item.action}
                  </h3>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans font-light leading-relaxed pt-3 border-t border-white/5 text-left">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Punchline Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-red-500/10 via-[#050713]/80 to-[#6366f1]/10 border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
          <p className="text-2xl sm:text-3xl font-display font-light text-white leading-relaxed">
            If your digital presence looks inactive, inconsistent or generic,{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient font-normal italic">
              you’re leaving trust on the table.
            </span>
          </p>
          <div className="pt-6">
            <button
              onClick={onOpenAuditModal}
              className="btn-primary text-xs px-8 py-3.5 rounded-full uppercase tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
            >
              <span>Take Control Of Your Narrative</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
