import { band, cards, blog as allPosts, guides as allGuides, plainHero } from '../ui.mjs';
import { guide, table } from './guides.mjs';

// Blog = timely posts tied to something that just changed. Evergreen how-tos stay in /guides/.
const parent = ['Blog', '/blog/'];
const date = '2026-11-16';
const by = `<p class="muted" style="font-size:.92rem">By <a href="/about/">Muhammad Anas NS</a>, Trainova BS, Trivandrum. Published 16 November 2026.</p>`;
const more = (path) => band(`<h2>Keep reading</h2>${cards([...allPosts.filter(([h]) => h !== path), ...allGuides].slice(0, 3), 'Read')}`, 'rule');
const sect = { parent, date, by, more, eyebrow: 'Blog' };

const wa = guide({
  sect, path: '/blog/whatsapp-business-ai-small-business-india/', crumb: 'WhatsApp Business AI', keyword: 'WhatsApp Business AI', from: 'WhatsApp Business AI blog', formH2: 'Want your WhatsApp replies written down before the AI answers them?',
  title: 'WhatsApp Business AI for Small Business: Set-Up Guide',
  description: 'WhatsApp Business AI is live in India. What it does, what Meta hasn’t said yet, and the seven things to write down before you switch it on.',
  h1: 'WhatsApp Business AI for small businesses in India: what to set up first',
  lede: 'WhatsApp Business AI can now answer your customers at 2 am. It can only repeat what you have written down, so the real work happens before you press the switch.',
  content: `<h2>What WhatsApp Business AI is</h2>
  <p>Meta announced <a href="https://about.fb.com/news/2026/05/introducing-business-ai-on-whatsapp-for-small-businesses-in-india.md" rel="noopener">Business AI on WhatsApp for small businesses in India</a> in May 2026, and <a href="https://www.businesstoday.in/technology/story/whatsapp-launches-ai-powered-customer-support-for-small-businesses-in-india-upi-payments-coming-soon-530313-2026-05-07" rel="noopener">Business Today reported the launch on 7 May</a>. In Meta’s words, it lets eligible businesses “respond to customer queries 24/7, capture leads, book appointments, and drive sales”.</p>
  <ul class="dots"><li>It lives in the <strong>WhatsApp Business app</strong>, not the regular WhatsApp. You find it under Tools, then “Your Business AI”.</li><li>It answers from what you have already added: your business profile, your catalogue and the documents you upload.</li><li>You can step into any chat, change how it behaves, or turn it off completely.</li><li>Meta says it works in “all native languages in India”.</li><li>Payments inside the chat through UPI are described as “coming soon”. They aren’t live in the coverage we read.</li><li>Meta is rolling it out gradually to eligible businesses, so you may not see it yet.</li></ul>
  <h2>What nobody has told us yet</h2>
  <p>Be careful with any article, including this one, that sounds sure about the rest. In the Meta announcement and the launch coverage we read, none of these were stated:</p>
  <ul class="dots"><li><strong>The eligibility rules.</strong> Meta says businesses “must meet certain criteria” and doesn’t list them.</li><li><strong>The price.</strong> Neither source gives one. Check inside your app.</li><li><strong>How good the Malayalam is.</strong> “All native languages” isn’t a quality promise. Test it with your own customers’ words, including the mixed Malayalam and English they actually type.</li><li><strong>How it handles mistakes.</strong> Nothing was said about accuracy or limits.</li></ul>
  <p>The conversion and sales figures in the launch material come from businesses Meta chose to feature. Treat them as stories, not benchmarks.</p>
  <h2>Why it’s only as good as what you have written down</h2>
  <p>An AI agent has no idea what your refund limit is, how long delivery takes to Attingal, or whether a regular customer gets a discount. If those answers live in your head, or in your best employee’s head, the AI will either say nothing useful or guess. A wrong guess sent to a customer at midnight is worse than a reply the next morning.</p>
  <p>This is the same problem we see everywhere: the business runs on answers nobody has recorded. It’s why <a href="/guides/business-cant-run-without-owner/">the business can’t run without the owner</a>. The AI doesn’t fix that. It makes it visible, quickly.</p>
  <h2>Seven things to do before you switch it on</h2>
  <ol class="nums"><li><strong>Collect the last 50 customer questions.</strong> Scroll your own WhatsApp. Group them. Ten questions will cover most of the chats.</li><li><strong>Write the answers with numbers.</strong> Price, delivery time, refund limit, working hours, what a visit costs. This is a small <a href="/guides/how-to-write-an-sop/">SOP</a> per question, with no vague words like “soon”.</li><li><strong>List what the AI must never decide.</strong> Discounts above your limit, complaints, payment disputes and custom quotes go to a person.</li><li><strong>Name who takes over, and how fast.</strong> “Anyone” means nobody. Pick a role and a time limit, such as 30 minutes in business hours.</li><li><strong>Test with 20 questions.</strong> Ask in Malayalam, English and both mixed. Ask angry ones. Ask something you haven’t covered, and see what it does.</li><li><strong>Run it for a week and read every chat.</strong> Every wrong or empty answer points to a missing line in your documents.</li><li><strong>Update the documents, not the AI.</strong> Each fix goes into the written answers, so a new employee gets the same answer the AI does.</li></ol>
  <h2>What the AI should handle, and what a person should</h2>
  ${table(['Customer asks about', 'Who answers', 'Why'], [
    ['Prices, timings, location', 'AI', 'The answer is the same every time'],
    ['Product details and availability', 'AI, from your catalogue', 'Only as accurate as the catalogue'],
    ['Booking an appointment or visit', 'AI, then confirm by a person at first', 'Check it for a few weeks before you trust it'],
    ['Discount above your limit', 'Person', 'It’s a decision, not a fact'],
    ['Complaint or refund', 'Person', 'Tone and judgement matter'],
    ['Custom quote', 'Person', 'The answer changes with each customer'],
  ])}
  <h2>Mistakes to avoid</h2>
  <ul class="dots"><li><strong>Switching it on with an old price list.</strong> Customers will quote the AI back to you.</li><li><strong>Making yourself the handover person for everything.</strong> You’ve replaced WhatsApp interruptions with AI-filtered ones.</li><li><strong>Counting chats instead of sales.</strong> Track how many enquiries turned into orders, before and after.</li><li><strong>Reaching for unofficial automation tools.</strong> Use the features WhatsApp itself provides, and read its terms before you try anything else.</li><li><strong>Treating it as a magic WhatsApp chatbot.</strong> It answers from your documents, so it needs good ones.</li><li><strong>Automating a mess.</strong> If orders already get lost between WhatsApp, the phone and a notebook, <a href="/business-automation/">fix the process first</a>, then automate it.</li></ul>
  <h2>Where we fit in</h2>
  <p>We don’t sell the AI, and Meta’s tool doesn’t need us to set up. What takes time is the part before it: deciding the answers, the limits and the handover. That’s <a href="/sop-consulting/">SOP work</a>, and it pays off whether you use WhatsApp Business AI, another tool, or a new hire. A <a href="/free-business-audit/">free business audit</a> is a good place to start.</p>`,
  faqs: [
    ['Is WhatsApp Business AI free in India?', 'Neither Meta’s announcement nor the launch coverage we read mentions a price. Look inside your WhatsApp Business app under Tools, then “Your Business AI”, for the current terms.'],
    ['Does WhatsApp Business AI work in Malayalam?', 'Meta says it is available in all native languages in India but doesn’t name Malayalam or rate the quality. Test it with 20 real questions in Malayalam, English and mixed text before customers see it.'],
    ['Can WhatsApp Business AI take payments?', 'Not yet, going by the launch coverage. Meta says UPI payments inside the chat are coming soon.'],
    ['Do I need the WhatsApp Business app?', 'Yes. Business AI is part of the WhatsApp Business app, not the regular WhatsApp, and only eligible businesses get it for now.'],
    ['Can I take over a chat from the AI?', 'Yes. Meta says owners can step in at any time, change how it works, or turn it off.'],
  ],
});

