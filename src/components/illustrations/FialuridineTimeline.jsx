import React from 'react';
import { AlertOctagon, CheckCircle2 } from 'lucide-react';

export default function FialuridineTimeline({ className = "" }) {
  return (
    <div className={`w-full max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0E7490]">
            Historical Case Study (1993)
          </span>
          <h4 className="text-lg font-bold text-[#0B1F3A]">
            The Fialuridine (FIAU) Preclinical Blindspot
          </h4>
        </div>
        <span className="px-2.5 py-1 text-xs font-mono rounded bg-orange-50 text-orange-700 border border-orange-200">
          Schematic Timeline
        </span>
      </div>

      {/* 2-Phase Comparison Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Phase 1: Preclinical Testing */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">
              Phase 1: In Vivo Animal Trials
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Passed Models
            </span>
          </div>

          <p className="text-xs text-[#334155] leading-relaxed">
            Fialuridine was evaluated in mice, rats, dogs, and primates. Standard in vivo toxicological screens showed no significant hepatic failure or mitochondrial toxicity warnings.
          </p>

          <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Conventional animal assays failed to capture human nucleoside transporter differences.
          </div>
        </div>

        {/* Phase 2: Human Clinical Trials */}
        <div className="p-5 rounded-xl bg-orange-50/60 border border-orange-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-orange-800 uppercase">
              Phase 2: Human Trial (NIH)
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              <AlertOctagon className="w-3.5 h-3.5" /> Human Toxicity
            </span>
          </div>

          <p className="text-xs text-[#334155] leading-relaxed">
            During Phase II clinical evaluation, severe lactic acidosis and fulminant hepatic failure occurred. Five patients died and two required emergency liver transplants.
          </p>

          <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-orange-800 font-medium">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            Human hENT1 transporter facilitated lethal mitochondrial DNA incorporation.
          </div>
        </div>
      </div>

      {/* The Decision-Support Imperative */}
      <div className="mt-6 p-4 rounded-xl bg-cyan-50/50 border border-cyan-200/70 text-xs text-[#0B1F3A] flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-[#0E7490] mt-1.5 shrink-0" />
        <div className="leading-relaxed">
          <strong className="text-[#0E7490]">Why Mechanistic Biosimulation Matters:</strong> In vivo models can miss human-specific cellular transport and metabolic mechanisms. BioSimLayer exists to provide decision support by simulating human hepatic and cellular kinetics before committing human volunteers to physical assays.
        </div>
      </div>
    </div>
  );
}
