/**
 * Commercial Model, WTO TRIPS Clock Scenarios, and 6-Stage Evidence-Gated Roadmap
 */

export const TRIPS_SCENARIOS = [
  {
    id: 'scenario_a',
    code: 'Scenario A',
    title: '24 Nov 2026 Graduation',
    subtitle: 'Standard LDC Graduation (No Extension)',
    urgency: 'HIGH CRITICAL',
    badgeColor: 'border-rose-500 text-rose-400 bg-rose-500/10',
    description: 'Immediate patent waiver expiration. Bangladeshi pharma must independently synthesize complex APIs at Munshiganj and prove non-infringement / bioequivalence without TRIPS waiver buffer.',
    impact: 'Urgent demand for in silico ICH M7 impurity triage & BCS biowaivers within 6–12 months.'
  },
  {
    id: 'scenario_b',
    code: 'Scenario B',
    title: '24 Nov 2029 Requested Deferral',
    subtitle: 'Requested 3-Year Transition Buffer',
    urgency: 'MODERATE URGENCY',
    badgeColor: 'border-cyan-500 text-cyan-400 bg-cyan-500/10',
    description: 'Commerce Ministry proposed post-graduation bridge. Grants a 36-month window to systematically deploy the Computational Safety Consortium and transition top 20 manufacturers.',
    impact: 'Ideal runway to scale triage study revenue ($100K -> $300K) and transition to enterprise subscriptions.'
  },
  {
    id: 'scenario_c',
    code: 'Scenario C',
    title: '1 Jan 2033 WTO Outer Limit',
    subtitle: 'General LDC Pharma Waiver Boundary',
    urgency: 'LONG-RANGE STRATEGIC',
    badgeColor: 'border-indigo-500 text-indigo-400 bg-indigo-500/10',
    description: 'The outermost WTO TRIPS Council general deadline for least developed nations.',
    impact: 'Full maturation into global NAMs platform exporting to Southeast Asia and MENA markets.'
  }
];

export const COMMERCIAL_PHASES = [
  {
    phase: 'Phase 1',
    name: 'VALIDATE',
    timeline: 'Months 1–12',
    leadMetric: '15 Benchmark Scorecards',
    accentColor: '#10B981',
    description: 'Establish scientific authority through the Bangladesh Pharmaceutical Computational Safety Consortium.',
    partners: 'Dhaka University (DU) Dept. of Clinical Pharmacy, BUET Biochemical Engineering, IUBAT, and partner CROs.',
    deliverable: 'Pre-registered blind evaluation on 15 benchmark molecules (Midazolam, Digoxin, FIAU, etc.) showing AFE ≤ 1.30x and AUROC ≥ 0.85.',
    commercialGoal: 'Pre-condition for customer trust; eliminates regulatory skepticism before selling software.'
  },
  {
    phase: 'Phase 2',
    name: 'SERVE',
    timeline: 'Months 6–18',
    leadMetric: '$3,500 – $4,500 / Study',
    accentColor: '#06B6D4',
    description: 'Fixed-Scope Research Triage Studies for complex generic API and formulation development.',
    partners: 'Top 10 Dhaka pharma manufacturers (Beximco, Square, Incepta, Renata, Eskayef).',
    deliverable: '1-Page Regulatory Decision Dossier delivered in ≤ 72 hours, ranking wet-lab assays and de-risking bioequivalence.',
    commercialGoal: 'Priced at 20%–25% of avoided wet-lab costs ($15,000–$25,000). Paid directly from routine R&D OpEx without CapEx friction.'
  },
  {
    phase: 'Phase 3',
    name: 'SUBSCRIBE',
    timeline: 'Months 12–24+',
    leadMetric: '$24K – $48K / Year License',
    accentColor: '#6366F1',
    description: 'Annual Organ-Module Software Licenses for in-house formulation and regulatory teams.',
    partners: 'Enterprise R&D teams operating private VPC or dedicated on-premise clusters.',
    deliverable: 'BioFold GNN + PBPK engine with unlimited batch SMILES screening, private tenant isolation, and automated ICH M15 reports.',
    commercialGoal: 'Unlocked strictly after ≥ 2 completed paid triage studies, creating an irresistible, proven land-and-expand sales pipeline.'
  }
];

