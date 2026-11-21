/**
 * SOLVÉ Global Summit — every word on /global-summit, in both languages.
 *
 * English is verbatim from Rida's November 2026 mockups and Website User Flow;
 * nothing is invented, corrected or paraphrased. The only English not printed on
 * a mockup is interface wording (menu, form errors, the confirmation line,
 * page descriptions for search engines), kept as plain as possible.
 *
 * Spanish: paste Rida's approved copy into `es`, mirroring the shape of `en`.
 * Any string left out falls back to English, so a partial translation never
 * leaves a blank on the page. Do not machine-translate into this object.
 */

export type Lang = 'en' | 'es'

export const SUMMIT_BASE = '/global-summit'

export const summitPaths = {
  home: SUMMIT_BASE,
  about: `${SUMMIT_BASE}/about`,
  platform: `${SUMMIT_BASE}/platform`,
  challenges: `${SUMMIT_BASE}/global-challenges`,
  impact: `${SUMMIT_BASE}/impact`,
  contact: `${SUMMIT_BASE}/contact`,
  register: `${SUMMIT_BASE}/register`,
} as const

/** Stable ids for the four pillars; they are also the anchors on The Platform page. */
export const PILLAR_IDS = ['illuminate', 'equip', 'unite', 'restore'] as const

/**
 * The five Area of Interest options from the Register mockup. The English label
 * is what reaches the Google Form, whatever language the visitor reads, so the
 * Form's choices must match these exactly.
 */
export const INTEREST_OPTIONS = [
  'Sponsorship',
  'Speaker / Contributor',
  'Organization',
  'Delegation',
  'Collaboration',
] as const

