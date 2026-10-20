import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { siteContent } from '../data/siteContent';
import { FlaskConical, MapPin, ShieldCheck, ArrowUp, ZapOff, Shield } from 'lucide-react';
import StatusLegendModal from './StatusLegendModal';

export default function Footer() {
  const [legendOpen, setLegendOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const toggleReducedMotion = () => {
    const next = !reducedMotion;
    setReducedMotion(next);
    if (next) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#F5F9FC] border-t border-[#E2E8F0] mt-auto relative overflow-hidden">
        {/* Soft Background Watermark */}
        <div
          className="absolute -bottom-8 -right-8 text-slate-200/40 font-mono font-extrabold text-[120px] select-none pointer-events-none -z-0"
          aria-hidden="true"
        >
          {siteConfig.BRAND_NAME}
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12 relative z-10">
          {/* Main Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Info (Col 2) */}
            <div className="lg:col-span-2 space-y-3">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl">🧬</span>
                <span className="text-lg font-extrabold tracking-tight font-mono text-[#0B1F3A]">
                  {siteConfig.BRAND_NAME}
                </span>
              </Link>
              <p className="text-xs text-[#64748B] max-w-sm leading-relaxed">
                {siteConfig.TAGLINE}. Decision-support software helping pharmaceutical teams prioritize physical assays and model regional patient variability.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#0E7490]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{siteConfig.LOCATION}</span>
              </div>
            </div>

            {/* Column: Platform & Evidence */}
            <div className="space-y-2.5 text-xs">
              <span className="font-mono font-bold uppercase tracking-wider text-[#0B1F3A] block">
                Platform
              </span>
              <ul className="space-y-1.5 text-[#64748B]">
                <li><Link to="/platform" className="hover:text-[#0E7490]">Four-Layer Architecture</Link></li>
                <li><Link to="/validation" className="hover:text-[#0E7490]">Validation Gates</Link></li>
                <li><Link to="/why-bangladesh" className="hover:text-[#0E7490]">Why Bangladesh</Link></li>
                <li><Link to="/roadmap" className="hover:text-[#0E7490]">6-Stage Roadmap</Link></li>
                <li>
                  <Link to="/console" className="hover:text-[#0E7490] font-mono text-[#0E7490] inline-flex items-center gap-1">
                    <FlaskConical className="w-3 h-3" />
                    <span>R&D Prototype Preview</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column: Commercial */}
            <div className="space-y-2.5 text-xs">
              <span className="font-mono font-bold uppercase tracking-wider text-[#0B1F3A] block">
                Commercial
              </span>
              <ul className="space-y-1.5 text-[#64748B]">
                <li><Link to="/services" className="hover:text-[#0E7490]">Triage Studies & Subscriptions</Link></li>
                <li><Link to="/pricing" className="hover:text-[#0E7490]">Gated Pricing Model</Link></li>
                <li><Link to="/solutions" className="hover:text-[#0E7490]">Target Solutions</Link></li>
                <li><Link to="/investors" className="hover:text-[#0E7490]">Investor Information</Link></li>
                <li><Link to="/contact" className="hover:text-[#0E7490]">Request a Pilot Study</Link></li>
              </ul>
            </div>

            {/* Column: Knowledge & Legal */}
            <div className="space-y-2.5 text-xs">
              <span className="font-mono font-bold uppercase tracking-wider text-[#0B1F3A] block">
                Knowledge & Legal
              </span>
              <ul className="space-y-1.5 text-[#64748B]">
                <li><Link to="/about" className="hover:text-[#0E7490]">About & Team</Link></li>
                <li><Link to="/resources" className="hover:text-[#0E7490]">Explainers & Glossary</Link></li>
                <li><Link to="/privacy" className="hover:text-[#0E7490]">Privacy Policy (Draft)</Link></li>
                <li><Link to="/terms" className="hover:text-[#0E7490]">Terms of Service (Draft)</Link></li>
                <li><Link to="/responsible-use" className="hover:text-[#0E7490]">Responsible Use & Scope</Link></li>
              </ul>
            </div>
          </div>

          {/* Regulatory Decision-Support Disclaimer */}
          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed space-y-1 shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-[#334155]">
              <ShieldCheck className="w-4 h-4 text-[#0E7490]" />
              <span>Scope of Use & Non-Clinical Disclaimer</span>
            </div>
            <p>
              {siteContent.brand.disclaimer}
            </p>
          </div>

          {/* Bottom Bar with Accessibility Controls */}
          <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
            <div className="flex items-center gap-3">
              <span>© 2026 {siteConfig.BRAND_NAME}. Built in Dhaka, Bangladesh.</span>
              <span>•</span>
              <button
                onClick={() => setLegendOpen(true)}
                className="hover:text-[#0E7490] underline flex items-center gap-1"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Claims Status Legend</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleReducedMotion}
                className="flex items-center gap-1.5 text-slate-500 hover:text-[#0B1F3A] transition-colors"
                title="Toggle Reduced Motion for accessible viewing"
              >
                <ZapOff className="w-3.5 h-3.5" />
                <span>{reducedMotion ? 'Animations Off' : 'Reduce Motion'}</span>
              </button>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-[#0E7490] hover:text-[#0B1F3A] transition-colors"
                title="Return to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Claims Status Legend Modal */}
      <StatusLegendModal isOpen={legendOpen} onClose={() => setLegendOpen(false)} />
    </>
  );
}
