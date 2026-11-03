// On-page SEO and quality checks across every built page. Run: node src/audit.mjs   (exit 1 on any failure)
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './ui.mjs';
import core from './content/core.mjs';
import consulting from './content/consulting.mjs';
import training from './content/training.mjs';
import guides from './content/guides.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = [...core, ...consulting, ...training, ...guides].filter((p) => !p.noindex);
const fileOf = (path) => join(root, path.slice(1), 'index.html');
const tidy = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const lc = (s) => s.toLowerCase().replace(/[’']/g, "'");
const LIMITS = { title: [30, 60], desc: [110, 160] };
// Real queries from Google Autocomplete (India). Each must appear on the page that targets it.
const SECONDARY = {
  '/': ['business management consultant', 'business advisor in Kerala', 'business consulting firms', 'best business consultant in Kerala', 'business consultancy services'],
  '/business-consultant-trivandrum/': ['best business consultants in Trivandrum', 'business consultant in Thiruvananthapuram'],
  '/business-consultant-kochi/': ['business consultants in Kochi', 'business consulting company in Kochi', 'business consulting firms', 'management consultants'],
  '/business-consultant-calicut/': ['business consultant in Kozhikode'],
  '/business-coach-kerala/': ['best business coach in Kerala', 'business mentor in Kerala', 'business trainer in Kerala', 'business coach fees in India', 'top business coach in Kochi'],
  '/family-business-consultant-kerala/': ['family business consultants in Kerala'],
  '/sop-consulting/': ['SOP consultants', 'SOP consulting services', 'SOP development', 'SOP writing', 'standard operating procedure'],
  '/business-process-consulting/': ['business process consulting services', 'process improvement', 'process optimisation'],
  '/business-automation/': ['workflow automation', 'CRM for small business', 'CRM setup', 'business automation services'],
  '/kra-consulting/': ['KRA setting', 'KRA and KPI'],
  '/startup-consulting/': ['startup consulting', 'startup mentor', 'startup advisor'],
  '/free-business-audit/': ['business audit', 'operational audit', 'internal audit', 'small business audit checklist'],
  '/pricing/': ['business consultant fees in India', 'business coach fees in India', 'management consultant fees', 'how much does a business coach cost'],
  '/corporate-training/': ['corporate training in Trivandrum', 'corporate training in Kochi', 'corporate trainer in Kerala', 'soft skills training in Trivandrum', 'sales training'],
  '/leadership-training/': ['leadership training cost', 'leadership development', 'leadership training in Kochi'],
  '/telecalling-training/': ['telecalling training in Malayalam', 'telecaller training institute', 'telecalling course'],
  '/fresh-graduate-training/': ['finishing school in Trivandrum', 'finishing school in Kerala', 'fresh graduate training program', 'employability training'],
  '/sme-training/': ['SME training', 'MSME training in Kerala', 'MSME training programs'],
  '/office-administration-training/': ['office administration course in Trivandrum'],
  '/digital-marketing-training-for-entrepreneurs/': ['digital marketing course for business owners', 'digital marketing course for entrepreneurs'],
  '/guides/stop-micromanaging-your-team/': ['how to delegate tasks', 'manage without micromanaging', 'stop micromanaging myself'],
  '/guides/how-to-write-an-sop/': ['standard operating procedure template'],
  '/guides/sop-examples-for-business/': ['example of an SOP in business', 'SOP in customer service'],
  '/guides/kra-examples-small-business/': ['KRA examples for employees', 'KRA examples for managers', 'KRA and KPI'],
  '/guides/how-to-scale-a-small-business/': ['scale a service business', 'growth'],
  '/guides/how-to-be-a-good-telecaller/': ['effective telecalling', 'telecalling tips', 'what is telecalling'],
};
const AI_WORDS = /\b(delve|tapestry|seamless(ly)?|leverag(e|ing)|elevate your|unlock your|game.?changer|cutting.?edge|robust|holistic|synerg|in today's (fast|digital|competitive)|landscape of|empower(ing)? your)\b/i;
const FAKE = /\b(189|42k|82\+|200\+ project|15\+ years|No\.? ?1 |number one in kerala)/i;

let fails = 0;
const seen = { title: new Map(), desc: new Map() };
const linkedFrom = new Map();
const rows = [];

for (const p of pages) {
  const html = readFileSync(fileOf(p.path), 'utf8');
  const main = html.slice(html.indexOf('<main'), html.indexOf('</main>'));
  const bad = (m) => { fails++; console.log(`FAIL ${p.path}  ${m}`); };
  const title = html.match(/<title>(.*?)<\/title>/)[1].replace(/&amp;/g, '&');
  const desc = html.match(/name="description" content="(.*?)"/)[1].replace(/&amp;/g, '&');
  const h1s = [...main.matchAll(/<h1[^>]*>(.*?)<\/h1>/gs)].map((m) => tidy(m[1]));
  const k = lc(p.keyword);

  if (title.length < LIMITS.title[0] || title.length > LIMITS.title[1]) bad(`title length ${title.length}: ${title}`);
  if (desc.length < LIMITS.desc[0] || desc.length > LIMITS.desc[1]) bad(`description length ${desc.length}`);
  if (h1s.length !== 1) bad(`${h1s.length} h1 tags`);
  if (!lc(title).includes(k)) bad(`keyword "${p.keyword}" not in title: ${title}`);
  if (!lc(desc).includes(k)) bad(`keyword "${p.keyword}" not in description`);
  if (!lc(h1s[0] || '').includes(k)) bad(`keyword "${p.keyword}" not in h1: ${h1s[0]}`);
  if (seen.title.has(title)) bad(`duplicate title with ${seen.title.get(title)}`); seen.title.set(title, p.path);
  if (seen.desc.has(desc)) bad(`duplicate description with ${seen.desc.get(desc)}`); seen.desc.set(desc, p.path);
  if (!html.includes(`rel="canonical" href="${site.url}${p.path}"`)) bad('canonical wrong');
  for (const tag of ['og:title', 'og:description', 'og:image', 'og:url']) if (!html.includes(`property="${tag}"`)) bad(`missing ${tag}`);

  // heading order: never skip a level inside main
  let last = 1;
  for (const m of main.matchAll(/<h([1-6])\b/g)) { const n = +m[1]; if (n > last + 1) bad(`heading jumps h${last} to h${n}`); last = n; }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]+"/.test(m[0])) bad(`img without alt: ${m[0].slice(0, 90)}`);
    if (!/\bwidth="\d+"/.test(m[0]) || !/\bheight="\d+"/.test(m[0])) bad(`img without size: ${m[0].slice(0, 90)}`);
    const src = m[0].match(/\bsrc="([^"]+)"/)[1];
    if (src.startsWith('/') && !existsSync(join(root, src.slice(1)))) bad(`missing image ${src}`);
    for (const s of [...(m[0].match(/srcset="([^"]+)"/)?.[1].split(',') || [])]) {
      const u = s.trim().split(' ')[0];
      if (!existsSync(join(root, u.slice(1)))) bad(`missing srcset image ${u}`);
    }
  }
  for (const m of html.matchAll(/<source src="([^"]+)"|poster="([^"]+)"/g)) { const u = m[1] || m[2]; if (!existsSync(join(root, u.slice(1)))) bad(`missing media ${u}`); }

  let graph;
  try { graph = JSON.parse(html.match(/application\/ld\+json">(.*?)<\/script>/s)[1])['@graph']; } catch (e) { bad(`bad JSON-LD: ${e.message}`); continue; }
  const types = graph.map((g) => g['@type']);
  if (p.path !== '/' && !types.includes('BreadcrumbList')) bad('no breadcrumb schema');
  if (p.service && !types.includes('Service')) bad('no Service schema');
  if (p.article && !types.includes('Article')) bad('no Article schema');
  if (p.faqs?.length) {
    if (!types.includes('FAQPage')) bad('no FAQ schema');
    for (const [q] of p.faqs) if (!tidy(main).includes(tidy(q))) bad(`schema FAQ not visible: ${q}`);
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const u = m[1];
    if (u.startsWith('/assets/')) { if (!existsSync(join(root, u.slice(1)))) bad(`broken asset ${u}`); continue; }
    if (!existsSync(join(root, u.slice(1), 'index.html'))) bad(`broken link ${u}`);
  }
  for (const m of main.matchAll(/href="(\/[^"#?]*)/g)) if (!m[1].startsWith('/assets/') && m[1] !== p.path) {
    if (!linkedFrom.has(m[1])) linkedFrom.set(m[1], new Set());
    linkedFrom.get(m[1]).add(p.path);
  }

  const text = tidy(main.replace(/<(script|style)[^>]*>.*?<\/\1>/gs, ''));
  const words = text.split(' ').length;
  if (AI_WORDS.test(text)) bad(`stock phrase: ${text.match(AI_WORDS)[0]}`);
  if (FAKE.test(text)) bad(`unverified claim: ${text.match(FAKE)[0]}`);
  if (/undefined|\[object|TODO|lorem/i.test(text)) bad('template leak');
  const emDash = (text.match(/—/g) || []).length;
  if (emDash > 0) bad(`${emDash} em dashes`);
  const minWords = ['/privacy-policy/', '/contact/', '/guides/', '/gallery/'].includes(p.path) ? 60 : 450;
  if (words < minWords) bad(`thin: ${words} words`);
  for (const term of SECONDARY[p.path] || []) if (!lc(text).includes(lc(term))) bad(`secondary keyword missing: ${term}`);
  const inFirst = lc(text.split(' ').slice(0, 80).join(' ')).includes(k);
  if (!inFirst) bad(`keyword "${p.keyword}" not in first 80 words`);
  rows.push({ path: p.path, keyword: p.keyword, words, title: title.length, desc: desc.length, kb: Math.round(html.length / 1024), schema: types.length });
}

for (const p of pages) if (p.path !== '/' && !['/privacy-policy/'].includes(p.path) && !(linkedFrom.get(p.path)?.size)) { console.log(`WARN ${p.path}  only linked from nav/footer, no in-content links`); }

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
for (const p of pages) if (!sitemap.includes(`<loc>${site.url}${p.path}</loc>`)) { fails++; console.log(`FAIL sitemap missing ${p.path}`); }

console.table(rows);
console.log(fails ? `\n${fails} FAILED` : `\nAll checks passed on ${pages.length} pages.`);
process.exit(fails ? 1 : 0);
