import type { MediaId } from './media'

/**
 * "Signature Experiences" — transcribed word for word from the client's
 * document. Do not edit, condense or reword any of it.
 */

export type ServiceGroup = { title: string; lead?: string; items: string[] }

export type Experience = {
  slug: string
  name: string
  tagline: string
  intro: string
  media: MediaId
  services: ServiceGroup[]
  idealFor: string
  because: string
  /** A reel that plays above the gallery. */
  reel?: MediaId
  /** Client photography shown in a grid beneath the services. */
  gallery?: readonly MediaId[]
}

export const signatureExperiences = {
  intro: [
    'Every gathering begins with a purpose.',
    'Whether celebrating a marriage, marking a milestone, strengthening a community, inspiring generosity, or bringing leaders together, every Sol Vé experience is thoughtfully designed around the people, purpose, and relationships at its heart.',
    'From intimate celebrations to international conferences, our Signature Experiences combine thoughtful design, professional planning, genuine hospitality, and careful stewardship to create experiences that are remembered long after the gathering has ended.',
  ],
} as const

export const experiences: Experience[] = [
  {
    slug: 'weddings',
    name: 'Weddings',
    tagline:
      'Celebrations that honour love, family, culture, and the beginning of a shared future.',
    intro:
      'Every wedding tells a unique story. We thoughtfully steward each celebration with care, professionalism, and respect, creating an experience that honours your traditions, relationships, and the memories your family will carry for generations.',
    media: 'division-weddings',
    services: [
      {
        title: 'Planning & Consultation',
        lead: "Whether you're looking for complete planning or guidance along the way, we help bring clarity, confidence, and organization to every stage of your wedding.",
        items: [
          'Full Wedding Planning',
          'Partial Wedding Planning',
          'Wedding Consultation',
          'Budget Development',
          'Venue Selection',
          'Vendor Recommendations',
          'Timeline Development',
          'Wedding Planning Coaching',
        ],
      },
      {
        title: 'Coordination',
        lead: 'Professional coordination allows you to be fully present while we manage the details behind the scenes.',
        items: [
          'Month of Coordination',
          'Wedding Day Coordination',
          'Ceremony Coordination',
          'Reception Coordination',
          'Rehearsal Coordination',
          'Vendor Management',
          'Guest Management',
          'Timeline Execution',
          'Logistics Management',
        ],
      },
      {
        title: 'Design & Guest Experience',
        lead: 'Beautiful weddings begin with thoughtful design and genuine hospitality.',
        items: [
          'Wedding Design',
          'Styling & Décor',
          'Floral Coordination',
          'Tablescape Design',
          'Floor Plans',
          'Seating Plans',
          'Cultural & Multicultural Wedding Design',
          'Guest Experience Design',
          'Accessibility Planning',
        ],
      },
      {
        title: 'Destination Weddings',
        lead: 'Celebrations thoughtfully planned across Canada and internationally.',
        items: [
          'Destination Planning',
          'Travel Coordination Support',
          'Local Vendor Coordination',
          'Guest Experience Planning',
        ],
      },
    ],
    idealFor:
      'Couples seeking thoughtful guidance, professional leadership, and an experience that reflects who they are.',
    because: 'Because the way we gather becomes the memories we carry for a lifetime.',
    reel: 'reel-weddings',
    gallery: [
      'portfolio-italiano-1',
      'portfolio-italiano-2',
      'portfolio-italiano-3',
      'portfolio-italiano-4',
      'portfolio-italiano-5',
      'portfolio-italiano-6',
      'portfolio-italiano-7',
      'portfolio-nathan-allan-1',
      'portfolio-nathan-allan-2',
      'portfolio-nathan-allan-3',
      'portfolio-nathan-allan-4',
      'portfolio-dirt-roads-1',
      'portfolio-dirt-roads-2',
      'portfolio-dirt-roads-3',
      'portfolio-dirt-roads-4',
      'portfolio-marie-andre-1',
      'portfolio-marie-andre-2',
      'portfolio-marie-andre-3',
      'portfolio-marie-andre-4',
      'portfolio-claudia-ali-2',
      'portfolio-claudia-ali-3',
      'wed-claudia-and-ali-1',
      'wed-claudia-and-ali-2',
      'wed-claudia-and-ali-3',
      'wed-paula-and-ever-1',
      'wed-paula-and-ever-2',
      'wed-rob-and-lynea-1',
      'wed-rob-and-lynea-2',
      'wed-erin-and-rick-1',
      'wed-erin-and-rick-2',
      'wed-erin-and-rick-3',
      'wed-christina-and-vince-1',
      'wed-christina-and-vince-2',
      'wed-christina-and-vince-3',
      'wed-hannah-and-zach-1',
      'wed-hannah-and-zach-2',
      'wed-farah-1',
      'wed-marisol-1',
    ],
  },
  {
    slug: 'signature-moments',
    name: 'Signature Moments',
    tagline: "Bespoke experiences created to celebrate life's defining milestones.",
    intro:
      'Some moments deserve more than a gathering. They deserve an experience thoughtfully designed around the people and memories being celebrated.',
    media: 'division-signature-moments',
    services: [
      {
        title: 'Personal Celebrations',
        items: [
          'Milestone Birthdays',
          'Anniversaries',
          'Retirement Celebrations',
          'Graduation Celebrations',
          'Family Reunions',
          'Holiday Gatherings',
        ],
      },
      {
        title: 'Wedding Related Celebrations',
        items: [
          'Engagement Parties',
          'Bridal Showers',
          'Wedding Showers',
          'Baby Showers',
          'Rehearsal Dinners',
        ],
      },
      {
        title: 'Private Experiences',
        items: [
          'Private Dinners',
          'Appreciation Events',
          'VIP Experiences',
          'Celebration of Life Gatherings',
          'Custom Celebrations',
        ],
      },
      {
        title: 'Planning & Coordination',
        items: [
          'Planning',
          'Coordination',
          'Design',
          'Styling',
          'Vendor Management',
          'Entertainment Coordination',
          'Guest Experience',
        ],
      },
    ],
    idealFor: "Families and individuals celebrating life's most meaningful milestones.",
    because: "Because life's most meaningful moments deserve to be experienced with intention.",
    reel: 'reel-signature-moments',
    gallery: [
      'portfolio-proposal-1',
      'portfolio-proposal-2',
      'portfolio-valentines-1',
      'portfolio-valentines-2',
      'portfolio-valentines-3',
      'sig-vow-renewal-lisa-and-john-1',
      'sig-vow-renewal-lisa-and-john-2',
      'sig-vow-renewal-lisa-and-john-3',
      'sig-engagement-c-and-a-1',
      'sig-engagement-c-and-a-2',
      'sig-proposal-niki-and-mervin-1',
      'sig-proposal-niki-and-mervin-2',
      'sig-proposal-meegan-and-logan-1',
      'sig-proposal-tasnia-and-nick-1',
      'sig-galentines-1',
      'sig-galentines-2',
      'sig-bridal-shower-vegas-1',
      'sig-bridal-shower-vegas-2',
    ],
  },
  {
    slug: 'design-stylization',
    name: 'Design & Stylization',
    tagline: 'Thoughtfully crafted environments that bring vision, beauty, and purpose together.',
    intro:
      "Every environment begins communicating before the first conversation takes place. Through intentional design and careful attention to detail, we create spaces that support your message and elevate every guest's experience.",
    media: 'division-design-stylization',
    services: [
      {
        title: 'Creative Direction',
        items: [
          'Design Consultation',
          'Experience Design',
          'Creative Direction',
          'Theme Development',
          'Visual Storytelling',
        ],
      },
      {
        title: 'Event Design',
        items: [
          'Event Styling',
          'Décor Design',
          'Tablescapes',
          'Floral Coordination',
          'Colour Palette Development',
          'Lighting Concepts',
          'Lounge Design',
          'Stage Design',
        ],
      },
      {
        title: 'Custom Installations',
        items: [
          'Balloon Installations',
          'Feature Displays',
          'Photo Opportunities',
          'Custom Backdrops',
          'Signage',
          'Branded Environments',
        ],
      },
      {
        title: 'Space Planning',
        items: [
          'Floor Plans',
          'Seating Layouts',
          'Guest Flow',
          'Accessibility Planning',
          'Installation Oversight',
        ],
      },
    ],
    idealFor:
      'Clients seeking a cohesive, professionally designed environment that reflects both purpose and personality.',
    because: 'Because the room begins the conversation before anyone speaks.',
    reel: 'reel-design-stylization',
    gallery: [
      'corp-hull-services-winter-holiday-party-1',
      'corp-hull-services-winter-holiday-party-2',
      'gal-design-3',
    ],
  },
  {
    slug: 'workshops',
    name: 'Workshops & Curated Experiences',
    tagline:
      'Immersive gatherings designed to inspire learning, creativity, and meaningful connection.',
    intro:
      'Learning is shaped not only by the information being shared but by the environment in which people come together.',
    media: 'division-workshops',
    services: [
      {
        title: 'Professional Development',
        items: [
          'Educational Workshops',
          'Leadership Development',
          'Strategic Planning Sessions',
          'Professional Development Events',
        ],
      },
      {
        title: 'Retreats',
        items: ['Executive Retreats', 'Wellness Retreats', 'Creative Retreats', 'Team Retreats'],
      },
      {
        title: 'Community & Engagement',
        items: [
          'Team Building',
          'Networking Events',
          'Community Engagement',
          'Facilitated Discussions',
          'Curated Experiences',
        ],
      },
      {
        title: 'Event Management',
        items: [
          'Planning',
          'Coordination',
          'Speaker Management',
          'Venue Management',
          'Guest Experience',
          'Production Support',
        ],
      },
    ],
    idealFor:
      'Organizations, businesses, educational institutions, and community groups seeking meaningful learning experiences.',
    because:
      'Because the way people gather shapes the relationships, ideas, and leadership that move organizations forward.',
    reel: 'reel-workshops',
    gallery: ['gal-workshops-1', 'gal-workshops-2', 'gal-workshops-3'],
  },
  {
    slug: 'conferences',
    name: 'Conferences & International Events',
    tagline:
      'Purpose driven convenings where ideas are exchanged, partnerships are formed, and meaningful progress begins.',
    intro:
      'Whether bringing together twenty delegates or thousands of attendees, every conference is thoughtfully designed to encourage collaboration, strengthen relationships, and create lasting impact.',
    media: 'division-conferences',
    services: [
      {
        title: 'Conference Planning',
        items: [
          'Conferences',
          'International Conferences',
          'Summits',
          'Symposiums',
          'Congresses',
          'Forums',
          'Annual Meetings',
        ],
      },
      {
        title: 'Government & Corporate Events',
        items: [
          'Government Forums',
          'Stakeholder Engagement',
          'Executive Meetings',
          'Corporate Conferences',
          'Board Retreats',
          'Industry Events',
          'Indigenous Gatherings',
        ],
      },
      {
        title: 'Conference Management',
        items: [
          'Registration Management',
          'Delegate Management',
          'Speaker Management',
          'Program Development',
          'Breakout Session Management',
          'VIP Hospitality',
          'Protocol Coordination',
          'On Site Management',
        ],
      },
      {
        title: 'Sponsorship & Exhibitions',
        items: [
          'Sponsorship Strategy',
          'Sponsor Stewardship',
          'Exhibitor Management',
          'Trade Shows',
          'Partner Activation',
        ],
      },
      {
        title: 'Gala & Special Events',
        items: [
          'Awards Programs',
          'Gala Dinners',
          'Welcome Receptions',
          'Closing Celebrations',
          'Appreciation Events',
        ],
      },
    ],
    idealFor:
      'Governments, corporations, associations, educational institutions, Indigenous organizations, nonprofit organizations, and international partners seeking professionally managed gatherings.',
    because:
      'Because the way leaders gather shapes the conversations, collaborations, and decisions that influence the world.',
    reel: 'reel-conferences',
    gallery: ['gal-conferences-1', 'gal-conferences-2', 'gal-conferences-3'],
  },
  {
    slug: 'fundraising',
    name: 'Fundraising Campaign Events',
    tagline:
      'Experiences that unite communities, celebrate generosity, and create lasting impact through philanthropy.',
    intro:
      'Meaningful fundraising is built on authentic relationships, thoughtful storytelling, and shared purpose.',
    media: 'division-fundraising',
    services: [
      {
        title: 'Fundraising Events',
        items: [
          'Charity Galas',
          'Benefit Dinners',
          'Fundraising Campaigns',
          'Community Fundraisers',
          'Signature Events',
        ],
      },
      {
        title: 'Donor & Sponsor Engagement',
        items: [
          'Sponsorship Development',
          'Sponsor Stewardship',
          'Donor Recognition',
          'Appreciation Events',
          'VIP Experiences',
        ],
      },
      {
        title: 'Campaign Support',
        items: [
          'Auction Planning',
          'Entertainment Booking',
          'Marketing Collaboration',
          'Community Engagement',
          'Volunteer Coordination',
        ],
      },
      {
        title: 'Event Management',
        items: [
          'Planning',
          'Coordination',
          'Production',
          'Logistics',
          'Guest Experience',
          'On Site Management',
        ],
      },
    ],
    idealFor:
      'Charitable organizations, foundations, community organizations, businesses, sponsors, and social impact initiatives seeking to strengthen relationships while inspiring generosity.',
    because: 'Because the way communities gather shapes the future they create together.',
    reel: 'reel-fundraising',
    gallery: ['gal-fundraising-1', 'gal-fundraising-2', 'gal-fundraising-3'],
  },
]

