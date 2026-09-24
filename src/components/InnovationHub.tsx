import React, { useState } from 'react';
import { Hammer, GraduationCap, Users, ShoppingBag, CheckCircle, Sparkles, MapPin } from 'lucide-react';

export const InnovationHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const functions = [
    {
      id: 'make',
      name: 'Make',
      icon: Hammer,
      title: 'Upcycling & Local Production',
      subtitle: 'Transforming post-consumer waste into commercial value',
      description:
        'The Hub is equipped with modular plastic shredders, low-energy melt-presses, and briquetting machinery. Instead of leaving Abuja as unrefined low-grade scrap, sorted plastics and biomass are crafted directly into high-utility goods.',
      outputs: [
        'Recycled plastic park & patio furniture',
        'Clean-burning biomass cooking briquettes (replacing charcoal)',
        'Upcycled interior decor and durable paving tiles',
        'Potted planters and modular school desks',
      ],
      equipment: 'Shredders · Heat Compressors · Briquetting Presses · Extruders',
    },
    {
      id: 'train',
      name: 'Train',
      icon: GraduationCap,
      title: 'Green Skills & Vocational Apprenticeships',
      subtitle: 'Dignified livelihoods for Abuja youth and women',
      description:
        'Formalizing the informal waste sector. We provide structured training programs covering safe material handling, mechanical sorting, equipment maintenance, and small-scale circular enterprise management.',
      outputs: [
        'Hands-on machine operation certification',
        'Occupational health and safety protocols',
        'Fair-wage compensation with health coverage',
        'Micro-enterprise incubation for female artisans',
      ],
      equipment: 'Vocational Training Classroom · Safety Gear Depot · Tooling Bench',
    },
    {
      id: 'host',
      name: 'Host',
      icon: Users,
      title: 'Community Eco-Education & Tours',
      subtitle: 'Not a dump — an Abuja destination for learning',
      description:
        'Changing the cultural perception of waste. We host school field trips, university researchers, and corporate sustainability teams for immersive walkthroughs of circular transformation in action.',
      outputs: [
        'Interactive school excursions and recycling challenges',
        'Corporate ESG retreats and municipal policy roundtables',
        'Community collection days and zero-waste workshops',
        'Environmental research and data gathering point',
      ],
      equipment: 'Demonstration Gallery · Event Pavilion · Audio-Visual Center',
    },
    {
      id: 'sell',
      name: 'Sell',
      icon: ShoppingBag,
      title: 'Hub Shop & Certified Drop-Off Point',
      subtitle: 'Direct commercial outlet and neighborhood depot',
      description:
        'A retail storefront and community drop-off station where residents can bring separated recyclables for cash or store credit, and purchase locally made upcycled products directly from artisans.',
      outputs: [
        'Retail showroom for upcycled furniture and crafts',
        'Drive-through clean recyclable drop-off bays',
        'Organic compost and bio-char sales for urban gardens',
        'B2B bulk sample orders for estate developers',
      ],
      equipment: 'Retail Counter · Digital Scale Bay · Product Display Gallery',
    },
  ];

  return (
    <section id="hub" className="py-20 sm:py-28 bg-[#0F3D2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Abuja Innovation Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            A live recycling creative centre in Abuja. Not a dump — a destination.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
            Standard scrap yards are disorganized, hazardous, and hidden away. The Ornament Green Innovation Hub is intentionally designed as an open, hygienic community landmark where materials are transformed and people are trained.
          </p>
        </div>

        {/* 4 Functional Tabs */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#0A291E] p-2 rounded-xl border border-[#1b5e46]">
            {functions.map((fn, idx) => {
              const Icon = fn.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={fn.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                    isActive
                      ? 'bg-[#18523E] text-white border border-[#D4AF37] shadow-sm'
                      : 'text-emerald-200/80 hover:text-white hover:bg-[#134432]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-emerald-300'}`} />
                  <span className="font-semibold">{fn.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Function Card */}
          <div className="mt-6 bg-[#0A291E] border border-[#1b5e46] rounded-xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-block text-xs font-mono text-[#D4AF37] mb-2 uppercase tracking-wide">
                  Function 0{activeTab + 1} · {functions[activeTab].name}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {functions[activeTab].title}
                </h3>
                <p className="text-sm text-emerald-300 font-medium mt-1">
                  {functions[activeTab].subtitle}
                </p>
                <p className="mt-4 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                  {functions[activeTab].description}
                </p>

                <div className="mt-6 pt-6 border-t border-[#1b5e46]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-3">
                    Tangible Outputs & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {functions[activeTab].outputs.map((out) => (
                      <div key={out} className="flex items-start gap-2 text-xs text-emerald-100">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel: Equipment & Hub Architectural Blueprint */}
              <div className="lg:col-span-5 bg-[#0F3D2E] border border-[#276e55] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#276e55]">
                    <span className="text-xs font-mono text-white font-semibold">
                      Facility Zone Layout
                    </span>
                    <span className="text-[11px] font-mono text-[#D4AF37]">
                      Zone 0{activeTab + 1}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-[#0A291E] rounded-lg border border-[#1b5e46]">
                      <span className="text-[11px] uppercase font-mono text-emerald-300 block mb-1">
                        Active Machinery / Infrastructure
                      </span>
                      <p className="text-xs text-white font-medium">
                        {functions[activeTab].equipment}
                      </p>
                    </div>

                    <div className="p-3 bg-[#0A291E] rounded-lg border border-[#1b5e46]">
                      <span className="text-[11px] uppercase font-mono text-emerald-300 block mb-1">
                        Target Environmental Standard
                      </span>
                      <p className="text-xs text-white">
                        Zero toxic leachate, sound-insulated processing bays, and solar-supported lighting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#276e55] flex items-center justify-between text-xs text-emerald-200">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Pilot Phase 1 Hub Design</span>
                  </span>
                  <span className="font-mono text-[#D4AF37]">Abuja, FCT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout bar */}
        <div className="mt-8 p-4 rounded-lg bg-[#18523E]/50 border border-[#276e55] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-emerald-100">
            <span className="font-semibold text-white">Want to host an educational excursion or pilot a collection bay?</span>{' '}
            We welcome estate executives, school leaders, and municipal officials.
          </p>
          <a
            href="#get-involved"
            className="px-4 py-2 bg-white text-[#0F3D2E] font-semibold rounded hover:bg-emerald-50 transition-colors whitespace-nowrap shrink-0"
          >
            Inquire About Hub Visits
          </a>
        </div>
      </div>
    </section>
  );
};
