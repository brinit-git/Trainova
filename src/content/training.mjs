import { hero as baseHero, band, head, said, scenes, doc, steps, wounds, notFor, faq, leadForm, cta, related, cards, training } from '../ui.mjs';

const hero = (o) => baseHero({ ctaLabel: 'Ask about training for my team', ctaHref: '#talk', ...o });
const lf = (o) => leadForm({ sub: 'Tell us your team size and what should change. It goes straight to our WhatsApp, not a call centre.', ask: 'I’d like to know more about your training.', ...o });

const parent = ['Corporate training', '/corporate-training/'];
const trainNeeds = ['Our people need training', 'Previous training didn’t stick', 'Managers can’t lead', 'New hires take too long to settle', 'We need it in Malayalam', 'I want a quote for a batch'];

// ---------- Hub
const hubFaqs = [
  ['What corporate training programmes do you offer in Kerala?', 'Leadership and core values, telecalling, our Fresh Graduate to Professional (FG2P) programme, SME training, process training, smart office and administration, and digital marketing for entrepreneurs.'],
  ['Do you provide corporate training in Trivandrum and Kochi?', 'Yes. We’re a corporate trainer in Kerala, based in Trivandrum, and we deliver corporate training in Kochi, Calicut and elsewhere at your premises. We can also arrange a training hall if your office isn’t suitable.'],
  ['How much does corporate training cost?', 'It depends on the programme, batch size, duration and location, so we quote per batch once we know what you need. Tell us your team size and what you want to change, and you’ll get a figure.'],
  ['Is the training in Malayalam or English?', 'Either, or a mix. We use whatever your team actually works in. A telecaller who sells in Malayalam should practise in Malayalam.'],
  ['How is your training different from a soft skills class?', 'We start from your business: your scripts, your SOPs, your customers and your real problems. We also tell you up front what should change at work and how we’ll check it, instead of just handing out certificates.'],
  ['Do you offer soft skills training in Trivandrum?', 'Yes, but as part of real work. Communication, customer handling, sales training and teamwork are built into programmes such as telecalling, FG2P and leadership, rather than taught as a separate subject.'],
];
const hub = {
  path: '/corporate-training/', crumb: 'Corporate training', keyword: 'corporate training in Kerala', service: 'Corporate training',
  title: 'Corporate Training in Kerala and Trivandrum | Trainova BS',
  description: 'Corporate training in Kerala for MSMEs: leadership, telecalling, fresh graduates, process and office skills, built around your real work.',
  faqs: hubFaqs,
  body: [
    hero({
      scene: 'Monday after the training',
      quote: '“They attended. Nothing changed.”',
      after: 'Two days. A nice hall. Everyone enjoyed it. The certificates are on the wall.',
      h1: 'Corporate training in Kerala that shows up on Monday morning.',
      lede: 'Training usually fails for a simple reason: people go back to the same desk, the same boss and the same way of working. We train your team on your actual work, and connect it to the systems they return to.',
    }),
    band(`${head('Programmes', 'What we train.')}${cards(training.slice(1), 'See the programme')}`),
    said({
      eyebrow: 'What you’ve heard',
      lines: ['That was very motivating, sir.', 'Who’ll do the work if everyone’s in training?', 'I’m not sure what we got for that money.', 'They’re just going to leave anyway.'],
      h2: 'What you’re really worried about before you pay for training.',
      paras: [
        'You’re worried about spending money on a feel-good day, and you’re worried you’ll train someone and they’ll leave. Both are fair.',
        'The first one we can deal with. Before we train anyone, we agree what should be different at work afterwards, and how we’ll both know. If we can’t name it, we shouldn’t run the training.',
        'As for the second: not training them and having them stay is worse. And when your training is tied to written SOPs, the knowledge stays even when the person doesn’t.',
      ],
    }),
    steps({
      eyebrow: 'How a programme runs',
      h2: 'Why this sticks when others don’t.',
      items: [
        ['Find the real problem', 'Sometimes it’s skills. Often it’s a broken process no training could fix, and we’ll tell you.', 'an honest answer'],
        ['Agree what should change', 'Specific behaviours and numbers, agreed with you before anyone sits down.', 'a before-and-after measure'],
        ['Use your real work', 'Your scripts, customers, forms and common mistakes. No imported case studies.', 'material your team recognises'],
        ['Train in small doses', 'Practice over talk, in the language they use at work.', 'people who’ve actually done it'],
        ['Brief their manager', 'Without the manager’s support, it’s gone by Friday.', 'managers who reinforce it'],
        ['Check afterwards', 'We come back to the measure we agreed.', 'proof, or a fix'],
      ],
      after: cta('Ask about training for my team', '#talk'),
    }),
    faq(hubFaqs, 'Questions about corporate training'),
    lf({ h2: 'What should be different after the training?', needs: trainNeeds, from: 'Corporate training page' }),
  ].join(''),
};

