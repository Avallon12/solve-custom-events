/**
 * MEDIA REGISTRY — every image and video slot on the site, in one place.
 *
 * The photography here was taken from solvecustomevents.com (GoDaddy /
 * img1.wsimg.com), re-encoded to WebP at 1600–2000px and placed in
 * `public/media/`. Only Sol Vé's own event photography was used.
 *
 * DELIBERATELY EXCLUDED: the entire "Matt & Ann: A Touch of Magic" gallery and
 * several others carry a visible "Faithful" photographer watermark. Manual 6.2
 * forbids images with visible watermarks, so none of them are here.
 *
 * CREDITS. Six files on the old site name their photographer in the filename
 * (…_2019_MikeHopkinsPhotography.jpg) and are credited below. The rest carry no
 * attribution anywhere on the old site, so they are marked `creditPending` —
 * they render, but with a visible "photographer credit to be confirmed" line
 * beneath them. Lynea's direction was "ALL art and photos must have a credited
 * artist (If it is not known, please ask)" — so this asks, in public, until the
 * names arrive. Replace `creditPending: true` with `credit: 'by …'` as each
 * name is confirmed.
 *
 * To swap any photograph: drop a WebP in public/media/ and change `src`.
 * To use a reel instead: set `video: '/media/clip.mp4'`. Luxury footage only.
 */

export type MediaTone = 'dark' | 'warm' | 'light'

export type MediaSlot = {
  /** Human name shown on the placeholder and in the asset checklist. */
  label: string
  /** Descriptive alt text — never empty, never a filename (Manual 8.2). */
  alt: string
  /** Placeholder colourway, used only when no asset is set. */
  tone: MediaTone
  src?: string
  /** Photographer or artist. */
  credit?: string
  /** True when the photograph is in use but its photographer is unconfirmed. */
  creditPending?: boolean
  /** Optional caption — event name and year. */
  caption?: string
  /** Set instead of `src` for a reel. Muted, looping. */
  video?: string
}

const CREDIT_MIKE_HOPKINS = 'by Mike Hopkins Photography, 2019'

