import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Handshake, CheckCircle2, Mail, Phone } from 'lucide-react';

interface TeamSectionProps {
  onJoinRoleClick: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onJoinRoleClick }) => {
  const [roleModalOpen, setRoleModalOpen] = useState(false);

  const team = [
    {
      name: 'Akinyemi Peter Oluwafemi',
      role: 'Founder',
      background:
        'BSc Accounting graduate with experience in operations, project management, data handling and community leadership; responsible for overall strategy, partnerships, fundraising and execution.',
      focus: 'Overall Strategy, Partnerships, Fundraising & Execution',
      initials: 'AO',
      phone: '07089829051',
      email: 'oakinyemi41@yahoo.com',
    },
    {
      name: 'Ann Ene Agbo',
      role: 'Chief Operations Officer',
      background:
        'Responsible for collection operations, logistics, field execution and day-to-day operational delivery.',
      focus: 'Collection Operations, Logistics & Field Delivery',
      initials: 'AA',
    },
    {
      name: 'Jemimah Adeyefa',
      role: 'Finance & Admin Lead',
      background:
        'Responsible for financial controls, budgeting, administration, documentation and financial/operational support.',
      focus: 'Financial Controls, Budgeting, Documentation & Admin',
      initials: 'JA',
    },
  ];

  const partnerships = [
    {
      domain: 'Industrial Recycling Off-Takers',
      status: 'MOU Discussions',
      detail:
        'Structuring guaranteed monthly off-take agreements for baled PET, high-density polyethylene (HDPE), and scrap metals with certified Nigerian processing plants.',
    },
    {
      domain: 'Logistics & Telemetry Tech Partner',
      status: 'Integration Pilot',
      detail:
        'Deploying portable digital Bluetooth load-cell scales and offline-first mobile manifest logging for real-time gate weigh-in reconciliation.',
    },
    {
      domain: 'NESREA Regulatory Pathway',
      status: 'Compliance Framework',
      detail:
        'Aligning pilot data schema with National Environmental Standards and Regulations Enforcement Agency (NESREA) guidelines for FCT waste audits.',
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-28 bg-[#FAFCFA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-2 font-mono">
            Leadership & Alliances
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F3D2E] font-display">
            Built by operators grounded in Abuja’s urban realities.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our multidisciplinary team unites field logistics, financial rigor, and circular design to build a durable, commercially viable utility.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0F3D2E] text-[#D4AF37] font-display font-bold text-lg flex items-center justify-center mb-4">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-[#0F3D2E] font-display">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wide block mb-3 font-mono">
                  {member.role}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {member.background}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-2">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    Core Mandate
                  </span>
                  <span className="text-xs font-medium text-slate-700">
                    {member.focus}
                  </span>
                </div>

                {member.phone && member.email && (
                  <div className="pt-2 border-t border-slate-50 flex flex-col gap-1.5 text-xs">
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-1.5 text-[#0F3D2E] hover:text-[#18523E] font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0F3D2E] font-mono text-[11px] truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Open Role: Technology / Product Lead */}
          <div className="bg-[#EBF4F0] border-2 border-dashed border-[#18523E]/30 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0F3D2E] text-white text-[11px] font-mono font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>Now Recruiting</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F3D2E] font-display">
                Technology / Product Lead
              </h3>
              <span className="text-xs font-semibold text-[#0F3D2E]/80 uppercase tracking-wide block mb-3 font-mono">
                Full-Time / Co-Founding Mandate
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                To lead development of Ornament Green’s waste-tracking, user-rewards, data and technology platform.
              </p>
            </div>

            <div className="border-t border-emerald-900/10 pt-3">
              <button
                onClick={() => setRoleModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0F3D2E] hover:bg-[#18523E] rounded-md transition-colors"
              >
                <span>Express Interest in Role</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Partnerships in Progress */}
        <div className="mt-16 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-2">
            <div className="flex items-center gap-2">
              <Handshake className="w-5 h-5 text-[#0F3D2E]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#0F3D2E] font-display">
                Partnerships & Regulatory Alignments in Progress
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Pilot Preparation Phase
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((p) => (
              <div key={p.domain} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#0F3D2E] uppercase">
                    {p.domain}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#0F3D2E] font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  <CheckCircle2 className="w-3 h-3 text-[#0F3D2E]" />
                  <span>{p.status}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Role Interest Modal */}
      {roleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <h4 className="text-lg font-bold text-[#0F3D2E] font-display">
                  Technology / Product Lead Role
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Abuja, Nigeria · Pre-pilot stage equity & compensation
                </p>
              </div>
              <button
                onClick={() => setRoleModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-lg leading-none p-1"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-sm text-slate-600">
              <p>
                To lead development of Ornament Green’s waste-tracking, user-rewards, data and technology platform for Abuja and beyond.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1.5">
                <div className="font-semibold text-slate-800">What you’ll architect & build:</div>
                <div>• Digital waste-tracking platform with IoT scale and QR manifest verification</div>
                <div>• Household & estate user-rewards portal for segregation at source</div>
                <div>• Field logistics dispatch app & NESREA-aligned regulatory reporting dashboard</div>
              </div>
              <p className="text-xs text-slate-500">
                To connect with the founders directly, reach out via the Get Involved form or email directly:
              </p>
              <div className="flex items-center gap-2 p-2.5 bg-emerald-50 rounded border border-emerald-100 text-xs font-mono text-[#0F3D2E]">
                <Mail className="w-4 h-4 text-[#0F3D2E]" />
                <span className="font-semibold select-all">careers@ornamentgreen.com</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => setRoleModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setRoleModalOpen(false);
                  onJoinRoleClick();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0F3D2E] hover:bg-[#18523E] rounded"
              >
                Use Contact Form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
