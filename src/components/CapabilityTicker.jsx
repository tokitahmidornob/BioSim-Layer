import React from 'react';

export default function CapabilityTicker() {
  const items = [
    { label: 'Mechanistic PBPK Modelling', tag: 'PROTOTYPE' },
    { label: 'Uncertainty & Domain Bounds', tag: 'IN DEVELOPMENT' },
    { label: 'South Asian Physiological Calibration', tag: 'IN VALIDATION' },
    { label: 'Private Deployment Architecture', tag: 'PLANNED' },
    { label: 'ChEMBL Bioactivity Standardisation', tag: 'CURATED' },
    { label: 'Tox21 Systems Toxicology', tag: 'REFERENCE' },
    { label: 'Open Systems Pharmacology Integration', tag: 'PLANNED' },
    { label: 'Dual (Q)SAR Impurity Profiling', tag: 'PLANNED' },
    { label: 'ICH M15 MIDD Alignment', tag: 'PRINCIPLES' }
  ];

  return (
    <div className="w-full bg-[#F5F9FC] border-y border-[#E2E8F0] py-3 overflow-hidden select-none ticker-wrap">
      <div className="ticker-track flex items-center gap-6">
        {/* Double the list for seamless infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs text-xs font-medium text-[#334155] whitespace-nowrap shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
            <span>{item.label}</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-[#0E7490] font-bold">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
