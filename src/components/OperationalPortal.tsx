import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Scale,
  Leaf,
  Sparkles,
  MapPin,
  Phone,
  CheckCircle2,
  Info,
  Clock,
  Plus,
  RefreshCw,
  Camera,
  FileSpreadsheet,
  Award,
  ChevronDown,
  X,
  Search,
  Check,
  Send,
  Sliders,
  ShieldCheck,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { Logo } from './Logo';

export type OperationalTab = 'household' | 'collector' | 'admin';

interface OperationalPortalProps {
  onBackToPublic?: () => void;
  isEmbedded?: boolean;
}

export const OperationalPortal: React.FC<OperationalPortalProps> = ({
  onBackToPublic,
  isEmbedded = false,
}) => {
  const [activeTab, setActiveTab] = useState<OperationalTab>('household');
  const [activeResidentId, setActiveResidentId] = useState<'fatima' | 'chukwuma' | 'amina'>('fatima');
  const [scalePhotoModal, setScalePhotoModal] = useState<string | null>(null);
  const [pickupModalOpen, setPickupModalOpen] = useState(false);
  const [pickupSuccess, setPickupSuccess] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Collector Form State
  const [collectorRecord, setCollectorRecord] = useState({
    resident: 'fatima',
    pet: '6.8',
    hdpe: '3.2',
    cardboard: '8.5',
    metals: '2.4',
    glass: '3.0',
    organics: '0.0',
    contaminationRate: '98.5',
    notes: 'Sorted into designated bags. Clean condition, zero residue.',
  });
  const [collectorSubmitted, setCollectorSubmitted] = useState(false);

  // Pickups ledger state
  const [records, setRecords] = useState([
    {
      id: 'pk-101',
      date: '2026-09-19',
      resident: 'Fatima Bello',
      residentId: 'fatima',
      estate: 'Guzape Green Valley Estate',
      type: 'Estate Doorstep',
      totalWeight: 23.9,
      avoidedCo2: 34.6,
      streams: {
        pet: 6.8,
        hdpe: 3.2,
        cardboard: 8.5,
        metals: 2.4,
        glass: 3.0,
      },
      collector: 'Ibrahim Musa (col-1)',
      notes: 'Sorted into designated bags. Clean condition, zero residue.',
      photoUrl: 'scale-guzape-101.jpg',
    },
    {
      id: 'pk-108',
      date: '2026-09-12',
      resident: 'Fatima Bello',
      residentId: 'fatima',
      estate: 'Guzape Green Valley Estate',
      type: 'Estate Doorstep',
      totalWeight: 19.6,
      avoidedCo2: 28.6,
      streams: {
        pet: 5.5,
        hdpe: 2.8,
        cardboard: 7.0,
        metals: 1.9,
        glass: 2.4,
      },
      collector: 'Ibrahim Musa (col-1)',
      notes: 'Clean batch, dry paper and clean crushed PET.',
      photoUrl: 'scale-guzape-108.jpg',
    },
    {
      id: 'pk-094',
      date: '2026-09-21',
      resident: 'Chukwuma Eze',
      residentId: 'chukwuma',
      estate: 'Maitama Sunrise Villas',
      type: 'Estate Doorstep',
      totalWeight: 31.4,
      avoidedCo2: 44.8,
      streams: {
        pet: 9.2,
        hdpe: 4.1,
        cardboard: 12.0,
        metals: 3.5,
        glass: 2.6,
      },
      collector: 'Ibrahim Musa (col-1)',
      notes: 'High cardboard volume from recent move-in.',
      photoUrl: 'scale-maitama-094.jpg',
    },
  ]);

  // Residents catalog
  const residents = {
    fatima: {
      name: 'Fatima Bello',
      estate: 'Guzape Green Valley Estate',
      unit: 'Block C, Unit 4B',
      phone: '+234 802 334 1109',
      status: 'Active Pilot Member',
      divertedKg: 43.5,
      avoidedCo2Kg: 63.2,
      purityScore: '98.2%',
      nextRun: 'Saturday (09:00 - 12:00)',
      breakdown: [
        { label: 'PET Plastics (Bottles)', weight: '12.3 kg', pct: 28, barColor: 'bg-emerald-600' },
        { label: 'HDPE / Rigid Plastics', weight: '6.0 kg', pct: 14, barColor: 'bg-teal-600' },
        { label: 'Cardboard & Paper', weight: '15.5 kg', pct: 36, barColor: 'bg-amber-600' },
        { label: 'Aluminum & Metals', weight: '4.3 kg', pct: 10, barColor: 'bg-blue-600' },
        { label: 'Glass Bottles & Jars', weight: '5.4 kg', pct: 12, barColor: 'bg-indigo-600' },
        { label: 'Compostable / Organics', weight: '0.0 kg', pct: 0, barColor: 'bg-green-700' },
        { label: 'Mixed / Secondary Stream', weight: '0.9 kg', pct: 2, barColor: 'bg-slate-400' },
      ],
    },
    chukwuma: {
      name: 'Chukwuma Eze',
      estate: 'Maitama Sunrise Villas',
      unit: 'Villa 12, Crescent Drive',
      phone: '+234 803 445 9921',
      status: 'Active Pilot Member',
      divertedKg: 58.2,
      avoidedCo2Kg: 82.5,
      purityScore: '96.5%',
      nextRun: 'Friday (14:00 - 17:00)',
      breakdown: [
        { label: 'PET Plastics (Bottles)', weight: '16.5 kg', pct: 28, barColor: 'bg-emerald-600' },
        { label: 'HDPE / Rigid Plastics', weight: '8.2 kg', pct: 14, barColor: 'bg-teal-600' },
        { label: 'Cardboard & Paper', weight: '22.4 kg', pct: 38, barColor: 'bg-amber-600' },
        { label: 'Aluminum & Metals', weight: '5.6 kg', pct: 10, barColor: 'bg-blue-600' },
        { label: 'Glass Bottles & Jars', weight: '4.5 kg', pct: 8, barColor: 'bg-indigo-600' },
        { label: 'Compostable / Organics', weight: '0.0 kg', pct: 0, barColor: 'bg-green-700' },
        { label: 'Mixed / Secondary Stream', weight: '1.0 kg', pct: 2, barColor: 'bg-slate-400' },
      ],
    },
    amina: {
      name: 'Amina Yusuf',
      estate: 'Gwarinpa Phase II Court',
      unit: 'Avenue 4, House 19',
      phone: '+234 809 112 3345',
      status: 'Active Pilot Member',
      divertedKg: 36.1,
      avoidedCo2Kg: 51.4,
      purityScore: '97.8%',
      nextRun: 'Monday (09:00 - 12:00)',
      breakdown: [
        { label: 'PET Plastics (Bottles)', weight: '11.0 kg', pct: 30, barColor: 'bg-emerald-600' },
        { label: 'HDPE / Rigid Plastics', weight: '5.2 kg', pct: 14, barColor: 'bg-teal-600' },
        { label: 'Cardboard & Paper', weight: '12.0 kg', pct: 33, barColor: 'bg-amber-600' },
        { label: 'Aluminum & Metals', weight: '3.8 kg', pct: 11, barColor: 'bg-blue-600' },
        { label: 'Glass Bottles & Jars', weight: '3.5 kg', pct: 10, barColor: 'bg-indigo-600' },
        { label: 'Compostable / Organics', weight: '0.0 kg', pct: 0, barColor: 'bg-green-700' },
        { label: 'Mixed / Secondary Stream', weight: '0.6 kg', pct: 2, barColor: 'bg-slate-400' },
      ],
    },
  };

  const currentResident = residents[activeResidentId];
  const residentRecords = records.filter((r) => r.residentId === activeResidentId);

  // Handle new collector log
  const handleCollectorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const petW = parseFloat(collectorRecord.pet) || 0;
    const hdpeW = parseFloat(collectorRecord.hdpe) || 0;
    const cardW = parseFloat(collectorRecord.cardboard) || 0;
    const metW = parseFloat(collectorRecord.metals) || 0;
    const glaW = parseFloat(collectorRecord.glass) || 0;
    const totalW = +(petW + hdpeW + cardW + metW + glaW).toFixed(1);
    const co2Avoided = +(totalW * 1.45).toFixed(1);

    const newRecord = {
      id: `pk-${Math.floor(110 + Math.random() * 890)}`,
      date: new Date().toISOString().split('T')[0],
      resident: residents[collectorRecord.resident as keyof typeof residents]?.name || 'Fatima Bello',
      residentId: collectorRecord.resident,
      estate: residents[collectorRecord.resident as keyof typeof residents]?.estate || 'Guzape Green Valley Estate',
      type: 'Estate Doorstep',
      totalWeight: totalW,
      avoidedCo2: co2Avoided,
      streams: {
        pet: petW,
        hdpe: hdpeW,
        cardboard: cardW,
        metals: metW,
        glass: glaW,
      },
      collector: 'Ibrahim Musa (col-1)',
      notes: collectorRecord.notes || 'Verified weigh-in via digital Bluetooth hook scale.',
      photoUrl: 'scale-verified.jpg',
    };

    setRecords([newRecord, ...records]);
    setCollectorSubmitted(true);
    setTimeout(() => {
      setCollectorSubmitted(false);
      setActiveResidentId(collectorRecord.resident as keyof typeof residents);
      setActiveTab('household');
    }, 1500);
  };

  // CSV Exporter RFC-4180
  const downloadNesreaCsv = () => {
    const headers = ['Record_ID', 'Date', 'Estate', 'Resident_Name', 'Total_Weight_kg', 'Avoided_CO2e_kg', 'PET_kg', 'HDPE_kg', 'Cardboard_kg', 'Metals_kg', 'Glass_kg', 'Collector_ID', 'Status'];
    const rows = records.map((r) => [
      r.id,
      r.date,
      `"${r.estate}"`,
      `"${r.resident}"`,
      r.totalWeight,
      r.avoidedCo2,
      r.streams.pet,
      r.streams.hdpe,
      r.streams.cardboard,
      r.streams.metals,
      r.streams.glass,
      r.collector,
      'NESREA_VERIFIED',
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NESREA_Solid_Waste_Manifest_Abuja_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`w-full bg-[#0A291E] text-white font-sans ${isEmbedded ? 'rounded-2xl border border-[#1b5e46] shadow-xl overflow-hidden' : 'min-h-screen'}`}>
      {/* Top Bar matching screenshot */}
      <div className="bg-[#051C14] border-b border-[#18523E] px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {onBackToPublic && (
            <button
              onClick={onBackToPublic}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-emerald-200 hover:text-white hover:bg-[#18523E] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Public Site</span>
            </button>
          )}

          <div className="h-4 w-px bg-[#18523E] hidden sm:block" />

          {/* Mode Switchers */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('household')}
              className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'household'
                  ? 'bg-[#18523E] text-white border border-[#276e55]'
                  : 'text-emerald-300/80 hover:text-white hover:bg-[#18523E]/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>1. Household Portal</span>
            </button>

            <button
              onClick={() => setActiveTab('collector')}
              className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'collector'
                  ? 'bg-[#18523E] text-white border border-[#276e55]'
                  : 'text-emerald-300/80 hover:text-white hover:bg-[#18523E]/50'
              }`}
            >
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>2. Collector / Hub Tool</span>
            </button>

            <button
              onClick={() => setActiveTab('admin')}
              className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'admin'
                  ? 'bg-[#18523E] text-white border border-[#276e55]'
                  : 'text-emerald-300/80 hover:text-white hover:bg-[#18523E]/50'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-emerald-300" />
              <span>3. Admin & NESREA Audit</span>
            </button>
          </div>
        </div>

        {/* Active Resident Switcher for Household view */}
        {activeTab === 'household' && (
          <div className="flex items-center gap-2 bg-[#0E3527] px-2.5 py-1 rounded border border-[#1b5e46] text-xs">
            <span className="text-emerald-300/80 hidden sm:inline">Active Resident:</span>
            <select
              value={activeResidentId}
              onChange={(e) => setActiveResidentId(e.target.value as any)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="fatima" className="bg-[#0A291E]">Fatima Bello (Guzape)</option>
              <option value="chukwuma" className="bg-[#0A291E]">Chukwuma Eze (Maitama)</option>
              <option value="amina" className="bg-[#0A291E]">Amina Yusuf (Gwarinpa)</option>
            </select>
            <button
              onClick={() => {}}
              title="Refresh telemetry"
              className="text-emerald-300 hover:text-white p-0.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-6">
        {/* ======================================================== */}
        {/* TAB 1: HOUSEHOLD PORTAL (Matching Uploaded Screenshots) */}
        {/* ======================================================== */}
        {activeTab === 'household' && (
          <div className="space-y-6">
            {/* Header info */}
            <div className="bg-white text-slate-900 rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-1">
                    Resident Impact Portal · Abuja 500 Pilot
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
                    {currentResident.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#0F3D2E]" />
                      {currentResident.estate} · {currentResident.unit}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {currentResident.phone}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {currentResident.status}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setPickupSuccess(false);
                    setPickupModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0F3D2E] hover:bg-[#18523E] text-white text-xs font-bold rounded-lg transition-colors shadow-sm shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Request Pickup / Drop-Off</span>
                </button>
              </div>

              {/* Next Run Card */}
              <div className="mt-5 p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0F3D2E] text-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-emerald-800 tracking-wider block">
                      Upcoming Estate Doorstep Run
                    </span>
                    <div className="text-sm font-bold text-slate-900">
                      Next Collection: {currentResident.nextRun}
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Please leave your color-coded bags of dry, sorted recyclables by your unit service gate. Our collector weighs on-site.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white px-3 py-1.5 rounded-full border border-emerald-200 shrink-0 self-start sm:self-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bag Replenishments Available at Gate</span>
                </div>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
                    <span>Recyclables Diverted</span>
                    <Scale className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">
                    {currentResident.divertedKg} <span className="text-base font-normal text-slate-500">kg</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Across {residentRecords.length} verified gate weigh-ins
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
                    <span>Avoided Carbon (Est.)</span>
                    <Leaf className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-800 font-display">
                    {currentResident.avoidedCo2Kg} <span className="text-base font-normal text-slate-500">kg CO₂e</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Pilot life-cycle factor calculation
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
                    <span>Purity & Quality Score</span>
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">
                    {currentResident.purityScore}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Zero residual contamination reported
                  </span>
                </div>
              </div>
            </div>

            {/* Material Recovery Breakdown (Image 2) */}
            <div className="bg-white text-slate-900 rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Material Recovery Breakdown
                </h3>
                <p className="text-xs text-slate-500">
                  Cumulative weight segregated by your household in the Abuja pilot.
                </p>
              </div>

              <div className="space-y-3.5">
                {currentResident.breakdown.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">{item.label}</span>
                      <span className="font-mono text-slate-600">
                        {item.weight} ({item.pct}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.barColor}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sorting Reminder + Drop Off Hub card (Image 3) */}
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-950/80 border border-[#1b5e46] rounded-xl flex items-center gap-2.5 text-xs text-emerald-200">
                <Info className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Sorting Reminder:</strong> Rinse beverage containers lightly and crush plastic bottles to save bag volume.
                </span>
              </div>

              <div className="p-5 bg-gradient-to-r from-[#0E3527] to-[#124231] border border-[#1b5e46] rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">
                      Drop Off at the Innovation Hub
                    </h4>
                    <p className="text-xs text-emerald-200/90 mt-1 max-w-xl leading-relaxed">
                      Have oversized cardboard, e-waste, or large volume batches? Bring them directly to our Abuja Innovation Hub in Idu Industrial/Jabi for instant staff weigh-in.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#051C14] border border-[#18523E] rounded-lg text-xs font-mono text-emerald-300 shrink-0 self-start sm:self-center">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Hub open Mon–Sat (08:00 - 17:00)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Gate Collection Records (Image 3 & 4) */}
            <div className="bg-white text-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Verified Gate Collection Records
                  </h3>
                  <p className="text-xs text-slate-500">
                    Chronological ledger of weighed pickups with photo proof and collector signatures
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {residentRecords.length} logged
                </span>
              </div>

              <div className="space-y-3">
                {residentRecords.map((r) => (
                  <div
                    key={r.id}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="font-bold text-slate-800">{r.date}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                          {r.id}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-600">{r.type}</span>
                      </div>

                      <div className="text-sm font-bold font-mono text-slate-900">
                        {r.totalWeight} kg <span className="text-xs text-emerald-700">(-{r.avoidedCo2} kg CO₂e)</span>
                      </div>
                    </div>

                    {/* Stream pills */}
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                        PET: {r.streams.pet}kg
                      </span>
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-900">
                        HDPE: {r.streams.hdpe}kg
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                        Cardboard/Paper: {r.streams.cardboard}kg
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                        Metals: {r.streams.metals}kg
                      </span>
                      <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">
                        Glass: {r.streams.glass}kg
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200/60 gap-2">
                      <div className="flex items-center gap-1.5 italic">
                        <span>Logged by: {r.collector}</span>
                        {r.notes && (
                          <>
                            <span>·</span>
                            <span>"{r.notes}"</span>
                          </>
                        )}
                      </div>

                      <button
                        onClick={() => setScalePhotoModal(r.id)}
                        className="inline-flex items-center gap-1 text-[#0F3D2E] hover:text-[#18523E] font-medium text-xs hover:underline"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>View Scale Photo</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: COLLECTOR / HUB TOOL (Field Weigh-In Station)     */}
        {/* ======================================================== */}
        {activeTab === 'collector' && (
          <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-800 block mb-1">
                Field Logistics & Scale Telemetry
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Doorstep & Gate Weigh-In Tool
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Used by Ornament Green field collectors at gated estate checkpoints in Abuja to capture verified weights.
              </p>
            </div>

            {collectorSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900">
                  Gate Weigh-In Recorded Successfully
                </h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Digital manifest signed, scale timestamp logged, and resident metrics updated automatically. Returning to household view...
                </p>
              </div>
            ) : (
              <form onSubmit={handleCollectorSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Household / Unit
                    </label>
                    <select
                      value={collectorRecord.resident}
                      onChange={(e) => setCollectorRecord({ ...collectorRecord, resident: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
                    >
                      <option value="fatima">Fatima Bello — Guzape Green Valley (Block C, Unit 4B)</option>
                      <option value="chukwuma">Chukwuma Eze — Maitama Sunrise Villas (Villa 12)</option>
                      <option value="amina">Amina Yusuf — Gwarinpa Phase II (House 19)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Assigned Collector
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Ibrahim Musa (col-1) · FCT Route A"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-lg text-slate-600"
                    />
                  </div>
                </div>

                {/* Digital Scale Inputs */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase font-mono">
                      Scale Load Cell Telemetry (kg)
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-medium">
                      Bluetooth Scale: Online (Tare: 0.00 kg)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        PET Bottles (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={collectorRecord.pet}
                        onChange={(e) => setCollectorRecord({ ...collectorRecord, pet: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        HDPE / Rigid (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={collectorRecord.hdpe}
                        onChange={(e) => setCollectorRecord({ ...collectorRecord, hdpe: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        Cardboard / Paper (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={collectorRecord.cardboard}
                        onChange={(e) => setCollectorRecord({ ...collectorRecord, cardboard: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        Aluminum & Metals (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={collectorRecord.metals}
                        onChange={(e) => setCollectorRecord({ ...collectorRecord, metals: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        Glass Bottles (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={collectorRecord.glass}
                        onChange={(e) => setCollectorRecord({ ...collectorRecord, glass: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        Compostables (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={collectorRecord.organics}
                        onChange={(e) => setCollectorRecord({ ...collectorRecord, organics: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-mono font-bold"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Purity Check / Visual Inspection
                    </label>
                    <select
                      value={collectorRecord.contaminationRate}
                      onChange={(e) => setCollectorRecord({ ...collectorRecord, contaminationRate: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg"
                    >
                      <option value="99.0">Pass — Grade A (Zero moisture/residue)</option>
                      <option value="98.5">Pass — Grade B (Minor dust, dry)</option>
                      <option value="92.0">Warning — Slight contamination noted</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Collector Observation Note
                    </label>
                    <input
                      type="text"
                      value={collectorRecord.notes}
                      onChange={(e) => setCollectorRecord({ ...collectorRecord, notes: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="text-xs font-mono text-slate-500">
                    Auto-manifest hashing with GPS geofence in Abuja
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0F3D2E] hover:bg-[#18523E] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Confirm & Sign Weigh-In Manifest</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: ADMIN & NESREA AUDIT (Regulatory & Aggregate KPIs) */}
        {/* ======================================================== */}
        {activeTab === 'admin' && (
          <div className="space-y-6">
            {/* Top Aggregate KPIs Banner */}
            <div className="bg-white text-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0F3D2E] block mb-1">
                    Municipal Regulatory Framework
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    Abuja 500-Household Pilot Audit Console
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Data schema aligned with National Environmental Standards and Regulations Enforcement Agency (NESREA).
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCertModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-[#0F3D2E] border border-emerald-200 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Award className="w-3.5 h-3.5 text-emerald-700" />
                    <span>NESREA Audit Certificate</span>
                  </button>
                  <button
                    onClick={downloadNesreaCsv}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0F3D2E] hover:bg-[#18523E] text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Download CSV (RFC-4180)</span>
                  </button>
                </div>
              </div>

              {/* 4 KPIs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium block">
                    Enrolled vs Target
                  </span>
                  <div className="text-2xl font-extrabold text-slate-900 font-display mt-1">
                    142 <span className="text-xs font-normal text-slate-500">/ 500 HH</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#0F3D2E] h-full rounded-full" style={{ width: '28.4%' }} />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">28.4% pilot saturation</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium block">
                    Total Diverted (Pilot)
                  </span>
                  <div className="text-2xl font-extrabold text-emerald-800 font-display mt-1">
                    3,420 <span className="text-xs font-normal text-slate-500">kg</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 mt-2 block">
                    +18% month-on-month
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium block">
                    Diversion Efficiency
                  </span>
                  <div className="text-2xl font-extrabold text-slate-900 font-display mt-1">
                    91.4%
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 block">
                    Zero open dumping for members
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium block">
                    Metric Tonnes CO₂e Avoided
                  </span>
                  <div className="text-2xl font-extrabold text-[#D4AF37] font-display mt-1">
                    4.96 <span className="text-xs font-normal text-slate-500">tCO₂e</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 block">
                    Lifecycle methodology
                  </span>
                </div>
              </div>
            </div>

            {/* Estate Leaderboard */}
            <div className="bg-white text-slate-900 rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 font-display mb-4">
                Abuja Estate Participation & Performance
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 uppercase font-mono border-b border-slate-200">
                    <tr>
                      <th className="p-3">Estate / Gated Cluster</th>
                      <th className="p-3">District</th>
                      <th className="p-3">Households</th>
                      <th className="p-3">Diverted (kg)</th>
                      <th className="p-3">Purity Score</th>
                      <th className="p-3">Collection Day</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Guzape Green Valley Estate</td>
                      <td className="p-3 text-slate-600">Guzape</td>
                      <td className="p-3 font-mono">58</td>
                      <td className="p-3 font-mono font-bold text-emerald-800">1,480 kg</td>
                      <td className="p-3 font-mono text-emerald-700">98.2%</td>
                      <td className="p-3 text-slate-600">Saturday (AM)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Maitama Sunrise Villas</td>
                      <td className="p-3 text-slate-600">Maitama</td>
                      <td className="p-3 font-mono">34</td>
                      <td className="p-3 font-mono font-bold text-emerald-800">920 kg</td>
                      <td className="p-3 font-mono text-emerald-700">96.5%</td>
                      <td className="p-3 text-slate-600">Friday (PM)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Gwarinpa Phase II Court</td>
                      <td className="p-3 text-slate-600">Gwarinpa</td>
                      <td className="p-3 font-mono">32</td>
                      <td className="p-3 font-mono font-bold text-emerald-800">690 kg</td>
                      <td className="p-3 font-mono text-emerald-700">94.8%</td>
                      <td className="p-3 text-slate-600">Monday (AM)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">Wuse II Diplomatic Enclave</td>
                      <td className="p-3 text-slate-600">Wuse II</td>
                      <td className="p-3 font-mono">18</td>
                      <td className="p-3 font-mono font-bold text-emerald-800">330 kg</td>
                      <td className="p-3 font-mono text-emerald-700">97.1%</td>
                      <td className="p-3 text-slate-600">Wednesday (AM)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scale Photo Modal */}
      {scalePhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-white text-slate-900 rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-700" />
                <span className="font-bold text-sm">Gate Scale Proof · {scalePhotoModal}</span>
              </div>
              <button
                onClick={() => setScalePhotoModal(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="py-4 space-y-3">
              <div className="h-48 bg-slate-800 rounded-lg flex flex-col items-center justify-center text-white text-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]" />
                <Scale className="w-10 h-10 text-[#D4AF37] mb-2 z-10" />
                <span className="font-mono text-xl font-bold text-emerald-400 z-10">23.90 kg TARE</span>
                <span className="text-xs text-slate-300 mt-1 z-10">Abuja Gate Scale Checkpoint #1</span>
                <span className="text-[10px] font-mono text-slate-400 z-10 mt-2">Geotag: 9.0765° N, 7.3986° E (Guzape)</span>
              </div>
              <p className="text-xs text-slate-500">
                Photo captured via Ornament Green mobile telemetry at time of gate scale weigh-in. Digital hash verified.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setScalePhotoModal(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded"
              >
                Close Proof
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pickup Request Modal */}
      {pickupModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-white text-slate-900 rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Request Extra Pickup or Bin Bags
              </h3>
              <button
                onClick={() => setPickupModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {pickupSuccess ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <div className="text-base font-bold text-slate-900">Request Sent to Field Dispatch</div>
                <p className="text-xs text-slate-500">
                  Our route manager for {currentResident.estate} has been notified. We will confirm via WhatsApp shortly.
                </p>
                <button
                  onClick={() => setPickupModalOpen(false)}
                  className="mt-4 px-4 py-2 bg-[#0F3D2E] text-white text-xs font-semibold rounded"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPickupSuccess(true);
                }}
                className="py-4 space-y-3 text-xs"
              >
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Request Type
                  </label>
                  <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded">
                    <option>On-demand collection for bulk cardboard/plastics</option>
                    <option>Replenish color-coded sorting bags</option>
                    <option>Report missed or delayed doorstep run</option>
                    <option>Schedule direct drop-off at Abuja Innovation Hub</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Notes / Preferred Time
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 3 bundles of flattened cardboard by the generator house"
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded"
                  />
                </div>
                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setPickupModalOpen(false)}
                    className="px-3 py-1.5 border border-slate-300 rounded text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#0F3D2E] text-white font-bold rounded"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Official NESREA Certificate Modal */}
      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-white text-slate-900 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-[#0F3D2E]">
            <div className="text-center space-y-2 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 rounded-full bg-[#0F3D2E] text-white flex items-center justify-center mx-auto shadow-md">
                <Logo size={32} lightBackground={false} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#0F3D2E] font-bold">
                FEDERAL REPUBLIC OF NIGERIA · FCT SOLID WASTE DIRECTIVE
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                NESREA-Aligned Waste Audit Certificate
              </h3>
              <p className="text-[11px] text-slate-500 font-mono">
                Certificate Ref: OG-NESREA-FCT-2026-0042
              </p>
            </div>

            <div className="py-4 space-y-3 text-xs leading-relaxed text-slate-700">
              <p>
                This certifies that the <strong>Ornament Green Abuja Pilot</strong> has achieved verifiable landfill diversion across participating residential gated estates in the Federal Capital Territory for the reporting cycle:
              </p>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 font-mono space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">Verified Recyclables Diverted:</span>
                  <span className="font-bold text-slate-900">3,420.00 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Avoided Greenhouse Gases:</span>
                  <span className="font-bold text-emerald-700">4.96 metric tonnes CO₂e</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Audit Compliance Standard:</span>
                  <span className="font-bold text-slate-900">NESREA S.I. No. 27 & 28 / FCTA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lead Audit Sign-off:</span>
                  <span className="font-bold text-slate-900">Akinyemi Peter Oluwafemi (Founder)</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 italic">
                Issued for circular utility governance and ESG validation purposes. All weigh-in data backed by digital load-cell telemetry manifests.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={downloadNesreaCsv}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0F3D2E] text-white rounded text-xs font-semibold"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Export Audit CSV</span>
              </button>
              <button
                onClick={() => setCertModalOpen(false)}
                className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
