// Builds the static site into the repo root, which GitHub Pages serves. Run: node src/build.mjs
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, site } from './ui.mjs';
import core from './content/core.mjs';
import consulting from './content/consulting.mjs';
import training from './content/training.mjs';
import guides from './content/guides.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const css = readFileSync(join(root, 'src/site.css'), 'utf8').replace(/\/\*.*?\*\//gs, '').replace(/\s*\n\s*/g, '');
const js = readFileSync(join(root, 'src/site.js'), 'utf8').replace(/\s*\n\s*/g, '');
const pages = [...core, ...consulting, ...training, ...guides];

const write = (file, text) => {
  mkdirSync(dirname(join(root, file)), { recursive: true });
  writeFileSync(join(root, file), text);
};

for (const p of pages) write(p.file || `${p.path.slice(1)}index.html`, render(p, css, js));

// GitHub Pages can't send 301s, so old URLs get an instant refresh plus a canonical, which Google treats as a redirect.
// ponytail: move to Cloudflare or Netlify if true 301s are ever needed.
const moved = {
  'about-trainova.html': '/about/',
  'contact-trainova.html': '/contact/',
  'gallery.html': '/gallery/',
  'trainings.html': '/corporate-training/',
  'startup-consulting-and-training-for-entrepreneurs.html': '/startup-consulting/',
  'business-scaling-consulting-and-training-for-entrepreneurs.html': '/business-scaling-consulting/',
};
for (const [file, to] of Object.entries(moved)) {
  write(file, `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><title>This page has moved | Trainova BS</title><link rel="canonical" href="${site.url}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"></head><body><p>This page has moved to <a href="${to}">${site.url}${to}</a>.</p></body></html>\n`);
}

const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable.map((p) => `<url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
write('.nojekyll', '');
console.log(`Built ${pages.length} pages, ${Object.keys(moved).length} redirects.`);
