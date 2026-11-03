// Shared layout and section components. Content strings are trusted HTML written in src/content.
import { customers as customerList, testimonials } from './content/proof.mjs';

export const site = {
  name: 'Trainova BS',
  legal: 'TrainovaBS Private Limited',
  url: 'https://www.trainovaglobal.com',
  tel: '+919061266629',
  telText: '+91 90612 66629',
  wa: 'https://wa.me/919061266629',
  email: 'info@trainovaglobal.com',
  street: 'TC 52/936 KJ Square Regus, Neeramankara, near Karamana - Poojapura Road, Kaimanam',
  city: 'Thiruvananthapuram',
  region: 'Keralam',
  pin: '695040',
  country: 'India',
  ga4: 'G-1MQ62Y0T44', // Google Analytics measurement ID. Empty means no analytics loads.
  sameAs: ['https://www.instagram.com/trainovabs/', 'https://www.linkedin.com/company/trainovabs-pvt-ltd/', 'https://www.facebook.com/share/17K8p7oz5M/'],
  person: { name: 'Muhammad Anas NS', linkedin: 'https://www.linkedin.com/in/muhammad-anas-ns-37290794/' },
};

export const address = `${site.street}, ${site.city}, ${site.region} ${site.pin}, ${site.country}`;

export const consulting = [
  ['/sop-consulting/', 'SOP consulting', 'Get what is in your head onto paper'],
  ['/business-process-consulting/', 'Business process consulting', 'Find and fix where work gets stuck'],
  ['/business-automation/', 'Business automation and CRM', 'Stop chasing work on WhatsApp'],
  ['/kra-consulting/', 'KRA and team accountability', 'Everyone knows what they answer for'],
  ['/business-scaling-consulting/', 'Business scaling consulting', 'Grow without growing the chaos'],
  ['/startup-consulting/', 'Startup consulting', 'Set it up right from day one'],
  ['/business-coach-kerala/', 'Business coaching', 'After the seminar, the actual work'],
  ['/family-business-consultant-kerala/', 'Family business consulting', 'Two generations, one way of working'],
];
export const training = [
  ['/corporate-training/', 'All corporate training', 'Every programme in one place'],
  ['/leadership-training/', 'Leadership and core values', 'Managers who decide without you'],
  ['/telecalling-training/', 'Telecalling training', 'Callers who actually convert'],
  ['/fresh-graduate-training/', 'Fresh Graduate to Professional', 'The FG2P programme'],
  ['/sme-training/', 'SME training', 'For small teams with no HR department'],
  ['/process-training/', 'Process training', 'Make the SOPs stick'],
  ['/office-administration-training/', 'Smart office and administration', 'A back office that runs itself'],
  ['/digital-marketing-training-for-entrepreneurs/', 'Digital marketing for entrepreneurs', 'Know what you are paying for'],
];
export const guides = [
  ['/guides/business-cant-run-without-owner/', 'My business can’t run without me', 'Why it happens and how to get out'],
  ['/guides/stop-micromanaging-your-team/', 'How to stop micromanaging your team', 'Without everything falling apart'],
  ['/guides/how-to-write-an-sop/', 'How to write an SOP', 'With a template you can copy'],
  ['/guides/kra-examples-small-business/', 'KRA examples for small businesses', 'For eight common roles'],
  ['/guides/sop-examples-for-business/', 'SOP examples for business', 'Five real ones to copy'],
  ['/guides/how-to-scale-a-small-business/', 'How to scale a small business', 'What to fix before you grow'],
  ['/guides/how-to-be-a-good-telecaller/', 'How to be a good telecaller', 'For callers and the owners who hire them'],
];

