import { proofSection, address, ticker, hero, plainHero, band, head, said, neck, film, person, scenes, doc, beforeAfter, steps, flow, wounds, stacked, afterState, notFor, cards, plans, faq, leadForm, fig, img, cta, related, consulting, training, guides, site, waLink } from '../ui.mjs';

const homeFaqs = [
  ['Are you a business management consultant or a business advisor?', 'Both words fit. Look for the best business consultant in Kerala and you will find business consulting firms offering everything from GST to strategy. Trainova BS is a business management consultant and business advisor in Kerala for owner-run companies, and our business consultancy services stick to how the company runs.'],
  ['What does a business consultant in Kerala actually do for an MSME?', 'It depends on who you hire. Many firms that use the title handle GST, company registration and compliance. Trainova BS works on how the business runs: who decides what, how work moves between people, what is written down, and how you find out something went wrong before a customer tells you.'],
  ['Do you handle GST, company registration or loans?', 'No. Your chartered accountant is the right person for that, and we would rather say so now. We work on operations, roles, SOPs, training and the systems around them.'],
  ['How is this different from a business coach?', 'A coach usually works on you: your mindset, your goals, your confidence. That can be valuable. We work on the business around you, and what we leave behind is documents and working habits your team uses after we have gone home.'],
  ['What size of business do you work with?', 'Mostly owner-run MSMEs, from small teams where everything goes through one person up to companies where a management layer exists but still calls the owner for decisions. If you have under five people, you may only need the free audit and one or two SOPs.'],
  ['How much does it cost?', 'Our plans are ₹9,999, ₹24,999 and ₹49,999 per month, with custom pricing where those don’t fit. The first step, the business audit, is free. The <a href="/pricing/">pricing page</a> lists what each plan includes.'],
  ['How long before I see a difference?', 'The first relief usually comes from small things: one recurring decision moved off your phone, one role made clear. A whole company changing how it works takes months. Anyone promising that in a week is selling you the seminar.'],
  ['Do you work in Malayalam?', 'Yes. We work in Malayalam and English, and SOPs can be written in whichever language the person doing the job actually reads.'],
  ['Do you only work in Trivandrum?', 'We are based in Trivandrum and work with owners across Kerala. The parts that need to happen in your office happen in your office, and the rest runs on calls and WhatsApp.'],
];

const staffCalls = [
  ['9:12 am', '“Sir, the client is asking for a discount. How much can I give?”'],
  ['10:40 am', '“Sir, the vendor is here. Should I pay now or later?”'],
  ['11:55 am', '“Sir, where is that file from last year?”'],
  ['1:20 pm', '“Sir, can you just check this once before I send?”'],
  ['2:42 pm', '“Sir, oru small doubt.”', true],
];

