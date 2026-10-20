import React from 'react';
import { Database, Activity, GitFork, FileText } from 'lucide-react';
import StatusBadge from '../StatusBadge';

/**
 * LayerFlow: Interactive 4-layer architectural diagram with animated connector flow.
 * - Highlights active layer via activeLayer prop (1 to 4) or user hover/focus
 * - Fully accessible with keyboard navigation
 */
export default function LayerFlow({ activeLayer = 1, onSelectLayer = () => {} }) {
  const layers = [
    {
      num: 1,
      name: 'Layer 1: Provenance & Data Quality',
      subtitle: 'Structure standardisation, source lineage, applicability domain (Tanimoto check)',
      badge: 'BUILT',
      icon: Database,
      accent: 'border-cyan-500 bg-cyan-50/50 text-cyan-700'
    },
    {
      num: 2,
      name: 'Layer 2: Property & Transport Prediction',
      subtitle: 'CYP, transporters (BSEP, OATP, OCT), hERG, Ames, liver-injury intervals',
      badge: 'PROTOTYPE',
      icon: Activity,
      accent: 'border-blue-500 bg-blue-50/50 text-blue-700'
    },
    {
      num: 3,
      name: 'Layer 3: Mechanistic PBPK & Populations',
      subtitle: 'Concentration-time curves, South Asian reference physiology (60 kg, ICRP-89, BEB)',
      badge: 'IN VALIDATION',
      icon: GitFork,
      accent: 'border-orange-500 bg-orange-50/50 text-orange-700'
    },
    {
      num: 4,
      name: 'Layer 4: Decision Dossier',
      subtitle: 'Context-of-use table, limitations, ranked next experiments, audit trail',
      badge: 'BUILT',
      icon: FileText,
      accent: 'border-emerald-500 bg-emerald-50/50 text-emerald-700'
    }
  ];

  return (
    <div className="w-full max-w-xl mx-auto py-2">
      <div className="relative space-y-4">
        {/* Connecting Vertical Flow Spine */}
        <div 
          className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-emerald-500 -z-0 hidden sm:block" 
          aria-hidden="true"
        />

        {layers.map((layer) => {
          const isActive = activeLayer === layer.num;
          const Icon = layer.icon;

          return (
            <div
              key={layer.num}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              onClick={() => onSelectLayer(layer.num)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectLayer(layer.num);
                }
              }}
              className={`relative z-10 w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#0E7490] ${
                isActive
                  ? 'bg-white border-[#0E7490] shadow-lg shadow-cyan-900/5 translate-x-1.5'
                  : 'bg-white/70 hover:bg-white border-[#E2E8F0] hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Node Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                    isActive ? layer.accent : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Layer Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#0E7490]">
                      0{layer.num} / LAYER
                    </span>
                    <StatusBadge status={layer.badge} />
                  </div>
                  <h4 className="text-base font-bold text-[#0B1F3A] mb-1">
                    {layer.name}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {layer.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
