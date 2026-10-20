import React from 'react';
import { WORLD_DOTS, HUBS } from '../data/worldMapDots';
import StatusBadge from './StatusBadge';

export default function DotMatrixMap({ className = "" }) {
  const dhaka = HUBS.dhaka.coord;
  const targets = [
    HUBS.nepal,
    HUBS.laos,
    HUBS.vietnam,
    HUBS.indonesia,
    HUBS.india
  ];

  return (
    <div className={`p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm select-none ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
            Beachhead & Regional Expansion Path
          </span>
          <h4 className="text-base font-bold text-[#0B1F3A]">
            From Dhaka Beachhead to Graduating LDC & Asian Pharma Hubs
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500">Target Trajectory</span>
          <StatusBadge status="PLANNED" />
        </div>
      </div>

      <div className="relative w-full aspect-[16/9] bg-[#F5F9FC] rounded-xl border border-slate-100 overflow-hidden flex items-center justify-center p-2">
        <svg
          viewBox="0 0 800 450"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Dot-matrix world map showing BioSimLayer expansion from Dhaka to Nepal, Lao PDR, Vietnam, Indonesia, and India"
        >
          {/* World Land Dot Matrix (Generated from d3-geo + topojson-client + world-atlas) */}
          <g opacity="0.6">
            {WORLD_DOTS.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1.6" fill="#94A3B8" />
            ))}
          </g>

          {/* Expansion Arcs from Dhaka */}
          {targets.map((tgt, i) => {
            const [tx, ty] = tgt.coord;
            // Quadratic curved arc
            const mx = (dhaka[0] + tx) / 2;
            const my = (dhaka[1] + ty) / 2 - 20;

            return (
              <g key={i}>
                <path
                  d={`M ${dhaka[0]} ${dhaka[1]} Q ${mx} ${my} ${tx} ${ty}`}
                  stroke="#0E7490"
                  strokeWidth="1.4"
                  strokeDasharray="4 3"
                  opacity="0.8"
                />
                {/* Target Hub Marker */}
                <circle cx={tx} cy={ty} r="3.5" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.5" />
                <circle cx={tx} cy={ty} r="1.5" fill="#0E7490" />
              </g>
            );
          })}

          {/* Dhaka Core Hub (Static Pulse Rings) */}
          <g transform={`translate(${dhaka[0]}, ${dhaka[1]})`}>
            {/* Static concentric pulse rings */}
            <circle cx="0" cy="0" r="14" fill="#06B6D4" opacity="0.18" />
            <circle cx="0" cy="0" r="9" fill="#06B6D4" opacity="0.3" />
            <circle cx="0" cy="0" r="4.5" fill="#EA580C" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>

          {/* Labels for Key Hubs */}
          {/* Dhaka */}
          <text
            x={dhaka[0] + 12}
            y={dhaka[1] - 4}
            fill="#0B1F3A"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Dhaka (HQ)
          </text>

          {/* Vietnam */}
          <text
            x={HUBS.vietnam.coord[0] + 8}
            y={HUBS.vietnam.coord[1] + 2}
            fill="#334155"
            fontSize="8.5"
            fontFamily="monospace"
          >
            Vietnam (PLANNED)
          </text>

          {/* Indonesia */}
          <text
            x={HUBS.indonesia.coord[0] + 8}
            y={HUBS.indonesia.coord[1] + 4}
            fill="#334155"
            fontSize="8.5"
            fontFamily="monospace"
          >
            Indonesia (PLANNED)
          </text>

          {/* India */}
          <text
            x={HUBS.india.coord[0] - 65}
            y={HUBS.india.coord[1] + 10}
            fill="#334155"
            fontSize="8.5"
            fontFamily="monospace"
          >
            India (PLANNED)
          </text>
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#64748B] pt-2 border-t border-slate-100 gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            Core Development Hub (Dhaka)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-[#0E7490] bg-white" />
            Planned expansion nodes (Graduating LDCs & Regional Generic Hubs)
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-400">
          Cartographic Projection: Natural Earth
        </span>
      </div>
    </div>
  );
}