// ---------- Leadership
const leadFaqs = [
  ['What does a leadership training programme cover?', 'Our leadership development work covers decision making, delegation, giving feedback, running short reviews, handling conflict and acting from the company’s core values, all using situations from your business. The goal is managers who can run their area without calling the owner.'],
  ['How much does leadership training cost?', 'We quote per batch, based on team size, duration and location. Leadership and team development is included in our Silver and Platinum plans, or you can book it on its own.'],
  ['Who should attend leadership training?', 'Team leads, supervisors and managers, including the ones recently promoted from a technical or sales role. If possible, the owner should sit in for part of it, because managers can’t act on what the owner won’t allow.'],
  ['Our best salesperson became a bad manager. Can training fix that?', 'Often, yes. Nobody taught them how to manage. They’re still doing the job they were good at and resenting everything else. Sometimes, though, the honest answer is that they were happier selling, and we’ll say that too.'],
  ['What are core values, and why do they matter?', 'They’re the rules your business lives by when nobody’s checking, such as how you treat a customer who’s wrong. If they’re written down and used, a manager can make a decision you’d agree with, without asking you.'],
  ['Is this available for small companies?', 'Yes, including leadership training in Kochi, Calicut and Trivandrum. A company with three supervisors needs this as much as one with thirty. It’s often where the owner first gets time back.'],
];
const leadership = {
  path: '/leadership-training/', crumb: 'Leadership training', parent, keyword: 'leadership training in Kerala', service: 'Leadership training',
  title: 'Leadership Training in Kerala for Managers | Trainova BS',
  description: 'Leadership training in Kerala for managers and supervisors who still call the owner for everything. Decision making, delegation, feedback and core values.',
  faqs: leadFaqs,
  body: [
    hero({
      scene: 'You, reading the appraisal form',
      quote: '“He’s my manager. Why is he still calling me?”',
      md: true,
      after: 'You promoted your best person. You gave them the title and the salary. Nobody taught them the job.',
      h1: 'Leadership training in Kerala for managers who still call the owner.',
      lede: 'Our Transformative Leadership and Core Values programme teaches your managers to decide, delegate and hold people to account. Using your real situations, so you get your time back and they get to grow.',
    }),
    said({
      lines: ['I’ll just do it myself, it’s quicker.', 'They won’t listen to me.', 'Let me ask sir and get back to you.', 'I didn’t want to upset anyone.'],
      h2: 'What you hear from your manager is what they learned from you.',
      paras: [
        'This may sting. If your manager brings every decision to you, they may have learned that it’s safest. Maybe they decided something once, you changed it in front of everyone, and they took the lesson.',
        'Most managers in small companies got promoted for being good at something else. They’re excellent salespeople or technicians, with no idea how to tell a colleague of ten years that their work isn’t good enough. So they avoid it, or they do the job themselves, or they call you.',
        '<a href="https://www.gallup.com/workplace/236570/employees-lot-managers.aspx" rel="noopener">Gallup’s research</a> found that managers account for at least 70% of the variance in employee engagement scores. It’s one of the most expensive jobs in your company, and probably the only one with no training.',
      ],
    }),
    steps({
      eyebrow: 'What the programme covers',
      h2: 'The skills nobody taught them.',
      items: [
        ['Deciding', 'What’s theirs to decide, how to do it, and what to do when they get it wrong.'],
        ['Delegating', 'Handing over work and authority, instead of copying the owner’s habit of checking everything.'],
        ['Hard conversations', 'Telling someone the truth about their work without damaging the relationship.'],
        ['Running reviews', 'Short, regular conversations about a few numbers, in place of the yearly dread.'],
        ['Core values', 'Writing down what your business stands for, then using it to make decisions.'],
        ['Managing up', 'How to bring you a recommendation instead of a problem. You’ll notice this one first.'],
      ],
      after: cta('Ask about a batch', '#talk'),
    }),
    wounds({
      h2: 'Why we ask the owner to be involved.',
      items: [
        ['Managers come back fired up, and the owner overrules them.', 'They’ll never try again. We <strong>work with you on what you’ll let go of,</strong> before the first session.'],
        ['There’s nothing clear to decide against.', 'We connect the training to <strong>written <a href="/kra-consulting/">roles and limits,</a></strong> so people know what they can decide.'],
      ],
    }),
    faq(leadFaqs, 'Questions about leadership training'),
    related('Works well with', ['/kra-consulting/', '/guides/stop-micromanaging-your-team/', '/corporate-training/']),
    lf({ h2: 'Who needs to stop calling you?', needs: ['Managers bring me every decision', 'I promoted the wrong person, maybe', 'Supervisors avoid hard conversations', 'Our values aren’t written down', 'Good staff leave because of managers', 'I want a quote for a batch'], from: 'Leadership training page' }),
  ].join(''),
};

