import React, { useState } from 'react';
import { 
  TrendingUp, Sparkles, CheckCircle2, ArrowRight, 
  User, Building2, Linkedin, Mail, Check, ShieldCheck 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CompoundsAndAuditSectionProps {
  onOpenAuditModal?: () => void;
}

export const CompoundsAndAuditSection: React.FC<CompoundsAndAuditSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    linkedinUrl: '',
    emailOrPhone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const AUDIT_CHECKLIST = [
    {
      title: "LinkedIn Profile & Positioning Teardown",
      desc: "Identify friction points causing enterprise buyers to bounce in 8 seconds."
    },
    {
      title: "Category Voice & Contrarian POV Mapping",
      desc: "Uncover the market angle your competitors are completely ignoring."
    },
    {
      title: "Competitor Whitespace Analysis",
      desc: "Map the narrative gaps you can own before competitors take notice."
    },
    {
      title: "Executive Content Opportunities Matrix",
      desc: "Identify your highest-leverage stories, case studies, and intellectual property."
    },
    {
      title: "90-Day Authority & Distribution Roadmap",
      desc: "Exact blueprint to convert 30 weekly minutes into qualified inbound deal flow."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="founder-audit" className={`py-24 md:py-32 bg-transparent border-t relative transition-colors duration-300 ${
      isLight ? 'border-slate-200' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Block: Why It Compounds (2-3 sentences max + upward-trend graph icon) */}
        <div className={`rounded-3xl p-8 sm:p-12 backdrop-blur-2xl mb-16 relative overflow-hidden text-left transition-all duration-300 ${
          isLight 
            ? 'bg-gradient-to-br from-indigo-50/90 via-white to-pink-50/50 border border-indigo-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.1)]' 
            : 'bg-gradient-to-br from-[#0a0d20]/90 to-[#050713]/90 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          {/* Ambient Glow */}
          <div className={`absolute right-0 top-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
            isLight ? 'bg-indigo-500/10' : 'bg-[#6366f1]/10'
          }`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: 2-3 Sentences Max */}
            <div className="lg:col-span-8 space-y-4">
              <span className="eyebrow inline-flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                Compounding Commercial Asset
              </span>
              <h2 className={`text-3xl sm:text-4xl font-light font-display tracking-tight leading-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Why Founder Marketing{' '}
                <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
                  Compounds
                </span>
              </h2>
              <p className={`font-sans font-light text-base sm:text-lg leading-relaxed max-w-3xl ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                Founder marketing is not an expense — it is an appreciating commercial asset. Unlike paid ads that vanish the moment you stop spending, every published insight compounds your domain authority, shortens sales cycles, and drives permanent enterprise equity. Over time, your founder voice becomes your company’s highest-margin acquisition engine.
              </p>
            </div>

            {/* Right: Upward Trend Line / Graph Stat Graphic */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className={`w-full max-w-xs p-5 rounded-2xl space-y-3 transition-all ${
                isLight 
                  ? 'bg-white border border-indigo-200 shadow-md' 
                  : 'bg-[#020308]/80 border border-white/10 shadow-inner'
              }`}>
                <div className={`flex items-center justify-between pb-2 border-b ${
                  isLight ? 'border-slate-100' : 'border-white/5'
                }`}>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    Authority Trajectory
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                    isLight 
                      ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                      : 'text-emerald-400 bg-emerald-500/15 border-emerald-500/20'
                  }`}>
                    +480% COMPOUND
                  </span>
                </div>

                {/* SVG Upward Trend Graphic */}
                <div className="h-24 w-full relative flex items-end pt-2">
                  <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible" fill="none">
                    <defs>
                      <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" stopOpacity={isLight ? "0.2" : "0.3"} />
                        <stop offset="1" stopColor="#fda4af" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="trend-stroke" x1="0" y1="80" x2="200" y2="10" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" />
                        <stop offset="0.6" stopColor="#c084fc" />
                        <stop offset="1" stopColor="#fda4af" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 10 70 Q 60 65 100 45 T 190 10 L 190 80 L 10 80 Z"
                      fill="url(#trend-fill)"
                    />
                    <path
                      d="M 10 70 Q 60 65 100 45 T 190 10"
                      stroke="url(#trend-stroke)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Glowing Apex Node */}
                    <circle cx="190" cy="10" r="4.5" fill="#fda4af" className="animate-pulse" />
                  </svg>
                </div>

                <div className={`flex items-center justify-between text-[11px] font-mono pt-1 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  <span>Day 01: Setup</span>
                  <span className={isLight ? 'text-indigo-600 font-bold' : 'text-white font-bold'}>Day 90+: Inbound Moat</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Block: Audit Checklist + Lead Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: What the Founder Brand Audit Covers */}
          <div className={`lg:col-span-6 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl flex flex-col justify-between text-left transition-all duration-300 ${
            isLight 
              ? 'bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
              : 'bg-[#050713]/80 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
          }`}>
            <div className="space-y-6">
              <span className="eyebrow inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
                Complimentary Review
              </span>

              <div className="space-y-2">
                <h3 className={`text-2xl sm:text-3xl font-display font-light ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  Founder Brand Audit
                </h3>
                <p className={`text-sm font-sans font-light leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  Before recommending an engagement, we conduct an executive diagnostic across your category presence:
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {AUDIT_CHECKLIST.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-start gap-3 transition-colors ${
                      isLight 
                        ? 'bg-slate-50/90 border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/20' 
                        : 'bg-[#0a0d20]/85 border-white/5 hover:border-[#6366f1]/30'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className={`text-xs sm:text-sm font-sans font-medium ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-[11px] sm:text-xs font-sans font-light mt-0.5 ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t flex items-center gap-2 text-xs font-mono ${
              isLight ? 'border-slate-200 text-slate-500' : 'border-white/5 text-slate-400'
            }`}>
              <ShieldCheck className="w-4 h-4 text-[#6366f1]" />
              <span>Strict NDA • 100% Confidential Executive Teardown</span>
            </div>
          </div>

          {/* Right: Lead Form (Name, Company, LinkedIn URL, Email/Phone) */}
          <div className={`lg:col-span-6 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl flex flex-col justify-between text-left transition-all duration-300 ${
            isLight 
              ? 'bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
              : 'bg-[#050713]/90 border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
          }`}>
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className={`text-3xl font-display font-light ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Strategy Session Reserved
                </h3>
                <p className={`text-sm font-sans font-light max-w-md mx-auto leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  Our strategic directors are auditing your LinkedIn presence and category positioning. We will reach out within 24 hours with your preliminary teardown.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 mb-2">
                  <span className="text-xs font-mono text-[#6366f1] uppercase tracking-wider block font-semibold">
                    Direct Executive Intake
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-display font-light ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Book Your Strategy Session
                  </h3>
                  <p className={`text-xs font-sans font-light ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Complete the 4 fields below to schedule your 1-on-1 brand teardown.
                  </p>
                </div>

                {/* Field 1: Name */}
                <div>
                  <label className={`block text-xs font-mono mb-1.5 font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    YOUR FULL NAME *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#6366f1] transition-colors ${
                        isLight 
                          ? 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white' 
                          : 'bg-[#020308]/90 border border-white/10 text-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Field 2: Company */}
                <div>
                  <label className={`block text-xs font-mono mb-1.5 font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    COMPANY NAME *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Technologies"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#6366f1] transition-colors ${
                        isLight 
                          ? 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white' 
                          : 'bg-[#020308]/90 border border-white/10 text-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Field 3: LinkedIn URL */}
                <div>
                  <label className={`block text-xs font-mono mb-1.5 font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    LINKEDIN PROFILE URL *
                  </label>
                  <div className="relative">
                    <Linkedin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="url"
                      required
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      placeholder="linkedin.com/in/founder"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#6366f1] transition-colors ${
                        isLight 
                          ? 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white' 
                          : 'bg-[#020308]/90 border border-white/10 text-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Field 4: Email / Phone */}
                <div>
                  <label className={`block text-xs font-mono mb-1.5 font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    WORK EMAIL OR DIRECT PHONE *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                      placeholder="founder@company.com or +1 (555) 000-0000"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#6366f1] transition-colors ${
                        isLight 
                          ? 'bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white' 
                          : 'bg-[#020308]/90 border border-white/10 text-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Single Repeated CTA Button ("Book My Strategy Session") */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-primary text-xs px-8 py-4 rounded-full uppercase tracking-widest font-black inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_35px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_45px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.01] active:scale-[0.98]"
                  >
                    <span>BOOK MY STRATEGY SESSION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 font-mono mt-2.5">
                    Strict NDA • No spam • Confidential review
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
