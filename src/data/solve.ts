/**
 * SOLVÉ Global Summit.
 *
 * Copy is verbatim from "Website Build Instructions v5", Page 11. Two of that
 * document's URGENT corrections are enforced here rather than left to memory:
 *
 *   1. NO DATES OR YEARS anywhere. Every date reference reads "Coming Soon".
 *   2. redM is NOT a founding partner. It was removed on instruction.
 *
 * Status: the newest client document asks that SOLVÉ not be positioned
 * anywhere on the site until its brand, governance and launch strategy are
 * settled. The page is therefore built in full but deliberately UNLINKED — no
 * menu entry, no homepage banner, no callout on the Conferences page. Reaching
 * it requires the direct /solve URL. To switch it on later: add it to
 * `navigation` in site.ts and drop a callout wherever it belongs.
 */

export const solve = {
  eyebrow: 'SOLVÉ Global Summit',
  status: 'Coming Soon  |  Riviera Maya, Mexico',
  subheadline:
    "The world's first politically neutral, cross-sector, holistic international conference on human trafficking.",

  problem: {
    eyebrow: 'The Problem',
    heading: 'The people doing the hardest work are rarely restored.',
    body: 'Human trafficking is one of the most complex and devastating crises of our time. The organizations fighting it work in silos. The conferences that exist are single-sector, politically aligned, or enforcement-heavy. The people doing the hardest work in this space are rarely restored. And the voices that need to be at the same table, policymakers, survivors, first responders, educators, philanthropists, tech innovators, rarely are.',
  },

  solution: {
    eyebrow: 'The Solution',
    heading: 'SOLVÉ exists to build that table.',
    body: "We are the world's first politically neutral, cross-sector, holistic international conference on human trafficking. We bring together every voice that matters, without a political agenda, without enforcement bias, without leaving anyone behind, in a luxury resort setting that models the restoration we preach.",
  },

  whyNow: {
    eyebrow: 'Why Now',
    heading: 'That room is SOLVÉ. And it is coming.',
    body: 'The problem is escalating. The movement is fragmented. And there has never been a single room where all of this has come together at once.',
  },

  pillars: [
    {
      number: 'Pillar 1',
      title: 'ILLUMINATE',
      body: 'Education for general public, students, and communities. Building a world that recognizes trafficking before it happens.',
    },
    {
      number: 'Pillar 2',
      title: 'EQUIP',
      body: 'First responder and professional training covering all forms of human trafficking: sexual exploitation, labour trafficking, forced marriage, organ trafficking. Practical. Accredited. Actionable.',
    },
    {
      number: 'Pillar 3',
      title: 'UNITE',
      body: 'Cross-sector, non-partisan collaboration and policy. The room where adversaries become allies because the cause demands it.',
    },
    {
      number: 'Pillar 4',
      title: 'RESTORE',
      body: 'Survivor support and holistic healing for the professionals who carry this work. The all-inclusive resort setting is not luxury for luxury’s sake. It is the methodology. The people fighting the hardest battles deserve to be restored, not just informed.',
    },
  ],

  /** v5: "Lynea loves this section. Increase font size to minimum 20px." */
  delegates: [
    'Policymakers and lawmakers',
    'Government officials and civil servants',
    'Victim services and survivor advocates',
    'First responders and law enforcement',
    'Educators and academics',
    'Technology innovators',
    'Philanthropists and foundation leaders',
    'Corporate CSR leaders',
    'Nonprofit and NGO executives',
    'Volunteers and community advocates',
  ],

  resort: {
    heading: 'Why the resort setting',
    body: "The all-inclusive resort setting is not a vacation. It is the architecture of SOLVÉ's methodology. When the people fighting the hardest battles wake up in the morning and the food is already prepared, the pool is available, and the wellness professionals are on site, they are being cared for in the same way they are trying to care for others. RESTORE is not a pillar. It is the foundation.",
    addendum: 'Entertainment is always an option.',
  },

  /** redM removed on instruction — do not reinstate without written approval. */
  partners: [
    { name: 'Sol Vé Custom Events', role: 'Founding Partner and Conference Producer' },
    { name: 'Revive by Design', role: 'Training and Certification Partner, RESTORE Pillar' },
    { name: 'To Be Announced', role: '' },
    { name: 'To Be Announced', role: '' },
    { name: 'To Be Announced', role: '' },
  ],
  partnersNote:
    "A limited number of founding partner positions remain for organizations aligned with SOLVÉ's four pillars.",

  revive: {
    heading: 'Training and Certification Partner',
    body: 'Revive by Design is a SOLVÉ conference training and certification partner, supporting the RESTORE pillar through accredited professional development programming.',
  },

  founders: [
    { name: 'Lynea Vaugeois Hetherington', role: 'Founder and Conference Director, Sol Vé Custom Events' },
    { name: 'Rida Ghani', role: 'Co-Founder and Director of Partnerships and Development' },
  ],
  advisoryNote:
    'Advisory board appointments are underway and will be announced as confirmed.',
  advisorySlots: 4,

  delegateForm: {
    heading: 'Be in the room.',
    body: 'Delegate registration interest is open now. Every registration signals to funders, governments, and partners that this movement is ready for one table.',
    submit: 'Register My Interest',
    confirmation: 'Thank you. We will be in touch as delegate registration opens.',
    pillars: ['ILLUMINATE', 'EQUIP', 'UNITE', 'RESTORE', 'All four equally'],
  },

  sponsorForm: {
    heading: 'Partner with SOLVÉ.',
    body: 'Sponsorship builds the room. Tell us where your organization sees itself and we will send the full prospectus as it is released.',
    submit: 'Submit Inquiry',
    confirmation: 'Thank you. We will be in touch with the sponsorship prospectus.',
    levels: [
      'Title Sponsor',
      'Presenting Sponsor',
      'Major Sponsor',
      'Supporting Sponsor',
      'Not Sure Yet',
    ],
  },
} as const

export const COUNTRIES = [
  'Canada',
  'United States',
  'Mexico',
  'United Kingdom',
  'Ireland',
  'France',
  'Germany',
  'Netherlands',
  'Belgium',
  'Switzerland',
  'Spain',
  'Portugal',
  'Italy',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Poland',
  'Ukraine',
  'Romania',
  'Greece',
  'Türkiye',
  'Israel',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Egypt',
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'India',
  'Pakistan',
  'Bangladesh',
  'Nepal',
  'Thailand',
  'Vietnam',
  'Cambodia',
  'Philippines',
  'Indonesia',
  'Malaysia',
  'Singapore',
  'Japan',
  'South Korea',
  'China',
  'Australia',
  'New Zealand',
  'Brazil',
  'Argentina',
  'Chile',
  'Colombia',
  'Peru',
  'Guatemala',
  'Other',
]