// ---------- Telecalling
const teleFaqs = [
  ['Do you offer telecalling training in Malayalam?', 'Yes. Your callers practise in the language they’ll actually sell in, whether that’s Malayalam, English or both. Most callers don’t need better English. They need better conversations.'],
  ['Are you a telecaller training institute I can join for a job?', 'This programme trains teams for employers. If you’re looking for a certificate telecalling course as an individual, ASAP Kerala lists a government-supported tele-caller course. If you’re a fresh graduate, see our <a href="/fresh-graduate-training/">Fresh Graduate to Professional programme</a>.'],
  ['What does telecalling training cover?', 'Opening a call, understanding what the person needs, handling “not now” and price objections, following up without annoying people, closing the next step and keeping CRM records. We use your real product, your leads and your best callers’ recordings where possible.'],
  ['How do I measure if telecalling training worked?', 'Agree the numbers first: connect rate, conversations per day, leads converted to the next step, follow-up completion. Measure two weeks before and four weeks after. If they haven’t moved, we want to know why as much as you do.'],
  ['We get lots of leads but few sales. Is it the callers?', 'Maybe. It can also be poor lead quality, slow follow-up or no process. We check before we train. No script can fix a lead that’s called back nine days late.'],
  ['What do you use to track calls?', 'We’ll work with what you have, even a spreadsheet at first. If you need a CRM, we can help you set up something simple. See <a href="/business-automation/">business automation</a>.'],
];
const telecalling = {
  path: '/telecalling-training/', crumb: 'Telecalling training', parent, keyword: 'telecalling training', service: 'Telecalling training',
  title: 'Telecalling Training in Kerala, in Malayalam | Trainova BS',
  description: 'Telecalling training in Kerala for sales teams, in Malayalam and English. Scripts, objection handling and follow-up, so your paid leads turn into conversations.',
  faqs: teleFaqs,
  body: [
    hero({
      scene: 'Lead no. 37 today · Paid for by you',
      quote: '“Ippo venda, sir.”',
      after: 'Your caller says “okay sir, thank you” and hangs up in eleven seconds. You paid ₹300 for that lead.',
      h1: 'Telecalling training in Kerala for teams who give up at the first “no”.',
      lede: 'We train your telecallers on your real product, your real leads and your real objections, in Malayalam and English. So the money you spend on ads stops dying on the first call.',
      side: doc({
        id: 'CALL-02', title: 'When they say “ippo venda”',
        meta: [['Goal', 'Find the reason, not the sale']],
        steps: ['Don’t argue. “Sheri, no problem.”', 'Ask one real question: “Is it the timing, or is it not useful for you right now?”', 'Timing: fix a date and call back on that date.', 'Not useful: thank them, log the reason, close it.'],
        note: 'Sample for illustration. Yours is built from your product and your calls.',
      }),
    }),
    said({
      lines: ['Sir, they’re all not interested.', 'The leads are bad.', 'They told me to call later.', 'I called, no response.'],
      h2: 'You can’t tell if it’s the leads or the callers. Neither can they.',
      paras: [
        'You spend on ads. The leads come in. A few convert. Your telecallers say the leads are poor, and your marketing person says the leads are fine and the callers are the problem. You have no way of knowing who’s right, and you’re paying for both.',
        'Meanwhile, there’s a person on your team making eighty calls a day with one script, a target and no feedback, hearing “no” until they stop listening. A good caller can do this for a while. Most get tired and quit around month four, and you start again.',
        'Telecalling is a skill. People can learn it, and it isn’t the same as being talkative.',
      ],
    }),
    steps({
      eyebrow: 'What the programme covers',
      h2: 'Everything from “hello” to the next step.',
      items: [
        ['The first ten seconds', 'Why they should stay on the call. Who you are, why you’re calling, and a real reason to listen.'],
        ['Asking, not reciting', 'Finding out what the person actually needs before saying a word about the product.'],
        ['Handling “no”', '“Ippo venda”, “too costly”, “send details”, “I’ll ask my husband”. What each really means and what to say.'],
        ['Follow-up that works', 'When to call again, what to say differently, and when to stop.'],
        ['Keeping records', 'What to log so the next caller, or you, can see what happened.'],
        ['Staying steady', 'How to take rejection for eight hours and go home okay. It’s the reason most people leave.'],
      ],
      after: cta('Ask about a batch', '#talk'),
    }),
    wounds({
      eyebrow: 'Why we do it this way',
      h2: 'What a generic class gets wrong.',
      items: [
        ['A trainer reads out a standard script.', 'We build it from <strong>your product and your best callers’ real conversations.</strong>'],
        ['It’s taught in formal English.', 'Your customers talk in Malayalam and Manglish. So <strong>that’s how we practise.</strong>'],
        ['Nothing’s measured.', 'We take <strong>connect rates and conversions before and after,</strong> so you’ll know what you paid for.'],
      ],
    }),
    faq(teleFaqs, 'Questions about telecalling training'),
    related('Related', ['/guides/how-to-be-a-good-telecaller/', '/business-automation/', '/sop-consulting/'], 'Read'),
    lf({ h2: 'How are your calls going?', needs: ['Lots of leads, few sales', 'Callers give up too quickly', 'High telecaller turnover', 'No script or process', 'I can’t see what’s happening on calls', 'I want a quote for a batch'], from: 'Telecalling page' }),
  ].join(''),
};

