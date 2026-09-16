import type { MediaId } from './media'

/**
 * Case studies — Lynea's own documents ("Case Files", September 2026), word
 * for word. A portfolio says what was created; a case study says how Sol Vé
 * thinks, what it was asked to do, and what happened. Each entry renders at
 * /portfolio/<slug> and as a card on the Portfolio page. Photographs follow
 * the sequence each document asks for, placed after the sections they belong
 * to. Inline **bold** and _italic_ are hers.
 */

export type Part =
  | { p: string; strong?: boolean; display?: boolean }
  | { quote: string; big?: boolean }
  | { lead?: string; list: readonly string[] }
  | { columns: readonly { lead: string; items: readonly string[] }[] }

export type CaseSection = {
  heading?: string
  parts: readonly Part[]
  /** One, two or three photographs shown after the section. */
  images?: readonly MediaId[]
  film?: MediaId
}

export type CaseStudy = {
  slug: string
  number: string
  title: string
  subtitle: string
  place?: string
  tags: readonly string[]
  featured?: boolean
  /** Search and social description. */
  summary: string
  /** The opening photograph: people, not décor. */
  hero: MediaId
  sections: readonly CaseSection[]
  demonstratesHeading: string
  demonstrates: readonly { title: string; body: string }[]
  /** A section after "what this demonstrates", where the document has one. */
  coda?: CaseSection
  close: { lines: readonly string[]; question: string; cta: 'primary' | 'secondary' }
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: 'present-in-the-moment',
    number: '01',
    title: 'Present in the Moment',
    subtitle: 'The Invisible Work Behind a Beautiful Wedding',
    tags: ['Wedding Planning', 'Coordination', 'Design Stewardship', 'Contingency Management'],
    summary:
      'The Invisible Work Behind a Beautiful Wedding. A wedding may be remembered through the moments everyone can see. The work that protects those moments often happens quietly behind them.',
    hero: 'wed-113',
    sections: [
      {
        parts: [
          { p: 'A wedding may be remembered through the moments everyone can see.' },
          { p: 'The work that protects those moments often happens quietly behind them.' },
          { p: "Across very different celebrations, Sol Vé Custom Events has been entrusted with translating a couple's vision into an experience, anticipating details before they become problems, responding when circumstances change, and managing the many moving pieces that allow a couple to remain present for their own wedding." },
          { p: 'Because beautiful weddings are not simply designed.' },
          { p: 'They are supported by thoughtful planning, careful coordination and the ability to respond when the unexpected happens.', display: true },
        ],
        images: ['wed-135'],
      },
      {
        heading: 'The Challenge',
        parts: [
          { p: 'No two weddings present the same circumstances.' },
          { p: 'For one couple, unexpected weather meant an outdoor ceremony could no longer proceed as planned.' },
          { p: 'For another, the challenge arrived only three weeks before the wedding when their coordinator was suddenly no longer available.' },
          { p: 'For others, the work has been quieter: anticipating the small details that influence how an environment functions, how it photographs, how guests move through it and how the couple experiences the day.' },
          { p: 'Different circumstances require different responses.' },
          { p: 'The responsibility remains the same:' },
          { p: 'Protect the experience.', display: true },
        ],
        images: ['wed-043', 'wed-102'],
      },
      {
        heading: 'Our Approach',
        parts: [
          { p: 'Sol Vé approaches wedding planning and coordination from both sides of the experience.' },
          {
            columns: [
              { lead: 'There is the part guests see:', items: ['The setting.', 'The flowers.', 'The ceremony.', 'The tables.', 'The music.', 'The photographs.', 'The celebration.'] },
              { lead: 'And then there is everything happening behind it:', items: ['Timelines.', 'Vendor communication.', 'Set up.', 'Design decisions.', 'Transitions.', 'Contingencies.', 'Problem solving.', 'Coordination.'] },
            ],
          },
          { p: 'Our role is to bring those two worlds together so naturally that the operational work supports the experience without becoming the experience.' },
        ],
        images: ['wed-111'],
      },
      {
        heading: 'When the Plan Changes',
        parts: [
          { p: 'For one celebration, an outdoor ceremony was threatened by adverse weather.' },
          { p: 'The ceremony needed to move indoors.' },
          { p: 'That meant more than identifying another location. The physical environment, timing, vendors, setup and guest experience all had to transition while protecting the intention of the ceremony itself.' },
          { p: 'Sol Vé coordinated the move and the celebration continued.' },
          { p: 'The couple later described the transition as happening “without a hiccup.”' },
          { p: 'More importantly, they described how the overall experience made them feel:' },
          { quote: 'We truly felt like guests at our own wedding.', big: true },
          { p: 'That is the measure that matters most.' },
        ],
        images: ['wed-110'],
      },
      {
        heading: 'When Help Is Needed Unexpectedly',
        parts: [
          { p: 'Another couple faced a very different challenge.' },
          { p: 'Just three weeks before their wedding, they unexpectedly found themselves without their coordinator.' },
          { p: 'At a point when most couples expect plans to be coming together, they instead needed someone capable of stepping into an existing event, understanding what had already been established, identifying what remained outstanding and helping carry the celebration through execution.' },
          { p: 'Sol Vé stepped in.' },
          { p: 'The work included coordination and support with décor while navigating a compressed timeline and an event that had already been substantially planned.' },
          { p: 'Sometimes excellent event management begins months in advance.' },
          { p: 'Sometimes it begins when someone needs you.' },
          { p: 'The standard of care should not change.' },
        ],
        images: ['wed-097'],
      },
      {
        heading: 'Anticipating the Details',
        parts: [
          { p: 'Not every challenge announces itself.' },
          { p: 'Some of the most important decisions in an event are remarkably small.' },
          { p: 'The placement of an object.' },
          { p: 'The way a table is positioned.' },
          { p: 'What appears behind a photograph.' },
          { p: 'Where a guest naturally moves.' },
          { p: 'How one element affects another.' },
          { p: "Clients and creative collaborators have specifically recognized Sol Vé's attention to these details, including anticipating considerations that influence how an event will ultimately photograph." },
          { p: 'That level of observation is part of our design philosophy.' },
          { p: 'We do not see planning, production and design as separate experiences.' },
          { p: 'Guests experience all of them at once.', strong: true },
        ],
        images: ['wed-109'],
      },
      {
        heading: 'The Outcome',
        parts: [
          { p: 'Across these celebrations, the circumstances were different, but the desired outcome was remarkably similar:' },
          {
            list: [
              'Couples able to participate in their own wedding rather than manage it.',
              'Plans capable of adapting when circumstances changed.',
              'Details considered before they became distractions.',
              'Creative intent protected through execution.',
              'And an experience that felt natural precisely because so much thought had gone into making it that way.',
            ],
          },
        ],
      },
    ],
    demonstratesHeading: 'What This Work Demonstrates',
    demonstrates: [
      { title: 'Planning & Coordination', body: 'Managing timelines, vendors, logistics, setup, transitions and the interconnected details required to move a wedding from plan to experience.' },
      { title: 'Contingency Management', body: 'Responding calmly and practically when circumstances change while protecting the couple and guest experience.' },
      { title: 'Design Stewardship', body: 'Understanding that creative intent continues through setup, placement, lighting, photography, movement and execution.' },
      { title: 'Rapid Response', body: 'Entering an existing planning process when necessary, identifying priorities and providing structure within a compressed timeline.' },
      { title: 'Client Experience', body: 'Creating the operational space that allows couples and their families to be present for the gathering they came to experience.' },
    ],
    coda: {
      heading: "The Work You Shouldn't Have to See",
      parts: [
        { p: 'A timeline working exactly as intended rarely becomes a wedding story.' },
        { p: 'Neither does the vendor question answered before it reaches the couple.' },
        { p: 'Or the detail repositioned before the photographer arrives.' },
        { p: 'Or the contingency plan implemented before guests understand there was ever another plan.' },
        { p: 'That is precisely the point.' },
        { p: 'The most effective event management often becomes invisible.' },
        { p: 'What remains is the experience.' },
      ],
      images: ['wed-138'],
    },
    close: {
      lines: ['Be present for it.'],
      question: 'Planning a celebration where you want to experience the day rather than manage it?',
      cta: 'primary',
    },
  },
  {
    slug: 'mystic-moonlight-masquerade',
    number: '02',
    title: 'Mystic Moonlight Masquerade',
    subtitle: 'When Artistry, Advocacy and Community Gather in the Same Room',
    place: 'Calgary, Alberta',
    tags: ['Fundraising Strategy', 'Immersive Production', 'Community Engagement'],
    featured: true,
    summary:
      'When Artistry, Advocacy and Community Gather in the Same Room. The Mystic Moonlight Masquerade was conceived and produced by Sol Vé Custom Events as an immersive fundraising campaign bringing community, business, artists, performers, supporters and nonprofit organizations together through shared experience.',
    hero: 'fund-001',
    sections: [
      {
        heading: 'The Idea',
        parts: [
          { p: 'What if a fundraising event could be more than a room, a dinner and an ask?' },
          { p: 'What if artistry could invite people into a story, community organizations could share that story together, and the experience itself could create the conditions for connection?' },
          { p: 'The Mystic Moonlight Masquerade was conceived and produced by Sol Vé Custom Events as an immersive fundraising campaign bringing community, business, artists, performers, supporters and nonprofit organizations together through shared experience.' },
          { p: 'It was designed not simply as an event, but as a reason to gather.' },
        ],
        film: 'reel-fundraising',
        images: ['fund-039', 'fund-016'],
      },
      {
        heading: 'The Challenge',
        parts: [
          { p: 'Fundraising events carry multiple responsibilities at once.' },
          { p: 'They must create an experience guests value while respecting the purpose that brought them together. Sponsors require meaningful participation. Community organizations require visibility. Performers and creative partners need space to contribute authentically. Production, hospitality, communications, fundraising and guest experience must operate as one interconnected system.' },
          { p: 'The challenge was therefore not simply to produce a gala.' },
          { p: 'It was to create an environment where **artistry and purpose could strengthen one another.**' },
        ],
        images: ['fund-029'],
      },
      {
        heading: 'Our Approach',
        parts: [
          { p: 'Sol Vé developed the campaign from concept through execution, bringing together event strategy, creative direction, fundraising architecture, immersive design, entertainment, stakeholder engagement, sponsorship, auction development, communications, guest experience and production.' },
          { p: 'Rather than treating each component as a separate element, the experience was designed as a whole.' },
          { p: 'Arrival established anticipation.' },
          { p: 'Design created atmosphere.' },
          { p: 'Performance created energy.' },
          { p: 'Hospitality created connection.' },
          { p: 'Community participation established purpose.' },
          { p: 'And celebration gave people a reason to remain together.' },
        ],
        images: ['fund-047', 'fund-023'],
      },
      {
        heading: 'Designing Collaboration',
        parts: [
          { p: 'The campaign depended on more than production.' },
          { p: 'It depended on relationships.' },
          { p: 'Community organizations, businesses, artists, performers, volunteers, sponsors and guests each entered the experience from a different perspective.' },
          { p: 'Our responsibility was to create the conditions in which those contributions could become part of something shared.' },
          { p: 'That philosophy was reflected by participating collaborators.' },
          { p: 'Quora Strings described an environment in which their artistry was respected and their ideas were heard and valued.' },
          { p: 'Community participants spoke about inclusivity, giving back, respect, honesty and trust.' },
          { p: 'Others reflected on the ability of events to strengthen community while drawing attention to important causes.' },
          { p: 'Different perspectives. Different contributions. One gathering.' },
        ],
        images: ['fund-017'],
      },
      {
        heading: 'The Design Philosophy',
        parts: [
          { p: 'Beauty was the invitation. Purpose was the reason to gather.', display: true },
          { p: 'For Sol Vé, immersive design is not decoration added after an event has been planned.' },
          { p: 'Environment affects how people arrive.' },
          { p: 'How they interact.' },
          { p: 'How long they stay.' },
          { p: 'What they remember.' },
          { p: 'And, ultimately, how they connect with the purpose that brought them together.' },
          { p: 'The Mystic Moonlight Masquerade allowed those principles to be explored at scale.' },
        ],
        images: ['fund-014'],
      },
      {
        heading: 'Beyond a Single Evening',
        parts: [
          { p: 'The campaign developed as a series of experiences rather than a single isolated event.' },
          { p: 'That format created opportunities for different forms of participation, artistic expression, community engagement and relationship building while maintaining a recognizable identity across the larger campaign.' },
          { p: "It also demonstrated an important principle within Sol Vé's approach to fundraising:" },
          { p: 'A gathering can support a cause while also strengthening the community around it.', display: true },
        ],
        images: ['fund-042', 'fund-061', 'fund-048'],
      },
    ],
    demonstratesHeading: 'What This Project Demonstrates',
    demonstrates: [
      { title: 'Original Concept Development', body: 'Building an event property from an initial idea into a recognizable experiential campaign.' },
      { title: 'Fundraising Event Strategy', body: 'Integrating fundraising objectives into the broader guest experience.' },
      { title: 'Multi Stakeholder Coordination', body: 'Bringing community organizations, businesses, performers, volunteers, sponsors and guests into one operational environment.' },
      { title: 'Creative Direction & Production', body: 'Connecting environment, performance, hospitality, storytelling and guest experience.' },
      { title: 'Community Engagement', body: 'Creating meaningful opportunities for organizations and participants to contribute rather than simply attend.' },
      { title: 'Immersive Experience Design', body: 'Using the physical and emotional environment intentionally to influence how people gather.' },
    ],
    close: {
      lines: ['An event can raise funds.', 'A gathering can build relationships.', 'The most meaningful experiences have the potential to do both.'],
      question: 'Planning a gathering where experience and purpose need to work together?',
      cta: 'primary',
    },
  },
  {
    slug: 'designing-belonging',
    number: '03',
    title: 'Designing Belonging',
    subtitle: 'Expanding Who Gets to See Themselves in Celebration',
    tags: ['Creative Direction', 'Inclusive Experience Design', 'Editorial'],
    summary:
      'Expanding Who Gets to See Themselves in Celebration. Long before belonging became common language within the events industry, Sol Vé Custom Events was exploring that question through creative collaboration, editorial styling and experiential design.',
    hero: 'dwh-008',
    sections: [
      {
        heading: 'The Question',
        parts: [
          { p: 'Who gets to see themselves reflected in the images we associate with celebration?' },
          { p: 'Long before belonging became common language within the events industry, Sol Vé Custom Events was exploring that question through creative collaboration, editorial styling and experiential design.' },
          { p: 'Projects including _Painted Love_, _Our New Old Fashioned Love_ and _Upcycled Grunge_ provided opportunities to challenge conventional visual expectations and explore different expressions of identity, relationship, environment and celebration.' },
        ],
        images: ['dwh-001'],
      },
      {
        heading: 'The Approach',
        parts: [
          { p: 'Each project began with an idea rather than a template.' },
          { p: 'Sol Vé worked collaboratively with photographers, models, designers, florists, stationers, jewellers, beauty professionals, attire partners and other creative contributors to build complete visual narratives.' },
          { p: 'The objective was not simply to create something beautiful.' },
          { p: 'It was to create something intentional.' },
          { p: 'Something with a point of view.' },
          { p: 'And something capable of expanding the visual language traditionally associated with weddings and celebration.' },
        ],
      },
      {
        heading: 'Painted Love',
        parts: [
          { p: 'Set against the landscape of Waterton National Park, _Painted Love_ brought together art, fashion, florals, jewellery, stationery, cake design and environmental styling within a distinctly expressive editorial concept.' },
          { p: 'The project was subsequently featured by **Dancing With Her**.' },
        ],
        images: ['dwh-005', 'dwh-007'],
      },
      {
        heading: 'Our New Old Fashioned Love',
        parts: [
          { p: 'This project reconsidered the visual language of traditional romance through a contemporary lens.' },
          { p: 'Through attire, styling, décor, florals and creative collaboration, familiar elements were reinterpreted to create an experience that felt simultaneously recognizable and distinctly its own.' },
          { p: 'The work appeared in **Bridal Fantasy Magazine**.' },
        ],
        images: ['mv-009', 'mv-002', 'feat-001'],
      },
      {
        heading: 'Upcycled Grunge',
        parts: [
          { p: 'Created at Claresholm Industrial Airport, _Upcycled Grunge_ moved intentionally away from conventional wedding environments.' },
          { p: 'Industrial surroundings, fashion, florals, custom details and collaborative styling were used to explore contrast and challenge assumptions about what a wedding editorial was expected to look like.' },
          { p: 'The project was also featured by **Bridal Fantasy**.' },
        ],
        images: ['feature-bridal-fantasy-2', 'feature-bridal-fantasy-1'],
      },
      {
        heading: 'From Representation to Belonging',
        parts: [
          { p: 'These projects helped shape a principle that continues to influence Sol Vé today.' },
          { p: 'Inclusion is not something that can simply be added to an event after the important decisions have already been made.' },
          { p: 'It influences who is represented.' },
          { p: 'Who is considered.' },
          { p: 'How environments are designed.' },
          { p: 'How people are welcomed.' },
          { p: 'And whether those entering a gathering feel that the experience was created with them in mind.' },
          { p: 'Today, that philosophy extends well beyond weddings and editorial work.' },
          { p: 'It informs how Sol Vé approaches celebrations, workshops, fundraising events, conferences and international convenings.' },
          { p: 'Because belonging is not a demographic exercise.' },
          { p: 'It is an experience.', display: true },
        ],
      },
    ],
    demonstratesHeading: 'What This Work Demonstrates',
    demonstrates: [
      { title: 'Creative Direction', body: 'Developing a distinct narrative and carrying it across the complete visual environment.' },
      { title: 'Collaborative Production', body: 'Bringing independent creative professionals together around a shared concept.' },
      { title: 'Inclusive Experience Design', body: 'Considering representation and belonging as part of the creative process.' },
      { title: 'Environmental Storytelling', body: 'Using location, objects, texture, fashion, florals and visual composition to communicate an idea.' },
      { title: 'Brand Evolution', body: 'Translating principles first explored through creative work into a broader philosophy for how people gather.' },
    ],
    close: {
      lines: ['Designing belonging begins before anyone enters the room.'],
      question: 'Looking for an experience designed around the people who will inhabit it?',
      cta: 'secondary',
    },
  },
]

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug)