export const experienceBySlug = (slug: string) => experiences.find((e) => e.slug === slug)

/** "How We Work Together" — the service capabilities, word for word. */
export const howWeWorkTogether = {
  intro: [
    'Every client is unique, and so is every gathering.',
    'Whether you require strategic advice, creative leadership, comprehensive planning, or complete event management, we tailor our services to meet your goals, your timeline, and the level of support that best serves your needs.',
  ],
  capabilities: [
    {
      slug: 'consultation-strategy',
      title: 'Consultation & Strategy',
      lead: 'Professional guidance to help shape your vision before planning begins.',
      items: [
        'Vision Development',
        'Creative Consultation',
        'Experience Strategy',
        'Budget Planning',
        'Venue Selection',
        'Accessibility Consultation',
        'Sustainability Consultation',
        'Risk Management',
        'Logistics Planning',
      ],
    },
    {
      slug: 'planning-coordination',
      title: 'Planning & Coordination',
      lead: 'Experienced planning and coordination from concept through completion.',
      items: [
        'Project Management',
        'Event Planning',
        'Budget Management',
        'Timeline Development',
        'Vendor Management',
        'Logistics Coordination',
        'Guest Management',
        'Event Day Coordination',
      ],
    },
    {
      slug: 'design-production',
      title: 'Design & Production',
      lead: 'Creative expertise that transforms ideas into memorable experiences.',
      items: [
        'Creative Direction',
        'Experience Design',
        'Production Planning',
        'Décor & Styling',
        'Environmental Branding',
        'Floral Coordination',
        'Entertainment Coordination',
        'Installation Management',
      ],
    },
    {
      slug: 'full-experience-management',
      title: 'Full Experience Management',
      lead: 'A complete partnership where Sol Vé thoughtfully stewards every aspect of your gathering.',
      body: 'From strategy and planning to design, coordination, production, logistics, and guest experience, we manage every detail with professionalism, creativity, and care so you can focus on the people and purpose at the heart of your gathering.',
      items: [],
    },
  ],
} as const

/** "The Sol Vé Difference" — word for word. */
export const solVeDifference = {
  title: 'The Sol Vé Difference',
  lines: [
    'Many event professionals begin by asking,',
    '"What do you want your event to look like?"',
    'We begin somewhere different.',
    '"How do you want people to feel?"',
    'That single question shapes every recommendation we make, every environment we create, and every experience we steward.',
    'Because beautiful events are admired.',
    'Meaningful gatherings are remembered.',
  ],
} as const

/** "Begin the Conversation" — word for word. */
export const beginTheConversation = {
  title: 'Begin the Conversation',
  body: [
    "Whether you're planning a wedding, celebrating a milestone, producing a conference, strengthening your organization, inspiring generosity, or bringing a community together, every meaningful experience begins with a conversation.",
    "Together, we'll explore your vision, understand what matters most, and create an experience that reflects your purpose, your people, and the memories you hope to leave behind.",
  ],
  close: [
    'Because every meaningful gathering deserves more than exceptional planning.',
    'It deserves thoughtful stewardship.',
  ],
} as const
