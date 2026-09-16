import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Mic, TrendingUp, Sparkles, CheckCircle2, Volume2 } from 'lucide-react';
import { HERO_CONTENT } from '../data/infabioData';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onOpenAuditModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuditModal }) => {
  const { isLight } = useTheme();
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(true);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Strategic Message */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="eyebrow inline-flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6366f1]" />
                {HERO_CONTENT.badge}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] font-light tracking-tight leading-[1.08] font-display transition-colors duration-300 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              {HERO_CONTENT.titlePrimary}{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">
                {HERO_CONTENT.titleSecondary}
              </span>
            </h1>

            {/* Subhead & Condensed Value Thesis */}
            <div className="space-y-4 max-w-2xl">
              <p className={`text-lg sm:text-xl font-display font-light leading-snug transition-colors duration-300 ${
                isLight ? 'text-slate-800' : 'text-slate-200'
              }`}>
                Your company has a brand. Today, your founder needs one too.
              </p>
              <p className={`text-sm sm:text-base font-sans font-light leading-relaxed transition-colors duration-300 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                People don’t just follow companies anymore — they follow the people behind them. 
                INFABIO turns your founder’s expertise into visibility, executive authority, and commercial pipeline without stealing hours from your calendar.
              </p>
            </div>

            {/* Standard Primary CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenAuditModal}
                id="hero-primary-cta"
                className="btn-primary text-xs px-8 py-4 rounded-full uppercase tracking-widest font-black inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_35px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_45px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>BOOK MY STRATEGY SESSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className={`flex items-center gap-2 text-xs font-mono transition-colors duration-300 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Confidential Executive Diagnostic</span>
              </div>
            </div>

            {/* Micro Credibility Indicators */}
            <div className={`pt-4 border-t flex flex-wrap items-center gap-6 text-xs font-mono transition-colors duration-300 ${
              isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
            }`}>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#fda4af]" />
                <span>Zero Ghostwriting Clichés</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-[#6366f1]" />
                <span>30 Mins Weekly Voice Extraction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md relative group">
              
              {/* Subtle Ambient Backlight Glow */}
              <div className={`absolute -inset-2 rounded-3xl blur-2xl transition duration-1000 pointer-events-none ${
                isLight
                  ? 'bg-gradient-to-tr from-indigo-500/20 via-pink-400/15 to-transparent opacity-80 group-hover:opacity-100'
                  : 'bg-gradient-to-tr from-[#6366f1]/30 via-[#fda4af]/20 to-transparent opacity-75 group-hover:opacity-100'
              }`} />

              {/* High-Craft Founder Card Container */}
              <div className={`relative rounded-3xl backdrop-blur-2xl p-6 sm:p-7 text-left space-y-5 transition-all duration-300 ${
                isLight
                  ? 'bg-white/95 border border-indigo-200/90 shadow-[0_25px_60px_rgba(99,102,241,0.14)]'
                  : 'bg-[#050713]/90 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.7)]'
              }`}>
                
                {/* Header Tag Bar */}
                <div className={`flex items-center justify-between pb-3.5 border-b transition-colors duration-300 ${
                  isLight ? 'border-slate-200/90' : 'border-white/10'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${
                      isLight ? 'text-slate-800' : 'text-slate-200'
                    }`}>
                      Founder Profile
                    </span>
                  </div>
                  
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider border flex items-center gap-1.5 transition-colors ${
                    isLight 
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm' 
                      : 'bg-[#6366f1]/20 border-[#6366f1]/30 text-[#fda4af]'
                  }`}>
                    <Sparkles className="w-3 h-3 text-[#fda4af]" />
                    <span>AUTHORITY: 98/100</span>
                  </span>
                </div>

                {/* Portrait & Silhouette Canvas */}
                <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-end justify-center transition-all duration-300 ${
                  isLight
                    ? 'bg-gradient-to-b from-indigo-50/90 via-white to-pink-50/50 border border-indigo-100 shadow-inner'
                    : 'bg-gradient-to-b from-[#0a0d20] via-[#050713] to-[#020308] border border-white/5 shadow-inner'
                }`}>
                  {/* Subtle Grid Lines */}
                  <div className={`absolute inset-0 pointer-events-none ${
                    isLight ? 'bg-grid-pattern opacity-15' : 'bg-grid-pattern opacity-40'
                  }`} />
                  
                  {/* Ambient Backlight Halo behind silhouette */}
                  <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                    isLight ? 'bg-indigo-400/20' : 'bg-gradient-to-tr from-[#6366f1]/35 to-[#fda4af]/25'
                  }`} />

                  {/* SVG Executive Silhouette */}
                  <svg
                    viewBox="0 0 240 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 w-48 sm:w-56 h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                    aria-label="Executive Founder Silhouette"
                  >
                    {/* Head / Face Contour */}
                    <circle
                      cx="120"
                      cy="72"
                      r="38"
                      fill={isLight ? "#1e1b4b" : "#1e243d"}
                      stroke="url(#silhouette-border)"
                      strokeWidth="2.5"
                    />
                    {/* Glasses Accent / Intellectual Profile */}
                    <path
                      d="M102 70 H116 M124 70 H138 M116 70 C118 68 122 68 124 70"
                      stroke="#fda4af"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Shoulders & Suit Torso */}
                    <path
                      d="M52 220 C52 165 78 140 120 140 C162 140 188 165 188 220 Z"
                      fill={isLight ? "#0f172a" : "#12172b"}
                      stroke="url(#silhouette-border)"
                      strokeWidth="2.5"
                    />
                    {/* Lapel & Collar details */}
                    <path
                      d="M100 142 L120 190 L140 142"
                      stroke="#6366f1"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M120 190 L120 220"
                      stroke="#fda4af"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <defs>
                      <linearGradient id="silhouette-border" x1="52" y1="34" x2="188" y2="220" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#fda4af" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Floating Top Category Authority Chip */}
                  <div className={`absolute top-3 left-3 z-20 px-3 py-1.5 rounded-xl border backdrop-blur-md flex items-center gap-2 shadow-md transition-colors ${
                    isLight 
                      ? 'bg-white/95 border-slate-200/90 text-slate-800' 
                      : 'bg-[#050713]/90 border-white/10 text-slate-200'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 text-[#fda4af]" />
                    <span className="text-[11px] font-mono font-medium">
                      Top 1% Category Voice
                    </span>
                  </div>

                  {/* Floating Verified Shield Chip */}
                  <div className={`absolute top-3 right-3 z-20 px-3 py-1.5 rounded-xl border backdrop-blur-md flex items-center gap-1.5 shadow-md transition-colors ${
                    isLight 
                      ? 'bg-white/95 border-slate-200/90 text-slate-800' 
                      : 'bg-[#050713]/90 border-white/10 text-slate-200'
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#6366f1]" />
                    <span className="text-[11px] font-mono font-medium">Verified IP</span>
                  </div>

                  {/* Audio Frequency Waveform Overlay on Bottom */}
                  <div className={`absolute bottom-2.5 left-3 right-3 z-20 py-1.5 px-3 rounded-xl border backdrop-blur-md flex items-center justify-between text-[10px] font-mono transition-colors shadow-md ${
                    isLight 
                      ? 'bg-white/95 border-slate-200/90 text-slate-700' 
                      : 'bg-[#050713]/85 border-white/10 text-slate-300'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <Volume2 className="w-3 h-3 text-[#6366f1]" />
                      <span className="font-semibold">Voice Extraction</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className={`w-1 h-2 rounded-full ${isPlayingAudio ? 'animate-pulse' : ''} bg-[#6366f1]`} />
                      <span className={`w-1 h-4 rounded-full ${isPlayingAudio ? 'animate-pulse' : ''} bg-[#fda4af]`} style={{ animationDelay: '0.15s' }} />
                      <span className={`w-1 h-3 rounded-full ${isPlayingAudio ? 'animate-pulse' : ''} bg-[#6366f1]`} style={{ animationDelay: '0.35s' }} />
                      <span className={`w-1 h-5 rounded-full ${isPlayingAudio ? 'animate-pulse' : ''} bg-[#fda4af]`} style={{ animationDelay: '0.1s' }} />
                      <span className={`w-1 h-2 rounded-full ${isPlayingAudio ? 'animate-pulse' : ''} bg-[#6366f1]`} style={{ animationDelay: '0.25s' }} />
                      <span className={`w-1 h-4 rounded-full ${isPlayingAudio ? 'animate-pulse' : ''} bg-[#fda4af]`} style={{ animationDelay: '0.4s' }} />
                    </div>

                    <span className="text-emerald-500 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                      30 Min Session
                    </span>
                  </div>
                </div>

                {/* Bottom Snapshot Info Bar */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between transition-colors ${
                  isLight 
                    ? 'bg-gradient-to-r from-indigo-50/70 via-white to-pink-50/40 border-slate-200/90 shadow-sm' 
                    : 'bg-[#0a0d20]/90 border-white/10'
                }`}>
                  <div className="space-y-0.5">
                    <div className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      Weekly Strategic Output
                    </div>
                    <div className={`text-sm font-display font-medium ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      12 High-Value Strategic Assets
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 shadow-sm">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Inbound Moat</span>
                  </div>
                </div>

                {/* Micro-Metrics Row */}
                <div className={`grid grid-cols-3 gap-2 pt-1 text-center font-mono text-[10px] ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  <div className={`py-1.5 px-2 rounded-lg border ${
                    isLight ? 'bg-slate-50 border-slate-200/80' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <span className="font-bold text-[#6366f1]">30m</span> / week
                  </div>
                  <div className={`py-1.5 px-2 rounded-lg border ${
                    isLight ? 'bg-slate-50 border-slate-200/80' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <span className="font-bold text-emerald-500">100%</span> Authentic
                  </div>
                  <div className={`py-1.5 px-2 rounded-lg border ${
                    isLight ? 'bg-slate-50 border-slate-200/80' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <span className="font-bold text-[#fda4af]">0 Hrs</span> Bloat
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
