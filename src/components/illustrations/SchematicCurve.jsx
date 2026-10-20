import React from 'react';

/**
 * SchematicCurve: Mechanistic concentration-time curve with prediction interval band.
 * - STRICT CLAIMS POLICY: NO numeric axis values. Tagged "Schematic".
 */
export default function SchematicCurve({ className = "" }) {
  return (
    <div className={`p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0E7490]">
            Mechanistic Pharmacokinetics
          </span>
          <h4 className="text-sm font-bold text-[#0B1F3A]">
            Plasma Concentration vs. Time Profile
          </h4>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 text-slate-600 border border-slate-200">
          Schematic
        </span>
      </div>

      <div className="relative w-full aspect-[2/1] select-none">
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            {/* Confidence Band Gradient */}
            <linearGradient id="variabilityBand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
            </linearGradient>

            {/* Grid Pattern */}
            <pattern id="schematicGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="40" stroke="#F1F5F9" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect x="40" y="20" width="340" height="150" fill="url(#schematicGrid)" />

          {/* Axes (Non-numeric) */}
          <line x1="40" y1="170" x2="380" y2="170" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="20" x2="40" y2="170" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />

          {/* Axis Labels */}
          <text x="210" y="192" fill="#64748B" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
            Time Post-Dose →
          </text>
          <text x="18" y="95" fill="#64748B" fontSize="10" fontFamily="sans-serif" textAnchor="middle" transform="rotate(-90 18 95)">
            Plasma Concentration →
          </text>

          {/* 90% Variability / Uncertainty Interval Band */}
          <path
            d="M 40 170 C 70 70, 110 35, 150 45 C 200 60, 270 125, 370 155 L 370 168 C 270 145, 200 85, 150 75 C 110 65, 70 115, 40 170 Z"
            fill="url(#variabilityBand)"
          />

          {/* Population Mean PK Curve */}
          <path
            d="M 40 170 C 70 90, 110 50, 150 60 C 200 72, 270 135, 370 162"
            stroke="#0E7490"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Cmax Peak Indicator */}
          <circle cx="150" cy="60" r="4.5" fill="#EA580C" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="150" y1="60" x2="150" y2="170" stroke="#EA580C" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <text x="150" y="48" fill="#EA580C" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            Cmax (Peak)
          </text>

          {/* Absorption & Elimination Phase Markers */}
          <text x="90" y="145" fill="#0E7490" fontSize="9" fontFamily="sans-serif">
            Absorption
          </text>
          <text x="260" y="105" fill="#0E7490" fontSize="9" fontFamily="sans-serif">
            Elimination Phase
          </text>
        </svg>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-[#64748B] border-t border-slate-100 pt-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
          Calibrated PBPK trajectory
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-cyan-200/50" />
          Inter-individual variability band
        </span>
      </div>
    </div>
  );
}
