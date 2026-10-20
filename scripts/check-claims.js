import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.resolve(__dirname, '../src');

// Forbidden phrases per Non-Negotiable Claims Policy
const FORBIDDEN_PHRASES = [
  'guarantee',
  'guaranteed',
  'monopoly',
  'mandatory',
  'de facto standard',
  'replaces clinical trials',
  'replaces lab',
  'fda approved',
  'fda compliant',
  'certified',
  'regulatory-grade',
  'zero risk',
  'air-gapped',
  'trusted by',
  'partnered with',
  '90% accurate'
];

// Contextual phrases: "100%" as a marketing claim (e.g. "100% accurate", "100% safe", "100% crash-proof"),
// but excluding CSS width: 100%, keyframes 100%, and SVG stop offsets
const FORBIDDEN_REGEXES = [
  /100%\s*(accurate|safe|crash-proof|guaranteed|effective|confidence|precision|reliable)/i
];

// Explicitly allowed phrases where words like "guarantee" appear in a negative/disclaimer sense
const ALLOWLIST_SUBSTRINGS = [
  'does not guarantee',
  'not guarantee',
  'not a guarantee',
  'no guarantee',
  'not an automatic guarantee',
  'scripts/check-claims.js',
  'ALLOWLIST'
];

function checkDirectory(dir, issues = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      checkDirectory(fullPath, issues);
    } else if (/\.(js|jsx|ts|tsx|html|md)$/i.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, lineNum) => {
        const lowerLine = line.toLowerCase();
        
        // Skip lines that have an explicit allowlisted negation
        if (ALLOWLIST_SUBSTRINGS.some(allow => lowerLine.includes(allow))) {
          return;
        }

        for (const phrase of FORBIDDEN_PHRASES) {
          if (lowerLine.includes(phrase)) {
            issues.push({
              file: path.relative(path.resolve(__dirname, '..'), fullPath),
              line: lineNum + 1,
              phrase,
              snippet: line.trim()
            });
          }
        }

        for (const regex of FORBIDDEN_REGEXES) {
          if (regex.test(line)) {
            issues.push({
              file: path.relative(path.resolve(__dirname, '..'), fullPath),
              line: lineNum + 1,
              phrase: '100% (marketing claim)',
              snippet: line.trim()
            });
          }
        }
      });
    }
  }

  return issues;
}

const issues = checkDirectory(srcDir);

if (issues.length > 0) {
  console.error('\x1b[31m%s\x1b[0m', '❌ CLAIMS POLICY VIOLATION: Forbidden phrases detected in source code:');
  issues.forEach(issue => {
    console.error(`  - [${issue.file}:${issue.line}] Matched "${issue.phrase}": "${issue.snippet}"`);
  });
  console.error('\x1b[33m%s\x1b[0m', '\nRequired action: Remove forbidden claims or replace with compliant positioning.');
  process.exit(1);
} else {
  console.log('\x1b[32m%s\x1b[0m', '✅ All claims policy checks passed. Zero forbidden phrases found in src/.');
  process.exit(0);
}
