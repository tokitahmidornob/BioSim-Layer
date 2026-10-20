import React from 'react';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import CTABand from '../components/CTABand';
import PricingLadder from '../components/illustrations/PricingLadder';
import { 
  TriageFunnelArt, 
  DissolutionBeakerArt, 
  OrganModulesArt, 
  ConsortiumNetworkArt, 
  AcademicLicenceArt, 
  PatentShieldArt 
} from '../components/illustrations/ServiceArt';
import { siteContent } from '../data/siteContent';
import SEO from '../components/SEO';
import { ArrowRight, Clock, Target, CheckCircle2, AlertCircle, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const { headline, sub, cards } = siteContent.services;

  const serviceArts = [
    TriageFunnelArt,
    DissolutionBeakerArt,
    OrganModulesArt,
    ConsortiumNetworkArt,
    AcademicLicenceArt,
    PatentShieldArt
  ];

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      <SEO
        title="Commercial Services & Triage Studies | Toki Tahmid Ornob & Tabasum Aktar"
        description="Fixed-scope decision studies (≤ 72h turnaround) and gated organ-module subscriptions for pharmaceutical teams. Founded by Toki Tahmid Ornob and Tabasum Aktar."
        keywords="BioSimLayer services, candidate triage, impurity triage, bioequivalence risk triage, Toki Tahmid Ornob, Tabasum Aktar"
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>02 / Commercial Engagement</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* Services Bento Grid */}
      <section className="space-y-6">
        <div className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
          Service Portfolio Bento
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((service, idx) => {
            const ArtComponent = serviceArts[idx] || TriageFunnelArt;

            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="card-glass p-6 flex flex-col justify-between hover:border-[#0E7490] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#0E7490]">
                      0{idx + 1} / SERVICE
                    </span>
                    <StatusBadge status={service.priceStatus} />
                  </div>

                  {/* Service Art Illustration Thumbnail */}
                  <div className="w-full h-36 p-3 rounded-xl bg-[#F5F9FC] border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-[1.02] transition-transform">
                    <ArtComponent className="w-full h-full max-h-28" />
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F3A] mb-1.5 group-hover:text-[#0E7490] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {service.deliverable}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0B1F3A]">
                    {service.price}
                  </span>
                  <span className="text-xs text-[#0E7490] font-semibold flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Three-Stage Commercial Gating Ladder */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Commercial Gating"
          title="Why Software Licenses Follow Paid Studies"
          description="In deep-tech and biosimulation, trust cannot be sold off a deck. We validate our mechanistic models in customer studies before licensing subscriptions."
          centered
        />
        <PricingLadder />
      </section>

      {/* Detailed Service Cards (Alternating Layout with Illustrations) */}
      <div className="space-y-16">
        {cards.map((service, idx) => {
          const ArtComponent = serviceArts[idx] || TriageFunnelArt;
          const isEven = idx % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="card-glass p-8 sm:p-10 space-y-8 scroll-mt-28"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0E7490] px-2.5 py-1 rounded bg-[#EAF6FA]">
                      SERVICE #{idx + 1}
                    </span>
                    <StatusBadge status={service.priceStatus} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B1F3A]">
                    {service.title}
                  </h2>
                </div>

                <div className="text-left md:text-right space-y-0.5">
                  <div className="text-lg font-mono font-extrabold text-[#0B1F3A]">
                    {service.price}
                  </div>
                  <div className="text-xs text-[#0E7490] font-mono flex items-center md:justify-end gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>
              </div>

              {/* Offset Narrative and Illustration Grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-8 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Who It's For & Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-[#F5F9FC] space-y-1 border border-[#E2E8F0]">
                      <span className="font-mono font-bold uppercase text-[10px] text-[#334155] block">
                        Target Audience:
                      </span>
                      <p className="text-[#0B1F3A] font-medium leading-relaxed">
                        {service.targetAudience}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F5F9FC] space-y-1 border border-[#E2E8F0]">
                      <span className="font-mono font-bold uppercase text-[10px] text-[#334155] block">
                        Study Deliverable:
                      </span>
                      <p className="text-[#0B1F3A] font-medium leading-relaxed">
                        {service.deliverable}
                      </p>
                    </div>
                  </div>

                  {/* How It Works (3 Steps) */}
                  <div className="space-y-3">
                    <span className="font-mono font-bold uppercase text-xs text-[#334155] block">
                      How It Works (3 Steps):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {service.steps.map((step, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                          <span className="text-xs font-mono font-bold text-[#0E7490]">
                            Step {sIdx + 1}
                          </span>
                          <p className="text-xs text-[#475569] leading-relaxed">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Illustration Card */}
                <div className={`lg:col-span-4 flex items-center justify-center p-6 rounded-2xl bg-[#F5F9FC] border border-slate-200/80 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-full max-w-[200px] aspect-square flex items-center justify-center">
                    <ArtComponent className="w-full h-full drop-shadow-sm" />
                  </div>
                </div>
              </div>

              {/* What's Not Included & Special Notes */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-[#E2E8F0] text-xs text-[#64748B] flex items-start gap-2 font-mono">
                  <Ban className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                  <span><strong>Not Included:</strong> {service.notIncluded}</span>
                </div>

                {service.specialNote && (
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-[#92400E] flex items-start gap-2 font-mono">
                    <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span><strong>Important Boundary:</strong> {service.specialNote}</span>
                  </div>
                )}
              </div>

              {/* Action CTA */}
              <div className="pt-2 flex justify-end">
                <Link
                  to="/contact"
                  className="btn-primary text-xs"
                >
                  <span>Request Scoping for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <CTABand
        title="Need a custom evaluation or multi-compound pilot?"
        subtitle="We scope fixed-scope research projects around your team’s exact candidate series."
      />
    </div>
  );
}