const home = {
  path: '/', crumb: 'Home', keyword: 'business consultant in Kerala',
  title: 'Business Consultant in Kerala for MSMEs | Trainova BS',
  description: 'Business consultant in Kerala for owner-run MSMEs. We build the SOPs, roles and training that let your team work without calling you. Free business audit.',
  faqs: homeFaqs,
  body: [
    hero({
      stage: true,
      scene: 'Today, 2:42 pm · Your daughter’s school day',
      quote: '“Sir, oru<br>small <span class="hs-mark">doubt.”</span>',
      after: 'Fifth call since morning. You step out of the hall again.',
      h1: 'Business consultant in Kerala for owners whose business stops when they stop.',
      lede: 'Trainova BS builds the SOPs, clear roles and training that let your team decide without calling you. Based in <a href="/business-consultant-trivandrum/">Trivandrum</a>, working with MSMEs across Kerala.',
      note: 'The audit is free. You will know where your business depends on you, whether or not we ever work together.',
      log: {
        title: 'Calls from staff', count: 'Today · 5',
        items: staffCalls,
      },
    }),
    ticker(),
    neck({
      eyebrow: 'What you tell people',
      lines: ['It’s faster if I just do it myself.', 'Nobody here thinks like me.', 'Once this season is over, it will settle down.', 'Good staff don’t stay anyway.', 'I’ll take a proper holiday next year.', 'Ask me before you do anything.'],
      h2: 'Business consulting for owners who have become <span class="neck-mark">the bottleneck.</span>',
      paras: [
        'You started this so you would answer to nobody. Somewhere along the way you built a job with no leave, no fixed hours and your own money at risk, where forty people answer to you and you answer the phone.',
        'You already know this. You probably knew it last year. The trouble is that every fix you can see from where you are standing needs time you don’t have, and depends on people you have stopped trusting with anything important.',
      ],
    }),
    scenes({
      eyebrow: 'A normal week',
      h2: 'The business only works while you’re watching.',
      intro: 'None of this feels like a crisis. That is why it can go on for fifteen years.',
      items: [
        ['Monday, 8:50 am', 'Nothing starts until you arrive.', 'The team is in. The work is there. They are waiting to be told which job comes first, as they did last Monday.'],
        ['Wednesday, 4:15 pm', 'Your best manager resigns.', 'You’re not only losing a person. Your biggest client’s preferences, the vendor’s real price and how month-end actually works are all leaving in one head.'],
        ['Saturday, 10:30 pm', 'The salary sheet.', 'Revenue is up from three years ago. So is the staff count. So why does less of it reach you? You check the numbers again, alone, because who else would you ask?'],
        ['Sunday, 11:00 am, Munnar', 'Your family is at the viewpoint.', 'You are in the car park, because that’s where the signal is. The holiday you promised them is happening. You are just not at it.'],
      ],
      closer: 'At home they’ve stopped commenting on it. That’s the part that should worry you.',
    }),
    film({
      eyebrow: '86 seconds · Malayalam and English',
      lines: ['Your time is for', 'building the business,', 'not <span class="film-x">babysitting<svg viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path pathLength="1" d="M4 24C70 14 130 28 200 19S330 12 396 21"/></svg></span> it.'],
      lead: 'Approval for every small matter. Every email checked. It drains productive hours and shatters a team’s ownership, and the person doing it usually thinks they are being careful.',
      body: 'In this short video, Anas explains what happens when the team comes to the owner for every small decision and every approval: how would they ever learn to decide? The answer is a strong system and process, so your time can go to strategy and core values. Read the full guide on <a href="/guides/stop-micromanaging-your-team/">how to stop micromanaging your team</a>.',
      src: '/assets/video/micromanagement.mp4',
      poster: '/assets/images/micromanagement-poster.webp',
      label: 'Anas of Trainova BS on how micromanagement affects a business',
    }),
    beforeAfter({
      eyebrow: 'What you are actually buying',
      h2: 'One complaint. Two versions of your Tuesday.',
      intro: 'This is the whole idea. Multiply it by every decision that reaches your phone today.',
      chainLabel: 'Today',
      chain: ['A customer complains at the counter', 'Staff member calls the supervisor', 'Supervisor isn’t sure, so calls you', 'You’re in a meeting, so you call back at 3 pm', 'Customer has already posted the review'],
      document: doc({
        id: 'SOP-014', title: 'Handling a customer complaint',
        meta: [['Owner', 'Front desk lead'], ['Applies to', 'All branches'], ['Review', 'Every quarter']],
        steps: ['Log it in the complaint sheet within 10 minutes.', 'Refund or replacement up to ₹2,000: decide yourself. No call needed.', 'Above ₹2,000: the operations manager decides the same day.', 'The owner sees a weekly summary, not each complaint.'],
      }),
    }),
    flow({
      eyebrow: 'How we work',
      h2: 'From chaos to process, in six steps.',
      items: [
        ['Business audit', 'We look at how work really moves today, including what people do when you’re not around.', 'a plain list of where the business depends on you'],
        ['Diagnosis and strategy', 'We find the bottlenecks that cost you most and agree what to fix first. Not everything at once.', 'a priority order you agree with'],
        ['System design', 'We write SOPs, frameworks and role definitions with the people who do the work.', 'documents in your numbers and your language'],
        ['Implementation', 'We set up the processes, delegation limits, CRM and accountability routines, and stay while they bed in.', 'a team working the new way'],
        ['Leadership training', 'Managers learn to decide, and your values get written into how decisions are made.', 'people who stop calling you'],
        ['Tracking and optimisation', 'Internal audits show what is being followed and what isn’t. We refine from there.', 'numbers instead of a feeling'],
      ],
      end: `<h3>Step one is free.</h3><p>See where your business depends on you.</p>${cta()}`,
    }),
    band(`${head('What we do', 'Pick the problem you recognise.')}${cards(consulting)}<h3 style="margin-top:44px">Training for your team</h3>${cards(training)}`, 'rule'),
    stacked({
      eyebrow: 'You’ve probably tried this already',
      h2: 'Here’s what we won’t do to you again.',
      intro: 'Most owners who reach us have paid for help before. They rarely say how it went. They don’t need to.',
      items: [
        ['The seminar you came back from on fire.', 'It was gone by Wednesday. We leave <strong>documents and routines</strong>, because energy doesn’t survive a month-end.'],
        ['The consultant with the sixty-slide report.', 'It’s still in the email. We <strong>implement with your team</strong>, in your office, until it runs.'],
        ['The SOP file nobody has opened.', 'Someone wrote it alone and handed it down. Ours are <strong>written with the people who do the job</strong>, trained, then checked in audits.'],
        ['The manager you hired to fix everything.', 'They left, and it all came back to you. <strong>Systems stay when people leave.</strong> That’s the point of them.'],
        ['The software nobody uses.', 'You’re still paying for it. We fix the <strong>process first and pick the tool second</strong>, and often the tool is smaller than you were sold.'],
      ],
    }),
    afterState({
      h2: 'The first Sunday it’s quiet.',
      title: 'Calls from staff',
      calls: staffCalls,
      lines: ['You check your phone to see if it’s broken.', 'A problem got solved and you heard about it on Friday.', 'Your manager says “I decided” instead of “what should I do?”', 'Someone resigns, and you’re annoyed instead of scared.', 'At the viewpoint in Munnar, you are at the viewpoint.'],
      after: cta('Start with the free audit'),
    }),
    proofSection(),
    band(`${head('Plans', 'What it costs, in plain numbers.', 'Compare it with what you pay a manager who still has to call you. Every plan starts with the free business audit.')}${plans()}<p style="margin-top:20px"><a href="/pricing/">See what each plan includes and how to choose</a></p>`, 'rule'),
    person({
      eyebrow: 'Who you’ll talk to',
      lines: ['A person,', 'not a <span class="film-x">pitch team<svg viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path pathLength="1" d="M4 24C70 14 130 28 200 19S330 12 396 21"/></svg></span>.'],
      photo: 'anas-speaking',
      alt: 'Anas of Trainova BS explaining a point during a working session, with a presentation screen behind',
      caption: 'Anas, in a working session with founders',
      label: 'Between you and the person',
      layers: ['Call centre', 'Sales executive', 'Pitch deck', 'Account manager'],
      name: 'Anas.',
      paras: [
        'Trainova BS is built around one conviction Anas repeats often: an owner’s time should go to strategy and values, not babysitting. Our line for it is “Sculpting entrepreneurial chaos into scalable systems.”',
        'When you message us, you’re not entering a call centre’s funnel. You’re starting a conversation about your business with the person who will be looking at it.',
      ],
      links: [['/about/', 'More about Trainova BS'], ['/gallery/', 'See the photos'], ['/guides/', 'Read our free guides']],
    }),
    notFor({
      intro: 'Saying this saves us both a meeting.',
      items: ['You want GST, company registration or a loan. Go to your CA.', 'You want motivation. Plenty of people do this well, and we’re not one of them.', 'You want someone to write documents and leave, with nothing changing.', 'You are not willing to let anyone else decide anything, ever. The system can’t fix that part.'],
    }),
    faq(homeFaqs),
    leadForm({ from: 'Home page', proof: false }),
  ].join(''),
};

