import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ScenarioClock from '../components/ScenarioClock';
import TripsGauge from '../components/TripsGauge';
import DotMatrixMap from '../components/DotMatrixMap';
import ImportDependenceBar from '../components/ImportDependenceBar';
import StatusBadge from '../components/StatusBadge';
import CTABand from '../components/CTABand';
import SEO from '../components/SEO';
import { siteContent } from '../data/siteContent';
import { Building2, Compass, TrendingUp, ShieldAlert, ChevronDown, ChevronUp, Globe, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyBangladeshPage() {
  const { headline, sub, regulatoryTailwind, marketEstimates } = siteContent.whyBangladesh;
  const [showAssumptions, setShowAssumptions] = useState(false);

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      <SEO
        title="Why Bangladesh & TRIPS Transition | BioSimLayer | Toki Tahmid Ornob & Tabasum Aktar"
        description="A $1.3B API import gap, impending WTO TRIPS transition, and new international regulatory tailwinds. Founded by Toki Tahmid Ornob and Tabasum Aktar in Dhaka."
        keywords="Why Bangladesh pharma, TRIPS transition Bangladesh, Munshiganj API park, Toki Tahmid Ornob, Tabasum Aktar, BioSimLayer, biotech Bangladesh"
        canonicalPath="/why-bangladesh"
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>04 / Macroeconomic & Policy Context</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* 1. Interactive ScenarioClock & TRIPS Gauge */}
      <section className="space-y-6">
        <TripsGauge />
        <ScenarioClock />
      </section>

      {/* 2. Supply Chain Vulnerability & Import Dependence */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
              Strategic Urgency
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
              Domestic API Synthesis Requires Predictive Triage
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Bangladesh consumes roughly US$1.2–1.3B in imported active ingredients annually. As the Munshiganj API park begins domestic synthesis, manufacturers cannot rely on foreign reference dossiers—they must prove their own impurity profiles, polymorphism stability, and bioequivalence comparability.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ImportDependenceBar />
          </div>
        </div>
      </section>

      {/* 3. The Industry Pivot: From Copying to Differentiating */}
      <section className="card-glass p-8 sm:p-10 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0E7490]">
            <Building2 className="w-4 h-4" />
            <span>STRUCTURAL SECTOR TRANSFORMATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
            The Industry Pivot: From Copying to Differentiating
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-3xl">
            For three decades, Bangladesh’s pharmaceutical industry scaled by formulating off-patent or patent-waived molecules under WTO TRIPS Least Developed Country flexibilities. That era is drawing to a close.
          </p>
        </div>

        {/* Before / After Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Legacy Paradigm */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Legacy Paradigm (1995 – 2025)
            </div>
            <h4 className="text-base font-bold text-[#0B1F3A]">
              Straightforward Generic Duplication
            </h4>
            <ul className="space-y-2 text-xs text-[#64748B]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>Imported APIs manufactured from standard Western reference formulas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>Zero domestic patent screening or freedom-to-operate validation required.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>High failure rate in expensive physical dissolution and bioequivalence assays.</span>
              </li>
            </ul>
          </div>

          {/* Post-Graduation Future */}
          <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200 space-y-3">
            <div className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
              Post-Graduation Future (2026+)
            </div>
            <h4 className="text-base font-bold text-[#0B1F3A]">
              Evidence-Based Differentiation & Complex Generics
            </h4>
            <ul className="space-y-2 text-xs text-[#334155]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7490] mt-0.5 shrink-0" />
                <span>Local API synthesis with dual (Q)SAR impurity profiling (ICH M7).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7490] mt-0.5 shrink-0" />
                <span>Complex generics & modified release modeled on South Asian virtual populations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7490] mt-0.5 shrink-0" />
                <span>Computational triage to choose which physical experiment to run next.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Cartographic Dot-Matrix Map */}
      <section className="space-y-6">
        <DotMatrixMap />
      </section>

      {/* 5. Regulatory Tailwind: US FDA Direct Final Rule */}
      <section className="card-glass p-8 sm:p-10 border-l-4 border-l-[#059669] space-y-4">
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-[#059669]">
            INTERNATIONAL REGULATORY ALIGNMENT
          </span>
          <h3 className="text-2xl font-bold text-[#0B1F3A]">
            {regulatoryTailwind.headline}
          </h3>
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            {regulatoryTailwind.text}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-[#92400E] font-mono">
          ⚠️ {regulatoryTailwind.caution}
        </div>
      </section>

      {/* 6. Market Estimates & Assumptions Drawer */}
      <section id="market" className="space-y-6">
        <SectionHeader
          eyebrow="Market Opportunity"
          title="Market Sizing & Commercial Potential"
          description={marketEstimates.notice}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketEstimates.metrics.map((m) => (
            <div key={m.tier} className="card-glass p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#334155]">{m.tier}</span>
                <StatusBadge status={m.status} />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#0E7490]">
                {m.range}
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {m.desc}
              </p>
              <div className="pt-2 border-t border-[#F1F5F9] text-[10px] text-[#94A3B8] font-mono">
                Source: {m.source}
              </div>
            </div>
          ))}
        </div>

        {/* Assumptions Drawer */}
        <div className="card-glass p-6 space-y-4">
          <button
            onClick={() => setShowAssumptions(!showAssumptions)}
            className="w-full flex items-center justify-between text-left font-bold text-sm text-[#0B1F3A] cursor-pointer"
          >
            <span>Methodology & Sizing Assumptions Drawer</span>
            {showAssumptions ? <ChevronUp className="w-4 h-4 text-[#0E7490]" /> : <ChevronDown className="w-4 h-4 text-[#0E7490]" />}
          </button>

          {showAssumptions && (
            <div className="pt-2 text-xs text-[#475569] leading-relaxed space-y-2 border-t border-[#E2E8F0]">
              <p>
                <strong>TAM ($1.4B–$2.9B):</strong> Aggregates published analyst estimates for global preclinical in silico ADMET screening, PBPK software licenses, and computational safety consulting. Estimates vary substantially depending on whether contract research services are included.
              </p>
              <p>
                <strong>SAM ($75M–$260M):</strong> Assumes ~500 pharmaceutical and API manufacturers across South Asia (Bangladesh, India, Pakistan) and Southeast Asia (Vietnam, Indonesia, Thailand) allocating approximately 1.5%–3.0% of their annual R&D budgets to computational biosimulation tools by 2030.
              </p>
              <p>
                <strong>SOM ($1M–$3M):</strong> Modeled on capturing 15–25 active corporate accounts in the Dhaka industrial corridor, each purchasing 3–5 fixed-scope triage studies annually ($15K–$25K) plus 4–8 enterprise organ-module subscriptions ($100K–$250K total) at steady state.
              </p>
              <p className="italic text-[11px] text-[#64748B]">
                Note: These working estimates will be updated and validated through 15–20 prospective customer-discovery interviews during Stage 1.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABand
        title="Participate in our Stage 1 buyer discovery sprint"
        subtitle="We invite pharmaceutical R&D heads to review our benchmarking methodology and shape upcoming organ modules."
      />
    </div>
  );
}
