import { band, doc, leadForm, cards, guides as allGuides, plainHero, cta, faq } from '../ui.mjs';

const parent = ['Guides', '/guides/'];
const date = '2026-11-03';
const by = `<p class="muted" style="font-size:.92rem">By <a href="/about/">Muhammad Anas NS</a>, Trainova BS, Trivandrum. Updated 3 November 2026.</p>`;
const others = (path) => band(`<h2>More guides</h2>${cards(allGuides.filter(([h]) => h !== path).slice(0, 3), 'Read the guide')}`, 'rule');
const table = (head, rows) => `<div class="tablewrap"><table class="table"><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

function guide({ path, crumb, keyword, title, description, h1, lede, content, faqs, video, formH2, from, needs }) {
  return {
    path, crumb, parent, keyword, title, description, video, faqs: faqs || [],
    article: { headline: h1, date },
    body: [
      plainHero({ eyebrow: 'Guide', h1, lede }),
      band(`<div class="prose">${by}${content}${cta('Book my free business audit')}</div>`),
      faqs ? faq(faqs, 'Common questions') : '',
      others(path),
      leadForm({ h2: formH2, from, needs }),
    ].join(''),
  };
}

const owner = guide({
  path: '/guides/business-cant-run-without-owner/', crumb: 'My business can’t run without me', keyword: 'business can’t run without', from: 'Owner dependence guide', formH2: 'Want a second pair of eyes on it?',
  title: 'My Business Can’t Run Without Me: How to Fix It',
  description: 'If your business can’t run without you, you don’t have a people problem. Here is why it happens, how to measure it, and the order to fix it in.',
  h1: 'My business can’t run without me. Now what?',
  lede: 'You’ve worked this out already, probably at about 11 pm. Your business can’t run without you, and you’re starting to suspect that’s not a compliment.',
  content: `<h2>Why it feels like a compliment, then doesn’t</h2>
  <p>For years, being needed was the proof you were doing it right. You knew every customer, spotted every mistake and could step into any job. That’s how small businesses survive, and it may be why yours did.</p>
  <p>The same habit now has a cost. Nobody decides without you, so everything goes at your speed. Your best people have stopped growing, or stopped staying. And you can’t sell the business, hand it over or get ill, because there’s no business without you in it. There’s just you, with staff.</p>
  <h2>A five-minute test</h2>
  <p>Answer honestly. Every “no” marks a place where the business depends on you.</p>
  <ul class="dots"><li>Could you take two weeks off with your phone switched off?</li><li>Can someone else give a discount, approve a payment or handle an angry customer?</li><li>Is the way your main work gets done written down anywhere?</li><li>Do you see your key numbers without asking anyone?</li><li>Do you have one person who could run the place for a month?</li><li>If your best manager resigned today, would you know what they know?</li></ul>
  <h2>It usually isn’t your staff</h2>
  <p>It’s tempting to conclude that you have the wrong people. Sometimes you do. Far more often, you’ve accidentally trained good people to depend on you. Every time you solved a problem they brought you, you taught them to bring the next one. In a <a href="/guides/stop-micromanaging-your-team/">short video on micromanagement</a>, Anas puts it plainly: if the team comes to you for every small decision, how will they ever learn to take one?</p>
  <h2>How to fix it, in order</h2>
  <p>The order matters. Most owners start with hiring, which is the most expensive step and often fails.</p>
  <ol class="nums"><li><strong>Keep a call log for a week.</strong> Write down every question that reaches you and who asked it. It’s tedious and very revealing. Most of it will fall into a few categories.</li><li><strong>Pick the top three repeat questions.</strong> Write a rule for each one, with a limit. “Refund up to ₹2,000: decide yourself.” That’s an <a href="/guides/sop-examples-for-business/">SOP</a> in its simplest form.</li><li><strong>Tell the team, and then keep quiet.</strong> They’ll get it wrong sometimes. If you overrule them in public, you’re back where you started. Correct them in private, and fix the rule.</li><li><strong>Give every job one owner.</strong> <a href="/guides/kra-examples-small-business/">Three to five KRAs per role</a> are enough to start.</li><li><strong>Get your numbers without asking.</strong> A one-page weekly report replaces most of the checking you do now.</li><li><strong>Then develop or hire a manager.</strong> Now they’ll have something to manage with. A manager dropped into chaos just becomes your most expensive assistant.</li><li><strong>Test it.</strong> Take a day away, then three, then a week. See what breaks, and fix that.</li></ol>
  <h2>The hard part isn’t the system</h2>
  <p>It’s you. Someone else will do it differently, and some of the time, worse than you would. You’ll need to accept 80% from someone else, so you can spend your time on what only you can do. Few owners find this easy. If you’re the type who needs to feel useful, you’ll have to find a new way of being useful, and that’s the real change.</p>
  <h2>How long this takes</h2>
  <p>You can feel the first relief in a couple of weeks, once a few recurring questions stop arriving. A business that runs well without you for a month is usually a project of many months. Be suspicious of anyone who tells you otherwise.</p>`,
});

const micro = guide({
  path: '/guides/stop-micromanaging-your-team/', crumb: 'How to stop micromanaging', keyword: 'stop micromanaging', video: true, from: 'Micromanaging guide', formH2: 'Want help letting go?',
  title: 'How to Stop Micromanaging Your Team and Delegate Better',
  description: 'How to stop micromanaging your team without things falling apart. The real reason you check everything, and a practical way to delegate tasks and authority.',
  h1: 'How to stop micromanaging your team',
  lede: 'You don’t check everything because you’re a control freak. You check because the last time you didn’t, something went wrong. Here’s how to get out of it safely.',
  content: `<div class="vid" style="grid-template-columns:minmax(0,260px) minmax(0,1fr);margin-bottom:28px"><video controls preload="none" playsinline poster="/assets/images/micromanagement-poster.webp" width="540" height="960" aria-label="Anas of Trainova BS on how micromanagement affects a business"><source src="/assets/video/micromanagement.mp4" type="video/mp4"></video><div><p><strong>Watch: How micromanagement affects your business (86 seconds, Malayalam and English).</strong></p><p>Anas covers what happens when an owner approves every small matter and checks every email, why that drains productive hours and shatters a team’s ownership, and why a CEO’s time belongs to strategic building and core values, “not for babysitting”.</p></div></div>
  <h2>Signs you’re micromanaging</h2>
  <ul class="dots"><li>You’re copied on emails you don’t need to read, and you read them.</li><li>Your team asks before doing things they’ve done a hundred times.</li><li>You redo work rather than send it back.</li><li>People update you constantly, because you’ll ask if they don’t.</li><li>Your best people leave, usually politely, for “better opportunities”.</li><li>Nothing moves when you’re on leave.</li></ul>
  <h2>Why you do it</h2>
  <p>Mostly, because you don’t have any other way of knowing things are fine. If nothing is written down and no numbers reach you, then looking over someone’s shoulder is your only information system. Asking you to “trust your team” won’t help, because trust isn’t what’s missing. <strong>Visibility is.</strong></p>
  <p>Once you can see what’s going on without asking, the urge to check falls away by itself. That’s why the fix is more about systems than willpower.</p>
  <h2>What it costs you</h2>
  <p>You lose your time, which is what most owners notice. The bigger loss is that your team stops thinking. Why would anyone work out the answer if you’re going to change it anyway? <a href="https://www.gallup.com/workplace/236570/employees-lot-managers.aspx" rel="noopener">Gallup</a> found that managers account for at least 70% of the variance in employee engagement scores. In a small company, that manager is often you.</p>
  <h2>How to delegate tasks, in five steps</h2>
  <ol class="nums"><li><strong>Choose one recurring task.</strong> Not everything. Choose something that happens weekly and has low risk if it goes wrong.</li><li><strong>Write down what “done” looks like.</strong> Not how to do it. What the result looks like, by when and to what standard.</li><li><strong>Set a limit.</strong> “Up to ₹5,000, decide yourself. Above that, bring me your recommendation.” Limits are what make letting go feel safe.</li><li><strong>Replace checking with a review.</strong> Agree a time, such as a weekly fifteen minutes. In between, you don’t ask. They come to you only if something crosses the limit.</li><li><strong>Respond well to the first mistake.</strong> This decides everything. If you take it back, they’ll never try again. Ask what they’d do differently, and update the rule.</li></ol>
  <h2>Levels of delegation</h2>
  ${table(['Level', 'What you say', 'Use when'], [
    ['1. Do as I say', '“Follow these exact steps.”', 'New person, new task'],
    ['2. Recommend', '“Look into it. Tell me what you’d do.”', 'They know the work but not the decision'],
    ['3. Decide and inform', '“Decide. Tell me what you did.”', 'They’ve been right several times'],
    ['4. Decide alone', '“It’s yours. I’ll see it in the monthly report.”', 'Routine work with clear limits'],
  ])}
  <p>Move people up one level at a time. Most owners keep everybody at level one for years, then suddenly jump to level four, and it goes badly.</p>
  <h2>When you should stay involved</h2>
  <p>Not micromanaging doesn’t mean disappearing. Stay close to a brand-new person, a truly high-stakes decision or a real crisis. The test is whether your involvement teaches them something, or whether it just makes you feel better.</p>`,
  faqs: [
    ['How do I stop micromanaging myself?', 'Start with a limit on yourself: pick one area, set a weekly review and don’t ask between reviews. Give yourself a number you can look at instead. You’ll want to check. Keep a note of each time, and most of the urges will turn out to be about anxiety, not information.'],
    ['How do you manage without micromanaging?', 'Managing is agreeing on the result and checking the outcome. Micromanaging is controlling how the work is done, step by step, when the person already knows how.'],
    ['What if my staff really can’t be trusted with decisions?', 'Start with small decisions and limits. If someone still can’t handle them after clear instructions and training, that’s a hiring problem, and it’s far easier to see once the rules are clear.'],
  ],
});

const howSop = guide({
  path: '/guides/how-to-write-an-sop/', crumb: 'How to write an SOP', keyword: 'how to write an SOP', from: 'How to write an SOP guide', formH2: 'Would you rather have us write them with your team?',
  title: 'How to Write an SOP for a Small Business, With Template',
  description: 'How to write an SOP your staff will actually use: eight practical steps, a copy-ready standard operating procedure template, and the mistakes to avoid.',
  h1: 'How to write an SOP (with a template you can copy)',
  lede: 'A standard operating procedure is a written set of steps for a recurring job, including who does it and what they can decide. Here’s how to write one your staff will read.',
  content: `<h2>What is an SOP?</h2>
  <p>SOP stands for standard operating procedure. It tells someone how a recurring job gets done in your business, so the result doesn’t depend on who’s doing it or whether you’re around. In Malayalam, ഒരു ജോലി എങ്ങനെ ചെയ്യണം എന്ന് എഴുതി വെച്ച രേഖ: a written record of how a job should be done.</p>
  <p>If you landed here looking for a statement of purpose for a university or visa application, that’s a different SOP, and this guide won’t help you.</p>
  <h2>How to write an SOP in 8 steps</h2>
  <ol class="nums"><li><strong>Pick a job that hurts.</strong> Choose one that causes repeat questions, costly mistakes or customer complaints. Not the easiest one.</li><li><strong>Watch it being done.</strong> Sit with the person doing it. What really happens is rarely what you think happens.</li><li><strong>Name one owner.</strong> A role, not a person, so it survives someone leaving.</li><li><strong>Write the steps as commands.</strong> Start with a verb. “Log the complaint.” Not “Complaints should be logged in a timely manner.”</li><li><strong>Add the numbers.</strong> Time limits, rupee limits, how many attempts. “Soon” and “appropriate” mean nothing.</li><li><strong>Say what they can decide alone.</strong> This is what stops the phone calls. Most SOPs leave it out.</li><li><strong>Test it on someone new.</strong> Give it to someone who has never done the job. Where they get stuck, rewrite.</li><li><strong>Set a review date.</strong> An out-of-date SOP is worse than none, because people stop trusting all the others.</li></ol>
  <h2>A simple standard operating procedure template</h2>
  <p>Copy this into a document. If it runs longer than a page or two, you’re probably writing two SOPs.</p>
  ${doc({ id: 'SOP-000', title: '[Name of the job]', meta: [['Purpose', 'Why this matters, in one line'], ['Owner', 'The role responsible'], ['When', 'What triggers this job'], ['Review', 'Date, and who reviews it']], steps: ['First action, starting with a verb. Include time limit.', 'Next action. Who does it, and where it gets recorded.', 'Decide alone: what this person can decide, with limits.', 'Escalate: when it goes to someone else, and to whom.', 'Done means: how anyone can tell the job is finished.'], note: 'Free to copy and adapt.' })}
  <h2>Why most SOPs fail</h2>
  <ul class="dots"><li><strong>One person wrote it alone.</strong> The staff who do the job don’t recognise it, so they ignore it.</li><li><strong>It’s too long.</strong> Nobody reads eleven pages while a customer waits.</li><li><strong>It’s in the wrong language.</strong> If your team reads Malayalam, write in Malayalam.</li><li><strong>Nobody checks it.</strong> An SOP that’s never audited is a suggestion.</li><li><strong>It covers every exception.</strong> Cover the common cases and say who decides the rest.</li></ul>
  <h2>How many SOPs do you need?</h2>
  <p>Start with three. Then keep going by asking what caused the most calls to you this month. A small business can run well on ten to twenty SOPs people actually use. See our <a href="/guides/sop-examples-for-business/">SOP examples for business</a> for finished ones.</p>
  <p>If you’d rather not do this alone, that’s what <a href="/sop-consulting/">SOP consulting</a> is for.</p>`,
  faqs: [
    ['What are the main parts of an SOP?', 'Purpose, owner, trigger, the steps, what the person can decide alone, when to escalate, what “done” means and a review date. Anything more should have a very good reason.'],
    ['How long should an SOP be?', 'One or two pages for most jobs. If it needs to be longer, it’s probably several SOPs. Photos and short videos often do better than paragraphs.'],
    ['Who should write an SOP?', 'The person who does the job, with help from someone who can write clearly and question things. The owner or manager approves it.'],
    ['What is the difference between a policy and an SOP?', 'A policy says what the rule is and why. An SOP says how to carry it out, step by step. “We refund within seven days” is a policy. The steps to process that refund are the SOP.'],
  ],
});

const sopEx = guide({
  path: '/guides/sop-examples-for-business/', crumb: 'SOP examples for business', keyword: 'SOP examples', from: 'SOP examples guide', formH2: 'Need these written for your business?',
  title: 'SOP Examples for Business: 5 You Can Copy | Trainova BS',
  description: 'Five SOP examples for a small business: customer complaints, lead follow-up, petty cash, staff onboarding and vendor payments. Copy and adapt them.',
  h1: 'SOP examples for business: five you can copy',
  lede: 'These are the five SOPs that stop the most phone calls in the small businesses we see. Copy them, change the numbers and test them on your team.',
  content: `<p>All five follow the same pattern: an owner, a clear trigger, numbered steps, and what the person can decide alone. All amounts here are illustrative, so use limits that make sense for your business. To write your own, follow <a href="/guides/how-to-write-an-sop/">how to write an SOP</a>.</p>
  <h2>1. SOP example for customer service: handling a complaint</h2>
  ${doc({ id: 'SOP-01', title: 'Handling a customer complaint', meta: [['Owner', 'Front desk or customer care lead'], ['When', 'Any complaint, by any channel']], steps: ['Listen fully. Don’t defend. Apologise for the trouble, not the fault.', 'Log it in the complaint sheet within 10 minutes.', 'Up to ₹2,000: refund or replace, your decision.', 'Above ₹2,000: operations manager decides the same day.', 'Call the customer back within 24 hours with the result.', 'Owner reviews a summary every Friday.'], note: 'Illustrative. Adjust the limits for your business.' })}
  <h2>2. SOP example for sales: following up an enquiry</h2>
  ${doc({ id: 'SOP-02', title: 'Following up a new enquiry', meta: [['Owner', 'Sales executive'], ['When', 'New enquiry from any source']], steps: ['Log it in the CRM or sheet straight away, with its source.', 'Call within two working hours.', 'No answer: send a WhatsApp and call again next morning.', 'After three attempts with no reply, mark as cold.', 'Discounts up to 5%: decide yourself. Above that: ask the sales lead.', 'Update the status the same day. No status means not done.'], note: 'Illustrative. Adjust the limits for your business.' })}
  <h2>3. SOP example for accounts: petty cash</h2>
  ${doc({ id: 'SOP-03', title: 'Managing petty cash', meta: [['Owner', 'Accounts executive'], ['Float', '₹10,000 (example)']], steps: ['Every payout needs a bill or a signed voucher.', 'Up to ₹1,000: accounts pays. Above that: branch manager approves.', 'Record each one in the register on the same day.', 'Count the cash each Friday and match it to the register.', 'Top up only against submitted vouchers.', 'Report any difference to the owner on the same day, however small.'], note: 'Illustrative. Adjust the limits for your business.' })}
  <h2>4. SOP example for HR: a new employee’s first week</h2>
  ${doc({ id: 'SOP-04', title: 'Onboarding a new employee', meta: [['Owner', 'HR or office manager'], ['When', 'Offer accepted']], steps: ['Before day one: desk, login, ID and documents list are ready.', 'Day one: introduce the team, values and who to ask what.', 'Give them their role’s KRAs and SOPs on paper.', 'Name a buddy for the first two weeks.', 'End of week one: a 15-minute check-in with their manager.', 'End of month one: review against a written checklist.'], note: 'Illustrative. Adjust for your business.' })}
  <h2>5. SOP example for purchasing: paying a vendor</h2>
  ${doc({ id: 'SOP-05', title: 'Paying a vendor', meta: [['Owner', 'Accounts executive'], ['When', 'Invoice received']], steps: ['Match the invoice to the purchase order and delivery note.', 'If anything differs, raise it with purchasing within a day.', 'Schedule by due date. Payment runs happen twice a month.', 'Up to ₹25,000: accounts manager approves. Above that: owner.', 'Send the remittance advice and file everything together.'], note: 'Illustrative. Adjust the limits for your business.' })}
  <h2>How to tell if an SOP is working</h2>
  <p>Ask how often someone called you about this in the last month. If the calls have stopped and mistakes haven’t risen, it works. If people are ignoring it, ask them why. They may be right.</p>`,
  faqs: [
    ['What is an example of an SOP in business?', 'A complaint-handling SOP is a common example: it says who owns the complaint, how quickly it must be logged, how much that person can refund on their own, when to escalate and when to call the customer back.'],
    ['What is SOP in customer service?', 'It’s the written way your team handles customer situations, such as complaints, refunds or enquiries, so customers get the same treatment whoever answers. Example 1 above is a typical one.'],
    ['Can I use these SOP examples as they are?', 'Use them as a starting point. Change the roles and limits and test them with the people doing the job. An SOP copied without changes usually gets ignored.'],
  ],
});

const kraEx = guide({
  path: '/guides/kra-examples-small-business/', crumb: 'KRA examples', keyword: 'KRA examples', from: 'KRA examples guide', formH2: 'Want these set for your team?',
  title: 'KRA Examples and KPIs for Employees in Small Business',
  description: 'KRA examples for employees in a small business, with KPIs for eight common roles from sales to accounts. Plus the KRA and KPI difference and how to set them.',
  h1: 'KRA examples for employees in a small business',
  lede: 'Key result areas for eight common roles, each with KPIs you can measure. Copy what fits, keep it to three to five per person, and change the numbers to suit your business.',
  content: `<h2>KRA vs KPI: the difference</h2>
  <p>A <strong>KRA</strong> (key result area) is what someone is responsible for. A <strong>KPI</strong> (key performance indicator) is the number showing how it’s going. So “collections” is a KRA, and “90% of invoices collected within 30 days” is a KPI.</p>
  <h2>Eight KRA examples, with KPIs</h2>
  <p>All targets below are illustrative. Set yours from your own recent numbers.</p>
  ${table(['Role', 'KRA', 'Example KPI'], [
    ['Sales executive', 'New revenue', 'Monthly sales against target'],
    ['Sales executive', 'Follow-up', 'Leads contacted within 2 hours: 90%'],
    ['Telecaller', 'Conversations', 'Connected calls per day'],
    ['Telecaller', 'Conversion', 'Leads moved to next stage: 15%'],
    ['Customer care', 'Response', 'Enquiries answered within 2 hours: 90%'],
    ['Customer care', 'Resolution', 'Complaints closed within 3 days: 95%'],
    ['Accounts executive', 'Collections', 'Invoices collected within 30 days: 85%'],
    ['Accounts executive', 'Accuracy', 'Books closed by the 5th of each month'],
    ['Office administrator', 'Records', 'Any document found in 5 minutes'],
    ['Office administrator', 'Coordination', 'Weekly report sent on time'],
    ['Supervisor', 'Team output', 'Jobs completed on time: 95%'],
    ['Supervisor', 'Quality', 'Rework under 3% of jobs'],
    ['Store or branch manager', 'Sales and margin', 'Monthly sales and gross margin'],
    ['Store or branch manager', 'Stock', 'Stock variance under 1%'],
    ['HR or office manager', 'Hiring', 'Open roles filled within 30 days'],
    ['HR or office manager', 'Retention', 'Staff leaving within 6 months of joining'],
  ])}
  <h2>How to set KRAs for your team</h2>
  <ol class="nums"><li><strong>Start from the business goal.</strong> What has to happen this year? Work down to which role affects it.</li><li><strong>List what each role really answers for.</strong> Three to five things. If you’ve listed ten, you’ve described a job, not its priorities.</li><li><strong>Attach a number you can actually get.</strong> A KPI nobody can measure will turn into an argument.</li><li><strong>Write it with the person.</strong> They’ll tell you what’s in their control and what isn’t.</li><li><strong>Remove overlaps.</strong> If two people own it, nobody does.</li><li><strong>Review monthly, for twenty minutes.</strong> Yearly reviews are too late to help anyone.</li></ol>
  <h2>Common mistakes</h2>
  <ul class="dots"><li>Measuring what’s easy instead of what matters. Calls made is easy. Conversations held is what matters.</li><li>Holding someone to a number they don’t control.</li><li>Linking pay to KPIs before anyone trusts them.</li><li>Writing “improve communication” as a KRA. Improve it how, and how would you tell?</li></ul>
  <p>Want help with this? See <a href="/kra-consulting/">KRA and KPI setting</a>.</p>`,
  faqs: [
    ['What are KRA examples for employees?', 'Common examples: sales revenue for a sales executive, complaint resolution for customer care, collections for accounts, on-time output for a supervisor. Each should have one to three measurable KPIs.'],
    ['What are KRA and KPI in simple terms?', 'A KRA is what you’re responsible for. A KPI is the number that shows how you’re doing.'],
    ['How many KRAs should a role have?', 'Three to five. More than that and nothing’s really a priority.'],
    ['What are KRA examples for managers?', 'Team output, team quality, developing people and keeping good staff. For example: jobs done on time, rework rate, one person trained for each critical job, and staff retention.'],
  ],
});

const scaleG = guide({
  path: '/guides/how-to-scale-a-small-business/', crumb: 'How to scale a small business', keyword: 'how to scale a small business', from: 'Scaling guide', formH2: 'Want to know what breaks first in yours?',
  title: 'How to Scale a Small Business Without Burning Out',
  description: 'How to scale a small business in India: the difference between growth and scaling, what breaks at each stage and what to fix first, in the right order.',
  h1: 'How to scale a small business without burning out',
  lede: 'Scaling means revenue grows faster than your costs and your hours. If your turnover doubled and so did your stress, you’ve grown, but you haven’t scaled yet.',
  content: `<h2>Growth vs scaling</h2>
  ${table(['', 'Growing', 'Scaling'], [
    ['Revenue', 'Goes up', 'Goes up'],
    ['Costs', 'Rise about as fast', 'Rise more slowly'],
    ['Owner’s hours', 'Go up', 'Stay flat, then fall'],
    ['What it depends on', 'More effort, more people', 'Better systems'],
  ])}
  <h2>Are you ready to scale?</h2>
  <p>Before spending more on sales, check three things:</p>
  <ul class="dots"><li><strong>Is it profitable per unit?</strong> Scaling a product that loses money means losing money faster. Know your real margin, by product and customer.</li><li><strong>Is demand steady?</strong> One big client isn’t demand.</li><li><strong>Can someone else deliver it?</strong> If the quality depends on you personally, you’ve hit your limit. <a href="/guides/business-cant-run-without-owner/">Start here instead</a>.</li></ul>
  <h2>How to scale, in the right order</h2>
  <ol class="nums"><li><strong>Know your numbers.</strong> Monthly profit by product, cash, and cost of getting a customer. You can’t scale what you can’t see.</li><li><strong>Cut what doesn’t earn.</strong> Most small businesses have products and customers that take effort and lose money. Stopping is the cheapest growth you’ll get.</li><li><strong>Write down the core work.</strong> <a href="/guides/how-to-write-an-sop/">SOPs</a> for whatever must happen the same way each time.</li><li><strong>Make roles clear.</strong> <a href="/guides/kra-examples-small-business/">KRAs</a> and decision limits, before you add a single person.</li><li><strong>Build your second line.</strong> <a href="/leadership-training/">Train managers</a> before you need them. Promoting your best salesperson and hoping for the best isn’t a plan.</li><li><strong>Automate the repeatable.</strong> Follow-ups, reminders and reports. Do this after the process is clear, never before.</li><li><strong>Then push on sales.</strong> Marketing is the last step, because it pours more work onto whatever you’ve got. If that’s chaos, you get more chaos.</li></ol>
  <h2>What breaks as a business grows</h2>
  ${table(['Team size', 'What usually breaks', 'What you need'], [
    ['Under 10', 'Owner’s time', 'Role clarity, first SOPs'],
    ['10 to 25', 'Communication and handovers', 'Written processes, one or two leads'],
    ['25 to 50', 'Supervision and quality', 'Trained managers, KRAs, reviews'],
    ['50 to 100', 'Visibility, the owner can’t see it all', 'Reports, audits, a yearly plan'],
    ['New branch', 'Your standards', 'SOPs and training that travel'],
  ])}
  <p>These are rough patterns from what we see, not rules. Your walls may come earlier or later.</p>
  <h2>Mistakes that make scaling harder</h2>
  <ul class="dots"><li>Opening a second branch to solve problems in the first one.</li><li>Hiring ahead of the process, then blaming the hires.</li><li>Taking any revenue on offer, including work that doesn’t fit.</li><li>Buying software to fix something nobody has agreed on.</li><li>Waiting until things calm down. They don’t.</li></ul>
  <p>Want a look at your own? See <a href="/business-scaling-consulting/">business scaling consulting</a>.</p>`,
  faqs: [
    ['How do you scale a small business quickly?', 'Fast scaling usually comes from fixing what’s holding back existing demand, such as slow follow-ups or a stuck delivery process, instead of adding sales. Be careful of scaling faster than your systems can handle, because customers will feel it first.'],
    ['How do you scale a service business?', 'Standardise the service into clear packages, write down how it’s delivered, train others to deliver it, and move yourself from doing the work to checking its quality. Service businesses often stall since the owner is the product.'],
    ['What does it mean to scale a business?', 'It means increasing revenue without a matching increase in costs and effort. Your systems, not your hours, carry the extra load.'],
  ],
});

const teleG = guide({
  path: '/guides/how-to-be-a-good-telecaller/', crumb: 'How to be a good telecaller', keyword: 'telecaller', from: 'Telecaller guide', formH2: 'Want this for your whole calling team?',
  needs: ['Lots of leads, few sales', 'Callers give up too quickly', 'High telecaller turnover', 'No script or process', 'I’m a telecaller looking to improve', 'I want a quote for a batch'],
  title: 'How to Be a Good Telecaller: Effective Telecalling Tips',
  description: 'How to be a good telecaller and do effective telecalling: what to say in the first ten seconds, how to handle “not now”, and sample phrases that work.',
  h1: 'How to be a good telecaller',
  lede: 'Effective telecalling isn’t about talking more or making more calls. It’s about finding out quickly whether you can help this person, and earning the next step if you can.',
  content: `<h2>What is telecalling?</h2>
  <p>Telecalling means contacting customers by phone to sell, follow up, book appointments or provide support. A telecaller might call new leads from an ad, remind a customer about a renewal or follow up on an enquiry. In Kerala, most of these conversations happen in Malayalam, whatever the script says.</p>
  <h2>The first ten seconds</h2>
  <p>The person who picked up is busy and suspicious. In ten seconds, they need to know who you are, why you’re calling and whether it’s worth staying on the line.</p>
  <ul class="dots"><li><strong>Weak:</strong> “Good morning sir, I am calling from XYZ company, we are a leading provider of…”</li><li><strong>Better:</strong> “Sir, I’m Anu from XYZ. You enquired about our course on Instagram yesterday. Is this a good time for two minutes?”</li></ul>
  <p>Mention the reason for your call early, ask permission, and stop talking.</p>
  <h2>Effective telecalling tips</h2>
  <ol class="nums"><li><strong>Call fast.</strong> The sooner you call a new lead the better. A lead called back a week later has often forgotten you.</li><li><strong>Read what’s known first.</strong> Check the record, so they don’t have to repeat themselves.</li><li><strong>Ask more than you tell.</strong> “What made you enquire?” is worth more than three minutes on features.</li><li><strong>Listen for the real objection.</strong> “Send me details” often means “I want to end this call politely”.</li><li><strong>Always end with a next step.</strong> A day, a time and what happens then. “I’ll call you sometime” isn’t a next step.</li><li><strong>Use their language.</strong> If they speak Malayalam, you speak Malayalam. Nobody buys because of your English.</li><li><strong>Smile while you talk.</strong> It sounds like a cliché, and people can hear it anyway.</li><li><strong>Log it straight away.</strong> If you wait until evening, you’ll have forgotten half of it.</li></ol>
  <h2>How to handle common objections</h2>
  ${table(['They say', 'What it often means', 'Try saying'], [
    ['“Ippo venda” / “Not now”', 'Bad timing, or no interest', '“Sheri, no problem. Is it the timing, or is it not useful for you?”'],
    ['“Send me details”', 'Wants to end the call', '“Of course. So I send the right one, what are you looking for?”'],
    ['“Too costly”', 'Doesn’t see the value yet', '“Compared to what you had in mind? What budget were you thinking of?”'],
    ['“I’ll ask at home”', 'Needs someone else’s agreement', '“Sure. Would it help if I explained it to them as well? When can I call?”'],
    ['“Call me later”', 'Maybe busy, maybe avoiding', '“Sure. Is tomorrow at 11 okay, or is evening better?”'],
  ])}
  <h2>How to take rejection</h2>
  <p>You’ll hear “no” more than anything else. Good callers don’t take it personally, because most refusals have nothing to do with them. A “no” in the first ten seconds is about the person’s day. Decide on a small target, such as a number of real conversations, not sales. Take a short break after a rude call. And talk to the other callers, since they’re hearing the same things.</p>
  <h2>If you’re the owner reading this</h2>
  <p>Your telecallers can only be as good as the setup around them. Are leads reaching them quickly? Is the follow-up logged? Does anybody listen to calls and give feedback, or do they only hear about targets? Most telecalling “performance” problems turn out to be process problems. Our <a href="/telecalling-training/">telecalling training</a> looks at both.</p>`,
  faqs: [
    ['How do I do effective telecalling?', 'Call new leads quickly, read the record first, say why you’re calling within ten seconds, ask questions before explaining anything, agree a clear next step and log the call right away.'],
    ['What are the qualities of a good telecaller?', 'Clear speech, patience, real listening, resilience after rejection, discipline in follow-up and honest record keeping. Being talkative is far less important than people think.'],
    ['What is the work of a telecaller?', 'Calling leads and customers to sell, follow up, book appointments or give support, then recording the outcome so the business knows what happened.'],
    ['Is there telecalling training in Malayalam?', 'Yes. We run <a href="/telecalling-training/">telecalling training in Malayalam and English</a> for teams at Kerala businesses.'],
  ],
});

export default [owner, micro, howSop, sopEx, kraEx, scaleG, teleG];
