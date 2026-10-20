import React from 'react';
import { Lock, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import StatusBadge from '../StatusBadge';

export default function PricingLadder({ className = "" }) {
  const steps = [
    {
      num: 1,
      name: 'Validate',
      subtitle: 'Consortium & Academic Benchmark',
      price: 'US$6,000 - 8,000 / yr',
      status: 'PROPOSED',
      access: 'Public & Academic Nodes',
      features: ['Shared validation protocols', 'Blind held-out benchmark assays', 'Co-authored methodology']
    },
    {
      num: 2,
      name: 'Serve',
      subtitle: 'Fixed-Scope Decision Studies',
      price: 'US$3,500 - 4,500 / study',
      status: 'PROPOSED',
      access: 'Enterprise Pharma & Generics',
      features: ['<= 72h turnaround target', 'Ranked candidates & uncertainty intervals', 'Signed decision dossier']
    },
    {
      num: 3,
      name: 'Subscribe',
      subtitle: 'Organ-Module Software Subscriptions',
      price: 'US$20,000 - 50,000 / yr / module',
      status: 'PROPOSED',
      access: 'Gated Enterprise Access',
      locked: true,
      features: ['Unlocked after 2+ completed studies', 'Private cloud / on-prem deployment', 'Dedicated multi-organ kinetics']
    }
  ];

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-6 transition-all duration-300 relative ${
              step.locked
                ? 'bg-slate-50/90 border-slate-200/90 shadow-sm md:translate-y-0'
                : idx === 1
                ? 'bg-white border-[#0E7490] shadow-lg shadow-cyan-950/5 md:-translate-y-2'
                : 'bg-white/80 border-slate-200 shadow-sm md:translate-y-2'
            }`}
          >
            {/* Step Counter */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
                Step 0{step.num}
              </span>
              <StatusBadge status={step.status} />
            </div>

            <h4 className="text-xl font-bold text-[#0B1F3A] mb-1">
              {step.name}
            </h4>
            <div className="text-xs text-[#64748B] mb-4">
              {step.subtitle}
            </div>

            <div className="text-lg font-bold font-mono text-[#0B1F3A] mb-4 pb-4 border-b border-slate-100">
              {step.price}
            </div>

            {/* Lock Banner for Step 3 */}
            {step.locked ? (
              <div className="mb-4 p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center gap-2 text-xs text-amber-900 font-medium">
                <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Unlocked after 2+ completed paid studies</span>
              </div>
            ) : (
              <div className="mb-4 p-2.5 rounded-lg bg-cyan-50/50 border border-cyan-100 flex items-center gap-2 text-xs text-cyan-900 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Immediate commercial engagement</span>
              </div>
            )}

            {/* Features */}
            <ul className="space-y-2 text-xs text-[#334155]">
              {step.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490] mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-[#64748B]">
        <strong>Commercial gating rationale:</strong> Trust is earned in completed decision studies before enterprise software modules are licensed.
      </div>
    </div>
  );
}
