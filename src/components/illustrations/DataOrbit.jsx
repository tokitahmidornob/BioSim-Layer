import React from 'react';
import { Database, ShieldCheck } from 'lucide-react';

export default function DataOrbit({ className = "" }) {
  const sources = [
    { name: 'ChEMBL', detail: 'CC BY-SA 3.0 / Bioactivity & ADMET' },
    { name: 'Tox21', detail: 'Public Domain / Quantitative Toxicology' },
    { name: 'TDC Benchmarks', detail: 'Therapeutics Data Commons' },
    { name: 'PK-DB', detail: 'Pharmacokinetic Trial Curves' },
    { name: 'Open Systems Pharmacology', detail: 'GPLv2 Reference PBPK Models' },
    { name: 'PDB', detail: 'Protein Data Bank 3D Crystallography' }
  ];

  return (
    <div className={`w-full max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/80 border border-slate-200/90 shadow-sm ${className}`}>
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0E7490]">
          Data Foundations
        </span>
        <h4 className="text-xl font-bold text-[#0B1F3A] mt-1">
          Curated Public Scientific Repositories
        </h4>
        <p className="text-xs text-[#64748B] mt-2">
          Public scientific data we are building on. Dataset audit in progress.
        </p>
      </div>

      {/* Visual Orbit Representation */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 p-4">
        {/* Core Engine Node */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-[#0E7490] text-center shadow-md relative z-10 w-full md:w-64 shrink-0">
          <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-[#0E7490] flex items-center justify-center text-[#0E7490] mb-3 shadow-sm">
            <Database className="w-6 h-6" />
          </div>
          <div className="font-bold text-base text-[#0B1F3A]">BioSimLayer Core</div>
          <div className="text-[11px] font-mono text-[#0E7490] mt-1 font-semibold">
            Standardised Ingestion Pipeline
          </div>
          <div className="mt-3 pt-3 border-t border-cyan-200/60 flex items-center justify-center gap-1.5 text-[10px] text-[#334155] font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
            Lineage & Provenance Logged
          </div>
        </div>

        {/* Orbiting Text Chips (Strictly Text, Not Logos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 w-full">
          {sources.map((src, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#0E7490] transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold text-[#0B1F3A]">
                  {src.name}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                  Public Resource
                </span>
              </div>
              <div className="text-[11px] text-[#64748B]">
                {src.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-3 rounded-lg bg-slate-50 border border-slate-200 text-center text-xs text-[#64748B]">
        Data foundation: dataset audit in progress. Counts and endpoint coverage published following completion of the Stage 1 audit.
      </div>
    </div>
  );
}
