import { hero, band, head, said, scenes, doc, beforeAfter, steps, wounds, afterState, notFor, faq, leadForm, fig, cta, related, plans } from '../ui.mjs';

// ---------- SOP consulting
const sopFaqs = [
  ['What does an SOP consultant do?', 'An SOP consultant sits with the people doing the work, maps how each task really happens, writes it down as a clear standard operating procedure, gets it signed off, trains the team on it and checks that it gets followed. Writing is the smallest part of it.'],
  ['What is an SOP in business?', 'SOP stands for standard operating procedure: a written set of steps for how a recurring job is done, who does it, and what they can decide alone. In Malayalam terms, ഒരു ജോലി എങ്ങനെ ചെയ്യണം എന്ന് എഴുതി വെച്ച രേഖ. We don’t write student or visa “statements of purpose”, which share the same abbreviation.'],
  ['How much does SOP consulting cost in Kerala?', 'Custom SOP documentation is part of our Silver plan at ₹24,999 a month and our Platinum plan at ₹49,999 a month. If you only want a defined set of SOPs written, we’ll quote for that separately. See <a href="/pricing/">plans and fees</a>.'],
  ['How many SOPs does a small business need?', 'Fewer than you think. Start with the five to ten jobs that generate the most calls to you or the most expensive mistakes. A business with twelve SOPs people use is better run than one with two hundred nobody opens.'],
  ['Can SOPs be in Malayalam?', 'Yes, and often they should be. An SOP has to be readable by the person doing the job. We write in Malayalam, English or both, and use photos or short videos where that helps.'],
  ['Won’t SOPs make my staff robotic?', 'Good ones do the opposite. When routine work is settled, people stop asking about it and have room to think about the unusual cases. The SOP should also say clearly when to use judgement.'],
  ['How long does it take to document a business?', 'A first set of priority SOPs usually takes a few weeks of working sessions. Documenting a whole company is a matter of months, because each process has to be tested with the people using it. We’ll give you a realistic timeline after the audit.'],
  ['Where can I find SOP consultants near me in Kerala?', 'We are based in Trivandrum and offer SOP consulting services across Kerala, working on site where it matters and on calls for the rest. Search results for SOP consultants often mix in student statement-of-purpose writers, so check they mean business procedures.'],
  ['Do you help with ISO documentation?', 'Our focus is SOPs that make the business run better day to day. Those documents are a good foundation for ISO work, but certification itself needs an accredited body. Tell us if ISO is your goal and we’ll say what we can and can’t help with.'],
];
const sop = {
  path: '/sop-consulting/', crumb: 'SOP consulting', keyword: 'SOP consultant in Kerala', service: 'SOP consulting',
  title: 'SOP Consultant in Kerala | Standard Operating Procedures',
  description: 'SOP consultant in Kerala for MSMEs. We write standard operating procedures with your team, in Malayalam or English, then train and audit so they get used.',
  faqs: sopFaqs,
  body: [
    hero({
      scene: 'New joinee, day three',
      quote: '“Ask sir. Only he knows.”',
      after: 'Eleven years of decisions, and not one of them written down.',
      h1: 'SOP consultant in Kerala, for businesses where everything is in the owner’s head.',
      lede: 'We sit with your team, write down how the work really gets done, and turn it into standard operating procedures people use. In Malayalam, English or both.',
      side: doc({
        id: 'SOP-003', title: 'Following up a new enquiry',
        meta: [['Owner', 'Sales executive'], ['Time limit', 'Same working day']],
        steps: ['Call within two hours. Log it in the CRM.', 'No answer: WhatsApp the brochure, call again next morning.', 'Three attempts with no reply: mark as cold.', 'Discount up to 5%: decide yourself. Above that: ask the sales lead.'],
      }),
    }),
    said({
      eyebrow: 'What gets said in your office',
      lines: ['Do it the way Biju does it.', 'I told you this last month.', 'That’s not how we do it here.', 'Nobody showed me.'],
      h2: 'Why your business needs SOPs before it needs more staff.',
      paras: [
        'Every time you hire someone, you train them from the beginning, with whoever happens to be free. Each person passes on a slightly different version, shortcuts included. Six months on, you have four ways of doing one job and you can’t tell which one lost that customer.',
        'You’ve thought about writing it down. Probably on a Sunday. You opened a blank document, got as far as “Step 1” and realised you’d need three weeks you don’t have, and that half of what you do, you’ve never had to explain.',
        'That is the actual job of an SOP consultant. SOP writing is the easy part. Getting the knowledge out of people’s heads, agreeing what the right way is, and getting people to use it afterwards: that’s the work.',
      ],
    }),
    scenes({
      eyebrow: 'What undocumented work costs',
      h2: 'You pay for it every time someone leaves.',
      items: [
        ['Notice period, day 30', 'The handover is one page.', 'Nine years of knowing how things work, and the replacement gets one page and a phone number that stops answering in a month.'],
        ['Second branch, week two', 'It doesn’t feel like your shop.', 'Same name, same products. Different prices, different manners. You can’t be in two places, and nothing else carries the standard.'],
        ['Month-end, 9 pm', 'Only one person can close the books.', 'And that person has a family wedding. So you wait, and everyone pretends that’s normal.'],
        ['Annual review', 'You can’t correct what was never defined.', 'You know they’re doing it wrong. They say nobody told them. Unfortunately, you’re both right.'],
      ],
      closer: 'A business that can’t be explained can’t be handed over, can’t be sold and can’t be left alone.',
    }),
    steps({
      eyebrow: 'SOP development, step by step',
      h2: 'How we write SOPs people actually use.',
      items: [
        ['Pick what matters', 'We list the jobs that cause the most calls, mistakes and delays, and start there.', 'a priority list of SOPs'],
        ['Watch the real work', 'We interview and observe the person doing the job. What really happens, not what’s meant to.', 'a map of the process as it stands'],
        ['Agree the right way', 'We settle the steps, who owns them, and what each person may decide alone, with limits in rupees and days.', 'decision limits you’ve signed off'],
        ['Write it short', 'One or two pages, in the language the person reads, with photos or video where words fall short.', 'finished SOPs in your numbers'],
        ['Test it on a new person', 'If someone who has never done the job can follow it, it’s ready. If they can’t, we rewrite it.', 'a tested document'],
        ['Train, then audit', 'We roll it out with the team, then check in internal audits that it’s being followed and still makes sense.', 'SOPs that stay alive'],
      ],
    }),
    wounds({
      eyebrow: 'If you’ve tried this before',
      h2: 'Why most SOP files end up in a drawer.',
      items: [
        ['A consultant wrote a thick manual alone.', 'Nobody asked the staff, so nobody trusts it. Ours are <strong>written with the person doing the job</strong>, who then defends it.'],
        ['You downloaded a template.', 'It describes a company that isn’t yours. We start from <strong>your actual work and your numbers.</strong>'],
        ['Staff agreed, then carried on as before.', 'Without checks, it’s a suggestion. <strong>Internal audits</strong> show you what’s followed, and we fix what’s being ignored.'],
        ['It went out of date in a year.', 'Every SOP has <strong>an owner and a review date</strong>, so somebody is responsible for keeping it true.'],
      ],
      after: `<p style="margin-top:24px">Want to try it yourself first? Read <a href="/guides/how-to-write-an-sop/">how to write an SOP</a> or copy our <a href="/guides/sop-examples-for-business/">SOP examples</a>.</p>${cta()}`,
    }),
    faq(sopFaqs, 'Questions about SOP consulting'),
    related('Works well with', ['/process-training/', '/kra-consulting/', '/business-process-consulting/']),
    leadForm({ h2: 'Which job would you document first?', needs: ['Only I know how things work', 'Every new hire starts from zero', 'A key person is about to leave', 'We’re opening a new branch', 'We have SOPs but nobody follows them', 'I don’t know where to start'], from: 'SOP consulting page' }),
  ].join(''),
};

