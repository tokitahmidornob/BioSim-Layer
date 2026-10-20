/**
 * BioSimLayer Central Content Data Store
 * Single source of truth for all marketing copy, services, market estimates, and regulatory positions.
 * Strict claims hygiene: no forbidden marketing hype, every claim tagged with status.
 */

import { siteConfig } from './siteConfig';

export const siteContent = {
  brand: {
    name: siteConfig.BRAND_NAME,
    tagline: siteConfig.TAGLINE,
    foundedLocation: siteConfig.LOCATION,
    statusAsOf: siteConfig.statusAsOfDate,
    disclaimer: 'BioSimLayer provides decision-support analysis. It does not replace laboratory or clinical testing and does not guarantee safety, efficacy or regulatory acceptance.'
  },

  nav: {
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Why Bangladesh', href: '/why-bangladesh' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'About', href: '/about' }
    ],
    ctaPrimary: { label: 'Request a Pilot', href: '/contact' },
    ctaSecondary: { label: 'Investors', href: '/investors' },
    consoleLink: { label: 'R&D Prototype', href: '/console' }
  },

  home: {
    hero: {
      eyebrow: siteConfig.TAGLINE,
      h1: 'A world where no human has to be the first test subject.',
      sub: 'BioSimLayer helps pharmaceutical teams decide which experiment to run next. We combine mechanistic pharmacokinetic modelling with AI and report uncertainty on every result. Built in Dhaka, designed to scale across emerging markets.',
      ctaPrimary: { label: 'Request a Pilot', href: '/contact' },
      ctaSecondary: { label: 'See How It Works', href: '/platform' },
      consoleCta: { label: 'Explore the R&D prototype', href: '/console' },
      capabilities: [
        { label: 'Concentration-time simulation', status: 'PROTOTYPE' },
        { label: 'Uncertainty reporting', status: 'IN DEVELOPMENT' },
        { label: 'Private deployment', status: 'PLANNED' },
        { label: 'South Asian population calibration', status: 'IN VALIDATION' }
      ]
    },

    problem: {
      title: 'Drug development still makes people the first test.',
      fialuridineStory: {
        headline: 'The 1993 Fialuridine (FIAU) Tragedy',
        text: 'In 1993 an experimental hepatitis B drug, fialuridine, passed animal studies. In a human trial, five patients died and two needed emergency liver transplants. Preclinical models had not predicted the toxicity.',
        takeaway: 'Preclinical models can miss human-specific toxicity.',
        citation: 'McKenzie et al., N Engl J Med 1995; 333:1099-1105'
      },
      stats: [
        {
          value: '~90%',
          label: 'Clinical trial attrition',
          desc: 'Drug candidates entering clinical development fail',
          sourceName: 'Sun et al., Acta Pharm Sin B 2022'
        },
        {
          value: '10–15 yrs',
          label: 'Average development cycle',
          desc: 'To advance from initial discovery to approved medicine',
          sourceName: 'PhRMA Industry Profile'
        },
        {
          value: '~$2.6B',
          label: 'Capitalized cost per drug',
          desc: 'Estimated average cost per approved drug, including failures',
          sourceName: 'DiMasi et al., Tufts CSDD 2016'
        }
      ]
    },

    bangladeshPressure: {
      badge: 'National Industrial Transition',
      title: 'Bangladesh’s Pharmaceutical Inflection Point',
      body: 'Around 90% of active pharmaceutical ingredients are imported (roughly US$1.2–1.3B a year, per BIDA). Only a handful of the 27 plots allotted at Munshiganj API Park are operating. As LDC graduation and the TRIPS transition approach, manufacturers must move from copying toward differentiating.',
      cta: { label: 'Explore the Bangladesh Market Context', href: '/why-bangladesh' }
    },

    pillars: [
      {
        num: '01',
        title: 'Prioritise the next experiment',
        desc: 'Instead of running costly screening arrays blind, rank physical wet-lab assays by information value and expected risk reduction.'
      },
      {
        num: '02',
        title: 'Quantify uncertainty',
        desc: 'Every endpoint includes calibrated confidence intervals and applicability-domain checks. Out-of-domain predictions are explicitly flagged.'
      },
      {
        num: '03',
        title: 'Document every decision',
        desc: 'Generate audit-ready decision dossiers capturing exact model versions, data lineage, context of use, and boundary limitations.'
      }
    ],

    differentiators: [
      {
        title: 'Mechanistic curves, not just scores',
        desc: 'Provides full 24-hour plasma concentration-time profiles, organ clearance rates, and spatial zonation, not single black-box affinity scores.',
        status: 'BUILT'
      },
      {
        title: 'Uncertainty and applicability domain warnings',
        desc: 'Rigorous Tanimoto nearest-neighbor distance calculation against training substrates with conformal prediction intervals.',
        status: 'IN DEVELOPMENT'
      },
      {
        title: 'Private deployment architecture',
        desc: 'Architected for client-isolated VPC or on-premise execution with zero molecular structure retention or public model training.',
        status: 'PLANNED'
      },
      {
        title: 'South Asian physiology and allele calibration',
        desc: 'Incorporating 60kg ICRP-89 body weight standard and 1000 Genomes Bengali (BEB) CYP2C19/CYP3A5 allele frequencies.',
        status: 'IN VALIDATION'
      },
      {
        title: 'Patent-aware triage add-on',
        desc: 'Early synthesis screening to identify non-infringing synthetic routes and prompt timely consultation with patent counsel.',
        status: 'PLANNED'
      },
      {
        title: 'Local validation data flywheel',
        desc: 'University and CRO consortium generating blind benchmark comparisons on regional generic formulations.',
        status: 'PLANNED'
      },
      {
        title: 'Accessible fixed-scope pricing',
        desc: 'Study fees pegged at roughly 20–25% of avoided physical assay expenditure, payable out of routine R&D testing OpEx.',
        status: 'PROPOSED'
      }
    ],

    faq: [
      {
        q: 'Does BioSimLayer replace laboratory or clinical testing?',
        a: 'No. BioSimLayer is a decision-support platform designed to help research teams choose which physical experiment to run next. It does not replace physical assays, clinical trials, or formal regulatory evaluations.'
      },
      {
        q: 'Is the platform validated?',
        a: 'Validation is currently in progress. The prototype incorporates established analytical PBPK equations and public benchmark data. Our formal empirical validation scorecard will be published upon completion of the Stage 01 validation gate.'
      },
      {
        q: 'Is BioSimLayer approved or accepted by the US FDA or DGDA?',
        a: 'No. BioSimLayer holds no regulatory approval, endorsement, or formal tool qualification from the US FDA, Bangladesh DGDA, or any other agency. Our dossiers are structured around published principles in draft FDA NAM guidance and ICH M15 discussions.'
      },
      {
        q: 'Where do client chemical structures and data go?',
        a: 'The platform is designed for private deployment. In production, client SMILES strings and formulation data never leave the client’s private VPC or containerized environment, with zero data retention on public servers.'
      },
      {
        q: 'What does BioSimLayer cost?',
        a: 'We operate a gated commercial model. Proposed fixed-scope triage studies are priced at US$3,500–$4,500 per study (payable from routine OpEx). Annual organ-module subscriptions (US$20,000–$50,000/yr) are unlocked strictly after completing two paid pilot studies.'
      },
      {
        q: 'Who owns the final regulatory assessment?',
        a: 'The client. BioSimLayer provides computational decision support and uncertainty documentation. All interpretations, regulatory submissions, and safety declarations remain the sole responsibility of the sponsor company’s qualified scientists and regulatory officers.'
      }
    ]
  },

  platform: {
    headline: 'Four layers, one decision record.',
    sub: 'From chemical structure verification to audit-ready context of use, every step is mathematically bounded and logged.',
    layers: [
      {
        layer: 'Layer 1',
        name: 'Provenance & Data Quality',
        desc: 'Chemical structure standardisation, source data lineage tracking, and applicability-domain verification using Tanimoto nearest-neighbor similarity. Explicitly warns when molecules fall outside training space.',
        status: 'BUILT'
      },
      {
        layer: 'Layer 2',
        name: 'Property & Transport Prediction',
        desc: 'Multi-task predictions for permeability (Caco-2, PAMPA), distribution, CYP inhibition (1A2, 2C9, 2C19, 2D6, 3A4), and critical transporters (BSEP, OATP1B1, OCT2, OAT1/3, MATE1) with calibrated prediction intervals.',
        status: 'IN DEVELOPMENT'
      },
      {
        layer: 'Layer 3',
        name: 'Mechanistic PBPK & Populations',
        desc: 'Numerical concentration-time plasma profiling and virtual patient population simulation. Incorporates South Asian reference physiology (60 kg, ICRP-89) and regional CYP allele frequencies from 1000 Genomes BEB.',
        status: 'IN VALIDATION',
        caution: 'A reference weight and an allele table alone are not regional calibration; we claim calibration only where validated.'
      },
      {
        layer: 'Layer 4',
        name: 'Decision Dossier',
        desc: 'Standardized 1-page regulatory and R&D decision reports featuring structured context-of-use tables, documented limitations, ranked next physical experiments, and immutable model version hashes.',
        status: 'BUILT'
      }
    ],

    whatWeDo: [
      'Prioritise candidate formulations and rank next physical wet-lab assays',
      'Provide 24-hour pharmacokinetic plasma concentration-time profiles',
      'Compute conformal prediction intervals and applicability domain bounds',
      'Deliver audit-ready context-of-use tables aligned with draft NAM principles',
      'Simulate 1,000-virtual-patient cohorts reflecting South Asian allele distributions'
    ],
    whatWeDoNotDo: [
      'Do not replace physical laboratory assays or human clinical trials',
      'Do not guarantee biological safety, clinical efficacy, or regulatory approval',
      'Do not establish legal bioequivalence or regulatory biowaivers (ICH M9 requires physical testing)',
      'Do not provide legal patent opinions or formal freedom-to-operate clearance',
      'Do not execute uncalibrated black-box predictions without explicit uncertainty'
    ],

    dataFoundation: {
      notice: 'Data foundation: dataset audit in progress. Counts published after audit.',
      sources: [
        { name: 'ChEMBL Database', category: 'Bioactivity & Transporter Inhibition', license: 'CC BY-SA 3.0' },
        { name: 'PK-DB', category: 'Pharmacokinetic Clinical Study Curves', license: 'Open Access / Scientific Literature' },
        { name: 'Open Systems Pharmacology (OSP)', category: 'PBPK Model Parameter Baselines', license: 'GPLv2' },
        { name: 'Therapeutics Data Commons (TDC)', category: 'ADMET Benchmark Training Sets', license: 'MIT / Open Academic' },
        { name: 'RCSB Protein Data Bank (PDB)', category: 'Macromolecular 3D Receptor Targets', license: 'Public Domain' },
        { name: '1000 Genomes Project (BEB)', category: 'Bengali in Bangladesh Population Genetics', license: 'Public Data Repository' }
      ]
    },

    security: {
      headline: 'Designed for private deployment',
      sub: 'Independent security review: planned prior to enterprise subscription release.',
      features: [
        { title: 'Tenant Isolation', desc: 'Single-tenant VPC or dedicated client container instances prevent cross-client data contamination.' },
        { title: 'In-Flight & Rest Encryption', desc: 'Standard TLS 1.3 encryption in transit and AES-256 for persistent local model registries.' },
        { title: 'Role-Based Access Control', desc: 'Granular researcher and reviewer permissions with dual-authorization sign-off.' },
        { title: 'Audit Trail & Deletion', desc: 'Cryptographic SHA-256 provenance logging with client-directed data purge schedules.' }
      ]
    }
  },

  services: {
    headline: 'Fixed-Scope Studies & Gated Subscriptions',
    sub: 'Priced transparently at roughly 20–25% of avoided wet-lab physical assay costs. Unlocking software subscriptions only after empirical trust is established.',
    cards: [
      {
        id: 'candidate-impurity-triage',
        title: 'Candidate & Impurity Triage Study',
        targetAudience: 'API synthesis teams, pre-formulation scientists, and regulatory managers',
        deliverable: 'Ranked candidate report or impurity risk assessment with conformal uncertainty intervals and qualified review',
        steps: [
          'Client provides candidate SMILES structures and intended target indications',
          'BioSimLayer runs multi-task ADMET, transporter liability, and toxicity profiling',
          'Signed decision dossier delivered with ranked physical experiment recommendations'
        ],
        turnaround: 'Target turnaround ≤ 72 hours',
        price: 'US$3,500 – $4,500 per study',
        priceStatus: 'PROPOSED',
        notIncluded: 'Wet-lab physical synthesis, animal bioassays, or formal legal non-infringement opinions',
        specialNote: 'ICH M7-aligned impurity assessment is offered only with dual-method (Q)SAR (statistical + expert-rule) and qualified toxicologist review (PLANNED). The client’s QA/regulatory function owns the final assessment.'
      },
      {
        id: 'formulation-be-triage',
        title: 'Formulation & Bioequivalence-Risk Triage',
        targetAudience: 'Generic formulation scientists, oral solid dosage R&D heads',
        deliverable: 'PBPK absorption and plasma concentration comparison across dissolution profiles with virtual population variance',
        steps: [
          'Input solubility (pH 1.2, 4.5, 6.8), permeability, and initial formulation parameters',
          'PBPK simulation of oral absorption and virtual Bengali (BEB) population plasma distribution',
          'Report highlighting dissolution risk flags and prioritizing in vitro FaSSIF/FeSSIF assays'
        ],
        turnaround: 'Target turnaround ≤ 72 hours',
        price: 'US$3,500 – $4,500 per study',
        priceStatus: 'PROPOSED',
        notIncluded: 'Formal bioequivalence study conduct; does not establish bioequivalence or a regulatory biowaiver (ICH M9 requires physical experimental data)',
        specialNote: 'Supports experiment design and prioritisation; does not substitute for clinical bioequivalence.'
      },
      {
        id: 'organ-module-subscriptions',
        title: 'Organ-Module Software Subscriptions',
        targetAudience: 'Established enterprise pharmaceutical R&D departments and discovery hubs',
        deliverable: 'Private deployment access to dedicated organ modules (Hepatic Zonation, Renal Proximal Tubule, Cardiac QTc) with batch screening and audit trails',
        steps: [
          'Pre-requisite: Client completes ≥ 2 paid fixed-scope triage studies to confirm methodology fit',
          'Deployment of containerized module inside client VPC or local infrastructure',
          'Annual license with included study credits, model updates, and local support'
        ],
        turnaround: 'Continuous on-demand access',
        price: 'US$20,000 – $50,000 / year per module',
        priceStatus: 'PROPOSED',
        notIncluded: 'Custom model re-training or bespoke physical assay execution',
        specialNote: 'Unlocked strictly after ≥ 2 completed paid triage studies to ensure proven operational value.'
      },
      {
        id: 'validation-consortium',
        title: 'Validation Consortium Membership',
        targetAudience: 'Academic institutions (DU, BUET, IUBAT), partner CROs, and forward-looking pharmaceutical manufacturers',
        deliverable: 'Participation in shared pre-registered validation protocols, blind benchmark scorecards, and regional reference datasets',
        steps: [
          'Academic nodes contribute wet-lab assay capacity and peer-review rigor',
          'Industry members contribute proposed reference generic targets and receive consortium scorecards',
          'Collaborative publication of blinded multi-center reproducibility studies'
        ],
        turnaround: 'Annual consortium cycle',
        price: 'Industry membership ~US$6,000 – $8,000 / year (Academic nodes contribute lab capacity)',
        priceStatus: 'PROPOSED',
        notIncluded: 'Exclusive commercial rights to shared public validation datasets',
        specialNote: 'Consortium framework is in planning stage; target nodes are planned partners, not confirmed.'
      },
      {
        id: 'academic-licences',
        title: 'Academic & Teaching Licences',
        targetAudience: 'Pharmacy, pharmacology, and chemical engineering departments',
        deliverable: 'Research-only, time-limited, non-exclusive web console access for teaching mechanistic pharmacology and PBPK modeling',
        steps: [
          'Departmental faculty application and curriculum verification',
          'Issuance of student seat bundles for coursework and graduate research',
          'Student training modules on uncertainty quantification and context-of-use reporting'
        ],
        turnaround: 'Semester-based onboarding',
        price: 'Subsidized / Nominal administrative fee',
        priceStatus: 'PLANNED',
        notIncluded: 'Commercial drug development triage or proprietary formulation screening',
        specialNote: 'Strictly restricted to non-commercial academic research and classroom instruction.'
      },
      {
        id: 'future-modules',
        title: 'Upcoming Modules (Stage 04 Roadmap)',
        targetAudience: 'Munshiganj API manufacturing plants and regional export strategists',
        deliverable: 'Patent-Aware Triage Add-On & Synthesize-or-Import Decision Engine',
        steps: [
          'Chemical synthesis route deconstruction and patent landscape screening',
          'Techno-economic raw material cost vs. local synthesis feasibility scoring',
          'Flagging potential freedom-to-operate questions for qualified legal counsel'
        ],
        turnaround: 'Roadmap Stage 04 release',
        price: 'Add-on pricing to be announced',
        priceStatus: 'PLANNED',
        notIncluded: 'Legal freedom-to-operate opinions, patent prosecution, or formal legal advice',
        specialNote: 'Provides technical chemistry screening only; does not substitute for qualified intellectual property counsel.'
      }
    ]
  },

  solutions: {
    headline: 'Tailored Decision Support Across the Drug Lifecycle',
    sub: 'Illustrative scenarios showing how computational triage accelerates physical testing. No specific client relationship is implied.',
    segments: [
      {
        id: 'api-manufacturers',
        title: 'API Manufacturers (Munshiganj API Park)',
        challenge: 'Transitioning from imported raw materials to local synthesis introduces impurity profiles, unknown reaction byproducts, and salt selection questions.',
        solution: 'BioSimLayer triages candidate synthetic routes, screens ICH M7 mutagenic alerts with dual-(Q)SAR, and models solubility shifts before scaling reactor batches.',
        typicalProject: 'Screening 5 synthesis intermediates and 3 potential reaction impurities for mutagenicity alerts prior to pilot synthesis run.'
      },
      {
        id: 'generic-developers',
        title: 'Generic & Complex-Formulation Developers',
        challenge: 'Formulating BCS Class II and IV molecules with narrow absorption windows risks bioequivalence study failure in expensive human trials.',
        solution: 'Simulates 24-hour plasma concentration-time profiles and tests sensitivity to dissolution rates across South Asian virtual patient cohorts.',
        typicalProject: 'Pre-IND dissolution sensitivity study comparing reference listed drug (RLD) against 3 test formulations under fasted and fed gastric conditions.'
      },
      {
        id: 'cros',
        title: 'Contract Research Organisations (CROs)',
        challenge: 'Sponsors demand faster assay prioritization and clear mechanistic rationale for selecting specific in vitro testing batteries.',
        solution: 'CROs use BioSimLayer dossiers as an upfront computational screening layer to justify and recommend high-value physical assays to sponsors.',
        typicalProject: 'Providing sponsors with a ranked 3-assay package (e.g., Caco-2 + MDCK-MDR1 + HLM) with documented uncertainty rationale.'
      },
      {
        id: 'universities',
        title: 'Universities & Research Institutes',
        challenge: 'Academic drug discovery and pharmacology research faces severe resource constraints for broad physical animal screening.',
        solution: 'Enables graduate researchers to run mechanistic PBPK simulations, inspect 3D binding pockets, and ground dissertations in reproducible computational data.',
        typicalProject: 'Characterizing natural compound derivatives for CYP inhibition liability prior to fractional synthesis.'
      },
      {
        id: 'biotech-startups',
        title: 'Emerging Biotech Startups',
        challenge: 'Early-stage biotechs must stretch seed capital to demonstrate safety de-risking before approaching institutional investors.',
        solution: 'Fixed-scope triage studies provide defensible context-of-use evidence dossiers at ~20% of wet-lab screening costs in ≤ 72 hours.',
        typicalProject: 'Preclinical lead optimization triage ranking 8 novel small-molecule analogs for oral bioavailability and hERG safety margin.'
      }
    ]
  },

  whyBangladesh: {
    headline: 'The Bangladesh Strategic Inflection Point',
    sub: 'A $1.3B API import gap, impending WTO TRIPS transition, and new international regulatory tailwinds create an unprecedented window for computational biosimulation.',
    statusAsOfDate: siteConfig.statusAsOfDate,
    
    tripsScenarios: [
      {
        id: 'scenario_a',
        code: 'Scenario A',
        title: 'Graduation on 24 Nov 2026 as Scheduled',
        subtitle: 'Standard LDC Graduation (No Extension)',
        urgency: 'HIGH URGENCY',
        details: 'Bangladesh graduates from Least Developed Country (LDC) status on 24 November 2026. LDC-specific pharmaceutical patent flexibilities under the WTO TRIPS agreement may end earlier than 2033; exact legal arrangements require formal counsel.',
        impact: 'Accelerates the immediate demand for local API synthesis qualification, formulation differentiation, and patent-aware screening.'
      },
      {
        id: 'scenario_b',
        code: 'Scenario B',
        title: 'Deferral to 24 Nov 2029 (Requested)',
        subtitle: 'Requested 3-Year Post-Graduation Transition Buffer',
        urgency: 'MODERATE URGENCY (PENDING)',
        details: 'In February 2026, the Bangladesh government formally requested a 3-year transition deferral to 24 November 2029. The UN Committee for Development Policy (CDP) found an extension appropriate; the UN Economic and Social Council (ECOSOC) has referred the proposal to the UN General Assembly, whose final resolution remains pending.',
        impact: 'Provides an orderly 36-month window to deploy the Computational Safety Consortium, calibrate regional models, and transition top manufacturers.'
      },
      {
        id: 'scenario_c',
        code: 'Scenario C',
        title: 'WTO Alignment to 1 Jan 2033',
        subtitle: 'General LDC Pharmaceutical Transition Outer Limit',
        urgency: 'LONG-RANGE STRATEGIC',
        details: 'The WTO general pharmaceutical waiver for LDCs runs until 1 January 2033 or until a country ceases to be an LDC, whichever occurs earlier. 2033 is an outer boundary, not an automatic guarantee.',
        impact: 'Provides maximum runway to scale BioSimLayer into an internationally accredited New Approach Methodology (NAM) platform.'
      }
    ],

    tripsFactBox: 'The WTO’s LDC pharmaceutical transition runs to 1 January 2033 or until a country ceases to be an LDC, whichever is earlier, so 2033 is an outer limit, not a guarantee. Same plan, different speed.',
    tripsFootnote: 'Impact depends on final international arrangements, applicable domestic patent legislation, and each medicine’s patent status. This does not mean all generic manufacturing becomes illegal or that every medicine becomes more expensive.',

    regulatoryTailwind: {
      headline: 'US FDA Regulatory Modernization (September 2026)',
      text: 'In September 2026 the US FDA issued a direct final rule updating terminology so that "nonclinical" tests explicitly include computer modelling. It adds no new requirements and does not change evidentiary standards (effective 4 Feb 2027 unless withdrawn). FDA’s March 2026 draft guidance describes validation considerations for new approach methodologies.',
      caution: 'The rule modernizes terminology; it does not mandate computer modeling or reduce rigorous safety validation thresholds.'
    },

    marketEstimates: {
      notice: 'Market estimates are working estimates subject to customer discovery; published analyst sources disagree by up to 10x.',
      metrics: [
        {
          tier: 'TAM (Total Addressable Market)',
          range: 'US$1.4B – $2.9B',
          desc: 'Global preclinical simulation and quantitative systems toxicology (QST) software + services market.',
          source: 'Synthesized secondary market research (Grand View, Roots Analysis, MarketsandMarkets)',
          status: 'WORKING ESTIMATE'
        },
        {
          tier: 'SAM (Serviceable Addressable Market)',
          range: 'US$75M – $260M / year by ~2030',
          desc: 'South and Southeast Asian generic, complex-formulation, and API R&D simulation and computational triage spend.',
          source: 'Bottom-up estimate based on regional pharma R&D expenditure',
          status: 'WORKING ESTIMATE'
        },
        {
          tier: 'SOM (Serviceable Obtainable Market)',
          range: 'US$1M – $3M / year at steady state',
          desc: 'Dhaka pharma beachhead: 15–25 active corporate accounts running 3–6 triage studies annually plus organ-module subscriptions.',
          source: 'BioSimLayer target unit economics model',
          status: 'WORKING ESTIMATE'
        }
      ]
    }
  },

  pricing: {
    headline: 'A Gated Commercial Model Built on Earned Trust',
    sub: 'Software subscriptions cannot be bought off the shelf. We validate methodology with fixed-scope studies before selling enterprise licenses.',
    phases: [
      {
        phase: 'Stage 1: VALIDATE',
        timeline: 'Months 1–12',
        badge: 'Foundation',
        price: 'Consortium Membership / Academic Lab Contribution',
        priceStatus: 'PROPOSED',
        objective: 'Establish empirical credibility through pre-registered blind benchmarks and university partnerships.',
        deliverable: '15 benchmark reference scorecards published publicly. Zero software sales pitch.'
      },
      {
        phase: 'Stage 2: SERVE',
        timeline: 'Months 6–18',
        badge: 'Core Revenue',
        price: 'US$3,500 – $4,500 per study',
        priceStatus: 'PROPOSED',
        objective: 'Fixed-Scope Research Triage Studies for active generic and API formulation pipelines.',
        deliverable: '1-page decision dossier delivered in ≤ 72 hours. Paid out of routine testing OpEx without CapEx friction.'
      },
      {
        phase: 'Stage 3: SUBSCRIBE',
        timeline: 'Months 12–24+',
        badge: 'Enterprise Expansion',
        price: 'US$20,000 – $50,000 / year per module',
        priceStatus: 'PROPOSED',
        objective: 'Dedicated organ-module software licenses deployed inside client private VPCs.',
        deliverable: 'Unlocked strictly after ≥ 2 completed paid triage studies. Unlimited batch screening with local audit trail.'
      }
    ],

    comparison: [
      {
        feature: 'Primary Output Type',
        genericWeb: 'Single-point property scores (e.g. logP, affinity score)',
        enterprisePbpk: 'Complex mathematical ODE simulations with high learning curve',
        biosimLayer: 'Decision-ready 1-page dossier with ranked physical wet-lab assays',
        status: 'BUILT'
      },
      {
        feature: 'Uncertainty Reporting',
        genericWeb: 'Rarely reported; false precision without domain checks',
        enterprisePbpk: 'Parameter sensitivity analysis (requires specialist modeler)',
        biosimLayer: 'Conformal prediction intervals & automated applicability domain warnings',
        status: 'IN DEVELOPMENT'
      },
      {
        feature: 'Deployment & IP Handling',
        genericWeb: 'Public web forms; risk of molecular SMILES leakage',
        enterprisePbpk: 'Heavy desktop desktop installation or enterprise server',
        biosimLayer: 'Designed for private VPC / on-premise container deployment',
        status: 'PLANNED'
      },
      {
        feature: 'Regional Calibration (South Asian)',
        genericWeb: 'None (trained exclusively on Western clinical data)',
        enterprisePbpk: 'Standard Caucasian / Japanese virtual populations',
        biosimLayer: 'South Asian (BEB, 60kg) reference physiology and CYP allele frequencies',
        status: 'IN VALIDATION'
      },
      {
        feature: 'Pricing Model',
        genericWeb: 'Free / Ad-supported / Unverified',
        enterprisePbpk: 'Heavy annual CapEx (US$50,000–$150,000+ per seat)',
        biosimLayer: 'Fixed-scope studies (US$3.5K–$4.5K) moving to gated subscriptions',
        status: 'PROPOSED'
      },
      {
        feature: 'Audit-Ready Regulatory Dossier',
        genericWeb: 'None; raw CSV exports',
        enterprisePbpk: 'Extensive raw plots requiring manual report drafting',
        biosimLayer: '1-page structured Context-of-Use report aligned with NAM principles',
        status: 'BUILT'
      }
    ],
    footer: 'Proposed pricing, subject to customer discovery and commercial validation.'
  },

  validation: {
    headline: 'Our Four Validation Gates',
    sub: 'Computational models are only as good as their verified predictive boundaries. We adhere to pre-registered, blinded validation gates.',
    gates: [
      {
        gate: 'Gate A: Reproduce Published & Reference Data',
        desc: 'Replicate published in vivo pharmacokinetic profiles and ADMET properties on 15 reference molecules (including Midazolam, Digoxin, and Fialuridine) with locked models.',
        status: 'IN PROGRESS'
      },
      {
        gate: 'Gate B: Retrospective Blinded Validation',
        desc: 'Predict held-out, blinded compound properties provided by academic consortium partners without access to experimental values prior to model locking.',
        status: 'PLANNED'
      },
      {
        gate: 'Gate C: Prospective Prediction & Wet-Lab Comparison',
        desc: 'Generate prospective predictions for candidate formulation variants followed by partner physical wet-lab testing to measure real-world prediction accuracy.',
        status: 'PLANNED'
      },
      {
        gate: 'Gate D: Inter-Laboratory Repeatability & Change Control',
        desc: 'Verify that simulation results and physical assay confirmations remain consistent across multiple participating consortium nodes with documented version control.',
        status: 'PLANNED'
      }
    ],

    regulatoryAlignment: {
      headline: 'Regulatory Alignment Statement',
      body: 'BioSimLayer is structured around the principles of FDA NAM validation guidance (draft, March 2026) and ICH M15 model-informed drug development principles; ICH M7 impurity work uses dual (Q)SAR methodology. This is alignment, not endorsement, qualification or compliance.'
    }
  },

  roadmap: {
    headline: 'Interactive 6-Stage Evidence-Gated Roadmap',
    sub: 'Progress is released by empirical evidence gates, not calendar time. Capital is unlocked only when the preceding gate passes.',
    stages: [
      {
        number: '00',
        title: 'Demonstrate',
        timeline: 'October 2026',
        status: 'IN PROGRESS',
        statusClass: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        gate: 'Gate 0: Working prototype demo functions end-to-end with benchmark reference molecules and deterministic fallback solver.',
        deliverable: 'Interactive R&D prototype preview, 3 benchmark reference profiles, offline-capable workbench.',
        fundingCeiling: 'Pre-Seed / Founder Funded',
        revenueTarget: 'None (Technology demonstration)'
      },
      {
        number: '01',
        title: 'Prove',
        timeline: 'Nov 2026 – Feb 2027',
        status: 'Unlocks after Gate 0',
        statusClass: 'bg-slate-100 text-slate-600 border-slate-200',
        gate: 'Gate 1: Published validation scorecard including negative results, 2+ design partners signed, 1+ paid pilot committed.',
        deliverable: '15–20 buyer discovery interviews, data-license audit, independent scientific reviewer engagement, blinded benchmark on public reference drugs.',
        fundingCeiling: 'US$45,000 (Seed Sprint)',
        revenueTarget: 'Planning: US$20K | Stretch: US$60K'
      },
      {
        number: '02',
        title: 'Serve',
        timeline: 'Mar – Aug 2027',
        status: 'Unlocks after Gate 1',
        statusClass: 'bg-slate-100 text-slate-600 border-slate-200',
        gate: 'Gate 2: 10 paid triage studies completed, 3+ repeat clients, positive service gross margin.',
        deliverable: 'First commercial fixed-scope studies (US$3.5K–$4.5K), private container deployment, consortium wet-lab calibration, scientific dialogue with DGDA on evidence formats.',
        fundingCeiling: 'US$120,000',
        revenueTarget: 'Planning: US$100K | Stretch: US$185K'
      },
      {
        number: '03',
        title: 'Subscribe',
        timeline: 'Sep 2027 – Apr 2028',
        status: 'Unlocks after Gate 2',
        statusClass: 'bg-slate-100 text-slate-600 border-slate-200',
        gate: 'Gate 3: 3 paying annual enterprise subscribers converted from pilot study clients.',
        deliverable: 'Launch of first organ-module software subscription for clients with ≥ 2 completed studies; research-only student seats for universities.',
        fundingCeiling: 'US$250,000',
        revenueTarget: 'Planning: US$300K | Stretch: US$510K'
      },
      {
        number: '04',
        title: 'Platform',
        timeline: '2028 – 2030',
        status: 'Unlocks after Gate 3',
        statusClass: 'bg-slate-100 text-slate-600 border-slate-200',
        gate: 'Gate 4: 10+ recurring accounts, one prospective regional validation study published.',
        deliverable: 'Renal transport, cardiac, and zonated-liver modules; prospective local PK validation; patent-aware triage add-on; regional distribution in Vietnam and Indonesia; formal regulatory context-of-use filing.',
        fundingCeiling: 'Funded by revenue and follow-on capital (TODO_CONFIRM)',
        revenueTarget: 'Multi-year growth target'
      },
      {
        number: '05',
        title: 'Global & Discovery',
        timeline: '2031 – 2033+',
        status: 'Unlocks after Gate 4',
        statusClass: 'bg-slate-100 text-slate-600 border-slate-200',
        gate: 'Gate 5: Sustained commercial revenue across 3+ countries.',
        deliverable: 'Generative molecular design conditioned on pharmacokinetic simulation; licensing validated modules to emerging and Western partners.',
        fundingCeiling: 'Self-sustaining international operations',
        revenueTarget: 'International expansion'
      }
    ],
    rule: 'Capital is released only when the previous gate passes.',
    targetsTableNote: 'Targets, not forecasts. Stretch Year 1 includes grants and consortium fees.'
  },

  investors: {
    headline: 'Staged funding, released by evidence.',
    sub: 'We are raising a focused US$45,000 Stage 1 Seed Sprint to complete buyer validation, execute our data audit, and publish our first blinded benchmark scorecard.',
    immediateNeed: 'US$45,000 (4-month sprint)',
    totalPlan: 'US$415,000 in 3 evidence-gated tranches over ~18 months',

    tranches: [
      {
        tranche: 'Tranche 1 (Stage 1)',
        amount: 'US$45,000',
        focus: '4-Month Evidence & Customer Sprint',
        allocation: [
          { label: 'Core talent & research stipends', amount: 'US$20,000' },
          { label: 'Cloud GPU compute & secure hosting', amount: 'US$15,000' },
          { label: 'Intellectual property & legal counsel', amount: 'US$10,000' }
        ]
      },
      {
        tranche: 'Tranche 2 (Stage 2)',
        amount: 'US$120,000',
        focus: 'Commercial Pilot Service Delivery',
        allocation: [
          { label: 'Customer development & delivery team', amount: 'US$60,000' },
          { label: 'Compute & consortium wet-lab calibration', amount: 'US$40,000' },
          { label: 'Academic & university program', amount: 'US$20,000' }
        ]
      },
      {
        tranche: 'Tranche 3 (Stage 3)',
        amount: 'US$250,000',
        focus: 'Organ-Module Software Scaling',
        allocation: [
          { label: 'Organ-module engineering build', amount: 'US$90,000' },
          { label: 'Enterprise delivery & security audits', amount: 'US$60,000' },
          { label: 'Regional generic hub partner pilot', amount: 'US$50,000' },
          { label: 'Regulatory alignment & IP filing', amount: 'US$50,000' }
        ]
      }
    ],

    tractionToday: [
      'Interactive R&D prototype workbench operating end-to-end with benchmark reference drugs',
      'Dataset inventory assembled and undergoing formal licensing audit',
      'Evidence-gated roadmap with pre-registered exit criteria',
      'Target academic consortium architecture structured with DU, BUET, and IUBAT nodes (planned)'
    ],

    risksAndMitigations: [
      {
        risk: 'Adoption Inertia',
        mitigation: 'Fixed-scope triage studies priced at US$3,500–$4,500 are payable out of routine OpEx without CapEx budget committee friction.'
      },
      {
        risk: 'Model Predictive Accuracy',
        mitigation: 'Conformal prediction intervals and explicit out-of-domain warnings prevent over-confident extrapolation; negative results published.'
      },
      {
        risk: 'Data Licensing Compliance',
        mitigation: 'Independent data-license audit scheduled in Stage 1 to ensure zero GPL contamination in commercial modules.'
      },
      {
        risk: 'Regulatory Acceptance',
        mitigation: 'Positioned strictly as decision-support for experiment prioritisation; no claim of replacing regulatory submissions.'
      },
      {
        risk: 'TRIPS Graduation Timing',
        mitigation: 'Roadmap is clock-agnostic: the same 6-stage evidence sequence operates whether graduation occurs in 2026, 2029, or 2033.'
      }
    ]
  },

  about: {
    headline: 'Our Mission & Scientific Foundation',
    mission: 'To ensure no human has to be the first test subject by equipping pharmaceutical researchers with mechanistic, uncertainty-aware simulation tools.',
    founded: 'Founded in Dhaka, Bangladesh (2026)',
    fialuridineInspiration: {
      title: 'Why BioSimLayer Exists',
      text: 'The 1993 fialuridine tragedy demonstrated that animal models can fail to capture human-specific metabolic and organ toxicities. Modern computational pharmacology, combining physiologically based pharmacokinetics with graph neural networks, can identify species-specific transport liabilities before compounds ever reach human clinical trials.'
    },
    values: [
      {
        title: 'Epistemic Honesty',
        desc: 'We never hide uncertainty behind single confidence scores. When a molecule falls outside our training domain, we flag it clearly.'
      },
      {
        title: 'Evidence Before Software',
        desc: 'We do not sell software subscriptions until our methodology has been validated on paid, real-world customer pilot studies.'
      },
      {
        title: 'Regional Grounding, Global Standards',
        desc: 'Built in Dhaka to address Bangladesh’s urgent API transition, structured around US FDA and ICH international scientific principles.'
      }
    ]
  },

  resources: {
    headline: 'Scientific & Regulatory Explainers',
    sub: 'Guides, regulatory background, and toxicological case studies for pharmaceutical scientists and investors.',
    articles: [
      {
        id: 'trips-ldc-explainer',
        title: 'Understanding the WTO TRIPS Transition & LDC Graduation',
        summary: 'How Bangladesh’s upcoming graduation impacts pharmaceutical patent flexibilities, the Munshiganj API Park, and the urgency for local formulation differentiation.',
        tag: 'Policy & Market'
      },
      {
        id: 'fialuridine-case-study',
        title: 'The Fialuridine Landmark: Why Preclinical Animal Models Failed',
        summary: 'A detailed mechanistic breakdown of human-specific nucleoside transport (hENT1), mitochondrial phosphorylation, and delayed centrilobular liver necrosis.',
        tag: 'Mechanistic Toxicology'
      },
      {
        id: 'how-pbpk-works',
        title: 'Introduction to Mechanistic PBPK & Virtual Populations',
        summary: 'How 2-compartment analytical ordinary differential equations (ODEs) predict plasma concentration-time curves and model regional genetic variance.',
        tag: 'Pharmacometrics'
      }
    ],
    glossary: [
      { term: 'PBPK', definition: 'Physiologically Based Pharmacokinetics: mathematical modeling of drug absorption, distribution, metabolism, and excretion using anatomical tissue compartments.' },
      { term: 'ADMET', definition: 'Absorption, Distribution, Metabolism, Excretion, and Toxicity: the pharmacokinetic and safety profile determining drug candidacy.' },
      { term: 'NAMs', definition: 'New Approach Methodologies: non-animal technologies including in silico computational models, organ-on-a-chip systems, and cell-based assays.' },
      { term: 'ICH M7', definition: 'International Council for Harmonisation guideline on assessment and control of DNA reactive (mutagenic) impurities in pharmaceuticals.' },
      { term: 'BCS', definition: 'Biopharmaceutics Classification System: categorizing active drug substances into Classes I–IV based on aqueous solubility and intestinal permeability.' },
      { term: 'DILI', definition: 'Drug-Induced Liver Injury: adverse hepatic impairment caused by medicines, a leading cause of clinical attrition and post-market withdrawals.' },
      { term: 'Context of Use (COU)', definition: 'A clearly defined regulatory question and boundary specifying the exact conditions under which a computational model is validated to support a decision.' }
    ]
  }
};
