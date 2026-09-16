import React from 'react';
import { Award, Linkedin, Video, Layers, Quote, Zap, Briefcase, Mail, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AssetMultiplierSection: React.FC<{ onOpenAuditModal: () => void }> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();

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
    <section id="multiplier" className={`py-24 md:py-32 bg-transparent border-t relative transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
            Asymmetric Output
          </span>
          <h2 className={`text-4xl sm:text-5xl md:text-[3.5rem] font-light font-display tracking-tight leading-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            One Founder.{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Multiple Content Assets.
            </span>
          </h2>
          <p className={`text-xl sm:text-2xl font-display font-light ${
            isLight ? 'text-slate-700' : 'text-slate-200'
          }`}>
            One 30-minute founder conversation can become:
          </p>
        </div>

        {/* 10 Verbatim Derivative Deliverables */}
        <div className={`rounded-3xl backdrop-blur-2xl p-8 sm:p-12 mb-14 transition-all duration-300 ${
          isLight 
            ? 'bg-gradient-to-br from-indigo-50/80 via-white to-pink-50/40 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
            : 'bg-[#050713]/80 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {MULTIPLIER_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 transition-all flex flex-col items-center text-center justify-center space-y-3 group ${
                    isLight 
                      ? 'bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-[0_10px_25px_rgba(99,102,241,0.12)] shadow-sm' 
                      : 'bg-[#0a0d20]/80 border border-white/5 hover:border-white/20 shadow-sm'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                    isLight 
                      ? 'bg-indigo-50 border border-indigo-100 text-indigo-600' 
                      : 'bg-white/5 border border-white/10 text-[#6366f1] group-hover:text-[#fda4af]'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className={`text-sm sm:text-base font-sans font-medium ${
                    isLight ? 'text-slate-800' : 'text-white'
                  }`}>
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Punchline Banner */}
          <div className={`mt-10 p-6 rounded-2xl border text-center max-w-3xl mx-auto shadow-lg ${
            isLight 
              ? 'bg-gradient-to-r from-indigo-50 via-pink-50 to-indigo-50/50 border-indigo-200 text-indigo-950' 
              : 'bg-gradient-to-r from-[#6366f1]/20 via-[#fda4af]/15 to-transparent border-[#6366f1]/30 text-white'
          }`}>
            <p className={`text-xl sm:text-2xl font-display font-light ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
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
