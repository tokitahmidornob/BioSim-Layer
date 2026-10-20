import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CLAIMS } from '../src/data/claims.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsDir = path.resolve(__dirname, '../docs');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

let md = `# BioSimLayer Formal Claims Register
*Generated automatically from \`src/data/claims.js\` for Shark Tank-style Investor Final (27 October 2026)*

> **Claims Governance Rule:** Every numeric or factual statement on the BioSimLayer commercial site must map to this register with an explicit status badge. Forbidden phrases (e.g. "guarantee", "100%", "monopoly", "FDA approved", "air-gapped" as present fact) are strictly blocked by build scripts.

---

## 1. Summary of Claims by Status Flag

| Status Flag | Description | Count |
| :--- | :--- | :---: |
`;

const counts = {};
CLAIMS.forEach(c => {
  counts[c.status] = (counts[c.status] || 0) + 1;
});

Object.keys(counts).forEach(status => {
  md += `| **\`${status}\`** | Active claim category | **${counts[status]}** |\n`;
});

md += `\n**Total Documented Claims:** ${CLAIMS.length}\n\n---\n\n## 2. Complete Claims Ledger\n\n`;

md += `| ID | Factual / Numeric Claim | Status | Page(s) | Primary Source / Basis |\n`;
md += `| :--- | :--- | :---: | :--- | :--- |\n`;

CLAIMS.forEach(c => {
  md += `| \`${c.id}\` | ${c.claim.replace(/\|/g, '\\|')} | \`${c.status}\` | ${c.page} | ${c.sourceName} |\n`;
});

md += `\n---\n\n## 3. Mandatory Positioning Principles
1. **Decision Support Only:** BioSimLayer helps pharmaceutical teams decide which physical experiment to run next. It does not replace laboratory or clinical testing, does not guarantee safety, efficacy or regulatory acceptance, and does not bypass patent law.
2. **Partnership Status:** No academic, governmental, or corporate entity (DU, BUET, IUBAT, DGDA, CROs, pharma companies) is shown as confirmed until formal agreements are signed. All are designated target or planned consortium nodes (\`PLANNED\`).
3. **No Unaudited Datasets:** We state *"Data foundation: dataset audit in progress. Counts published after audit."*
4. **Validation Transparency:** No unsupported accuracy percentages. Validation scorecard publishes upon completion of Stage 01 gate, including negative results.
`;

const outputPath = path.join(docsDir, 'CLAIMS_REGISTER.md');
fs.writeFileSync(outputPath, md, 'utf8');

console.log(`✅ CLAIMS_REGISTER.md generated successfully at: ${outputPath}`);
