import React, { useState } from 'react';
import { Activity, Users, ShieldCheck, AlertCircle, Info, ChevronRight, Layers, Sliders } from 'lucide-react';

export default function PbpkTab({ molecule, pkCurveData, cohort, setCohort, regimen }) {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [showObserved, setShowObserved] = useState(true);
  const [showEur, setShowEur] = useState(true);
  const [showCi, setShowCi] = useState(true);

  if (!molecule || !pkCurveData || pkCurveData.length === 0) {
    return (
      <div className="p-8 text-center text-slate-400 font-mono">
        Waiting for biosimulation execution...
      </div>
    );
  }

  // Calculate SVG Dimensions & Scaling
  const width = 840;
  const height = 360;
  const padding = { top: 35, right: 35, bottom: 45, left: 60 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const maxTime = pkCurveData[pkCurveData.length - 1].time || 24;
  
  // Find highest concentration value among all series and limits for scaling
  const maxConcVal = Math.max(
    ...pkCurveData.map(d => Math.max(d.ciHigh || 0, d.simMean || 0, d.obsPoint ? (d.obsPoint + (d.obsError || 0)) : 0)),
    molecule.pk.ctox ? molecule.pk.ctox * 1.05 : 0,
    molecule.pk.cmax_pred * 1.2
  );
  const yMax = maxConcVal > 0 ? maxConcVal * 1.15 : 100;

  const xScale = (t) => padding.left + (t / maxTime) * plotWidth;
  const yScale = (c) => padding.top + plotHeight - (c / yMax) * plotHeight;

  // Build SVG Path strings
  const simPath = pkCurveData.reduce((acc, d, i) => {
    const x = xScale(d.time);
    const y = yScale(d.simMean);
    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const eurPath = pkCurveData.reduce((acc, d, i) => {
    const x = xScale(d.time);
    const y = yScale(d.eurBaseline);
    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  // 90% CI Shaded Area Path
  let ciPath = '';
  if (showCi) {
    const topPath = pkCurveData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d.time)} ${yScale(d.ciHigh)}`).join(' ');
    const bottomPath = [...pkCurveData].reverse().map((d) => `L ${xScale(d.time)} ${yScale(d.ciLow)}`).join(' ');
    ciPath = `${topPath} ${bottomPath} Z`;
  }

  return (
    <div className="space-y-5">
      {/* Epistemic Badges Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-[#0E1525] border border-[#1E293B]">
        <div className="flex flex-wrap items-center gap-2">
          {molecule.provenance.measured ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium badge-measured">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              🟢 MEASURED REFERENCE DATA (PK-DB Clinical Studies)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium badge-calibrated">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              🔵 CALIBRATED MODEL ESTIMATE (Conformal Bound 90%)
            </span>
          )}

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
            Cohort: {cohort === 'BEB' ? 'South Asian Bengali (1000G BEB, 60kg)' : (cohort === 'EUR' ? 'Western European (EUR, 73kg)' : 'Overlay: BEB vs EUR')}
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
            Regimen: {regimen}
          </span>
        </div>

        <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
          <span>Engine: <strong className="text-cyan-400">OSP 2-Comp PBPK Solver</strong></span>
        </div>
      </div>

      {/* KPI Telemetry Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div className="p-3.5 rounded-lg bg-[#0E1525] border border-[#1E293B] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Cmax (Peak Plasma)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-cyan-400">{molecule.pk.cmax_pred}</span>
            <span className="text-xs text-slate-400 font-mono">ng/mL</span>
          </div>
          {molecule.pk.cmax_obs && (
            <p className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center justify-between">
              <span>Obs: {molecule.pk.cmax_obs} ng/mL</span>
              <span className="px-1.5 py-0.2 bg-emerald-950/50 rounded text-[10px] border border-emerald-800/40">
                AFE {molecule.pk.afe}x
              </span>
            </p>
          )}
        </div>

        <div className="p-3.5 rounded-lg bg-[#0E1525] border border-[#1E293B]">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Tmax (Time to Peak)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-slate-100">{molecule.pk.tmax_h}</span>
            <span className="text-xs text-slate-400 font-mono">hours</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">First-pass absorption peak</p>
        </div>

        <div className="p-3.5 rounded-lg bg-[#0E1525] border border-[#1E293B]">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">AUC 0–24h (Exposure)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-indigo-400">{molecule.pk.auc0_24}</span>
            <span className="text-xs text-slate-400 font-mono">ng·h/mL</span>
          </div>
          {molecule.pk.auc_obs && (
            <p className="text-[11px] font-mono text-emerald-400 mt-1">
              Obs: {molecule.pk.auc_obs} ng·h/mL
            </p>
          )}
        </div>

        <div className="p-3.5 rounded-lg bg-[#0E1525] border border-[#1E293B]">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Elimination Half-Life (t½)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-blue-400">{molecule.pk.thalf_h}</span>
            <span className="text-xs text-slate-400 font-mono">hours</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            ke = {(Math.LN2 / molecule.pk.thalf_h).toFixed(3)} h⁻¹
          </p>
        </div>

        <div className="p-3.5 rounded-lg bg-[#0E1525] border border-[#1E293B]">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Total Clearance (CLtot)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-emerald-400">{molecule.pk.cl_tot}</span>
            <span className="text-xs text-slate-400 font-mono">L/h</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Vdss = {molecule.pk.vd_ss} L/kg
          </p>
        </div>
      </div>

      {/* Main Chart Container */}
      <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B] shadow-xl">
        {/* Chart Header & Interactive Layer Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-[#1E293B]">
          <div>
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              24-Hour Plasma Concentration-Time Profile [Cp(t)]
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              South Asian Bengali (BEB, 60kg) vs Western European (EUR, 73kg) with 1,000-Virtual-Patient Monte Carlo Envelope
            </p>
          </div>

          {/* Interactive Legend Checkboxes */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setShowCi(!showCi)}
              className={`px-2.5 py-1 rounded font-mono flex items-center gap-1.5 transition-all ${
                showCi ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' : 'bg-slate-900 text-slate-500 border border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded bg-cyan-400/50" />
              90% CI Envelope (n=1,000)
            </button>

            <button
              onClick={() => setShowEur(!showEur)}
              className={`px-2.5 py-1 rounded font-mono flex items-center gap-1.5 transition-all ${
                showEur ? 'bg-slate-800 text-slate-300 border border-slate-600' : 'bg-slate-900 text-slate-500 border border-slate-800'
              }`}
            >
              <span className="w-2.5 h-0.5 bg-slate-400 border-b border-dashed border-slate-400" />
              Western Baseline (EUR)
            </button>

            {molecule.provenance.measured && (
              <button
                onClick={() => setShowObserved(!showObserved)}
                className={`px-2.5 py-1 rounded font-mono flex items-center gap-1.5 transition-all ${
                  showObserved ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-slate-900 text-slate-500 border border-slate-800'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Observed PK-DB Points
              </button>
            )}
          </div>
        </div>

        {/* SVG Canvas Area */}
        <div className="relative w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto select-none font-mono"
            style={{ minWidth: '680px' }}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <defs>
              {/* Cyan CI Gradient */}
              <linearGradient id="ciGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.04" />
              </linearGradient>

              {/* Grid pattern */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.75" />
              </pattern>
            </defs>

            {/* Background & Grid */}
            <rect x={padding.left} y={padding.top} width={plotWidth} height={plotHeight} fill="#090E1A" />
            <rect x={padding.left} y={padding.top} width={plotWidth} height={plotHeight} fill="url(#grid)" opacity="0.6" />

            {/* Horizontal Grid lines & Y-Axis Labels */}
            {[0, 0.25, 0.5, 0.75, 1.0].map((ratio, idx) => {
              const val = (yMax * ratio).toFixed(1);
              const yPos = padding.top + plotHeight - ratio * plotHeight;
              return (
                <g key={idx}>
                  <line
                    x1={padding.left}
                    y1={yPos}
                    x2={padding.left + plotWidth}
                    y2={yPos}
                    stroke="#1E293B"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={padding.left - 10}
                    y={yPos + 4}
                    textAnchor="end"
                    fill="#64748B"
                    fontSize="10"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Vertical Time Grid lines & X-Axis Labels */}
            {[0, 4, 8, 12, 16, 20, 24].filter(t => t <= maxTime).map((t, idx) => {
              const xPos = xScale(t);
              return (
                <g key={idx}>
                  <line
                    x1={xPos}
                    y1={padding.top}
                    x2={xPos}
                    y2={padding.top + plotHeight}
                    stroke="#1E293B"
                    strokeDasharray="2 2"
                  />
                  <text
                    x={xPos}
                    y={padding.top + plotHeight + 18}
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="11"
                  >
                    {t}h
                  </text>
                </g>
              );
            })}

            {/* Axis Titles */}
            <text
              x={padding.left + plotWidth / 2}
              y={height - 8}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="11"
              fontWeight="500"
            >
              Time Post-Dose (Hours)
            </text>

            <text
              transform={`rotate(-90)`}
              x={-(padding.top + plotHeight / 2)}
              y={18}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="11"
              fontWeight="500"
            >
              Plasma Concentration Cp (ng/mL)
            </text>

            {/* Minimum Effective Concentration (MEC) Line */}
            {molecule.pk.mec && yScale(molecule.pk.mec) >= padding.top && (
              <g>
                <line
                  x1={padding.left}
                  y1={yScale(molecule.pk.mec)}
                  x2={padding.left + plotWidth}
                  y2={yScale(molecule.pk.mec)}
                  stroke="#10B981"
                  strokeWidth="1.2"
                  strokeDasharray="5 3"
                />
                <text
                  x={padding.left + plotWidth - 6}
                  y={yScale(molecule.pk.mec) - 4}
                  textAnchor="end"
                  fill="#10B981"
                  fontSize="9.5"
                  fontWeight="600"
                >
                  MEC Target: {molecule.pk.mec} ng/mL
                </text>
              </g>
            )}

            {/* Toxicity Alert Line (Ctox) */}
            {molecule.pk.ctox && yScale(molecule.pk.ctox) >= padding.top && (
              <g>
                <line
                  x1={padding.left}
                  y1={yScale(molecule.pk.ctox)}
                  x2={padding.left + plotWidth}
                  y2={yScale(molecule.pk.ctox)}
                  stroke="#E11D48"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <text
                  x={padding.left + plotWidth - 6}
                  y={yScale(molecule.pk.ctox) - 4}
                  textAnchor="end"
                  fill="#E11D48"
                  fontSize="9.5"
                  fontWeight="600"
                >
                  ⚠️ Toxicity / Arrhythmia Threshold (Ctox): {molecule.pk.ctox} ng/mL
                </text>
              </g>
            )}

            {/* Shaded Monte Carlo 90% CI Envelope */}
            {showCi && ciPath && (
              <path d={ciPath} fill="url(#ciGradient)" />
            )}

            {/* Western EUR Baseline (Dashed Slate) */}
            {showEur && (
              <path
                d={eurPath}
                fill="none"
                stroke="#64748B"
                strokeWidth="1.8"
                strokeDasharray="4 4"
              />
            )}

            {/* Bengali BEB Simulated Mean (Solid Cyan) */}
            <path
              d={simPath}
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))"
            />

            {/* Observed Human Clinical Data Points (PK-DB) */}
            {showObserved && molecule.provenance.measured && pkCurveData.map((d, idx) => {
              if (d.obsPoint === null) return null;
              const cx = xScale(d.time);
              const cy = yScale(d.obsPoint);
              const errTop = yScale(d.obsPoint + (d.obsError || 0));
              const errBot = yScale(Math.max(0, d.obsPoint - (d.obsError || 0)));

              return (
                <g key={`obs-${idx}`} className="cursor-pointer">
                  {/* Error bar */}
                  <line x1={cx} y1={errTop} x2={cx} y2={errBot} stroke="#10B981" strokeWidth="1.2" opacity="0.8" />
                  <line x1={cx - 3} y1={errTop} x2={cx + 3} y2={errTop} stroke="#10B981" strokeWidth="1.2" />
                  <line x1={cx - 3} y1={errBot} x2={cx + 3} y2={errBot} stroke="#10B981" strokeWidth="1.2" />

                  {/* Scatter dot */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#10B981"
                    stroke="#060A12"
                    strokeWidth="1.5"
                    className="transition-transform hover:scale-150"
                  />
                </g>
              );
            })}

            {/* Interactive Crosshair & Hover Target */}
            {pkCurveData.map((d, idx) => {
              const xPos = xScale(d.time);
              return (
                <rect
                  key={`hover-zone-${idx}`}
                  x={xPos - (plotWidth / pkCurveData.length) / 2}
                  y={padding.top}
                  width={plotWidth / pkCurveData.length}
                  height={plotHeight}
                  fill="transparent"
                  onMouseEnter={() => setHoveredPoint(d)}
                  className="cursor-crosshair"
                />
              );
            })}

            {/* Active Hover Crosshair Line */}
            {hoveredPoint && (
              <g pointerEvents="none">
                <line
                  x1={xScale(hoveredPoint.time)}
                  y1={padding.top}
                  x2={xScale(hoveredPoint.time)}
                  y2={padding.top + plotHeight}
                  stroke="#38BDF8"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle
                  cx={xScale(hoveredPoint.time)}
                  cy={yScale(hoveredPoint.simMean)}
                  r="5"
                  fill="#06B6D4"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </g>
            )}
          </svg>

          {/* Floating Tooltip Card */}
          {hoveredPoint && (
            <div
              className="absolute pointer-events-none z-30 p-2.5 rounded bg-[#090E1A]/95 border border-cyan-500/40 shadow-2xl backdrop-blur-md text-xs font-mono"
              style={{
                left: `${Math.min(Math.max(xScale(hoveredPoint.time) - 80, 70), width - 200)}px`,
                top: '20px'
              }}
            >
              <div className="font-bold text-slate-200 border-b border-slate-800 pb-1 mb-1.5 flex items-center justify-between">
                <span>T = {hoveredPoint.time} h</span>
                <span className="text-[10px] text-cyan-400 font-normal">PBPK Telemetry</span>
              </div>
              <div className="space-y-1">
                <p className="text-cyan-300 font-semibold flex items-center justify-between gap-4">
                  <span>BEB Mean (60kg):</span>
                  <span>{hoveredPoint.simMean} ng/mL</span>
                </p>
                <p className="text-slate-400 flex items-center justify-between gap-4">
                  <span>EUR Baseline (73kg):</span>
                  <span>{hoveredPoint.eurBaseline} ng/mL</span>
                </p>
                {showCi && (
                  <p className="text-cyan-500/80 text-[10px] flex items-center justify-between gap-4">
                    <span>90% CI Range:</span>
                    <span>[{hoveredPoint.ciLow} – {hoveredPoint.ciHigh}]</span>
                  </p>
                )}
                {hoveredPoint.obsPoint !== null && (
                  <p className="text-emerald-400 font-semibold pt-1 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    <span>Observed PK-DB:</span>
                    <span>{hoveredPoint.obsPoint} ± {hoveredPoint.obsError} ng/mL</span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Patient Stratification Panel (VeriSIM-style Subgroup Blocks) */}
      <div className="p-4 rounded-lg bg-[#0E1525] border border-[#1E293B]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-semibold text-slate-200">
              South Asian Bengali (1000 Genomes BEB) Pharmacogenomic Stratification (n=1,000 Virtual Patients)
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-400">
            ICRP-89 Reference: 60 kg South Asian Standard
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* CYP2C19 Block */}
          <div className="p-3 rounded bg-[#131C31] border border-[#1E293B] hover:border-slate-600 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold font-mono text-cyan-300">CYP2C19 *2/*3</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                Freq: {molecule.genetics_beb.cyp2c19_loss.freq}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mb-1">Poor / Intermediate Metabolizer</p>
            <p className="text-xs text-slate-400 leading-relaxed font-mono text-[11px]">
              {molecule.genetics_beb.cyp2c19_loss.effect}
            </p>
          </div>

          {/* CYP2D6 Block */}
          <div className="p-3 rounded bg-[#131C31] border border-[#1E293B] hover:border-slate-600 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold font-mono text-blue-300">CYP2D6 *10</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-950 text-blue-400 border border-blue-800/40">
                Freq: {molecule.genetics_beb.cyp2d6_low.freq}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mb-1">Decreased Function Allele</p>
            <p className="text-xs text-slate-400 leading-relaxed font-mono text-[11px]">
              {molecule.genetics_beb.cyp2d6_low.effect}
            </p>
          </div>

          {/* CYP3A5 Block */}
          <div className="p-3 rounded bg-[#131C31] border border-[#1E293B] hover:border-slate-600 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold font-mono text-emerald-300">CYP3A5 *1 Expressor</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                Freq: {molecule.genetics_beb.cyp3a5_active.freq}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mb-1">Active High-Clearance Subgroup</p>
            <p className="text-xs text-slate-400 leading-relaxed font-mono text-[11px]">
              {molecule.genetics_beb.cyp3a5_active.effect}
            </p>
          </div>
        </div>

        {/* Population Clinical Caution / Special Note */}
        {molecule.genetics_beb.renal_alert && (
          <div className="mt-3 p-2.5 rounded bg-amber-950/40 border border-amber-600/40 text-amber-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Narrow Therapeutic Index Caution:</strong> {molecule.genetics_beb.renal_alert}</span>
          </div>
        )}

        {molecule.genetics_beb.mitochondrial_alert && (
          <div className="mt-3 p-2.5 rounded bg-rose-950/50 border border-rose-600/50 text-rose-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span><strong>Critical Toxicity Warning:</strong> {molecule.genetics_beb.mitochondrial_alert}</span>
          </div>
        )}
      </div>
    </div>
  );
}
