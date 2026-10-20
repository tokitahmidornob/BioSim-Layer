import React from 'react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import PricingCard from '../components/PricingCard';
import PricingLadder from '../components/illustrations/PricingLadder';
import ComparisonTable from '../components/ComparisonTable';
import CTABand from '../components/CTABand';
import { siteContent } from '../data/siteContent';
import { ShieldCheck, HelpCircle, Lock } from 'lucide-react';

export default function PricingPage() {
  const { headline, sub, phases } = siteContent.pricing;

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      <SEO
        title="Commercial Pricing & Pilot Engagement Model | BioSimLayer"
        description="Transparent 3-stage commercial pricing for computational pharmacology pilots, retrospective validation benchmarks, and production licenses by BioSimLayer (Toki Tahmid Ornob & Tabasum Aktar)."
        canonicalPath="/pricing"
        keywords={[
          'BioSimLayer pricing',
          'computational pharmacology pilot cost',
          'PBPK simulation licensing',
          'retrospective validation benchmark cost',
          'Toki Tahmid Ornob',
          'Tabasum Aktar',
          'BioSimLayer pilot tiers',
          'biosimulation enterprise pricing',
          'Dhaka biotech commercial model'
        ]}
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>05 / Commercial Model</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* Hero Interactive Pricing Ladder */}
      <section className="space-y-6">
        <PricingLadder />
      </section>

      {/* 3-Stage Gated Pricing Details */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <PricingCard key={phase.phase} phase={phase} />
          ))}
        </div>
      </section>

      {/* Qualitative Comparison Table with Highlighted BioSimLayer Column */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Market Comparison"
          title="Qualitative Platform Comparison"
          description="Comparing outputs, uncertainty bounds, deployment security, and regional physiological calibration across existing tool classes."
        />

        <ComparisonTable />
      </section>

      {/* Proposed Pricing Footer */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-mono text-[#64748B]">
        Proposed pricing, subject to customer discovery and commercial validation during Stage 1.
      </div>

      <CTABand
        title="Schedule a commercial scoping conversation"
        subtitle="Discuss pricing structures, study turnaround, or consortium membership with our business development team."
      />
    </div>
  );
}
