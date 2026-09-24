import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, FileText, Download, Check, Shield } from 'lucide-react';
import { Logo } from './Logo';

interface DeckPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestDeck: () => void;
}

export const DeckPreviewModal: React.FC<DeckPreviewModalProps> = ({
  isOpen,
  onClose,
  onRequestDeck,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      number: '01',
      title: 'Executive Summary',
      kicker: 'The Opportunity in Abuja, FCT',
      content:
        'Ornament Green is a tech-enabled circular waste utility designed for rapidly growing African cities, launching with a tightly focused 500-household pilot in Abuja. By pairing reliable gated-estate collection with a creative processing Innovation Hub and verified climate reporting, we turn a municipal disposal crisis into three compounding revenue streams.',
      bullets: [
        'Initial Target: 500 households in Abuja high-density estate corridors',
        'Blended Business Model: Collection fees + B2B secondary materials + Upcycled goods',
        'Verified Data: Traceable digital manifests aligning with federal NESREA guidelines',
      ],
      metric: '₦2,500 / household / month baseline fee',
    },
    {
      number: '02',
      title: 'The Urban Problem',
      kicker: 'Broken municipal collection & lost resource value',
      content:
        'Rapid population influx in Abuja has overwhelmed conventional waste infrastructure. Irregular contractor pickups force estates to deal with foul, overflowing communal dumpsters. Meanwhile, over 80% of clean recyclable polymers and metals are mixed with wet organic waste and lost to open dumpsites or burned, releasing toxic pollutants.',
      bullets: [
        'Contractor unreliability leads to frequent resident disputes with facility managers',
        'Zero material segregation at source degrades secondary commodity resale value',
        'Absence of traceable waste data prevents ESG reporting and policy enforcement',
      ],
      metric: '>85% recyclable commodities lost to landfill',
    },
    {
      number: '03',
      title: 'The Three-Pillar Solution',
      kicker: 'Integrated circular infrastructure',
      content:
        'Ornament Green replaces disjointed, informal hauling with a cohesive closed-loop architecture: 1) Tech-Enabled Estate Collection with QR manifests; 2) The Innovation Hub where plastics and biomass are remade into furniture and clean briquettes; 3) Climate Data Platform delivering audited diversion records.',
      bullets: [
        'Pillar 1: Guaranteed on-time morning collection with digital scale weigh-ins',
        'Pillar 2: Creative Hub for local value addition, youth jobs, and educational tours',
        'Pillar 3: Verifiable carbon offset and landfill diversion metrics for estates & regulators',
      ],
      metric: '100% digital chain of custody from gate to off-taker',
    },
    {
      number: '04',
      title: 'Pilot Economics & Unit Model',
      kicker: 'Illustrative pilot assumptions (500 Households)',
      content:
        'Our financial model is built on conservative Nigerian urban benchmarks. Unlike traditional scavengers who only chase raw scrap volume, Ornament Green captures reliable recurring estate subscription revenue that covers logistics costs, while secondary material sales and upcycling provide high-margin upside.',
      bullets: [
        'Revenue Stream A: Estate Collection Subscriptions (₦1.25M/mo at 500 households)',
        'Revenue Stream B: Industrial Recycler Off-take (baled PET, HDPE, scrap metals)',
        'Revenue Stream C: Innovation Hub Products (clean bio-briquettes, upcycled goods)',
      ],
      metric: '3 distinct, diversified cash flow streams',
    },
    {
      number: '05',
      title: 'The Innovation Hub Concept',
      kicker: 'A destination for creative recycling',
      content:
        'Rather than a stigmatized scrap dump, our Innovation Hub in Abuja is an attractive community asset. It houses modular shredders, low-energy melt-presses, a vocational skills training workshop for youth and women, and an eco-retail depot for direct sales.',
      bullets: [
        'Make: Upcycling plastics into park benches, patio tiles, and cooking briquettes',
        'Train: Structured green-collar apprenticeship programs with fair living wages',
        'Host & Sell: School excursions, corporate waste audits, and neighborhood drop-off bays',
      ],
      metric: '10+ direct fair-wage jobs created in Pilot Phase 1',
    },
    {
      number: '06',
      title: 'Pilot Milestones & Funding Ask',
      kicker: 'Catalytic capital for Phase 1 launch',
      content:
        'We are raising catalytic pre-seed capital and grant funding to procure our initial logistics vehicle, deploy 500 dual-stream estate bin sets with QR scales, set up the pilot processing workshop at the Abuja Innovation Hub, and deliver the first NESREA-aligned municipal report.',
      bullets: [
        'Milestone 1: Sign 500 households across 2–3 contiguous Abuja estates',
        'Milestone 2: Commission pilot shredder, press, and digital weighing integration',
        'Milestone 3: Divert 2–4 tonnes/month of dry recyclables from open landfill',
        'Milestone 4: Publish certified pilot impact report for municipal and investor review',
      ],
      metric: 'Target Launch: Abuja FCT Pilot Phase 1',
    },
  ];

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#0F3D2E] text-white rounded-2xl max-w-3xl w-full border border-[#276e55] shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#18523E] flex items-center justify-between bg-[#0A291E]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
              <Logo size={24} lightBackground={true} />
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-300">
                ORNAMENT GREEN · INVESTOR BRIEF
              </div>
              <div className="text-sm font-bold text-white font-display">
                Executive Pilot Deck Summary
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#D4AF37]">
              Slide {slide.number} of 0{slides.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-emerald-300 hover:text-white rounded-lg hover:bg-[#18523E] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content Area */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-wider block mb-1">
              {slide.kicker}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {slide.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            {slide.content}
          </p>

          <div className="space-y-2.5 bg-[#0A291E] p-4 sm:p-5 rounded-xl border border-[#1b5e46]">
            <span className="text-xs font-mono font-semibold text-emerald-300 uppercase block mb-2">
              Key Strategic Takeaways:
            </span>
            {slide.bullets.map((b) => (
              <div key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* Highlight stat pill */}
          <div className="flex items-center justify-between p-3.5 bg-[#18523E]/50 border border-[#276e55] rounded-lg">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs text-emerald-200">Pilot Assumption Anchor:</span>
            </div>
            <span className="text-xs sm:text-sm font-bold font-mono text-[#D4AF37]">
              {slide.metric}
            </span>
          </div>

          <p className="text-[11px] text-emerald-200/50 italic">
            *Notice: Information presented is for illustrative pilot planning purposes and represents pre-pilot assumptions.
          </p>
        </div>

        {/* Navigation & Request Footer */}
        <div className="p-4 sm:p-5 bg-[#0A291E] border-t border-[#18523E] flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slide buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#18523E] hover:bg-[#20684f] disabled:opacity-30 rounded flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <div className="flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-5 bg-[#D4AF37]' : 'bg-[#18523E]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#18523E] hover:bg-[#20684f] disabled:opacity-30 rounded flex items-center gap-1 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
                onRequestDeck();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#09261C] bg-[#D4AF37] hover:bg-[#F4D35E] rounded transition-colors whitespace-nowrap"
            >
              <span>Request Full Confidential Deck</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
