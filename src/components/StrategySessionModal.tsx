import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { AuditFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

interface StrategySessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategySessionModal: React.FC<StrategySessionModalProps> = ({ isOpen, onClose }) => {
  const { isLight } = useTheme();
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    email: '',
    linkedinUrl: '',
    companyName: '',
    websiteUrl: '',
    category: 'B2B SaaS / Tech',
    currentCadence: 'Occasional / Irregular',
    biggestObstacle: 'No time to create content consistently',
    primaryGoal: 'Build category authority & inbound pipeline',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in duration-200 ${
      isLight ? 'bg-slate-900/40' : 'bg-black/85'
    }`}>
      <div className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto transition-colors duration-300 ${
        isLight
          ? 'bg-white border border-slate-200 text-slate-900 shadow-[0_25px_60px_rgba(15,23,42,0.18)]'
          : 'bg-[#050713]/95 border border-white/15 text-white shadow-[0_30px_90px_rgba(0,0,0,0.8)]'
      }`}>
        
        {/* Glow accent */}
        <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl pointer-events-none ${
          isLight ? 'bg-[#6366f1]/10' : 'bg-[#6366f1]/15'
        }`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer z-10 ${
            isLight
              ? 'bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              : 'bg-[#0a0d20] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 text-left">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className={`text-3xl font-display font-light ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Strategy Diagnostic Booked
              </h3>
              <p className={`text-sm font-sans font-light max-w-md mx-auto mt-2 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                We have confirmed your 1-on-1 Strategy Session for <span className="text-[#e11d48] font-semibold">{formData.companyName || 'your business'}</span>.
              </p>
            </div>

            <div className={`p-4 rounded-2xl border text-xs space-y-2 font-mono ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-[#020308]/70 border-white/10 text-slate-300'
            }`}>
              <div className={`flex justify-between border-b pb-1 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
                <span>Executive:</span>
                <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{formData.fullName || 'Registered Founder'}</span>
              </div>
              <div className={`flex justify-between border-b pb-1 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
                <span>Confirmation Dispatch:</span>
                <span className="text-[#6366f1] font-semibold">{formData.email || 'Email provided'}</span>
              </div>
              <div className="flex justify-between">
                <span>Focus:</span>
                <span className="text-emerald-500 font-semibold">{formData.primaryGoal}</span>
              </div>
            </div>

            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              isLight ? 'bg-indigo-50/70 border-indigo-100' : 'bg-[#6366f1]/10 border-[#6366f1]/20'
            }`}>
              <ShieldCheck className="w-5 h-5 text-[#6366f1] shrink-0" />
              <p className={`text-xs font-sans font-light ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Our partners are preparing your confidential competitor analysis and narrative teardown.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full btn-primary text-xs py-3.5 rounded-2xl uppercase tracking-widest font-black cursor-pointer shadow-lg shadow-[#6366f1]/25"
            >
              Close Confirmation
            </button>
          </div>
        ) : (
          <div className="space-y-6 text-left">
            <div>
              <span className="eyebrow inline-flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
                Direct Executive Access
              </span>
              <h3 className={`text-3xl font-display font-light tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Book Your Free Strategy Session
              </h3>
              <p className={`text-xs sm:text-sm font-sans font-light mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                45 minutes of actionable teardown with our leadership team. 100% confidential.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-mono mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#6366f1] focus:bg-white'
                        : 'bg-[#0a0d20] border-white/10 text-white focus:border-[#6366f1]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-mono mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#6366f1] focus:bg-white'
                        : 'bg-[#0a0d20] border-white/10 text-white focus:border-[#6366f1]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-mono mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Health"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#6366f1] focus:bg-white'
                        : 'bg-[#0a0d20] border-white/10 text-white focus:border-[#6366f1]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-mono mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Website URL
                  </label>
                  <input
                    type="text"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#6366f1] focus:bg-white'
                        : 'bg-[#0a0d20] border-white/10 text-white focus:border-[#6366f1]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-[11px] uppercase tracking-wider font-mono mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Personal LinkedIn Profile *
                </label>
                <input
                  type="text"
                  required
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/yourname"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#6366f1] focus:bg-white'
                      : 'bg-[#0a0d20] border-white/10 text-white focus:border-[#6366f1]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-[11px] uppercase tracking-wider font-mono mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Primary Objective
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border cursor-pointer ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#6366f1] focus:bg-white'
                      : 'bg-[#0a0d20] border-white/10 text-white focus:border-[#6366f1]'
                  }`}
                >
                  <option value="Build category authority & inbound pipeline">Build Category Authority &amp; Inbound Pipeline</option>
                  <option value="Stop ad budget waste & improve ROAS">Stop Ad Budget Waste &amp; Improve ROAS</option>
                  <option value="Position founder for upcoming fundraising">Position Founder For Upcoming Fundraising</option>
                  <option value="Establish B2B market presence">Establish B2B Market Presence</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary text-xs py-3.5 rounded-2xl uppercase tracking-widest font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#6366f1]/25"
                >
                  <span>Confirm Free Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className={`flex items-center justify-center gap-2 text-[11px] font-sans font-light ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                <ShieldCheck className="w-3.5 h-3.5 text-[#6366f1]" />
                <span>Zero sales pressure. 100% strategic value.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