const labour = guide({
  sect, path: '/blog/labour-codes-for-small-business-kerala/', crumb: 'Labour codes for small business', keyword: 'labour codes for small business', from: 'Labour codes blog', formH2: 'Want your HR paperwork in order?',
  title: 'Labour Codes for Small Business Owners: Kerala Checklist',
  description: 'Labour codes for small business owners in Kerala: what changed, what to check this month, and which paperwork to fix first.',
  h1: 'Labour codes for small business owners: what to check in Kerala',
  lede: 'India’s four labour codes replaced 29 older central laws. Most small business owners have heard that, and few have changed anything. Here is what we would look at first.',
  content: `<p><strong>This is not legal advice.</strong> We are a process and training firm, not a law firm. Use this as a list of questions for your CA or labour consultant, and check what has been notified for Kerala before you act.</p>
  <h2>What changed</h2>
  <p>The four codes took effect on 21 November 2025, replacing and combining 29 central labour laws, as <a href="https://kpmg.com/in/en/blogs/2025/12/implementation-of-labour-codes-what-changes-and-road-ahead.html" rel="noopener">KPMG’s summary of the changes</a> explains. Several details depend on rules that the central and state governments were still notifying when we researched this. So the safe position is that the principles are in force and the fine print needs checking.</p>
  <h2>The changes that touch a small business most</h2>
  ${table(['Change', 'What it means for you', 'Check with your CA'], [
    ['One definition of “wages”', 'Wages must be at least 50% of total pay. PF, ESI and gratuity are calculated on it.', 'Does your salary structure, with its many allowances, still work?'],
    ['Gratuity for fixed-term staff', 'Eligible after one year instead of five, pro-rated. <a href="https://www.businesstoday.in/personal-finance/news/story/new-labour-codes-2025-who-will-now-qualify-for-gratuity-after-one-year-of-service-instead-of-five-503630-2025-11-25" rel="noopener">Permanent staff still need five years</a>.', 'Do you hire on fixed terms or contracts?'],
    ['Fixed-term parity', 'Fixed-term staff get the same pay, hours and benefits as permanent staff in the same role.', 'Do any two people in one role get different terms?'],
    ['Appointment letters', 'Written appointment letters are listed among the guarantees.', 'Does every person on your payroll have one?'],
    ['Contract labour threshold', 'Raised from 20 to 50 workers, which helps smaller contractors.', 'Where do you stand against the new limit?'],
  ])}
  <p>Kerala has also been revising minimum wages for shops, hotels, restaurants and similar sectors. We couldn’t confirm the final schedule from an official source, so look at the Kerala Labour Department’s current notification for your sector.</p>
  <h2>Why this is a systems problem, not only a legal one</h2>
  <p>Most small businesses won’t fail a labour check because they meant to cheat. They fail because nothing is written down: no appointment letter, a salary structure someone built in a hurry, attendance in a register that one person fills in when they remember. The law has simply made that gap more expensive.</p>
  <p>This is the pattern behind most of the <a href="/guides/business-cant-run-without-owner/">problems that keep an owner in the middle of everything</a>. The same fix works. Write it down, give it an owner, check it on a schedule.</p>
  <h2>A five-step checklist for this month</h2>
  <ol class="nums"><li><strong>List every person you pay.</strong> Name, role, joining date, permanent or fixed-term, and who pays them: you, or a contractor.</li><li><strong>Check each one has a signed appointment letter.</strong> Write the missing ones. Keep it plain, with role, pay, hours and notice period.</li><li><strong>Ask your CA to review the salary structure</strong> against the 50% wages rule, and tell you what it does to PF, ESI and gratuity costs per month.</li><li><strong>Look at your contract and fixed-term arrangements.</strong> Where two people do the same job on different terms, decide whether that is defensible.</li><li><strong>Write the HR routines as SOPs.</strong> Who issues letters, who updates attendance, who runs payroll each month, and who checks it. Use our <a href="/guides/how-to-write-an-sop/">guide to writing an SOP</a>.</li></ol>
  <h2>Roles and KRAs matter more now</h2>
  <p>If two people in one role must be treated equally, you need to be able to say what the role is. A page of <a href="/kra-consulting/">KRAs for each position</a> gives you that. It also helps in the awkward conversation about why one person earns more: the answer is in the responsibilities, in writing.</p>
  <h2>What we can and can’t help with</h2>
  <p>We can help you write the appointment-letter process, the HR SOPs, role descriptions and KRAs, and train your managers to follow them. See our <a href="/sme-training/">SME training</a>. We can’t interpret the law, calculate your PF or advise on a dispute. That is for a qualified professional.</p>`,
  faqs: [
    ['When did the new labour codes come into force?', 'The four labour codes came into force on 21 November 2025, replacing 29 central labour laws. Some detailed rules were still being notified, so check what applies in Kerala now.'],
    ['Do the labour codes apply to small businesses in Kerala?', 'Many provisions apply to small employers, but thresholds differ by code and by the number of people you employ. Ask your CA or labour consultant to confirm which apply to you.'],
    ['What is the 50% wages rule?', 'Under the new definition, wages must make up at least half of total pay. PF, ESI and gratuity are worked out on wages, so a salary built from many allowances may cost more than before.'],
    ['Do fixed-term employees get gratuity?', 'Under the new codes, fixed-term employees become eligible after one year of service, pro-rated. Permanent employees still need five years.'],
    ['Do I need to give appointment letters?', 'Written appointment letters are among the guarantees listed in coverage of the codes. Issuing one to everyone on your payroll is a sensible habit whatever the final rules say.'],
  ],
});