const auditFaqs = [
  ['Is the business audit really free?', 'Yes. There’s no charge and no obligation to buy anything afterwards. It’s also part of every plan, because we can’t fix what we haven’t looked at.'],
  ['What happens during a free business audit?', 'We talk through how work moves in your business: who decides what, what’s written down, where things get stuck and what reaches your phone. You’ll come away knowing where the business depends on you.'],
  ['Is this a financial or statutory audit?', 'No. This is not a tax audit or a statutory audit under the Companies Act, and we aren’t chartered accountants. It’s an operational audit of how your business runs, not an internal audit for compliance. Your CA still handles the books.'],
  ['Do I need to prepare anything?', 'No. Just come ready to be honest about your week. If you have an org chart or a sales report, bring it. If you don’t, that tells us something too. <a href="/contact/">Contact us</a> if you have a question first.'],
  ['Will my staff know?', 'Only if you want them to. The first conversation is with you alone.'],
  ['Will you try to sell me something at the end?', 'We’ll tell you what we would do and what it costs, if you ask. If your fix is small enough to do yourself, we’ll say that too.'],
];
const audit = {
  path: '/free-business-audit/', crumb: 'Free business audit', keyword: 'free business audit', service: 'Operational business audit',
  title: 'Free Business Audit for MSMEs in Kerala | Trainova BS',
  description: 'A free business audit for Kerala MSMEs. Find out where your business depends on you, what is costing you most and what to fix first. No obligation.',
  faqs: auditFaqs,
  body: [
    hero({
      scene: 'Family function, Sunday',
      quote: '“How’s business?”<br>“Busy.”',
      after: 'You say it every time. It’s true, and it isn’t an answer.',
      h1: 'A free business audit that tells you where your business depends on you.',
      lede: 'One honest conversation about how your business actually runs: who decides, what’s written down, where work gets stuck and what keeps reaching your phone. No charge, no obligation.',
      ctaLabel: 'Book my free audit', ctaHref: '#talk',
      side: fig('anas-listening', 'Anas of Trainova BS listening during a working session', ''),
    }),
    band(`<div class="two"><div>${head('A small business audit checklist', 'Six questions most owners can’t answer quickly.')}</div><ul class="ticks">
    <li>If you disappeared for two weeks, what would stop first?</li>
    <li>Which decisions reach you that shouldn’t?</li>
    <li>What exists only in one person’s head, and what if they resign tomorrow?</li>
    <li>Who owns each number in the business, by name?</li>
    <li>Where does work sit waiting, and for whom?</li>
    <li>What are you paying for that nobody uses?</li></ul></div>`, 'rule'),
    wounds({
      eyebrow: 'What you may be worried about',
      h2: 'What “free” usually means, and what it means here.',
      items: [
        ['It’s a sales call with a nicer name.', 'You get the findings <strong>whether you hire us or not</strong>. If asked, we’ll also tell you what you could fix alone.'],
        ['They will judge how I’ve been running things.', 'Every business that grew on one person’s effort looks like this. <strong>It’s what success looks like at this stage.</strong> It just stops working at the next one.'],
        ['My numbers aren’t ready.', 'They don’t need to be. <strong>That’s often the first finding,</strong> and it’s a useful one.'],
        ['My details will end up with a sales team.', 'Your details stay with us. We don’t sell or pass them on. See our <a href="/privacy-policy/">privacy policy</a>.'],
      ],
    }),
    steps({
      eyebrow: 'What happens next',
      h2: 'Three steps, then it’s your decision.',
      items: [
        ['You message us', 'Tell us your business, your team size and what’s bothering you. WhatsApp is fine.'],
        ['We talk', 'In your office if you’re close by, or on a call. In Malayalam or English.'],
        ['You get a straight answer', 'Where the business depends on you, what to fix first, and whether you need us at all.'],
      ],
      after: cta('Book my free audit', '#talk'),
    }),
    faq(auditFaqs),
    related('Keep reading', ['/guides/business-cant-run-without-owner/', '/sop-consulting/', '/pricing/']),
    leadForm({ h2: 'Book your free business audit.', from: 'Free audit page' }),
  ].join(''),
};

