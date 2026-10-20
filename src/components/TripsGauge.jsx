import React from 'react';
import { AlertTriangle, Clock, Info } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function TripsGauge({ className = "" }) {
  return (
    <div className={`p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#0E7490] uppercase tracking-wider">
            LDC Transition & TRIPS Policy Clock
          </span>
          <h4 className="text-base font-bold text-[#0B1F3A]">
            The Regulatory Window: Earlier of 2033 or Ceasing to be an LDC
          </h4>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-50 text-[#0E7490] border border-cyan-200">
          Status as of {siteConfig.statusAsOfDate}
        </span>
      </div>

      {/* Visual Timeline Gauge */}
      <div className="relative py-8 select-none">
        {/* Track Line */}
        <div className="h-2 w-full bg-slate-100 rounded-full border border-slate-200 relative">
          <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 rounded-full w-full opacity-30" />
        </div>

        {/* Milestone Pin 1: 24 Nov 2026 */}
        <div className="absolute left-[10%] top-2 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-rose-500 shadow-sm" />
          <div className="h-4 w-0.5 bg-rose-500" />
          <div className="text-center mt-1">
            <div className="text-xs font-mono font-bold text-rose-700">24 Nov 2026</div>
            <div className="text-[10px] text-slate-500">Scheduled Graduation</div>
          </div>
        </div>

        {/* Milestone Pin 2: 24 Nov 2029 */}
        <div className="absolute left-[50%] top-2 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-[#0E7490] shadow-sm" />
          <div className="h-4 w-0.5 bg-[#0E7490]" />
          <div className="text-center mt-1">
            <div className="text-xs font-mono font-bold text-[#0E7490]">24 Nov 2029</div>
            <div className="text-[10px] text-slate-500">CDP Extension Request</div>
          </div>
        </div>

        {/* Milestone Pin 3: 01 Jan 2033 */}
        <div className="absolute left-[90%] top-2 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-600 shadow-sm" />
          <div className="h-4 w-0.5 bg-slate-600" />
          <div className="text-center mt-1">
            <div className="text-xs font-mono font-bold text-slate-700">01 Jan 2033</div>
            <div className="text-[10px] text-slate-500">WTO Outer Limit</div>
          </div>
        </div>
      </div>

      {/* Fact Box */}
      <div className="mt-14 p-4 rounded-xl bg-[#F5F9FC] border border-[#E2E8F0] space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A]">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Core Treaty Principle</span>
        </div>
        <p className="text-xs text-[#334155] leading-relaxed">
          The WTO's LDC pharmaceutical transition runs to 1 January 2033 or until a country ceases to be an LDC, whichever is earlier, so 2033 is an outer limit, not a guarantee.
        </p>
        <p className="text-[11px] text-[#64748B] italic pt-1 border-t border-slate-200">
          Impact depends on final arrangements, applicable patent law and each medicine's patent status. This does not mean all generic manufacturing becomes illegal or that every medicine becomes more expensive.
        </p>
      </div>
    </div>
  );
}
