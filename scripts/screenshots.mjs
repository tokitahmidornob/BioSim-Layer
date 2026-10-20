import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = process.argv[2] || 'before'; // 'before' or 'after'
const outputDir = path.resolve(__dirname, `../docs/screenshots/${mode}`);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const routes = [
  { name: 'home', path: '/' },
  { name: 'platform', path: '/platform' },
  { name: 'services', path: '/services' },
  { name: 'solutions', path: '/solutions' },
  { name: 'why-bangladesh', path: '/why-bangladesh' },
  { name: 'pricing', path: '/pricing' },
  { name: 'validation', path: '/validation' },
  { name: 'roadmap', path: '/roadmap' },
  { name: 'investors', path: '/investors' },
  { name: 'about', path: '/about' },
  { name: 'resources', path: '/resources' },
  { name: 'contact', path: '/contact' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
  { name: 'responsible-use', path: '/responsible-use' },
  { name: 'console', path: '/console' }
];

const viewports = [
  { width: 375, height: 812, label: '375' },
  { width: 768, height: 1024, label: '768' },
  { width: 1280, height: 800, label: '1280' },
  { width: 1920, height: 1080, label: '1920' }
];

async function capture() {
  console.log(`Starting capture mode: [${mode}]...`);
  
  // Try launching Edge or Chrome via playwright-core channel
  let browser;
  try {
    browser = await chromium.launch({
      channel: 'msedge',
      headless: true
    });
    console.log('Launched Microsoft Edge');
  } catch (err) {
    console.log('Edge failed, attempting Chrome channel:', err.message);
    browser = await chromium.launch({
      channel: 'chrome',
      headless: true
    });
    console.log('Launched Google Chrome');
  }

  const baseUrl = 'http://127.0.0.1:5173';

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();

    for (const route of routes) {
      const url = `${baseUrl}${route.path}`;
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
        // Give animations a moment to settle
        await page.waitForTimeout(600);

        const filename = `${route.name}_${vp.label}.png`;
        const filepath = path.join(outputDir, filename);

        await page.screenshot({ path: filepath, fullPage: true });
        console.log(`Saved: [${mode}] ${filename}`);
      } catch (e) {
        console.error(`Failed to capture ${route.name} at ${vp.label}px:`, e.message);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log(`✅ All screenshots captured for mode: [${mode}] at ${outputDir}`);
}

capture().catch(err => {
  console.error('Capture script error:', err);
  process.exit(1);
});