// ---------- Business process consulting
const procFaqs = [
  ['What does a business process consultant do?', 'A business process consultant maps how work moves through your company, finds where it gets stuck, gets repeated or falls through the cracks, and redesigns the flow so it needs fewer people, fewer steps and fewer decisions from the top.'],
  ['How is process consulting different from SOP consulting?', 'Process consulting decides what the right way of working should be. SOP consulting writes it down so people can follow it. If you document a broken process, you just get a very clear broken process, so we usually look at the flow first.'],
  ['What does process optimisation mean in a small business?', 'Usually nothing fancy: removing an approval nobody needs, combining two registers into one, making one person responsible for a handover. Most of the gains in an MSME come from clearing simple blockages, not from new technology.'],
  ['How do you measure improvement?', 'We pick a few numbers before we start, such as how long an order takes from enquiry to delivery, how often work is redone, or how many decisions reach the owner each week. Then we track those same numbers afterwards.'],
  ['Which plan includes process consulting?', 'Internal audits and process optimisation start at the Silver plan, ₹24,999 a month. Full process automation is part of Platinum. See <a href="/pricing/">plans and fees</a>.'],
  ['Will this disrupt my business while you work?', 'We change one process at a time and leave the rest alone. Your team keeps working while the improved version is tested on real jobs.'],
];
const process = {
  path: '/business-process-consulting/', crumb: 'Business process consulting', keyword: 'business process consultant', service: 'Business process consulting',
  title: 'Business Process Consultant in Kerala | Trainova BS',
  description: 'Business process consultant for Kerala MSMEs. We map how work really moves, remove the delays and rework, and redesign the flow so it stops waiting on you.',
  faqs: procFaqs,
  body: [
    hero({
      scene: 'Customer on hold, day six',
      quote: '“It’s with accounts.”',
      after: 'Accounts says it’s with stores. Stores says it’s with you.',
      h1: 'Business process consultant for Kerala companies where work keeps getting stuck.',
      lede: 'We follow one job through your whole business, find exactly where it waits, repeats or disappears, and redesign the flow so it moves without someone chasing it.',
    }),
    said({
      lines: ['Who has that file?', 'I sent it on WhatsApp. Check there.', 'We’ll have to do it again.', 'Sir hasn’t signed yet.'],
      h2: 'Your people aren’t slow. The work is waiting.',
      paras: [
        'Walk one order through your business with a stopwatch. Most of its life, nobody is working on it. It’s sitting in a tray, in a chat, on someone’s desk, or waiting for you to come back from a meeting.',
        'So you hire another person, and it gets a little worse, because now there’s one more person to hand it to. Payroll goes up. Speed doesn’t.',
        'Business process consulting starts by making that wait visible. Most owners are surprised less by how bad it is than by how small the fix turns out to be. Our business process consulting services focus on process improvement you can see in a month, not a slide deck.',
      ],
    }),
    beforeAfter({
      eyebrow: 'A typical finding',
      h2: 'Seven approvals for a ₹500 purchase.',
      intro: 'A made-up example, but you’ve probably got one like it. It grew one good reason at a time.',
      chainLabel: 'Today: 4 days',
      chain: ['Staff writes a request', 'Supervisor checks and signs', 'Accounts checks the budget', 'Waits for owner to return', 'Owner signs it without reading', 'Purchase happens four days late'],
      document: doc({
        id: 'PROCESS-007', title: 'Small purchases, redesigned',
        meta: [['Owner', 'Branch supervisor'], ['Time taken', 'Same day']],
        steps: ['Under ₹2,000: supervisor buys and logs it in the sheet.', '₹2,000 to ₹25,000: accounts confirms the budget, then buys.', 'Above ₹25,000: owner decides, within a day.', 'Owner reviews the sheet every Friday. Ten minutes.'],
      }),
    }),
    steps({
      eyebrow: 'Our process',
      h2: 'How we fix a process.',
      items: [
        ['Follow the work', 'We pick a core flow such as enquiry to invoice and follow real jobs through it.', 'a process map, warts included'],
        ['Find the waits', 'Where does work sit? Whose signature does it need? Where’s the rework coming from?', 'the three blockages costing most'],
        ['Redesign with the team', 'The people doing the work remove steps with us. They usually know which ones are pointless.', 'a simpler flow'],
        ['Run it on real jobs', 'We test on live work, adjust what breaks, and only then make it the standard.', 'a tested process and SOP'],
        ['Automate what’s left', 'Once the flow is simple, we look at where a tool can help. Often it’s smaller than you’d expect.', 'a list of what to automate'],
        ['Track it', 'Before and after numbers, reviewed regularly, so improvements don’t quietly slide back.', 'a few numbers you can trust'],
      ],
      after: cta(),
    }),
    faq(procFaqs, 'Questions about business process consulting'),
    related('Next steps', ['/business-automation/', '/sop-consulting/', '/process-training/']),
    leadForm({ h2: 'Where does work get stuck in your business?', needs: ['Orders take too long', 'Too much rework', 'Everything needs my signature', 'Departments blame each other', 'We hired more people, it got slower', 'I can’t see where things stand'], from: 'Process consulting page' }),
  ].join(''),
};

