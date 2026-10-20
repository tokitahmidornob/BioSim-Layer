import React from 'react';

/**
 * StatusBadge Component
 * Displays factual claims status per Non-Negotiable Claims Policy:
 * BUILT | PROTOTYPE | IN DEVELOPMENT | IN VALIDATION | PLANNED | PROPOSED | WORKING ESTIMATE
 */
export default function StatusBadge({ status, className = '' }) {
  if (!status) return null;

  const normalized = status.toUpperCase().trim();

  let styles = 'bg-slate-100 text-slate-700 border-slate-200';
  let dotColor = 'bg-slate-400';
  let tooltip = 'Status information';

  switch (normalized) {
    case 'BUILT':
      styles = 'bg-emerald-50 text-emerald-800 border-emerald-200';
      dotColor = 'bg-emerald-500';
      tooltip = 'BUILT: Implemented and reproducible in repository code';
      break;
    case 'PROTOTYPE':
      styles = 'bg-cyan-50 text-cyan-800 border-cyan-200';
      dotColor = 'bg-cyan-500';
      tooltip = 'PROTOTYPE: Working reference demonstration using pre-computed reference data';
      break;
    case 'IN DEVELOPMENT':
      styles = 'bg-sky-50 text-sky-800 border-sky-200';
      dotColor = 'bg-sky-500';
      tooltip = 'IN DEVELOPMENT: Algorithmic component actively being engineered';
      break;
    case 'IN VALIDATION':
      styles = 'bg-amber-50 text-amber-900 border-amber-300';
      dotColor = 'bg-amber-500';
      tooltip = 'IN VALIDATION: Currently undergoing calibration against reference benchmarks';
      break;
    case 'PLANNED':
      styles = 'bg-purple-50 text-purple-800 border-purple-200';
      dotColor = 'bg-purple-500';
      tooltip = 'PLANNED: Unlocks sequentially after evidentiary gate clearance';
      break;
    case 'PROPOSED':
      styles = 'bg-indigo-50 text-indigo-800 border-indigo-200';
      dotColor = 'bg-indigo-500';
      tooltip = 'PROPOSED: Commercial pricing subject to customer discovery';
      break;
    case 'WORKING ESTIMATE':
      styles = 'bg-amber-50 text-amber-800 border-amber-200';
      dotColor = 'bg-amber-500';
      tooltip = 'WORKING ESTIMATE: Macroeconomic sizing estimate from secondary research';
      break;
    default:
      styles = 'bg-slate-50 text-slate-700 border-slate-200';
      dotColor = 'bg-slate-400';
      tooltip = `Status: ${normalized}`;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border uppercase tracking-wider transition-colors cursor-help ${styles} ${className}`}
      title={tooltip}
      aria-label={tooltip}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{normalized}</span>
    </span>
  );
}
