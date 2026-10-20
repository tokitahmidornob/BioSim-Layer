import React from 'react';

/**
 * HeroIllustration Component
 * Custom inline SVG featuring a translucent human torso silhouette, 
 * an anatomically positioned hepatic region in a soft warm orange-red glow,
 * an oral dosage capsule tracing a dotted physiological path toward the liver,
 * and faint background telemetry data panels and molecular motifs.
 */
export default function HeroIllustration({ className = '' }) {
  return (
    <div className={`relative w-full aspect-[4/3] max-w-[540px] mx-auto flex items-center justify-center ${className}`}>
      {/* Pale-cyan ambient gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF6FA] via-[#F0FDF4] to-[#F5F9FC] rounded-3xl -z-10 border border-[#E2E8F0]/80 shadow-sm" />

      <svg
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
        aria-label="Mechanistic pharmacokinetics and liver zonation illustration"
      >
        <defs>
          {/* Liver soft warm orange-red glow */}
          <radialGradient id="liverGlow" cx="45%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EA580C" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#F97316" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>

          {/* Torso stroke gradient */}
          <linearGradient id="torsoStroke" x1="300" y1="50" x2="300" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0E7490" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>

          {/* Background grid */}
          <pattern id="heroGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="0.75" />
          </pattern>

          {/* Capsule gradient */}
          <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Subtle engineering grid background */}
        <rect x="20" y="20" width="560" height="410" rx="16" fill="url(#heroGrid)" opacity="0.6" />

        {/* Faint Background Molecule Motif (Hexagonal Benzene Ring) */}
        <g stroke="#CBD5E1" strokeWidth="1.2" opacity="0.4" fill="none">
          <polygon points="120,90 145,75 170,90 170,120 145,135 120,120" />
          <circle cx="145" cy="105" r="14" strokeDasharray="3 3" />
          <line x1="170" y1="90" x2="195" y2="75" />
          <circle cx="195" cy="75" r="4" fill="#94A3B8" />

          {/* Secondary ring */}
          <polygon points="460,330 485,315 510,330 510,360 485,375 460,360" />
          <circle cx="485" cy="345" r="14" strokeDasharray="3 3" />
        </g>

        {/* Faint Floating Data-Panel Card 1: PBPK Telemetry */}
        <g opacity="0.85">
          <rect x="45" y="160" width="145" height="75" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="drop-shadow(0 2px 8px rgba(11,31,58,0.04))" />
          <text x="58" y="182" fill="#0E7490" fontSize="9" fontFamily="monospace" fontWeight="bold">HEPATIC CLEARANCE</text>
          <text x="58" y="202" fill="#0B1F3A" fontSize="13" fontFamily="monospace" fontWeight="bold">CLh: 28.5 L/h</text>
          <text x="58" y="222" fill="#64748B" fontSize="9" fontFamily="monospace">Zone 1→3 PDE: Active</text>
        </g>

        {/* Faint Floating Data-Panel Card 2: Conformal Bound */}
        <g opacity="0.85">
          <rect x="410" y="110" width="150" height="75" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" filter="drop-shadow(0 2px 8px rgba(11,31,58,0.04))" />
          <text x="423" y="132" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">PREDICTION BOUND</text>
          <text x="423" y="152" fill="#0B1F3A" fontSize="13" fontFamily="monospace" fontWeight="bold">90% Coverage CI</text>
          <text x="423" y="172" fill="#64748B" fontSize="9" fontFamily="monospace">Tanimoto: In Domain</text>
        </g>

        {/* Translucent Human Torso Outline */}
        <g stroke="url(#torsoStroke)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Head & Neck hint */}
          <path d="M 275 60 C 275 45, 325 45, 325 60 C 325 75, 318 90, 318 105 L 345 125 C 380 145, 400 185, 395 240 L 385 360 C 382 390, 370 410, 350 415 L 250 415 C 230 410, 218 390, 215 360 L 205 240 C 200 185, 220 145, 255 125 L 282 105 C 282 90, 275 75, 275 60 Z" fill="#F8FAFC" fillOpacity="0.5" />
          {/* Collarbones */}
          <path d="M 255 130 C 280 140, 320 140, 345 130" opacity="0.4" />
        </g>

        {/* Liver Region in Soft Warm Orange-Red Glow (Right hypochondrium, center-left in frontal view) */}
        <g>
          {/* Outer glow aura */}
          <ellipse cx="270" cy="235" rx="55" ry="40" fill="url(#liverGlow)" />
          
          {/* Anatomical Liver Wedge Profile */}
          <path
            d="M 235 215 C 255 205, 295 208, 305 220 C 310 232, 290 255, 265 258 C 240 260, 225 240, 235 215 Z"
            fill="#EA580C"
            fillOpacity="0.28"
            stroke="#EA580C"
            strokeWidth="1.8"
          />

          {/* Microvasculature / Sinusoidal flow veins */}
          <path d="M 265 220 Q 275 235 260 250" stroke="#C2410C" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M 280 225 Q 290 238 285 248" stroke="#C2410C" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* Oral Route: Dotted Path from Ingestion (Upper throat) to Liver */}
        <path
          d="M 300 95 C 300 135, 285 170, 272 215"
          fill="none"
          stroke="#06B6D4"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {/* Capsule In-Transit */}
        <g transform="translate(290, 140) rotate(-25)">
          <rect x="-8" y="-16" width="16" height="32" rx="8" fill="url(#capGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFFFFF" strokeWidth="1.2" />
          <rect x="-8" y="0" width="16" height="16" rx="0 0 8 8" fill="#FFFFFF" fillOpacity="0.3" />
        </g>

        {/* Pulsing Target Dot on Hepatic Sinusoid */}
        <circle cx="272" cy="215" r="4" fill="#06B6D4" />
        <circle cx="272" cy="215" r="8" fill="none" stroke="#06B6D4" strokeWidth="1.2" opacity="0.7" />

        {/* Micro Annotation Label */}
        <g transform="translate(260, 280)">
          <rect x="-45" y="-10" width="90" height="20" rx="6" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1" opacity="0.9" />
          <text x="0" y="3" fill="#C2410C" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            Hepatic Lobule
          </text>
        </g>
      </svg>
    </div>
  );
}
