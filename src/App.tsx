import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ThreeMeshBackground } from './components/ThreeMeshBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ComparisonSection } from './components/ComparisonSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FlowSection } from './components/FlowSection';
import { WhatWeHandleSection } from './components/WhatWeHandleSection';
import { SystemStepperSection } from './components/SystemStepperSection';
import { HubSpokeSection } from './components/HubSpokeSection';
import { WhoIsThisForSection } from './components/WhoIsThisForSection';
import { CompoundsAndAuditSection } from './components/CompoundsAndAuditSection';
import { Footer } from './components/Footer';
import { StrategySessionModal } from './components/StrategySessionModal';

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isLight } = useTheme();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`relative min-h-screen font-sans selection:bg-[#6366f1] selection:text-white antialiased overflow-x-hidden transition-colors duration-300 ${
      isLight ? 'bg-[#f8fafc] text-slate-800' : 'bg-[#020308] text-slate-100'
    }`}>
      {/* Interactive 3D Wave Particle Mesh Background */}
      <ThreeMeshBackground />

      {/* Sticky Top Navbar with Brand Logo, Compact Links & Theme Switcher */}
      <Navbar onOpenAuditModal={handleOpenModal} />

      {/* 10-Section Funnel Flow */}
      <main className="relative z-10">
        {/* 01. HERO — headline + subhead + CTA button + founder portrait/silhouette placeholder graphic */}
        <HeroSection onOpenAuditModal={handleOpenModal} />

        {/* 02. THE PROBLEM — two columns (condensed agitation copy + mock LinkedIn UI card) */}
        <ProblemSection onOpenAuditModal={handleOpenModal} />

        {/* 03. WHAT THIS ACTUALLY IS — ✕/✓ two-column comparison component */}
        <ComparisonSection />

        {/* 04. WHAT IT DOES FOR YOU — 6-card icon grid (3x2, one icon + one line each) */}
        <BenefitsSection onOpenAuditModal={handleOpenModal} />

        {/* 05. HOW IT WORKS — horizontal 5-node flow with arrows (Think → Capture → Shape → Distribute → Optimise) */}
        <FlowSection />

        {/* 06. WHAT WE HANDLE — tabbed interface / mobile accordion (6 tabs, one visible at once) */}
        <WhatWeHandleSection onOpenAuditModal={handleOpenModal} />

        {/* 07. THE SYSTEM — numbered 6-step stepper (Infabio 6-step timeline) */}
        <SystemStepperSection onOpenAuditModal={handleOpenModal} />

        {/* 08. ONE CONVERSATION, MANY ASSETS — hub-and-spoke diagram */}
        <HubSpokeSection onOpenAuditModal={handleOpenModal} />

        {/* 09. WHO IT'S FOR — two columns (persona chips + qualifying pain points checklist) */}
        <WhoIsThisForSection onOpenAuditModal={handleOpenModal} />

        {/* 10. WHY IT COMPOUNDS + AUDIT CTA — condensed 2-3 sentences + trend graph + audit checklist + lead form */}
        <CompoundsAndAuditSection onOpenAuditModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenAuditModal={handleOpenModal} />

      {/* Strategy Session Booking & Diagnostic Modal */}
      <StrategySessionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
