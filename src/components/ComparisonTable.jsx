import React from 'react';
import StatusBadge from './StatusBadge';
import { siteConfig } from '../data/siteConfig';
import { siteContent } from '../data/siteContent';

export default function ComparisonTable({ className = '' }) {
  const { comparison, footer } = siteContent.pricing;
  const showPrices = siteConfig.showCompetitorPrices;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="card-light overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F5F9FC] border-b border-[#E2E8F0] text-[#334155] font-mono text-[11px]">
                <th className="p-4 w-1/4">Evaluation Dimension</th>
                <th className="p-4 w-1/4 text-[#64748B]">Generic Web ADMET Tools</th>
                <th className="p-4 w-1/4 text-[#64748B]">Enterprise PBPK Suites</th>
                <th className="p-4 w-1/4 font-bold text-[#0E7490] bg-[#EAF6FA]/50">
                  {siteConfig.BRAND_NAME}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC]/80 transition-colors">
                  <td className="p-4 font-bold text-[#0B1F3A]">
                    <div className="flex items-center gap-2">
                      <span>{row.feature}</span>
                      {row.status && <StatusBadge status={row.status} />}
                    </div>
                  </td>
                  <td className="p-4 text-[#64748B] leading-relaxed">
                    {row.feature === 'Pricing Model' && !showPrices
                      ? 'Annual license / Variable'
                      : row.genericWeb}
                  </td>
                  <td className="p-4 text-[#64748B] leading-relaxed">
                    {row.feature === 'Pricing Model' && !showPrices
                      ? 'Enterprise CapEx / Tiered'
                      : row.enterprisePbpk}
                  </td>
                  <td className="p-4 font-semibold text-[#0B1F3A] bg-[#EAF6FA]/30 leading-relaxed">
                    {row.biosimLayer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#64748B] space-y-1">
        <p>* {footer}</p>
        {showPrices && (
          <p className="italic">
            ** Indicative estimates from public information, not verified quotations.
          </p>
        )}
      </div>
    </div>
  );
}
