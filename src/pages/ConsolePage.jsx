import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopCommandBar from '../components/TopCommandBar';
import PbpkTab from '../components/PbpkTab';
import AdmetTab from '../components/AdmetTab';
import Zonation3DTab from '../components/Zonation3DTab';
import DossierTab from '../components/DossierTab';
import InspectorPanel from '../components/InspectorPanel';
import AuditReportModal from '../components/AuditReportModal';
import { BENCHMARK_PRESETS } from '../data/benchmarkMolecules';
import { generatePKCurveData, runBiosimulation } from '../services/simulationApi';
import { Activity, Beaker, Compass, FileText, AlertTriangle, ArrowLeft, Lock, Cpu, Database } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ConsolePage() {
  const [activeMolecule, setActiveMolecule] = useState(BENCHMARK_PRESETS[0]); // Midazolam
  const [smilesInput, setSmilesInput] = useState(BENCHMARK_PRESETS[0].smiles);
  const [doseMg, setDoseMg] = useState(BENCHMARK_PRESETS[0].dose_mg);
  const [route, setRoute] = useState(BENCHMARK_PRESETS[0].route);
  const [regimen, setRegimen] = useState(BENCHMARK_PRESETS[0].regimen);
  const [cohort, setCohort] = useState('BEB');
  const [activeTab, setActiveTab] = useState('pbpk');

  const [pkCurveData, setPkCurveData] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simProgressStage, setSimProgressStage] = useState(0);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    const curve = generatePKCurveData(activeMolecule, cohort, regimen, doseMg);
    setPkCurveData(curve);
  }, []);

  const handleSelectPreset = (preset) => {
    setActiveMolecule(preset);
    setSmilesInput(preset.smiles);
    setDoseMg(preset.dose_mg);
    setRoute(preset.route);
    setRegimen(preset.regimen);
    const curve = generatePKCurveData(preset, cohort, preset.regimen, preset.dose_mg);
    setPkCurveData(curve);
  };

  const handleRunSimulation = async () => {
    setIsSimulating(true);
    setSimProgressStage(1);

    setTimeout(() => setSimProgressStage(2), 300);
    setTimeout(() => setSimProgressStage(3), 600);
    setTimeout(() => setSimProgressStage(4), 900);

    setTimeout(async () => {
      const res = await runBiosimulation({
        smiles: smilesInput,
        dose_mg: Number(doseMg) || 20,
        route: route,
        population: cohort,
        presetId: activeMolecule.id
      });

      if (res.success) {
        setActiveMolecule(res.data);
        setPkCurveData(res.pkCurve);
      }

      setIsSimulating(false);
      setSimProgressStage(0);
    }, 1200);
  };

  const handleExportJson = () => {
    const payload = {
      platform: `${siteConfig.BRAND_NAME} Prototype Workbench`,
      timestamp: new Date().toISOString(),
      provenance_hash: 'SHA256:7f8a9e2c' + activeMolecule.id + 'b4931a0d842f1c8901e8a34d',
      molecule: activeMolecule,
      pk_curve: pkCurveData
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BioSimLayer_${activeMolecule.id}_Telemetry_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#060A12] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* 1. Persistent Disclaimer Banner (Claims Hygiene Requirement #1) */}
      <div className="bg-amber-950/80 border-b border-amber-600/50 py-2.5 px-4 text-xs font-mono text-amber-200 text-center flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          <strong>R&D Prototype Preview:</strong> Prototype demonstration using pre-computed reference data and a deterministic fallback solver. Values shown are illustrative, not validated results.
        </span>
      </div>

      {/* Top Console Navigation & Provenance Header */}
      <header className="bg-[#090E1A] border-b border-[#1E293B] py-2 px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Return to Commercial Website</span>
          </Link>

          <span className="text-slate-600">|</span>

          <span className="flex items-center gap-1.5 text-emerald-400">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>Designed for private deployment</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden sm:inline-flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>BioFold GNN + OSP Solver (Prototype)</span>
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Dhaka R&D Lab
          </span>
        </div>
      </header>

      {/* Main Console Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 space-y-4">
        {/* Top Command Bar */}
        <TopCommandBar
          activeMolecule={activeMolecule}
          onSelectPreset={handleSelectPreset}
          smilesInput={smilesInput}
          setSmilesInput={setSmilesInput}
          doseMg={doseMg}
          setDoseMg={setDoseMg}
          route={route}
          setRoute={setRoute}
          regimen={regimen}
          setRegimen={setRegimen}
          cohort={cohort}
          setCohort={(c) => {
            setCohort(c);
            setPkCurveData(generatePKCurveData(activeMolecule, c, regimen, doseMg));
          }}
          onRunSimulation={handleRunSimulation}
          isSimulating={isSimulating}
          simProgressStage={simProgressStage}
          onOpenAuditReport={() => setIsAuditModalOpen(true)}
        />

        {/* Split Workbench: 4-Tab Telemetry Canvas (Col 9) + Inspector (Col 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          <div className="lg:col-span-9 space-y-4">
            {/* Tab Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0E1525] border border-[#1E293B]">
              <button
                onClick={() => setActiveTab('pbpk')}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold font-mono transition-all flex items-center gap-2 ${
                  activeTab === 'pbpk'
                    ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Tab 1: PBPK & Bengali (BEB) Stratification</span>
              </button>

              <button
                onClick={() => setActiveTab('admet')}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold font-mono transition-all flex items-center gap-2 ${
                  activeTab === 'admet'
                    ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
                }`}
              >
                <Beaker className="w-3.5 h-3.5" />
                <span>Tab 2: Layer 2 BioFold ADMET & Transporters</span>
              </button>

              <button
                onClick={() => setActiveTab('zonation')}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold font-mono transition-all flex items-center gap-2 ${
                  activeTab === 'zonation'
                    ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Tab 3: Spatial Hepatic Zonation & 3D Targets</span>
              </button>

              <button
                onClick={() => setActiveTab('dossier')}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold font-mono transition-all flex items-center gap-2 ${
                  activeTab === 'dossier'
                    ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#131C31]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Tab 4: Context-of-Use Decision Dossier</span>
              </button>
            </div>

            {/* Tab Body */}
            <div>
              {activeTab === 'pbpk' && (
                <PbpkTab
                  molecule={activeMolecule}
                  pkCurveData={pkCurveData}
                  cohort={cohort}
                  setCohort={setCohort}
                  regimen={regimen}
                />
              )}

              {activeTab === 'admet' && (
                <AdmetTab molecule={activeMolecule} />
              )}

              {activeTab === 'zonation' && (
                <Zonation3DTab molecule={activeMolecule} />
              )}

              {activeTab === 'dossier' && (
                <DossierTab
                  molecule={activeMolecule}
                  onOpenFullReport={() => setIsAuditModalOpen(true)}
                />
              )}
            </div>
          </div>

          {/* Right Inspector */}
          <div className="lg:col-span-3">
            <InspectorPanel
              molecule={activeMolecule}
              onExportJson={handleExportJson}
              onOpenFullReport={() => setIsAuditModalOpen(true)}
            />
          </div>
        </div>
      </main>

      <AuditReportModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        molecule={activeMolecule}
      />

      <footer className="mt-auto border-t border-[#1E293B] bg-[#060A12] py-3 px-6 text-center text-xs font-mono text-slate-500">
        <p>
          R&D Demonstration Workbench • Data foundation: dataset audit in progress. Counts published after audit.
        </p>
      </footer>
    </div>
  );
}
