import React, { useState } from 'react';
import { Clock, AlertCircle, Info, ChevronRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function ScenarioClock({ className = '' }) {
  const [activeScenarioId, setActiveScenarioId] = useState('scenario_a');
  const { tripsScenarios, tripsFactBox, tripsFootnote, statusAsOfDate } = siteContent.whyBangladesh;

  const activeScenario = tripsScenarios.find(s => s.id === activeScenarioId) || tripsScenarios[0];

  return (
    <div className={`card-light p-6 md:p-8 space-y-6 ${className}`}>
      {/* Header with status timestamp */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#0E7490]" />
          <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
            WTO TRIPS Scenario Clock Band
          </h3>
        </div>
        <div className="text-xs font-mono text-[#64748B]">
          Status as of <strong className="text-[#0B1F3A]">{statusAsOfDate}</strong> (updated before each presentation)
        </div>
      </div>

      {/* Scenario Selection Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {tripsScenarios.map((sc) => {
          const isSelected = sc.id === activeScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioId(sc.id)}
              className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between space-y-2 cursor-pointer ${
                isSelected
                  ? 'bg-[#EAF6FA] border-[#0E7490] shadow-sm'
                  : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#0E7490]' : 'text-[#64748B]'}`}>
                  {sc.code}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#CBD5E1] text-[#334155]">
                  {sc.urgency}
                </span>
              </div>
              <div className="font-bold text-sm text-[#0B1F3A]">
                {sc.title}
              </div>
              <div className="text-xs text-[#64748B]">
                {sc.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Detailed Explainer */}
      <div className="p-5 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-3">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#0E7490] shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-[#0B1F3A]">
              {activeScenario.title} — Strategic Regulatory Assessment
            </h4>
            <p className="text-xs text-[#334155] leading-relaxed">
              {activeScenario.details}
            </p>
            <div className="text-xs font-mono text-[#0E7490] pt-1">
              <strong>Impact on BioSimLayer Strategy:</strong> {activeScenario.impact}
            </div>
          </div>
        </div>
      </div>

      {/* Fact Box & Footnote */}
      <div className="space-y-2 pt-2">
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-[#92400E] flex items-center gap-2.5 font-mono">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#D97706]" />
          <span>{tripsFactBox}</span>
        </div>

        <p className="text-[11px] text-[#64748B] leading-relaxed italic">
          * {tripsFootnote}
        </p>
      </div>
    </div>
  );
}
