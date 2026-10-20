import React from 'react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import CTABand from '../components/CTABand';
import { ConsortiumNetworkArt } from '../components/illustrations/ServiceArt';
import { siteContent } from '../data/siteContent';
import { ShieldCheck, Target, Lock, FileText, CheckCircle2, AlertTriangle, Building, ArrowRight } from 'lucide-react';

export default function ValidationPage() {
  const { headline, sub, gates, regulatoryAlignment } = siteContent.validation;

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      <SEO
        title="Empirical Validation Gates & Regulatory Alignment | BioSimLayer"
        description="Review BioSimLayer's empirical validation gates aligned with FDA NAM validation guidance and ICH M15 standards. Founded by Toki Tahmid Ornob & Tabasum Aktar in Dhaka."
        canonicalPath="/validation"
        keywords={[
          'BioSimLayer validation',
          'PBPK validation gates',
          'FDA NAM guidance alignment',
          'ICH M15 computational modeling',
          'QST model validation',
          'Toki Tahmid Ornob',
          'Tabasum Aktar',
          'biosimulation empirical scorecard',
          'Dhaka scientific governance'
        ]}
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>08 / Empirical Governance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* Regulatory Alignment Statement Banner */}
      <section className="card-glass p-6 sm:p-8 border-l-4 border-l-[#0E7490] space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0E7490]">
          <ShieldCheck className="w-4 h-4" />
          <span>{regulatoryAlignment.headline}</span>
        </div>
        <p className="text-sm text-[#334155] leading-relaxed font-mono">
          {regulatoryAlignment.body}
        </p>
        <div className="text-[11px] text-slate-500 font-mono pt-1">
          Structured around the principles of FDA NAM validation guidance (draft, March 2026) and ICH M15. Alignment represents adherence to published scientific principles, not formal endorsement or qualification.
        </div>
      </section>

      {/* The 4 Validation Gates (Turnstile Path) */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Gating Sequence"
          title="Pre-Registered Validation Gates"
          description="Model weights and analytical equations are locked prior to blind evaluations. Negative results and failure cases are documented openly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {gates.map((g, idx) => (
            <div key={idx} className="card-glass p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#0E7490] px-2.5 py-1 rounded bg-[#EAF6FA]">
                  GATE 0{idx + 1}
                </span>
                <StatusBadge status={g.status} />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A]">
                {g.gate}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Empty-State Validation Scorecard (Dashed Skeleton) */}
      <section className="card-glass p-8 sm:p-12 text-center space-y-4 max-w-2xl mx-auto border-2 border-dashed border-[#CBD5E1]">
        <div className="w-14 h-14 rounded-2xl bg-[#EAF6FA] text-[#0E7490] flex items-center justify-center mx-auto text-2xl font-mono">
          📊
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#0B1F3A]">
            Official Validation Scorecard
          </h3>
          <p className="text-xs text-[#0E7490] font-mono font-semibold">
            Status: Publishes after Stage 1 Gate
          </p>
        </div>

        {/* Skeleton Scorecard Rows */}
        <div className="max-w-md mx-auto space-y-2 py-2">
          <div className="h-7 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-between px-3 text-[11px] font-mono text-slate-400">
            <span>Permeability (Caco-2 / PAMPA)</span>
            <span>--.- % / Pending Gate 1</span>
          </div>
          <div className="h-7 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-between px-3 text-[11px] font-mono text-slate-400">
            <span>Hepatic Clearance (CYP3A4 / 2D6)</span>
            <span>--.- % / Pending Gate 1</span>
          </div>
          <div className="h-7 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-between px-3 text-[11px] font-mono text-slate-400">
            <span>Transporter Liability (BSEP / OATP)</span>
            <span>--.- % / Pending Gate 1</span>
          </div>
        </div>

        <p className="text-xs text-[#64748B] leading-relaxed max-w-lg mx-auto">
          In adherence to our strict claims policy, we do not present interim test figures as established accuracy claims. Our full multi-endpoint scorecard—encompassing permeability, clearance, and transporter liabilities—will be released alongside failure analyses once Stage 1 concludes.
        </p>
      </section>

      {/* Validation Consortium Architecture (Target Nodes: Planned) */}
      <section className="card-glass p-8 sm:p-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0E7490]">
              <Building className="w-4 h-4" />
              <span>COLLABORATIVE ECOSYSTEM</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3A]">
              Bangladesh Pharmaceutical Computational Safety Consortium
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Target consortium nodes designed to run blinded wet-lab assays to a shared pre-registered protocol. All institutional relationships are currently in planning discussions.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center p-4 rounded-xl bg-[#F5F9FC]">
            <ConsortiumNetworkArt className="w-40 h-32" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0B1F3A]">Dhaka University (DU)</span>
              <StatusBadge status="PLANNED" />
            </div>
            <p className="text-[11px] text-[#64748B] font-sans">
              Department of Clinical Pharmacy & Pharmacology (Target Academic Node)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0B1F3A]">BUET</span>
              <StatusBadge status="PLANNED" />
            </div>
            <p className="text-[11px] text-[#64748B] font-sans">
              Department of Chemical & Biochemical Engineering (Target Academic Node)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0B1F3A]">Regional GLP CROs</span>
              <StatusBadge status="PLANNED" />
            </div>
            <p className="text-[11px] text-[#64748B] font-sans">
              Independent laboratory assay calibration and blind replication (Target Partner)
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Interested in joining the Validation Consortium?"
        subtitle="We invite university departments and accredited testing laboratories to review our pre-registered testing protocols."
      />
    </div>
  );
}
