import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  Building,
  RefreshCcw,
  TrendingUp,
  Download,
  Eye,
  HelpCircle,
  Phone,
  Mail,
  Layers,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { LeadType, SubmissionRecord } from '../types';
import { OperationalPortal } from './OperationalPortal';

interface GetInvolvedProps {
  initialTab?: LeadType;
  onOpenDeck: () => void;
  onOpenPortal?: () => void;
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({ initialTab = 'estate', onOpenDeck, onOpenPortal }) => {
  const [activeTab, setActiveTab] = useState<LeadType>(initialTab);
  const [estateSubView, setEstateSubView] = useState<'form' | 'portal'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<SubmissionRecord | null>(null);
  const [submissionsList, setSubmissionsList] = useState<SubmissionRecord[]>([]);

  // Sync initial tab if parent triggers it
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Load past local test submissions
  useEffect(() => {
    try {
      const saved = localStorage.getItem('og_submissions');
      if (saved) {
        setSubmissionsList(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Form states
  const [estateForm, setEstateForm] = useState({
    estateName: '',
    district: 'Guzape',
    customDistrict: '',
    householdCount: '150',
    contactName: '',
    phone: '',
    email: '',
    currentHaulerStatus: 'Irregular / Unsatisfied with current contractor',
    notes: '',
  });

  const [recyclerForm, setRecyclerForm] = useState({
    orgName: '',
    partnerType: 'Off-taker (Plastics/Metals)',
    materials: ['PET Bottles', 'HDPE / Rigid Plastics'],
    contactName: '',
    phone: '',
    email: '',
    facilityLocation: 'Abuja / Idu Industrial',
    message: '',
  });

  const [investorForm, setInvestorForm] = useState({
    fullName: '',
    organization: '',
    investorType: 'Angel / Syndicate',
    email: '',
    phone: '',
    requestDeck: true,
    ticketInterest: 'Seed / Pilot Grant ($15k - $50k)',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const abujaDistricts = [
    'Guzape',
    'Maitama',
    'Wuse II',
    'Asokoro',
    'Jabi',
    'Gwarinpa',
    'Katampe Extension',
    'Lokogoma',
    'Lugbe',
    'Life Camp',
    'Utako',
    'Other Abuja District',
  ];

  const handleEstateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!estateForm.estateName.trim() || !estateForm.contactName.trim() || !estateForm.email.trim() || !estateForm.phone.trim()) {
      setErrorMsg('Please fill in all required fields (Estate Name, Contact Name, Email, Phone).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const record: SubmissionRecord = {
        id: `OG-EST-${Math.floor(1000 + Math.random() * 9000)}`,
        type: 'estate',
        title: estateForm.estateName,
        subtitle: `${estateForm.householdCount} households · ${estateForm.district === 'Other Abuja District' ? estateForm.customDistrict || 'Abuja' : estateForm.district}`,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        data: {
          estateName: estateForm.estateName,
          district: estateForm.district,
          householdCount: Number(estateForm.householdCount) || 0,
          contactName: estateForm.contactName,
          phone: estateForm.phone,
          email: estateForm.email,
          currentHaulerStatus: estateForm.currentHaulerStatus,
          message: estateForm.notes,
          timestamp: new Date().toISOString(),
        },
      };

      saveSubmission(record);
      setIsSubmitting(false);
      setSubmittedRecord(record);
    }, 600);
  };

  const handleRecyclerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!recyclerForm.orgName.trim() || !recyclerForm.contactName.trim() || !recyclerForm.email.trim()) {
      setErrorMsg('Please provide your organization name, contact person, and email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const record: SubmissionRecord = {
        id: `OG-REC-${Math.floor(1000 + Math.random() * 9000)}`,
        type: 'recycler',
        title: recyclerForm.orgName,
        subtitle: `${recyclerForm.partnerType} · ${recyclerForm.facilityLocation}`,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        data: {
          orgName: recyclerForm.orgName,
          partnerType: recyclerForm.partnerType,
          materialFocus: recyclerForm.materials,
          contactName: recyclerForm.contactName,
          phone: recyclerForm.phone,
          email: recyclerForm.email,
          message: recyclerForm.message,
          timestamp: new Date().toISOString(),
        },
      };

      saveSubmission(record);
      setIsSubmitting(false);
      setSubmittedRecord(record);
    }, 600);
  };

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!investorForm.fullName.trim() || !investorForm.email.trim()) {
      setErrorMsg('Please enter your full name and valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const record: SubmissionRecord = {
        id: `OG-INV-${Math.floor(1000 + Math.random() * 9000)}`,
        type: 'investor',
        title: investorForm.fullName,
        subtitle: `${investorForm.organization || 'Independent Funder'} · ${investorForm.ticketInterest}`,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        data: {
          fullName: investorForm.fullName,
          organization: investorForm.organization,
          investorType: investorForm.investorType,
          email: investorForm.email,
          phone: investorForm.phone,
          requestDeck: investorForm.requestDeck,
          message: investorForm.message,
          timestamp: new Date().toISOString(),
        },
      };

      saveSubmission(record);
      setIsSubmitting(false);
      setSubmittedRecord(record);
    }, 600);
  };

  const saveSubmission = (rec: SubmissionRecord) => {
    try {
      const updated = [rec, ...submissionsList.filter((s) => s.id !== rec.id)];
      setSubmissionsList(updated);
      localStorage.setItem('og_submissions', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const toggleMaterial = (mat: string) => {
    setRecyclerForm((prev) => {
      const exists = prev.materials.includes(mat);
      return {
        ...prev,
        materials: exists ? prev.materials.filter((m) => m !== mat) : [...prev.materials, mat],
      };
    });
  };

  return (
    <section id="get-involved" className="py-20 sm:py-28 bg-[#FAFCFA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-2 font-mono">
            Get Involved · Pre-Pilot Intake
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F3D2E] font-display">
            Partner with Ornament Green in Abuja.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you represent a residential estate seeking reliable waste logistics, an industrial recycling partner, or a catalytic climate funder — let's build together.
          </p>
        </div>

        {/* 3 Interactive Path Tabs */}
        <div className="mt-12 max-w-4xl">
          <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => {
                setActiveTab('estate');
                setSubmittedRecord(null);
              }}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'estate'
                  ? 'bg-[#0F3D2E] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Building className="w-4 h-4 shrink-0" />
              <span className="truncate">Estate Partner</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('recycler');
                setSubmittedRecord(null);
              }}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'recycler'
                  ? 'bg-[#0F3D2E] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <RefreshCcw className="w-4 h-4 shrink-0" />
              <span className="truncate">Recycling / Tech Partner</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('investor');
                setSubmittedRecord(null);
              }}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'investor'
                  ? 'bg-[#0F3D2E] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span className="truncate">Investor / Funder</span>
            </button>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center justify-between">
              <span>{errorMsg}</span>
              <button onClick={() => setErrorMsg(null)} className="font-bold ml-2">
                ✕
              </button>
            </div>
          )}

          {/* Form Container */}
          <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            {submittedRecord ? (
              /* Success / Receipt Screen */
              <div className="text-center py-6 max-w-lg mx-auto space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EBF4F0] text-[#0F3D2E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#0F3D2E]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F3D2E] font-display">
                  Inquiry Received
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you for connecting with Ornament Green. We have recorded your submission reference{' '}
                  <span className="font-mono font-bold text-[#0F3D2E]">{submittedRecord.id}</span>. Our Abuja operations team will follow up within 24 business hours.
                </p>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-left text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Record:</span>
                    <span className="font-bold text-slate-800">{submittedRecord.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Context:</span>
                    <span className="text-slate-700">{submittedRecord.subtitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date:</span>
                    <span className="text-slate-700">{submittedRecord.date}</span>
                  </div>
                </div>

                {submittedRecord.type === 'investor' && (
                  <div className="p-3 bg-[#EBF4F0] border border-[#cbe1d6] rounded-lg text-xs text-[#0F3D2E] flex items-center justify-between">
                    <span>Executive Pilot Deck is available to preview immediately:</span>
                    <button
                      onClick={onOpenDeck}
                      className="px-3 py-1.5 bg-[#0F3D2E] text-white font-semibold rounded hover:bg-[#18523E] transition-colors"
                    >
                      View Deck
                    </button>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmittedRecord(null)}
                    className="px-4 py-2 text-xs font-semibold text-[#0F3D2E] border border-slate-300 rounded hover:bg-slate-50"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <div>
                {/* 1. Estate Partner Form / Operational Pilot System */}
                {activeTab === 'estate' && (
                  <div className="space-y-6">
                    {/* Subview Toggle for Estate Partner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEstateSubView('form')}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            estateSubView === 'form'
                              ? 'bg-[#0F3D2E] text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                          }`}
                        >
                          Estate Onboarding Form
                        </button>
                        <button
                          type="button"
                          onClick={() => setEstateSubView('portal')}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                            estateSubView === 'portal'
                              ? 'bg-[#0F3D2E] text-white shadow-sm'
                              : 'text-emerald-800 hover:text-emerald-950 bg-emerald-50 border border-emerald-300'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Live Operational Pilot Portal</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </button>
                      </div>

                      {onOpenPortal && (
                        <button
                          type="button"
                          onClick={onOpenPortal}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 hover:text-emerald-950 font-semibold hover:underline"
                        >
                          <span>Open Full-Screen Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* Operational Portal Subview */}
                    {estateSubView === 'portal' ? (
                      <div className="space-y-4">
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div>
                            <span className="font-bold text-emerald-900">
                              Live Operational Pilot Preview (Abuja 500 Pilot)
                            </span>
                            <p className="text-emerald-800 mt-0.5">
                              This is the interactive system deployed to your estate households, gate collectors, and facility managers.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setEstateSubView('form')}
                            className="px-3 py-1.5 bg-[#0F3D2E] text-white font-semibold rounded shrink-0 self-start sm:self-center"
                          >
                            Return to Registration Form
                          </button>
                        </div>

                        <OperationalPortal isEmbedded={true} />
                      </div>
                    ) : (
                      <>
                        {/* Interactive teaser banner to view the operational portal */}
                        <div className="p-4 bg-gradient-to-r from-emerald-900 to-[#0F3D2E] text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-[#D4AF37] text-[#09261C] text-[10px] font-mono font-bold uppercase">
                                Live Pilot Telemetry
                              </span>
                              <span className="text-xs font-semibold text-emerald-200">
                                Abuja Operational Interface
                              </span>
                            </div>
                            <p className="text-xs text-emerald-100 max-w-xl leading-relaxed">
                              See how our doorstep gate weigh-ins, resident impact dashboards, and NESREA compliance certificates function in real time.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setEstateSubView('portal')}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-[#0F3D2E] hover:bg-emerald-50 text-xs font-bold rounded-lg transition-colors shadow-sm shrink-0"
                          >
                            <Layers className="w-3.5 h-3.5 text-[#0F3D2E]" />
                            <span>Preview Operational Portal</span>
                          </button>
                        </div>

                        {/* Founder Direct Line Card */}
                        <div className="p-4 sm:p-5 bg-[#FAFCFA] border-2 border-[#18523E]/20 rounded-xl space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <span className="text-[10px] font-mono uppercase font-bold text-[#0F3D2E] tracking-wider block">
                                Founder Direct Line · Estate Onboarding
                              </span>
                              <h4 className="text-base font-bold text-slate-900 font-display">
                                Akinyemi Peter Oluwafemi
                              </h4>
                              <p className="text-xs text-slate-600">
                                Founder, Ornament Green · Personal oversight for pilot estate partners in Abuja
                              </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                              <a
                                href="tel:07089829051"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0F3D2E] text-white hover:bg-[#18523E] rounded-md text-xs font-semibold shadow-sm transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                                <span>07089829051</span>
                              </a>
                              <a
                                href="https://wa.me/2347089829051"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-md text-xs font-semibold shadow-sm transition-colors"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                              </a>
                              <a
                                href="mailto:oakinyemi41@yahoo.com"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:text-[#0F3D2E] rounded-md text-xs font-semibold transition-colors"
                              >
                                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                                <span className="font-mono text-[11px]">oakinyemi41@yahoo.com</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Estate Onboarding Form */}
                        <form onSubmit={handleEstateSubmit} className="space-y-6 pt-2">
                          <div className="border-b border-slate-100 pb-3">
                            <h3 className="text-xl font-bold text-[#0F3D2E] font-display">
                              Estate Pilot Enrollment
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">
                              Enroll your residential community into Abuja's 500-household circular pilot. Predictable pickups, QR tracking, and waste segregation support.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Estate Name *
                              </label>
                              <input
                                type="text"
                                required
                                value={estateForm.estateName}
                                onChange={(e) => setEstateForm({ ...estateForm, estateName: e.target.value })}
                                placeholder="e.g. Crown Court, Guzape Hills Estate"
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Abuja District / Location *
                              </label>
                              <select
                                value={estateForm.district}
                                onChange={(e) => setEstateForm({ ...estateForm, district: e.target.value })}
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              >
                                {abujaDistricts.map((d) => (
                                  <option key={d} value={d}>
                                    {d}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {estateForm.district === 'Other Abuja District' && (
                              <div className="sm:col-span-2">
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                  Specify Location in FCT
                                </label>
                                <input
                                  type="text"
                                  value={estateForm.customDistrict}
                                  onChange={(e) => setEstateForm({ ...estateForm, customDistrict: e.target.value })}
                                  placeholder="e.g. Kado Estate, Apo Legislative"
                                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                                />
                              </div>
                            )}

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Approximate Household Count
                              </label>
                              <select
                                value={estateForm.householdCount}
                                onChange={(e) => setEstateForm({ ...estateForm, householdCount: e.target.value })}
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              >
                                <option value="50">50 - 100 households</option>
                                <option value="150">100 - 250 households</option>
                                <option value="350">250 - 500 households</option>
                                <option value="750">500+ households (Multi-phase)</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Current Hauler Experience
                              </label>
                              <select
                                value={estateForm.currentHaulerStatus}
                                onChange={(e) => setEstateForm({ ...estateForm, currentHaulerStatus: e.target.value })}
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              >
                                <option value="Irregular / Unsatisfied with current contractor">
                                  Irregular / Unsatisfied with contractor
                                </option>
                                <option value="No dedicated recycling (mixed waste only)">
                                  No dedicated recycling (mixed waste only)
                                </option>
                                <option value="Seeking facility cost savings & cleaner environment">
                                  Seeking cost savings & clean bins
                                </option>
                                <option value="New development setting up waste protocols">
                                  New development setting up protocols
                                </option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Facility Contact Name *
                              </label>
                              <input
                                type="text"
                                required
                                value={estateForm.contactName}
                                onChange={(e) => setEstateForm({ ...estateForm, contactName: e.target.value })}
                                placeholder="e.g. Engr. Mohammed Bello"
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Phone Number (WhatsApp Preferred) *
                              </label>
                              <input
                                type="tel"
                                required
                                value={estateForm.phone}
                                onChange={(e) => setEstateForm({ ...estateForm, phone: e.target.value })}
                                placeholder="e.g. +234 803 123 4567"
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Official Email Address *
                              </label>
                              <input
                                type="email"
                                required
                                value={estateForm.email}
                                onChange={(e) => setEstateForm({ ...estateForm, email: e.target.value })}
                                placeholder="e.g. facility@crowncourtestate.com"
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Additional Estate Details (Optional)
                              </label>
                              <textarea
                                rows={2}
                                value={estateForm.notes}
                                onChange={(e) => setEstateForm({ ...estateForm, notes: e.target.value })}
                                placeholder="e.g. Gated security protocol, existing bin enclosures, preferred pickup mornings..."
                                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                              />
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-xs text-slate-500">
                              Target pilot pricing: <span className="font-semibold text-[#0F3D2E]">₦2,500/household/month</span> (Dual-stream collection included)
                            </div>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F3D2E] hover:bg-[#18523E] rounded-lg transition-colors disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <span>Processing...</span>
                              ) : (
                                <>
                                  <span>Register Estate for Pilot</span>
                                  <Send className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                )}

                {/* 2. Recycling / Technical Partner Form */}
                {activeTab === 'recycler' && (
                  <form onSubmit={handleRecyclerSubmit} className="space-y-6">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-xl font-bold text-[#0F3D2E] font-display">
                        Recycling & Technical Partnership
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Connect with Ornament Green to secure segregated dry recyclable feedstock in Abuja or supply logistics technology.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Organization / Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={recyclerForm.orgName}
                          onChange={(e) => setRecyclerForm({ ...recyclerForm, orgName: e.target.value })}
                          placeholder="e.g. Apex Polymer Recyclers Ltd"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Partnership Type
                        </label>
                        <select
                          value={recyclerForm.partnerType}
                          onChange={(e) => setRecyclerForm({ ...recyclerForm, partnerType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        >
                          <option value="Off-taker (Plastics/Metals)">Off-taker (Plastics, Metals, Paper)</option>
                          <option value="Machinery / Upcycling Equipment Supplier">Machinery & Upcycling Equipment</option>
                          <option value="Logistics / Smart Scales Technology">Logistics & Telemetry Tech</option>
                          <option value="Academic / Research Institution">Academic / Environmental Research</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                          Material Streams of Interest (Check all that apply)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                          {['PET Bottles', 'HDPE / Rigid Plastics', 'Cardboard & Paper', 'Aluminum / Metal Cans', 'Biomass / Agricultural waste', 'Organic Food Feedstock'].map(
                            (mat) => {
                              const checked = recyclerForm.materials.includes(mat);
                              return (
                                <button
                                  type="button"
                                  key={mat}
                                  onClick={() => toggleMaterial(mat)}
                                  className={`p-2 rounded border text-left flex items-center justify-between ${
                                    checked
                                      ? 'bg-[#EBF4F0] border-[#0F3D2E] text-[#0F3D2E] font-medium'
                                      : 'bg-slate-50 border-slate-200 text-slate-600'
                                  }`}
                                >
                                  <span>{mat}</span>
                                  {checked && <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3D2E]" />}
                                </button>
                              );
                            }
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          value={recyclerForm.contactName}
                          onChange={(e) => setRecyclerForm({ ...recyclerForm, contactName: e.target.value })}
                          placeholder="e.g. Dr. Ngozi Nwosu"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={recyclerForm.email}
                          onChange={(e) => setRecyclerForm({ ...recyclerForm, email: e.target.value })}
                          placeholder="e.g. procurement@apexrecyclers.ng"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Off-take Capacity / Proposed Scope
                        </label>
                        <textarea
                          rows={2}
                          value={recyclerForm.message}
                          onChange={(e) => setRecyclerForm({ ...recyclerForm, message: e.target.value })}
                          placeholder="Specify target monthly tonnage, grading requirements, or technical collaboration specs..."
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F3D2E] hover:bg-[#18523E] rounded-lg transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Submit Off-Take Proposal</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {/* 3. Investor / Funder Form */}
                {activeTab === 'investor' && (
                  <form onSubmit={handleInvestorSubmit} className="space-y-6">
                    <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#0F3D2E] font-display">
                          Investor & Climate Funder Channel
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Connect with the founders. Seed round and grant financing for Abuja pilot infrastructure and Innovation Hub machinery.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={onOpenDeck}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F3D2E] bg-[#EBF4F0] border border-[#cbe1d6] rounded hover:bg-[#d8ece2] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Deck Brief</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={investorForm.fullName}
                          onChange={(e) => setInvestorForm({ ...investorForm, fullName: e.target.value })}
                          placeholder="e.g. Ibrahim Abubakar"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Firm / Syndicate / Angel Affiliation
                        </label>
                        <input
                          type="text"
                          value={investorForm.organization}
                          onChange={(e) => setInvestorForm({ ...investorForm, organization: e.target.value })}
                          placeholder="e.g. Savannah Climate Capital, Angel"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={investorForm.email}
                          onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                          placeholder="e.g. i.abubakar@fund.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Interest Mandate
                        </label>
                        <select
                          value={investorForm.ticketInterest}
                          onChange={(e) => setInvestorForm({ ...investorForm, ticketInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        >
                          <option value="Seed / Pilot Grant ($15k - $50k)">Pilot Grant / Catalytic ($15k - $50k)</option>
                          <option value="Pre-Seed Equity ($50k - $250k)">Pre-Seed Equity ($50k - $250k)</option>
                          <option value="Asset Financing (Fleet & Machinery)">Asset / Debt Financing (Trucks & Presses)</option>
                          <option value="General Ecosystem Advisory">Ecosystem & Advisory</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Message / Specific Inquiries for Founders
                        </label>
                        <textarea
                          rows={2}
                          value={investorForm.message}
                          onChange={(e) => setInvestorForm({ ...investorForm, message: e.target.value })}
                          placeholder="e.g. Interested in pilot unit economics, Abuja collection route density, or scheduling founder call..."
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                          <input
                            type="checkbox"
                            checked={investorForm.requestDeck}
                            onChange={(e) => setInvestorForm({ ...investorForm, requestDeck: e.target.checked })}
                            className="w-4 h-4 text-[#0F3D2E] rounded border-slate-300 focus:ring-[#0F3D2E]"
                          />
                          <span>Send confidential Ornament Green Investor Pitch Deck & Financial Model to my email</span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F3D2E] hover:bg-[#18523E] rounded-lg transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Connecting...</span>
                        ) : (
                          <>
                            <span>Request Pilot Deck & Call</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Local Submissions Log (Useful for testing & reassurance) */}
          {submissionsList.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-semibold uppercase tracking-wider font-mono">
                  Your Submitted Pilot Inquiries ({submissionsList.length})
                </span>
                <span className="text-[11px]">Saved in browser session</span>
              </div>
              <div className="space-y-2">
                {submissionsList.slice(0, 3).map((sub) => (
                  <div
                    key={sub.id}
                    className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-[#0F3D2E]">{sub.title}</div>
                      <div className="text-slate-500">{sub.subtitle}</div>
                    </div>
                    <div className="text-right font-mono text-[11px] text-slate-400">
                      <div>{sub.id}</div>
                      <div>{sub.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
