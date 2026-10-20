import React, { useState, useEffect, useRef } from 'react';

/**
 * HeroScene: Custom scientific illustration for BioSimLayer
 * - Translucent torso outline (1.5px line #0B1F3A)
 * - Liver organ with warm coral glow (#EA580C)
 * - Capsule travelling along dotted trajectory
 * - Floating evidence telemetry cards (Tagged: Illustrative)
 * - Parallax tilt on mouse movement (max 6 deg; disabled under reduced motion)
 */
export default function HeroScene() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        x: Math.max(-6, Math.min(6, x * 12)),
        y: Math.max(-6, Math.min(6, -y * 12))
      });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
      node.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (node) {
        node.removeEventListener('mousemove', handleMouseMove);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[540px] aspect-[4/3.5] mx-auto flex items-center justify-center select-none"
      style={{
        perspective: '1000px'
      }}
    >
      {/* Background Radial Glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-72 h-72 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="w-56 h-56 rounded-full bg-blue-200/35 blur-2xl -translate-y-8" />
        <div className="w-48 h-48 rounded-full bg-orange-200/30 blur-2xl translate-x-12 translate-y-12" />
      </div>

      {/* Main Interactive Stage with 3D Parallax */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
        }}
      >
        {/* SVG Torso and Metabolic Trajectory */}
        <svg
          viewBox="0 0 500 420"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Liver Radial Gradient */}
            <radialGradient id="liverGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FB923C" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#EA580C" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#C2410C" stopOpacity="0.2" />
            </radialGradient>

            {/* Torso Blueprint Gradient */}
            <linearGradient id="torsoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B1F3A" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#0E7490" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
            </linearGradient>

            {/* Capsule Linear Fill */}
            <linearGradient id="capsuleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          {/* Torso Anatomical Silhouette (Stylized Blueprint) */}
          <path
            d="M 180 40 C 210 20, 290 20, 320 40 C 350 70, 380 120, 390 190 C 398 250, 370 340, 350 400 L 150 400 C 130 340, 102 250, 110 190 C 120 120, 150 70, 180 40 Z"
            stroke="url(#torsoStroke)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="rgba(234, 246, 250, 0.35)"
          />

          {/* Ribcage Blueprint Contour Lines */}
          <path d="M 170 120 Q 250 145 330 120" stroke="#0E7490" strokeWidth="1" strokeOpacity="0.25" />
          <path d="M 160 155 Q 250 185 340 155" stroke="#0E7490" strokeWidth="1" strokeOpacity="0.25" />
          <path d="M 155 190 Q 250 225 345 190" stroke="#0E7490" strokeWidth="1" strokeOpacity="0.25" />
          <path d="M 160 230 Q 250 265 340 230" stroke="#0E7490" strokeWidth="1" strokeOpacity="0.25" />

          {/* Liver Organ (Zonated Metabolism Focal Zone) */}
          <g transform="translate(230, 180)">
            {/* Soft Ambient Liver Glow */}
            <circle cx="45" cy="40" r="60" fill="#EA580C" opacity="0.12" />
            <circle cx="45" cy="40" r="40" fill="#FB923C" opacity="0.22" />

            {/* Anatomical Liver Wedge Profile */}
            <path
              d="M 10 30 C 25 10, 80 12, 95 32 C 105 48, 90 75, 65 80 C 35 85, 5 70, 10 30 Z"
              fill="url(#liverGlow)"
              stroke="#EA580C"
              strokeWidth="2"
            />

            {/* Portal Vein / Zonation Line */}
            <path
              d="M 30 50 Q 55 45 80 55"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            <circle cx="55" cy="47" r="3" fill="#FFFFFF" />
          </g>

          {/* Oral-to-Hepatic Absorption Trajectory Path */}
          <path
            id="absorptionPath"
            d="M 250 45 C 250 100, 240 140, 280 205"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            className="animate-pulse"
          />

          {/* Travelling Capsule Pill */}
          <g transform="translate(262, 140) rotate(42)">
            <rect
              x="-14"
              y="-7"
              width="28"
              height="14"
              rx="7"
              fill="url(#capsuleGrad)"
              stroke="#0B1F3A"
              strokeWidth="1.5"
            />
            <line x1="0" y1="-7" x2="0" y2="7" stroke="#0B1F3A" strokeWidth="1.2" />
          </g>

          {/* Molecular Orbit Nodes */}
          <g transform="translate(140, 95)">
            <circle cx="0" cy="0" r="7" fill="#EAF6FA" stroke="#0E7490" strokeWidth="1.5" />
            <circle cx="28" cy="-15" r="5" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.5" />
            <circle cx="-22" cy="18" r="5" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="28" y2="-15" stroke="#0E7490" strokeWidth="1.2" />
            <line x1="0" y1="0" x2="-22" y2="18" stroke="#0E7490" strokeWidth="1.2" />
          </g>
        </svg>

        {/* Floating Telemetry Evidence Cards (Strictly Non-Numeric / Tagged Illustrative) */}
        {/* Card 1: PBPK Telemetry (Top Right) */}
        <div className="absolute -top-2 -right-4 sm:right-0 bg-white/90 backdrop-blur-md border border-[#E2E8F0] shadow-md rounded-xl p-3 text-left w-52 pointer-events-none">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E7490] font-bold">
              PBPK Profile
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-[#64748B]">
              Illustrative
            </span>
          </div>
          <div className="h-2 w-32 bg-slate-100 rounded-full mb-1 overflow-hidden">
            <div className="h-full bg-cyan-500 rounded-full w-3/4" />
          </div>
          <div className="text-[11px] text-[#334155] font-medium leading-tight">
            Multi-compartment hepatic clearance
          </div>
        </div>

        {/* Card 2: Applicability Domain (Bottom Left) */}
        <div className="absolute -bottom-2 -left-4 sm:left-2 bg-white/90 backdrop-blur-md border border-[#E2E8F0] shadow-md rounded-xl p-3 text-left w-56 pointer-events-none">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold">
                In-Domain Check
              </span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-[#64748B]">
              Illustrative
            </span>
          </div>
          <div className="text-[11px] text-[#334155] font-medium leading-tight">
            Tanimoto similarity within chemical domain
          </div>
        </div>

        {/* Card 3: Liver Toxicity Assessment (Center Right) */}
        <div className="absolute top-1/2 -right-6 -translate-y-4 bg-white/90 backdrop-blur-md border border-orange-200/80 shadow-md rounded-xl p-2.5 text-left w-48 pointer-events-none">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-700 font-bold">
              Hepatic Risk
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-orange-50 text-orange-800">
              Schematic
            </span>
          </div>
          <div className="text-[11px] text-[#334155] font-medium leading-tight">
            Mitochondrial & BSEP risk flagged
          </div>
        </div>
      </div>
    </div>
  );
}