// ---------- FG2P
const fgFaqs = [
  ['What is the Fresh Graduate to Professional (FG2P) programme?', 'FG2P is Trainova BS’s fresh graduate training program, and our form of employability training, for bridging the gap between college and the first job: workplace communication, email and documents, professional behaviour, working with a manager and handling real tasks. It can be run for an employer’s new hires or for groups of graduates.'],
  ['Is this a finishing school?', 'In spirit, yes. A typical finishing school in Trivandrum, or any finishing school in Kerala, usually teaches technical and soft skills for placement. FG2P is built from what employers actually complain about in the first ninety days.'],
  ['Do you guarantee placement?', 'No. Be careful of anyone who does. We can help someone become more employable. Getting hired depends on many things, including the market and the candidate.'],
  ['We’re a company. Can you train our new hires?', 'Yes, and it’s often the best use of it. We can run it as an induction using your own processes, so people are useful sooner and you lose fewer in the first few months.'],
  ['Who is it for?', 'Recent graduates and final-year students from any stream, and companies hiring them. Commerce and arts graduates often benefit most, as they get the least workplace preparation in college.'],
  ['Is it in English?', 'Mostly, since that’s what workplaces expect for email and documents, with Malayalam support where people need it. Nobody should be too embarrassed to ask a question.'],
];
const fresher = {
  path: '/fresh-graduate-training/', crumb: 'Fresh Graduate to Professional', parent, keyword: 'fresh graduate training', service: 'Fresh graduate training programme',
  title: 'Fresh Graduate Training and Finishing School | Trainova BS',
  description: 'Fresh graduate training in Kerala: FG2P, our finishing school programme in Trivandrum, teaches the workplace skills employers actually complain about.',
  faqs: fgFaqs,
  body: [
    hero({
      scene: 'Day three of the new hire',
      quote: '“Sir, what should I do now?”',
      after: 'First class degree. Polite. Willing. Cannot write an email to a client without you checking it.',
      h1: 'Fresh graduate training that takes someone from college to useful.',
      lede: 'Fresh Graduate to Professional (FG2P) is our programme for the gap nobody prepares people for: how to communicate, take responsibility and handle real work. For employers and for graduates.',
    }),
    scenes({
      eyebrow: 'Both sides of the first job',
      h2: 'Everybody’s disappointed. Nobody’s said it out loud.',
      items: [
        ['If you’re the employer', 'You hired potential. You’re paying for a learner.', 'For months, somebody senior has to stop their work to check theirs. And by the time they’re useful, they’re looking elsewhere.'],
        ['If you’re the graduate', 'Nobody told you how any of this works.', 'You studied for years. Nobody taught you what to do when your boss is annoyed, how to say you don’t understand, or how to write an email.'],
        ['If you’re the parent', 'You paid for the degree.', 'You thought that was the hard part. Now you’re watching your child apply, wait and start to lose confidence.'],
        ['In the numbers', 'Just over half are ready.', 'The <a href="https://news.careers360.com/india-skills-report-2026-employability-56-35-pc-ai-tools-digital-gig-economy-workforce-global-talent-hub" rel="noopener">India Skills Report 2026</a> puts overall graduate employability at 56.35%. The rest aren’t hopeless. They just weren’t prepared for this part.'],
      ],
      closer: 'Almost none of this has to do with intelligence, and all of it can be taught.',
    }),
    steps({
      eyebrow: 'What FG2P covers',
      h2: 'What college skipped.',
      items: [
        ['Communicating at work', 'Email, WhatsApp, phone manners, meetings and how to speak up without fear.'],
        ['Documents and tools', 'Word, Excel and presentations, as they’re actually used in offices.'],
        ['Taking responsibility', 'What “ownership” means when you’re the most junior person in the room.'],
        ['Working with a manager', 'Asking good questions, giving updates before anyone asks, and taking correction.'],
        ['Handling customers', 'Staying calm and being useful when someone is unhappy.'],
        ['Working on real tasks', 'Assignments that feel like the first month of a job, with honest feedback.'],
      ],
      after: cta('Ask about the next batch', '#talk'),
    }),
    notFor({
      h2: 'What we won’t tell you',
      items: ['That we guarantee placement. Nobody honest can.', 'That a certificate gets you hired. Skills do.', 'That this replaces your technical education.'],
    }),
    faq(fgFaqs, 'Questions about FG2P'),
    related('Related', ['/corporate-training/', '/office-administration-training/', '/telecalling-training/']),
    lf({ h2: 'Are you hiring graduates or are you one?', needs: ['I’m hiring freshers', 'My new hires take too long to settle', 'I’m a recent graduate', 'I’m a parent of a graduate', 'We’re a college', 'I want to know the next batch date'], from: 'FG2P page' }),
  ].join(''),
};

