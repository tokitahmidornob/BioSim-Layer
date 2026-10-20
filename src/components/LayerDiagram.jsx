import React from 'react';
import StatusBadge from './StatusBadge';
import { Database, Cpu, Activity, FileCheck, ArrowDown } from 'lucide-react';

export default function LayerDiagram({ className = '' }) {
  const layers = [
    {
      num: 'Layer 01',
      title: 'Provenance & Data Quality',
      subtitle: 'Chemical Structure Verification & Tanimoto Domain Check',
      desc: 'Structure standardisation, public training lineage, and nearest-neighbor similarity. Explicitly warns when compounds fall outside applicability domain.',
      status: 'BUILT',
      icon: Database,
      accent: 'border-cyan-200 bg-cyan-50/50 text-[#0E7490]'
    },
    {
      num: 'Layer 02',
      title: 'Property & Transport Prediction',
      subtitle: 'BioFold GNN ADMET & Transporter Panel',
      desc: 'Multi-task prediction for absorption (Caco-2, PAMPA), CYP inhibition (1A2, 2C9, 2C19, 2D6, 3A4), and critical transporters (BSEP, OATP1B1, OCT2, OAT1/3, MATE1) with prediction intervals.',
      status: 'IN DEVELOPMENT',
      icon: Cpu,
      accent: 'border-sky-200 bg-sky-50/50 text-[#0284C7]'
    },
    {
      num: 'Layer 03',
      title: 'Mechanistic PBPK & Populations',
      subtitle: '2-Compartment Numerical ODEs & Virtual Patient Cohorts',
      desc: '24-hour plasma concentration-time profiles [Cp(t)]. Incorporates South Asian reference physiology (60kg ICRP-89) and regional CYP allele frequencies from 1000 Genomes BEB.',
      status: 'IN VALIDATION',
      caution: 'A reference weight and an allele table alone are not regional calibration; we claim calibration only where validated.',
      icon: Activity,
      accent: 'border-amber-200 bg-amber-50/50 text-[#D97706]'
    },
    {
      num: 'Layer 04',
      title: 'Decision Dossier',
      subtitle: '1-Page Context-of-Use Regulatory & R&D Report',
      desc: 'Generates structured decision reports conforming to published FDA draft NAM principles and ICH M15 MIDD guidelines with ranked next physical experiments.',
      status: 'BUILT',
      icon: FileCheck,
      accent: 'border-emerald-200 bg-emerald-50/50 text-[#059669]'
    }
  ];

  return (
    <div className={`space-y-4 max-w-4xl mx-auto ${className}`}>
      {layers.map((layer, idx) => {
        const Icon = layer.icon;
        return (
          <div key={layer.num} className="relative">
            <div className="card-light p-6 flex flex-col md:flex-row md:items-start justify-between gap-5 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl border ${layer.accent} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
                      {layer.num}
                    </span>
                    <h3 className="text-base font-bold text-[#0B1F3A]">
                      {layer.title}
                    </h3>
                    <StatusBadge status={layer.status} />
                  </div>
                  <p className="text-xs font-mono font-medium text-[#334155]">
                    {layer.subtitle}
                  </p>
                  <p className="text-xs text-[#64748B] leading-relaxed max-w-2xl">
                    {layer.desc}
                  </p>
                  {layer.caution && (
                    <p className="text-[11px] text-[#D97706] bg-amber-50/80 border border-amber-200 p-2 rounded-lg font-mono">
                      ⚠️ {layer.caution}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {idx < layers.length - 1 && (
              <div className="flex justify-center my-1">
                <ArrowDown className="w-4 h-4 text-[#94A3B8]" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
