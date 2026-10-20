import React from 'react';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import FAQAccordion from '../components/FAQAccordion';
import CTABand from '../components/CTABand';
import { siteContent } from '../data/siteContent';
import { BookOpen, FileText, HelpCircle, Layers } from 'lucide-react';

export default function ResourcesPage() {
  const { headline, sub, articles, glossary } = siteContent.resources;
  const { faq } = siteContent.home;

  return (
    <div className="space-y-24 py-8 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6">
      <SEO
        title="Biosimulation & PBPK Knowledge Base | BioSimLayer"
        description="Educational guides, regulatory briefs, and computational pharmacology glossary covering PBPK modeling, QST, TRIPS 2026, and in silico toxicology. Curated by Toki Tahmid Ornob & Tabasum Aktar."
        canonicalPath="/resources"
        keywords={[
          'BioSimLayer resources',
          'PBPK explainer guides',
          'computational pharmacology glossary',
          'TRIPS 2026 biotech guide',
          'Toki Tahmid Ornob',
          'Tabasum Aktar',
          'QST toxicology guides',
          'biosimulation glossary'
        ]}
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>10 / Knowledge & Explainers</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          {headline}
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {sub}
        </p>
      </div>

      {/* Explainer Articles */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Key Guides"
          title="Regulatory & Scientific Briefs"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div key={art.id} className="card-glass p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10.5px] font-mono px-2 py-0.5 rounded-full bg-[#EAF6FA] text-[#0E7490] font-semibold">
                  {art.tag}
                </span>
                <h3 className="text-base font-bold text-[#0B1F3A]">
                  {art.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {art.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific Glossary */}
      <section className="space-y-6">
        <SectionHeader
          eyebrow="Terminology"
          title="Pharmacology & Regulatory Glossary"
          description="Clear definitions for standard regulatory and computational modeling concepts."
        />

        <div className="card-glass p-6 sm:p-8">
          <dl className="divide-y divide-[#E2E8F0]">
            {glossary.map((item) => (
              <div key={item.term} className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-mono font-bold text-sm text-[#0B1F3A]">
                  {item.term}
                </dt>
                <dd className="sm:col-span-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Direct Answers"
          title="Regulatory, Scientific & Commercial FAQ"
          description="Straightforward answers to the most common questions raised by pharmaceutical researchers, CRO partners, and investors."
          centered
        />

        <FAQAccordion items={faq} />
      </section>

      <CTABand />
    </div>
  );
}
