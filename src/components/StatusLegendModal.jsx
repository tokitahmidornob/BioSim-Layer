import React from 'react';
import { X, ShieldCheck, Info } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function StatusLegendModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const statuses = [
    {
      badge: 'BUILT',
      desc: 'Operational code implemented in repository with complete audit logging and reproducibility.'
    },
    {
      badge: 'PROTOTYPE',
      desc: 'Working reference implementation operating on curated datasets or deterministic fallback models.'
    },
    {
      badge: 'IN DEVELOPMENT',
      desc: 'Algorithmic models or pipeline components actively being engineered and integrated.'
    },
    {
      badge: 'IN VALIDATION',
      desc: 'Models undergoing rigorous benchmark calibration against published reference datasets.'
    },
    {
      badge: 'PLANNED',
      desc: 'Roadmap initiatives designed for future execution phases following evidentiary gate clearance.'
    },
    {
      badge: 'PROPOSED',
      desc: 'Commercial service pricing and subscription tiers subject to customer discovery and validation.'
    },
    {
      badge: 'WORKING ESTIMATE',
      desc: 'Market sizing, economic estimates, and industry figures from secondary research and public data.'
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="status-legend-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white border border-[#E2E8F0] shadow-xl p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0E7490]" />
            <h3 id="status-legend-title" className="text-base font-bold text-[#0B1F3A]">
              Scientific Claims Status Legend
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#64748B] mt-3 mb-4 leading-relaxed">
          In adherence to our strict Non-Negotiable Claims Policy, every capability, metric, and timeline item on BioSimLayer is labelled with its exact development and evidentiary maturity level.
        </p>

        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {statuses.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
            >
              <div className="shrink-0 mt-0.5">
                <StatusBadge status={item.badge} />
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            Source of Truth: src/data/claims.js
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