// ---------- Automation & CRM
const autoFaqs = [
  ['What can a small business automate first?', 'Good workflow automation usually starts small: enquiry capture and follow-up reminders, then WhatsApp and email notifications, invoice and payment reminders, and simple reports that someone currently compiles by hand. Start with whatever someone does every day that follows the same rule every time.'],
  ['What is the best CRM for small business in India?', 'It depends on your process and your team, not on a feature list. Many small teams are well served by an affordable or free CRM, or even a good shared sheet at first. We’ll recommend what fits after we see how your sales work, and we don’t earn commission on any tool.'],
  ['Do you set up CRM and sales funnels?', 'Yes, it is part of our business automation services. Basic CRM and funnel setup is included in our Basic plan at ₹9,999 a month, and full SOP and process automation is part of Platinum at ₹49,999 a month.'],
  ['We bought software and nobody uses it. Can you help?', 'That’s one of the most common things we see. Usually the software isn’t the problem: it was installed on top of a process nobody had agreed on. We fix the process, simplify the setup and train the team.'],
  ['Will automation replace my staff?', 'In a small business, it mostly frees people from copying and chasing, so they can do work that needs a person. We haven’t met an MSME with too much time to spend on customers.'],
  ['Do you write custom software?', 'No. We set up and connect existing tools. If you truly need custom software, we can help you write down what it must do, so a developer quotes properly and builds the right thing.'],
];
const automation = {
  path: '/business-automation/', crumb: 'Business automation', keyword: 'business automation', service: 'Business automation and CRM setup',
  title: 'Business Automation and CRM Setup for SMEs | Trainova BS',
  description: 'Business automation and CRM setup for Kerala SMEs. Stop running your company on WhatsApp and memory. Process first, then the right small tool, with training.',
  faqs: autoFaqs,
  body: [
    hero({
      scene: 'Sales review, Friday',
      quote: '“Did anyone call that lead back?”',
      after: 'Silence. Someone scrolls through WhatsApp. The ₹3 lakh enquiry came in nine days ago.',
      h1: 'Business automation and CRM setup for SMEs still running on WhatsApp and memory.',
      lede: 'We fix the process first, then set up the smallest tool that does the job, then train your team until they use it. So nothing depends on anyone remembering.',
    }),
    said({
      lines: ['I’ll note it down and call tomorrow.', 'Check the old group. It’s somewhere up there.', 'We’re paying for the software. Nobody opens it.', 'Make one Excel for that also.'],
      h2: 'You don’t have a software problem.',
      paras: [
        'You’re probably paying for at least one tool nobody uses. It came with a good demo and a promise that everything would be in one place. Six months later your team went back to WhatsApp, because the tool asked them to change everything at once and nobody ever decided how the work should go.',
        'Automation only works on something already clear. Automate a confused process and you get confusion, faster, with a monthly subscription.',
        'So we go in the other order. How should an enquiry move? Who owns it at each stage? What must happen and by when? Once that’s agreed, the tool is often a smaller, cheaper decision than the salesperson made it sound.',
      ],
    }),
    steps({
      eyebrow: 'What we usually set up',
      h2: 'The boring things that stop leaks.',
      cols: 2,
      items: [
        ['Enquiries that can’t get lost', 'Every lead from calls, WhatsApp, the website and ads lands in one place, with an owner and a next action date.'],
        ['Reminders that don’t need remembering', 'Follow-ups, renewals, payment due dates and service reminders arrive by themselves, for the right person.'],
        ['A report you don’t have to ask for', 'Leads, conversions, collections and pending work, ready every Monday without anyone staying late on Sunday.'],
        ['Handovers that leave a trail', 'When a sale moves to delivery or accounts, the details go with it, and it’s clear who has it now.'],
      ],
    }),
    wounds({
      h2: 'How we keep this one from joining the others.',
      items: [
        ['The salesperson promised it would do everything.', 'We <strong>don’t sell software</strong> and take no commission, so we can recommend the smallest thing that works.'],
        ['The team refused to use it.', 'They help design the process, and we <strong>train them on real leads,</strong> not a demo account.'],
        ['You’re locked into something expensive.', 'You <strong>own your accounts and data</strong> in tools under your company’s name.'],
      ],
      after: cta(),
    }),
    faq(autoFaqs, 'Questions about business automation'),
    related('Start with the process', ['/business-process-consulting/', '/sop-consulting/', '/telecalling-training/']),
    leadForm({ h2: 'What are you still doing by hand?', needs: ['Leads are getting lost', 'We run everything on WhatsApp', 'We bought software nobody uses', 'Reports take days to make', 'Payment follow-up is a mess', 'I want to see sales in one place'], from: 'Automation page' }),
  ].join(''),
};

// ---------- KRA
const kraFaqs = [
  ['What is the difference between KRA and KPI?', 'A KRA, or key result area, is what a person is responsible for, such as collections. A KPI, or key performance indicator, is the number that shows how it’s going, such as collections within 30 days. One KRA usually has one to three KPIs.'],
  ['How many KRAs should an employee have?', 'Three to five. Past that, nothing is really a priority and people pick the ones they like. A small business can often run well on three for most roles.'],
  ['Can you set KRAs for a small team?', 'Yes, and small teams often benefit most, because overlap is worst when everyone does a bit of everything. Team role clarity starts in our Basic plan. Formal KRA work is part of strategic planning in Platinum, or we can quote for it separately.'],
  ['Should salary and incentives be linked to KRAs?', 'Eventually, usually. But run KRAs for a few months first until the numbers are trusted. Tying money to a measure nobody believes creates arguments and some creative reporting.'],
  ['How do you stop KRAs becoming a yearly formality?', 'Short monthly reviews, a few numbers, each owned by one name. If the review takes a day and happens once a year, people forget it by the second month.'],
  ['Do you have KRA examples we can use?', 'Yes. Our guide has <a href="/guides/kra-examples-small-business/">KRA examples for eight common small business roles</a> that you can copy and adjust.'],
];
const kra = {
  path: '/kra-consulting/', crumb: 'KRA and accountability', keyword: 'KRA and KPI', service: 'KRA and KPI consulting',
  title: 'KRA and KPI Setting for Small Businesses | Trainova BS',
  description: 'KRA and KPI setting for Kerala SMEs. Clear roles, a few numbers and short reviews, so you stop being the only one who cares.',
  faqs: kraFaqs,
  body: [
    hero({
      scene: 'After the customer complained',
      quote: '“I thought he was doing it.”',
      after: 'He thought she was. She thought it was you.',
      h1: 'KRA and KPI setting for businesses where everyone is responsible, so nobody is.',
      lede: 'We define what each role answers for, attach a few honest numbers, and set up short reviews. So your team knows what good looks like and you can stop being the only person who notices.',
      side: doc({
        id: 'KRA-012', title: 'Customer care executive',
        meta: [['Reports to', 'Operations lead'], ['Review', 'Monthly, 20 minutes']],
        steps: ['Response: 90% of enquiries answered within 2 hours.', 'Resolution: complaints closed within 3 days.', 'Records: every interaction logged the same day.', 'Reviews: at least 10 new Google reviews requested each month.'],
      }),
    }),
    said({
      lines: ['That’s not my department.', 'Nobody told me.', 'I’m doing everything here.', 'Why do I have to think of everything?'],
      h2: 'You can’t hold anyone accountable for something you never defined.',
      paras: [
        'Here’s the uncomfortable part. When a task slips, you feel let down. They feel accused. Nobody wrote down whose job it was, so you’re both arguing about a rule that doesn’t exist.',
        'Good staff hate this as much as you do. They work hard and can’t tell if it’s enough, while someone who does less gets the same increment. Those are the people who leave first.',
        'Clear KRAs change the conversation. It stops being about whether you’re happy with someone and becomes about a number you both agreed on. That’s easier on everyone, you included.',
      ],
    }),
    steps({
      eyebrow: 'How we set KRAs',
      h2: 'KRA setting: from “do everything” to a page per role.',
      items: [
        ['Draw the real structure', 'Who actually reports to whom, including the parts that only exist in practice.', 'a one-page organisation chart'],
        ['Find overlaps and gaps', 'What do three people half-own? What does nobody own, so it lands on you?', 'one owner for every job'],
        ['Set KRAs and KPIs', 'Three to five per role, written with the person, using numbers you can actually get.', 'a KRA sheet per role'],
        ['Set delegation limits', 'What each role can decide alone, in rupees, days and situations.', 'fewer calls to you'],
        ['Run short reviews', 'Twenty minutes a month, the same questions every time.', 'a review routine managers can run'],
        ['Link to rewards, later', 'Once the numbers are trusted, we help connect them to increments and incentives.', 'a fair way to reward people'],
      ],
      after: cta(),
    }),
    faq(kraFaqs, 'Questions about KRAs and KPIs'),
    related('Related', ['/guides/kra-examples-small-business/', '/leadership-training/', '/sop-consulting/'], 'Read'),
    leadForm({ h2: 'Who answers for what in your business?', needs: ['Roles overlap and things get missed', 'I do what nobody else owns', 'Increments feel unfair or random', 'I can’t tell who’s performing', 'Good people are leaving', 'Reviews never happen'], from: 'KRA page' }),
  ].join(''),
};