// ---------- SME
const smeFaqs = [
  ['What is SME training or MSME training?', 'Practical training for the owners and staff of small and medium businesses: sales, customer handling, operations, supervision and basic systems. It’s designed for small teams without HR departments, where people have to do several jobs.'],
  ['Is this the government MSME training scheme?', 'No. We’re a private firm. The Ministry of MSME and Kerala’s District Industries Centres run their own MSME training programs, and some are subsidised, so they’re worth checking too. Ours is designed around your own business, at your premises.'],
  ['We can’t release all staff at once. What can we do?', 'That’s normal. We run short sessions in small groups, before opening or during quiet hours, and split people so the shop keeps running.'],
  ['What topics can you cover?', 'Common ones are customer handling, basic selling, supervision, teamwork, following SOPs, and basic reporting. We’ll suggest what’s useful after we’ve seen your business.'],
  ['How small is too small?', 'If you have about five staff or more, there’s usually something to gain. Below that, it may be better to start with a free audit and a couple of SOPs.'],
];
const sme = {
  path: '/sme-training/', crumb: 'SME training', parent, keyword: 'MSME training', service: 'SME and MSME training',
  title: 'SME and MSME Training in Kerala for Teams | Trainova BS',
  description: 'SME and MSME training in Kerala for small teams with no HR department. Short sessions at your premises, on customers, sales and supervision.',
  faqs: smeFaqs,
  body: [
    hero({
      scene: 'You, looking at the training brochure',
      quote: '“Who’ll do the work if they’re all in training?”',
      md: true,
      after: 'You can’t spare them. You also know you can’t keep them this way.',
      h1: 'MSME training in Kerala for small teams that can’t stop working.',
      lede: 'You don’t have an HR department or a training budget. Our SME training is short, happens at your premises around your working hours, and uses your own customers and your own problems.',
    }),
    said({
      lines: ['I don’t have time to teach them.', 'They learn on the job.', 'Those programmes are for big companies.', 'What if I train them and they leave?'],
      h2: 'Small businesses train people by accident.',
      paras: [
        'In a small business, nobody “gets trained”. They watch whoever’s nearby and copy what they see, bad habits included. How a customer is greeted, how a complaint gets handled and how a price is explained all depend on who happened to be standing next to them in their first week.',
        'It seems free, but you’re paying in lost sales, in mistakes that get repeated for years, and in you, correcting the same thing again and again.',
        'Big-company training doesn’t suit you. It assumes departments, budgets and people who can vanish for three days. So we built ours differently.',
      ],
    }),
    steps({
      eyebrow: 'What’s different',
      h2: 'Designed for a business that can’t close.',
      items: [
        ['At your premises', 'Your staff don’t travel, and they learn where they work.'],
        ['In short sessions', 'An hour or two at a time, around your quiet hours, in groups that leave the shop covered.'],
        ['On your real problems', 'Your customers, your products and the mistakes your team actually makes.'],
        ['In your team’s language', 'Malayalam, English or both.'],
        ['With you in the loop', 'You’ll know what was covered and what to look for afterwards.'],
        ['Linked to SOPs', 'What gets taught gets written down, so the next hire benefits as well.'],
      ],
      after: cta('Ask about training for my team', '#talk'),
    }),
    faq(smeFaqs, 'Questions about SME training'),
    related('Related', ['/process-training/', '/leadership-training/', '/corporate-training/']),
    lf({ h2: 'What would you fix first?', needs: ['Customer handling', 'Selling and upselling', 'Supervisors and team leads', 'Everyone does it differently', 'New staff take too long', 'I want a quote'], from: 'SME training page' }),
  ].join(''),
};

