import React, { useState } from 'react';
import { AlertCircle, Check, ArrowRight, Smartphone, Scale, Layers, Recycle, BarChart } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const painPoints = [
    {
      number: '01',
      title: 'Unreliable Collection',
      description:
        'Erratic hauler schedules leave estate communal bins overflowing, creating public health hazards and resident friction with facility management.',
    },
    {
      number: '02',
      title: 'Lost Recyclables',
      description:
        'Over 85% of valuable clean plastics, aluminum, and cardboards are mixed with wet organic waste, contaminating materials and ending in Abuja open dumpsites.',
    },
    {
      number: '03',
      title: 'No Climate Data',
      description:
        'Neither estates nor environmental regulators have verifiable data on waste tonnage, recyclables diverted, or greenhouse gas emissions avoided.',
    },
  ];

  const pillars = [
    {
      title: 'Tech-Enabled Collection',
      tagline: 'Reliability & Traceability',
      description:
        'Digitized pickup schedules, estate gate manifests, and digital weigh scales ensure every kilogram is accounted for at collection.',
      points: [
        'Dedicated estate pickup windows',
        'Digital weight capture at curb',
        'Resident sorting incentive guides',
      ],
    },
    {
      title: 'Innovation Hub',
      tagline: 'From Waste to Wealth',
      description:
        'A dedicated creative center in Abuja where dry recyclables are transformed into functional products, crafts, and clean briquettes.',
      points: [
        'Local upcycling workshop',
        'Youth and women green skills',
        'Community drop-off depot',
      ],
    },
    {
      title: 'Climate Data',
      tagline: 'NESREA-Aligned Verification',
      description:
        'Auditable environmental reporting translating diversion kilograms into verifiable CO₂ equivalent offsets and ESG compliance certificates.',
      points: [
        'Monthly estate impact summaries',
        'Verified carbon offset metrics',
        'Municipal policy alignment',
      ],
    },
  ];

  const steps = [
    {
      step: '01',
      name: 'Onboard',
      action: 'Estate & Household Setup',
      summary: 'Dual-stream bins and digital onboarding guides deployed to participating households across the estate.',
      residentView: 'Receives color-coded sorting bins, QR household ID, and simple segregation cheat-sheet.',
      hubView: 'Registers estate boundary, scheduled pickup cadence, and baseline waste generation audit.',
      icon: Smartphone,
    },
    {
      step: '02',
      name: 'Collect & Track',
      action: 'Scheduled Pickup & Logging',
      summary: 'Trained collection teams arrive on set days, scanning QR codes and weighing bags at the curb.',
      residentView: 'Predictable, on-time morning collection with instantaneous mobile logging confirmation.',
      hubView: 'Real-time weight and GPS timestamp logged into the central collection manifest.',
      icon: Scale,
    },
    {
      step: '03',
      name: 'Physical Remitting',
      action: 'Weigh-in & Gate Reconciliation',
      summary: 'Collected materials are remitted to our Abuja facility; total estate weights are certified.',
      residentView: 'Zero intermediate dumping or unrecorded spillage along urban transit routes.',
      hubView: 'Verification of total intake tonnage vs. estate collection logs to prevent any material leakage.',
      icon: Layers,
    },
    {
      step: '04',
      name: 'Sort & Hub',
      action: 'Material Grading & Transformation',
      summary: 'Materials are separated into high-value clean polymer streams, cardboard, metals, and upcycling feedstock.',
      residentView: 'Assurance that recyclables actually enter circular manufacturing rather than open dumps.',
      hubView: 'Feedstock supplied to Innovation Hub makers (briquettes, furniture) and industrial balers.',
      icon: Recycle,
    },
    {
      step: '05',
      name: 'Route & Report',
      action: 'Off-Taker Supply & ESG Reporting',
      summary: 'Clean materials route to certified industrial recyclers, and estates receive verifiable impact reports.',
      residentView: 'Monthly estate climate report showing kilograms diverted and CO₂ emissions avoided.',
      hubView: 'NESREA-aligned reporting data shared with municipal authorities and recycling partners.',
      icon: BarChart,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAFCFA] border-b border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead-in */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-2 font-mono">
            Problem & Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F3D2E] font-display">
            Waste is treated as a disposal problem, not a resource opportunity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In Abuja and across rapidly urbanizing Nigerian cities, municipal waste management is plagued by broken collection loops, wasted recyclable commodities, and complete absence of verified climate metrics.
          </p>
        </div>

        {/* 3 Pain Points */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((pain) => (
            <div
              key={pain.number}
              className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm hover:border-[#0F3D2E]/40 transition-colors"
            >
              <div className="text-sm font-mono font-bold text-[#D4AF37] mb-3">
                {pain.number}. Friction Point
              </div>
              <h3 className="text-lg font-bold text-[#0F3D2E] mb-2 font-display">
                {pain.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Solution: Three Core Pillars */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-2 font-mono">
              The Ornament Green Approach
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3D2E] font-display">
              A Unified Three-Pillar Architecture
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Integrating logistics, creative processing, and certified data reporting into a closed loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-[#0F3D2E] text-white rounded-xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-[#D4AF37]">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="text-[11px] text-emerald-200/80 uppercase tracking-wider">
                      {pillar.tagline}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2.5 font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-emerald-100/90 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-[#18523E] pt-4">
                  {pillar.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-emerald-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Flow */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-2 font-mono">
                Pilot Process Diagram
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3D2E] font-display">
                The 5-Step Operational Flow
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              From residential gate to certified industrial off-take — audited at every transition point.
            </p>
          </div>

          {/* Step tabs / timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/80">
            {steps.map((st, idx) => (
              <button
                key={st.step}
                onClick={() => setSelectedStep(idx)}
                className={`py-3 px-3 text-left rounded-lg transition-all ${
                  selectedStep === idx
                    ? 'bg-[#0F3D2E] text-white shadow-sm'
                    : 'bg-transparent text-slate-700 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono font-bold ${
                      selectedStep === idx ? 'text-[#D4AF37]' : 'text-slate-400'
                    }`}
                  >
                    {st.step}
                  </span>
                  {selectedStep === idx && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                </div>
                <div className="text-xs font-bold mt-1 truncate">{st.name}</div>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0F3D2E] mb-2">
                  <span>STEP {steps[selectedStep].step}</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-[#D4AF37]">{steps[selectedStep].action}</span>
                </div>
                <h4 className="text-2xl font-bold text-[#0F3D2E] font-display mb-3">
                  {steps[selectedStep].name}: {steps[selectedStep].action}
                </h4>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  {steps[selectedStep].summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider block mb-1">
                      For Estate Residents & Facility
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {steps[selectedStep].residentView}
                    </p>
                  </div>
                  <div className="bg-[#EBF4F0] p-4 rounded-lg border border-[#cbe1d6]">
                    <span className="text-xs font-semibold text-[#0F3D2E] uppercase tracking-wider block mb-1">
                      For Hub & Regulatory Oversight
                    </span>
                    <p className="text-xs text-[#0F3D2E]/90 leading-relaxed">
                      {steps[selectedStep].hubView}
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphic summary of current step */}
              <div className="lg:col-span-5 bg-[#0F3D2E] rounded-xl p-6 text-white text-center flex flex-col items-center justify-center min-h-[200px]">
                <div className="w-14 h-14 rounded-full bg-[#18523E] border border-[#276e55] flex items-center justify-center text-[#D4AF37] mb-3">
                  {React.createElement(steps[selectedStep].icon, { className: 'w-7 h-7' })}
                </div>
                <span className="text-xs font-mono text-emerald-200">Abuja Operational Metric</span>
                <span className="text-lg font-bold text-white mt-1">
                  100% Traceable Chain of Custody
                </span>
                <span className="text-xs text-emerald-100/70 mt-2 max-w-xs">
                  Eliminating unofficial roadside dumping through verified digital manifests.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
