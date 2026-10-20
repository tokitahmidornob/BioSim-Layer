/**
 * BioSimLayer Claims Register Data
 * Used to power StatusBadge components and compile docs/CLAIMS_REGISTER.md
 */

export const CLAIMS = [
  {
    id: 'claim-pbpk-sim',
    claim: 'Concentration-time simulation using 2-compartment analytical ODE equations',
    status: 'PROTOTYPE',
    page: 'Home / Platform',
    sourceName: 'BioSimLayer R&D Prototype Workbench',
    notes: 'Implemented in prototype demonstration workbench with deterministic solver'
  },
  {
    id: 'claim-uncertainty-rep',
    claim: 'Uncertainty reporting and conformal prediction intervals on predictions',
    status: 'IN DEVELOPMENT',
    page: 'Home / Platform',
    sourceName: 'BioSimLayer GNN Pipeline Specification',
    notes: 'Conformal bounds architecture currently under implementation'
  },
  {
    id: 'claim-private-deploy',
    claim: 'Private VPC and on-premise containerized deployment architecture',
    status: 'PLANNED',
    page: 'Home / Platform',
    sourceName: 'BioSimLayer Architecture Roadmap',
    notes: 'Designed for private deployment; enterprise multi-tenant isolation scheduled for Stage 03'
  },
  {
    id: 'claim-south-asian-calib',
    claim: 'South Asian population calibration (60kg ICRP-89 reference weight and 1000 Genomes BEB allele frequencies)',
    status: 'IN VALIDATION',
    page: 'Home / Platform',
    sourceName: 'ICRP Publication 89 & 1000 Genomes Project (BEB Population)',
    notes: 'Reference weight and allele table incorporated; formal regional physiological calibration claimed only where prospectively validated'
  },
  {
    id: 'claim-clinical-fail-rate',
    claim: '~90% of drug candidates entering clinical development fail',
    status: 'WORKING ESTIMATE',
    page: 'Home / Resources',
    sourceName: 'Sun et al., Acta Pharmaceutica Sinica B (2022) / FDA retrospective analysis',
    notes: 'Commonly cited industry benchmark for Phase I-III attrition'
  },
  {
    id: 'claim-dev-time',
    claim: '10-15 years average time to bring a new medicine to market',
    status: 'WORKING ESTIMATE',
    page: 'Home',
    sourceName: 'PhRMA Biopharmaceutical Research Report',
    notes: 'Standard industry estimate across small molecules and biologics'
  },
  {
    id: 'claim-dev-cost',
    claim: '~$2.6B estimated total capitalized cost per approved drug (including cost of failures)',
    status: 'WORKING ESTIMATE',
    page: 'Home',
    sourceName: 'DiMasi et al., Tufts Center for the Study of Drug Development (2016)',
    notes: 'Widely referenced estimate incorporating capitalized cost of attrition'
  },
  {
    id: 'claim-fialuridine-story',
    claim: 'In 1993, experimental hepatitis B drug fialuridine (FIAU) caused severe hepatotoxicity and 5 deaths in Phase II trials despite passing animal testing',
    status: 'BUILT',
    page: 'Home / Resources / About',
    sourceName: 'McKenzie et al., New England Journal of Medicine (1995); 333:1099-1105',
    notes: 'Verified historical toxicological landmark showing human-specific mitochondrial nucleoside toxicity'
  },
  {
    id: 'claim-api-import-ratio',
    claim: 'Around 90% of active pharmaceutical ingredients (APIs) are imported into Bangladesh (roughly US$1.2–1.3B annually)',
    status: 'WORKING ESTIMATE',
    page: 'Home / Why Bangladesh',
    sourceName: 'Bangladesh Investment Development Authority (BIDA) & BAPI sectoral reports',
    notes: 'Published trade estimates for domestic raw material dependence'
  },
  {
    id: 'claim-munshiganj-plots',
    claim: 'Only a handful of the 27 allotted industrial plots at Munshiganj Active Pharmaceutical Ingredient (API) Industrial Park are currently operational',
    status: 'WORKING ESTIMATE',
    page: 'Home / Why Bangladesh / Solutions',
    sourceName: 'Dhaka Chamber of Commerce & Industry (DCCI) & industrial park updates (2025/2026)',
    notes: 'Reflects infrastructure handover and commissioning status'
  },
  {
    id: 'claim-global-tam',
    claim: 'Global preclinical simulation and quantitative systems toxicology (QST) software + services TAM: US$1.4B–$2.9B',
    status: 'WORKING ESTIMATE',
    page: 'Why Bangladesh / Investors',
    sourceName: 'Synthesized secondary market research (Grand View, Roots Analysis, MarketsandMarkets)',
    notes: 'Estimates vary widely by analyst definition; subject to customer discovery'
  },
  {
    id: 'claim-regional-sam',
    claim: 'South and Southeast Asian generic, complex formulation, and API R&D simulation spend SAM: US$75M–$260M/yr by ~2030',
    status: 'WORKING ESTIMATE',
    page: 'Why Bangladesh / Investors',
    sourceName: 'BioSimLayer bottom-up regional sizing estimate',
    notes: 'Based on estimated 500+ regional pharma manufacturers investing 1-3% of R&D in in silico tools'
  },
  {
    id: 'claim-beachhead-som',
    claim: 'Dhaka and regional generic beachhead SOM: US$1M–$3M/yr at steady state',
    status: 'WORKING ESTIMATE',
    page: 'Why Bangladesh / Investors',
    sourceName: 'BioSimLayer target account model (15-25 key accounts x 3-6 studies/yr)',
    notes: 'Service studies + initial organ-module subscriptions'
  },
  {
    id: 'claim-triage-pricing',
    claim: 'Fixed-Scope Candidate & Impurity Triage Study: US$3,500–$4,500 per study',
    status: 'PROPOSED',
    page: 'Services / Pricing',
    sourceName: 'BioSimLayer Commercial Pricing Model',
    notes: 'Priced at ~20-25% of avoided wet-lab physical assay costs; subject to commercial validation'
  },
  {
    id: 'claim-organ-module-sub',
    claim: 'Organ-Module Software Subscriptions: US$20,000–$50,000/yr per module',
    status: 'PROPOSED',
    page: 'Services / Pricing',
    sourceName: 'BioSimLayer Commercial Pricing Model',
    notes: 'Unlocked strictly after client completes 2+ paid triage studies'
  },
  {
    id: 'claim-consortium-fee',
    claim: 'Validation Consortium Industry Membership: US$6,000–$8,000/yr',
    status: 'PROPOSED',
    page: 'Services / Validation',
    sourceName: 'BioSimLayer Commercial Pricing Model',
    notes: 'Proposed annual contribution for industry participants'
  },
  {
    id: 'claim-patent-triage',
    claim: 'Patent-aware triage add-on for landscape screening and synthesis route flags',
    status: 'PLANNED',
    page: 'Services / Roadmap',
    sourceName: 'BioSimLayer Roadmap (Stage 04)',
    notes: 'Technical triage tool to raise freedom-to-operate questions for qualified patent counsel; not legal advice'
  },
  {
    id: 'claim-synthesize-or-import',
    claim: 'Synthesize-or-Import decision engine for API manufacturing plants',
    status: 'PLANNED',
    page: 'Services / Roadmap',
    sourceName: 'BioSimLayer Roadmap (Stage 04)',
    notes: 'Techno-economic screening tool'
  },
  {
    id: 'claim-fda-rule-sept2026',
    claim: 'US FDA issued a direct final rule explicitly clarifying that nonclinical testing encompasses computer modeling (effective Feb 4, 2027 unless withdrawn)',
    status: 'BUILT',
    page: 'Why Bangladesh / Validation',
    sourceName: 'US Federal Register Direct Final Rule (September 2026)',
    notes: 'Updates regulatory terminology without changing evidentiary standards or mandating modeling'
  },
  {
    id: 'claim-fda-nam-guidance',
    claim: 'BioSimLayer dossier framework is aligned with the principles of the FDA draft guidance on New Approach Methodologies (March 2026)',
    status: 'IN DEVELOPMENT',
    page: 'Platform / Validation',
    sourceName: 'US FDA Draft Guidance on Qualification of Nonclinical NAMs (March 2026)',
    notes: 'Alignment with published conceptual principles; implies no endorsement, certification, or qualification'
  },
  {
    id: 'claim-ich-m15-alignment',
    claim: 'Reporting structured around ICH M15 model-informed drug development (MIDD) general principles',
    status: 'IN DEVELOPMENT',
    page: 'Platform / Validation',
    sourceName: 'ICH M15 Concept & Discussion Papers on Model-Informed Drug Development',
    notes: 'Methodological alignment only; ICH M15 has no established adoption date'
  },
  {
    id: 'claim-ich-m7-methodology',
    claim: 'ICH M7 mutagenic impurity triage is offered strictly using dual (Q)SAR methodology (statistical + expert-rule) combined with qualified toxicologist review',
    status: 'PLANNED',
    page: 'Services / Platform',
    sourceName: 'ICH M7(R2) Guideline on Assessment and Control of DNA Reactive Impurities',
    notes: 'Not a single AI score; requires dual orthogonal engines and expert human oversight'
  }
];
