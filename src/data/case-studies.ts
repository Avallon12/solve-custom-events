import type { MediaId } from './media'

/**
 * Case studies — Lynea's own documents ("Case Files", September 2026), word
 * for word. A portfolio says what was created; a case study says how Sol Vé
 * thinks, what it was asked to do, and what happened. Each entry renders at
 * /portfolio/<slug> and as a card on the Portfolio page. The two studies still
 * to be written (the Masquerade campaign, Designing Belonging) are added here
 * when her copy arrives; nothing is shown for them until then.
 */

export type StoryPart = { p: string; strong?: boolean } | { quote: string; big?: boolean }

export type CaseStudy = {
  slug: string
  number: string
  title: string
  subtitle: string
  tags: readonly string[]
  featured?: boolean
  /** The opening photograph: people, not décor. */
  hero: MediaId
  /** Eight photographs in the document's order: people → ceremony → detail → interaction → reception → room → behind the scenes → final. */
  images: readonly MediaId[]
  intro: readonly string[]
  introEmphasis: string
  challenge: { paragraphs: readonly string[]; emphasis: string }
  approach: { intro: string; seenLead: string; seen: readonly string[]; behindLead: string; behind: readonly string[]; close: string }
  stories: readonly { heading: string; parts: readonly StoryPart[] }[]
  outcome: { intro: string; items: readonly string[] }
  demonstrates: readonly { title: string; body: string }[]
  invisible: { heading: string; paragraphs: readonly string[] }
  close: { big: string; question: string }
}

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: 'present-in-the-moment',
    number: '01',
    title: 'Present in the Moment',
    subtitle: 'The Invisible Work Behind a Beautiful Wedding',
    tags: ['Wedding Planning', 'Coordination', 'Design Stewardship', 'Contingency Management'],
    featured: true,
    hero: 'wed-113',
    images: ['wed-135', 'wed-043', 'wed-102', 'wed-111', 'wed-110', 'wed-097', 'wed-109', 'wed-138'],
    intro: [
      'A wedding may be remembered through the moments everyone can see.',
      'The work that protects those moments often happens quietly behind them.',
      "Across very different celebrations, Sol Vé Custom Events has been entrusted with translating a couple's vision into an experience, anticipating details before they become problems, responding when circumstances change, and managing the many moving pieces that allow a couple to remain present for their own wedding.",
      'Because beautiful weddings are not simply designed.',
    ],
    introEmphasis:
      'They are supported by thoughtful planning, careful coordination and the ability to respond when the unexpected happens.',
    challenge: {
      paragraphs: [
        'No two weddings present the same circumstances.',
        'For one couple, unexpected weather meant an outdoor ceremony could no longer proceed as planned.',
        'For another, the challenge arrived only three weeks before the wedding when their coordinator was suddenly no longer available.',
        'For others, the work has been quieter: anticipating the small details that influence how an environment functions, how it photographs, how guests move through it and how the couple experiences the day.',
        'Different circumstances require different responses.',
        'The responsibility remains the same:',
      ],
      emphasis: 'Protect the experience.',
    },
    approach: {
      intro: 'Sol Vé approaches wedding planning and coordination from both sides of the experience.',
      seenLead: 'There is the part guests see:',
      seen: ['The setting.', 'The flowers.', 'The ceremony.', 'The tables.', 'The music.', 'The photographs.', 'The celebration.'],
      behindLead: 'And then there is everything happening behind it:',
      behind: ['Timelines.', 'Vendor communication.', 'Set up.', 'Design decisions.', 'Transitions.', 'Contingencies.', 'Problem solving.', 'Coordination.'],
      close:
        'Our role is to bring those two worlds together so naturally that the operational work supports the experience without becoming the experience.',
    },
    stories: [
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
      },
    ],
    outcome: {
      intro: 'Across these celebrations, the circumstances were different, but the desired outcome was remarkably similar:',
      items: [
        'Couples able to participate in their own wedding rather than manage it.',
        'Plans capable of adapting when circumstances changed.',
        'Details considered before they became distractions.',
        'Creative intent protected through execution.',
        'And an experience that felt natural precisely because so much thought had gone into making it that way.',
      ],
    },
    demonstrates: [
      { title: 'Planning & Coordination', body: 'Managing timelines, vendors, logistics, setup, transitions and the interconnected details required to move a wedding from plan to experience.' },
      { title: 'Contingency Management', body: 'Responding calmly and practically when circumstances change while protecting the couple and guest experience.' },
      { title: 'Design Stewardship', body: 'Understanding that creative intent continues through setup, placement, lighting, photography, movement and execution.' },
      { title: 'Rapid Response', body: 'Entering an existing planning process when necessary, identifying priorities and providing structure within a compressed timeline.' },
      { title: 'Client Experience', body: 'Creating the operational space that allows couples and their families to be present for the gathering they came to experience.' },
    ],
    invisible: {
      heading: "The Work You Shouldn't Have to See",
      paragraphs: [
        'A timeline working exactly as intended rarely becomes a wedding story.',
        'Neither does the vendor question answered before it reaches the couple.',
        'Or the detail repositioned before the photographer arrives.',
        'Or the contingency plan implemented before guests understand there was ever another plan.',
        'That is precisely the point.',
        'The most effective event management often becomes invisible.',
        'What remains is the experience.',
      ],
    },
    close: {
      big: 'Be present for it.',
      question: 'Planning a celebration where you want to experience the day rather than manage it?',
    },
  },
]

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug)
