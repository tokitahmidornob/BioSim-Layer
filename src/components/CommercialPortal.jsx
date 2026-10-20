import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Layers, 
  CheckCircle2, 
  Building2, 
  Cpu, 
  TrendingUp, 
  Sparkles, 
  Lock, 
  Play, 
  Award, 
  DollarSign,
  AlertTriangle,
  Beaker,
  ChevronRight
} from 'lucide-react';
import { TRIPS_SCENARIOS, COMMERCIAL_PHASES, ROADMAP_STAGES } from '../data/commercialRoadmap';

export default function CommercialPortal({ onSwitchToConsole }) {
  const [activeScenario, setActiveScenario] = useState('scenario_a');
  const [activeStage, setActiveStage] = useState('stage_00');

  const currentScenario = TRIPS_SCENARIOS.find(s => s.id === activeScenario);

  return (
    <div className="space-y-16 py-6 pb-20">
      {/* 1. Hero Section */}
      <section className="relative text-center max-w-5xl mx-auto space-y-6 pt-6">
        {/* Glowing Ambient Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Stage 00 Commercial & Scientific Showcase • Oct 24 & Oct 27 Presentation</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
          A World Where No Human Has to Be the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            First Test Subject.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Dhaka’s first mechanistic computational pharmacology, PBPK, and QST decision-support platform.
          Bridging Bangladesh’s <strong className="text-cyan-300">$1.3B API import gap</strong> and de-risking complex generic formulation under WTO TRIPS timelines.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onSwitchToConsole}
            className="px-6 py-3 rounded-lg text-sm font-bold btn-cyan flex items-center gap-2.5 shadow-xl"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>Launch Live BioSimLayer R&D Console</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#roadmap-section"
            className="px-5 py-3 rounded-lg text-sm font-medium btn-secondary flex items-center gap-2"
          >
            <span>Explore 6-Stage Evidence Roadmap</span>
          </a>
        </div>

        {/* 4-Layer Engine Pill Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 text-left">
          <div className="p-3.5 rounded-lg bg-[#0E1525]/80 border border-[#1E293B] backdrop-blur-md">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block mb-1">Layer 01</span>
            <h4 className="text-xs font-bold text-slate-100 mb-0.5">Lineage & Tanimoto Domain</h4>
            <p className="text-[11px] text-slate-400 font-mono">90K+ ADMET rows | ChEMBL 37</p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0E1525]/80 border border-[#1E293B] backdrop-blur-md">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block mb-1">Layer 02</span>
            <h4 className="text-xs font-bold text-slate-100 mb-0.5">BioFold Multi-Task GNN</h4>
            <p className="text-[11px] text-slate-400 font-mono">Transporters & ICH M7 Dual-QSAR</p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0E1525]/80 border border-[#1E293B] backdrop-blur-md">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block mb-1">Layer 03</span>
            <h4 className="text-xs font-bold text-slate-100 mb-0.5">Mechanistic PBPK & BEB</h4>
            <p className="text-[11px] text-slate-400 font-mono">Bengali 1000G Monte Carlo (n=1000)</p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0E1525]/80 border border-[#1E293B] backdrop-blur-md">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block mb-1">Layer 04</span>
            <h4 className="text-xs font-bold text-slate-100 mb-0.5">Audit-Ready COU Dossier</h4>
            <p className="text-[11px] text-slate-400 font-mono">FDA NAMs & ICH M15 Sign-off</p>
          </div>
        </div>
      </section>

      {/* 2. Bangladesh Pharmaceutical Inflection Point Banner */}
      <section className="p-6 rounded-xl bg-gradient-to-r from-[#0E1525] via-[#131C31] to-[#0E1525] border border-[#1E293B] max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-full bg-cyan-500/5 blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                Strategic National Context: Munshiganj API Industrial Park
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-100">
              The $1.3B Active Pharmaceutical Ingredient (API) Import Dilemma
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bangladesh manufactures 98% of domestic finished formulations, yet imports over 85% of active raw materials. 
              As the country approaches WTO TRIPS patent waiver expiration, manufacturers at the new Munshiganj API Park must independently synthesize complex APIs, de-risk ICH M7 mutagenic impurities, and establish bioequivalence without multi-million-dollar wet-lab assay delays.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-3 text-center font-mono">
            <div className="p-3 rounded bg-[#090E1A] border border-[#1E293B]">
              <span className="text-xl font-bold text-cyan-400">$1.3B</span>
              <p className="text-[10px] text-slate-400 mt-0.5">Annual API Import Bill</p>
            </div>
            <div className="p-3 rounded bg-[#090E1A] border border-[#1E293B]">
              <span className="text-xl font-bold text-emerald-400">≤ 72h</span>
              <p className="text-[10px] text-slate-400 mt-0.5">In Silico Triage Turnaround</p>
            </div>
            <div className="p-3 rounded bg-[#090E1A] border border-[#1E293B]">
              <span className="text-xl font-bold text-indigo-400">80%</span>
              <p className="text-[10px] text-slate-400 mt-0.5">Avoided Assay OpEx</p>
            </div>
            <div className="p-3 rounded bg-[#090E1A] border border-[#1E293B]">
              <span className="text-xl font-bold text-amber-400">60 kg</span>
              <p className="text-[10px] text-slate-400 mt-0.5">ICRP-89 Bengali Cohort</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Gated Commercial Engine: Validate -> Serve -> Subscribe */}
      <section className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Commercial Business Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            The Gated Commercial Engine: "Validate → Serve → Subscribe"
          </h2>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto">
            A zero-friction, credibility-first enterprise go-to-market. Software subscriptions are unlocked strictly after customer trust is earned via paid pilot triage studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COMMERCIAL_PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              className="p-5 rounded-xl bg-[#0E1525] border border-[#1E293B] hover:border-slate-600 transition-all shadow-lg flex flex-col justify-between space-y-4 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">{phase.phase}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {phase.timeline}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-bold text-slate-100 tracking-wide">{phase.name}</h3>
                  <span className="text-xs font-mono font-semibold" style={{ color: phase.accentColor }}>
                    [{phase.leadMetric}]
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {phase.description}
                </p>

                <div className="p-2.5 rounded bg-[#090E1A] border border-[#1E293B] text-[11px] space-y-1">
                  <strong className="text-slate-300 font-mono block">Deliverable:</strong>
                  <p className="text-slate-400 font-sans leading-relaxed">{phase.deliverable}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1E293B] text-[11px] font-mono text-slate-400 space-y-1">
                <span className="text-slate-300 block font-semibold">Strategic Commercial Goal:</span>
                <p className="text-slate-400 font-sans">{phase.commercialGoal}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive 6-Stage Evidence-Gated Roadmap & WTO TRIPS Scenarios */}
      <section id="roadmap-section" className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Strategic Execution Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Interactive 6-Stage Evidence-Gated Roadmap
          </h2>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto">
            Progress is strictly unlocked upon achieving pre-registered empirical gates. Accommodates all WTO TRIPS policy clock scenarios without changing technical milestones.
          </p>
        </div>

        {/* WTO TRIPS Scenario Clock Band */}
        <div className="p-4 rounded-xl bg-[#0E1525] border border-[#1E293B] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-slate-200">
                WTO TRIPS Scenario Clock Band ("Same 6-Stage Sequence, Different Clock Speed")
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">Select active national policy scenario:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {TRIPS_SCENARIOS.map((scenario) => {
              const isSelected = activeScenario === scenario.id;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenario(scenario.id)}
                  className={`p-3 rounded-lg text-left transition-all border ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-500 text-slate-100 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-[#131C31] border-[#1E293B] text-slate-400 hover:text-slate-200 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono text-cyan-300">{scenario.code}</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${scenario.badgeColor}`}>
                      {scenario.urgency}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-200 mb-0.5">{scenario.title}</h5>
                  <p className="text-[11px] text-slate-400 font-mono mb-2">{scenario.subtitle}</p>
                  <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans">{scenario.description}</p>
                </button>
              );
            })}
          </div>

          <div className="p-2.5 rounded bg-[#090E1A] border border-[#1E293B] text-xs font-mono flex items-center justify-between">
            <span className="text-cyan-400">Impact on BioSimLayer Strategy:</span>
            <span className="text-slate-300 font-sans text-[11.5px]">{currentScenario.impact}</span>
          </div>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ROADMAP_STAGES.map((stg) => {
            const isSelected = activeStage === stg.stageId;
            return (
              <div
                key={stg.stageId}
                onClick={() => setActiveStage(stg.stageId)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-[#131C31] border-cyan-500/70 shadow-lg'
                    : 'bg-[#0E1525] border-[#1E293B] hover:border-slate-600'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400">STAGE {stg.number}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${stg.statusClass}`}>
                      {stg.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100">{stg.title}</h4>

                  {/* Go/No-Go Gate Box */}
                  <div className="p-2 rounded bg-[#090E1A] border border-[#1E293B] text-[10.5px] font-mono space-y-0.5">
                    <span className="text-amber-400 font-semibold block">Exit Gate:</span>
                    <p className="text-slate-300 leading-snug">{stg.gate}</p>
                  </div>

                  {/* Customer Deliverable */}
                  <div className="text-[11px] text-slate-400 space-y-0.5">
                    <span className="text-slate-300 font-mono font-semibold block text-[10px] uppercase">
                      What Customers Get:
                    </span>
                    <p className="leading-snug">{stg.deliverable}</p>
                  </div>
                </div>

                {/* Staged Funding & Revenue Targets Strip */}
                <div className="pt-2 border-t border-[#1E293B] grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="p-1.5 rounded bg-[#090E1A] border border-[#1E293B]">
                    <span className="text-slate-400 block text-[9px]">Funding Ceiling:</span>
                    <strong className="text-cyan-300 text-[11px]">{stg.fundingCeiling}</strong>
                  </div>
                  <div className="p-1.5 rounded bg-[#090E1A] border border-[#1E293B]">
                    <span className="text-slate-400 block text-[9px]">Revenue Target:</span>
                    <strong className="text-emerald-400 text-[11px]">
                      {stg.revenue.planning} <span className="text-[9px] text-slate-400">({stg.revenue.stretch})</span>
                    </strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Presentation Action Banner */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-600/40 text-center space-y-3">
          <h3 className="text-lg font-bold text-slate-100">
            Ready to inspect the live engine with 3 benchmark reference molecules?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Experience our Stage 00 live simulation workbench with Midazolam, Digoxin, and FIAU, including full 3D receptor rendering and Bengali cohort stratification.
          </p>
          <button
            onClick={onSwitchToConsole}
            className="px-6 py-2.5 rounded-lg text-xs font-bold btn-cyan inline-flex items-center gap-2 shadow-lg"
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span>Launch Stage 00 Live Console</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
