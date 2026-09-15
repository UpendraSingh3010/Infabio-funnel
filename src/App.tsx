import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ThreeMeshBackground } from './components/ThreeMeshBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { JudgedSection } from './components/JudgedSection';
import { AntiInfluencerSection } from './components/AntiInfluencerSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ContentEngineSection } from './components/ContentEngineSection';
import { WhatWeHandleSection } from './components/WhatWeHandleSection';
import { InfabioSystemSection } from './components/InfabioSystemSection';
import { AssetMultiplierSection } from './components/AssetMultiplierSection';
import { AuthenticitySection } from './components/AuthenticitySection';
import { BottleneckSection } from './components/BottleneckSection';
import { WhoIsThisForSection } from './components/WhoIsThisForSection';
import { CategoryVoiceSection } from './components/CategoryVoiceSection';
import { ReadySection } from './components/ReadySection';
import { AuditSection } from './components/AuditSection';
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

      {/* Premium Crisp Funnel Flow */}
      <main className="relative z-10">
        {/* 01. Hero: Build a Founder Brand / People Trust Before They Buy */}
        <HeroSection onOpenAuditModal={handleOpenModal} />

        {/* 02. Your Personal Brand Is Already Being Judged */}
        <JudgedSection onOpenAuditModal={handleOpenModal} />

        {/* 03. Founder Marketing Is Not About Becoming An Influencer */}
        <AntiInfluencerSection />

        {/* 04. What Founder Marketing Can Do For You */}
        <BenefitsSection onOpenAuditModal={handleOpenModal} />

        {/* 05. We Turn Your Expertise Into A Content Engine */}
        <ContentEngineSection onOpenAuditModal={handleOpenModal} />

        {/* 06. What We Handle */}
        <WhatWeHandleSection onOpenAuditModal={handleOpenModal} />

        {/* 07. The INFABIO Founder Marketing System (01 to 06) */}
        <InfabioSystemSection onOpenAuditModal={handleOpenModal} />

        {/* 08. One Founder. Multiple Content Assets. */}
        <AssetMultiplierSection onOpenAuditModal={handleOpenModal} />

        {/* 09. We Don’t Ghostwrite A Fake Version Of You */}
        <AuthenticitySection />

        {/* 10. Built For Founders Who Are Busy Building */}
        <BottleneckSection onOpenAuditModal={handleOpenModal} />

        {/* 11 & 12. Who Is This For? & Diagnostic Checklist */}
        <WhoIsThisForSection onOpenAuditModal={handleOpenModal} />

        {/* 13 & 14. From Invisible Founder To Category Voice & Compounding Business Asset */}
        <CategoryVoiceSection onOpenAuditModal={handleOpenModal} />

        {/* 15. Ready To Become More Visible Than Your Competition? */}
        <ReadySection onOpenAuditModal={handleOpenModal} />

        {/* 16. Start With A Founder Brand Audit */}
        <AuditSection onOpenAuditModal={handleOpenModal} />
      </main>

      {/* Footer: INFABIO - Building brands around the people building businesses */}
      <Footer onOpenAuditModal={handleOpenModal} />

      {/* Strategy Session Booking & Diagnostic Modal */}
      <StrategySessionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
