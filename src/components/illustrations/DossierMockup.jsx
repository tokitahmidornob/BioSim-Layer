import React from 'react';
import { FileCheck, Shield, GitCommit, Layers } from 'lucide-react';

export default function DossierMockup({ className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-200/90 bg-white shadow-md overflow-hidden ${className}`}>
      {/* Mockup Window Header Bar */}
      <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="text-[11px] font-mono text-slate-500 ml-2">
            BioSimLayer_Decision_Dossier.pdf
          </span>
        </div>
        <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-slate-200/70 text-slate-700">
          Illustrative layout
        </span>
      </div>

      {/* Dossier Document Content Canvas */}
      <div className="p-5 sm:p-6 space-y-4 text-left">
        {/* Document Title Header */}
        <div className="border-b border-slate-100 pb-3 flex items-start justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#0E7490] font-bold uppercase">
              Regulatory Decision Support Record
            </div>
            <div className="text-sm font-bold text-[#0B1F3A]">
              Compound Prioritisation & Safety Dossier
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <FileCheck className="w-3.5 h-3.5" />
            Signed & Locked
          </div>
        </div>

        {/* Section 1: Context of Use Table */}
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 space-y-2">
          <div className="text-[11px] font-bold text-[#334155] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#0E7490]" />
            1. Context of Use (COU) Specification
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-slate-200 rounded w-full" />
            <div className="h-2 bg-slate-200 rounded w-4/5" />
          </div>
        </div>

        {/* Section 2: Applicability Domain Evaluation */}
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 space-y-2">
          <div className="text-[11px] font-bold text-[#334155] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            2. Applicability Domain & Chemical Space
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-mono text-[#334155] font-semibold">
              In-Domain Verification Passed
            </span>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded w-11/12" />
            <div className="h-2 bg-slate-200 rounded w-2/3" />
          </div>
        </div>

        {/* Section 3: Ranked Next Experiments */}
        <div className="p-3 rounded-lg bg-cyan-50/40 border border-cyan-200/60 space-y-2">
          <div className="text-[11px] font-bold text-[#0E7490] flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-[#0E7490]" />
            3. Prioritised Physical Assays (Next Steps)
          </div>
          <div className="space-y-1 text-[10px] font-mono text-[#334155]">
            <div className="flex items-center justify-between p-1 rounded bg-white border border-slate-200">
              <span>01. Permeability Caco-2 Assay</span>
              <span className="text-[#0E7490] font-bold">Priority Rank #1</span>
            </div>
            <div className="flex items-center justify-between p-1 rounded bg-white border border-slate-200">
              <span>02. Microsomal Stability (CYP3A4)</span>
              <span className="text-slate-500">Priority Rank #2</span>
            </div>
          </div>
        </div>

        {/* Section 4: Audit Trail and Model Version */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[9px] font-mono text-slate-400">
          <div className="flex items-center gap-1">
            <GitCommit className="w-3 h-3 text-slate-400" />
            <span>Model Hash: bsl_core_v0.2.1-ref</span>
          </div>
          <span>Lineage & Parameters Archived</span>
        </div>
      </div>
    </div>
  );
}