// ---------- Process training
const procFaqs = [
  ['What is process training?', 'Process training teaches employees how a job should be done in your company, step by step, and why. It’s how a written SOP turns into something people do without looking it up.'],
  ['How do you get staff to follow SOPs?', 'Involve them in writing it, explain why it matters, practise on real work, have their manager check it, and audit it regularly. Most SOPs fail at this stage, not in the writing.'],
  ['Can you train staff on SOPs someone else wrote?', 'Yes. We’ll review them first. If they’re unclear or don’t match how the work is done, we’ll tell you, because training people on a broken document makes things worse.'],
  ['What is “Scaling Businesses with Systems and SOPs”?', 'It’s our signature programme for owners and senior teams: how to think in systems, what to document first and how to roll it out. It’s a good starting point if you want to build the capability inside your own company.'],
  ['How long does process training take?', 'A single process can take an hour. A rollout across a business runs over weeks, one group of processes at a time, so nothing gets forgotten and work keeps moving.'],
];
const processTraining = {
  path: '/process-training/', crumb: 'Process training', parent, keyword: 'process training', service: 'Process training',
  title: 'Process Training for Employees and SOP Rollout | Trainova BS',
  description: 'Process training that gets staff to actually follow your SOPs, plus our Scaling Businesses with Systems and SOPs programme. For Kerala teams.',
  faqs: procFaqs,
  body: [
    hero({
      scene: 'Six months after the SOP project',
      quote: '“We made the SOPs. Nobody opens the file.”',
      md: true,
      after: 'It cost real money. It’s on the shared drive. Everyone’s doing what they did before.',
      h1: 'Process training that gets your team to actually follow the SOP.',
      lede: 'A written process only matters once people do it without thinking. We train your team on your processes until they do, and show your managers how to keep it going.',
    }),
    said({
      lines: ['I know, I know, but this way is faster.', 'Nobody follows that.', 'That’s just for the auditors.', 'The old way was working fine.'],
      h2: 'People don’t resist SOPs. They resist being told.',
      paras: [
        'Picture someone who’s done the job for nine years. Then a document appears that says they’ve been doing it wrong, written by someone who’s never done it. Of course they ignore it. You would too.',
        'Process training isn’t reading the document aloud in a hall. It’s showing why a step exists, what goes wrong without it, letting people practise on real work and listening when they spot something that won’t work. Sometimes they’re right, and the SOP should change.',
        'After that, it’s habit, and habits come from someone checking. That’s the part nobody plans for.',
      ],
    }),
    steps({
      eyebrow: 'How a rollout works',
      h2: 'From document to habit.',
      items: [
        ['Review the SOP', 'Is it clear, short and true? We fix it first if not.'],
        ['Explain the why', 'What goes wrong without this step. People remember reasons, not rules.'],
        ['Practise on real work', 'Doing it, not hearing about it, with mistakes corrected on the spot.'],
        ['Equip the manager', 'A simple way to check, and how to correct without humiliating.'],
        ['Audit it', 'After a few weeks, we look at what’s followed and what’s being skipped.'],
        ['Fix or change', 'If everyone skips a step, maybe the step is wrong.'],
      ],
      after: cta('Ask about a rollout', '#talk'),
    }),
    band(`<div class="two"><div>${head('Signature programme', 'Scaling Businesses with Systems and SOPs')}</div><div class="prose"><p>For owners and senior teams who want to build this capability in-house. You learn how to think in systems, which processes to document first, how to write SOPs people will read, and how to roll them out without a rebellion.</p><p>You leave with your first SOPs drafted, and a plan for the rest. It’s also the place to start if you’re not ready for monthly consulting yet.</p></div></div>`, 'sheetband'),
    faq(procFaqs, 'Questions about process training'),
    related('Related', ['/sop-consulting/', '/guides/how-to-write-an-sop/', '/sme-training/']),
    lf({ h2: 'What’s your team ignoring?', needs: ['We have SOPs nobody follows', 'We’re about to roll out new processes', 'Staff resist any change', 'Managers don’t check anything', 'I want the Systems and SOPs programme', 'I want a quote'], from: 'Process training page' }),
  ].join(''),
};