const priceFaqs = [
  ['What are business consultant fees in India and Kerala?', 'Trainova BS plans are ₹9,999, ₹24,999 and ₹49,999 per month, with custom pricing for what doesn’t fit. Published guides on Indian consulting fees commonly put monthly retainers around ₹25,000 to ₹1.5 lakh, and coaching programmes can run into several lakhs a year, so compare what is included as well as the number.'],
  ['How much does a business coach cost in India?', 'Business coach fees in India vary widely. Guides on the Indian market quote roughly ₹5,000 to ₹25,000 per session and ₹20,000 to ₹2 lakh a month for one-to-one coaching, and some mastermind programmes publish fees around ₹15 lakh a year. Ask what you will have in your hands at the end.'],
  ['Which Trainova BS plan should I start with?', 'Under about ten people, with everything running through you: Basic. A growing team with no written process: Silver, which is where custom SOP documentation starts. A larger business ready for a full change, including KRAs and process automation: Platinum. The free audit will tell you which fits.'],
  ['Why do you publish your prices?', 'Because you’d ask anyway, and most firms make you sit through a meeting first. The numbers aren’t the whole story, but you should be able to rule us in or out before you talk to anyone.'],
  ['What is “custom pricing”?', 'If your business has several branches or companies, needs training for large batches, or needs only one piece of work like a set of SOPs, we’ll quote for that instead of fitting you into a plan.'],
  ['Is training included in the plans?', 'Leadership and team development is included from Silver upwards. Programmes such as telecalling training or the fresh graduate programme are quoted separately by batch.'],
  ['Does the price include GST?', 'Ask us for the exact tax treatment when we quote. Consulting fees in India normally attract 18% GST, and a GST-registered business can usually claim input tax credit. Check with your CA.'],
];
const pricing = {
  path: '/pricing/', crumb: 'Pricing', keyword: 'business consultant fees', offers: true,
  title: 'Business Consultant Fees in Kerala: Plans | Trainova BS',
  description: 'Business consultant fees in plain numbers: Trainova BS plans at ₹9,999, ₹24,999 and ₹49,999 a month, what each includes, and how to choose. Audit is free.',
  faqs: priceFaqs,
  body: [
    hero({
      scene: 'The question you’d ask first',
      quote: '“Okay. But what will this cost me?”',
      md: true,
      after: 'A fair question. You shouldn’t have to book a meeting to get an answer.',
      h1: 'Business consultant fees at Trainova BS, in plain numbers.',
      lede: 'Three monthly plans and a free audit before any of them. Below is what each one includes, who it suits and when you shouldn’t buy it.',
      ctaLabel: 'Start with the free audit',
    }),
    band(`${head('Plans', 'Three ways to start.')}${plans()}`, ''),
    band(`<div class="two"><div>${head('How to think about the number', 'What the alternative costs.')}</div><div class="prose">
    <p>Published guides on the Indian market put <a href="https://prodifyteam.in/business-consultant-cost-india/" rel="noopener">consultant retainers from about ₹25,000 to ₹1.5 lakh a month</a>, and <a href="https://www.pkcindia.com/blog/management-consulting-for-small-businesses-in-india/" rel="noopener">SOP or process audit projects from ₹50,000 to ₹5 lakh</a>. At the other end, a well-known <a href="https://rajivtalreja.com/serve-coaching" rel="noopener">mastermind programme lists ₹15 lakh</a> for twelve months.</p>
    <p>That’s the market for management consultant fees and coaching. The more useful comparison is closer to home:</p>
    <ul class="dots"><li>What a manager costs you who still has to call you.</li><li>What it cost the last time someone left with everything in their head.</li><li>What your own hours are worth, spent on things a clear rule could settle.</li></ul>
    <p>If none of those numbers worry you, you probably don’t need us yet.</p></div></div>`, 'sheetband'),
    wounds({
      eyebrow: 'Before you decide',
      h2: 'Ask this of anyone you’re comparing us with.',
      intro: 'Ask us too.',
      items: [
        ['What will I physically have at the end?', 'From us: <strong>written SOPs, role definitions, KRAs and working routines</strong>, depending on the plan. If the answer is “clarity”, keep asking.'],
        ['Who does the work?', '<strong>The person you speak to is involved in the work.</strong> Ask any firm whether your account goes to a junior after the sale.'],
        ['What if my team doesn’t follow it?', '<strong>Internal audits check what is being followed,</strong> from the Silver plan upwards. A document nobody checks is decoration.'],
        ['Do you do GST and registration as well?', '<strong>No.</strong> Many “business consultants” in Kerala are compliance firms. That’s useful work, and it’s a different job from ours.'],
      ],
      after: cta('Book my free audit'),
    }),
    faq(priceFaqs),
    related('Related', ['/free-business-audit/', '/sop-consulting/', '/corporate-training/']),
    leadForm({ h2: 'Not sure which plan fits? Ask.', from: 'Pricing page' }),
  ].join(''),
};

