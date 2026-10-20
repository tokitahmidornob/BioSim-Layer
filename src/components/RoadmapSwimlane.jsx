import React, { useState } from 'react';
import { Diamond, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function RoadmapSwimlane({ className = "" }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const stages = [
    {
      id: '00',
      name: 'Demonstrate',
      timing: 'Oct 2026',
      status: 'IN PROGRESS',
      gate: 'Gate 0: Working prototype demo operating end-to-end',
      ceiling: 'Pre-seed Bootstrapped'
    },
    {
      id: '01',
      name: 'Prove',
      timing: 'Nov 2026 – Feb 2027',
      status: 'Unlocks after Gate 0',
      gate: 'Gate 1: Published scorecard incl. failures, 2+ design partners, 1+ paid pilot',
      ceiling: 'Ceiling US$45K (Stage 1 Ask)'
    },
    {
      id: '02',
      name: 'Serve',
      timing: 'Mar – Aug 2027',
      status: 'Unlocks after Gate 1',
      gate: 'Gate 2: 10 paid studies, 3+ repeat clients, positive service margin',
      ceiling: 'Ceiling US$120K'
    },
    {
      id: '03',
      name: 'Subscribe',
      timing: 'Sep 2027 – Apr 2028',
      status: 'Unlocks after Gate 2',
      gate: 'Gate 3: 3 paying organ-module subscribers',
      ceiling: 'Ceiling US$250K'
    },
    {
      id: '04',
      name: 'Platform',
      timing: '2028 – 2030',
      status: 'Unlocks after Gate 3',
      gate: 'Gate 4: 10+ recurring accounts, 1 prospective clinical validation',
      ceiling: 'Funded by revenue and follow-on capital'
    },
    {
      id: '05',
      name: 'Global & Discovery',
      timing: '2031 – 2033+',
      status: 'Unlocks after Gate 4',
      gate: 'Gate 5: Commercial revenue established across 3+ countries',
      ceiling: 'Commercial Scaling'
    }
  ];

  const tripsLanes = [
    {
      scenario: 'Scenario A: Scheduled Graduation',
      date: '24 Nov 2026',
      desc: 'Graduation as scheduled. LDC-specific pharma flexibilities may expire earlier than 2033; exact legal position requires counsel.',
      badgeColor: 'border-rose-400 bg-rose-50 text-rose-800'
    },
    {
      scenario: 'Scenario B: Recommended Deferral',
      date: '24 Nov 2029',
      desc: 'Requested in Feb 2026; UN CDP found extension appropriate; ECOSOC referred to General Assembly (decision pending).',
      badgeColor: 'border-cyan-400 bg-cyan-50 text-[#0E7490]'
    },
    {
      scenario: 'Scenario C: WTO Outer Limit',
      date: '01 Jan 2033',
      desc: 'Transition runs to 1 Jan 2033 or until a country ceases to be an LDC, whichever is earlier.',
      badgeColor: 'border-slate-400 bg-slate-50 text-slate-700'
    }
  ];

  return (
    <div className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm ${className}`}>
      {/* Swimlane Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
            Evidence-Gated Strategic Swimlane
          </span>
          <h4 className="text-lg font-bold text-[#0B1F3A]">
            Engineering Roadmap Aligned With TRIPS Transition Scenarios
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500">Gating Rule:</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            Capital released only when previous gate passes
          </span>
        </div>
      </div>

      {/* Top Lane: Product & Evidence Stages (00 - 05) */}
      <div className="mb-10">
        <div className="text-xs font-mono font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
          <Diamond className="w-4 h-4 text-[#0E7490] fill-[#0E7490]" />
          <span>LANE 1: PRODUCT & EVIDENCE GATES (STAGES 00 – 05)</span>
        </div>

        {/* Desktop Swimlane Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-3 relative">
          {/* Horizontal Connector Line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-200 -z-0" aria-hidden="true" />

          {stages.map((stg) => {
            const isCurrent = stg.id === '00';

            return (
              <div
                key={stg.id}
                className={`relative z-10 p-3.5 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-cyan-50/70 border-[#0E7490] shadow-sm ring-2 ring-cyan-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      isCurrent
                        ? 'bg-[#0E7490] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {stg.id}
                  </div>
                  {isCurrent ? (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-800">
                      IN PROGRESS
                    </span>
                  ) : (
                    <Diamond className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>

                <div className="text-xs font-bold text-[#0B1F3A] mb-0.5">
                  {stg.name}
                </div>
                <div className="text-[10px] font-mono text-[#0E7490] mb-2 font-medium">
                  {stg.timing}
                </div>

                <div className="text-[11px] text-[#64748B] leading-tight mb-2">
                  {stg.gate}
                </div>

                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-500">
                  {stg.ceiling}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical List */}
        <div className="lg:hidden space-y-3">
          {stages.map((stg) => (
            <div
              key={stg.id}
              className={`p-4 rounded-xl border ${
                stg.id === '00'
                  ? 'bg-cyan-50/60 border-[#0E7490]'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-[#0E7490]">
                  STAGE {stg.id} / {stg.timing}
                </span>
                {stg.id === '00' ? (
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-800">
                    IN PROGRESS
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-slate-500">{stg.status}</span>
                )}
              </div>
              <h5 className="text-sm font-bold text-[#0B1F3A]">{stg.name}</h5>
              <p className="text-xs text-[#64748B] mt-1">{stg.gate}</p>
              <div className="mt-2 text-[11px] font-mono text-slate-500">{stg.ceiling}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Lane: TRIPS Scenario Markers (Parallel Lanes A, B, C) */}
      <div className="pt-6 border-t border-slate-100">
        <div className="text-xs font-mono font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#EA580C]" />
          <span>LANE 2: TRIPS REGULATORY SCENARIO PATHS (ALL 3 TRACKED SIMULTANEOUSLY)</span>
        </div>

        <div className="space-y-3">
          {tripsLanes.map((lane, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#0B1F3A]">
                    {lane.scenario}
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border font-bold ${lane.badgeColor}`}>
                    {lane.date}
                  </span>
                </div>
                <p className="text-xs text-[#64748B]">
                  {lane.desc}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-[11px] font-mono text-slate-500">
                  {i === 1 ? 'Current Referral Status' : 'Parallel Track'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-3 rounded-lg bg-slate-50 border border-slate-200 text-center text-xs text-[#64748B]">
        <strong>Roadmap Rule:</strong> Stage 00 is active. Subsequent stages unlock sequentially upon evidentiary gate passage. No speculative percentage progress bars are displayed.
      </div>
    </div>
  );
}