// ---------- Office admin
const adminFaqs = [
  ['What is Smart Office and Administration Mastery?', 'It’s our training programme for office and admin staff in working businesses: filing and records, communication, office tools, coordination and reporting, so the back office supports the business and doesn’t slow it down.'],
  ['Is this an office administration diploma course?', 'No. This is training for staff at working companies. If you’re a student looking for an office administration course in Trivandrum, or a diploma elsewhere in Kerala, ASAP Kerala and several private institutes in Trivandrum and Kochi offer certified courses that may suit you better.'],
  ['What will my office staff learn?', 'How to keep records anyone can find, use Excel, email and shared drives properly, coordinate between departments, follow up without being asked, and prepare reports you can use.'],
  ['We’re a small office. Is this useful?', 'Probably more than for a large one. In a small business, one or two admin people hold everything together. If they’re organised, the owner gets hours back. If they leave, you find out what they knew.'],
  ['Can you set up our filing and office systems too?', 'Yes. Often that’s where we start, since training people on a filing system that doesn’t exist isn’t much use.'],
];
const admin = {
  path: '/office-administration-training/', crumb: 'Office administration training', parent, keyword: 'office administration training', service: 'Office administration training',
  title: 'Office Administration Training for Staff | Trainova BS',
  description: 'Office administration training for working teams in Kerala. Records, tools, coordination and reporting, so your office stops relying on one person’s memory.',
  faqs: adminFaqs,
  body: [
    hero({
      scene: 'GST notice on your desk, 4:45 pm',
      quote: '“Where is that bill?”',
      after: 'Your office assistant has been looking since lunch. It’s in a file, in a cupboard, somewhere. Or in someone’s phone.',
      h1: 'Office administration training for a back office that’s holding you back.',
      lede: 'Our Smart Office and Administration Mastery programme teaches your admin staff to keep records anyone can find, use office tools properly and keep work moving, without you asking twice.',
    }),
    said({
      lines: ['Only she knows where it is.', 'I’ll send it by evening, sir.', 'Which version is the latest?', 'It’s on the old computer.'],
      h2: 'Nobody notices the back office until it stops.',
      paras: [
        'Your office staff don’t bring in revenue, so nobody invests in them. They learned Excel from a colleague and their filing system from whoever sat there before. Then one day you need a document for the bank, an audit or a client, and an afternoon disappears.',
        'A good office isn’t about being tidy. Quotes go out the same day. Payments get followed up without anyone asking. When someone’s on leave, work doesn’t stop.',
        'It’s among the cheapest improvements a small business can make, and among the least glamorous, so it rarely gets done.',
      ],
    }),
    steps({
      eyebrow: 'What the programme covers',
      h2: 'Smart office basics, properly.',
      items: [
        ['Records and filing', 'A simple structure, paper and digital, that anyone can use on day one.'],
        ['Tools people half-know', 'Excel, email, shared drives and calendars, as your office really uses them.'],
        ['Communication', 'Clear emails, tidy WhatsApp habits and messages that don’t need three follow-ups.'],
        ['Coordination', 'Tracking who owes what between departments, without chasing.'],
        ['Reporting', 'Simple regular reports, on time, that you’ll actually read.'],
        ['Cover and handover', 'So one person’s leave or resignation doesn’t stop the office.'],
      ],
      after: cta('Ask about training for my office', '#talk'),
    }),
    faq(adminFaqs, 'Questions about office administration training'),
    related('Related', ['/sop-consulting/', '/business-automation/', '/fresh-graduate-training/']),
    lf({ h2: 'What can’t your office find?', needs: ['Records are a mess', 'Everything depends on one person', 'Reports are always late', 'Staff don’t really know Excel', 'We need a filing system', 'I want a quote'], from: 'Office administration page' }),
  ].join(''),
};