export const media = {
  'home-hero': {
    label: 'Homepage hero',
    alt: 'A Sol Vé ballroom set beneath blossom trees, tables dressed and waiting for guests',
    tone: 'dark',
    src: '/media/home-hero.webp',
    creditPending: true,
  },
  // Slots below marked "Photo Guide" are assigned by Lynea's
  // "Exact Banner-by-Banner Photo Guide" and should not be swapped without her.
  'home-philosophy': {
    label: 'Our philosophy',
    alt: 'A mural of an eye surrounded by butterflies, flowers and mountains',
    tone: 'warm',
    src: '/media/home-philosophy.webp',
    creditPending: true,
  },
  'foundation-hero': {
    label: 'Foundation hero',
    alt: 'A Sol Vé ballroom prepared with intention before the first guest arrives',
    tone: 'dark',
    src: '/media/foundation-hero.webp',
    creditPending: true,
  },
  'foundation-began': {
    label: 'Where it began',
    alt: 'White garden roses and trailing greenery running the length of a Sol Vé table',
    tone: 'warm',
    src: '/media/foundation-began.webp',
    credit: CREDIT_MIKE_HOPKINS,
  },
  'commitments-hero': {
    label: 'Commitments hero',
    alt: 'Cultural dancers performing for guests in the centre of a Sol Vé celebration',
    tone: 'dark',
    src: '/media/commitments-hero.webp',
    creditPending: true,
  },
  'experiences-hero': {
    label: 'What we create hero',
    alt: 'A gold mirrored table dressed with white hydrangea and candlelight',
    tone: 'dark',
    src: '/media/experiences-hero.webp',
    creditPending: true,
  },
  'division-design-stylization': {
    label: 'Division — Design & Stylization',
    alt: 'A dessert table beneath a blush and gold balloon installation, dressed with gold candelabra',
    tone: 'warm',
    src: '/media/division-design-stylization.webp',
    creditPending: true,
  },
  'division-weddings': {
    label: 'Division — Weddings',
    alt: 'Two wedding rings resting together on a heart-shaped stone',
    tone: 'light',
    src: '/media/division-weddings.webp',
    creditPending: true,
  },
  'division-signature-moments': {
    label: 'Division — Signature Moments',
    alt: 'A celebration table dressed in red, blush and gold for a milestone occasion',
    tone: 'warm',
    src: '/media/division-signature-moments.webp',
    creditPending: true,
  },
  'division-workshops': {
    label: 'Division — Workshops & Curated Experiences',
    alt: 'A ceremony staged within stone ruins, dressed with candles and drapery',
    tone: 'light',
    src: '/media/division-workshops.webp',
    creditPending: true,
  },
  'division-conferences': {
    label: 'Division — Conferences & International Events',
    alt: 'A white gazebo on a Caribbean shoreline, set for an international gathering',
    tone: 'dark',
    src: '/media/division-conferences.webp',
    creditPending: true,
  },
  'division-fundraising': {
    label: 'Division — Fundraising Campaign Events',
    alt: 'Long banquet tables beneath timber beams and violet light, set for a gala',
    tone: 'warm',
    src: '/media/division-fundraising.webp',
    creditPending: true,
  },
  'founder-hero': {
    label: 'Founder page hero',
    alt: 'A Sol Vé room photographed in warm light as the evening begins',
    tone: 'dark',
    src: '/media/founder-hero.webp',
    creditPending: true,
  },
  'founder-portrait': {
    label: 'Founder portrait — Lynea',
    alt: 'Lynea Vaugeois Hetherington, Founder and Creative Director of Sol Vé Custom Events',
    tone: 'warm',
    src: '/media/founder-portrait.webp',
    creditPending: true,
  },
  'founder-second': {
    label: 'Founder — stewardship',
    alt: 'Lynea photographed in dappled afternoon light between events',
    tone: 'light',
    src: '/media/founder-second.webp',
    creditPending: true,
  },
  'portfolio-claudia-ali': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'A bride and groom together, her veil carried out across the frame',
    tone: 'light',
    src: '/media/portfolio-claudia-ali.webp',
    creditPending: true,
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-florals': {
    label: 'Floral Design',
    alt: 'A tall arrangement of white roses and tropical foliage on a dressed table',
    tone: 'light',
    src: '/media/portfolio-florals.webp',
    creditPending: true,
    caption: 'Floral Design',
  },

  // ── Portfolio, per the Exact Banner-by-Banner Photo Guide ──────────────────
  'portfolio-mmm': {
    label: 'Portfolio — MMM Campaign',
    alt: 'Performers with illuminated fans and hoops at the Mystic Moonlight Masquerade',
    tone: 'dark',
    src: '/media/portfolio-mmm.webp',
    creditPending: true,
    caption: 'Mystic Moonlight Masquerade Campaign',
  },
  'portfolio-mingle': {
    label: 'Portfolio — Mystic Mingle',
    alt: 'Lion dancers in yellow and red performing at Mystic Mingle',
    tone: 'warm',
    src: '/media/portfolio-mingle.webp',
    creditPending: true,
    caption: 'Mystic Mingle',
  },
  'portfolio-threads': {
    label: 'Portfolio — Mystic Threads',
    alt: 'An illuminated plumed masquerade headpiece from Mystic Threads',
    tone: 'dark',
    src: '/media/portfolio-threads.webp',
    creditPending: true,
    caption: 'Mystic Threads',
  },
  'portfolio-vogue': {
    label: 'Portfolio — The World In Vogue',
    alt: 'The Calgary skyline at dusk',
    tone: 'dark',
    src: '/media/portfolio-vogue.webp',
    creditPending: true,
    caption: 'The World In Vogue',
  },
  'portfolio-weddings': {
    label: 'Portfolio — Weddings Division',
    alt: 'A couple walking together through a white and ivory wedding reception',
    tone: 'light',
    src: '/media/portfolio-weddings.webp',
    creditPending: true,
    caption: 'Weddings Division',
  },
  'portfolio-destination': {
    label: 'Portfolio — Destination Weddings',
    alt: 'A couple embracing on the shore of a mountain lake',
    tone: 'light',
    src: '/media/portfolio-destination.webp',
    creditPending: true,
    caption: 'Destination Weddings',
  },
  'portfolio-multicultural': {
    label: 'Portfolio — Multicultural Weddings',
    alt: 'A ceremonial book displayed on a gold stand at a multicultural wedding',
    tone: 'warm',
    src: '/media/portfolio-multicultural.webp',
    creditPending: true,
    caption: 'Multicultural Weddings',
  },
  'portfolio-signature': {
    label: 'Portfolio — Signature Moments',
    alt: 'A celebration table dressed in red, blush and gold for a milestone occasion',
    tone: 'warm',
    src: '/media/portfolio-signature.webp',
    creditPending: true,
    caption: 'Signature Moments',
  },
  'portfolio-workshops': {
    label: 'Portfolio — Workshops & Curated Experiences',
    alt: 'A ceremony staged within stone ruins, dressed with candles and drapery',
    tone: 'light',
    src: '/media/portfolio-workshops.webp',
    creditPending: true,
    caption: 'Workshops & Curated Experiences',
  },
  'portfolio-conferences': {
    label: 'Portfolio — Conferences & International Events',
    alt: 'A white gazebo on a Caribbean shoreline, set for an international gathering',
    tone: 'light',
    src: '/media/portfolio-conferences.webp',
    creditPending: true,
    caption: 'Conferences & International Events',
  },
  'portfolio-fundraising': {
    label: 'Portfolio — Fundraising Campaign Events',
    alt: 'Long banquet tables beneath timber beams and violet light, set for a gala',
    tone: 'warm',
    src: '/media/portfolio-fundraising.webp',
    creditPending: true,
    caption: 'Fundraising Campaign Events',
  },

  'connect-hero': {
    label: 'Connect hero',
    alt: 'A long dressed table with a linen runner and candlelight, set for conversation',
    tone: 'dark',
    src: '/media/connect-hero.webp',
    creditPending: true,
  },

  // ── Client photography recovered from the iMessage archives, Aug 2026 ──────
  'portfolio-italiano-1': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bridal bouquet of white and yellow blooms resting on a tufted vintage bench',
    tone: 'light',
    src: '/media/portfolio-italiano-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-2': {
    label: 'Elopement Italiano Vibes',
    alt: 'A candlelit sweetheart table styled with florals for an evening reception',
    tone: 'light',
    src: '/media/portfolio-italiano-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-3': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bride and groom seated together on a vintage settee beneath a tree',
    tone: 'light',
    src: '/media/portfolio-italiano-3.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-4': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bride\'s portrait on a vintage settee beneath a tree, framed by sheer drapery',
    tone: 'light',
    src: '/media/portfolio-italiano-4.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-5': {
    label: 'Elopement Italiano Vibes',
    alt: 'A close portrait of a bride and groom cheek to cheek in evening light',
    tone: 'light',
    src: '/media/portfolio-italiano-5.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-6': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bride and groom in a close embrace among green leaves',
    tone: 'light',
    src: '/media/portfolio-italiano-6.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-7': {
    label: 'Elopement Italiano Vibes',
    alt: 'A groom\'s portrait in a lace shirt and black vest at the treeline',
    tone: 'light',
    src: '/media/portfolio-italiano-7.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-nathan-allan-1': {
    label: 'Nathan and Allan — Elopement',
    alt: 'A groom in the barber\'s chair getting ready before the ceremony',
    tone: 'light',
    src: '/media/portfolio-nathan-allan-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-nathan-allan-2': {
    label: 'Nathan and Allan — Elopement',
    alt: 'A wedding stationery suite of menu, RSVP and day-of cards arranged against tree bark',
    tone: 'light',
    src: '/media/portfolio-nathan-allan-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-nathan-allan-3': {
    label: 'Nathan and Allan — Elopement',
    alt: 'Two grooms share a dip kiss in a riverside meadow',
    tone: 'light',
    src: '/media/portfolio-nathan-allan-3.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-nathan-allan-4': {
    label: 'Nathan and Allan — Elopement',
    alt: 'Two grooms embrace beside a creek, one dipping the other mid-laugh',
    tone: 'light',
    src: '/media/portfolio-nathan-allan-4.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-dirt-roads-1': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A bride seated with a guitar while her groom stands beside her in a prairie field',
    tone: 'light',
    src: '/media/portfolio-dirt-roads-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-dirt-roads-2': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A bride and groom walk a prairie path carrying vintage suitcases',
    tone: 'light',
    src: '/media/portfolio-dirt-roads-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-dirt-roads-3': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A couple walk hand in hand down a field track with suitcases and a guitar case',
    tone: 'light',
    src: '/media/portfolio-dirt-roads-3.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-dirt-roads-4': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A bride and groom pause with a suitcase in a ripened wheat field',
    tone: 'light',
    src: '/media/portfolio-dirt-roads-4.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-marie-andre-1': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'A bride raises her bouquet overhead in an open snowfield',
    tone: 'light',
    src: '/media/portfolio-marie-andre-1.webp',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-marie-andre-2': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'A bride and groom share a dip kiss in deep snow at their mountain ski elopement',
    tone: 'light',
    src: '/media/portfolio-marie-andre-2.webp',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-marie-andre-3': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'A groom lifts his bride in a snowy clearing beneath a mountain ridge',
    tone: 'light',
    src: '/media/portfolio-marie-andre-3.webp',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-marie-andre-4': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'The bride in her ski jacket on a snow-edged mountain road before the ceremony',
    tone: 'light',
    src: '/media/portfolio-marie-andre-4.webp',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-claudia-ali-2': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'A bride and groom climb a sweeping staircase hand in hand beneath a timber ceiling',
    tone: 'light',
    src: '/media/portfolio-claudia-ali-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-claudia-ali-3': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Gold letters spelling love, votive candles and a citrus drink dispenser styled on a black bar cart',
    tone: 'light',
    src: '/media/portfolio-claudia-ali-3.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-proposal-1': {
    label: 'Tasnia and Nick — Proposal',
    alt: 'A newly engaged couple embrace beside a lit Christmas tree',
    tone: 'light',
    src: '/media/portfolio-proposal-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Tasnia and Nick — Proposal',
  },
  'portfolio-proposal-2': {
    label: 'Tasnia and Nick — Proposal',
    alt: 'An engaged couple hold each other by candlelight',
    tone: 'light',
    src: '/media/portfolio-proposal-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Tasnia and Nick — Proposal',
  },
  'portfolio-valentines-1': {
    label: 'Valentine\'s Styled Shoot',
    alt: 'A couple kiss before a white floral arch ringed with candles',
    tone: 'light',
    src: '/media/portfolio-valentines-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Valentine\'s Styled Shoot',
  },
  'portfolio-valentines-2': {
    label: 'Valentine\'s Styled Shoot',
    alt: 'A couple share a kiss beneath a white rose arch',
    tone: 'light',
    src: '/media/portfolio-valentines-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Valentine\'s Styled Shoot',
  },
  'portfolio-valentines-3': {
    label: 'Valentine\'s Styled Shoot',
    alt: 'An orange love sign with glittered hearts styled for a Valentine\'s shoot',
    tone: 'light',
    src: '/media/portfolio-valentines-3.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Valentine\'s Styled Shoot',
  },
} satisfies Record<string, MediaSlot>

export type MediaId = keyof typeof media

/** Slots still awaiting a photograph. */
export function outstandingAssets(): string[] {
  return Object.values(media as Record<string, MediaSlot>)
    .filter((slot) => !slot.src && !slot.video)
    .map((slot) => slot.label)
}

/** Photographs in use whose photographer has not yet been confirmed. */
export function uncreditedAssets(): string[] {
  return Object.values(media as Record<string, MediaSlot>)
    .filter((slot) => slot.src && !slot.credit)
    .map((slot) => slot.label)
}
