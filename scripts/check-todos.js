import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.resolve(__dirname, '../src');

function findTodos(dir, todos = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      findTodos(fullPath, todos);
    } else if (/\.(js|jsx|ts|tsx|json)$/i.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, lineNum) => {
        if (line.includes('TODO_CONFIRM')) {
          todos.push({
            file: path.relative(path.resolve(__dirname, '..'), fullPath),
            line: lineNum + 1,
            text: line.trim()
          });
        }
      });
    }
  }

  return todos;
}

const todos = findTodos(srcDir);

console.log('\n========================================');
console.log('🔍 BIOSIMLAYER UNCONFIRMED ITEMS AUDIT');
console.log('========================================\n');

if (todos.length > 0) {
  console.log(`Found ${todos.length} item(s) marked 'TODO_CONFIRM' requiring founder confirmation:\n`);
  todos.forEach((item, idx) => {
    console.log(`  ${idx + 1}. [${item.file}:${item.line}]`);
    console.log(`     Code: ${item.text}\n`);
  });
  console.log('⚠️ Reminder: Do not invent email, phone, URLs, roles, valuation or equity figures before the 27 Oct final.');
  console.log('Exiting with non-zero status as requested.\n');
  process.exit(1);
} else {
  console.log('✅ No TODO_CONFIRM items remain in codebase.');
  process.exit(0);
}
