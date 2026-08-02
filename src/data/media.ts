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

  'perspectives-hero': {
    label: 'Perspectives hero',
    alt: 'Chairs and tables placed close together before a gathering begins',
    tone: 'dark',
    src: '/media/perspectives-hero.webp',
    creditPending: true,
  },
  'press-hero': {
    label: 'Press hero',
    alt: 'A Sol Vé production photographed for editorial feature',
    tone: 'dark',
    src: '/media/press-hero.webp',
    creditPending: true,
  },
  'connect-hero': {
    label: 'Connect hero',
    alt: 'A long dressed table with a linen runner and candlelight, set for conversation',
    tone: 'dark',
    src: '/media/connect-hero.webp',
    creditPending: true,
  },
  'solve-hero': {
    label: 'SOLVÉ Global Summit hero',
    alt: 'A gazebo canopied in colourful papel picado with dancers gathered beneath',
    tone: 'dark',
    src: '/media/solve-hero.webp',
    creditPending: true,
  },
  'mystic-hero': {
    label: 'Mystic Moonlight Masquerade hero',
    alt: 'Performers with illuminated fans and hoops at the Mystic Moonlight Masquerade',
    tone: 'dark',
    src: '/media/mystic-hero.webp',
    creditPending: true,
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
