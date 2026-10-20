# BioSimLayer Formal Claims Register
*Generated automatically from `src/data/claims.js` for Shark Tank-style Investor Final (27 October 2026)*

> **Claims Governance Rule:** Every numeric or factual statement on the BioSimLayer commercial site must map to this register with an explicit status badge. Forbidden phrases (e.g. "guarantee", "100%", "monopoly", "FDA approved", "air-gapped" as present fact) are strictly blocked by build scripts.

---

## 1. Summary of Claims by Status Flag

| Status Flag | Description | Count |
| :--- | :--- | :---: |
| **`PROTOTYPE`** | Active claim category | **1** |
| **`IN DEVELOPMENT`** | Active claim category | **3** |
| **`PLANNED`** | Active claim category | **4** |
| **`IN VALIDATION`** | Active claim category | **1** |
| **`WORKING ESTIMATE`** | Active claim category | **8** |
| **`BUILT`** | Active claim category | **2** |
| **`PROPOSED`** | Active claim category | **3** |

**Total Documented Claims:** 22

---

## 2. Complete Claims Ledger

| ID | Factual / Numeric Claim | Status | Page(s) | Primary Source / Basis |
| :--- | :--- | :---: | :--- | :--- |
| `claim-pbpk-sim` | Concentration-time simulation using 2-compartment analytical ODE equations | `PROTOTYPE` | Home / Platform | BioSimLayer R&D Prototype Workbench |
| `claim-uncertainty-rep` | Uncertainty reporting and conformal prediction intervals on predictions | `IN DEVELOPMENT` | Home / Platform | BioSimLayer GNN Pipeline Specification |
| `claim-private-deploy` | Private VPC and on-premise containerized deployment architecture | `PLANNED` | Home / Platform | BioSimLayer Architecture Roadmap |
| `claim-south-asian-calib` | South Asian population calibration (60kg ICRP-89 reference weight and 1000 Genomes BEB allele frequencies) | `IN VALIDATION` | Home / Platform | ICRP Publication 89 & 1000 Genomes Project (BEB Population) |
| `claim-clinical-fail-rate` | ~90% of drug candidates entering clinical development fail | `WORKING ESTIMATE` | Home / Resources | Sun et al., Acta Pharmaceutica Sinica B (2022) / FDA retrospective analysis |
| `claim-dev-time` | 10-15 years average time to bring a new medicine to market | `WORKING ESTIMATE` | Home | PhRMA Biopharmaceutical Research Report |
| `claim-dev-cost` | ~$2.6B estimated total capitalized cost per approved drug (including cost of failures) | `WORKING ESTIMATE` | Home | DiMasi et al., Tufts Center for the Study of Drug Development (2016) |
| `claim-fialuridine-story` | In 1993, experimental hepatitis B drug fialuridine (FIAU) caused severe hepatotoxicity and 5 deaths in Phase II trials despite passing animal testing | `BUILT` | Home / Resources / About | McKenzie et al., New England Journal of Medicine (1995); 333:1099-1105 |
| `claim-api-import-ratio` | Around 90% of active pharmaceutical ingredients (APIs) are imported into Bangladesh (roughly US$1.2–1.3B annually) | `WORKING ESTIMATE` | Home / Why Bangladesh | Bangladesh Investment Development Authority (BIDA) & BAPI sectoral reports |
| `claim-munshiganj-plots` | Only a handful of the 27 allotted industrial plots at Munshiganj Active Pharmaceutical Ingredient (API) Industrial Park are currently operational | `WORKING ESTIMATE` | Home / Why Bangladesh / Solutions | Dhaka Chamber of Commerce & Industry (DCCI) & industrial park updates (2025/2026) |
| `claim-global-tam` | Global preclinical simulation and quantitative systems toxicology (QST) software + services TAM: US$1.4B–$2.9B | `WORKING ESTIMATE` | Why Bangladesh / Investors | Synthesized secondary market research (Grand View, Roots Analysis, MarketsandMarkets) |
| `claim-regional-sam` | South and Southeast Asian generic, complex formulation, and API R&D simulation spend SAM: US$75M–$260M/yr by ~2030 | `WORKING ESTIMATE` | Why Bangladesh / Investors | BioSimLayer bottom-up regional sizing estimate |
| `claim-beachhead-som` | Dhaka and regional generic beachhead SOM: US$1M–$3M/yr at steady state | `WORKING ESTIMATE` | Why Bangladesh / Investors | BioSimLayer target account model (15-25 key accounts x 3-6 studies/yr) |
| `claim-triage-pricing` | Fixed-Scope Candidate & Impurity Triage Study: US$3,500–$4,500 per study | `PROPOSED` | Services / Pricing | BioSimLayer Commercial Pricing Model |
| `claim-organ-module-sub` | Organ-Module Software Subscriptions: US$20,000–$50,000/yr per module | `PROPOSED` | Services / Pricing | BioSimLayer Commercial Pricing Model |
| `claim-consortium-fee` | Validation Consortium Industry Membership: US$6,000–$8,000/yr | `PROPOSED` | Services / Validation | BioSimLayer Commercial Pricing Model |
| `claim-patent-triage` | Patent-aware triage add-on for landscape screening and synthesis route flags | `PLANNED` | Services / Roadmap | BioSimLayer Roadmap (Stage 04) |
| `claim-synthesize-or-import` | Synthesize-or-Import decision engine for API manufacturing plants | `PLANNED` | Services / Roadmap | BioSimLayer Roadmap (Stage 04) |
| `claim-fda-rule-sept2026` | US FDA issued a direct final rule explicitly clarifying that nonclinical testing encompasses computer modeling (effective Feb 4, 2027 unless withdrawn) | `BUILT` | Why Bangladesh / Validation | US Federal Register Direct Final Rule (September 2026) |
| `claim-fda-nam-guidance` | BioSimLayer dossier framework is aligned with the principles of the FDA draft guidance on New Approach Methodologies (March 2026) | `IN DEVELOPMENT` | Platform / Validation | US FDA Draft Guidance on Qualification of Nonclinical NAMs (March 2026) |
| `claim-ich-m15-alignment` | Reporting structured around ICH M15 model-informed drug development (MIDD) general principles | `IN DEVELOPMENT` | Platform / Validation | ICH M15 Concept & Discussion Papers on Model-Informed Drug Development |
| `claim-ich-m7-methodology` | ICH M7 mutagenic impurity triage is offered strictly using dual (Q)SAR methodology (statistical + expert-rule) combined with qualified toxicologist review | `PLANNED` | Services / Platform | ICH M7(R2) Guideline on Assessment and Control of DNA Reactive Impurities |

---

## 3. Mandatory Positioning Principles
1. **Decision Support Only:** BioSimLayer helps pharmaceutical teams decide which physical experiment to run next. It does not replace laboratory or clinical testing, does not guarantee safety, efficacy or regulatory acceptance, and does not bypass patent law.
2. **Partnership Status:** No academic, governmental, or corporate entity (DU, BUET, IUBAT, DGDA, CROs, pharma companies) is shown as confirmed until formal agreements are signed. All are designated target or planned consortium nodes (`PLANNED`).
3. **No Unaudited Datasets:** We state *"Data foundation: dataset audit in progress. Counts published after audit."*
4. **Validation Transparency:** No unsupported accuracy percentages. Validation scorecard publishes upon completion of Stage 01 gate, including negative results.
