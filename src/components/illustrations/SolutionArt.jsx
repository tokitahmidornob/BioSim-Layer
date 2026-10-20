import React from 'react';

// Style rules: 1.5px navy line (#0B1F3A @ ~80%), pale-cyan fills, coral accent (#EA580C), rounded joins

export function ApiReactorArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Chemical Reactor Vessel Outline */}
      <rect x="65" y="40" width="70" height="85" rx="35" fill="#EAF6FA" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Reactor Feet */}
      <line x1="75" y1="125" x2="65" y2="145" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="125" y1="125" x2="135" y2="145" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Top Agitator Motor */}
      <rect x="90" y="20" width="20" height="20" rx="3" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="100" y1="40" x2="100" y2="105" stroke="#0E7490" strokeWidth="1.5" />
      {/* Impeller Blades */}
      <line x1="85" y1="105" x2="115" y2="105" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
      {/* Inlet / Outlet Pipe Manifolds */}
      <path d="M 40 60 L 65 60" stroke="#0B1F3A" strokeWidth="1.5" />
      <path d="M 135 90 L 160 90" stroke="#0B1F3A" strokeWidth="1.5" />
      <circle cx="40" cy="60" r="3" fill="#06B6D4" />
      <circle cx="160" cy="90" r="3" fill="#EA580C" />
    </svg>
  );
}

export function TabletPressArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Upper Compression Punch */}
      <rect x="88" y="20" width="24" height="40" rx="2" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="100" y1="60" x2="100" y2="70" stroke="#0E7490" strokeWidth="2" />
      {/* Die Table Surface */}
      <rect x="40" y="75" width="120" height="15" rx="3" fill="#EAF6FA" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Compressed Core Tablet in Die */}
      <ellipse cx="100" cy="82" rx="14" ry="5" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.5" />
      {/* Lower Compression Punch */}
      <rect x="88" y="100" width="24" height="40" rx="2" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      <line x1="100" y1="90" x2="100" y2="100" stroke="#0E7490" strokeWidth="2" />
      {/* Blister Profile Lines */}
      <circle cx="55" cy="115" r="8" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="145" cy="115" r="8" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

export function CroFlaskArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* CRO Laboratory Building Backdrop Outline */}
      <rect x="110" y="30" width="60" height="110" rx="4" fill="#F5F9FC" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Lab Windows */}
      <rect x="122" y="45" width="12" height="12" rx="1" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1" />
      <rect x="146" y="45" width="12" height="12" rx="1" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1" />
      <rect x="122" y="70" width="12" height="12" rx="1" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1" />
      <rect x="146" y="70" width="12" height="12" rx="1" fill="#FFFFFF" stroke="#0E7490" strokeWidth="1" />
      {/* Foreground Erlenmeyer Flask */}
      <path
        d="M 65 50 L 75 50 L 75 80 L 45 130 C 42 135, 47 140, 53 140 L 97 140 C 103 140, 108 135, 105 130 L 75 80 L 75 50 L 85 50"
        stroke="#0B1F3A"
        strokeWidth="1.5"
        fill="#EAF6FA"
      />
      {/* Assay Meniscus Line */}
      <path d="M 52 120 Q 75 125 98 120" stroke="#EA580C" strokeWidth="1.5" />
      <circle cx="75" cy="105" r="3" fill="#EA580C" opacity="0.8" />
    </svg>
  );
}

export function UniversityCampusArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Academic Institute Pediment Roof */}
      <polygon points="100,25 170,55 30,55" fill="#EAF6FA" stroke="#0B1F3A" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Columns */}
      <line x1="55" y1="55" x2="55" y2="125" stroke="#0B1F3A" strokeWidth="2" />
      <line x1="85" y1="55" x2="85" y2="125" stroke="#0B1F3A" strokeWidth="2" />
      <line x1="115" y1="55" x2="115" y2="125" stroke="#0B1F3A" strokeWidth="2" />
      <line x1="145" y1="55" x2="145" y2="125" stroke="#0B1F3A" strokeWidth="2" />
      {/* Base Foundation Steps */}
      <rect x="25" y="125" width="150" height="15" rx="2" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
      {/* Research Crest Emblem */}
      <circle cx="100" cy="45" r="6" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.5" />
    </svg>
  );
}

export function StartupBiotechArt({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Lightbulb Bulb Outline */}
      <path
        d="M 75 80 C 65 70, 65 45, 80 30 C 95 15, 120 20, 130 35 C 138 48, 135 70, 125 80 L 120 95 L 80 95 Z"
        fill="#FFF7ED"
        stroke="#0B1F3A"
        strokeWidth="1.5"
      />
      {/* Lightbulb Base Screw */}
      <rect x="85" y="95" width="30" height="8" rx="2" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.2" />
      <rect x="88" y="103" width="24" height="6" rx="2" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.2" />
      <path d="M 94 109 L 106 109" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Molecule Filament Core */}
      <g transform="translate(100, 52)">
        <circle cx="0" cy="0" r="5" fill="#EA580C" />
        <circle cx="-16" cy="-10" r="3.5" fill="#0E7490" />
        <circle cx="16" cy="-10" r="3.5" fill="#0E7490" />
        <line x1="0" y1="0" x2="-16" y2="-10" stroke="#EA580C" strokeWidth="1.2" />
        <line x1="0" y1="0" x2="16" y2="-10" stroke="#EA580C" strokeWidth="1.2" />
      </g>
      {/* Discovery Radiance Rays */}
      <line x1="100" y1="12" x2="100" y2="4" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="55" y1="35" x2="48" y2="28" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="145" y1="35" x2="152" y2="28" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
