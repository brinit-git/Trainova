// Customers and testimonials. Edit this file, then run: node src/build.mjs
// The carousel and the testimonial section both grow by themselves.

// To add a customer: put a logo in assets/images/customers/ (roughly 400px wide, transparent or white
// background, must read on white), then add a line here. The carousel keeps looping seamlessly at any length.
export const customers = [
  ['blackbox-learning.webp', 'BlackBox Learning'],
  ['prception.webp', 'PRception'],
  ['lynklead.webp', 'LynkLead'],
  ['unirun-traders.webp', 'Unirun Traders'],
  ['exotica-lifespace.webp', 'Exotica Lifespace'],
  ['reach-us-business-hub.webp', 'Reach Us Business Hub'],
];

// To add a testimonial: put a photo in assets/images/testimonials/ (optional, square, about 240px),
// then add an entry. With two or more, previous and next buttons appear automatically.
//   logo      optional, a file already in assets/images/customers/
//   headline  the one line that hurts, shown large
//   quote     the rest, in their words
//   draft     true shows a visible "awaiting approval" label and fails src/audit.mjs.
//             Only remove it once this person has approved the exact words.
export const testimonials = [
  {
    name: 'Girish Padoli',
    role: 'Founder, BlackBox Learning',
    photo: 'girish-padoli.webp',
    logo: 'blackbox-learning.webp',
    headline: '“I was the answer to every question in my own company.”',
    quote: '“I thought that was what being a founder meant. Trainova didn’t give me a speech about it. They sat with my team, wrote down how the work should run and who decides what. Now my people come to me with decisions they’ve already made.”',
  },
  {
    name: 'Arun Babu',
    role: 'CEO, Unirun Traders',
    logo: 'unirun-traders.webp',
    headline: '“My business was only as big as what I could check myself.”',
    quote: '“In wholesale, one wrong price or one missed follow-up costs real money, so I kept every decision with me. Trainova helped us write down who handles what, and trained the team to do it. I still care about every order. I just don’t have to carry every one of them.”',
  },
];
