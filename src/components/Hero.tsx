import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, QrCode, Truck, Factory, BarChart3, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onPartnerClick: () => void;
  onContactClick: () => void;
  onOpenDeck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPartnerClick, onContactClick, onOpenDeck }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      title: 'Residential Onboarding',
      icon: QrCode,
      tag: '01 · Household Setup',
      desc: 'Dual-stream bins deployed to gated estates with unique QR household tags.',
      metric: '500 target pilot households',
    },
    {
      title: 'Tracked Collection',
      icon: Truck,
      tag: '02 · Fleet Logistics',
      desc: 'Scheduled rounds with GPS route verification and digital weight logging per gate.',
      metric: '₦2,500/month predictable tariff',
    },
    {
      title: 'Hub Processing',
      icon: Factory,
      tag: '03 · Innovation Hub',
      desc: 'Dry recyclables remitted to our Abuja creative centre for grading & upcycling.',
      metric: '2–4 tonnes diverted monthly',
    },
    {
      title: 'Traceable Climate Data',
      icon: BarChart3,
      tag: '04 · ESG & Compliance',
      desc: 'Certified waste diversion and carbon offset reporting aligned with NESREA protocols.',
      metric: 'Audit-ready estate certificates',
    },
  ];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 bg-[#0F3D2E] text-white overflow-hidden">
      {/* Subtle organic geometric background pattern (no slop, crisp SVG grid) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tagline band */}
        <div className="flex items-center justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18523E]/80 border border-[#276e55] text-xs font-semibold tracking-wider uppercase text-emerald-200 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
              <Logo size={16} lightBackground={true} />
            </span>
            <span>Estate-First</span>
            <span className="text-[#D4AF37]" aria-hidden="true">·</span>
            <span>Tech-Tracked</span>
            <span className="text-[#D4AF37]" aria-hidden="true">·</span>
            <span>Circular by Design</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-6">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display text-balance leading-[1.08]">
              Building Cleaner Cities
            </h1>

            <p className="text-lg sm:text-xl text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
              A tech-enabled circular waste venture for Abuja — collection + innovation hub + climate data.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 pb-2">
              <div className="flex items-start gap-2.5 text-sm text-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Guaranteed estate pickup schedule with digital tracking</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Abuja creative hub for upcycling & green youth jobs</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Zero landfill leakage for valuable dry recyclables</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>NESREA-aligned carbon and diversion data manifests</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onPartnerClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#09261C] bg-[#D4AF37] hover:bg-[#F4D35E] rounded-lg transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Partner Your Estate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#18523E] hover:bg-[#1f664e] border border-[#276e55] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Talk to Us</span>
              </button>
              <button
                onClick={onOpenDeck}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-emerald-200/90 hover:text-white transition-colors underline underline-offset-4 decoration-[#D4AF37]/60"
              >
                <span>Investor Deck Brief</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stat Strip */}
            <div className="pt-6 border-t border-[#18523E]">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-white font-display tabular-nums">
                    ₦2,500
                  </p>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    per household / month
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-white font-display tabular-nums">
                    500
                  </p>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    households (Abuja pilot)
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-white font-display tabular-nums">
                    3
                  </p>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    revenue streams
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-emerald-200/50 mt-3 italic">
                *Illustrative pilot assumptions — not historical results.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Closed-Loop System Schematic */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A291E] border border-[#1b5e46] rounded-xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#1b5e46]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="text-xs font-semibold text-white tracking-wide uppercase">
                    Abuja Pilot Closed-Loop System
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-300">Phase 1: FCT</span>
              </div>

              {/* Interactive step selector */}
              <div className="mt-4 space-y-2.5">
                {stages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isActive = activeStage === idx;
                  return (
                    <button
                      key={stage.title}
                      onClick={() => setActiveStage(idx)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-150 ${
                        isActive
                          ? 'bg-[#18523E] border-[#D4AF37] shadow-sm'
                          : 'bg-[#0c3325]/70 border-[#1a4f3b] hover:bg-[#134432]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${
                              isActive
                                ? 'bg-[#D4AF37] text-[#0A291E]'
                                : 'bg-[#18523E] text-emerald-200'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-white block">
                              {stage.title}
                            </span>
                            <span className="text-[11px] text-emerald-200/70">
                              {stage.tag}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono font-medium text-[#D4AF37]">
                          {stage.metric}
                        </span>
                      </div>
                      {isActive && (
                        <p className="mt-2 text-xs text-emerald-100/90 pl-10 border-t border-[#266850] pt-2">
                          {stage.desc}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Status footer inside schematic */}
              <div className="mt-4 pt-3 border-t border-[#1b5e46] flex items-center justify-between text-[11px] text-emerald-200/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Dual revenue: Fee + Secondary Materials</span>
                </div>
                <span className="font-mono text-white">Abuja Pre-Pilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
