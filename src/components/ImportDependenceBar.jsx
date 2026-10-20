import React from 'react';
import SourceNote from './SourceNote';

export default function ImportDependenceBar({ className = "" }) {
  return (
    <div className={`p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
            Supply Chain Vulnerability
          </span>
          <h4 className="text-base font-bold text-[#0B1F3A]">
            Bangladesh API Import Dependence
          </h4>
        </div>
        <span className="px-2 py-0.5 text-xs font-mono rounded bg-orange-50 text-orange-800 border border-orange-200">
          ~90% Imported
        </span>
      </div>

      <p className="text-xs text-[#64748B] mb-4">
        Roughly US$1.2–1.3B in active pharmaceutical ingredients imported annually. Only a handful of the 27 plots allotted at Munshiganj Active Pharmaceutical Ingredient (API) Industrial Park are currently operational.
      </p>

      {/* Segmented Bar Visual (Static Proportion, Draw-in via width) */}
      <div className="space-y-2">
        <div className="h-6 w-full bg-slate-100 rounded-lg overflow-hidden flex border border-slate-200 p-0.5">
          {/* Imported 90% */}
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-rose-500 rounded-l-md flex items-center justify-center text-[10px] font-mono text-white font-bold tracking-wider"
            style={{ width: '90%' }}
          >
            ~90% IMPORTED (US$1.2–1.3B / yr)
          </div>
          {/* Domestic 10% */}
          <div
            className="h-full bg-emerald-500 rounded-r-md flex items-center justify-center text-[10px] font-mono text-white font-bold"
            style={{ width: '10%' }}
          >
            ~10%
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#334155] font-mono pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span>Imported active ingredients</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Domestic synthesis</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B]">
        <SourceNote sourceName="BIDA & Bangladesh Directorate General of Drug Administration (DGDA)" />
        <span className="text-[11px] font-mono text-slate-400">Munshiganj Industrial Park</span>
      </div>
    </div>
  );
}
