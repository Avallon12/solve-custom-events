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
  'home-philosophy': {
    label: 'Our philosophy',
    alt: 'White garden roses and trailing greenery running the length of a Sol Vé table',
    tone: 'warm',
    src: '/media/home-philosophy.webp',
    credit: CREDIT_MIKE_HOPKINS,
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
    alt: 'A grazing table of pastries and fruit laid out on gold and marble stands',
    tone: 'warm',
    src: '/media/foundation-began.webp',
    creditPending: true,
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
    alt: 'Gold lanterns, pillar candles and white hydrangea arranged across a styled surface',
    tone: 'warm',
    src: '/media/division-design-stylization.webp',
    creditPending: true,
  },
  'division-weddings': {
    label: 'Division — Weddings',
    alt: 'A couple photographed together on the riverbank with the Calgary skyline behind them',
    tone: 'light',
    src: '/media/division-weddings.webp',
    creditPending: true,
  },
  'division-signature-moments': {
    label: 'Division — Signature Moments',
    alt: 'A ring box, watch and boutonnière arranged for the morning of a proposal',
    tone: 'warm',
    src: '/media/division-signature-moments.webp',
    creditPending: true,
  },
  'division-workshops': {
    label: 'Division — Workshops & Curated Experiences',
    alt: 'A long table set for a small group, dressed with florals and low candlelight',
    tone: 'light',
    src: '/media/division-workshops.webp',
    creditPending: true,
  },
  'division-conferences': {
    label: 'Division — Conferences & International Events',
    alt: 'A large hall of round tables set for a multi-day gathering',
    tone: 'dark',
    src: '/media/division-conferences.webp',
    creditPending: true,
  },
  'division-fundraising': {
    label: 'Division — Fundraising Campaign Events',
    alt: 'A gold and blush installation with lounge seating built for a fundraising evening',
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
    alt: 'A place setting laid with a menu card, gold cutlery and a single bloom',
    tone: 'light',
    src: '/media/founder-second.webp',
    creditPending: true,
  },
  'portfolio-claudia-ali': {
    label: 'Portfolio — Claudia and Ali',
    alt: 'A bride and groom together, her veil carried out across the frame',
    tone: 'light',
    src: '/media/portfolio-claudia-ali.webp',
    creditPending: true,
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-white-wedding': {
    label: 'Portfolio — White Wedding room',
    alt: 'A white and gold reception room photographed before the doors open',
    tone: 'light',
    src: '/media/portfolio-white-wedding.webp',
    creditPending: true,
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-christina-vince': {
    label: 'Portfolio — Christina and Vince',
    alt: 'A panelled hall dressed with drapery and florals for a vintage celebration',
    tone: 'warm',
    src: '/media/portfolio-christina-vince.webp',
    creditPending: true,
    caption: 'Christina and Vince — Vintage Vibes',
  },
  'portfolio-modern-rustic': {
    label: 'Portfolio — Modern Rustic',
    alt: 'A reception room of round tables with eucalyptus and candle centrepieces',
    tone: 'light',
    src: '/media/portfolio-modern-rustic.webp',
    creditPending: true,
    caption: 'Wedding Reception — Modern Rustic',
  },
  'portfolio-florals': {
    label: 'Portfolio — Florals',
    alt: 'A tall arrangement of white tulips and tropical foliage on a dressed table',
    tone: 'light',
    src: '/media/portfolio-florals.webp',
    creditPending: true,
    caption: 'Floral Design',
  },
  'portfolio-celebration': {
    label: 'Portfolio — Celebrations',
    alt: 'Three guests photographed together in front of a gold and blush installation',
    tone: 'warm',
    src: '/media/portfolio-celebration.webp',
    creditPending: true,
    caption: 'Signature Celebrations',
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
  'mystic-hero': {
    label: 'Mystic Moonlight Masquerade hero',
    alt: 'The Mystic Moonlight Masquerade Ball in full costume and colour',
    tone: 'dark',
    // No MMM photography exists on the old site. Lynea's Mystic Mingle folder
    // (lion dancers, performers) belongs here — placeholder until it arrives.
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
