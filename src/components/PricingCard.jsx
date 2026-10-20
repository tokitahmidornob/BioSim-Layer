import React from 'react';
import StatusBadge from './StatusBadge';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingCard({ phase, className = '' }) {
  return (
    <div className={`card-light p-6 md:p-8 flex flex-col justify-between space-y-5 relative overflow-hidden ${className}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
            {phase.timeline}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EAF6FA] text-[#0E7490] font-semibold border border-[#CBD5E1]">
            {phase.badge}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#0B1F3A]">
            {phase.phase}
          </h3>
          <p className="text-xs text-[#64748B] mt-1">
            {phase.objective}
          </p>
        </div>

        {/* Price Tag */}
        <div className="p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-lg sm:text-xl font-extrabold font-mono text-[#0B1F3A]">
              {phase.price}
            </span>
            <StatusBadge status={phase.priceStatus} />
          </div>
          <p className="text-[11px] text-[#64748B] font-mono">
            Priced at ~20–25% of avoided physical assay expenditure
          </p>
        </div>

        {/* Deliverables / Scope */}
        <div className="space-y-2 text-xs">
          <span className="font-mono font-bold text-[#334155] uppercase text-[10px] block">
            Scope & Deliverable:
          </span>
          <p className="text-[#64748B] leading-relaxed">
            {phase.deliverable}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <Link
          to="/contact"
          className="w-full btn-outline text-xs justify-center font-semibold"
        >
          <span>Discuss Pilot Study</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0E7490]" />
        </Link>
      </div>
    </div>
  );
}
