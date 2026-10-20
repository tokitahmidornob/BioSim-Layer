import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Avatar from '../components/Avatar';
import CTABand from '../components/CTABand';
import { siteConfig } from '../data/siteConfig';
import { siteContent } from '../data/siteContent';
import { MapPin, Target, ShieldCheck, Heart, AlertTriangle, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { headline, mission, founded, fialuridineInspiration, values } = siteContent.about;

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      {/* Hero Header with Blueprint Accent */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>09 / Company & Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {mission}
        </p>
        <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#0E7490]">
          <MapPin className="w-3.5 h-3.5" />
          <span>{founded}</span>
        </div>
      </div>

      {/* The Fialuridine Story: The "Why" */}
      <section className="card-glass p-8 sm:p-10 border-l-4 border-l-[#DC2626] space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#DC2626]">
          <AlertTriangle className="w-4 h-4" />
          <span>{fialuridineInspiration.title}</span>
        </div>
        <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-3xl">
          {fialuridineInspiration.text}
        </p>
      </section>

      {/* Founding Team Cards */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Leadership"
          title="The Founding Team"
          description="Combining software architecture with chemical and pharmacological computational sciences."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {siteConfig.TEAM.map((member) => (
            <div key={member.id} className="card-glass p-8 space-y-4 flex flex-col items-center text-center">
              {/* Layered Avatar Surface */}
              <div className="relative p-2 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 shadow-xs">
                <Avatar initials={member.initials} name={member.name} size="lg" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#0E7490]">
                  {member.role === 'TODO_CONFIRM' ? 'Co-Founder (Role confirmation pending)' : member.role}
                </p>
                <p className="text-xs text-[#64748B] max-w-sm pt-2 leading-relaxed">
                  {member.bio === 'TODO_CONFIRM' 
                    ? 'Engineering & scientific leadership based in Dhaka, Bangladesh. Dedicated to advancing mechanistic in silico pharmacology.'
                    : member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Core Values */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Ethical Framework"
          title="Our Operating Values"
          description="How we maintain scientific integrity while scaling commercial biotechnology."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val) => (
            <div key={val.title} className="card-glass p-6 md:p-8 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#0E7490] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors Section (Only renders if real confirmed entries exist) */}
      {siteConfig.ADVISORS.length > 0 && (
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Advisory Board"
            title="Scientific Advisors"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {siteConfig.ADVISORS.map((adv) => (
              <div key={adv.name} className="card-glass p-6">
                <h4>{adv.name}</h4>
                <p>{adv.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <CTABand
        title="Connect with the founders in Dhaka"
        subtitle="We welcome academic collaborators, clinical pharmacologists, and commercial partners."
      />
    </div>
  );
}