// ---------- Scaling
const scaleFaqs = [
  ['What does a business scaling consultant do?', 'They help you grow revenue without costs, chaos and owner hours growing at the same rate. In practice that means finding what breaks at the next size, then putting systems, roles and managers in place before you get there.'],
  ['What is the difference between growth and scaling?', 'Growth adds revenue by adding cost at about the same rate: another salesperson, another branch, more of your time. Scaling means revenue rises faster than cost, because the way the business works has improved.'],
  ['When is a business ready to scale?', 'When demand is steady, the core product or service is profitable, and the work can be done without you personally. If the third isn’t true yet, that’s where to start, and it’s most of what we do.'],
  ['How do I scale without losing quality?', 'By deciding what quality means and writing it down, training people to it, and checking it regularly. Quality that depends on your personal attention can only reach as far as you can walk.'],
  ['Should I open a second branch?', 'Only after the first one can run for a month without you. Otherwise you’ll be splitting your attention between two businesses that both need you, and both will suffer. We can help you test that.'],
  ['Which plan suits scaling?', 'Silver at ₹24,999 a month is called Growth Accelerator for a reason. A business ready for full change usually needs Platinum at ₹49,999 a month. The free audit will show you which.'],
];
const scaling = {
  path: '/business-scaling-consulting/', crumb: 'Business scaling consulting', keyword: 'business scaling consultant', service: 'Business scaling consulting',
  title: 'Business Scaling Consultant for SMEs in Kerala | Trainova BS',
  description: 'Business scaling consultant for Kerala SMEs. Grow revenue without growing the chaos: systems, managers and numbers in place before you open the next branch.',
  faqs: scaleFaqs,
  body: [
    hero({
      scene: 'Bank statement, March',
      quote: '“We’ve never been busier. So where’s the money?”',
      md: true,
      after: 'More staff. More sales. More stress. About the same left over.',
      h1: 'Business scaling consultant for owners who’ve grown, and got tired instead of free.',
      lede: 'More revenue doesn’t help if every rupee needs another person and another hour of yours. We build what has to exist before the next stage, so growth stops costing you this much.',
    }),
    said({
      lines: ['Just need one more big order.', 'We need a bigger office.', 'After the new branch it will be fine.', 'We just need better people.'],
      h2: 'Growth isn’t what’s wearing you out. It’s adding size to a business built for one person.',
      paras: [
        'What worked at ten people was you: your memory, your standards, your relationships. It was fast and it was good. It’s also why you got this far, so nobody can blame you for carrying on.',
        'At thirty people it stops working, and it doesn’t fail loudly. Mistakes rise a little. Good people leave a little sooner. Margins thin a little. You work a little later. And since each thing is small, you keep thinking one more push will sort it out.',
        'Every stage needs a different business. Getting there isn’t a question of doing the same things harder.',
      ],
    }),
    scenes({
      eyebrow: 'What breaks as you grow',
      h2: 'You can usually see the next wall from here.',
      items: [
        ['Around 10 people', 'You can’t be in every conversation.', 'Things get decided without you, or nothing gets decided. Team roles need to be clear for the first time.'],
        ['Around 25 people', 'You need managers, and you’ve never had them.', 'So you promote your best salesperson. Now you’ve lost a good salesperson and gained an uneasy manager.'],
        ['Around 50 people', 'You can’t know what’s going on by walking around.', 'If you don’t have numbers, you have opinions. Everyone’s opinion is that their department is fine.'],
        ['A second location', 'Your standard stays where you are.', 'Anything not written down and trained doesn’t travel. Customers notice before you do.'],
      ],
      closer: 'The cost of fixing this goes up with every person you hire.',
    }),
    steps({
      eyebrow: 'How we work',
      h2: 'What we build before you grow.',
      items: [
        ['Find the next wall', 'A business audit to see what breaks first at your next stage.', 'a clear order of work'],
        ['Make profit visible', 'What actually makes money: which products, customers and branches.', 'numbers you can decide with'],
        ['Take yourself out', 'Roles, delegation limits and SOPs, so operations stop depending on you personally.', 'time back, a few hours at first'],
        ['Build managers', 'Train the people who’ll run things, instead of hoping promotion does it.', 'a second line you can trust'],
        ['Plan properly', 'SWOT, KRAs and a yearly plan in one page, reviewed monthly.', 'a plan that survives March'],
        ['Then push', 'Marketing and sales pressure on a business that can now deliver, with our partners at BrinIT if you need them.', 'growth that holds'],
      ],
      after: cta(),
    }),
    faq(scaleFaqs, 'Questions about scaling a business'),
    related('Go deeper', ['/guides/how-to-scale-a-small-business/', '/leadership-training/', '/kra-consulting/'], 'Read'),
    leadForm({ h2: 'What’s your next wall?', needs: ['Revenue is up but profit isn’t', 'I need managers I can trust', 'Thinking about a second branch', 'Quality slips as we grow', 'I have no time to plan', 'We’ve been stuck at this size for years'], from: 'Scaling page' }),
  ].join(''),
};

