import React from 'react';
import { Database, ShieldAlert, CheckCircle2, AlertTriangle, Layers, HeartPulse, Zap, Beaker } from 'lucide-react';

export default function AdmetTab({ molecule }) {
  if (!molecule || !molecule.admet) {
    return <div className="p-8 text-center text-slate-400 font-mono">Loading Layer 2 ADMET data...</div>;
  }

  const { absorption, distribution, metabolism, transporters, toxicology } = molecule.admet;

  return (
    <div className="space-y-5">
      {/* Epistemic Badges Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-[#0E1525] border border-[#1E293B]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium badge-calibrated">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            🔵 CALIBRATED MODEL ESTIMATE (BioFold GNN Multi-Task Architecture)
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
            Conformal Bound: 90% Confidence Interval
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
            Data Lineage: ChEMBL 37 (2,260 Transporter Rows) | AqSolDB | TDC Benchmarks
          </span>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Nearest Neighbor Tanimoto: <strong className="text-cyan-400">{molecule.provenance.tanimoto}</strong>
        </div>
      </div>

      {/* Grid: Absorption & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Absorption & BCS Biowaiver Triage */}
        <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B] shadow-md">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1E293B]">
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <Beaker className="w-4 h-4 text-cyan-400" />
              Absorption & BCS Biowaiver Triage
            </h4>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
              {absorption.bcs_class}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Caco-2 Papp</span>
                <span className="text-[10px] font-mono text-cyan-400">conf {absorption.caco2.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{absorption.caco2.val} <span className="text-[10px] text-slate-400 font-normal">{absorption.caco2.unit}</span></p>
              <p className="text-[11px] text-emerald-400 mt-0.5">{absorption.caco2.status}</p>
            </div>

            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>PAMPA Membrane</span>
                <span className="text-[10px] font-mono text-cyan-400">conf {absorption.pampa.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{absorption.pampa.val} <span className="text-[10px] text-slate-400 font-normal">{absorption.pampa.unit}</span></p>
              <p className="text-[11px] text-emerald-400 mt-0.5">{absorption.pampa.status}</p>
            </div>

            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Human Intestinal (HIA)</span>
                <span className="text-[10px] font-mono text-cyan-400">conf {absorption.hia.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{absorption.hia.val} <span className="text-[10px] text-slate-400 font-normal">{absorption.hia.unit}</span></p>
              <p className="text-[11px] text-slate-300 mt-0.5">{absorption.hia.status}</p>
            </div>

            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>AqSolDB Solubility</span>
                <span className="text-[10px] font-mono text-cyan-400">conf {absorption.aqsol.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{absorption.aqsol.val} <span className="text-[10px] text-slate-400 font-normal">{absorption.aqsol.unit}</span></p>
              <p className="text-[11px] text-slate-300 mt-0.5">{absorption.aqsol.status}</p>
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-[#090E1A] border border-[#1E293B] flex items-center justify-between text-xs">
            <span className="text-slate-400">P-gp Efflux Liability:</span>
            <span className={`font-mono font-semibold ${absorption.pgp.val.includes('Substrate') ? 'text-amber-400' : 'text-emerald-400'}`}>
              {absorption.pgp.val} ({absorption.pgp.unit})
            </span>
          </div>
        </div>

        {/* Distribution & Tissue Binding */}
        <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B] shadow-md">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1E293B]">
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Distribution & Tissue Affinity
            </h4>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-950 text-blue-300 border border-blue-800/60">
              VDss: {distribution.vdss.val} {distribution.vdss.unit}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Lipophilicity logD7.4</span>
                <span className="text-[10px] font-mono text-blue-400">conf {distribution.logd74.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{distribution.logd74.val} <span className="text-[10px] text-slate-400 font-normal">{distribution.logd74.unit}</span></p>
              <p className="text-[11px] text-slate-300 mt-0.5">{distribution.logd74.status}</p>
            </div>

            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Unbound Fraction (fup)</span>
                <span className="text-[10px] font-mono text-blue-400">conf {distribution.fup.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{distribution.fup.val} <span className="text-[10px] text-slate-400 font-normal">{distribution.fup.unit}</span></p>
              <p className="text-[11px] text-slate-300 mt-0.5">{distribution.fup.status}</p>
            </div>

            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Steady-State Volume</span>
                <span className="text-[10px] font-mono text-blue-400">conf {distribution.vdss.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{distribution.vdss.val} <span className="text-[10px] text-slate-400 font-normal">{distribution.vdss.unit}</span></p>
              <p className="text-[11px] text-slate-300 mt-0.5">{distribution.vdss.status}</p>
            </div>

            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>BBB Penetration (B3DB)</span>
                <span className="text-[10px] font-mono text-blue-400">conf {distribution.bbb.conf}</span>
              </div>
              <p className="text-sm font-bold font-mono text-slate-100">{distribution.bbb.val} <span className="text-[10px] text-slate-400 font-normal">{distribution.bbb.unit}</span></p>
              <p className="text-[11px] text-slate-300 mt-0.5">{distribution.bbb.status}</p>
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-[#090E1A] border border-[#1E293B] flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Physicological Compartment:</span>
            <span className="text-blue-300">
              {Number(distribution.vdss.val) > 2 ? 'High Peripheral Tissue Retention' : 'Balanced Central Compartment'}
            </span>
          </div>
        </div>
      </div>

      {/* ChEMBL 37 Human Transporter Panel (2,260 Extracted Rows) */}
      <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[#1E293B]">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-semibold text-slate-100">
              ChEMBL 37 Human Transporter Liability Panel (2,260 Extracted In-Domain Rows)
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Hepatic Canalicular & Renal Proximal Tubule SLC/ABC Transporters
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {transporters.map((t, idx) => {
            const isHighRisk = t.risk === 'High' || t.risk === 'Critical';
            const isElevated = t.risk === 'Elevated' || t.risk === 'Moderate';

            return (
              <div key={idx} className="p-3 rounded bg-[#131C31] border border-[#1E293B] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-slate-200">{t.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${
                      isHighRisk
                        ? 'bg-rose-950 text-rose-300 border border-rose-800'
                        : isElevated
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    }`}
                  >
                    {t.risk} Risk
                  </span>
                </div>

                <div className="flex items-baseline justify-between text-xs font-mono">
                  <span className="text-slate-400">Estimated IC₅₀ / Km:</span>
                  <span className="font-semibold text-cyan-300">{t.val}</span>
                </div>

                {/* Visual Liability Gauge Bar */}
                <div className="w-full bg-[#090E1A] h-2 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isHighRisk ? 'bg-rose-500' : isElevated ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${t.pct}%` }}
                  />
                </div>

                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Gene: {t.gene}</span>
                  <span className="text-slate-300">{t.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metabolism & ICH M7 Toxicology Dual-(Q)SAR */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Metabolism: 5 CYP Isoforms & Clearance */}
        <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B]">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1E293B]">
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              CYP Isoform Phenotyping & Intrinsic Clearance
            </h4>
            <span className="text-xs font-mono text-slate-400">
              HLM: {metabolism.hlm_clint.val} µL/min/mg
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            {['cyp1a2', 'cyp2c9', 'cyp2c19', 'cyp2d6', 'cyp3a4'].map((iso) => {
              const data = metabolism[iso];
              const isPrimary = data.status.includes('Primary') || data.status.includes('Moderate');
              return (
                <div
                  key={iso}
                  className={`p-2 rounded flex items-center justify-between border ${
                    isPrimary
                      ? 'bg-cyan-950/40 border-cyan-800 text-cyan-200'
                      : 'bg-[#131C31] border-[#1E293B] text-slate-300'
                  }`}
                >
                  <span className="font-bold uppercase">{iso.replace('cyp', 'CYP ')}</span>
                  <span className="text-slate-400">{data.val} {data.unit || ''}</span>
                  <span className="text-[11px] text-slate-300">{data.status}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Toxicology & ICH M7 Dual-(Q)SAR */}
        <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B]">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1E293B]">
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-rose-400" />
              Toxicology & ICH M7 Impurity Triage
            </h4>
            <span className="text-xs font-mono text-slate-400">Dual-(Q)SAR Pre-Screen</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* hERG */}
            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B] flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-200">hERG Cardiac Channel (IC₅₀)</p>
                <p className="text-[11px] text-slate-400 font-mono">{toxicology.herg.status}</p>
              </div>
              <span className={`text-sm font-mono font-bold ${toxicology.herg.alert ? 'text-rose-400' : 'text-emerald-400'}`}>
                {toxicology.herg.val} µM
              </span>
            </div>

            {/* Ames Mutagenicity */}
            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B] flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-200">Ames Mutagenicity (ICH M7 Class 1–5)</p>
                <p className="text-[11px] text-slate-400 font-mono">{toxicology.ames.unit} • {toxicology.ames.status}</p>
              </div>
              <span className={`text-sm font-mono font-bold ${toxicology.ames.alert ? 'text-rose-400' : 'text-emerald-400'}`}>
                {toxicology.ames.val}
              </span>
            </div>

            {/* DILI */}
            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B] flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-200">Drug-Induced Liver Injury (DILI)</p>
                <p className="text-[11px] text-slate-400 font-mono">{toxicology.dili.status}</p>
              </div>
              <span className={`text-sm font-mono font-bold ${toxicology.dili.alert ? 'text-rose-400' : 'text-emerald-400'}`}>
                {toxicology.dili.val}
              </span>
            </div>

            {/* Tox21 SR-MMP */}
            <div className="p-2.5 rounded bg-[#131C31] border border-[#1E293B] flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-200">Mitochondrial Membrane Potential (SR-MMP)</p>
                <p className="text-[11px] text-slate-400 font-mono">{toxicology.srmmp.status}</p>
              </div>
              <span className={`text-sm font-mono font-bold ${toxicology.srmmp.alert ? 'text-rose-400' : 'text-emerald-400'}`}>
                {toxicology.srmmp.val}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
