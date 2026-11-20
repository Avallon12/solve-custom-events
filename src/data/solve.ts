/**
 * SOLVÉ Global Summit — copy is verbatim from the client mockups
 * (November 2026). The page lives at /solve inside the Sol Vé site shell
 * (same Nav / Footer as every other page). It is not a separate branded site.
 *
 * Status: restored after the August archive. Reachable at /solve; not placed
 * in the Sol Vé masthead until Lynea asks for a nav entry.
 */

export const solve = {
  logoAlt: 'SOLVÉ Global Summit',

  hero: {
    line1: 'The Right People.',
    line2: 'The Right Conversations.',
    line3: 'Working Toward Shared Solutions.',
    body: 'An independent international convening platform connecting global leadership, knowledge, institutions, frontline workers and support services to strengthen coordinated humanitarian responses to societal challenges.',
    status: 'COMING SOON 2028',
    location: 'Quintana Roo, Mexico',
    cta: 'Register Interest',
  },

  about: {
    line1: 'Built to Convene.',
    line2: 'Designed to Endure.',
    body: 'SOLVÉ Global Summit is an independent, incorporated Canadian company developing an international convening platform, built for meaningful collaboration beyond any single gathering.',
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
    closing: 'THE GATHERING CONCLUDES. THE COLLABORATION CONTINUES.',
  },

  platform: {
    line1: 'The Platform.',
    line2: 'Four Pillars.',
    line3: 'A Shared Purpose.',
    body: 'A comprehensive framework that convenes expertise, builds capacity, drives collaboration and sustains the people behind the work.',
    pillars: [
      {
        title: 'ILLUMINATE',
        body: 'Advance evidence, awareness and shared understanding.',
      },
      {
        title: 'EQUIP',
        body: 'Strengthen capacity through knowledge, skills and resources.',
      },
      {
        title: 'UNITE',
        body: 'Build cross-sector collaboration for coordinated action.',
      },
      {
        title: 'RESTORE',
        body: 'Sustain the people behind the work, through care, wellness and support.',
      },
    ],
  },

  challenges: {
    line1: 'Global Challenges.',
    line2: 'Shared Responsibility.',
    body: 'Human trafficking crosses borders. So must our responses.',
    stats: [
      { value: '49.6 million', label: 'people living in modern slavery (2021)' },
      { value: '$236B', label: 'annual illegal profits from human trafficking' },
      { value: '+25%', label: 'detected trafficking in victims (2022 vs. 2019)' },
    ],
    source: 'Source: ILO (2022), UNODC (2023)',
    impactAreasHeading: 'OUR IMPACT AREAS',
    impactAreas: [
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
    values: [
      {
        title: 'Relationships',
        body: 'Build trusted, cross-sector connections.',
      },
      {
        title: 'Shared Understanding',
        body: 'Align on evidence, needs and solutions.',
      },
      {
        title: 'Collaborative Commitments',
        body: 'Translate dialogue into coordinated action.',
      },
    ],
  },

  contact: {
    heading: 'Contact Us.',
    body: 'Let’s explore how you can be part of SOLVÉ Global Summit.',
    email: 'info@solveglobalsummit.com',
    location: 'Calgary, Alberta, Canada',
    website: 'www.solveglobalsummit.com',
    websiteHref: 'https://www.solveglobalsummit.com',
  },

  register: {
    heading: 'Register Your Interest',
    body: 'Be part of a global platform for leadership, collaboration and lasting impact.',
    areasHeading: 'AREAS OF INVOLVEMENT',
    areas: [
      {
        title: 'Sponsorship',
        body: 'Support the Summit and its long-term impact.',
      },
      {
        title: 'Speaker / Contributor',
        body: 'Share expertise, evidence or lived experience.',
      },
      {
        title: 'Organization',
        body: 'Represent your organization or initiative.',
      },
      {
        title: 'Delegation',
        body: 'Join the gathering in 2028.',
      },
      {
        title: 'Collaboration',
        body: 'Explore research, training or program opportunities.',
      },
    ],
    submit: 'Submit Interest',
    confirmation:
      'Thank you. Your interest has been received. We will be in touch as the Summit advances.',
    interestOptions: [
      'Sponsorship',
      'Speaker / Contributor',
      'Organization',
      'Delegation',
      'Collaboration',
    ],
  },
} as const
