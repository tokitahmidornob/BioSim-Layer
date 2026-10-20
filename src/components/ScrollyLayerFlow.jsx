import React, { useState, useEffect, useRef } from 'react';
import LayerFlow from './illustrations/LayerFlow';
import StatusBadge from './StatusBadge';
import { Database, Activity, GitFork, FileText } from 'lucide-react';

export default function ScrollyLayerFlow() {
  const [activeLayer, setActiveLayer] = useState(1);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLayer(index + 1);
            }
          });
        },
        { threshold: 0.55 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const layerStories = [
    {
      num: 1,
      title: 'Layer 1: Provenance & Data Standardisation',
      status: 'BUILT',
      icon: Database,
      points: [
        'Molecular structure canonicalisation (SMILES / InChIKey) and salt stripping.',
        'Data lineage tracking and source repository mapping.',
        'Chemical applicability domain evaluation using Tanimoto structural similarity against training clusters.'
      ],
      note: 'Out-of-domain compounds are flagged with explicit applicability warnings before property prediction.'
    },
    {
      num: 2,
      title: 'Layer 2: Property & Transport Prediction',
      status: 'PROTOTYPE',
      icon: Activity,
      points: [
        'Hepatic and systemic clearance estimation and calibrated prediction intervals.',
        'Transporter liability screening: BSEP, OATP1B1, OCT2, OAT1/3, and MATE1.',
        'Organ safety endpoints: hERG cardiotoxicity, Ames mutagenicity, and Drug-Induced Liver Injury (DILI).'
      ],
      note: 'All predictions are returned with quantitative uncertainty bounds, not point scores.'
    },
    {
      num: 3,
      title: 'Layer 3: Mechanistic PBPK & Virtual Populations',
      status: 'IN VALIDATION',
      icon: GitFork,
      points: [
        'Multi-compartment physiologically based pharmacokinetic (PBPK) differential equation solver.',
        'Generates time-course concentration curves across liver, plasma, kidneys, and peripheral tissue.',
        'South Asian reference physiological calibration (60 kg standard body mass, ICRP-89 organ volumes, BEB CYP allele frequencies).'
      ],
      note: 'Calibrated specifically against Bangladeshi and South Asian reference datasets.'
    },
    {
      num: 4,
      title: 'Layer 4: Regulatory Decision Dossier',
      status: 'BUILT',
      icon: FileText,
      points: [
        'Standardized Context-of-Use (COU) specification and evidentiary limitations table.',
        'Ranked triage recommendations for next physical assays (avoiding low-probability laboratory runs).',
        'Model version hash, parameter lineage, and immutable execution audit trail for QA review.'
      ],
      note: 'Designed to support internal R&D assay decisions and GLP wet-lab prioritization.'
    }
  ];

  return (
    <div className="w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Visual on Left (Desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#F5F9FC] border border-[#E2E8F0] shadow-sm">
            <div className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider mb-2">
              Architecture Overview
            </div>
            <h4 className="text-lg font-bold text-[#0B1F3A] mb-4">
              Four Layers, One Decision Record
            </h4>
            <LayerFlow
              activeLayer={activeLayer}
              onSelectLayer={(l) => {
                setActiveLayer(l);
                sectionRefs.current[l - 1]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            />
          </div>
        </div>

        {/* Narrative Scrolling Blocks on Right */}
        <div className="lg:col-span-7 space-y-12 py-4">
          {layerStories.map((story, idx) => {
            const Icon = story.icon;
            const isCurrent = activeLayer === story.num;

            return (
              <div
                key={story.num}
                ref={(el) => (sectionRefs.current[idx] = el)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-white border-[#0E7490] shadow-md ring-1 ring-cyan-500/20'
                    : 'bg-white/80 border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-200 text-[#0E7490] flex items-center justify-center font-mono font-bold text-sm">
                      0{story.num}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      LAYER SPECIFICATION
                    </span>
                  </div>
                  <StatusBadge status={story.status} />
                </div>

                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                  {story.title}
                </h3>

                <ul className="space-y-2.5 text-xs text-[#334155] mb-4">
                  {story.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-3 rounded-lg bg-[#F5F9FC] border border-slate-200 text-xs text-[#64748B] italic">
                  {story.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