const about = {
  path: '/about/', crumb: 'About', keyword: 'Trainova BS', person: true,
  title: 'About Trainova BS: Business Systems, Kerala | Anas NS',
  description: 'About Trainova BS, a Trivandrum firm helping Kerala MSMEs build systems, SOPs and leadership. Meet Muhammad Anas NS and see how we think about your business.',
  body: [
    plainHero({ eyebrow: 'About', h1: 'About Trainova BS', lede: 'We turn the way a business runs from something in the owner’s head into something the team can follow. Our line for it: sculpting entrepreneurial chaos into scalable systems.' }),
    band(`<div class="two center"><div class="prose"><span class="eyebrow mono">Why we exist</span><h2>Ambition isn’t the problem. Execution is.</h2><p>Most owners we meet are capable people who built something real on their own effort. What stops them isn’t a lack of ideas. It’s that the business grew faster than the way it’s run, and everything still passes through one person.</p><p>Our mission is to transform startups and growing businesses by turning chaotic workflows into structured, documented and automated systems. We do this through consulting, training and values-based leadership.</p><p>Our vision is to bridge the gap between ambition and execution, so entrepreneurs build businesses that last and don’t need them in every room.</p></div>${fig('anas-speaking', 'Anas of Trainova BS speaking in a boardroom, in front of a screen reading The Trust Advantage', 'Anas leading “The Trust Advantage”, a working session on how reputation becomes revenue, for founders, professionals and owner-operators, at a podcast studio launch in Kerala.')}</div>`),
    band(`<div class="two center">${fig('anas-boardroom', 'Anas of Trainova BS presenting in a boardroom beside a laptop and conference table', '')}<div class="prose"><span class="eyebrow mono">Who you’ll talk to</span><h2>Muhammad Anas NS</h2><p>Anas is the person you’ll see in our videos and the person you’ll talk to, working with owners in Malayalam and English on the unglamorous parts of running a business: who decides what, what gets written down and how a team learns to take ownership.</p><p>The view is direct: as CEO or MD, your time should go to strategic building and core values, not babysitting. Everything we do comes back to that sentence.</p><p><a href="${site.person.linkedin}" rel="noopener">Anas on LinkedIn</a></p></div></div>`, 'sheetband'),
    band(`${head('What we believe', 'Four things that shape the work.')}<ol class="steps c2" style="margin-top:28px"><li><h3>Values come first</h3><p>A system without values is just rules people get around. We write down what the business stands for, then build processes that follow from it. On our brochure: “We shape values into scalable systems and SOPs.”</p></li><li><h3>The people doing the job know the job</h3><p>SOPs written in a head office get ignored. We write them with the person who does the work, then test them on someone who doesn’t.</p></li><li><h3>Simple beats complete</h3><p>A one-page process people follow is worth more than fifty pages they don’t. We start with what hurts most and stop when it’s enough.</p></li><li><h3>Honest is cheaper</h3><p>If you need a CA, or a small fix you can do yourself, or you’re not ready, we’ll say so. It’s a small state, and word gets around.</p></li></ol>`, 'rule'),
    related('See how this works in practice', ['/free-business-audit/', '/sop-consulting/', '/corporate-training/']),
    leadForm({ h2: 'Talk to Anas.', from: 'About page' }),
  ].join(''),
};

