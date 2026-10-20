import React, { useState } from 'react';
import { Play, FileText, CheckCircle2, RotateCw, Sparkles, Sliders, Dna, Database } from 'lucide-react';
import { BENCHMARK_PRESETS } from '../data/benchmarkMolecules';

export default function TopCommandBar({
  activeMolecule,
  onSelectPreset,
  smilesInput,
  setSmilesInput,
  doseMg,
  setDoseMg,
  route,
  setRoute,
  regimen,
  setRegimen,
  cohort,
  setCohort,
  onRunSimulation,
  isSimulating,
  simProgressStage,
  onOpenAuditReport
}) {
  const [showAdvancedDosing, setShowAdvancedDosing] = useState(false);

  return (
    <div className="space-y-3">
      {/* 3 One-Click Benchmark Preset Pills */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-[#0E1525] border border-[#1E293B]">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold text-slate-300">Benchmark Reference Molecules:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {BENCHMARK_PRESETS.map((preset) => {
            const isSelected = activeMolecule.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => onSelectPreset(preset)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'bg-[#131C31] text-slate-400 border border-[#1E293B] hover:text-slate-200 hover:border-slate-600'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                <span>{preset.name}</span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">[{preset.category}]</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Command Bar: SMILES Input + Action Controls */}
      <div className="p-3.5 rounded-lg bg-[#0E1525] border border-[#1E293B] shadow-lg space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          {/* SMILES Box (Col 7) */}
          <div className="lg:col-span-7 space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5 text-cyan-400" />
                <span>Input SMILES Representation</span>
              </span>
              <div className="flex items-center gap-3">
                <span className="text-cyan-300">Formula: <strong>{activeMolecule.formula}</strong></span>
                <span className="text-slate-300">MW: <strong>{activeMolecule.mw} g/mol</strong></span>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={smilesInput}
                onChange={(e) => setSmilesInput(e.target.value)}
                placeholder="Enter valid SMILES string or choose preset above..."
                className="w-full bg-[#090E1A] border border-[#1E293B] focus:border-cyan-500 rounded-md py-2 px-3 text-xs font-mono text-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 shadow-inner"
              />
              <div className="absolute right-2.5 top-2 text-[10px] font-mono text-slate-400 hidden sm:block">
                InChIKey: {activeMolecule.inchikey.slice(0, 14)}...
              </div>
            </div>
          </div>

          {/* Dosing & Action Buttons (Col 5) */}
          <div className="lg:col-span-5 flex flex-wrap items-center justify-end gap-2.5">
            {/* Quick Dose Input */}
            <div className="flex items-center bg-[#090E1A] border border-[#1E293B] rounded-md px-2.5 py-1.5 text-xs font-mono">
              <span className="text-slate-400 mr-2">Dose:</span>
              <input
                type="number"
                min="0.1"
                step="0.5"
                value={doseMg}
                onChange={(e) => setDoseMg(e.target.value)}
                className="w-16 bg-transparent text-slate-200 font-bold focus:outline-none text-right"
              />
              <span className="text-slate-400 ml-1">mg</span>
            </div>

            {/* Advanced Controls Toggle */}
            <button
              onClick={() => setShowAdvancedDosing(!showAdvancedDosing)}
              className={`p-2 rounded-md border text-xs transition-all ${
                showAdvancedDosing
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                  : 'bg-[#131C31] text-slate-400 border-[#1E293B] hover:text-slate-200'
              }`}
              title="Toggle Dosing & Cohort Controls"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Primary Action Button: Run 4-Layer Biosimulation */}
            <button
              onClick={onRunSimulation}
              disabled={isSimulating}
              className="px-4 py-2 rounded-md text-xs font-bold btn-cyan flex items-center gap-2 disabled:opacity-50"
            >
              {isSimulating ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin text-black" />
                  <span>Computing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Run 4-Layer Biosimulation</span>
                </>
              )}
            </button>

            {/* Export Audit Report Button */}
            <button
              onClick={onOpenAuditReport}
              className="px-3 py-2 rounded-md text-xs font-medium btn-secondary flex items-center gap-1.5"
              title="Export 1-Page FDA NAMs Context-of-Use Decision Report"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Export Audit Report</span>
            </button>
          </div>
        </div>

        {/* Expandable Dosing & Population Stratification Selectors */}
        {showAdvancedDosing && (
          <div className="pt-3 border-t border-[#1E293B] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div>
              <label className="block text-slate-400 mb-1">Administration Route:</label>
              <select
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                className="w-full bg-[#090E1A] border border-[#1E293B] text-slate-200 rounded p-1.5 focus:border-cyan-500 focus:outline-none"
              >
                <option value="Oral IR">Oral Immediate Release (IR)</option>
                <option value="Oral Modified-Release">Oral Modified-Release (MR)</option>
                <option value="IV Bolus">Intravenous (IV Bolus)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Dosing Regimen:</label>
              <select
                value={regimen}
                onChange={(e) => setRegimen(e.target.value)}
                className="w-full bg-[#090E1A] border border-[#1E293B] text-slate-200 rounded p-1.5 focus:border-cyan-500 focus:outline-none"
              >
                <option value="Single Dose 24h">Single Dose 24h Profile</option>
                <option value="Repeat Daily Dosing 14d">Repeat Daily Dosing 14d (Mitochondrial Accumulation)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Population Cohort:</label>
              <select
                value={cohort}
                onChange={(e) => setCohort(e.target.value)}
                className="w-full bg-[#090E1A] border border-[#1E293B] text-slate-200 rounded p-1.5 focus:border-cyan-500 focus:outline-none"
              >
                <option value="BEB">South Asian 1000G Bengali [BEB] - 60kg</option>
                <option value="EUR">Western European [EUR] - 73kg</option>
                <option value="both">Overlay Both (BEB vs EUR)</option>
              </select>
            </div>
          </div>
        )}

        {/* 1.2-Second Multi-Stage Progress Sequence Animation */}
        {isSimulating && (
          <div className="p-3 rounded bg-[#090E1A] border border-cyan-500/40 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-400 flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 animate-spin" />
                <span>Executing 4-Layer Pipeline Sequence...</span>
              </span>
              <span className="text-slate-400">Step {simProgressStage} of 4</span>
            </div>

            {/* 4-Step Progress Blocks */}
            <div className="grid grid-cols-4 gap-2 text-[10px] font-mono">
              <div className={`p-1.5 rounded text-center border ${simProgressStage >= 1 ? 'bg-cyan-950 text-cyan-300 border-cyan-600' : 'bg-slate-900 text-slate-500 border-slate-800'}`}>
                Layer 1: Provenance & Tanimoto Check
              </div>
              <div className={`p-1.5 rounded text-center border ${simProgressStage >= 2 ? 'bg-cyan-950 text-cyan-300 border-cyan-600' : 'bg-slate-900 text-slate-500 border-slate-800'}`}>
                Layer 2: BioFold ADMET GNN
              </div>
              <div className={`p-1.5 rounded text-center border ${simProgressStage >= 3 ? 'bg-cyan-950 text-cyan-300 border-cyan-600' : 'bg-slate-900 text-slate-500 border-slate-800'}`}>
                Layer 3: PBPK & BEB Monte Carlo (n=1,000)
              </div>
              <div className={`p-1.5 rounded text-center border ${simProgressStage >= 4 ? 'bg-emerald-950 text-emerald-300 border-emerald-600' : 'bg-slate-900 text-slate-500 border-slate-800'}`}>
                Layer 4: Evidence Dossier Ready
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
