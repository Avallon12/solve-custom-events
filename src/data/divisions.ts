import type { MediaId } from './media'

/**
 * The six divisions. Copy is taken verbatim from the client documents:
 * "Website order and messaging" (newest, governs naming and voice) and
 * "Website Build Instructions v5" (page-level copy blocks).
 *
 * Note: the Manual's forbidden-vocabulary list (9.3) rules out "world-class",
 * so the Conferences headline uses the newest document's line instead of v5's.
 */

export type Division = {
  slug: string
  eyebrow: string
  name: string
  /** One line, used on the divisions grid. */
  oneLine: string
  /** The "Because…" line that closes each division card. */
  because: string
  /** Page H1. */
  headline: string
  subheadline: string
  media: MediaId
  narrative: string[]
  whatWeDo?: { heading: string; body: string[] }
  cards?: { title: string; body: string }[]
  faq?: { q: string; a: string }[]
  proposal: { heading: string; body: string; cta: string }
}

export const divisions: Division[] = [
  {
    slug: 'design-stylization',
    eyebrow: 'Design and Stylization',
    name: 'Design & Stylization',
    oneLine: 'Thoughtfully crafted environments that bring vision, beauty, and purpose together.',
    because: 'Because the room begins the conversation before anyone speaks.',
    headline: 'The room says everything before anyone speaks.',
    subheadline:
      'For fashion shows, galas, branded activations, cultural productions, and everything in between.',
    media: 'division-design-stylization',
    narrative: [
      'Beautiful spaces do more than capture attention. They shape how people experience a gathering.',
      'Our custom design and stylization services transform ideas into thoughtfully curated environments where every detail serves a purpose. From concept development and décor to floral design, furnishings, lighting, and visual storytelling, we create spaces that reflect your vision while enhancing the experience of every guest.',
    ],
    whatWeDo: {
      heading: 'Creative direction from concept to execution.',
      body: [
        'Our design services are customized to your wants and needs. With your thoughts and dreams, we bring your vision to life by sorting through ideas, colour schemes and themes. We work with you to create a unique perspective of your vision.',
        "Sol Vé's creative direction, artistic concept, and visual execution are entirely ours. We do not hand off. We see it through. All artistic IP, design concepts, and creative work produced by Sol Vé Custom Events remains our sole property.",
      ],
    },
    cards: [
      { title: 'Concept to execution', body: 'We do not hand off. We see it through.' },
      {
        title: 'Cultural fluency',
        body: 'We design within and across cultural traditions with genuine respect and artistry.',
      },
      {
        title: 'Artistic ownership',
        body: 'All creative concepts, design ideas, and visual direction belong to Sol Vé.',
      },
    ],
    proposal: {
      heading: 'Ready to build something unforgettable?',
      body: 'Tell us what you are imagining and we will show you what is possible.',
      cta: 'Tell Us Your Vision',
    },
  },
  {
    slug: 'weddings',
    eyebrow: 'Weddings',
    name: 'Weddings',
    oneLine: 'Celebrations that honour love, family, culture, and the beginning of a shared future.',
    because: 'Because the way we gather becomes the memories we carry for a lifetime.',
    headline: 'The day you have imagined deserves a producer who can make it real.',
    subheadline:
      'Luxury, multicultural, and destination weddings designed to belong in a magazine and live in a memory.',
    media: 'division-weddings',
    narrative: [
      'A wedding is more than a celebration. It is the beginning of a family’s story.',
      'We create timeless wedding experiences that honour love, family, culture, and tradition with thoughtful planning, genuine hospitality, and intentional design. Every celebration is crafted to reflect the people at its heart, creating memories that will be treasured for generations.',
    ],
    whatWeDo: {
      heading: 'From the first conversation to the last dance.',
      body: [
        'Our custom designs, creations, rentals and complimentary vendors ensure you have the unique event you want and deserve. From engagements, elopements, weddings, to anniversary parties, we assist you in the event that is defined by you.',
        'We are based in Calgary, Alberta, but organize and travel to worldwide destinations to ensure you have the personalized event services you deserve.',
      ],
    },
    faq: [
      {
        q: 'When should you hire an event planner?',
        a: 'The best answer is as soon as possible. Event planners are great resources that can help you with vendor and location settings. In addition, they often save clients both financially and time.',
      },
      {
        q: 'Are you able to do destination events and will the planner attend them personally?',
        a: 'Yes, we do and yes they can. We offer a variety of planning and coordination services both within Canada, United States, and around the world. With global connections and our hands-on approach, we are able to ensure your event is spectacular in any location.',
      },
      {
        q: 'Can you help me surprise my partner when I propose marriage?',
        a: 'Absolutely! Surprise engagements are so exciting to put together. Whether it is setting the mood or full design and facilitation, the sky is literally the limit.',
      },
    ],
    proposal: {
      heading: 'Request a proposal',
      body: 'Every wedding we produce begins with a conversation. Tell us your vision and we will build a custom proposal tailored to your event, your style, and your budget.',
      cta: 'Request a Wedding Proposal',
    },
  },
  {
    slug: 'signature-moments',
    eyebrow: 'Signature Moments',
    name: 'Signature Moments',
    oneLine: "Bespoke experiences created to celebrate life's defining milestones.",
    because: "Because life's most meaningful moments deserve to be experienced with intention.",
    headline: 'The moment that changes everything deserves to be designed for exactly that.',
    subheadline:
      'For proposals, anniversaries, intimate celebrations, and every milestone that deserves to be remembered perfectly.',
    media: 'division-signature-moments',
    narrative: [
      'Some occasions deserve more than a celebration. They deserve to become unforgettable memories.',
      "Whether marking a milestone, anniversary, gala, private celebration, or life's defining moments, we create bespoke experiences that reflect your story and leave a lasting impression on everyone who shares them.",
    ],
    whatWeDo: {
      heading: 'The same artistry, at the most personal scale.',
      body: [
        'Whether setting the mood or full design and facilitation, the sky is literally the limit. Surprise proposals, anniversary celebrations, intimate gatherings: we bring the same artistry and precision to the most personal moments as we do to the grandest events.',
      ],
    },
    proposal: {
      heading: 'Request a proposal',
      body: 'Tell us about your moment and we will build a custom proposal tailored to what you are envisioning.',
      cta: 'Request a Proposal',
    },
  },
  {
    slug: 'workshops',
    eyebrow: 'Workshops and Curated Experiences',
    name: 'Workshops & Curated Experiences',
    oneLine:
      'Immersive gatherings designed to inspire learning, creativity, and meaningful connection.',
    because:
      'Because the way people gather shapes the relationships, ideas, and leadership that move organizations forward.',
    headline: 'The best ideas happen when people feel restored enough to have them.',
    subheadline:
      'For industry professionals, portfolio development, destination training experiences, and curated wellness retreats that inspire as much as they restore.',
    media: 'division-workshops',
    narrative: [
      'The most meaningful learning happens when people feel inspired to participate.',
      'We design immersive workshops and curated experiences that encourage creativity, collaboration, wellness, discovery, and authentic human connection. Every experience is thoughtfully developed to foster engagement, meaningful conversation, and lasting impact.',
    ],
    cards: [
      {
        title: 'Portfolio Development Workshops',
        body: 'For industry professionals seeking structured programs to develop and elevate their creative portfolios.',
      },
      {
        title: 'Wellness Retreats',
        body: 'For individuals and groups seeking a curated experience that restores mind, body, and creative spirit.',
      },
      {
        title: 'Corporate Retreats',
        body: 'For teams seeking a meaningful offsite experience that builds connection and resets perspective.',
      },
      {
        title: 'Destination Training Experiences',
        body: 'For professionals and organizations seeking immersive learning in extraordinary settings worldwide.',
      },
    ],
    proposal: {
      heading: 'Request a proposal',
      body: 'Tell us about your group, your goals, and your dream setting and we will build a custom experience around you.',
      cta: 'Request a Proposal',
    },
  },
  {
    slug: 'conferences',
    eyebrow: 'Conferences and International Events',
    name: 'Conferences & International Events',
    oneLine:
      'Purpose-driven convenings where ideas are exchanged, partnerships are formed, and meaningful progress begins.',
    because:
      'Because the way leaders gather shapes the conversations, collaborations, and decisions that influence the world.',
    headline: 'The way leaders gather influences what becomes possible together.',
    subheadline:
      'From executive retreats and industry conferences to international summits and multi-day experiences.',
    media: 'division-conferences',
    narrative: [
      'From executive retreats and industry conferences to international summits and multi-day experiences, we create environments where ideas become partnerships, conversations become collaboration, and shared purpose inspires meaningful progress.',
    ],
    whatWeDo: {
      heading: 'Precision and artistry, at every scale.',
      body: [
        'Our custom event design and management services extend to conferences, corporate functions, and international productions. We handle every aspect from the initial consultation to the final execution, ensuring your event reflects your vision with precision and care.',
        'We work with established audio visual production partners for international events. We are based in Calgary but travel to worldwide destinations to produce events that are spectacular in any location.',
      ],
    },
    proposal: {
      heading: 'Request a proposal',
      body: 'Tell us who you are convening and what you need the room to accomplish, and we will build the experience around it.',
      cta: 'Request a Proposal',
    },
  },
  {
    slug: 'fundraising',
    eyebrow: 'Fundraising Campaign Events',
    name: 'Fundraising Campaign Events',
    oneLine:
      'Experiences that unite communities, celebrate generosity, and create lasting impact through philanthropy.',
    because: 'Because the way communities gather shapes the future they create together.',
    headline: 'Art has always been the most powerful instrument for social change.',
    subheadline:
      'For campaigns that use beauty, culture, and community to make people show up for the causes that matter most.',
    media: 'division-fundraising',
    narrative: [
      'Celebration has the power to strengthen communities.',
      'We believe fundraising should inspire connection as much as generosity. By thoughtfully bringing together charitable organizations, businesses, artists, sponsors, volunteers, and communities, we create experiences that celebrate purpose, encourage collaboration, and help build sustainable support for causes that create lasting social impact.',
    ],
    whatWeDo: {
      heading: 'Rooms that change the people inside them.',
      body: [
        'Sol Vé produces multi-event fundraising campaigns that use immersive performance, art, and cultural celebration as the primary tool for community engagement and charitable impact. We create rooms where people who would not normally sit together find themselves changed by the experience.',
      ],
    },
    proposal: {
      heading: 'Request a proposal',
      body: 'Tell us about the cause you are championing and the community you want to reach and we will build a campaign around it.',
      cta: 'Request a Proposal',
    },
  },
]