const pay = guide({
  sect, path: '/blog/45-day-payment-rule-msme/', crumb: '45 day payment rule for MSMEs', keyword: '45 day payment rule', from: '45 day payment rule blog', formH2: 'Want payments and follow-ups to run without you chasing?',
  title: '45 Day Payment Rule for MSMEs: A Pay and Chase Checklist',
  description: 'The 45 day payment rule for MSMEs explained: what Section 43B(h) means for buyers and suppliers, and what the 2026 MSMED amendment does and doesn’t change.',
  h1: 'The 45 day payment rule for MSMEs: what to do as a buyer and as a supplier',
  lede: 'If you buy from small suppliers, paying late can now cost you a tax deduction. If you are the small supplier, it is the best argument you have for getting paid. Either way, it comes down to a process.',
  content: `<p><strong>This is not tax advice.</strong> Ask your CA to confirm how the rule applies to you. We cover the process side: who pays, who chases, and when.</p>
  <h2>What the rule says</h2>
  <p>The MSMED Act says the agreed credit period for a micro or small supplier can’t be longer than 45 days from the day you accept the goods or services. Since the Finance Act 2023, <a href="https://taxguru.in/income-tax/finance-ministry-clarifies-section-43bh-45-day-msme-payment-rule.html" rel="noopener">the Finance Ministry has explained</a> that Section 43B(h) of the Income Tax Act stops a buyer from claiming a deduction for what it owes a micro or small enterprise until it actually pays. Several explainers say that if there is no written agreement, the limit is 15 days. Check that point with your CA.</p>
  <ul class="dots"><li>It covers <strong>micro and small</strong> suppliers. Medium enterprises aren’t covered.</li><li>Paying before your tax return is due usually saves a deduction under Section 43B. Explainers say this one is different, so the date that matters is the payment deadline itself.</li><li>Buyers also have to report dues outstanding for more than 45 days in Form MSME-1.</li><li>One explainer says that from 2026-27 the matching provision sits at section 37(2)(g) of the Income-tax Act, 2025. Confirm the current section with your CA.</li></ul>
  <h2>What the 2026 MSMED amendment changes</h2>
  <p>Parliament passed the MSMED (Amendment) Bill in August 2026. <a href="https://busy.in/business-updates/msme-amendment-act-2026-what-businesses-should-know/" rel="noopener">Summaries of the amendment</a> focus on faster dispute resolution for delayed payments, free and voluntary registration, and some penalties no longer being criminal. The explainers we read don’t report a change to the 45-day limit, and none says when each provision starts. Don’t change your practice because of the headline, and check the official notification first.</p>
  <h2>If you are the buyer: a payment process</h2>
  <ol class="nums"><li><strong>Tag your suppliers.</strong> Ask each one for its Udyam registration and note whether it is micro, small or medium.</li><li><strong>Record the acceptance date.</strong> The 45 days run from when you accept the goods or services, so someone has to write that date down.</li><li><strong>Put the due date on the invoice record.</strong> The date that counts is 45 days from acceptance, not the date on the invoice.</li><li><strong>Run a weekly payables list.</strong> Anything within ten days of the limit goes to the top.</li><li><strong>Fix who approves.</strong> If the owner has to approve every payment, the bills wait for the owner. Give a named person a limit. Our <a href="/guides/sop-examples-for-business/">SOP examples</a> include a vendor payment one.</li><li><strong>Review the list each month with your CA</strong>, before the year-end rush.</li></ol>
  <h2>If you are the supplier: a collection process</h2>
  <ol class="nums"><li><strong>Get your Udyam registration in order</strong> and put it on your invoices, so buyers can’t say they didn’t know.</li><li><strong>Agree terms in writing.</strong> Put the credit period on the order or contract, not on a phone call.</li><li><strong>Record the date the buyer accepted the goods.</strong> A signed delivery note or a WhatsApp confirmation is enough to start with.</li><li><strong>Follow up on a schedule.</strong> A reminder at day 30, a call at day 40, and a note to the buyer’s accounts team at day 45.</li><li><strong>Keep it polite and on record.</strong> Mention the payment rule as a reason to pay on time, not as a threat.</li><li><strong>Don’t be the only person who chases.</strong> Name the role. If it’s you, you’ll skip it in busy weeks. <a href="/business-automation/">Automated reminders</a> help once the steps are clear.</li></ol>
  <h2>Why this is a process problem</h2>
  <p>Most late payments in small businesses aren’t a decision. The invoice sat in someone’s drawer, the owner was travelling, or nobody knew whose job it was. That is the same pattern behind <a href="/guides/business-cant-run-without-owner/">a business that can’t run without its owner</a>. Writing the steps down and handing them to a role fixes it, and an <a href="/sop-consulting/">SOP for payments</a> is a good place to begin.</p>`,
  faqs: [
    ['What is the 45 day payment rule for MSMEs?', 'A buyer’s agreed credit period for a micro or small supplier can’t be longer than 45 days from acceptance of the goods or services. Under Section 43B(h), the buyer can’t claim a deduction for the amount until it is actually paid.'],
    ['Does the 45 day payment rule apply to medium enterprises?', 'No. The explainers we read say it covers micro and small suppliers only.'],
    ['What if there is no written agreement on payment terms?', 'Several explainers say the limit is then 15 days. Confirm this with your CA, and put terms in writing to avoid the question.'],
    ['Did the 2026 MSMED amendment change the 45 day limit?', 'The summaries we read don’t report a change. They describe faster dispute resolution, free and voluntary registration and some decriminalisation. Check the official notification for when each part starts.'],
    ['Do I need Udyam registration to be covered?', 'The rule protects micro and small suppliers, and buyers usually rely on the Udyam registration to know who is covered. Ask your CA how this applies to your suppliers.'],
  ],
});

