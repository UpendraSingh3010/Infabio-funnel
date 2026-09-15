import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, CheckCircle2, User, Mail, Globe, Linkedin, Check } from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditSectionProps {
  onOpenModal?: () => void;
  onOpenAuditModal?: () => void;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ onOpenModal, onOpenAuditModal }) => {
  const triggerModal = onOpenAuditModal || onOpenModal || (() => {});

  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    email: '',
    linkedinUrl: '',
    companyName: '',
    websiteUrl: '',
    category: 'B2B SaaS / Tech',
    currentCadence: 'Occasional / Irregular',
    biggestObstacle: 'No time to write consistently',
    primaryGoal: 'Generate inbound qualified leads & authority',
    preferredDate: '',
    preferredTime: '10:00 AM',
  });

  const [submitted, setSubmitted] = useState(false);

  const ANALYSE_LIST = [
    "Your current digital presence",
    "Your positioning",
    "Your LinkedIn profile",
    "Your existing content",
    "Your competitors",
    "Your category",
    "Your content opportunities",
    "Your founder narrative",
    "And where you can build authority fastest."
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="founder-audit" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="eyebrow inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
            Complimentary Diagnostic
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-light text-white font-display tracking-tight leading-tight">
            Start With A{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
              Founder Brand Audit
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 font-display font-light">
            We’ll analyse:
          </p>
        </div>

        {/* The 2-Column Audit Engine & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: What We'll Analyse */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-12 bg-[#050713]/80 border border-white/10 backdrop-blur-2xl flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.6)] text-left">
            <div className="space-y-6">
              <span className="text-xs font-mono text-[#fda4af] uppercase tracking-wider block">
                9-Point Executive Review
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-light text-white">
                Deep Commercial Diagnostic
              </h3>

              <div className="space-y-3 pt-2">
                {ANALYSE_LIST.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#0a0d20]/90 border border-white/5 flex items-center gap-3 transition-all hover:border-[#6366f1]/30"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm font-sans font-light text-slate-200">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/5 space-y-3">
              <p className="text-base text-slate-300 font-display font-light">
                Book your Founder Marketing Strategy Session with <strong className="text-white font-semibold">INFABIO</strong>.
              </p>
              <button
                onClick={triggerModal}
                className="btn-primary text-xs w-full py-4 rounded-2xl uppercase tracking-widest font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
              >
                <span>BOOK MY STRATEGY SESSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Direct Intake Form */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0a0d20] to-[#050713] border border-white/15 backdrop-blur-2xl flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.6)] text-left">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-light text-white">
                  Audit Request Received
                </h3>
                <p className="text-sm text-slate-300 font-sans font-light max-w-md mx-auto leading-relaxed">
                  Our senior strategic team is reviewing your LinkedIn profile and category positioning. We will reach out within 24 hours with your preliminary teardown.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-4">
                  <span className="text-xs font-mono text-[#6366f1] uppercase tracking-wider block">
                    Instant Confidential Reservation
                  </span>
                  <h3 className="text-2xl font-display font-light text-white">
                    Request Strategy Teardown
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      YOUR FULL NAME *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#020308]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6366f1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      WORK EMAIL *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="founder@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#020308]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6366f1]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      LINKEDIN PROFILE URL *
                    </label>
                    <div className="relative">
                      <Linkedin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="url"
                        required
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        placeholder="linkedin.com/in/founder"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#020308]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6366f1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      COMPANY WEBSITE *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#020308]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6366f1]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    CATEGORY / SECTOR
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#020308]/80 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6366f1]"
                  >
                    <option value="B2B SaaS / Tech">B2B SaaS / Enterprise Tech</option>
                    <option value="Agency / Consulting">Agency / Consulting Firm</option>
                    <option value="D2C / Consumer">D2C / Consumer Brand</option>
                    <option value="Fintech / Web3">Fintech / Financial Services</option>
                    <option value="Healthcare / Bio">Healthcare / HealthTech</option>
                    <option value="Industrial / Defense">Defense / Manufacturing</option>
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full btn-primary text-xs py-4 rounded-2xl uppercase tracking-widest font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
                  >
                    <span>BOOK MY STRATEGY SESSION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 font-mono mt-2.5">
                    Strict NDA • 100% Confidential Executive Review
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