export const divisionBySlug = (slug: string) => divisions.find((d) => d.slug === slug)

/** Mystic Moonlight Masquerade — verified against the official Eventbrite listing. */
export const mysticCampaign = {
  title: 'Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026',
  presentedBy: 'Proudly presented by Sol Vé Custom Events',
  theme: 'Silk Roads to Discovery',
  themeDescription:
    'A celebration of the weaving together of the fabrics of societies: those that brought us dance, music, spices, foods and fashion.',
  description:
    'The Mystic Moonlight Masquerade Campaign is an immersive charity masquerade event in Calgary, Alberta, featuring a wide range of performers, live DJs, visual art installations, and a multi-tier gala experience, with 100% of net proceeds supporting marginalized communities.',
  body: [
    'At the heart of the Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign is a commitment to supporting community-rooted charities whose work strengthens the fabric of society. These organizations are often closest to the people they serve, offering direct care, education, advocacy, and support where it is needed most. By supporting them, we amplify their impact, foster healing, and build pathways toward a more compassionate and inclusive future.',
    'Throughout history, art has been a powerful voice for the underrepresented, bringing visibility to struggle, affirming identity, and inspiring movements for justice. In that same spirit, this Gala campaign merges artistry with advocacy, using creativity and celebration to unite us in support of those working tirelessly for change.',
  ],
  stats: ['Goal: $200,000', '10 Non-Profits and Charities', 'Multiple events', '1 Movement'],
  beneficiaries: ['Rowan House Society', 'redM', 'Phoenix Foundation', 'WEDO Canada'],
  events: [
    'Mystic Threads: A Rococo Reimagining',
    'Mystic Mingle: A Charitable Showcase and Market',
    'Mystic Menagerie: VIP Sponsor Soirée',
    'Mystic Moonlight Masquerade Gala Ball: October 23, 2026, Fairmont Palliser',
  ],
} as const
