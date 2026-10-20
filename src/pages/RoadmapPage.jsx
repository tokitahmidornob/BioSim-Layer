import React from 'react';
import SectionHeader from '../components/SectionHeader';
import RoadmapSwimlane from '../components/RoadmapSwimlane';
import StageCard from '../components/StageCard';
import CTABand from '../components/CTABand';
import { siteContent } from '../data/siteContent';
import { Target, TrendingUp, AlertCircle, Diamond, ShieldCheck } from 'lucide-react';

export default function RoadmapPage() {
  const { headline, sub, stages, rule, targetsTableNote } = siteContent.roadmap;

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>06 / Execution Roadmap</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* Signature Interaction: The 2-Lane Integrated Swimlane */}
      <section className="space-y-6">
        <RoadmapSwimlane />
      </section>

      {/* Detailed Stage Cards Grid */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Milestone Specifications"
          title="Six Sequential Development Stages"
          description="Detailed deliverables, funding ceilings, and strict exit gate criteria."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage) => (
            <StageCard
              key={stage.number}
              stage={stage}
              isCurrent={stage.number === '00'}
            />
          ))}
        </div>
      </section>

      {/* Dual-Track Financial Targets Table */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Financial Projections"
          title="Dual-Track 3-Year Commercial Revenue Targets"
          description="Contrasting our conservative planning case against stretch execution upside."
        />

        <div className="card-glass overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-mono">
              <thead>
                <tr className="bg-[#F5F9FC] border-b border-[#E2E8F0] text-[#334155] text-[11px]">
                  <th className="p-4 w-1/4">Operating Horizon</th>
                  <th className="p-4 w-1/3 text-[#0E7490]">Planning Case Target</th>
                  <th className="p-4 w-1/3 text-[#059669]">Stretch Case Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-xs">
                <tr className="hover:bg-[#F8FAFC]">
                  <td className="p-4 font-bold text-[#0B1F3A]">Year 1 (Stage 01–02)</td>
                  <td className="p-4 font-bold text-[#0E7490]">US$20,000</td>
                  <td className="p-4 font-bold text-[#059669]">US$60,000</td>
                </tr>
                <tr className="hover:bg-[#F8FAFC]">
                  <td className="p-4 font-bold text-[#0B1F3A]">Year 2 (Stage 02–03)</td>
                  <td className="p-4 font-bold text-[#0E7490]">US$100,000</td>
                  <td className="p-4 font-bold text-[#059669]">US$185,000</td>
                </tr>
                <tr className="hover:bg-[#F8FAFC]">
                  <td className="p-4 font-bold text-[#0B1F3A]">Year 3 (Stage 03–04)</td>
                  <td className="p-4 font-bold text-[#0E7490]">US$300,000</td>
                  <td className="p-4 font-bold text-[#059669]">US$510,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-[11px] font-mono text-[#64748B] italic">
          * {targetsTableNote}
        </p>
      </section>

      <CTABand
        title="Want to inspect our detailed stage deliverables?"
        subtitle="Review our evidence criteria or discuss participation as an early design partner."
      />
    </div>
  );
}
