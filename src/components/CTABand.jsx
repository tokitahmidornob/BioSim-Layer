import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABand({
  title = 'Ready to prioritize your next physical experiment?',
  subtitle = 'Discover how fixed-scope triage studies de-risk formulation pipelines and reduce physical screening OpEx.',
  primaryCta = { label: 'Run a Pilot With Us', href: '/contact' },
  secondaryCta = { label: 'Join the Validation Consortium', href: '/contact' },
  className = ''
}) {
  return (
    <div className={`p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#EAF6FA] via-[#F0FDF4] to-[#F5F9FC] border border-[#CBD5E1] text-center space-y-6 shadow-sm ${className}`}>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-mono font-semibold text-[#0E7490] shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
        <span>Evidence-Gated Commercial Engagement</span>
      </div>

      <div className="space-y-2 max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          to={primaryCta.href}
          className="btn-primary text-sm shadow-md"
        >
          <span>{primaryCta.label}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {secondaryCta && (
          <Link
            to={secondaryCta.href}
            className="btn-outline text-sm"
          >
            <span>{secondaryCta.label}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