// ---------- Startup
const startFaqs = [
  ['What does a startup consultant do?', 'A startup consultant helps founders set up how the company will run: vision, roles, sales process, basic systems and priorities. Some also handle registration and funding. Others call the same role a startup mentor or startup advisor. We focus on how the business runs, and your CA or Kerala Startup Mission can help with the rest.'],
  ['Do you help with company registration or Startup India recognition?', 'No. A CA or company secretary is the right person for that, and Kerala Startup Mission runs support programmes worth looking at. We start where they finish, with how you’ll actually operate.'],
  ['Is it too early to think about SOPs in a startup?', 'Not if you keep them short. Most early SOPs are half a page, and they’ll change. You’re not building a bureaucracy. You’re making sure the second and third people you hire don’t have to guess.'],
  ['Do you help with funding?', 'We don’t raise money or arrange loans. But an investor will ask how the business runs and who owns what, and we can help you have good answers.'],
  ['Our founders keep disagreeing. Can you help?', 'Often, yes. Many founder arguments are really arguments about unclear roles. Writing down who decides what doesn’t solve everything, but it removes the arguments that were only ever about that.'],
  ['What does startup consulting cost?', 'Most early-stage companies start on the Basic plan at ₹9,999 a month, which covers the free audit, vision and strategy, role clarity and basic CRM and funnel setup.'],
];
const startup = {
  path: '/startup-consulting/', crumb: 'Startup consulting', keyword: 'startup consultant in Kerala', service: 'Startup consulting',
  title: 'Startup Consultant in Kerala for Founders | Trainova BS',
  description: 'Startup consultant in Kerala for founders. Set your vision, roles, sales process and systems right from day one, so you don’t rebuild it all at forty staff.',
  faqs: startFaqs,
  body: [
    hero({
      scene: 'Founder’s WhatsApp group, month four',
      quote: '“We’ll fix the process later.”',
      after: 'Everyone says it. Later arrives at forty staff, with no way to stop and fix anything.',
      h1: 'Startup consultant in Kerala, for founders who want it right from day one.',
      lede: 'You left a salary or put in your family’s savings. We help you set up vision, roles, sales and simple systems now, while it’s still cheap to get them right.',
    }),
    said({
      lines: ['Everyone does everything for now.', 'We’re like a family here.', 'I’ll hire someone when we can afford it.', 'Let’s just get customers first.'],
      h2: 'Nobody starts a business to write processes. That’s how the mess gets in.',
      paras: [
        'In the first year, speed is everything and you’re right to chase it. Nobody should be writing a forty-page manual while they’re looking for a first customer.',
        'But a few small decisions made now will follow you for years. Who decides what between the founders. What you’ll never do for a customer. How an enquiry gets followed up. Who you hire second, and how you’ll know whether it’s working.',
        'Decide them on purpose and they take an afternoon. Leave them and they turn into company culture, and that takes years to undo.',
      ],
    }),
    steps({
      eyebrow: 'What we set up with you',
      h2: 'The minimum a young company needs.',
      items: [
        ['Vision and values', 'What you’re building, for whom, and what you won’t do for money. In one page, not a poster.', 'something to decide against'],
        ['Founder roles', 'Who decides what, and how disagreements get settled before they get personal.', 'a written agreement on roles'],
        ['Sales basics', 'How an enquiry moves, who follows up, what you charge and when you say no.', 'a simple CRM and funnel'],
        ['First-hire playbook', 'Who to hire, how to train them, and what to give them on day one.', 'short SOPs for your core work'],
        ['Numbers that matter', 'Cash, runway, customers and the two or three figures you’ll really look at.', 'a weekly one-page view'],
        ['A rhythm', 'A weekly hour to look at the business, instead of only working in it.', 'a habit worth keeping'],
      ],
      after: cta('Book my free audit'),
    }),
    notFor({
      h2: 'What we don’t do for startups',
      items: ['Company registration, GST or trademarks. See your CA or CS.', 'Fundraising or investor introductions.', 'Writing your code or designing your product.', 'Telling you your idea will work. Only customers can do that.'],
    }),
    faq(startFaqs, 'Questions founders ask us'),
    related('Useful next', ['/guides/how-to-write-an-sop/', '/business-automation/', '/fresh-graduate-training/'], 'Read'),
    leadForm({ h2: 'What are you building?', needs: ['We’re just starting out', 'Founders keep disagreeing', 'First hires aren’t working out', 'Sales are random and unstructured', 'I’m doing everything myself', 'We’re growing and it’s getting messy'], from: 'Startup page' }),
  ].join(''),
};

// ---------- Coach
const coachFaqs = [
  ['Who is the best business coach in Kerala?', 'Kerala has several well-known business coaches, and “No.1” claims are self-awarded, so we’d ignore them, ours included. Whether you’re comparing the top business coach in Kochi or someone in Trivandrum, ask each one what you’ll physically have after the programme, who will work with your team, and whether you can speak to two past clients of your size.'],
  ['What is the difference between a business coach and a business consultant?', 'A coach usually works on you: your thinking, goals, confidence and discipline. A consultant usually works on the business: its processes, structure and systems. Many owners benefit from both. We’re mostly the second, with leadership development for you and your managers.'],
  ['What are business coach fees in India?', 'Guides on the Indian market quote roughly ₹5,000 to ₹25,000 per session and ₹20,000 to ₹2 lakh a month for one-to-one coaching. Group programmes vary widely. Our plans are ₹9,999 to ₹49,999 a month, and they include work on your business, not only with you.'],
  ['Are you a business trainer in Kerala who runs seminars?', 'Our main work is inside your business, with your team. We also run training programmes and working sessions, but we’re not a seminar company, and that’s a deliberate choice.'],
  ['Can I find a business mentor in Kerala who works in Malayalam?', 'Yes. We work in Malayalam and English, with whichever is more comfortable for you and your team.'],
  ['I’ve already done a coaching programme. Is this still useful?', 'Very often. You may already know what needs to change. What’s usually missing is the months of unglamorous work with your team to make it real. That’s the part we do.'],
];
const coach = {
  path: '/business-coach-kerala/', crumb: 'Business coach in Kerala', keyword: 'business coach in Kerala', service: 'Business coaching and mentoring',
  title: 'Business Coach in Kerala Who Builds Systems | Trainova BS',
  description: 'Looking for a business coach in Kerala? We work on your business as well as you: SOPs, roles and team training, in Malayalam and English. Free audit first.',
  faqs: coachFaqs,
  body: [
    hero({
      scene: 'Monday, 9:30 am, the week after the seminar',
      quote: '“This time will be different.”',
      after: 'By Wednesday the phone is ringing the same way. The notebook is in the car.',
      h1: 'A business coach in Kerala for owners who’ve had enough inspiration.',
      lede: 'You don’t need another reason to be motivated. You’re motivated. You need the work done inside your business, with your team, after the lights come up. That’s what we’re here for.',
    }),
    said({
      eyebrow: 'You may recognise these',
      lines: ['I’ve attended everything. I know what to do.', 'My team just doesn’t have the same fire.', 'I felt ten feet tall that weekend.', 'I should send my managers too.'],
      h2: 'Why business coaching wears off by Wednesday.',
      paras: [
        'Good coaching changes how you see things, and that’s real. Plenty of Kerala business owners have been helped by it, and we won’t tell you otherwise.',
        'But think about what happens next. You come back seeing clearly, into a team that wasn’t in the room. Nothing around you has changed. You announce some new ideas, your staff wait for it to pass, and it passes. You start to feel the failure was yours.',
        'It wasn’t. A business doesn’t run on what the owner knows. It runs on what’s written down, trained and checked. That part can’t be done from a stage.',
      ],
    }),
    wounds({
      eyebrow: 'The real comparison',
      h2: 'Coach or consultant? Ask what’s left after the last session.',
      items: [
        ['What you get from most coaching', 'A sharper view, more discipline and a group of people who understand you. <strong>Worth having,</strong> especially if you feel alone at the top.'],
        ['What you get from us', '<strong>SOPs, role definitions, delegation limits, KRAs and trained managers.</strong> Things your team uses on a Tuesday when you’re not there.'],
        ['Who it’s aimed at', 'A coach works mainly with you. We work with you <strong>and the people you need to stop calling you.</strong>'],
        ['Where it happens', 'A hotel ballroom or a video call, usually. For us, <strong>your office, your real work and your real numbers.</strong>'],
      ],
      after: cta(),
    }),
    band(`<div class="two center">${fig('anas-trust-advantage', 'Anas of Trainova BS next to a screen titled The Trust Advantage during a working session for founders', 'From “The Trust Advantage”, a working session for founders and owner-operators.')}<div class="prose"><span class="eyebrow mono">We do mentor owners too</span><h2>You still need someone to talk to.</h2><p>Running a business is lonely. There are things you can’t tell your staff, your family or your partner. In one <a href="https://www.deccanherald.com/amp/story/india%2Fgood-nights-rest-is-hard-to-come-by-entrepreneurs-startup-founders-plagued-by-sleep-crisis-3446946" rel="noopener">survey of 260 founders and business leaders across six Indian cities</a>, 55% said they struggle with sleep.</p><p>So yes, part of this is business mentoring: someone who understands what you’re looking at and will tell you the truth about it, in Malayalam if you prefer. We just won’t stop at the conversation.</p></div></div>`, 'sheetband'),
    faq(coachFaqs, 'Questions about business coaching'),
    related('See what the work looks like', ['/sop-consulting/', '/leadership-training/', '/free-business-audit/']),
    leadForm({ h2: 'What did the last programme leave undone?', needs: ['I know what to do, but it isn’t happening', 'My team isn’t changing', 'I feel alone in this', 'I want someone to be honest with me', 'I need a plan I can follow', 'I want my managers involved'], from: 'Business coach page' }),
  ].join(''),
};