const attr = guide({
  sect, path: '/blog/reduce-employee-attrition-small-business/', crumb: 'Reduce employee attrition', keyword: 'reduce employee attrition', from: 'Employee attrition blog', formH2: 'Losing good people? Let’s find out where they leave from.',
  title: 'How to Reduce Employee Attrition in a Small Business',
  description: 'How to reduce employee attrition in a small business: check when people leave, fix the first six months, and give every role clear goals and a manager.',
  h1: 'How to reduce employee attrition in a small business',
  lede: 'Replacing someone costs you their notice period, the hiring, the training and the mistakes of the next person. Most owners count none of it. Here is how to see where your people leave from and fix that first.',
  content: `<h2>The national number doesn’t tell you much</h2>
  <p>According to an Aon survey reported by <a href="https://www.businesstoday.in/latest/economy/story/lowest-in-five-years-what-162-attrition-really-signals-for-2026-518813-2026-03-02" rel="noopener">Business Today</a>, attrition in India fell to 16.2% in 2025, from 17.7% in 2024 and 18.7% in 2023. That is a survey of larger companies, though. A shop or clinic with eight staff doesn’t have a rate. It has a Tuesday when someone doesn’t come back. So work with your own numbers.</p>
  <h2>Step 1: find out when people leave</h2>
  <p>List everyone who left in the last two years and write how many months they stayed. You’ll usually find a cluster, and where it falls tells you what to fix.</p>
  ${table(['They leave in', 'The usual cause', 'Fix'], [
    ['The first 3 months', 'They were hired for one job and found another, or nobody showed them what to do', 'A clear job description and an onboarding plan'],
    ['3 to 12 months', 'No clear targets, no feedback, no one to learn from', 'KRAs and a monthly one-to-one'],
    ['1 to 3 years', 'No growth, or a manager who checks every step', 'A path, and a manager trained to delegate'],
    ['Any time, with one manager', 'It’s the manager', 'Fix the manager before you hire again'],
  ])}
  <p>These are patterns, not findings. One HR vendor’s brief claims that small Indian businesses lose most new hires in the first six months. Check whether that is true for you rather than trusting it.</p>
  <h2>Step 2: put a price on one exit</h2>
  <p>Add up: the notice period when work is slow, the time you or a manager spend hiring, the weeks of training, the lower output while the new person learns, and the customers who are lost on the way. Multiply by your exits this year. The number is almost always bigger than the raise you refused.</p>
  <h2>Step 3: fix the first 90 days</h2>
  <ol class="nums"><li><strong>Write the job down.</strong> The three to five results this role owns. Our <a href="/guides/kra-examples-small-business/">KRA examples</a> show how.</li><li><strong>Plan day one, week one and month one.</strong> Who they sit with, what they learn, what they’re allowed to decide alone.</li><li><strong>Give them one named person to ask.</strong> If every question goes to you, you have a <a href="/guides/business-cant-run-without-owner/">dependence problem</a> and a retention problem.</li><li><strong>Meet at day 30, 60 and 90.</strong> Fifteen minutes. Ask what is unclear and what they would change.</li><li><strong>Use the same plan every time.</strong> That’s an <a href="/guides/how-to-write-an-sop/">SOP</a> for onboarding, so it doesn’t depend on who is free.</li></ol>
  <h2>Step 4: ask the people who stayed</h2>
  <p>Exit interviews come too late and people say what is polite. Ask your best people twice a year: what would make you leave? What would make you stay? What is the most annoying part of your week? Act on one answer within a month, and tell them. If you never act, they’ll stop answering.</p>
  <h2>Step 5: fix the manager</h2>
  <p>Staff often leave a manager, not a company. In a small business, that manager is often you, and the habit is micromanaging. Read how to <a href="/guides/stop-micromanaging-your-team/">stop micromanaging your team</a>, and think about <a href="/leadership-training/">leadership training</a> for the people who lead others.</p>
  <h2>Step 6: check pay honestly</h2>
  <p>Pay isn’t the only reason people leave, and it still matters. Compare your salaries with what local employers offer for the same role. If you can’t raise pay, be clear about what you offer in return: learning, flexibility, a title or a path. Don’t guess what staff want. Ask.</p>
  <h2>When to ask for help</h2>
  <p>If you keep losing good people and can’t say why, it’s usually a system problem, not a luck problem. Our <a href="/free-business-audit/">free business audit</a> looks at roles, onboarding and decision-making, and shows where your people hit a wall.</p>`,
  faqs: [
    ['How do I reduce employee attrition in a small business?', 'Find out when people leave, then fix that stage. For most small businesses that means a clear job description, a planned first 90 days, regular one-to-ones and a manager who delegates instead of checking everything.'],
    ['What is a good attrition rate for a small business?', 'There isn’t one number. Aon’s survey of larger companies put India’s 2025 attrition at 16.2%, but a team of ten can’t be compared with that. Track your own exits and how long each person stayed.'],
    ['What is a stay interview?', 'A short conversation with a current employee about what keeps them and what might make them leave. You do it before they’ve decided, so there’s time to act.'],
    ['Why do new employees leave in the first few months?', 'Usually because the job isn’t what they were told, nobody showed them how things work, or nobody told them what good looks like. A written role and an onboarding plan address all three.'],
  ],
});

