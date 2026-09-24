import React from 'react';
import { ArrowUp, Mail, MapPin, Shield, Phone } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenDeck: () => void;
  onSelectTab: (tab: 'estate' | 'recycler' | 'investor') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck, onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A291E] text-white border-t border-[#18523E] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#18523E]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center shadow-md border border-white/20 shrink-0">
                <Logo size={28} lightBackground={true} />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                Ornament Green
              </span>
            </div>

            <p className="text-sm text-emerald-100/80 max-w-sm leading-relaxed">
              A tech-enabled circular waste venture for Abuja — collection, innovation hub, and climate data. Turning municipal waste from a disposal problem into an urban resource.
            </p>

            <div className="space-y-2 pt-2 text-xs text-emerald-200/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Abuja, Federal Capital Territory, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:07089829051" className="hover:text-white transition-colors font-mono">
                  07089829051
                </a>
                <span className="text-[10px] text-emerald-400 font-mono">(Founder Direct)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:oakinyemi41@yahoo.com" className="hover:text-white transition-colors font-mono">
                  oakinyemi41@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Nav: Pillars & Model */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Circularity Model
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Tech-Enabled Collection
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  5-Step Operational Flow
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  Innovation Hub (Abuja)
                </a>
              </li>
              <li>
                <a href="#hub" className="hover:text-white transition-colors">
                  Upcycling & Youth Jobs
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  NESREA Regulatory Alignment
                </a>
              </li>
            </ul>
          </div>

          {/* Nav: Stakeholders */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a
                  href="#get-involved"
                  onClick={() => onSelectTab('estate')}
                  className="hover:text-white transition-colors"
                >
                  Estate Pilot Onboarding
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  onClick={() => onSelectTab('recycler')}
                  className="hover:text-white transition-colors"
                >
                  Recycling Off-Take Inquiries
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  onClick={() => onSelectTab('investor')}
                  className="hover:text-white transition-colors"
                >
                  Climate Funder & Investor Inquiries
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDeck}
                  className="hover:text-[#D4AF37] transition-colors text-left font-semibold text-white flex items-center gap-1"
                >
                  <span>Preview Investor Deck</span>
                  <span className="text-[10px] text-[#D4AF37]">→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Organization & Stage */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              Pilot Roadmap
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  500 Household Milestone
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Recruiting: Tech / Product Lead
                </a>
              </li>
              <li className="pt-2 text-[11px] text-emerald-300/70 font-mono">
                Pilot Phase: Pre-Launch (Abuja)
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div className="space-y-1">
            <p className="flex items-center gap-1.5 text-emerald-100/80">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Pilot Governance & Projections Notice</span>
            </p>
            <p className="max-w-2xl text-[11px] leading-relaxed text-emerald-300/60">
              Illustrative pilot assumptions — not historical results. Ornament Green is currently in pre-pilot preparation for its initial 500-household cluster in Abuja, Nigeria. App dashboard access will link directly here once live operations commence.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-[11px]">© 2026 Ornament Green</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#18523E] hover:bg-[#216c52] text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