export const ROADMAP_STAGES = [
  {
    stageId: 'stage_00',
    number: '00',
    title: 'Demonstrate (Hero MVP & Benchmarks)',
    status: 'In Progress',
    statusClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/40',
    isCurrent: true,
    gate: 'Gate 0: AFE ≤ 1.30x on 15 compounds; ChEMBL 37 Transporter integration verified',
    deliverable: 'Stage 00 Live Simulation Workbench, 3 benchmark presets, 72h pilot triage report',
    fundingCeiling: '$45,000',
    revenue: {
      planning: '$20,000',
      stretch: '$60,000'
    },
    activities: [
      'Core BioFold GNN v2.4 + 2-compartment OSP PBPK ODE numerical solver',
      'Extraction of 2,260 human transporter inhibition rows from ChEMBL 37',
      'Integration of 1000 Genomes Bengali (BEB, 60kg) pharmacogenomic allele distribution',
      'Zero-leakage private deployment simulation fallback architecture'
    ]
  },
  {
    stageId: 'stage_01',
    number: '01',
    title: 'Pilot Studies & Consortium Foundation',
    status: 'Unlocks after Gate 0',
    statusClass: 'text-slate-400 bg-slate-800/40 border-slate-700',
    isCurrent: false,
    gate: 'Gate 1: 5 completed paid triage studies ($3.5K–$4.5K); ≥ 80% client repeat intent',
    deliverable: '5 validated client triage dossiers; DU/BUET blind test replication report',
    fundingCeiling: '$120,000',
    revenue: {
      planning: '$100,000',
      stretch: '$185,000'
    },
    activities: [
      'Formalize the Bangladesh Pharmaceutical Computational Safety Consortium',
      'First 5 commercial paid triage studies for local formulation leaders',
      'Alignment of Context-of-Use dossiers with FDA March 2026 Draft NAMs framework',
      'Automated PDF/Audit dossier generator with cryptographic SHA-256 signatures'
    ]
  },
  {
    stageId: 'stage_02',
    number: '02',
    title: 'Expand Assays & Complex Generic Formulations',
    status: 'Unlocks after Gate 1',
    statusClass: 'text-slate-400 bg-slate-800/40 border-slate-700',
    isCurrent: false,
    gate: 'Gate 2: Ames mutagenicity accuracy ≥ 85%; FaSSIF dissolution correlation R² ≥ 0.82',
    deliverable: 'ICH M7 Dual-(Q)SAR Impurity Module; Munshiganj API Salt Selection Suite',
    fundingCeiling: '$250,000',
    revenue: {
      planning: '$300,000',
      stretch: '$510,000'
    },
    activities: [
      'Munshiganj API Park active deployment: Impurity purge factor calculations',
      'BCS Class II/IV biowaiver dissolution prediction (FaSSIF / FeSSIF)',
      'Dual-(Q)SAR ICH M7 Class 1–5 consensus rule engine with structural alert visualization',
      'Pre-IND dossier generation for US FDA / WHO prequalification filings'
    ]
  },
  {
    stageId: 'stage_03',
    number: '03',
    title: 'BioSimLayer Software Platform Beta',
    status: 'Unlocks after Gate 2',
    statusClass: 'text-slate-400 bg-slate-800/40 border-slate-700',
    isCurrent: false,
    gate: 'Gate 3: ≥ 4 converted enterprise annual subscriptions ($24K–$48K/yr); 0 security leaks',
    deliverable: 'Enterprise VPC SaaS & On-Premises Containerized Console',
    fundingCeiling: 'Series A / Self-Sustaining',
    revenue: {
      planning: '$650,000',
      stretch: '$1,100,000'
    },
    activities: [
      'Launch annual enterprise software subscription model',
      'Private tenant VPC deployment with SOC2 / 21 CFR Part 11 audit logging',
      'High-throughput library screening (10,000+ molecules/hour)',
      'Direct LIMS integration for automated wet-lab triage handoff'
    ]
  },
  {
    stageId: 'stage_04',
    number: '04',
    title: 'Multi-Organ Mechanistic Extensions',
    status: 'Unlocks after Gate 3',
    statusClass: 'text-slate-400 bg-slate-800/40 border-slate-700',
    isCurrent: false,
    gate: 'Gate 4: Renal proximal tubule clearance model calibrated against in vivo Digoxin clinical data',
    deliverable: 'Renal Porous-Media Module + Cardiac hERG/QTc Electro-Physiology Module',
    fundingCeiling: 'Self-Sustaining Expansion',
    revenue: {
      planning: '$1,200,000',
      stretch: '$2,400,000'
    },
    activities: [
      'Porous-media PDE solver for renal proximal tubule secretion (OAT1/3, OCT2, MATE1)',
      'Cardiac electro-physiology QTc arrhythmia prolongation prediction',
      'Pediatric and geriatric physiological scaling matrices'
    ]
  },
  {
    stageId: 'stage_05',
    number: '05',
    title: 'Regional Export & Global NAMs Qualification',
    status: 'Unlocks after Gate 4',
    statusClass: 'text-slate-400 bg-slate-800/40 border-slate-700',
    isCurrent: false,
    gate: 'Gate 5: Formal qualification package accepted for review by US FDA / EMA NAMs office',
    deliverable: 'Global Regulatory Qualification Package; International Commercial Portal',
    fundingCeiling: 'Global Growth',
    revenue: {
      planning: '$2,800,000',
      stretch: '$5,200,000'
    },
    activities: [
      'Expansion into ASEAN and GCC generic pharmaceutical hubs',
      'Official FDA / EMA New Approach Methodologies (NAMs) formal tool qualification',
      'Decentralized trial digital twin integration for clinical bioequivalence'
    ]
  }
];