const gallery = {
  path: '/gallery/', crumb: 'Gallery', keyword: 'Trainova BS',
  title: 'Gallery: Trainova BS Sessions and Events in Kerala',
  description: 'Photos of Trainova BS at work: working sessions with founders and owner-operators in Kerala, and time with the wider business community at events.',
  body: [
    plainHero({ eyebrow: 'Gallery', h1: 'Trainova BS in the room', lede: 'Real photographs, taken on phones, from working sessions and business events. No stock images of people shaking hands.' }),
    band(`${head('', 'The Trust Advantage, Kerala')}<p class="prose">A working session on personal branding and how reputation becomes revenue, for founders, professionals and owner-operators, held at a podcast studio launch in Kerala.</p><div class="gal">
    ${fig('anas-boardroom', 'Anas presenting in a boardroom beside a large screen', 'Opening the session.', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-speaking', 'Anas speaking with an open hand gesture, side view', 'Making the case for reputation as a business asset.', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-session-wide', 'Wide view of the boardroom with Anas standing at the far end of the table', '', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-trust-advantage', 'Anas standing beside a screen titled The Trust Advantage', 'The session title on screen.', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-gesture', 'Close view of Anas explaining a point', '', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-listening', 'Anas standing beside a screen, listening', 'Listening matters more than presenting.', '', '(max-width:860px) 100vw, 33vw')}
    </div>`),
    band(`${head('', 'Out with the business community')}<p class="prose">Most of what we learn about running a business in Kerala and the Gulf, we learn from people who are running one.</p><div class="gal">
    ${fig('industry-meet-group', 'A large group of business professionals seated and standing together in a hotel ballroom', 'A full room at an industry meet.', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-event-colleague', 'Anas taking a selfie with a colleague at an event', '', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-dubai-roadshow', 'Anas taking a selfie with a large group in front of a screen reading Road Show Dubai 2025', 'At the Dinstar Road Show, Dubai, 2025.', '', '(max-width:860px) 100vw, 33vw')}
    ${fig('anas-dubai-colleagues', 'Anas with two colleagues at the Dubai road show', 'Dubai, 2025.', '', '(max-width:860px) 100vw, 33vw')}
    </div>`, 'sheetband'),
    leadForm({ h2: 'Next time, it could be your team in the room.', from: 'Gallery page' }),
  ].join(''),
};

