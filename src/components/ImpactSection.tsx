import React, { useState } from 'react';
import { Leaf, Users, FileCheck, Sliders, Info, ShieldCheck } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const [householdSlider, setHouseholdSlider] = useState<number>(500);

  // Calculations based on typical Nigerian urban gated estate benchmarks:
  // ~4.5 people/household, ~0.65 kg waste/person/day = ~2.9 kg/hh/day = ~87 kg/month/hh
  // Recyclable fraction ~25-30% dry fraction (~22-26 kg dry recyclables/hh/month)
  // At 500 hh: ~11-13 tonnes total waste, ~2.5-3.5 tonnes clean recyclables diverted per month.
  // CO2e avoided ~1.4 kg CO2e per kg diverted plastics/organics.
  const monthlyDivertedTonnes = ((householdSlider * 24) / 1000).toFixed(1);
  const co2AvoidedTonnes = ((parseFloat(monthlyDivertedTonnes) * 1.35)).toFixed(1);
  const jobsCreated = Math.max(3, Math.round((householdSlider / 500) * 11));
  const estimatedAnnualDiversion = (parseFloat(monthlyDivertedTonnes) * 12).toFixed(0);

  const impactPillars = [
    {
      title: 'Environmental Impact',
      icon: Leaf,
      badge: 'Planet & Climate',
      summary: 'Diverting valuable polymers and combustible biomass from open dumpsites and uncontrolled burning in the FCT.',
      metrics: [
        { label: 'Pilot Diversion Target', val: '2–4 Tonnes / month' },
        { label: 'Landfill Diversion Rate', val: 'Up to 35% of estate stream' },
        { label: 'CO₂e Emissions Avoided', val: '~3.2 Tonnes CO₂e / mo' },
      ],
      detail:
        'Mitigating methane release from anaerobic decomposition and stopping toxic dioxin emissions from neighborhood trash burning.',
    },
    {
      title: 'Social & Jobs Impact',
      icon: Users,
      badge: 'People & Livelihoods',
      summary: 'Transforming precarious, stigmatized informal scavenging into dignified, insured green employment.',
      metrics: [
        { label: 'Direct Pilot Roles', val: '10+ Dignified Jobs' },
        { label: 'Women & Youth Focus', val: '60% Target Representation' },
        { label: 'Fair Compensation', val: 'Above minimum wage + PPE' },
      ],
      detail:
        'Every collector and hub artisan receives standardized health & safety gear, medical checkups, and vocational skills training in Abuja.',
    },
    {
      title: 'Systemic Impact',
      icon: FileCheck,
      badge: 'Policy & Municipal Scale',
      summary: 'Building a validated, scalable blueprint for urban circularity across Nigerian federal territories.',
      metrics: [
        { label: 'Regulatory Alignment', val: 'NESREA Protocol' },
        { label: 'Traceability Standard', val: '100% Digital Manifests' },
        { label: 'Replicable Units', val: 'Modular Estate Clusters' },
      ],
      detail:
        'Providing verified municipal waste data to inform Nigerian national circular economy roadmaps and corporate ESG disclosures.',
    },
  ];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-[#FAFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-2 font-mono">
            Environmental · Social · Systemic
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F3D2E] font-display">
            Measurable, auditable impact from day one.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We measure our success not just in collection reliability, but in metric tonnes diverted, livelihoods upgraded, and data contributed to national climate policy.
          </p>
        </div>

        {/* 3 Impact Columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactPillars.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF4F0] text-[#0F3D2E] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">{col.badge}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F3D2E] font-display mb-2">
                    {col.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {col.summary}
                  </p>

                  <div className="space-y-3 border-t border-slate-100 pt-4 mb-6">
                    {col.metrics.map((m) => (
                      <div key={m.label} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{m.label}</span>
                        <span className="font-mono font-bold text-[#0F3D2E]">{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-500 border-t border-slate-100 pt-3 italic">
                  {col.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Pilot Calculator */}
        <div className="mt-16 bg-[#0F3D2E] text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Slider Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                <Sliders className="w-4 h-4" />
                <span>Interactive Estate Scale Simulator</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Simulate Your Estate Cluster Impact
                </h3>
                <p className="mt-2 text-sm text-emerald-100/90 leading-relaxed">
                  Slide to select your estate or neighborhood cluster size to see projected monthly diversion, emissions abatement, and green jobs.
                </p>
              </div>

              {/* Slider */}
              <div className="bg-[#0A291E] p-5 rounded-xl border border-[#1b5e46]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase text-emerald-300">
                    Households Enrolled:
                  </span>
                  <span className="text-2xl font-bold font-display text-white tabular-nums">
                    {householdSlider}{' '}
                    <span className="text-xs font-normal text-emerald-300">
                      {householdSlider === 500 ? '(Baseline Pilot)' : 'homes'}
                    </span>
                  </span>
                </div>

                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={householdSlider}
                  onChange={(e) => setHouseholdSlider(Number(e.target.value))}
                  className="w-full h-2 bg-[#18523E] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />

                <div className="flex justify-between text-[11px] font-mono text-emerald-300/70 mt-2">
                  <span>100 Homes</span>
                  <span>500 (Abuja Pilot)</span>
                  <span>1,000</span>
                  <span>2,000 Homes</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-emerald-200/70">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#D4AF37]" />
                <span>
                  Estimates use standard Nigerian urban household waste benchmarks (~0.65 kg/person/day) and conservative circular diversion rates.
                </span>
              </div>
            </div>

            {/* Right: Projected Output Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-[#0A291E] border border-[#1b5e46] rounded-xl p-5">
                <span className="text-xs font-mono text-emerald-300 block mb-1">
                  Monthly Diversion
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-display tabular-nums">
                  ~{monthlyDivertedTonnes}
                </div>
                <span className="text-xs text-emerald-200/80 mt-1 block">
                  Metric tonnes / month
                </span>
                <span className="text-[11px] text-[#D4AF37] font-mono mt-3 block border-t border-[#1b5e46] pt-2">
                  ~{estimatedAnnualDiversion} tonnes / year
                </span>
              </div>

              <div className="bg-[#0A291E] border border-[#1b5e46] rounded-xl p-5">
                <span className="text-xs font-mono text-emerald-300 block mb-1">
                  CO₂e Avoided
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-display tabular-nums">
                  ~{co2AvoidedTonnes}
                </div>
                <span className="text-xs text-emerald-200/80 mt-1 block">
                  Tonnes CO₂e avoided / mo
                </span>
                <span className="text-[11px] text-[#D4AF37] font-mono mt-3 block border-t border-[#1b5e46] pt-2">
                  NESREA ESG reportable
                </span>
              </div>

              <div className="bg-[#0A291E] border border-[#1b5e46] rounded-xl p-5">
                <span className="text-xs font-mono text-emerald-300 block mb-1">
                  Fair-Wage Green Jobs
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-display tabular-nums">
                  {jobsCreated}+
                </div>
                <span className="text-xs text-emerald-200/80 mt-1 block">
                  Collectors, sorters & artisans
                </span>
                <span className="text-[11px] text-emerald-300 font-mono mt-3 block border-t border-[#1b5e46] pt-2">
                  Full PPE & health plan
                </span>
              </div>

              <div className="bg-[#0A291E] border border-[#1b5e46] rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-emerald-300 block mb-1">
                    Tariff Affordability
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-display tabular-nums">
                    ₦2,500
                  </div>
                  <span className="text-xs text-emerald-200/80 mt-1 block">
                    Per household per month
                  </span>
                </div>
                <a
                  href="#get-involved"
                  className="mt-3 text-xs font-semibold text-white underline underline-offset-4 hover:text-[#D4AF37] transition-colors"
                >
                  Enroll your estate cluster →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
