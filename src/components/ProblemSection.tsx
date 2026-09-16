import React, { useState } from 'react';
import { 
  Clock, AlertTriangle, CheckCircle2, TrendingDown, 
  TrendingUp, ShieldAlert, ShieldCheck, ArrowRight, Zap, Activity 
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenAuditModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenAuditModal }) => {
  const [activeScenario, setActiveScenario] = useState<'dormant' | 'infabio'>('dormant');

  const TIMELINE_DATA = {
    dormant: {
      label: "Unmanaged / Dormant Presence",
      tagline: "High commercial friction & lost deal velocity",
      riskLevel: "CRITICAL RISK",
      riskBadgeClass: "bg-rose-500/15 text-rose-400 border-rose-500/30",
      dealVerdict: "Buyer Hesitates & shops competitors",
      pipelineMetric: "-68% Inbound Conviction",
      steps: [
        {
          second: "00:02s",
          phase: "First Impression",
          observation: "Feed inactive for 90+ days. Last post is a sterile company press release.",
          status: "negative"
        },
        {
          second: "00:05s",
          phase: "Depth & Thesis Check",
          observation: "No clear category POV. Appears reactive rather than defining the sector.",
          status: "negative"
        },
        {
          second: "00:08s",
          phase: "Commercial Verdict",
          observation: "Prospect enters sales call skeptical — or cancels to talk to a vocal competitor.",
          status: "negative"
        }
      ],
      scores: {
        categoryAuthority: "24/100",
        buyerTrust: "31/100",
        salesCycleImpact: "+42 Days (Slow)"
      }
    },
    infabio: {
      label: "INFABIO Authority Protocol",
      tagline: "Pre-sold buyers & compounding inbound gravity",
      riskLevel: "CATEGORY MOAT",
      riskBadgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      dealVerdict: "Buyer pre-sold before Call 1",
      pipelineMetric: "+4.2x Inbound Pipeline",
      steps: [
        {
          second: "00:02s",
          phase: "First Impression",
          observation: "Pinned teardown on industry fallacy with active executive engagement.",
          status: "positive"
        },
        {
          second: "00:05s",
          phase: "Depth & Thesis Check",
          observation: "Proprietary frameworks and clear contrarian stance solving 6-figure problems.",
          status: "positive"
        },
        {
          second: "00:08s",
          phase: "Commercial Verdict",
          observation: "Prospect arrives on the discovery call already agreeing with your worldview.",
          status: "positive"
        }
      ],
      scores: {
        categoryAuthority: "96/100",
        buyerTrust: "98/100",
        salesCycleImpact: "-55% (Fast-Track)"
      }
    }
  };

  const current = TIMELINE_DATA[activeScenario];

  return (
    <section id="the-problem" className="py-24 md:py-32 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Condensed Agitation Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow inline-flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                The 8-Second Due Diligence
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-display tracking-tight leading-tight">
              Your Personal Brand Is{' '}
              <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
                Already Being Judged
              </span>
            </h2>

            {/* Condensed Copy */}
            <div className="space-y-4 text-slate-300 font-sans font-light leading-relaxed text-base sm:text-lg">
              <p>
                When prospective enterprise buyers, Tier-1 investors, and top operators hear about your company, they don’t just read your homepage — they immediately search your name.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                In under eight seconds on LinkedIn, they evaluate your recent thinking, test whether you articulate a clear category point of view, and decide whether you lead your market or merely follow it.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                If your presence is dormant, erratic, or outsourced to generic AI platitudes, you’re losing commercial trust and deal velocity before your team ever gets on a discovery call.
              </p>
            </div>

            {/* Micro Checklist of Buyer Audit Points as Compact Chip Row */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {[
                "Point of View Clarity",
                "Domain Mastery Proof",
                "Market Conviction",
                "Executive Stature"
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-[#0a0d20] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fda4af]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="btn-primary text-xs px-8 py-4 rounded-full uppercase tracking-widest font-black inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_35px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_45px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>BOOK MY STRATEGY SESSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 8-Second Due Diligence Simulator (Replaces dummy CEO card) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-[#050713]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.7)] text-left space-y-5 relative overflow-hidden group">
              
              {/* Card Watermark Glow */}
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#6366f1]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Bar with 8.0s Decision Timer */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#6366f1]" />
                  <span className="text-[11px] font-mono text-slate-300 uppercase tracking-widest font-semibold">
                    Buyer Audit Diagnostic
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fda4af] animate-pulse" />
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    8.0s WINDOW
                  </span>
                </div>
              </div>

              {/* Scenario Toggle (Unmanaged vs INFABIO) */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#0a0d20] border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveScenario('dormant')}
                  className={`py-2 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeScenario === 'dormant'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Dormant Presence</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveScenario('infabio')}
                  className={`py-2 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeScenario === 'infabio'
                      ? 'bg-[#6366f1]/25 text-[#fda4af] border border-[#6366f1]/40 shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>INFABIO Protocol</span>
                </button>
              </div>

              {/* Status Header for Scenario */}
              <div className="p-3.5 rounded-2xl bg-[#0a0d20]/80 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Buyer Verdict Simulation
                  </span>
                  <div className="text-sm font-display text-white font-light">
                    {current.dealVerdict}
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold ${current.riskBadgeClass}`}>
                  {current.riskLevel}
                </span>
              </div>

              {/* The 3 Timeline Milestones (0-2s, 3-5s, 6-8s) */}
              <div className="space-y-2.5">
                {current.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border transition-all ${
                      step.status === 'negative'
                        ? 'bg-rose-950/15 border-rose-900/30 text-slate-300'
                        : 'bg-[#0a0d20]/90 border-indigo-950/40 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-bold ${
                          step.status === 'negative' ? 'text-rose-400' : 'text-[#fda4af]'
                        }`}>
                          {step.second}
                        </span>
                        <span className="text-xs font-display text-white">
                          {step.phase}
                        </span>
                      </div>
                      {step.status === 'negative' ? (
                        <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                      ) : (
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </div>
                    <p className="text-xs font-sans font-light text-slate-300 leading-snug pl-1">
                      {step.observation}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom 3-Metric Scorecard */}
              <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-[#0a0d20]/80 border border-white/5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                    Authority Score
                  </span>
                  <span className={`text-xs font-mono font-bold mt-0.5 block ${
                    activeScenario === 'dormant' ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {current.scores.categoryAuthority}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-[#0a0d20]/80 border border-white/5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                    Buyer Trust
                  </span>
                  <span className={`text-xs font-mono font-bold mt-0.5 block ${
                    activeScenario === 'dormant' ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {current.scores.buyerTrust}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-[#0a0d20]/80 border border-white/5">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                    Sales Velocity
                  </span>
                  <span className={`text-xs font-mono font-bold mt-0.5 block ${
                    activeScenario === 'dormant' ? 'text-rose-400' : 'text-[#fda4af]'
                  }`}>
                    {current.scores.salesCycleImpact}
                  </span>
                </div>
              </div>

              {/* Diagnostic Footer Notice */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span>Metric: {current.pipelineMetric}</span>
                <span className="text-[#6366f1] font-medium flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  <span>Real-Time Diagnostic</span>
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