const en = {
  brand: 'SOLVÉ Global Summit',
  logoAlt: 'SOLVÉ Global Summit',

  nav: {
    home: 'Home',
    about: 'About the Summit',
    challenges: 'Global Challenges',
    platform: 'The Platform',
    pillars: 'Four Pillars',
    impact: 'Impact',
    contact: 'Contact',
    register: 'Register Interest',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    solVe: 'Sol Vé Custom Events',
  },

  cta: 'Register Interest',

  meta: {
    home: {
      title: 'SOLVÉ Global Summit — Coming Soon 2028, Quintana Roo, Mexico',
      description:
        'An independent international convening platform connecting global leadership, knowledge, institutions, frontline workers and support services to strengthen coordinated humanitarian responses to societal challenges.',
    },
    about: {
      title: 'About the Summit | SOLVÉ Global Summit',
      description:
        'SOLVÉ Global Summit is an independent, incorporated Canadian company developing an international convening platform, built for meaningful collaboration beyond any single gathering.',
    },
    platform: {
      title: 'The Platform | SOLVÉ Global Summit',
      description:
        'A comprehensive framework that convenes expertise, builds capacity, drives collaboration and sustains the people behind the work.',
    },
    challenges: {
      title: 'Global Challenges | SOLVÉ Global Summit',
      description: 'Human trafficking crosses borders. So must our responses.',
    },
    impact: {
      title: 'Impact | SOLVÉ Global Summit',
      description:
        'The Summit creates measurable, lasting impact through people, partnerships and practical commitments.',
    },
    contact: {
      title: 'Contact | SOLVÉ Global Summit',
      description: 'Let’s explore how you can be part of SOLVÉ Global Summit.',
    },
    register: {
      title: 'Register Your Interest | SOLVÉ Global Summit',
      description:
        'Be part of a global platform for leadership, collaboration and lasting impact.',
    },
  },

  home: {
    line1: 'The Right People.',
    line2: 'The Right Conversations.',
    line3: 'Working Toward Shared Solutions.',
    body: 'An independent international convening platform connecting global leadership, knowledge, institutions, frontline workers and support services to strengthen coordinated humanitarian responses to societal challenges.',
    status: 'Coming Soon 2028',
    location: 'Quintana Roo, Mexico',
    imageAlt:
      'Leaders from different regions in conversation around a table on a terrace overlooking the sea',
  },

  about: {
    line1: 'Built to Convene.',
    line2: 'Designed to Endure.',
    body: 'SOLVÉ Global Summit is an independent, incorporated Canadian company developing an international convening platform, built for meaningful collaboration beyond any single gathering.',
    imageAlt: 'Flags of many nations lining the approach to an international headquarters',
    pillars: [
      {
        title: 'An Enduring Global Platform',
        body: 'Connecting expertise, institutions and leadership across borders.',
      },
      {
        title: 'A Recurring Convening Model',
        body: 'A proposed biennial cycle, beginning with a human trafficking summit in 2028.',
      },
      {
        title: 'A Sustainable Global Platform',
        body: 'Year-round engagement, strategic collaboration and diversified revenue opportunities to sustain long-term impact.',
      },
    ],
    closing: 'The Gathering Concludes. The Collaboration Continues.',
  },

  platform: {
    line1: 'The Platform.',
    line2: 'Four Pillars. A Shared Purpose.',
    body: 'A comprehensive framework that convenes expertise, builds capacity, drives collaboration and sustains the people behind the work.',
    pillars: [
      { title: 'Illuminate', body: 'Advance evidence, awareness and shared understanding.' },
      { title: 'Equip', body: 'Strengthen capacity through knowledge, skills and resources.' },
      { title: 'Unite', body: 'Build cross-sector collaboration for coordinated action.' },
      {
        title: 'Restore',
        body: 'Sustain the people behind the work, through care, wellness and support.',
      },
    ],
  },

  challenges: {
    line1: 'Global Challenges.',
    line2: 'Shared Responsibility.',
    body: 'Human trafficking crosses borders. So must our responses.',
    imageAlt: 'The Americas at night, cities linked by lines of light',
    stats: [
      { value: '49.6 million', label: 'people living in modern slavery (2021)' },
      { value: '$236B', label: 'annual illegal profits from human trafficking' },
      { value: '+25%', label: 'detected trafficking in victims (2022 vs. 2019)' },
    ],
    source: 'Source: ILO (2022), UNODC (2023)',
    areasHeading: 'Our Impact Areas',
    areas: [
      {
        title: 'Prevention',
        body: 'Addresses root causes and reduce vulnerability across communities.',
      },
      {
        title: 'Protection',
        body: 'Enhances safety, support and dignity for those at risk and affected.',
      },
      {
        title: 'Justice',
        body: 'Strengthens accountability and enforcement across borders and sectors.',
      },
      {
        title: 'Restoration',
        body: 'Enable long-term recovery, reintegration and opportunities for a renewed future.',
      },
    ],
  },

  impact: {
    line1: 'Impact.',
    line2: 'From Dialogue to Action.',
    body: 'The Summit creates measurable, lasting impact through people, partnerships and practical commitments.',
    outcomes: [
      { title: 'Relationships', body: 'Build trusted, cross-sector connections.' },
      { title: 'Shared Understanding', body: 'Align on evidence, needs and solutions.' },
      { title: 'Collaborative Commitments', body: 'Translate dialogue into coordinated action.' },
    ],
  },

  contact: {
    heading: 'Contact Us.',
    body: 'Let’s explore how you can be part of SOLVÉ Global Summit.',
    emailLabel: 'General Inquiries',
    email: 'info@solveglobalsummit.com',
    location: 'Calgary, Alberta, Canada',
    website: 'www.solveglobalsummit.com',
    websiteHref: 'https://www.solveglobalsummit.com',
  },

  register: {
    line1: 'Register Your',
    line2: 'Interest',
    body: 'Be part of a global platform for leadership, collaboration and lasting impact.',
    areasHeading: 'Areas of Involvement',
    /** Same order as INTEREST_OPTIONS. `title` is what the visitor reads. */
    areas: [
      { title: 'Sponsorship', body: 'Support the Summit and its long-term impact.' },
      { title: 'Speaker / Contributor', body: 'Share expertise, evidence or lived experience.' },
      { title: 'Organization', body: 'Represent your organization or initiative.' },
      { title: 'Delegation', body: 'Join the gathering in 2028.' },
      { title: 'Collaboration', body: 'Explore research, training or program opportunities.' },
    ],
    fields: {
      fullName: 'Full Name',
      email: 'Email Address',
      organization: 'Organization / Affiliation',
      interest: 'Area of Interest',
      message: 'Message (optional)',
      select: 'Select an option',
    },
    errors: {
      fullName: 'Please enter your full name.',
      email: 'Please enter a valid email address.',
      interest: 'Please select an area of interest.',
      send: 'Your submission could not be sent. Please try again, or email info@solveglobalsummit.com.',
    },
    submit: 'Submit Interest',
    sending: 'Sending…',
    confirmationHeading: 'Thank you.',
    confirmation: 'Your interest has been received. We will be in touch as the Summit advances.',
    again: 'Submit another response',
  },

  footer: {
    rights: 'All rights reserved.',
    explore: 'Explore',
    contact: 'Contact',
  },
}

export type SummitCopy = typeof en

type DeepPartial<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepPartial<U>[]
    : { [K in keyof T]?: DeepPartial<T[K]> }

/**
 * Rida's approved Spanish copy goes here, keyed exactly as `en` above.
 * Example: `home: { line1: '…', line2: '…' }`. Empty until it arrives.
 */
const es: DeepPartial<SummitCopy> = {}

/** Overlays `partial` onto `base`, key by key and item by item; anything missing keeps the English. */
function overlay<T>(base: T, partial: unknown): T {
  if (partial === undefined || partial === null) return base
  if (typeof base === 'string') return (typeof partial === 'string' && partial ? partial : base) as T
  if (Array.isArray(base)) {
    const items = Array.isArray(partial) ? partial : []
    return base.map((item, i) => overlay(item, items[i])) as T
  }
  if (typeof base === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(base as Record<string, unknown>)) {
      out[key] = overlay(value, (partial as Record<string, unknown>)[key])
    }
    return out as T
  }
  return base
}

export const summitCopy: Record<Lang, SummitCopy> = {
  en,
  es: overlay(en, es),
}