// ---------- Family
const famFaqs = [
  ['What do family business consultants in Kerala do?', 'They help families run a company without the family relationship and the business getting in each other’s way: who decides what, how roles and pay are set, how the next generation comes in, and how the business becomes less dependent on one founder.'],
  ['Do you draft family constitutions, wills or trusts?', 'No. That’s legal work for a company secretary or lawyer, and Kerala has good ones. We handle the operating side: roles, decision rights, SOPs and training for the next generation and for long-serving staff. We’re happy to work alongside your legal adviser.'],
  ['How do you bring the next generation into the business?', 'Give them a defined role with real numbers to answer for, not a title and an office. Agree which decisions pass to them and when. The worst version is the one most common: the son or daughter is “in the business” while every employee still checks with the parent.'],
  ['What if long-serving staff won’t accept the next generation?', 'It’s very common, and usually rational. They’re loyal to the founder and aren’t sure who to answer to. Clear decision rights and a visible handover from the founder do more than any speech.'],
  ['My parent won’t let go. Can you help?', 'Sometimes. It’s rarely about control for its own sake. Often the founder has no way to know things are fine without checking. Writing down how things work and reporting a few numbers gives them that assurance. It doesn’t work every time, and we’ll be honest with you if we don’t think it will.'],
  ['Should family members be paid market salaries?', 'In most cases, yes: separate pay for the work from returns on ownership. It makes it far easier to see whether a role is being done well, and it reduces quiet resentment between siblings. Talk to your CA about the tax side.'],
];
const family = {
  path: '/family-business-consultant-kerala/', crumb: 'Family business consulting', keyword: 'family business consultant', service: 'Family business consulting',
  title: 'Family Business Consultant in Kerala | Trainova BS',
  description: 'Family business consultant in Kerala. Clear roles and decision rights for two generations, so the business can outlast one person.',
  faqs: famFaqs,
  body: [
    hero({
      scene: 'Your third year back in the business',
      quote: '“Let me just check with your father once.”',
      md: true,
      after: 'Said politely, by someone who has known you since you were in school. For the fourth time today.',
      h1: 'Family business consultant in Kerala, for two generations in one office.',
      lede: 'The founder built it by being in everything. The next generation can’t lead a business that still routes every decision upstairs. We give both of them something clearer than another argument at dinner.',
    }),
    scenes({
      eyebrow: 'Both sides of the table',
      h2: 'Nobody here is wrong.',
      items: [
        ['If you’re the founder', 'You built this from nothing.', 'You know what it cost. You see your son or daughter do it differently and your stomach tightens. Letting go looks a lot like not caring.'],
        ['If you’re the next generation', 'You have the title and not the job.', 'You came back with ideas and an MBA, or you gave up a career abroad. Three years on, you still can’t approve a purchase, and the staff know it.'],
        ['At the dinner table', 'The meeting never ends.', 'There’s no office to leave it in. Your mother asks you both to stop talking about work. Everyone’s tired of this argument.'],
        ['The long-serving manager', 'Whose instruction counts?', 'Twenty-two years of loyalty, and now two bosses who disagree. So they wait to see who wins, and work slows down.'],
      ],
      closer: 'Most of this isn’t about family. It’s about nobody having written down who decides what.',
      after: `<p class="source" style="margin-top:22px">In a <a href="https://gatewaysglobal.com/insights/results-and-observations-derived-from-the-study-on-generation-based-family-owned-and-managed-businesses-in-kerala/" rel="noopener">Gateways Global study of family firms in Kerala</a>, 67% of founding-generation respondents had not established a succession plan.</p>`,
    }),
    steps({
      eyebrow: 'What we do',
      h2: 'Make the handover something you can see.',
      items: [
        ['Listen to each person separately', 'What each of you is really worried about tends to come out only one to one.', 'a shared picture of the problem'],
        ['Write down who decides what', 'Decision rights by person and rupee amount, with a date when they change.', 'one page you all sign'],
        ['Give the next generation a real job', 'A defined part of the business, with numbers they answer for.', 'a track record, not just a title'],
        ['Get it out of the founder’s head', 'SOPs for what only the founder knows, including the relationships.', 'knowledge that survives'],
        ['Bring the old guard along', 'Long-serving staff get clarity about their role and who they answer to.', 'less waiting to see who wins'],
        ['Give the founder a new view', 'A few honest numbers, weekly, so stepping back doesn’t mean going blind.', 'a way to stop checking'],
      ],
      after: cta(),
    }),
    notFor({
      h2: 'What we leave to others',
      intro: 'Succession has a legal and tax side, and it needs proper advisers.',
      items: ['Wills, private trusts and family constitutions: see a lawyer or company secretary.', 'Share transfers and tax planning: see your CA.', 'Family disputes already in court.', 'Counselling. We’re not qualified, and sometimes that’s what a family needs first.'],
    }),
    faq(famFaqs, 'Questions about family businesses'),
    related('Useful next', ['/guides/business-cant-run-without-owner/', '/leadership-training/', '/sop-consulting/'], 'Read'),
    leadForm({ h2: 'Which side of the table are you on?', needs: ['I’m the founder and want to step back', 'I’m the next generation and stuck', 'Staff still go to the founder', 'Siblings disagree about roles', 'Nothing is written down', 'We want to professionalise'], from: 'Family business page' }),
  ].join(''),
};

