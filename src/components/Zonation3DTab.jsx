import React, { useState } from 'react';
import { AlertTriangle, Compass, ShieldAlert, Cpu, Sparkles, Box, Info } from 'lucide-react';
import ProteinViewer3D from './ProteinViewer3D';

export default function Zonation3DTab({ molecule }) {
  const [selectedZone, setSelectedZone] = useState('zone3');

  if (!molecule) return null;

  const isFiau = molecule.id === 'fialuridine';
  const isDigoxin = molecule.id === 'digoxin';

  return (
    <div className="space-y-5">
      {/* Explicit R&D Banner Badge */}
      <div className="p-3.5 rounded-lg bg-amber-950/30 border border-amber-600/40 flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 rounded bg-amber-500/20 text-amber-400">
            <AlertTriangle className="w-4 h-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                🟠 R&D MECHANISTIC MODULE — Spatial Porous-Media PDE & 3D Pocket Inspection
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-900/60 text-amber-200 border border-amber-700/50">
                Unvalidated / Illustrative
              </span>
            </div>
            <p className="text-xs text-amber-200/80 mt-0.5">
              Continuum 1D advection-dispersion-reaction model along the hepatic lobule sinusoidal axis (x ∈ [0, L]).
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Status: <strong className="text-amber-400">Porous-Media PDE Mesh v1.2</strong>
        </div>
      </div>

      {/* Main Grid: Left Zonation & Right 3D Protein Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left 6-Cols: Hepatic Lobule Zonation Diagram & GSH Depletion */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B]">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1E293B]">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-semibold text-slate-100">
                  Hepatic Lobule Zonation (Portal-to-Central Axis)
                </h4>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                isFiau ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
              }`}>
                {molecule.zonation.status}
              </span>
            </div>

            {/* Visual Sinusoid Axis Diagram */}
            <div className="p-3 rounded bg-[#090E1A] border border-[#1E293B] relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono mb-2 text-slate-400">
                <span className="text-emerald-400 font-semibold">Portal Triad (x = 0)</span>
                <span className="text-slate-500">→ Blood Flow Gradient →</span>
                <span className="text-rose-400 font-semibold">Central Vein (x = L)</span>
              </div>

              {/* Gradient Sinusoid Bar */}
              <div className="w-full h-8 rounded bg-gradient-to-r from-emerald-600/40 via-amber-600/40 to-rose-600/40 border border-[#1E293B] relative flex items-center justify-between px-3 text-[10px] font-mono font-bold text-slate-200">
                <button
                  onClick={() => setSelectedZone('zone1')}
                  className={`px-2 py-0.5 rounded transition-all ${selectedZone === 'zone1' ? 'bg-emerald-500 text-black shadow-md' : 'hover:bg-white/20'}`}
                >
                  Zone 1 (Periportal)
                </button>
                <button
                  onClick={() => setSelectedZone('zone2')}
                  className={`px-2 py-0.5 rounded transition-all ${selectedZone === 'zone2' ? 'bg-amber-500 text-black shadow-md' : 'hover:bg-white/20'}`}
                >
                  Zone 2 (Midzonal)
                </button>
                <button
                  onClick={() => setSelectedZone('zone3')}
                  className={`px-2 py-0.5 rounded transition-all ${selectedZone === 'zone3' ? 'bg-rose-500 text-black shadow-md' : 'hover:bg-white/20'}`}
                >
                  Zone 3 (Centrilobular)
                </button>
              </div>

              {/* Zone Physiological Details Card */}
              <div className="mt-3 p-2.5 rounded bg-[#131C31] border border-[#1E293B] text-xs">
                {selectedZone === 'zone1' && (
                  <div>
                    <div className="flex items-center justify-between text-emerald-400 font-mono font-semibold mb-1">
                      <span>Periportal Zone 1 (High pO₂ ~65 mmHg)</span>
                      <span>GSH Detox: {molecule.zonation.zone1_gsh}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Dominant beta-oxidation, gluconeogenesis, and robust glutathione S-transferase (GST) anti-oxidant reserve. Minimally vulnerable to oxidative stress.
                    </p>
                  </div>
                )}
                {selectedZone === 'zone2' && (
                  <div>
                    <div className="flex items-center justify-between text-amber-400 font-mono font-semibold mb-1">
                      <span>Midzonal Zone 2 (Intermediate pO₂ ~45 mmHg)</span>
                      <span>GSH Detox: {molecule.zonation.zone2_gsh}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Intermediate metabolic transition zone. Homeostatic baseline maintained under single or low-dose exposure.
                    </p>
                  </div>
                )}
                {selectedZone === 'zone3' && (
                  <div>
                    <div className="flex items-center justify-between text-rose-400 font-mono font-semibold mb-1">
                      <span>Centrilobular Zone 3 (Low pO₂ ~30 mmHg, High CYP3A4/2E1)</span>
                      <span>GSH Detox: {molecule.zonation.zone3_gsh}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Highest concentration of Cytochrome P450 enzymes (1.6x expression) and lowest oxygen tension. High risk for bioactivation, reactive oxygen species (ROS), and toxic metabolite trapping.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Porous Media Lobule PDE Telemetry */}
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
                <p className="text-slate-400 text-[10px]">Sinusoidal Necrosis Risk</p>
                <p className={`text-base font-bold mt-0.5 ${isFiau ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {molecule.zonation.necrosis_risk}
                </p>
              </div>

              <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
                <p className="text-slate-400 text-[10px]">Mitochondrial Toxicity Signal</p>
                <p className={`text-xs font-semibold mt-1 truncate ${isFiau ? 'text-rose-400' : 'text-slate-300'}`}>
                  {isFiau ? 'mtDNA Pol-γ Poisoning' : 'No Signal'}
                </p>
              </div>
            </div>

            {/* Case Study Callout */}
            <div className={`mt-3 p-3 rounded text-xs border ${
              isFiau 
                ? 'bg-rose-950/40 border-rose-600/50 text-rose-200' 
                : 'bg-slate-900 border-[#1E293B] text-slate-300'
            }`}>
              <div className="flex items-center gap-1.5 font-semibold mb-1">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mechanistic Explanation:</span>
              </div>
              <p className="leading-relaxed font-mono text-[11px]">
                {molecule.zonation.mitochondrial_tox}
              </p>
            </div>
          </div>
        </div>

        {/* Right 6-Cols: Interactive WebGL 3D Target Viewer */}
        <div className="lg:col-span-6">
          <ProteinViewer3D pdbId={molecule.pdbId} title={molecule.pdbTitle} />
        </div>
      </div>
    </div>
  );
}
