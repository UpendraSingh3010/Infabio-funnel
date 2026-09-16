import React, { useState } from 'react';
import { 
  Crosshair, 
  Sparkles, 
  AlertTriangle, 
  TrendingDown, 
  CheckCircle2, 
  Zap, 
  ArrowUpRight, 
  Compass, 
  Users, 
  Flame, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface MatrixEntity {
  id: string;
  name: string;
  quadrant: 'bottom-left' | 'top-left' | 'bottom-right' | 'top-right';
  x: number; // 0 to 100 percentage
  y: number; // 0 to 100 percentage (0 = bottom, 100 = top)
  tag: string;
  tagClass: string;
  description: string;
  commercialOutcome: string;
  signalQuality: string;
  buyerResponse: string;
  icon: any;
  color: string;
  borderColor: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
  activeGlow: string;
}

export const PositioningMatrix: React.FC = () => {
  const { isLight } = useTheme();
  const [selectedEntityId, setSelectedEntityId] = useState<string>('infabio');

  const ENTITIES: MatrixEntity[] = [
    {
      id: 'dormant',
      name: 'Silent / Dormant Founder',
      quadrant: 'bottom-left',
      x: 24,
      y: 32,
      tag: 'Invisible Operator',
      tagClass: isLight 
        ? 'text-slate-700 bg-slate-100 border-slate-300' 
        : 'text-slate-300 bg-slate-800/80 border-slate-600/50',
      description: 'Zero public point of view. Rarely posts or updates, leaving executive due diligence entirely to rumors and competitor marketing.',
      commercialOutcome: 'Lost deal velocity, price compression, prolonged 90+ day sales cycles.',
      signalQuality: '0 / 100 Signal Density',
      buyerResponse: '"Are they still in business or falling behind?"',
      icon: Building2,
      color: '#94a3b8',
      borderColor: isLight ? 'border-slate-300' : 'border-slate-500',
      bgColor: isLight ? 'bg-white' : 'bg-slate-900',
      iconBg: isLight ? 'bg-slate-100 border border-slate-200' : 'bg-slate-800/90 border border-slate-600/60',
      iconColor: isLight ? 'text-slate-700' : 'text-slate-200',
      activeGlow: isLight ? 'shadow-[0_0_25px_rgba(148,163,184,0.35)]' : 'shadow-[0_0_25px_rgba(148,163,184,0.4)]'
    },
    {
      id: 'influencer',
      name: 'Generic "Growth Hacker" / Influencer',
      quadrant: 'top-left',
      x: 26,
      y: 78,
      tag: 'High Reach / Zero Commercial Depth',
      tagClass: isLight 
        ? 'text-rose-700 bg-rose-50 border-rose-200' 
        : 'text-rose-300 bg-rose-950/80 border-rose-800/60',
      description: 'Chases viral algorithms with motivational quotes, life advice, and platitudes. Amasses massive vanity follower counts without executive trust.',
      commercialOutcome: 'Hundreds of likes from students and job seekers; zero enterprise pipeline or Tier-1 investor interest.',
      signalQuality: '22 / 100 Commercial Depth',
      buyerResponse: '"Entertaining on social, but not a serious category authority for a $100k contract."',
      icon: Flame,
      color: '#f43f5e',
      borderColor: isLight ? 'border-rose-400' : 'border-rose-500',
      bgColor: isLight ? 'bg-gradient-to-br from-rose-50 to-pink-50/60' : 'bg-[#180811]',
      iconBg: isLight ? 'bg-rose-100 border border-rose-200' : 'bg-rose-500/20 border border-rose-500/50',
      iconColor: isLight ? 'text-rose-600' : 'text-rose-400',
      activeGlow: isLight ? 'shadow-[0_0_25px_rgba(244,63,94,0.3)]' : 'shadow-[0_0_30px_rgba(244,63,94,0.45)]'
    },
    {
      id: 'corporate',
      name: 'Sterile Corporate PR Feeds',
      quadrant: 'bottom-right',
      x: 74,
      y: 28,
      tag: 'Legitimate Tech / Zero Organic Soul',
      tagClass: isLight 
        ? 'text-amber-800 bg-amber-50 border-amber-200' 
        : 'text-amber-300 bg-amber-950/80 border-amber-700/60',
      description: 'Posts dry company press releases, feature changelogs, webinar links, and boilerplate announcements approved by a committee.',
      commercialOutcome: 'Near-zero engagement, ignored by buyers who crave authentic operator conviction.',
      signalQuality: '38 / 100 Engagement Resonance',
      buyerResponse: '"Corporate marketing speak. What does the founder actually believe?"',
      icon: Users,
      color: '#f59e0b',
      borderColor: isLight ? 'border-amber-400' : 'border-amber-500',
      bgColor: isLight ? 'bg-gradient-to-br from-amber-50 to-orange-50/60' : 'bg-[#191105]',
      iconBg: isLight ? 'bg-amber-100 border border-amber-200' : 'bg-amber-500/20 border border-amber-500/50',
      iconColor: isLight ? 'text-amber-700' : 'text-amber-300',
      activeGlow: isLight ? 'shadow-[0_0_25px_rgba(245,158,11,0.3)]' : 'shadow-[0_0_30px_rgba(245,158,11,0.45)]'
    },
    {
      id: 'infabio',
      name: 'INFABIO Category Sovereign',
      quadrant: 'top-right',
      x: 78,
      y: 78,
      tag: 'The Executive Authority Moat',
      tagClass: isLight 
        ? 'text-indigo-900 bg-indigo-50 border-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.2)]'
        : 'text-[#fda4af] bg-indigo-950/80 border-[#6366f1]/60 shadow-[0_0_15px_rgba(99,102,241,0.35)]',
      description: 'Translates raw founder war stories and contrarian frameworks into sovereign market authority in 30 minutes/week. Educates the market on how to evaluate the category.',
      commercialOutcome: '4.2x Inbound Pipeline, inbound series funding, buyers pre-sold before Call 1.',
      signalQuality: '98 / 100 Commercial Conviction',
      buyerResponse: '"We read their teardown and immediately realized we were solving this wrong. Book a demo today."',
      icon: Zap,
      color: '#6366f1',
      borderColor: isLight ? 'border-indigo-600' : 'border-[#fda4af]',
      bgColor: isLight 
        ? 'bg-gradient-to-br from-indigo-50 via-white to-pink-50' 
        : 'bg-gradient-to-br from-[#1c214c] via-[#101432] to-[#080a1c]',
      iconBg: isLight ? 'bg-indigo-600 text-white shadow-md' : 'bg-[#6366f1]/30 border border-[#fda4af]/60',
      iconColor: isLight ? 'text-white' : 'text-[#fda4af]',
      activeGlow: isLight ? 'shadow-[0_0_35px_rgba(99,102,241,0.45)]' : 'shadow-[0_0_35px_rgba(99,102,241,0.7)]'
    }
  ];

  const selectedEntity = ENTITIES.find(e => e.id === selectedEntityId) || ENTITIES[3];

  return (
    <div className={`mt-16 pt-12 border-t space-y-8 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
      {/* Section Subtitle / Header for Matrix */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#6366f1] flex items-center gap-2 mb-1.5 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            Category Whitespace Architecture
          </span>
          <h3 className={`text-2xl sm:text-3xl font-display font-light tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            The Executive Authority <span className="text-transparent bg-clip-text bg-brand-gradient italic font-normal">Scatter Matrix</span>
          </h3>
          <p className={`font-sans font-light text-sm sm:text-base max-w-xl mt-1 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Where do most founders get trapped — and how does Infabio position you in the uncontested upper-right quadrant?
          </p>
        </div>

        {/* Quick Legend / Quadrant Badge */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 ${
            isLight 
              ? 'bg-white border-slate-200 text-slate-700 shadow-sm' 
              : 'bg-white/5 border-white/10 text-slate-300'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#fda4af] animate-ping" />
            Interactive: Click nodes to inspect buyer impact
          </span>
        </div>
      </div>

      {/* Main 2-Column Visual Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: 2x2 Scatter Canvas Visual (7 cols) */}
        <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden backdrop-blur-2xl transition-all ${
          isLight 
            ? 'bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
            : 'bg-[#050713]/80 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]'
        }`}>
          
          {/* Subtle Ambient Radial Glow for Top-Right Sweet Spot */}
          <div className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
            isLight ? 'bg-[#6366f1]/10' : 'bg-[#6366f1]/15'
          }`} />
          <div className={`absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl pointer-events-none ${
            isLight ? 'bg-pink-500/10' : 'bg-pink-500/5'
          }`} />

          {/* Top Axis Label: Y-AXIS (Executive Reach & Distribution Authority) */}
          <div className={`flex items-center justify-between text-xs font-mono mb-2 pb-2 border-b ${
            isLight ? 'text-slate-600 border-slate-200' : 'text-slate-400 border-white/5'
          }`}>
            <span className={`flex items-center gap-1.5 font-medium ${isLight ? 'text-indigo-600 font-semibold' : 'text-indigo-300'}`}>
              <span className="text-[#fda4af]">▲</span> High Executive Reach &amp; Distribution Moat
            </span>
            <span className="text-[10px] text-slate-500 hidden sm:inline">
              Y: Organic Gravity
            </span>
          </div>

          {/* Circular Coordinate Matrix & Sonar Radar Canvas */}
          <div className={`relative w-full aspect-square max-w-[480px] mx-auto rounded-full overflow-hidden my-3 p-4 transition-all ${
            isLight 
              ? 'border border-indigo-200/90 bg-gradient-to-br from-white via-indigo-50/40 to-pink-50/30 shadow-[inset_0_0_40px_rgba(99,102,241,0.06),0_15px_40px_rgba(99,102,241,0.08)]' 
              : 'border border-white/10 bg-[#03050c]/90 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]'
          }`}>
            
            {/* Outer Concentric Radar Circles */}
            <div className={`absolute inset-4 rounded-full border pointer-events-none ${isLight ? 'border-indigo-900/10' : 'border-white/5'}`} />
            <div className={`absolute inset-14 sm:inset-16 rounded-full border pointer-events-none ${isLight ? 'border-indigo-900/10' : 'border-white/5'}`} />
            <div className={`absolute inset-24 sm:inset-28 rounded-full border pointer-events-none ${isLight ? 'border-indigo-900/10' : 'border-white/5'}`} />
            <div className={`absolute inset-36 sm:inset-40 rounded-full border pointer-events-none ${isLight ? 'border-indigo-500/25' : 'border-[#6366f1]/15'}`} />

            {/* Target Area Top-Right Quadrant Arc Highlight */}
            <div className={`absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none rounded-tr-full border-l border-b ${
              isLight 
                ? 'bg-gradient-to-bl from-indigo-500/15 via-rose-400/10 to-transparent border-indigo-300/40' 
                : 'bg-gradient-to-bl from-[#6366f1]/20 via-[#6366f1]/5 to-transparent border-[#6366f1]/20'
            }`} />

            {/* Subtle Radar Sweep Effect Line */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div 
                className="w-full h-full origin-center animate-spin"
                style={{ 
                  animationDuration: '24s', 
                  animationTimingFunction: 'linear',
                  background: isLight 
                    ? 'conic-gradient(from 0deg at 50% 50%, rgba(99, 102, 241, 0.18) 0deg, rgba(99, 102, 241, 0) 60deg, transparent 360deg)' 
                    : 'conic-gradient(from 0deg at 50% 50%, rgba(99, 102, 241, 0.12) 0deg, rgba(99, 102, 241, 0) 60deg, transparent 360deg)'
                }}
              />
            </div>

            {/* Quadrant Labels inside the Circle */}
            <div className="absolute top-5 left-6 text-left pointer-events-none">
              <span className={`text-[10px] font-mono uppercase tracking-widest block font-medium ${
                isLight ? 'text-rose-600 font-bold' : 'text-pink-400/50'
              }`}>
                Vanity Trap
              </span>
              <span className="text-[9px] font-sans text-slate-500 hidden sm:block">
                High reach, low depth
              </span>
            </div>

            <div className="absolute top-5 right-6 text-right pointer-events-none">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest flex items-center justify-end gap-1 ${
                isLight ? 'text-indigo-600' : 'text-[#fda4af]'
              }`}>
                <Sparkles className="w-3 h-3" />
                Authority Moat
              </span>
              <span className={`text-[9px] font-mono font-semibold hidden sm:block ${
                isLight ? 'text-indigo-600' : 'text-emerald-400'
              }`}>
                ★ Infabio Target
              </span>
            </div>

            <div className="absolute bottom-5 left-6 text-left pointer-events-none">
              <span className={`text-[10px] font-mono uppercase tracking-widest block ${
                isLight ? 'text-slate-600 font-semibold' : 'text-slate-500'
              }`}>
                Invisible Zone
              </span>
              <span className={`text-[9px] font-sans hidden sm:block ${isLight ? 'text-slate-500' : 'text-slate-600'}`}>
                Silent / Dormant
              </span>
            </div>

            <div className="absolute bottom-5 right-6 text-right pointer-events-none">
              <span className={`text-[10px] font-mono uppercase tracking-widest block ${
                isLight ? 'text-amber-700 font-semibold' : 'text-amber-500/50'
              }`}>
                Corporate Sterile
              </span>
              <span className="text-[9px] font-sans text-slate-500 hidden sm:block">
                Dry PR & Changelogs
              </span>
            </div>

            {/* Axis Crosshairs intersecting at the dead center */}
            <div className={`absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 pointer-events-none ${
              isLight ? 'bg-indigo-900/15' : 'bg-white/10'
            }`} />
            <div className={`absolute top-0 left-1/2 w-[1px] h-full -translate-x-1/2 pointer-events-none ${
              isLight ? 'bg-indigo-900/15' : 'bg-white/10'
            }`} />

            {/* Dead Center Axis Focal Origin Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                isLight 
                  ? 'bg-white border-2 border-indigo-400 text-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.25)]' 
                  : 'bg-[#030617] border border-[#6366f1]/50 text-[#fda4af] shadow-[0_0_20px_rgba(99,102,241,0.5)]'
              }`}>
                <Crosshair className="w-6 h-6" strokeWidth={2.2} />
              </div>
              <div className={`absolute -inset-1.5 rounded-full border animate-ping opacity-40 ${
                isLight ? 'border-indigo-400/40' : 'border-indigo-400/20'
              }`} />
            </div>

            {/* Plotted Interactive Circular Nodes */}
            {ENTITIES.map((entity) => {
              const isSelected = entity.id === selectedEntityId;
              const IconComponent = entity.icon;
              // Map Y (0 bottom, 100 top) to CSS top % (0 top, 100 bottom)
              const topPercent = 100 - entity.y;

              // Specific fine-tuning offsets based on user preference
              const customOffsetStyle = entity.id === 'infabio' 
                ? { marginRight: '53px', marginBottom: '-6px', paddingRight: '26px' }
                : entity.id === 'dormant'
                ? { marginRight: '-10px', marginBottom: '54px', paddingRight: '0px' }
                : {};

              return (
                <button
                  key={entity.id}
                  id={`matrix-node-${entity.id}`}
                  onClick={() => setSelectedEntityId(entity.id)}
                  style={{ left: `${entity.x}%`, top: `${topPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/node transition-all duration-300 cursor-pointer focus:outline-none z-20"
                >
                  <div 
                    className="relative flex flex-col items-center justify-center"
                    style={customOffsetStyle}
                  >
                    {/* Pulsing ring on selected node */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full border-2 border-[#fda4af] animate-ping opacity-70 pointer-events-none" />
                    )}

                    {/* Circular Node Container with High Contrast Nested Well */}
                    <div
                      className={`w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center transition-all backdrop-blur-xl pr-0 ${
                        isSelected
                          ? `${entity.bgColor} border-2 ${entity.borderColor} scale-110 ${entity.activeGlow}`
                          : isLight 
                          ? 'bg-white border-2 border-slate-300 hover:border-indigo-500 hover:scale-105 shadow-md' 
                          : 'bg-[#0a0d20] border-2 border-white/20 hover:border-white/50 hover:scale-105 shadow-xl'
                      }`}
                    >
                      {/* Inner High-Contrast Badge to make the SVG icon pop cleanly */}
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                        isSelected 
                          ? `${entity.iconBg} shadow-inner`
                          : isLight 
                          ? 'bg-slate-100 group-hover/node:bg-slate-200' 
                          : 'bg-white/10 group-hover/node:bg-white/15'
                      }`}>
                        <IconComponent
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 ${
                            isSelected 
                              ? `${entity.iconColor} drop-shadow-[0_0_8px_currentColor]` 
                              : `${entity.iconColor} opacity-90 group-hover/node:opacity-100 group-hover/node:scale-110`
                          }`}
                          strokeWidth={2.4}
                        />
                      </div>
                    </div>

                    {/* Floating Pill Label */}
                    <div
                      className={`mt-2 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-all pointer-events-none ${
                        isSelected
                          ? isLight 
                            ? 'bg-indigo-900 text-white border border-indigo-700 shadow-md font-semibold scale-105' 
                            : 'bg-[#050713] text-white border border-[#fda4af]/40 shadow-xl font-semibold scale-105'
                          : isLight 
                          ? 'bg-white text-slate-800 border border-slate-300 shadow-sm opacity-95 group-hover/node:opacity-100 font-medium' 
                          : 'bg-[#050713]/90 text-slate-300 border border-white/15 opacity-90 group-hover/node:opacity-100'
                      }`}
                    >
                      {entity.id === 'infabio' ? '★ INFABIO Sovereign' : entity.name.split(' ')[0]}
                    </div>
                  </div>
                </button>
              );
            })}

          </div>

          {/* Bottom Axis Label: X-AXIS (Depth of Contrarian Insight & Commercial Thesis) */}
          <div className={`flex items-center justify-between text-xs font-mono pt-2 border-t mt-2 ${
            isLight ? 'text-slate-600 border-slate-200' : 'text-slate-400 border-white/5'
          }`}>
            <span className={isLight ? 'text-slate-500' : 'text-slate-500'}>Superficial / Platitudes</span>
            <span className={`flex items-center gap-1.5 font-medium ${isLight ? 'text-indigo-600 font-semibold' : 'text-indigo-300'}`}>
              Contrarian Depth &amp; Category Conviction <span className="text-[#fda4af]">►</span>
            </span>
          </div>

        </div>

        {/* Right: Interactive Inspector Panel (5 cols) */}
        <div className={`lg:col-span-5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-2xl transition-all ${
          isLight 
            ? 'bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.08)]' 
            : 'bg-[#050713]/90 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]'
        }`}>
          
          {/* Subtle Corner Ambient Line */}
          <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none ${
            isLight ? 'bg-indigo-500/10' : 'bg-[#6366f1]/10'
          }`} />

          <div className="space-y-5">
            
            {/* Header: Selected Persona Badge & Title */}
            <div className={`pb-4 border-b ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-semibold ${selectedEntity.tagClass}`}>
                  {selectedEntity.tag}
                </span>
                <span className={`text-[11px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {selectedEntity.signalQuality}
                </span>
              </div>

              <h4 className={`text-xl sm:text-2xl font-display font-light flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {selectedEntity.name}
              </h4>
              <p className={`text-xs sm:text-sm font-sans font-light mt-1.5 leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                {selectedEntity.description}
              </p>
            </div>

            {/* Direct Commercial Impact Breakdown */}
            <div className="space-y-3.5">
              
              {/* Buyer Internal Reaction */}
              <div className={`p-3.5 rounded-2xl border space-y-1 ${
                isLight 
                  ? 'bg-slate-50 border-slate-200/80' 
                  : 'bg-[#0a0d20] border-white/5'
              }`}>
                <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Prospect / Buyer Silent Perception:
                </span>
                <p className={`text-xs sm:text-sm font-display italic ${
                  isLight ? 'text-slate-700' : 'text-slate-200'
                }`}>
                  {selectedEntity.buyerResponse}
                </p>
              </div>

              {/* Commercial Outcome / Pipeline Velocity */}
              <div className={`p-3.5 rounded-2xl border ${
                selectedEntity.id === 'infabio'
                  ? isLight
                    ? 'bg-indigo-50/80 border-indigo-200 text-indigo-950'
                    : 'bg-[#6366f1]/10 border-[#6366f1]/30 text-slate-200'
                  : isLight
                    ? 'bg-rose-50/80 border-rose-200 text-rose-950'
                    : 'bg-rose-950/15 border-rose-900/30 text-slate-300'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  {selectedEntity.id === 'infabio' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                  )}
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}>
                    Commercial Reality
                  </span>
                </div>
                <p className={`text-xs font-sans font-light leading-snug pl-6 ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {selectedEntity.commercialOutcome}
                </p>
              </div>

            </div>

            {/* Quick Switch Buttons for All 4 Profiles */}
            <div className="pt-2">
              <span className={`text-[10px] font-mono uppercase tracking-widest block mb-2 ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Compare Category Quadrants:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {ENTITIES.map(e => (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => setSelectedEntityId(e.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-mono text-left truncate transition-all cursor-pointer border ${
                      selectedEntityId === e.id
                        ? isLight 
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm font-semibold' 
                          : 'bg-[#6366f1]/20 border-[#6366f1]/50 text-white font-semibold'
                        : isLight 
                          ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200' 
                          : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/15'
                    }`}
                  >
                    {e.id === 'infabio' ? '★ INFABIO Sovereign' : e.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Value Takeaway */}
          <div className={`mt-5 pt-3.5 border-t flex items-center justify-between text-xs font-mono ${
            isLight ? 'border-slate-200 text-slate-600' : 'border-white/10 text-slate-400'
          }`}>
            <span>Infabio Placement: Uncontested Moat</span>
            <span className="text-[#6366f1] flex items-center gap-1 font-semibold">
              <span>Top-Right Sovereign</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
