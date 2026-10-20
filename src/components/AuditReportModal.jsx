import React from 'react';
import { X, Printer, ShieldCheck, Download, Award, Lock, FileCheck, CheckCircle2 } from 'lucide-react';

export default function AuditReportModal({ isOpen, onClose, molecule }) {
  if (!isOpen || !molecule) return null;

  const handlePrint = () => {
    window.print();
  };

  const hash = 'SHA256: 7f8a9e2c' + molecule.id.toUpperCase().slice(0, 4) + 'b4931a0d842f1c8901e8a34d';
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0E1525] border border-[#1E293B] rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative text-slate-100 overflow-hidden audit-report-container">
        
        {/* Top Modal Controls (Hidden in print) */}
        <div className="p-4 bg-[#131C31] border-b border-[#1E293B] flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-bold text-slate-100 font-mono">
              Audit-Ready Context-of-Use Decision Dossier (Print / PDF View)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded text-xs font-semibold btn-cyan flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Regulatory Report Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-xs bg-slate-950 font-sans print:bg-white print:text-black">
          {/* Header Banner */}
          <div className="border-b-2 border-cyan-500 pb-4 flex flex-wrap justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-extrabold tracking-tight font-mono text-cyan-400 print:text-cyan-800">
                  BioSimLayer Platform
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono print:border-black">
                  BioFold Engine v2.4
                </span>
              </div>
              <h1 className="text-base font-bold text-slate-100 print:text-black">
                R&D DECISION-SUPPORT DOSSIER (ILLUSTRATIVE PREVIEW)
              </h1>
              <p className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                Aligned with the principles of FDA NAM validation guidance (draft, March 2026) and ICH M15 model-informed drug development principles. Values shown are illustrative, not validated results.
              </p>
            </div>

            <div className="text-right font-mono text-[11px] text-slate-400 print:text-slate-600">
              <p className="font-bold text-cyan-300 print:text-black">SECURITY: DESIGNED FOR PRIVATE VPC // R&D INTERNAL</p>
              <p>Generated: {currentDate}</p>
              <p className="text-[10px] text-slate-400 print:text-slate-500">{hash.slice(0, 32)}...</p>
            </div>
          </div>

          {/* Molecule Profile Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded bg-[#0E1525] border border-[#1E293B] print:bg-slate-50 print:border-slate-300 font-mono">
            <div>
              <span className="text-slate-400 text-[10px] block">Compound Name:</span>
              <strong className="text-slate-100 print:text-black text-xs">{molecule.name}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Molecular Formula:</span>
              <strong className="text-cyan-300 print:text-black text-xs">{molecule.formula}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Molecular Weight:</span>
              <strong className="text-slate-100 print:text-black text-xs">{molecule.mw} g/mol</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Administered Dose:</span>
              <strong className="text-emerald-400 print:text-black text-xs">{molecule.dose_mg} mg ({molecule.route})</strong>
            </div>
          </div>

          {/* SMILES Block */}
          <div className="p-2.5 rounded bg-[#090E1A] border border-[#1E293B] font-mono text-[11px] print:bg-slate-100 print:border-slate-300">
            <span className="text-slate-400 block text-[10px]">Canonical SMILES:</span>
            <code className="text-cyan-300 print:text-black break-all">{molecule.smiles}</code>
          </div>

          {/* Context-of-Use Table */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-400 print:text-black mb-2 font-mono">
              1. Formal Context-of-Use (COU) Qualification Matrix
            </h3>
            <table className="w-full border-collapse border border-[#1E293B] print:border-slate-400 text-left text-[11px] font-mono">
              <tbody>
                <tr className="border-b border-[#1E293B] print:border-slate-300">
                  <td className="p-2 bg-[#131C31] print:bg-slate-100 font-bold w-1/3 text-slate-300 print:text-black">
                    Target Question
                  </td>
                  <td className="p-2 text-slate-200 print:text-black font-sans leading-relaxed">
                    {molecule.cou.question}
                  </td>
                </tr>
                <tr className="border-b border-[#1E293B] print:border-slate-300">
                  <td className="p-2 bg-[#131C31] print:bg-slate-100 font-bold text-slate-300 print:text-black">
                    Applicability Domain
                  </td>
                  <td className="p-2 text-slate-200 print:text-black font-sans leading-relaxed">
                    {molecule.cou.applicability} (Tanimoto NN = {molecule.provenance.tanimoto})
                  </td>
                </tr>
                <tr className="border-b border-[#1E293B] print:border-slate-300">
                  <td className="p-2 bg-[#131C31] print:bg-slate-100 font-bold text-slate-300 print:text-black">
                    Model Accuracy (AFE)
                  </td>
                  <td className="p-2 text-slate-200 print:text-black font-sans leading-relaxed">
                    {molecule.cou.afe_metric}
                  </td>
                </tr>
                <tr className="border-b border-[#1E293B] print:border-slate-300">
                  <td className="p-2 bg-[#131C31] print:bg-slate-100 font-bold text-slate-300 print:text-black">
                    Known Limitations
                  </td>
                  <td className="p-2 text-slate-400 print:text-slate-700 font-sans leading-relaxed">
                    {molecule.cou.limitations}
                  </td>
                </tr>
                <tr className="border-b border-[#1E293B] print:border-slate-300 bg-cyan-950/20 print:bg-slate-100">
                  <td className="p-2 font-bold text-cyan-300 print:text-black">
                    Regulatory Decision Supported
                  </td>
                  <td className="p-2 text-slate-100 print:text-black font-semibold font-sans leading-relaxed">
                    {molecule.cou.regulatory_decision}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PK & ADMET Predicted Telemetry Strip */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-400 print:text-black mb-2 font-mono">
              2. Key Pharmacokinetic & In Silico Parameters (BEB Cohort)
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center font-mono">
              <div className="p-2 rounded bg-[#0E1525] border border-[#1E293B] print:border-slate-300 print:bg-slate-50">
                <span className="text-[10px] text-slate-400 block">Cmax (pred)</span>
                <strong className="text-cyan-400 print:text-black text-xs">{molecule.pk.cmax_pred} ng/mL</strong>
              </div>
              <div className="p-2 rounded bg-[#0E1525] border border-[#1E293B] print:border-slate-300 print:bg-slate-50">
                <span className="text-[10px] text-slate-400 block">Tmax</span>
                <strong className="text-slate-100 print:text-black text-xs">{molecule.pk.tmax_h} h</strong>
              </div>
              <div className="p-2 rounded bg-[#0E1525] border border-[#1E293B] print:border-slate-300 print:bg-slate-50">
                <span className="text-[10px] text-slate-400 block">AUC 0–24</span>
                <strong className="text-indigo-400 print:text-black text-xs">{molecule.pk.auc0_24}</strong>
              </div>
              <div className="p-2 rounded bg-[#0E1525] border border-[#1E293B] print:border-slate-300 print:bg-slate-50">
                <span className="text-[10px] text-slate-400 block">Half-life (t½)</span>
                <strong className="text-blue-400 print:text-black text-xs">{molecule.pk.thalf_h} h</strong>
              </div>
              <div className="p-2 rounded bg-[#0E1525] border border-[#1E293B] print:border-slate-300 print:bg-slate-50">
                <span className="text-[10px] text-slate-400 block">Clearance</span>
                <strong className="text-emerald-400 print:text-black text-xs">{molecule.pk.cl_tot} L/h</strong>
              </div>
              <div className="p-2 rounded bg-[#0E1525] border border-[#1E293B] print:border-slate-300 print:bg-slate-50">
                <span className="text-[10px] text-slate-400 block">BCS Class</span>
                <strong className="text-amber-400 print:text-black text-[11px]">{molecule.admet.absorption.bcs_class.slice(0, 7)}</strong>
              </div>
            </div>
          </div>

          {/* Ranked Next Wet-Lab Assays */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-400 print:text-black mb-2 font-mono">
              3. Recommended Ranked Physical Wet-Lab Experiments
            </h3>
            <div className="space-y-2">
              {molecule.cou.next_experiments.map((exp) => (
                <div
                  key={exp.rank}
                  className="p-2.5 rounded bg-[#0E1525] border border-[#1E293B] print:bg-slate-50 print:border-slate-300 flex justify-between items-center text-xs font-mono"
                >
                  <div>
                    <span className="font-bold text-cyan-300 print:text-black mr-2">#{exp.rank}. {exp.title}</span>
                    <span className="text-slate-400 text-[11px]">[{exp.facility}]</span>
                    <p className="text-[10.5px] text-slate-400 italic font-sans mt-0.5">{exp.note}</p>
                  </div>
                  <strong className="text-emerald-400 print:text-black shrink-0 ml-3">{exp.estCost}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Sign-off & Audit Signatures Block (Illustrative Format) */}
          <div className="pt-4 border-t border-[#1E293B] print:border-slate-400 grid grid-cols-3 gap-4 text-center font-mono text-[10.5px] text-slate-400 print:text-black">
            <div>
              <div className="h-10 border-b border-dashed border-slate-700 print:border-slate-400 mb-1 flex items-end justify-center pb-1">
                <span className="text-cyan-300 font-sans italic text-xs">[Scientific Sign-Off]</span>
              </div>
              <p>Lead Pharmacometrician</p>
              <p className="text-[9.5px] text-slate-400">BioSimLayer Platform (Dhaka)</p>
            </div>

            <div>
              <div className="h-10 border-b border-dashed border-slate-700 print:border-slate-400 mb-1 flex items-end justify-center pb-1">
                <span className="text-emerald-300 font-sans italic text-xs">[Toxicology Review]</span>
              </div>
              <p>Computational Toxicology</p>
              <p className="text-[9.5px] text-slate-400">BioFold GNN Pipeline</p>
            </div>

            <div>
              <div className="h-10 border-b border-dashed border-slate-700 print:border-slate-400 mb-1 flex items-end justify-center pb-1">
                <span className="text-indigo-300 font-sans italic text-xs">[Alignment Verified]</span>
              </div>
              <p>Regulatory Affairs Officer</p>
              <p className="text-[9.5px] text-slate-400">ICH M15 Principles Review</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