const contact = {
  path: '/contact/', crumb: 'Contact', keyword: 'Contact Trainova BS',
  title: 'Contact Trainova BS, Trivandrum | Business Consultant',
  description: 'Contact Trainova BS in Trivandrum, Kerala. Call or WhatsApp +91 90612 66629, email info@trainovaglobal.com, or send us a note about your business.',
  body: [
    plainHero({ eyebrow: 'Contact', h1: 'Contact Trainova BS', lede: 'Tell us what’s going on in your business. You’ll get a reply from a person, in Malayalam or English.', extra: `<div class="cta"><a class="btn btn-go" href="${waLink}" rel="noopener">WhatsApp us</a><a class="btn btn-line" href="tel:${site.tel}">Call ${site.telText}</a></div>` }),
    band(`<div class="cards"><div class="card"><b>Phone and WhatsApp</b><span><a href="tel:${site.tel}">${site.telText}</a></span></div><div class="card"><b>Email</b><span><a href="mailto:${site.email}">${site.email}</a></span></div><div class="card"><b>Office</b><span>${site.legal}<br>${site.street}<br>${site.city}, ${site.region} ${site.pin}, ${site.country}<br><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}" rel="noopener">Open in Google Maps</a></span></div></div>`, 'tight'),
    leadForm({ h2: 'Or send us a note from here.', from: 'Contact page', proof: false }),
  ].join(''),
};