// ---------- Digital marketing
const dmFaqs = [
  ['Is this digital marketing course for business owners or for marketers?', 'For owners and entrepreneurs. We won’t make you a specialist. We’ll help you understand what’s working, what your agency is telling you, and what you should be paying for.'],
  ['Will I need to run my own ads after this?', 'Only if you want to. Most owners are better off delegating and checking. This course teaches you how to tell whether the work is any good, and if you’re very small, how to manage basics yourself.'],
  ['What does the digital marketing training cover?', 'This digital marketing course for entrepreneurs covers Google and Meta advertising basics, your Google Business Profile, SEO and websites, content that fits your business, lead tracking, cost per lead, and how to read an agency’s report and brief them properly.'],
  ['Do you run marketing for clients?', 'Marketing execution is done by our partners at BrinIT, and it’s integrated in our Platinum plan. This course stands on its own, whoever does your marketing.'],
  ['I’m not technical. Will I keep up?', 'Yes. If you can use WhatsApp and read a bank statement, you’ll be fine. The maths is simpler than your accounts, and we explain every term in plain language, in Malayalam if you prefer.'],
];
const dm = {
  path: '/digital-marketing-training-for-entrepreneurs/', crumb: 'Digital marketing for entrepreneurs', parent, keyword: 'digital marketing training for entrepreneurs', service: 'Digital marketing training for entrepreneurs',
  title: 'Digital Marketing Training for Entrepreneurs | Trainova BS',
  description: 'Digital marketing training for entrepreneurs and business owners in Kerala. Read your agency’s report, know your cost per lead and stop paying for “reach”.',
  faqs: dmFaqs,
  body: [
    hero({
      scene: 'Agency’s monthly report, page 14',
      quote: '“Sir, your reach has gone up.”',
      after: 'You nod. You paid ₹40,000. The phone hasn’t rung any more than it did last month.',
      h1: 'Digital marketing training for entrepreneurs who are tired of nodding.',
      lede: 'You don’t need to become a marketer. You need to know whether what you’re paying for is working. In plain language, with your own accounts open in front of you.',
    }),
    said({
      lines: ['What exactly is an impression?', 'My nephew handles the Instagram.', 'We boosted the post.', 'SEO takes time, sir.'],
      h2: 'It’s uncomfortable to pay for something you can’t judge.',
      paras: [
        'You’d never pay a contractor without looking at the wall. But with digital marketing, the report arrives full of terms you half-understand. You don’t want to look foolish by asking, so you nod and pay, and you have a bad feeling about it.',
        'Maybe your agency is great. Maybe they’re not. Right now you can’t tell, and that’s the real problem. You’re a capable business owner who’s been made to feel slow by a vocabulary.',
        'A few ideas cover most of it. What did a lead cost? How many became customers? What did that customer bring in? Once you can ask those questions, the conversation changes.',
      ],
    }),
    steps({
      eyebrow: 'What we cover',
      h2: 'What you need to stop nodding.',
      items: [
        ['The only numbers that matter', 'Cost per lead, conversion and return, and how to find them in your own accounts.'],
        ['Reading an agency report', 'What each term means, which ones are decoration and what to ask next.'],
        ['Google, used properly', 'Your Google Business Profile, how search ads work, and honest expectations for SEO.'],
        ['Meta, without guesswork', 'Facebook and Instagram ads, and why boosting a post is rarely the answer.'],
        ['Tracking your leads', 'Knowing where each enquiry came from, and whether your team followed up.'],
        ['Hiring and briefing', 'How to write a brief, compare quotes and spot empty promises, including “rank number one”.'],
      ],
      after: cta('Ask about the next session', '#talk'),
    }),
    faq(dmFaqs, 'Questions about digital marketing training'),
    related('Related', ['/telecalling-training/', '/business-automation/', '/corporate-training/']),
    lf({ h2: 'What’s your marketing telling you?', needs: ['I can’t read my agency’s report', 'We get likes, not customers', 'I don’t know my cost per lead', 'I want to do the basics myself', 'I’m comparing agencies', 'I want to join the next session'], from: 'Digital marketing training page' }),
  ].join(''),
};

export default [hub, leadership, telecalling, fresher, sme, processTraining, admin, dm];
