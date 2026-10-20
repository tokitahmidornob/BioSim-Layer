import React from 'react';
import StatusBadge from './StatusBadge';
import { CheckCircle2, DollarSign, Target, ShieldAlert } from 'lucide-react';

export default function StageCard({ stage, isCurrent = false, className = '' }) {
  return (
    <div className={`card-light p-6 flex flex-col justify-between space-y-4 ${isCurrent ? 'ring-2 ring-[#0E7490] bg-[#F5F9FC]/40' : ''} ${className}`}>
      <div className="space-y-3">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0E7490] px-2 py-0.5 rounded bg-[#EAF6FA] border border-[#CBD5E1]">
              STAGE {stage.number}
            </span>
            <span className="text-xs text-[#64748B] font-mono">
              {stage.timeline}
            </span>
          </div>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${stage.statusClass}`}>
            {stage.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#0B1F3A]">
          {stage.title}
        </h3>

        {/* Exit Gate Box */}
        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-mono space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-[#92400E]">
            <Target className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Pre-Registered Exit Gate:</span>
          </div>
          <p className="text-[#78350F] leading-snug">
            {stage.gate}
          </p>
        </div>

        {/* Deliverables */}
        <div className="space-y-1 text-xs">
          <span className="font-mono font-bold text-[#334155] uppercase text-[10px] block">
            What Customers Get / Milestone:
          </span>
          <p className="text-[#64748B] leading-relaxed">
            {stage.deliverable}
          </p>
        </div>
      </div>

      {/* Financial Targets Strip */}
      <div className="pt-3 border-t border-[#E2E8F0] grid grid-cols-2 gap-3 text-xs font-mono">
        <div>
          <span className="text-[10px] text-[#64748B] block">Funding Ceiling:</span>
          <strong className="text-[#0E7490] font-bold">{stage.fundingCeiling}</strong>
        </div>
        <div>
          <span className="text-[10px] text-[#64748B] block">Revenue Target:</span>
          <strong className="text-[#059669] font-bold">{stage.revenueTarget}</strong>
        </div>
      </div>
    </div>
  );
}
