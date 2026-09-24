import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InnovationHub } from './components/InnovationHub';
import { ImpactSection } from './components/ImpactSection';
import { TeamSection } from './components/TeamSection';
import { GetInvolved } from './components/GetInvolved';
import { Footer } from './components/Footer';
import { DeckPreviewModal } from './components/DeckPreviewModal';
import { OperationalPortal } from './components/OperationalPortal';
import { LeadType } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<'public' | 'portal'>('public');
  const [deckModalOpen, setDeckModalOpen] = useState(false);
  const [activeLeadTab, setActiveLeadTab] = useState<LeadType>('estate');

  const scrollToSection = (id: string, tab?: LeadType) => {
    if (viewMode === 'portal') {
      setViewMode('public');
    }
    if (tab) {
      setActiveLeadTab(tab);
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  if (viewMode === 'portal') {
    return (
      <div className="min-h-screen bg-[#051C14] text-white selection:bg-[#D4AF37] selection:text-black">
        <OperationalPortal onBackToPublic={() => setViewMode('public')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFA] text-[#12221B] selection:bg-[#0F3D2E] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenDeck={() => setDeckModalOpen(true)}
        onOpenPortal={() => setViewMode('portal')}
        onSelectTab={(tab) => scrollToSection('get-involved', tab)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onPartnerClick={() => scrollToSection('get-involved', 'estate')}
          onContactClick={() => scrollToSection('get-involved', 'recycler')}
          onOpenDeck={() => setDeckModalOpen(true)}
        />

        {/* How It Works (Problem + Solution + 5-Step Process) */}
        <HowItWorks />

        {/* Innovation Hub (Make, Train, Host, Sell) */}
        <InnovationHub />

        {/* Impact & Pilot (3 columns + Interactive Estimator) */}
        <ImpactSection />

        {/* Team & Partnerships In-Progress */}
        <TeamSection
          onJoinRoleClick={() => scrollToSection('get-involved', 'investor')}
        />

        {/* Get Involved (3-Path Contact & Intake Forms + Embedded Operational Portal) */}
        <GetInvolved
          initialTab={activeLeadTab}
          onOpenDeck={() => setDeckModalOpen(true)}
          onOpenPortal={() => setViewMode('portal')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDeck={() => setDeckModalOpen(true)}
        onSelectTab={(tab) => scrollToSection('get-involved', tab)}
      />

      {/* Investor Deck Executive Summary Modal */}
      <DeckPreviewModal
        isOpen={deckModalOpen}
        onClose={() => setDeckModalOpen(false)}
        onRequestDeck={() => {
          setDeckModalOpen(false);
          scrollToSection('get-involved', 'investor');
        }}
      />
    </div>
  );
}
