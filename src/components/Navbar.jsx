import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FlaskConical, ChevronDown, Sparkles, Shield, Cpu, Building2, GraduationCap, Microscope, Atom } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { siteContent } from '../data/siteContent';
import StatusLegendModal from './StatusLegendModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [legendOpen, setLegendOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawers/menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const { links, ctaPrimary, ctaSecondary, consoleLink } = siteContent.nav;

  const serviceHighlights = [
    { title: 'Candidate & Impurity Triage', desc: 'Ranked candidates & dual (Q)SAR <= 72h', href: '/services#triage' },
    { title: 'Formulation & Bioequivalence-Risk', desc: 'Solubility, permeability, dissolution support', href: '/services#formulation' },
    { title: 'Organ-Module Subscriptions', desc: 'Liver, renal, cardiac mechanistic solvers', href: '/services#modules' },
    { title: 'Validation Consortium', desc: 'Multi-center blind benchmark network', href: '/services#consortium' }
  ];

  const solutionHighlights = [
    { title: 'API Manufacturers', desc: 'Munshiganj API park synthesis evaluation', href: '/solutions#api' },
    { title: 'Generic & Formulation R&D', desc: 'Bioequivalence assay design & risk triage', href: '/solutions#generics' },
    { title: 'Contract Research (CROs)', desc: 'Prioritize physical screening pipelines', href: '/solutions#cros' },
    { title: 'Universities & Academia', desc: 'Pharmacology curriculum & research seats', href: '/solutions#academic' }
  ];

  return (
    <>
      {/* Top 2.5px Gradient Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-white/85 backdrop-blur-xl ${
          isScrolled ? 'shadow-xs border-b border-[#E2E8F0]' : 'border-b border-[#F1F5F9]/80'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#06B6D4] to-[#3B82F6] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <span className="text-lg">🧬</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#0B1F3A] font-mono leading-none">
                {siteConfig.BRAND_NAME}
              </span>
              <span className="text-[10px] text-[#0E7490] font-mono font-medium">
                Biosimulation Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Standard Links & Custom Dropdowns */}
            <Link
              to="/platform"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                location.pathname === '/platform' ? 'text-[#0E7490] bg-[#EAF6FA]' : 'text-[#334155] hover:text-[#0B1F3A] hover:bg-[#F8FAFC]'
              }`}
            >
              Platform
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1 ${
                  location.pathname === '/services' ? 'text-[#0E7490] bg-[#EAF6FA]' : 'text-[#334155] hover:text-[#0B1F3A] hover:bg-[#F8FAFC]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] shadow-xl space-y-1">
                    <div className="px-2 py-1 text-[10px] font-mono font-bold uppercase text-[#0E7490]">
                      Commercial Offerings
                    </div>
                    {serviceHighlights.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        className="block p-2 rounded-lg hover:bg-[#F5F9FC] transition-colors"
                      >
                        <div className="text-xs font-bold text-[#0B1F3A]">{item.title}</div>
                        <div className="text-[11px] text-[#64748B]">{item.desc}</div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-slate-100 px-2">
                      <Link to="/services" className="text-xs font-semibold text-[#0E7490] hover:underline">
                        View all 6 services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <Link
                to="/solutions"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1 ${
                  location.pathname === '/solutions' ? 'text-[#0E7490] bg-[#EAF6FA]' : 'text-[#334155] hover:text-[#0B1F3A] hover:bg-[#F8FAFC]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {solutionsOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] shadow-xl space-y-1">
                    <div className="px-2 py-1 text-[10px] font-mono font-bold uppercase text-[#0E7490]">
                      Industry Segments
                    </div>
                    {solutionHighlights.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        className="block p-2 rounded-lg hover:bg-[#F5F9FC] transition-colors"
                      >
                        <div className="text-xs font-bold text-[#0B1F3A]">{item.title}</div>
                        <div className="text-[11px] text-[#64748B]">{item.desc}</div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-slate-100 px-2">
                      <Link to="/solutions" className="text-xs font-semibold text-[#0E7490] hover:underline">
                        View 5 target segments →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/why-bangladesh"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                location.pathname === '/why-bangladesh' ? 'text-[#0E7490] bg-[#EAF6FA]' : 'text-[#334155] hover:text-[#0B1F3A] hover:bg-[#F8FAFC]'
              }`}
            >
              Why Bangladesh
            </Link>

            <Link
              to="/pricing"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                location.pathname === '/pricing' ? 'text-[#0E7490] bg-[#EAF6FA]' : 'text-[#334155] hover:text-[#0B1F3A] hover:bg-[#F8FAFC]'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/roadmap"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                location.pathname === '/roadmap' ? 'text-[#0E7490] bg-[#EAF6FA]' : 'text-[#334155] hover:text-[#0B1F3A] hover:bg-[#F8FAFC]'
              }`}
            >
              Roadmap
            </Link>

            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-[#0E7490] bg-[#EAF6FA]' : 'text-[#334155] hover:text-[#0B1F3A] hover:bg-[#F8FAFC]'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Action Buttons & Prototype Link */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Status Legend Popover Trigger */}
            <button
              onClick={() => setLegendOpen(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#0E7490] hover:bg-[#F1F5F9] transition-colors"
              title="View Scientific Claims Status Legend"
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* R&D Prototype Preview Link */}
            <Link
              to={consoleLink.href}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium text-[#64748B] hover:text-[#0B1F3A] hover:bg-[#F1F5F9] border border-transparent hover:border-[#E2E8F0] transition-all"
              title="Preview the interactive scientific prototype"
            >
              <FlaskConical className="w-3.5 h-3.5 text-[#0E7490]" />
              <span>{consoleLink.label}</span>
            </Link>

            <Link
              to={ctaSecondary.href}
              className="btn-outline text-xs py-1.5 px-3.5"
            >
              {ctaSecondary.label}
            </Link>

            <Link
              to={ctaPrimary.href}
              className="btn-primary text-xs py-1.5 px-4 shadow-sm"
            >
              <span>{ctaPrimary.label}</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#334155] hover:bg-[#F1F5F9] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden border-b border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-[#334155] hover:bg-[#F8FAFC]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={consoleLink.href}
                className="px-3 py-2 rounded-lg text-sm font-mono text-[#0E7490] hover:bg-[#EAF6FA] flex items-center gap-2"
              >
                <FlaskConical className="w-4 h-4" />
                <span>{consoleLink.label} (R&D Workbench)</span>
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setLegendOpen(true);
                }}
                className="px-3 py-2 rounded-lg text-sm font-mono text-[#334155] hover:bg-[#F8FAFC] flex items-center gap-2 text-left"
              >
                <Shield className="w-4 h-4 text-[#0E7490]" />
                <span>Claims Status Legend</span>
              </button>
            </nav>

            <div className="pt-3 border-t border-[#F1F5F9] flex flex-col gap-2">
              <Link
                to={ctaSecondary.href}
                className="w-full text-center py-2 rounded-lg text-sm font-semibold border border-[#E2E8F0] text-[#334155]"
              >
                {ctaSecondary.label}
              </Link>
              <Link
                to={ctaPrimary.href}
                className="w-full btn-primary text-sm py-2 text-center"
              >
                {ctaPrimary.label}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Claims Status Legend Modal */}
      <StatusLegendModal isOpen={legendOpen} onClose={() => setLegendOpen(false)} />
    </>
  );
}
