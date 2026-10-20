import React from 'react';

// Style rules: 1.5px navy line (#0B1F3A @ ~80%), pale-cyan fills, coral accent (#EA580C), rounded joins

export function TriageFunnelArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Funnel Outline */}
      <path
        d="M 30 25 L 170 25 L 120 85 L 120 135 L 80 145 L 80 85 Z"
        stroke="#0B1F3A"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="#EAF6FA"
      />
      {/* Candidate Filter Slats */}
      <line x1="45" y1="42" x2="155" y2="42" stroke="#0E7490" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="65" y1="62" x2="135" y2="62" stroke="#0E7490" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Prioritized Ranked Output Molecule */}
      <circle cx="100" cy="115" r="9" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.8" />
      <circle cx="100" cy="115" r="4" fill="#EA580C" />
      {/* Excluded Candidates */}
      <circle cx="55" cy="33" r="4" fill="#64748B" opacity="0.4" />
      <circle cx="100" cy="33" r="4" fill="#64748B" opacity="0.4" />
      <circle cx="145" cy="33" r="4" fill="#64748B" opacity="0.4" />
    </svg>
  );
}

export function DissolutionBeakerArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Beaker Outline */}
      <path
        d="M 50 30 L 50 125 C 50 138, 62 145, 75 145 L 125 145 C 138 145, 150 138, 150 125 L 150 30"
        stroke="#0B1F3A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M 45 30 L 155 30" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Dissolution Fluid Level */}
      <path
        d="M 52 75 Q 75 80 100 75 Q 125 70 148 75 L 148 125 C 148 136, 137 143, 125 143 L 75 143 C 63 143, 52 136, 52 125 Z"
        fill="#EAF6FA"
      />
      {/* Measurement Tick Marks */}
      <line x1="50" y1="50" x2="65" y2="50" stroke="#0E7490" strokeWidth="1.2" />
      <line x1="50" y1="70" x2="60" y2="70" stroke="#0E7490" strokeWidth="1.2" />
      <line x1="50" y1="90" x2="68" y2="90" stroke="#0E7490" strokeWidth="1.2" />
      <line x1="50" y1="110" x2="60" y2="110" stroke="#0E7490" strokeWidth="1.2" />
      {/* Dissolving Tablet with Effervescence */}
      <g transform="translate(100, 105)">
        <rect x="-14" y="-7" width="28" height="14" rx="7" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
        <line x1="0" y1="-7" x2="0" y2="7" stroke="#EA580C" strokeWidth="1.5" />
      </g>
      {/* Bubbles */}
      <circle cx="85" cy="85" r="2.5" fill="#06B6D4" opacity="0.6" />
      <circle cx="115" cy="88" r="3" fill="#06B6D4" opacity="0.6" />
      <circle cx="95" cy="65" r="2" fill="#06B6D4" opacity="0.6" />
    </svg>
  );
}

export function OrganModulesArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Module 1: Liver (Center Top) */}
      <g transform="translate(65, 20)">
        <path
          d="M 10 20 C 18 8, 52 10, 60 22 C 68 34, 58 52, 42 55 C 22 58, 6 48, 10 20 Z"
          fill="#FFF7ED"
          stroke="#EA580C"
          strokeWidth="1.5"
        />
        <circle cx="35" cy="32" r="3" fill="#EA580C" />
      </g>
      {/* Module 2: Kidney (Left Bottom) */}
      <g transform="translate(25, 80)">
        <path
          d="M 15 10 C 35 5, 45 25, 40 45 C 35 60, 15 60, 12 40 C 10 25, 5 15, 15 10 Z"
          fill="#EAF6FA"
          stroke="#0E7490"
          strokeWidth="1.5"
        />
        <circle cx="25" cy="32" r="3" fill="#06B6D4" />
      </g>
      {/* Module 3: Heart (Right Bottom) */}
      <g transform="translate(125, 80)">
        <path
          d="M 25 15 C 25 10, 15 5, 5 15 C -5 25, 10 45, 25 55 C 40 45, 55 25, 45 15 C 35 5, 25 10, 25 15 Z"
          fill="#F5F9FC"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <circle cx="25" cy="28" r="3" fill="#3B82F6" />
      </g>
      {/* Connective Inter-Organ Flow Arteries */}
      <path d="M 85 70 L 45 85" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M 115 70 L 145 85" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M 65 110 L 125 110" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
    </svg>
  );
}

export function ConsortiumNetworkArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Central Platform Coordination Node */}
      <circle cx="100" cy="80" r="18" fill="#EAF6FA" stroke="#0E7490" strokeWidth="1.8" />
      <circle cx="100" cy="80" r="8" fill="#0E7490" />
      {/* Academic and CRO Nodes Orbiting */}
      {/* Node 1 */}
      <line x1="100" y1="80" x2="40" y2="40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="40" cy="40" r="12" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="4" fill="#3B82F6" />
      {/* Node 2 */}
      <line x1="100" y1="80" x2="160" y2="40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="160" cy="40" r="12" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <circle cx="160" cy="40" r="4" fill="#3B82F6" />
      {/* Node 3 */}
      <line x1="100" y1="80" x2="40" y2="120" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="40" cy="120" r="12" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <circle cx="40" cy="120" r="4" fill="#059669" />
      {/* Node 4 */}
      <line x1="100" y1="80" x2="160" y2="120" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="160" cy="120" r="12" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <circle cx="160" cy="120" r="4" fill="#EA580C" />
    </svg>
  );
}

export function AcademicLicenceArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Mortarboard Academic Cap */}
      <polygon points="100,30 160,50 100,70 40,50" fill="#EAF6FA" stroke="#0B1F3A" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M 60 60 L 60 85 C 60 95, 140 95, 140 85 L 140 60" stroke="#0B1F3A" strokeWidth="1.5" fill="none" />
      <line x1="150" y1="55" x2="155" y2="85" stroke="#EA580C" strokeWidth="1.5" />
      <circle cx="155" cy="87" r="2.5" fill="#EA580C" />
      {/* Open Book */}
      <g transform="translate(50, 105)">
        <path d="M 0 10 Q 25 0 50 10 L 50 35 Q 25 25 0 35 Z" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.3" />
        <path d="M 50 10 Q 75 0 100 10 L 100 35 Q 75 25 50 35 Z" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.3" />
        <line x1="50" y1="10" x2="50" y2="35" stroke="#0B1F3A" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function PatentShieldArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Patent Protection Shield */}
      <path
        d="M 100 25 L 150 45 C 150 95, 120 125, 100 140 C 80 125, 50 95, 50 45 Z"
        fill="#EAF6FA"
        stroke="#0B1F3A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Magnifier Screen */}
      <g transform="translate(85, 55)">
        <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.8" />
        <line x1="33" y1="33" x2="48" y2="48" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" />
        {/* Chemical Fragment Mark inside lens */}
        <line x1="14" y1="20" x2="26" y2="20" stroke="#EA580C" strokeWidth="1.5" />
        <line x1="20" y1="14" x2="20" y2="26" stroke="#EA580C" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