const esc = (s) => String(s).replace(/&(?!amp;|lt;|gt;|quot;)/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const waText = (msg) => `${site.wa}?text=${encodeURIComponent(msg)}`;
export const waLink = waText('Hi Anas, I saw your website and I’d like to talk about my business.');

const IMG = {
  'anas-speaking': [480, 960, 1280 / 960], 'anas-gesture': [480, 960, 720 / 960], 'anas-boardroom': [480, 960, 720 / 960],
  'anas-session-wide': [480, 960, 1280 / 960], 'anas-trust-advantage': [480, 960, 720 / 960], 'anas-listening': [480, 960, 1280 / 960],
  'anas-session-side': [480, 960, 720 / 960], 'industry-meet-group': [640, 1280, 591 / 1280], 'anas-event-colleague': [480, 960, 720 / 960],
  'anas-event-hall': [480, 960, 1280 / 960], 'anas-dubai-colleagues': [480, 960, 720 / 960], 'anas-dubai-roadshow': [480, 960, 720 / 960],
  'dubai-roadshow-screen': [480, 591, 1280 / 591],
};
export function img(name, alt, sizes = '(max-width:860px) 100vw, 50vw') {
  const [a, b, r] = IMG[name];
  return `<img src="/assets/images/${name}-${b}.webp" srcset="/assets/images/${name}-${a}.webp ${a}w, /assets/images/${name}-${b}.webp ${b}w" sizes="${sizes}" width="${b}" height="${Math.round(b * r)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
}
export const fig = (name, alt, cap, cls = '', sizes) => `<figure${cls ? ` class="${cls}"` : ''}>${img(name, alt, sizes)}${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

export const cta = (label = 'Book my free business audit', href = '/free-business-audit/', note = '') =>
  `<div class="cta"><a class="btn btn-go" href="${href}">${label}</a><a class="btn btn-line" href="${waLink}" rel="noopener">WhatsApp us</a></div>${note ? `<p class="cta-note muted">${note}</p>` : ''}`;

export function hero({ scene, quote, after, h1, lede, log, side, md, ctaLabel, ctaHref, note }) {
  const right = log
    ? `<div class="log" role="img" aria-label="A list of calls from staff to the business owner through one day"><div class="log-head mono"><span>${log.title}</span><span>${log.count}</span></div><ul>${log.items.map(([t, x, hot], i) => `<li${hot ? ' class="hot"' : ''} style="--n:${i}"><span class="t">${t}</span><span>${x}</span></li>`).join('')}</ul></div>`
    : side || '';
  return `<section class="hero dark"><div class="wrap"><div class="hero-grid"><div>
${scene ? `<span class="scene mono">${scene}</span>` : ''}
<p class="quote${md ? ' q-md' : ''}">${quote}</p>
${after ? `<p class="after-quote">${after}</p>` : ''}
<h1>${h1}</h1>
<p class="lead">${lede}</p>
${cta(ctaLabel, ctaHref, note)}
</div>${right ? `<div>${right}</div>` : ''}</div></div></section>`;
}

// A short page head for pages that do not open on a scene.
export const plainHero = ({ eyebrow, h1, lede, extra = '' }) => `<section class="hero dark"><div class="wrap"><div class="prose">
${eyebrow ? `<span class="scene mono">${eyebrow}</span>` : ''}<h1 class="ph1">${h1}</h1><p class="lead">${lede}</p>${extra}</div></div></section>`;

export const band = (inner, cls = '') => `<section class="band ${cls}"><div class="wrap">${inner}</div></section>`;
export const head = (eyebrow, h2, intro = '') => `${eyebrow ? `<span class="eyebrow mono">${eyebrow}</span>` : ''}<h2>${h2}</h2>${intro ? `<p class="lead">${intro}</p>` : ''}`;

export const said = ({ eyebrow, lines, h2, paras, right = '' }) => band(`${eyebrow ? `<span class="eyebrow mono">${eyebrow}</span>` : ''}<ul class="said">${lines.map((l) => `<li>“${l}”</li>`).join('')}</ul>
<div class="two"><h2>${h2}</h2><div class="prose">${paras.map((p) => `<p>${p}</p>`).join('')}${right}</div></div>`);

export const scenes = ({ eyebrow, h2, intro, items, closer, after = '' }) => band(`${head(eyebrow, h2, intro)}<ul class="scenes">${items.map(([t, who, what]) => `<li><span class="t mono">${t}</span><h3>${who}</h3><p>${what}</p></li>`).join('')}</ul>${closer ? `<p class="closer">${closer}</p>` : ''}${after}`, 'dark');

export const doc = ({ id, title, meta, steps, note = 'Sample for illustration. Yours is written with your team, in your numbers.' }) => `<div class="doc"><div class="doc-head mono"><span>${id}</span><span class="green">Approved</span></div><p class="doc-title">${title}</p><dl>${meta.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl><ol>${steps.map((s) => `<li><span>${s}</span></li>`).join('')}</ol><p class="doc-note">${note}</p></div>`;

export const beforeAfter = ({ eyebrow, h2, intro, chainLabel, chain, document, cls = 'sheetband' }) => band(`${head(eyebrow, h2, intro)}<div class="docsplit"><div><p class="mono red">${chainLabel}</p><ul class="chain">${chain.map((c) => `<li>${c}</li>`).join('')}</ul></div>${document}</div>`, cls);

export const steps = ({ eyebrow, h2, intro, items, cols = 3, cls = 'rule', after = '' }) => band(`${head(eyebrow, h2, intro)}<ol class="steps${cols === 2 ? ' c2' : ''}">${items.map(([t, d, get]) => `<li><h3>${t}</h3><p>${d}</p>${get ? `<p class="get">You get: ${get}</p>` : ''}</li>`).join('')}</ol>${after}`, cls);

export const wounds = ({ eyebrow, h2, intro, items, cls = 'sheetband', after = '' }) => band(`${head(eyebrow, h2, intro)}<ul class="wounds">${items.map(([w, f]) => `<li><p class="wound">${w}</p><p class="fix">${f}</p></li>`).join('')}</ul>${after}`, cls);

export const afterState = ({ h2, lines, after = '' }) => band(`<h2>${h2}</h2><ul class="after">${lines.map((l) => `<li>${l}</li>`).join('')}</ul>${after}`, 'dark');

export const notFor = ({ h2 = 'Who we are not for', intro, items }) => band(`<div class="two"><div><h2>${h2}</h2>${intro ? `<p>${intro}</p>` : ''}</div><ul class="crosses">${items.map((x) => `<li>${x}</li>`).join('')}</ul></div>`, 'rule');

export const cards = (items, label = 'Read more') => `<div class="cards${items.length > 3 ? ' c4' : ''}">${items.map(([h, t, d]) => `<a class="card" href="${h}"><b>${t}</b><span>${d}</span><em>${label} <i>→</i></em></a>`).join('')}</div>`;

// Decorative service names, hidden from screen readers because the real links sit below it.
export const ticker = () => { const names = [...consulting, ...training.slice(1)].map(([, t]) => `<span class="mono">${t}</span>`).join(''); return `<div class="tick" aria-hidden="true"><div>${names}${names}</div></div>`; };

export const related = (h2, paths, label) => {
  const all = [...consulting, ...training, ...guides, ...extraLinks];
  return band(`<h2>${h2}</h2>${cards(paths.map((p) => all.find((x) => x[0] === p) || (() => { throw new Error('related: unknown ' + p); })()), label)}`, 'rule');
};
export const extraLinks = [
  ['/free-business-audit/', 'Free business audit', 'See where your business depends on you'],
  ['/pricing/', 'Plans and fees', 'What it costs, in plain numbers'],
  ['/about/', 'About Trainova BS', 'Who you will be working with'],
  ['/business-consultant-trivandrum/', 'Business consultant in Trivandrum', 'Our home city'],
  ['/business-consultant-kochi/', 'Business consultant in Kochi', 'For owners in Ernakulam district'],
  ['/business-consultant-calicut/', 'Business consultant in Calicut', 'For owners in Kozhikode and Malabar'],
  ['/guides/', 'Free guides', 'Everything we would tell you on a call'],
  ['/', 'Trainova BS home', 'Business consultant in Kerala'],
];

export const plans = (heading = true) => {
  const data = [
    { n: 'Basic package', t: 'Foundation Setup', p: '₹9,999', f: 'For a small team where everything still runs through the owner.', i: ['Free business audit', 'Vision setting and strategy', 'Team role clarity', 'Basic CRM and funnel setup', 'Email and call support'] },
    { n: 'Silver package', t: 'Growth Accelerator', p: '₹24,999', f: 'For a growing team that needs its work written down.', i: ['Everything in Basic, plus:', 'Internal audits and process optimisation', 'Leadership and team development', 'Custom SOP documentation', 'Priority support'], best: 1 },
    { n: 'Platinum package', t: 'Full-Scale Transformation', p: '₹49,999', f: 'For the business ready to run without the owner in every room.', i: ['Everything in Silver, plus:', 'Complete organisational support', 'Strategic planning (SWOT, KRA)', 'Marketing integration with the BrinIT team', 'Full SOP and process automation'] },
  ];
  return `<div class="plans">${data.map((x) => `<div class="plan${x.best ? ' best' : ''}"><span class="tag mono">${x.n}</span><h3>${x.t}</h3><p class="price">${x.p}</p><p class="per">per month, or custom pricing</p><p class="for">${x.f}</p><ul>${x.i.map((l) => `<li>${l}</li>`).join('')}</ul><a class="btn ${x.best ? 'btn-go' : 'btn-line'}" href="/free-business-audit/">Start with the free audit</a></div>`).join('')}</div>`;
};

export const faq = (items, h2 = 'Questions owners ask us', eyebrow = '') => band(`${head(eyebrow, h2)}<div class="faq">${items.map(([q, a]) => `<details><summary><h3>${q}</h3></summary><div class="a"><p>${a}</p></div></details>`).join('')}</div>`, 'rule');

// One group must be wider than the widest screen, so short lists repeat inside it. Two groups slide -50% and loop.
const TILE = 214;
const logoTile = ([f, n], visible) => `<li><img src="/assets/images/customers/${f}" width="178" height="84" alt="${visible ? esc(n) : ''}"${visible ? '' : ' data-dup'} loading="lazy" decoding="async"></li>`;
const marquee = () => {
  const repeat = Math.ceil(2800 / (customerList.length * TILE));
  const group = (first) => Array.from({ length: repeat }, (_, i) => customerList.map((c) => logoTile(c, first && i === 0)).join('')).join('');
  const seconds = customerList.length * repeat * 4.5;
  return `<div class="mq" id="customers-mq" style="--t:${seconds}s"><div class="mq-t"><ul class="mq-g">${group(true)}</ul><ul class="mq-g mq-dup" aria-hidden="true">${group(false)}</ul></div></div>`;
};
const quoteCard = (t) => `<article class="tm"><div class="tm-b">${t.draft ? `<p class="tm-draft mono">Draft · awaiting ${t.name}’s approval</p>` : ''}<blockquote><p class="tm-h">${t.headline}</p><p class="tm-q">${t.quote}</p></blockquote><div class="tm-foot">${t.photo ? `<img class="tm-av" src="/assets/images/testimonials/${t.photo}" width="240" height="240" alt="${esc(t.name)}" loading="lazy" decoding="async">` : ''}<p class="tm-by"><b>${t.name}</b><span>${t.role}</span></p>${t.logo ? `<span class="tm-logo"><img src="/assets/images/customers/${t.logo}" width="150" height="44" alt="${esc(t.role.split(', ').pop())}" loading="lazy" decoding="async"></span>` : ''}</div></div></article>`;
export const proofSection = () => `<section class="band proof sheetband"><div class="wrap">
${head('In their words', 'You’ve heard enough promises. Hear it from someone in your chair.')}
<div class="tms-w"><div class="tms"${testimonials.length > 1 ? ' tabindex="0" role="region" aria-label="Testimonials"' : ''}>${testimonials.map(quoteCard).join('')}</div>${testimonials.length > 1 ? '<div class="tms-nav"><button type="button" data-d="0" aria-label="Previous testimonial">←</button><button type="button" data-d="1" aria-label="Next testimonial">→</button></div>' : ''}</div>
<div class="logos-head"><div><h3>It’s not easy to let an outsider see how things really run.</h3><p>These businesses opened the door to us anyway.</p></div><button class="mq-pause" type="button" aria-controls="customers-mq" aria-pressed="false">Pause</button></div>
</div>${marquee()}</section>`;

const defaultNeeds = ['My team calls me for every small decision', 'Nothing is written down', 'I can’t take a week off', 'Revenue grew but profit didn’t', 'Good people keep leaving', 'Sales only happen when I push'];

export const leadForm = ({ h2 = 'Tell us what your week actually looks like.', sub = 'The audit is free. It goes straight to our WhatsApp, not a call centre.', needs = defaultNeeds, from = 'trainovaglobal.com', legend = 'and right now:', ask = '', proof = true } = {}) => `${proof ? proofSection() : ''}<section class="band dark lead-sec" id="talk"><div class="wrap"><div class="leadgrid"><div>
<span class="eyebrow mono">Trainova BS · Trivandrum, Kerala</span><h2>${h2}</h2><p class="lead">${sub}</p>
<form action="${site.wa}" method="get" target="_blank" data-wa="${esc(from)}"${ask ? ` data-ask="${esc(ask)}"` : ''} style="margin-top:22px">
<p class="mad">Hi, I’m <label><span class="sr">Your name</span><input name="name" required autocomplete="name" placeholder="your name"></label> from <label><span class="sr">Your business name</span><input name="biz" required autocomplete="organization" placeholder="your business"></label>. We have <label><span class="sr">Team size</span><select name="size"><option>under 10 people</option><option>10 to 25 people</option><option>25 to 50 people</option><option>50 to 100 people</option><option>over 100 people</option></select></label></p>
<fieldset><legend>${legend}</legend><div class="chips">${needs.map((n) => `<label><input type="checkbox" name="need" value="${esc(n)}">${n}</label>`).join('')}</div></fieldset>
<p class="mad">Reach me on <label><span class="sr">Your phone or WhatsApp number</span><input type="tel" name="phone" required autocomplete="tel" inputmode="tel" placeholder="your number"></label></p>
<div class="cta"><button class="btn btn-go" type="submit">Send on WhatsApp</button></div>
<noscript><p class="alt">If this form doesn’t open WhatsApp, message us directly using the number below.</p></noscript>
<p class="alt">Prefer to talk? <a href="tel:${site.tel}">${site.telText}</a> · <a href="mailto:${site.email}">${site.email}</a></p>
</form></div>
<figure class="leadpic"><img src="/assets/images/anas-brochure-800.webp" width="800" height="1067" alt="Anas of Trainova BS, seated, pointing at a brochure that reads We Shape Values into Scalable Systems and SOPs" loading="lazy" decoding="async"></figure>
</div></div></section>`;

const current = (path, h) => (path === h ? ' aria-current="page"' : '');
const megaMenu = (path, id, label, items, cur, feat) => `<li class="has-mega"><button type="button" class="lnk${cur ? ' cur' : ''}" aria-expanded="false" aria-controls="${id}">${label}<span class="chev" aria-hidden="true"></span></button>
<div class="mega" id="${id}"><div class="mega-l">${items.map(([h, t, d], i) => `<a class="mi" href="${h}" style="--i:${i}"${current(path, h)}><b>${t}</b><small>${d}</small></a>`).join('')}</div>${feat}</div></li>`;
const feature = (cls, href, tag, title, text) => `<a class="feat ${cls}" href="${href}"><span class="mono">${tag}</span><strong>${title}</strong><small>${text}</small></a>`;
const navLink = (path, h, t, cur) => `<li><a class="lnk${cur ? ' cur' : ''}" href="${h}"${current(path, h)}>${t}</a></li>`;
const header = (path) => {
  const inConsulting = consulting.some(([h]) => h === path) || path.startsWith('/business-consultant-');
  const inTraining = training.some(([h]) => h === path);
  const mobile = [
    `<details class="mg" name="m" style="--n:0"><summary>Consulting</summary><div class="mg-l">${consulting.map(([h, t]) => `<a href="${h}"${current(path, h)}>${t}</a>`).join('')}</div></details>`,
    `<details class="mg" name="m" style="--n:1"><summary>Training</summary><div class="mg-l">${training.map(([h, t]) => `<a href="${h}"${current(path, h)}>${t}</a>`).join('')}</div></details>`,
    ...[['/pricing/', 'Pricing'], ['/guides/', 'Guides'], ['/about/', 'About'], ['/gallery/', 'Gallery'], ['/contact/', 'Contact']].map(([h, t], i) => `<a href="${h}" style="--n:${i + 2}"${current(path, h)}>${t}</a>`),
  ].join('');
  return `<a class="skip" href="#main">Skip to content</a><header class="top"><div class="bar"><span class="ind" aria-hidden="true"></span>
<a class="logo" href="/" aria-label="Trainova BS home"><img src="/assets/images/logo-white.webp" width="544" height="147" alt="Trainova BS"></a>
<nav class="nav" aria-label="Main"><ul class="links">
${megaMenu(path, 'mega-consulting', 'Consulting', consulting, inConsulting, feature('f1', '/free-business-audit/', 'Start here', 'Free business audit', 'See where your business depends on you.'))}
${megaMenu(path, 'mega-training', 'Training', training, inTraining, feature('f2', '/corporate-training/#talk', 'For your team', 'Ask about a batch', 'Tell us your team size and what should change.'))}
${navLink(path, '/pricing/', 'Pricing')}${navLink(path, '/guides/', 'Guides', path.startsWith('/guides/'))}${navLink(path, '/about/', 'About')}${navLink(path, '/contact/', 'Contact')}
</ul></nav>
<div class="bar-end"><a class="bar-tel" href="tel:${site.tel}">${site.telText}</a><a class="bar-cta" href="/free-business-audit/">Free business audit <i aria-hidden="true">→</i></a>
<details class="burger"><summary aria-label="Open menu"><span class="bx" aria-hidden="true"><i></i><i></i></span></summary><div class="mp"><nav class="mp-nav" aria-label="Mobile">${mobile}</nav>
<div class="mp-end dark"><a class="btn btn-go" href="/free-business-audit/">Book my free business audit</a><a class="btn btn-line" href="${waLink}" rel="noopener">WhatsApp us</a><a class="mp-tel" href="tel:${site.tel}">${site.telText}</a></div></div></details></div>
</div></header>`;
};

const list = (title, items) => `<div><h2>${title}</h2><ul>${items.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>`;
const footer = `<footer class="foot"><div class="wrap"><div class="foot-grid">
<div><img src="/assets/images/logo-white.webp" width="544" height="147" alt="Trainova BS" loading="lazy"><p>From chaos to process. We help Kerala’s MSMEs build the systems that let a business run without its owner in every room.</p>
<address>${site.legal}<br>${site.street}<br>${site.city}, ${site.region} ${site.pin}, ${site.country}<br><a href="tel:${site.tel}">${site.telText}</a><br><a href="mailto:${site.email}">${site.email}</a></address>
<p><a href="${site.sameAs[0]}" rel="noopener">Instagram</a> · <a href="${site.sameAs[1]}" rel="noopener">LinkedIn</a> · <a href="${site.sameAs[2]}" rel="noopener">Facebook</a></p></div>
${list('Consulting', [...consulting, ['/business-consultant-trivandrum/', 'Business consultant, Trivandrum'], ['/business-consultant-kochi/', 'Business consultant, Kochi'], ['/business-consultant-calicut/', 'Business consultant, Calicut']])}
${list('Training', training)}
${list('Company', [['/free-business-audit/', 'Free business audit'], ['/pricing/', 'Plans and fees'], ['/about/', 'About'], ['/gallery/', 'Gallery'], ['/guides/', 'Guides'], ...guides.map(([h, t]) => [h, t]), ['/contact/', 'Contact'], ['/privacy-policy/', 'Privacy policy']])}
</div><div class="legal"><span>© ${new Date().getFullYear()} ${site.legal}. All rights reserved.</span><span>Website designed by <a href="https://www.prception.in" rel="noopener">PRception</a></span></div></div></footer>
<div class="mbar"><a href="tel:${site.tel}">Call</a><a href="${waLink}" rel="noopener">WhatsApp</a><a href="/free-business-audit/">Free audit</a></div>`;

const fontFace = `@font-face{font-family:"Bricolage Grotesque";src:url(/assets/fonts/display.woff2) format("woff2");font-weight:800;font-display:swap}@font-face{font-family:"Instrument Sans";src:url(/assets/fonts/body.woff2) format("woff2");font-weight:400 700;font-display:swap}@font-face{font-family:"JetBrains Mono";src:url(/assets/fonts/mono.woff2) format("woff2");font-weight:500;font-display:swap}`;

const strip = (h) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

function schema(p) {
  const org = {
    '@type': 'ProfessionalService', '@id': `${site.url}/#org`, name: site.name, legalName: site.legal, url: `${site.url}/`,
    logo: `${site.url}/assets/images/logo.png`, image: `${site.url}/assets/images/og.jpg`, telephone: site.tel, email: site.email,
    slogan: 'Sculpting Entrepreneurial Chaos into Scalable Systems', priceRange: '₹9,999 to ₹49,999 per month',
    address: { '@type': 'PostalAddress', streetAddress: site.street, addressLocality: site.city, addressRegion: site.region, postalCode: site.pin, addressCountry: 'IN' },
    areaServed: { '@type': 'State', name: 'Kerala' }, sameAs: site.sameAs,
  };
  const url = site.url + p.path;
  const graph = [org, { '@type': 'WebSite', '@id': `${site.url}/#site`, url: `${site.url}/`, name: site.name, publisher: { '@id': `${site.url}/#org` }, inLanguage: 'en-IN' },
    { '@type': 'WebPage', '@id': `${url}#page`, url, name: p.title, description: p.description, isPartOf: { '@id': `${site.url}/#site` }, about: { '@id': `${site.url}/#org` }, inLanguage: 'en-IN' }];
  if (p.path !== '/') {
    const crumbs = [['Home', '/'], ...(p.parent ? [p.parent] : []), [p.crumb, p.path]];
    graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs.map(([n, h], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: site.url + h })) });
  }
  if (p.service) graph.push({ '@type': 'Service', '@id': `${url}#service`, name: p.service, serviceType: p.service, description: p.description, url, provider: { '@id': `${site.url}/#org` }, areaServed: p.area ? { '@type': 'City', name: p.area } : { '@type': 'State', name: 'Kerala' } });
  if (p.article) graph.push({ '@type': 'Article', '@id': `${url}#article`, headline: strip(p.article.headline), description: p.description, datePublished: p.article.date, dateModified: p.article.date, inLanguage: 'en-IN', mainEntityOfPage: url, image: `${site.url}/assets/images/og.jpg`, author: { '@type': 'Person', name: site.person.name, sameAs: site.person.linkedin, worksFor: { '@id': `${site.url}/#org` } }, publisher: { '@id': `${site.url}/#org` } });
  if (p.video) graph.push({ '@type': 'VideoObject', name: 'How micromanagement affects your business', description: 'Anas of Trainova BS explains, in Malayalam and English, how approving every small decision drains productive hours and weakens team ownership.', thumbnailUrl: `${site.url}/assets/images/micromanagement-poster.webp`, uploadDate: '2025-12-07', duration: 'PT1M26S', contentUrl: `${site.url}/assets/video/micromanagement.mp4`, inLanguage: ['ml', 'en'] });
  if (p.offers) graph.push({ '@type': 'OfferCatalog', name: 'Trainova BS consulting plans', itemListElement: [['Foundation Setup', '9999'], ['Growth Accelerator', '24999'], ['Full-Scale Transformation', '49999']].map(([n, v]) => ({ '@type': 'Offer', name: n, price: v, priceCurrency: 'INR', seller: { '@id': `${site.url}/#org` } })) });
  if (p.person) graph.push({ '@type': 'Person', name: site.person.name, sameAs: site.person.linkedin, worksFor: { '@id': `${site.url}/#org` }, image: `${site.url}/assets/images/anas-speaking-960.webp` });
  if (p.faqs?.length) graph.push({ '@type': 'FAQPage', mainEntity: p.faqs.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

export function render(p, css, js) {
  const url = site.url + p.path;
  const crumbs = p.path === '/' ? '' : `<nav class="crumbs" aria-label="Breadcrumb"><div class="wrap"><ol><li><a href="/">Home</a></li>${p.parent ? `<li><a href="${p.parent[1]}">${p.parent[0]}</a></li>` : ''}<li aria-current="page">${p.crumb}</li></ol></div></nav>`;
  const ga = site.ga4 ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${site.ga4}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${site.ga4}');</script>` : '';
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
${ga}
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${p.noindex ? 'noindex' : 'index,follow,max-image-preview:large,max-snippet:-1'}">
<meta name="theme-color" content="#101412">
<meta property="og:type" content="${p.article ? 'article' : 'website'}">
<meta property="og:locale" content="en_IN">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.url}/assets/images/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Sir, oru small doubt. Trainova BS builds the systems that let a business run without its owner in every room.">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/display.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/body.woff2" as="font" type="font/woff2" crossorigin>
<style>${fontFace}${css}</style>
<script type="application/ld+json">${schema(p)}</script>
</head>
<body>
${header(p.path)}
${crumbs}
<main id="main">
${p.body}
</main>
${footer}
<script>${js}</script>
</body>
</html>
`;
}
