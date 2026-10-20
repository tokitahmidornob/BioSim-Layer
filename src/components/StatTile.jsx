import React from 'react';
import SourceNote from './SourceNote';

export default function StatTile({ value, label, desc, sourceName, sourceUrl, className = '' }) {
  return (
    <div className={`p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-3 ${className}`}>
      <div className="space-y-1.5">
        <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#0B1F3A] tracking-tight">
          {value}
        </div>
        <div className="text-sm font-bold text-[#334155]">
          {label}
        </div>
        {desc && (
          <p className="text-xs text-[#64748B] leading-relaxed">
            {desc}
          </p>
        )}
      </div>

      {sourceName && (
        <div className="pt-2 border-t border-[#F1F5F9]">
          <SourceNote sourceName={sourceName} sourceUrl={sourceUrl} />
        </div>
      )}
    </div>
  );
}
