import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Layers } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenDeck: () => void;
  onOpenPortal?: () => void;
  onSelectTab?: (tab: 'estate' | 'recycler' | 'investor') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck, onOpenPortal, onSelectTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Innovation Hub', href: '#hub' },
    { label: 'Impact', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'Get Involved', href: '#get-involved' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#get-involved' && onSelectTab) {
      onSelectTab('estate');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0F3D2E]/95 backdrop-blur-md border-b border-[#18523E] py-3.5 shadow-sm'
          : 'bg-[#0F3D2E] border-b border-[#18523E]/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          >
            <div className="w-9 h-9 rounded-lg bg-white p-1 flex items-center justify-center shadow-md border border-white/20 transition-transform duration-200 group-hover:scale-105 shrink-0">
              <Logo size={28} lightBackground={true} />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-display">
              Ornament Green
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-emerald-100/80 hover:text-white transition-colors duration-150 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenPortal && (
              <button
                onClick={onOpenPortal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-100 hover:text-white bg-[#18523E]/70 hover:bg-[#18523E] border border-emerald-500/40 rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                title="Open live operational waste telemetry portal"
              >
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="whitespace-nowrap">Operational Portal</span>
                <span className="px-1 py-0.5 rounded bg-emerald-600/70 text-[9px] font-mono text-white uppercase font-bold tracking-wider">
                  Live
                </span>
              </button>
            )}
            <button
              onClick={onOpenDeck}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-200 hover:text-white bg-[#18523E]/60 hover:bg-[#18523E] border border-[#276e55] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="whitespace-nowrap">Pilot Deck</span>
            </button>
            <a
              href="#get-involved"
              onClick={() => handleNavClick('#get-involved')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#09261C] bg-[#D4AF37] hover:bg-[#F4D35E] rounded-md transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37] whitespace-nowrap"
            >
              <span>Partner Your Estate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-100 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#18523E] pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-3 py-2 text-sm font-medium text-emerald-100 hover:text-white hover:bg-[#18523E] rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#18523E] flex flex-col gap-2">
              {onOpenPortal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-100 bg-[#18523E] border border-emerald-500/40 rounded-md"
                >
                  <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Launch Live Operational Portal</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeck();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#18523E]/70 border border-[#276e55] rounded-md"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>View Pilot Deck Summary</span>
              </button>
              <a
                href="#get-involved"
                onClick={() => handleNavClick('#get-involved')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#09261C] bg-[#D4AF37] rounded-md"
              >
                <span>Partner Your Estate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
