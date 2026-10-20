import React from 'react';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import ScrollyLayerFlow from '../components/ScrollyLayerFlow';
import DataOrbit from '../components/illustrations/DataOrbit';
import CTABand from '../components/CTABand';
import { siteContent } from '../data/siteContent';
import { Check, X, ShieldCheck, Database, Lock, Server, FileText } from 'lucide-react';

export default function PlatformPage() {
  const { headline, sub, whatWeDo, whatWeDoNotDo, dataFoundation, security } = siteContent.platform;

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>01 / Technical Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* 4-Layer Sticky Scrollytelling Architecture */}
      <section className="space-y-6">
        <ScrollyLayerFlow />
      </section>

      {/* Interactive Data Orbit Component */}
      <section className="space-y-6">
        <DataOrbit />
      </section>

      {/* Two-Column Box: What We Do vs What We Don't Do */}
      <section className="card-glass p-8 sm:p-10 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto pb-4 border-b border-[#E2E8F0]">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            Scientific Scope & Boundary Discipline
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Epistemic honesty requires stating our exact limitations as clearly as our capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {/* What We Do */}
          <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#059669] font-mono">
              <Check className="w-5 h-5 text-[#059669]" />
              <span>WHAT WE DO (DECISION SUPPORT)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#334155]">
              {whatWeDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do Not Do */}
          <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-200/80 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#DC2626] font-mono">
              <X className="w-5 h-5 text-[#DC2626]" />
              <span>WHAT WE DO NOT DO (BOUNDARIES)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#64748B]">
              {whatWeDoNotDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Model Cards Notice */}
      <section className="p-6 rounded-2xl bg-[#F5F9FC] border border-[#E2E8F0] text-center space-y-2 max-w-2xl mx-auto">
        <h3 className="text-base font-bold text-[#0B1F3A]">
          Model Cards & Architecture Disclosure
        </h3>
        <p className="text-xs text-[#64748B] leading-relaxed">
          Formal model cards containing hyperparameter configurations, conformal calibration plots, and out-of-domain ablation studies will be published openly upon completion of the Stage 01 validation gate.
        </p>
      </section>

      {/* Data Foundation Table */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Data Provenance"
          title="Data Foundation & Source Lineage"
          description={dataFoundation.notice}
        />

        <div className="card-glass overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F5F9FC] border-b border-[#E2E8F0] text-[#334155] font-mono text-[11px]">
                  <th className="p-4 w-1/3">Public Repository / Benchmark</th>
                  <th className="p-4 w-1/2">Scientific Utilization Category</th>
                  <th className="p-4 w-1/6 text-right">License</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-mono text-[11px]">
                {dataFoundation.sources.map((src, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFC]">
                    <td className="p-4 font-bold text-[#0B1F3A]">{src.name}</td>
                    <td className="p-4 text-[#475569] font-sans text-xs">{src.category}</td>
                    <td className="p-4 text-right text-[#0E7490] font-semibold">{src.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security & Data Handling: "Designed For" */}
      <section className="card-glass p-8 sm:p-10 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0E7490]">
            <Lock className="w-4 h-4" />
            <span>SECURITY ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            {security.headline}
          </h2>
          <p className="text-xs text-[#64748B] font-mono">
            {security.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {security.features.map((feat) => (
            <div key={feat.title} className="p-5 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-2">
              <h4 className="text-sm font-bold text-[#0B1F3A]">
                {feat.title}
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title="Ready to inspect the technical framework on your compounds?"
        subtitle="Request a preliminary triage study scoping discussion with our computational pharmacology team."
      />
    </div>
  );
}
