import React from 'react';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import DotMatrixMap from '../components/DotMatrixMap';
import CTABand from '../components/CTABand';
import { siteConfig } from '../data/siteConfig';
import { siteContent } from '../data/siteContent';
import { DollarSign, ShieldAlert, CheckCircle2, TrendingUp, Clock, AlertTriangle, ArrowRight, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvestorsPage() {
  const { headline, sub, immediateNeed, totalPlan, tranches, tractionToday, risksAndMitigations } = siteContent.investors;
  const { ASK } = siteConfig;

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>07 / Investor Thesis</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* Immediate Ask & Staged Plan Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-glass p-8 border-l-4 border-l-[#0E7490] space-y-3">
          <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider block">
            Immediate Capital Need
          </span>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#0B1F3A]">
            {immediateNeed}
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">
            Funds the 4-month Stage 1 sprint: 15–20 buyer discovery interviews, data-license audit, independent scientific review, and blinded public reference benchmarking.
          </p>
        </div>

        <div className="card-glass p-8 border-l-4 border-l-[#059669] space-y-3">
          <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-wider block">
            Staged 18-Month Plan
          </span>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#0B1F3A]">
            {totalPlan}
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">
            Released in 3 successive tranches strictly conditional on achieving pre-registered empirical exit gates.
          </p>
        </div>
      </div>

      {/* Staged Funding Tranche Visual (Three Stacked Segment Bars, No Percentages) */}
      <section className="card-glass p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
              Financing Structure
            </span>
            <h4 className="text-base font-bold text-[#0B1F3A]">
              Three Evidence-Gated Tranches (Total Plan: US$415,000)
            </h4>
          </div>
          <StatusBadge status="PROPOSED" />
        </div>

        {/* Stacked Tranche Visual Bar */}
        <div className="space-y-2 pt-2">
          <div className="h-8 w-full bg-slate-100 rounded-lg overflow-hidden flex border border-slate-200 p-0.5">
            <div
              className="h-full bg-[#0E7490] rounded-l-md flex items-center justify-center text-[10px] font-mono text-white font-bold"
              style={{ width: '11%' }}
              title="Tranche 1: US$45K"
            >
              T1: $45K
            </div>
            <div
              className="h-full bg-blue-600 flex items-center justify-center text-[10px] font-mono text-white font-bold"
              style={{ width: '29%' }}
              title="Tranche 2: US$120K"
            >
              Tranche 2: US$120,000
            </div>
            <div
              className="h-full bg-emerald-600 rounded-r-md flex items-center justify-center text-[10px] font-mono text-white font-bold"
              style={{ width: '60%' }}
              title="Tranche 3: US$250K"
            >
              Tranche 3: US$250,000 (Organ Modules & Scaling)
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#64748B] font-mono pt-1 gap-2">
            <span>Stage 1: Prove ($45K)</span>
            <span>Stage 2: Serve ($120K)</span>
            <span>Stage 3: Subscribe ($250K)</span>
          </div>
        </div>
      </section>

      {/* Investor Ask Terms Card (from siteConfig.ASK) */}
      <section className="card-glass p-8 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
          <div>
            <h3 className="text-xl font-bold text-[#0B1F3A]">
              Stage 1 Seed Sprint Terms
            </h3>
            <p className="text-xs text-[#64748B]">
              Standardized, founder-friendly terms for angel and early deep-tech investors.
            </p>
          </div>
          <StatusBadge status="PROPOSED" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
            <span className="text-[#64748B] block text-[10px]">Round Target:</span>
            <strong className="text-base font-bold text-[#0B1F3A]">{ASK.amount}</strong>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
            <span className="text-[#64748B] block text-[10px]">Instrument:</span>
            <strong className="text-sm font-bold text-[#0B1F3A]">
              {ASK.instrument === 'TODO_CONFIRM' ? 'Terms to be confirmed' : ASK.instrument}
            </strong>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
            <span className="text-[#64748B] block text-[10px]">Equity Offered:</span>
            <strong className="text-sm font-bold text-[#0B1F3A]">
              {ASK.equity === 'TODO_CONFIRM' ? 'Terms to be confirmed' : ASK.equity}
            </strong>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
            <span className="text-[#64748B] block text-[10px]">Valuation:</span>
            <strong className="text-sm font-bold text-[#0B1F3A]">
              {ASK.valuation === 'TODO_CONFIRM' ? 'Terms to be confirmed' : ASK.valuation}
            </strong>
          </div>
        </div>

        <p className="text-[11px] text-[#64748B] font-mono italic">
          * Investment terms are subject to formal agreement and investor accreditation. No equity or valuation figures are assumed or invented.
        </p>
      </section>

      {/* Cartographic Regional Expansion Path */}
      <section className="space-y-6">
        <DotMatrixMap />
      </section>

      {/* Use of Funds Detail */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Capital Efficiency"
          title="Use of Funds: Three Evidence-Gated Tranches"
          description="Detailed planning allocation across compute infrastructure, talent, consortium wet-lab testing, and legal compliance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tranches.map((t, idx) => (
            <div key={idx} className="card-glass p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0E7490] px-2 py-0.5 rounded bg-[#EAF6FA]">
                    {t.tranche}
                  </span>
                  <StatusBadge status="PROPOSED" />
                </div>
                <div className="text-2xl font-bold font-mono text-[#0B1F3A]">
                  {t.amount}
                </div>
                <p className="text-xs font-semibold text-[#334155]">
                  {t.focus}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#F1F5F9] text-xs">
                  {t.allocation.map((alloc, aIdx) => (
                    <div key={aIdx} className="flex justify-between text-[#475569] font-mono">
                      <span>{alloc.label}:</span>
                      <strong className="text-[#0B1F3A]">{alloc.amount}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traction Today: What Is Real Today */}
      <section className="card-glass p-8 sm:p-10 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#059669]">
            <CheckCircle2 className="w-4 h-4 text-[#059669]" />
            <span>TRANSPARENT TRACTION AUDIT</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0B1F3A]">
            What Is Real Today (October 2026)
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B]">
            In strict compliance with our claims policy, we distinguish built engineering assets from roadmap targets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {tractionToday.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] flex items-start gap-3 text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#059669] mt-2 shrink-0" />
              <span className="text-[#334155] leading-relaxed font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top Risks & Mitigations Icon Grid */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Risk Governance"
          title="Top Strategic Risks & Concrete Mitigations"
          description="Addressing adoption inertia, technical precision bounds, and regulatory timing head-on."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {risksAndMitigations.map((rm, idx) => (
            <div key={idx} className="card-glass p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#DC2626]">
                <AlertTriangle className="w-4 h-4" />
                <span>RISK: {rm.risk}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                <strong>Mitigation Strategy:</strong> {rm.mitigation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Projections Visual Grid */}
      <section className="card-glass p-8 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#0B1F3A]">
            3-Year Dual-Track Revenue Model
          </h3>
          <p className="text-xs text-[#64748B]">
            Targets, not forecasts. Stretch Year 1 includes grants and consortium contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center font-mono">
          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0]">
            <span className="text-xs text-[#64748B] block">Year 1 (Stage 1–2)</span>
            <strong className="text-lg font-bold text-[#0E7490] block mt-1">US$20K (Plan)</strong>
            <span className="text-xs text-[#059669]">US$60K (Stretch)</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0]">
            <span className="text-xs text-[#64748B] block">Year 2 (Stage 2–3)</span>
            <strong className="text-lg font-bold text-[#0E7490] block mt-1">US$100K (Plan)</strong>
            <span className="text-xs text-[#059669]">US$185K (Stretch)</span>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0]">
            <span className="text-xs text-[#64748B] block">Year 3 (Stage 3–4)</span>
            <strong className="text-lg font-bold text-[#0E7490] block mt-1">US$300K (Plan)</strong>
            <span className="text-xs text-[#059669]">US$510K (Stretch)</span>
          </div>
        </div>
      </section>

      <CTABand
        title="Interested in reviewing our investor materials?"
        subtitle="Contact the founders directly to schedule a pitch discussion for the October 27 final."
        primaryCta={{ label: 'Contact the Founders', href: '/contact?type=investor' }}
        secondaryCta={{ label: 'Review Gated Roadmap', href: '/roadmap' }}
      />
    </div>
  );
}