const privacy = {
  path: '/privacy-policy/', crumb: 'Privacy policy', keyword: 'privacy policy',
  title: 'Privacy Policy | Trainova BS, Trivandrum, Kerala',
  description: 'This privacy policy explains how Trainova BS handles the details you share through this website, WhatsApp, phone and email, and how to delete them.',
  body: [
    plainHero({ eyebrow: 'Legal', h1: 'Privacy policy', lede: 'Short version: we use your details to reply to you, and we don’t sell them.' }),
    band(`<div class="prose"><h2>What we collect</h2><p>This website has no login. When you fill in our form, your browser opens WhatsApp with your message ready to send, and nothing is stored on this website. We receive only what you send us by WhatsApp, phone or email: typically your name, business, team size, phone number and what you tell us about your business.</p><h2>What we use it for</h2><p>To reply to you, to carry out the audit or work you ask for, and to keep a record of our conversations. What you tell us about your business stays confidential.</p><h2>Who sees it</h2><p>Our team, and the services we use to communicate, such as WhatsApp and email providers. We don’t sell your details or pass them to anyone for their marketing.</p><h2>Website analytics</h2><p>We may use Google Analytics to see how people use this website, such as which pages get read. It uses cookies and doesn’t identify you to us by name. You can block it in your browser settings.</p><h2>Your choices</h2><p>To see, correct or delete what we hold about you, email <a href="mailto:${site.email}">${site.email}</a> or call <a href="tel:${site.tel}">${site.telText}</a>.</p><h2>Who we are</h2><p>${site.legal}, ${address}.</p></div>`),
  ].join(''),
};

const guidesHub = {
  path: '/guides/', crumb: 'Guides', keyword: 'guides',
  title: 'Free Business Guides for Kerala MSME Owners | Trainova BS',
  description: 'Free, practical guides for owners: writing SOPs, KRA examples, how to stop micromanaging, scaling a small business and getting your business to run without you.',
  body: [
    plainHero({ eyebrow: 'Free guides', h1: 'Free guides for business owners', lede: 'What we would tell you on a call, written down. Use them yourself. If you get stuck, we’re a message away.' }),
    band(cards(guides, 'Read the guide')),
    leadForm({ h2: 'Would you rather just talk it through?', from: 'Guides page' }),
  ].join(''),
};

const notFound = {
  path: '/404', file: '404.html', crumb: 'Page not found', keyword: 'page', noindex: true,
  title: 'Page Not Found | Trainova BS',
  description: 'This page has moved or never existed. Here are the pages most business owners are looking for on the Trainova BS website.',
  body: [
    plainHero({ eyebrow: '404', h1: 'That page isn’t here', lede: 'It may have moved when we rebuilt this site. These are what most people come for.' }),
    band(cards([['/', 'Home', 'Business consulting for Kerala MSMEs'], ['/free-business-audit/', 'Free business audit', 'See where your business depends on you'], ['/corporate-training/', 'Corporate training', 'Every programme in one place']])),
  ].join(''),
};

export default [home, audit, pricing, about, gallery, contact, privacy, guidesHub, notFound];
