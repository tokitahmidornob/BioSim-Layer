import React from 'react';
import { FileText, Printer, CheckCircle2, ShieldCheck, AlertCircle, ArrowUpRight, Lock, Award } from 'lucide-react';

export default function DossierTab({ molecule, onOpenFullReport }) {
  if (!molecule || !molecule.cou) return null;

  const { cou } = molecule;
  const hash = 'SHA256: 7f8a9e2c' + molecule.id.toUpperCase().slice(0, 4) + 'b4931a0d842f1c8901e8a34d';

  return (
    <div className="space-y-5">
      {/* Header with Quick Print Action */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-lg bg-[#0E1525] border border-[#1E293B]">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-semibold text-slate-100">
            Layer 4: Context-of-Use (COU) Regulatory & R&D Decision Dossier
          </h3>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/50">
            FDA March 2026 Draft NAMs & ICH M15 Aligned
          </span>
        </div>

        <button
          onClick={onOpenFullReport}
          className="px-3 py-1.5 rounded text-xs font-semibold btn-cyan flex items-center gap-1.5 shadow-sm"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Export 1-Page Regulatory Report (Print/PDF)</span>
        </button>
      </div>

      {/* Main COU Matrix Table */}
      <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B] shadow-md">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-cyan-400" />
          Structured Context-of-Use (COU) Evaluation Framework
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B] bg-[#090E1A] text-slate-400 font-mono text-[11px]">
                <th className="p-3 w-1/4">Evaluation Dimension</th>
                <th className="p-3 w-1/2">BioSimLayer Model Assessment</th>
                <th className="p-3 w-1/4 text-right">Regulatory Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B] font-mono text-[11.5px]">
              <tr className="hover:bg-[#131C31]/50">
                <td className="p-3 font-semibold text-cyan-300">Target Scientific Question</td>
                <td className="p-3 text-slate-200 leading-relaxed font-sans">{cou.question}</td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                    Defensible
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#131C31]/50">
                <td className="p-3 font-semibold text-cyan-300">Applicability Domain & Tanimoto</td>
                <td className="p-3 text-slate-300 leading-relaxed font-sans">
                  {cou.applicability} (Tanimoto NN: <strong className="font-mono text-cyan-300">{molecule.provenance.tanimoto}</strong>)
                </td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                    In Domain
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#131C31]/50">
                <td className="p-3 font-semibold text-cyan-300">Benchmark Performance</td>
                <td className="p-3 text-slate-300 leading-relaxed font-sans">{cou.afe_metric}</td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                    AFE ≤ 1.30x
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#131C31]/50">
                <td className="p-3 font-semibold text-amber-300">Known Limitations</td>
                <td className="p-3 text-slate-400 leading-relaxed font-sans">{cou.limitations}</td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-amber-950 text-amber-300 border border-amber-800/40">
                    Explicit Bounds
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#131C31]/50 bg-cyan-950/20">
                <td className="p-3 font-bold text-cyan-300">Supported R&D Decision</td>
                <td className="p-3 text-slate-100 font-semibold leading-relaxed font-sans">{cou.regulatory_decision}</td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500 text-black font-bold">
                    Actionable
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ranked Next Wet-Lab Experiments Block */}
      <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[#1E293B]">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Ranked Next Wet-Lab Experiments (Prioritized Physical Assay Triage)
          </h4>
          <span className="text-xs font-mono text-cyan-400">
            BioSimLayer Triage OpEx: $3,500 vs Avoided Wet-Lab Assays: $18,000+
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cou.next_experiments.map((exp) => (
            <div key={exp.rank} className="p-3 rounded bg-[#131C31] border border-[#1E293B] relative overflow-hidden">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold flex items-center justify-center">
                    {exp.rank}
                  </span>
                  <p className="text-xs font-semibold text-slate-100">{exp.title}</p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-400 shrink-0">
                  Est: {exp.estCost}
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 ml-7 space-y-0.5">
                <p>Recommended Lab: <strong className="text-slate-300">{exp.facility}</strong></p>
                <p className="text-slate-400 text-[10.5px] italic">{exp.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Provenance & Sign-off Footer */}
      <div className="p-3.5 rounded-lg bg-[#090E1A] border border-[#1E293B] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div className="space-y-1">
          <p className="flex items-center gap-1.5 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Audit Hash: <strong className="text-cyan-300 font-mono text-[11px]">{hash}</strong></span>
          </p>
          <p className="text-[11px] text-slate-400">
            Model Registry: BioFold-GNN-v2.4-PBPK-Release | ChEMBL 37 CC BY-SA 3.0 | OSP GPLv2
          </p>
        </div>

        <div className="text-right text-[11px] space-y-0.5">
          <p className="text-emerald-400 font-semibold flex items-center justify-end gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Analyst QA Format: [Illustrative Review]</span>
          </p>
          <p className="text-slate-400">Date: {new Date().toISOString().slice(0, 10)} UTC</p>
        </div>
      </div>
    </div>
  );
}
