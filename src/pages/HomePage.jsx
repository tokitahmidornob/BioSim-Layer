import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FlaskConical, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Compass, 
  FileCheck,
  Award,
  Users
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import StatTile from '../components/StatTile';
import HeroScene from '../components/illustrations/HeroScene';
import ScrollyLayerFlow from '../components/ScrollyLayerFlow';
import CapabilityTicker from '../components/CapabilityTicker';
import FialuridineTimeline from '../components/illustrations/FialuridineTimeline';
import PricingLadder from '../components/illustrations/PricingLadder';
import DossierMockup from '../components/illustrations/DossierMockup';
import SchematicCurve from '../components/illustrations/SchematicCurve';
import ImportDependenceBar from '../components/ImportDependenceBar';
import FAQAccordion from '../components/FAQAccordion';
import CTABand from '../components/CTABand';
import Avatar from '../components/Avatar';
import SEO from '../components/SEO';
import { siteConfig } from '../data/siteConfig';
import { siteContent } from '../data/siteContent';

export default function HomePage() {
  const { hero, problem, bangladeshPressure, pillars, differentiators, faq } = siteContent.home;
  const { services } = siteContent;
  const { segments } = siteContent.solutions;
  const { stages } = siteContent.roadmap;
  const { metrics } = siteContent.whyBangladesh.marketEstimates;

  return (
    <div className="space-y-24 lg:space-y-32 pb-24">
      {/* Route-Specific SEO for Founders and Brand */}
      <SEO
        title="AI-Powered Biosimulation for Drug Discovery | Toki Tahmid Ornob & Tabasum Aktar"
        description="BioSimLayer helps pharmaceutical teams decide which experiment to run next. Founded by Toki Tahmid Ornob and Tabasum Aktar in Dhaka, Bangladesh. Combining mechanistic PBPK biosimulation with uncertainty quantification."
        keywords="Toki Tahmid Ornob, Tabasum Aktar, Toki Tahmid, Tabasum, BioSimLayer, BioSim Layer, BioFold, BioFold Engine, biosimulation Bangladesh, Dhaka biotech, PBPK Bangladesh, in silico ADMET Dhaka, drug discovery biosimulation"
        canonicalPath="/"
      />

      {/* 1. Hero Section with Blueprint Mesh & Floating Telemetry */}
      <section className="relative overflow-hidden pt-6 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#EAF6FA]/50 via-white to-white">
        {/* Background Blueprint Grid Mask */}
        <div className="absolute inset-0 bg-blueprint bg-blueprint-fade pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="text-display font-extrabold text-[#0B1F3A] tracking-tight">
                A world where <span className="text-gradient">no human</span> has to be the first test subject.
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
                {hero.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to={hero.ctaPrimary.href} className="btn-primary text-sm shadow-md">
                  <span>{hero.ctaPrimary.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link to={hero.ctaSecondary.href} className="btn-outline text-sm">
                  <span>{hero.ctaSecondary.label}</span>
                </Link>

                <Link
                  to={hero.consoleCta.href}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#0E7490] hover:text-[#0B1F3A] hover:bg-[#EAF6FA] rounded-lg transition-colors"
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>{hero.consoleCta.label}</span>
                </Link>
              </div>

              {/* 4 Capability Chips with Status Badges */}
              <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {hero.capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/80 border border-[#E2E8F0] text-xs shadow-2xs"
                  >
                    <span className="font-semibold text-[#334155]">{cap.label}</span>
                    <StatusBadge status={cap.status} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Scene (Custom SVG Torso + Liver Glow + Trajectory + Evidence Cards) */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroScene />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Capability & Data Source Marquee Ticker */}
      <CapabilityTicker />

      {/* 3. Problem Section & Illustrated Fialuridine Case Study */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        <SectionHeader
          eyebrow="The Scientific Dilemma"
          title="Drug development still makes people the first test."
          description="Conventional preclinical animal testing fails to capture species-specific human toxicities, leading to high-attrition clinical failures and wasted pharmaceutical capital."
          centered
        />

        {/* 1993 Fialuridine Landmark Timeline Visual */}
        <FialuridineTimeline />

        {/* 3 Stat Tiles with SourceNotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {problem.stats.map((s) => (
            <StatTile
              key={s.label}
              value={s.value}
              label={s.label}
              desc={s.desc}
              sourceName={s.sourceName}
            />
          ))}
        </div>
      </section>

      {/* 4. Bangladesh API & TRIPS Pressure Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>{bangladeshPressure.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
              {bangladeshPressure.title}
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {bangladeshPressure.body}
            </p>
            <div className="pt-2">
              <Link
                to={bangladeshPressure.cta.href}
                className="btn-outline text-sm"
              >
                <span>{bangladeshPressure.cta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImportDependenceBar />
          </div>
        </div>
      </section>

      {/* 5. What We Do (3 Pillars) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        <SectionHeader
          eyebrow="01 / Methodology"
          title="Three Pillars of Decision-Support Biosimulation"
          description="We equip formulation scientists with actionable mechanistic triage, bounded by mathematical uncertainty and audit-ready records."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="card-glass p-6 md:p-8 space-y-3">
              <span className="text-xs font-mono font-bold text-[#0E7490] px-2.5 py-1 rounded bg-[#EAF6FA]">
                {pillar.num}
              </span>
              <h3 className="text-lg font-bold text-[#0B1F3A]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. How It Works: Sticky Scrollytelling 4-Layer Architecture */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        <SectionHeader
          eyebrow="02 / Architecture"
          title="Four Layers, One Decision Record"
          description="A rigorous computational stack connecting public bioactivity databases to South Asian virtual patient cohorts."
          centered
        />

        <ScrollyLayerFlow />

        <div className="text-center pt-2">
          <Link to="/platform" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E7490] hover:underline">
            <span>Explore full layer-by-layer technical specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. Deliverables Showcase: What You Get */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        <SectionHeader
          eyebrow="03 / Deliverables"
          title="What Your R&D Team Receives"
          description="Every completed study produces a defensible decision dossier and mechanistic concentration-time profile."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <DossierMockup />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <SchematicCurve />
            <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100 text-xs text-[#0B1F3A] space-y-1">
              <strong className="text-[#0E7490]">Decision Support Scope:</strong> BioSimLayer models do not establish legal bioequivalence or regulatory biowaivers. They provide decision support for choosing which physical formulation assay or dissolution test to run next.
            </div>
          </div>
        </div>
      </section>

      {/* 8. Services Overview */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        <SectionHeader
          eyebrow="04 / Services"
          title="Fixed-Scope Studies & Gated Subscriptions"
          description="Payable from routine OpEx without CapEx committee delays. Software licenses unlock strictly after paid pilot validation."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.cards.slice(0, 3).map((srv) => (
            <div key={srv.id} className="card-glass p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#0E7490] font-bold">
                    {srv.turnaround}
                  </span>
                  <StatusBadge status={srv.priceStatus} />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {srv.deliverable}
                </p>
                <div className="p-3 rounded-xl bg-[#F5F9FC] font-mono text-xs font-bold text-[#0B1F3A]">
                  {srv.price}
                </div>
              </div>

              <Link
                to="/services"
                className="text-xs font-bold text-[#0E7490] inline-flex items-center gap-1 hover:underline pt-2 border-t border-[#F1F5F9]"
              >
                <span>View full study scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-outline text-sm">
            <span>View All 6 Service Offerings</span>
          </Link>
        </div>
      </section>

      {/* 9. Gated Pricing Ladder Teaser */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        <SectionHeader
          eyebrow="05 / Commercial Model"
          title="Three-Stage Commercial Gating"
          description="Why software is sold after studies: trust is earned in physical validation."
          centered
        />

        <PricingLadder />

        <div className="text-center pt-2">
          <Link to="/pricing" className="btn-outline text-sm">
            <span>Review Full Pricing Breakdown & Comparison Table</span>
          </Link>
        </div>
      </section>

      {/* 10. Differentiators Bento Grid */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        <SectionHeader
          eyebrow="06 / Rigor"
          title="What Differentiates BioSimLayer"
          description="Designed for defensive decision-making, not marketing hype. Every claim is tagged with its current engineering or validation status."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff) => (
            <div key={diff.title} className="card-glass p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <StatusBadge status={diff.status} />
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">
                {diff.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Validation-First Promise & Empty Scorecard */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="card-soft p-8 sm:p-12 space-y-8">
          <SectionHeader
            eyebrow="07 / Validation"
            title="The Empirical Validation Promise"
            description="We adhere to pre-registered validation gates. Model parameters are locked prior to testing on held-out reference sets, and negative results are reported transparently."
          />

          {/* Empty-State Scorecard Card */}
          <div className="card-glass p-8 text-center space-y-4 max-w-xl mx-auto border-dashed border-2 border-[#CBD5E1]">
            <div className="w-12 h-12 rounded-full bg-[#EAF6FA] text-[#0E7490] flex items-center justify-center mx-auto font-mono text-xl">
              📊
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0B1F3A]">
                Validation Scorecard (Stage 01 Gate)
              </h4>
              <p className="text-xs text-[#64748B] font-mono">
                Status: In Progress • Scorecard publishes after Stage 1 Gate
              </p>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              We do not publish unverified accuracy figures. Blinded retrospective benchmarks across public reference molecules will be published alongside failure analyses upon completion of Gate 1.
            </p>
            <div className="pt-2">
              <Link to="/validation" className="btn-outline text-xs">
                <span>Review Our 4 Validation Gates</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Market Opportunity Snapshot */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        <SectionHeader
          eyebrow="08 / Opportunity"
          title="Market Sizing Overview"
          description="Global preclinical simulation spend transitioning toward specialized emerging-market generic and complex formulation hubs."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.tier} className="card-glass p-6 space-y-2.5">
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
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/why-bangladesh#market" className="text-xs font-mono text-[#0E7490] hover:underline">
            * Working estimates subject to customer discovery; view assumptions and analyst source ranges →
          </Link>
        </div>
      </section>

      {/* 13. Team Teaser */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        <SectionHeader
          eyebrow="09 / Team"
          title="Built in Dhaka, Bangladesh"
          description="Combining advanced computational engineering with pharmaceutical science to solve regional drug development challenges."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {siteConfig.TEAM.map((member) => (
            <div key={member.id} className="card-glass p-6 flex items-center gap-4">
              <Avatar initials={member.initials} name={member.name} size="lg" />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#0B1F3A]">
                  {member.name}
                </h4>
                <p className="text-xs text-[#0E7490] font-mono">
                  {member.role === 'TODO_CONFIRM' ? 'Co-Founder (Role to be confirmed)' : member.role}
                </p>
                <p className="text-[11px] text-[#64748B]">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/about" className="btn-outline text-sm">
            <span>Read Mission & Company Values</span>
          </Link>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        <SectionHeader
          eyebrow="10 / FAQ"
          title="Clear Answers on Scope & Methodology"
          description="Transparent positions on validation, data security, and regulatory scope."
          centered
        />

        <FAQAccordion items={faq} />
      </section>

      {/* 15. CTA Band */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <CTABand />
      </section>
    </div>
  );
}