// ---------- Locations
const tvmFaqs = [
  ['Who are the best business consultants in Trivandrum?', 'It depends on what you need. Several firms in Trivandrum focus on GST, registration and loan paperwork, which is useful and different from what we do. If your problem is how the business runs, ask what they will leave behind, and whether they’ll work with your team in your office.'],
  ['Where is your office in Trivandrum?', 'Madhavam Buildings, Door No: VP/1/21, Trivandrum, Kerala 695573. Call <a href="tel:+919061266629">+91 90612 66629</a> before you come, so we can make sure someone is there for you.'],
  ['Will a business consultant in Thiruvananthapuram come to my office?', 'We will, and we prefer to. It’s hard to understand a business from a meeting room. Seeing how work moves on an ordinary morning tells us more than any report.'],
  ['What kind of businesses do you work with in Trivandrum?', 'Owner-run MSMEs, such as retail and wholesale traders, clinics, service companies, institutes, contractors and small IT firms.'],
  ['Do you provide corporate training in Trivandrum?', 'Yes. We run <a href="/corporate-training/">corporate training</a> in Trivandrum, including leadership, telecalling, office administration and our Fresh Graduate to Professional programme.'],
];
const tvm = {
  path: '/business-consultant-trivandrum/', crumb: 'Business consultant, Trivandrum', keyword: 'business consultant in Trivandrum', service: 'Business consulting', area: 'Thiruvananthapuram',
  title: 'Business Consultant in Trivandrum for MSMEs | Trainova BS',
  description: 'Business consultant in Trivandrum for owner-run businesses. SOPs, roles and team training, in your office, in Malayalam or English. Free audit.',
  faqs: tvmFaqs,
  body: [
    hero({
      scene: 'Thampanoor, 6:50 pm, stuck behind a bus',
      quote: '“Only sir can answer that.”',
      after: 'You’ve left the shop for an hour. Your phone has already rung three times.',
      h1: 'Business consultant in Trivandrum, for owners who can’t leave the shop for an hour.',
      lede: 'Trainova BS is a Trivandrum firm. We work in your office, with your team, on how your business runs: SOPs, roles, processes and training. Your first conversation with us, the business audit, is free.',
    }),
    band(`<div class="two"><div>${head('Why local matters', 'We can see your business on an ordinary morning.')}</div><div class="prose">
    <p>Trivandrum is an odd market. Technopark and the IT firms around Kazhakkoottam sit a short drive from Chalai’s decades-old traders. Government offices set the rhythm for half the city’s suppliers. Clinics around Medical College run nothing like a showroom in Pattom or an institute in Kowdiar.</p>
    <p>What they tend to share is a capable owner who built something on their own effort, and a team that calls that owner for everything.</p>
    <p>Working from Trivandrum means we can come by. We can sit in your office on a Tuesday, watch how a customer gets handled and see where work really waits. You can’t see that on a Zoom call, and nobody tells you about it in a meeting.</p>
    <p>We work in Malayalam and English. If you need GST filing, registration or a project report for a loan, your CA or a compliance firm is the right call. We’ll happily work next to them.</p></div></div>`),
    steps({
      eyebrow: 'What we do in Trivandrum',
      h2: 'Everything happens in your building.',
      items: [
        ['Free business audit', 'A conversation about how your business actually runs and where it depends on you.'],
        ['SOPs and roles', '<a href="/sop-consulting/">Standard operating procedures</a> and <a href="/kra-consulting/">KRAs</a> written with your staff, on site.'],
        ['Process fixes', '<a href="/business-process-consulting/">Process consulting</a> that follows real jobs through your business.'],
        ['Team training', '<a href="/corporate-training/">Corporate training</a> at your premises, from telecalling to leadership.'],
        ['Fresh graduates', 'Our <a href="/fresh-graduate-training/">FG2P programme</a> for new hires or graduates entering the workforce.'],
        ['Monthly plans', 'From ₹9,999 a month. See <a href="/pricing/">plans and fees</a>.'],
      ],
      after: cta(),
    }),
    band(fig('anas-session-side', 'Anas of Trainova BS presenting at a conference table during a working session in Kerala', 'A working session with founders and owner-operators in Kerala.', '', '100vw'), 'tight'),
    faq(tvmFaqs, 'Questions from Trivandrum owners'),
    related('Also in Kerala', ['/', '/business-consultant-kochi/', '/business-consultant-calicut/']),
    leadForm({ h2: 'Let’s meet in Trivandrum.', from: 'Trivandrum page' }),
  ].join(''),
};

