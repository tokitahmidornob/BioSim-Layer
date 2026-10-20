import React from 'react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTABand from '../components/CTABand';
import { 
  ApiReactorArt, 
  TabletPressArt, 
  CroFlaskArt, 
  UniversityCampusArt, 
  StartupBiotechArt 
} from '../components/illustrations/SolutionArt';
import { siteContent } from '../data/siteContent';
import { Building2, Layers, FlaskConical, GraduationCap, Rocket, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SolutionsPage() {
  const { headline, sub, segments } = siteContent.solutions;

  const solutionArts = [
    ApiReactorArt,
    TabletPressArt,
    CroFlaskArt,
    UniversityCampusArt,
    StartupBiotechArt
  ];

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      <SEO
        title="Solutions for Generic Pharma, API & CROs | BioSimLayer"
        description="Tailored in silico computational pharmacology solutions for generic pharmaceutical manufacturers, API developers, CROs, academic labs, and regional biotechs. By BioSimLayer (Toki Tahmid Ornob & Tabasum Aktar)."
        canonicalPath="/solutions"
        keywords={[
          'BioSimLayer solutions',
          'generic pharma in silico triage',
          'API crystallization simulation',
          'CRO biosimulation partnerships',
          'Toki Tahmid Ornob',
          'Tabasum Aktar',
          'bioequivalence screening',
          'Dhaka pharmaceutical formulation'
        ]}
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>03 / Target Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* Solutions Cards (Alternating Layout with Illustrations) */}
      <div className="space-y-16">
        {segments.map((seg, idx) => {
          const ArtComponent = solutionArts[idx] || ApiReactorArt;
          const isEven = idx % 2 === 1;

          return (
            <div
              key={seg.id}
              id={seg.id}
              className="card-glass p-8 sm:p-10 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
                    Segment 0{idx + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B1F3A] mt-0.5">
                    {seg.title}
                  </h2>
                </div>

                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 text-[#64748B] border border-slate-200 shrink-0 self-start sm:self-auto">
                  Illustrative scenario — no client implied
                </span>
              </div>

              {/* Offset Grid with Narrative & Custom Solution Art */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-8 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-200/60 space-y-1.5">
                      <span className="font-mono font-bold uppercase text-[10px] text-[#DC2626] block">
                        The Industry Challenge:
                      </span>
                      <p className="text-[#334155] leading-relaxed">
                        {seg.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200/60 space-y-1.5">
                      <span className="font-mono font-bold uppercase text-[10px] text-[#059669] block">
                        How BioSimLayer Helps:
                      </span>
                      <p className="text-[#334155] leading-relaxed">
                        {seg.solution}
                      </p>
                    </div>
                  </div>

                  {/* Typical First Project Timeline Strip */}
                  <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0E7490] uppercase">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Typical First Project (≤ 72h Scoped Sprint):</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#0B1F3A] leading-relaxed">
                      {seg.typicalProject}
                    </p>
                  </div>
                </div>

                {/* Right Illustration Surface */}
                <div className={`lg:col-span-4 flex items-center justify-center p-6 rounded-2xl bg-[#F5F9FC] border border-slate-200/80 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-full max-w-[200px] aspect-square flex items-center justify-center">
                    <ArtComponent className="w-full h-full drop-shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Link
                  to="/contact"
                  className="btn-outline text-xs"
                >
                  <span>Discuss a {seg.title.split('(')[0]} Pilot</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0E7490]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <CTABand
        title="Explore how computational biosimulation fits into your pipeline"
        subtitle="Speak directly with our team about a structured, fixed-scope research study."
      />
    </div>
  );
}