const seo = guide({
  sect, path: '/blog/how-to-choose-an-seo-agency-kerala/', crumb: 'How to choose an SEO agency', keyword: 'how to choose an SEO agency', from: 'SEO agency blog', formH2: 'Not sure what your website should be doing for you?',
  title: 'How to Choose an SEO Agency in Kerala: 8 Questions',
  description: 'How to choose an SEO agency in Kerala: the red flags to avoid, eight questions to ask, what to fix yourself first, and what results to expect and when.',
  h1: 'How to choose an SEO agency in Kerala: eight questions to ask first',
  lede: 'Every agency promises page one. Few can say what they’ll actually do in month one. Here’s how to tell them apart, and what you can do yourself before you pay anyone.',
  content: `<h2>Start with what no agency can promise</h2>
  <p>Google’s own guidance, <a href="https://developers.google.com/search/docs/fundamentals/do-you-need-seo" rel="noopener">Do you need an SEO?</a>, says no one can guarantee a number one ranking. Google also doesn’t take payment to rank a site in its organic results. So an agency that guarantees first place, or says it has a special relationship with Google, is telling you something about itself, not about Google.</p>
  <p>Good agencies promise work: what they’ll fix, write and report, and by when. Rankings follow, usually over months rather than weeks.</p>
  <h2>Do these three things yourself first</h2>
  <p>These cost little, and an agency will ask about them on the first call anyway.</p>
  <ol class="nums"><li><strong>Claim and complete your Google Business Profile.</strong> Google says local results depend on relevance, distance and prominence. You can’t change distance, but you can pick the right primary category, fill in every field and ask happy customers for reviews.</li><li><strong>Check that Google can see your site.</strong> Search for your business name. Then check that your phone number, address and services are the same everywhere they appear.</li><li><strong>Write down what a lead is worth.</strong> A call, a form, a WhatsApp message. If you don’t know which one pays your bills, no report will make sense.</li></ol>
  <h2>Eight questions to ask an agency</h2>
  ${table(['Ask', 'A good answer sounds like', 'A bad answer sounds like'], [
    ['What exactly will you do in the first 90 days?', 'A list: audit, fixes, pages to write, reports', '“We’ll optimise your website”'],
    ['Can you guarantee rankings?', '“No. Here’s what we can control”', '“Yes, page one in 30 days”'],
    ['Where will the links come from?', 'Named types of sites, with examples', '“Our network” and nothing else'],
    ['Who writes the content?', 'A person who knows your business, who you can speak to', 'Bulk text from a tool, no review'],
    ['Which numbers will you report?', 'Calls, forms, WhatsApp enquiries and sales', 'Only impressions and keyword positions'],
    ['Who owns the accounts and data?', 'You own your site, Search Console and Analytics', 'They hold the logins'],
    ['Can I speak to a current client?', 'Yes, here are two', 'Only a testimonial page'],
    ['How long is the contract?', 'Monthly, or a short term with a clear exit', 'A long lock-in with a penalty'],
  ])}
  <h2>Red flags</h2>
  <ul class="dots"><li>Guaranteed rankings, or “money back if you don’t rank”.</li><li>An unusually low price. Good SEO is mostly skilled people’s time.</li><li>They won’t explain how they build links or what they’ll change on your site.</li><li>Reports full of keyword positions and no enquiries.</li><li>They’re hard to reach before you sign. It won’t improve after.</li></ul>
  <h2>How to shortlist</h2>
  <p>Ask other business owners who they use, check each agency’s own site for the things you’re asking them to do, and speak to at least three. A search for the <a href="https://prception.in/seo-company-in-kerala" rel="noopener">Best SEO agency in Kerala</a> will show you many names, and PRception is one place to start. Note that PRception designed this website, so weigh our mention accordingly and compare it with the others using the questions above.</p>
  <h2>What results to expect, and when</h2>
  <p>SEO takes time. Work done in month one, such as fixing the site and your Google Business Profile, can show up quickly in local results. New content and links take longer, often several months. Be wary of anyone who gives you a date. Ask instead what you’ll see at 30, 90 and 180 days.</p>
  <h2>Your side of the deal</h2>
  <p>An agency can bring enquiries, and your business still has to handle them. If calls go unanswered or leads sit on one person’s phone, better rankings just make the leak bigger. Decide who replies, in how many minutes, and what they’re allowed to say. A <a href="/guides/how-to-be-a-good-telecaller/">good telecaller</a> and a written <a href="/guides/how-to-write-an-sop/">follow-up process</a> pay back more than another month of ads. If you’d like your own team to understand what they’re paying for, see our <a href="/digital-marketing-training-for-entrepreneurs/">digital marketing training for entrepreneurs</a>.</p>`,
  faqs: [
    ['How do I choose an SEO agency in Kerala?', 'Ask each one what it will do in the first 90 days, who writes the content, where links come from and which numbers it reports. Avoid anyone who guarantees rankings. Speak to current clients and keep ownership of your own site and accounts.'],
    ['Can an SEO agency guarantee first place on Google?', 'No. Google’s own guidance says no one can guarantee a number one ranking, and that Google doesn’t take payment for organic rankings.'],
    ['How long does SEO take to work?', 'Local fixes such as a complete Google Business Profile can help within weeks. Content and link building usually take several months. Ask an agency what you’ll see at 30, 90 and 180 days.'],
    ['What should I do before hiring an SEO agency?', 'Claim and complete your Google Business Profile, make sure your name, address and phone number match everywhere, and decide which enquiries are worth most to you.'],
  ],
});

const hub = {
  path: '/blog/', crumb: 'Blog', keyword: 'blog',
  title: 'Trainova BS Blog: News for Kerala Business Owners',
  description: 'The Trainova BS blog explains what changes for small business owners in Kerala, from WhatsApp AI to labour codes, and what to fix in your business first.',
  body: [
    plainHero({ eyebrow: 'Blog', h1: 'Trainova BS blog for Kerala business owners', lede: 'When something changes for small businesses, we explain it plainly and say what to write down first. For lasting how-tos, see our free guides.' }),
    band(`${cards(allPosts, 'Read the post')}<p style="margin-top:24px">Looking for step-by-step help instead? Our <a href="/guides/">free guides</a> cover SOPs, KRAs and getting your business to run without you.</p>`),
  ].join(''),
};

export default [hub, wa, labour, pay, attr, seo];