const kochiFaqs = [
  ['Are you based in Kochi?', 'No, and we’d rather say so up front. Our office is in Trivandrum. We travel to Kochi for the work that has to happen in your office, and the rest runs on calls and WhatsApp.'],
  ['Why choose a Trivandrum firm over business consultants in Kochi?', 'If you’d rather have someone a short drive away, that’s a good reason to choose a business consulting company in Kochi, and there are several. Choose us if you want SOPs, roles and team training specifically, rather than compliance or general advice.'],
  ['What do Kochi businesses usually ask you for?', 'Most often, help with a business that has grown past the owner: traders and distributors with several branches, exporters, clinics, service firms and young companies around Infopark and Kakkanad.'],
  ['Do you provide corporate training in Kochi?', 'Yes, at your premises, for batches of your own staff. See <a href="/corporate-training/">corporate training</a> for the programmes.'],
  ['What does it cost for a Kochi business?', 'The same plans: ₹9,999, ₹24,999 and ₹49,999 a month. For regular travel-heavy work we’ll agree any travel cost with you up front.'],
];
const kochi = {
  path: '/business-consultant-kochi/', crumb: 'Business consultant, Kochi', keyword: 'business consultant in Kochi', service: 'Business consulting', area: 'Kochi',
  title: 'Business Consultant in Kochi, Ernakulam | Trainova BS',
  description: 'Business consultant in Kochi for growing owner-run firms. SOPs, roles and team training on site, from a Kerala firm that is plain about what it does.',
  faqs: kochiFaqs,
  body: [
    hero({
      scene: 'Vyttila junction, 9:40 am',
      quote: '“Sir is on the way. Everything’s on hold till then.”',
      md: true,
      after: 'Forty minutes in traffic, and a whole office waiting on one person to get through it.',
      h1: 'Business consultant in Kochi, for companies that wait for the owner to arrive.',
      lede: 'Kochi moves fast, and so did your business. We help you build the SOPs, roles and team training that let it keep moving while you’re stuck at Vyttila.',
    }),
    band(`<div class="two"><div>${head('Straight answer', 'We’re from Trivandrum. Here’s when that’s fine.')}</div><div class="prose">
    <p>Search for a business consultant in Kochi and you’ll find many good business consulting firms and management consultants in Kadavanthra, Edappally and Vyttila. A lot of them do excellent work on GST, company formation, accounting and compliance. If that’s what you need, hire one of them.</p>
    <p>What’s less common is someone who’ll spend time inside your business and work on how it operates. A distributor in Broadway with three generations of habits. An exporter around Aroor with a hundred people and one decision-maker. A service firm in Kakkanad that doubled in two years and now misses every deadline.</p>
    <p>That’s our work. We come to Kochi for what has to happen in your office: observing, working sessions with your team, training. Between visits, we work on calls and on WhatsApp, in Malayalam and English.</p></div></div>`),
    wounds({
      eyebrow: 'Choosing between us and a local firm',
      h2: 'What to ask any consultant in Kochi.',
      items: [
        ['Is your work compliance or operations?', 'We don’t do compliance. <strong>We do operations.</strong> Some firms do both. Know which one you’re getting.'],
        ['Who will sit with my team?', 'For us, <strong>the person you speak to.</strong> Ask any firm who actually turns up.'],
        ['What will I have at the end?', '<strong>SOPs, KRAs, trained managers.</strong> If it’s a report, ask who’s going to implement it.'],
      ],
      after: cta(),
    }),
    faq(kochiFaqs, 'Questions from Kochi owners'),
    related('What we do', ['/sop-consulting/', '/business-scaling-consulting/', '/corporate-training/']),
    leadForm({ h2: 'Tell us about your Kochi business.', from: 'Kochi page' }),
  ].join(''),
};

const clcFaqs = [
  ['Are you a business consultant in Kozhikode?', 'We work in Kozhikode but we aren’t based there. We’re in Trivandrum, and we come to Kozhikode for the work that has to happen in your office. Between visits, we work on calls and WhatsApp.'],
  ['Who do you work with in Kozhikode?', 'Owner-run businesses such as trading families, textile and retail groups, hospital and clinic groups, hospitality and Gulf-linked companies, especially ones run by an owner who’s often travelling.'],
  ['I live in the Gulf and my business is in Kerala. Can you help?', 'That’s one of the most stressful ways to run a business: everything depends on you, and you’re a flight away. Written processes, clear decision limits and a few weekly numbers are exactly what that situation needs. Message us.'],
  ['Do you work in Malayalam?', 'Yes. We work in Malayalam and English, and SOPs can be written in whichever one your staff read.'],
  ['What does it cost?', 'The same plans as everywhere: ₹9,999, ₹24,999 and ₹49,999 a month. We agree any travel costs up front. See <a href="/pricing/">plans and fees</a>.'],
];
const calicut = {
  path: '/business-consultant-calicut/', crumb: 'Business consultant, Calicut', keyword: 'business consultant in Calicut', service: 'Business consulting', area: 'Kozhikode',
  title: 'Business Consultant in Calicut, Kozhikode | Trainova BS',
  description: 'Business consultant in Calicut for trading families, retail groups and Gulf-run businesses. SOPs, roles and training so the business runs when you are away.',
  faqs: clcFaqs,
  body: [
    hero({
      scene: 'Malabar, any shop floor, any afternoon',
      quote: '“Muthalali varatte.”',
      after: 'Let the owner come, then we’ll see. It’s been the rule for thirty years, and it works, until the owner is in Dubai.',
      h1: 'Business consultant in Calicut, for businesses that wait for the Muthalali.',
      lede: 'Kozhikode’s businesses were built on personal trust and an owner who knew everyone. We keep what’s good about that, and write down the rest, so the business can run when you’re in the Gulf, at a function or finally resting.',
    }),
    band(`<div class="two"><div>${head('Why Malabar is different', 'Trust built this. Trust alone won’t scale it.')}</div><div class="prose">
    <p>Plenty of Malabar’s business is done on a handshake and a phone call. That’s a real strength, and it got many family firms a long way, from SM Street traders to groups with outlets across the Gulf.</p>
    <p>The difficulty comes when the business outgrows the people who hold it together. A supplier’s real terms live in one person’s memory. The owner’s away for a month and decisions stack up. The next generation returns from abroad and nobody quite knows what they’re allowed to change.</p>
    <p>We’re based in Trivandrum, and we come to Kozhikode for the work that has to happen on your floor. The work itself is the same as anywhere: find where the business depends on you, then build the SOPs, roles and training so it stops. Though we’ll say this: if you’re running a Kerala business from Riyadh or Dubai, you’ll feel the difference sooner than most.</p></div></div>`),
    scenes({
      eyebrow: 'If you’re the owner abroad',
      h2: 'The business you run from eight time zones of worry.',
      items: [
        ['6:30 am, Dubai', 'You check the camera feed before your coffee.', 'You can see people. You can’t see whether they’re doing the right thing.'],
        ['Friday evening', 'Your brother says everything’s fine.', 'It’s what he said last time too, a week before the shortfall. You don’t want to doubt him. You do anyway.'],
      ],
      closer: 'You shouldn’t need to fly home to find out how things are.',
    }),
    steps({
      eyebrow: 'What we’d do first',
      h2: 'Three things for a business run from a distance.',
      items: [
        ['A weekly numbers page', 'Sales, collections, stock and cash, in the same format every week.', 'facts rather than reassurance'],
        ['Written decision limits', 'What the manager can decide alone, and what needs you.', 'fewer late-night calls'],
        ['SOPs for the money', 'How cash, credit, discounts and purchases are handled, by whom.', 'less to worry about, and less temptation'],
      ],
      after: cta(),
    }),
    faq(clcFaqs, 'Questions from Malabar owners'),
    related('Related', ['/family-business-consultant-kerala/', '/sop-consulting/', '/business-consultant-kochi/']),
    leadForm({ h2: 'Tell us about your Malabar business.', needs: ['I run it from the Gulf', 'Everything waits for me', 'I don’t trust the numbers I get', 'Next generation is coming in', 'We’re adding outlets', 'Nothing is written down'], from: 'Calicut page' }),
  ].join(''),
};

export default [sop, process, automation, kra, scaling, startup, coach, family, tvm, kochi, calicut];
