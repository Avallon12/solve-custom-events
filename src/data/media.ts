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
  /** 'film' marks a slot reserved for video — its placeholder says so. */
  kind?: 'film'
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

  // ── Client photography curated from the Google Drive library, Aug 2026 ────
  'wed-claudia-and-ali-1': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Trio of pillar candles in glass hurricane vases with a single white rose, styled on a white pedestal in a softly lit ballroom',
    tone: 'light',
    src: '/media/wed-claudia-and-ali-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'wed-claudia-and-ali-2': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Close-up of a Rolls-Royce Spirit of Ecstasy hood ornament in warm sunlight, a luxury car detail from the wedding day',
    tone: 'light',
    src: '/media/wed-claudia-and-ali-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'wed-claudia-and-ali-3': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Tiered acrylic dessert tower of mini pastries beside a macaron tower, white hydrangea pomander, and gold cake servers',
    tone: 'light',
    src: '/media/wed-claudia-and-ali-3.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'wed-paula-and-ever-1': {
    label: 'Paula and Ever — Wedding',
    alt: 'Overhead view of a first dance in a red ball gown on a warm wood floor surrounded by hanging Edison bulbs and styled tables',
    tone: 'light',
    src: '/media/wed-paula-and-ever-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Paula and Ever — Wedding',
  },
  'wed-paula-and-ever-2': {
    label: 'Paula and Ever — Wedding',
    alt: 'Couple in a red gown and plaid suit leaning together on a mezzanine railing framed by strings of glowing Edison bulbs',
    tone: 'light',
    src: '/media/wed-paula-and-ever-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Paula and Ever — Wedding',
  },
  'wed-rob-and-lynea-1': {
    label: 'Rob and Lynea — Surprise Wedding',
    alt: 'Newlyweds embracing guests in front of a marigold-orange draped ceremony backdrop with tropical greenery',
    tone: 'light',
    src: '/media/wed-rob-and-lynea-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Rob and Lynea — Surprise Wedding',
  },
  'wed-rob-and-lynea-2': {
    label: 'Rob and Lynea — Surprise Wedding',
    alt: 'Ceremony moment beneath an orange draped canopy with patterned tile backdrop and monstera leaf accents',
    tone: 'light',
    src: '/media/wed-rob-and-lynea-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Rob and Lynea — Surprise Wedding',
  },
  'wed-erin-and-rick-1': {
    label: 'Erin and Rick — Wedding',
    alt: 'Round timber pavilion venue with central stone firepit, log benches, string lights, and a draped head-table backdrop',
    tone: 'light',
    src: '/media/wed-erin-and-rick-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Erin and Rick — Wedding',
  },
  'wed-erin-and-rick-2': {
    label: 'Erin and Rick — Wedding',
    alt: 'Bride in lace gown and groom walking hand in hand along a pine forest path',
    tone: 'light',
    src: '/media/wed-erin-and-rick-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Erin and Rick — Wedding',
  },
  'wed-erin-and-rick-3': {
    label: 'Erin and Rick — Wedding',
    alt: 'Groom embracing bride on a driftwood-strewn mountain lakeshore under dramatic clouds',
    tone: 'light',
    src: '/media/wed-erin-and-rick-3.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Erin and Rick — Wedding',
  },
  'wed-christina-and-vince-1': {
    label: 'Christina and Vince — Wedding',
    alt: 'Bride with bouquet and groom posed in riverside greenery with the downtown skyline and bridge behind them',
    tone: 'light',
    src: '/media/wed-christina-and-vince-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Christina and Vince — Wedding',
  },
  'wed-christina-and-vince-2': {
    label: 'Christina and Vince — Wedding',
    alt: 'Sunlit A-frame reception hall set with white linens, gold-sashed lace chair covers, and white balloon columns',
    tone: 'light',
    src: '/media/wed-christina-and-vince-2.webp',
    credit: 'by Mike Hopkins Photography',
    caption: 'Christina and Vince — Wedding',
  },
  'wed-christina-and-vince-3': {
    label: 'Christina and Vince — Wedding',
    alt: 'Round reception table with satin linens, lace and gold runner, white rose centerpiece, and wrapped charger plates',
    tone: 'light',
    src: '/media/wed-christina-and-vince-3.webp',
    credit: 'by Mike Hopkins Photography',
    caption: 'Christina and Vince — Wedding',
  },
  'wed-hannah-and-zach-1': {
    label: 'Hannah and Zach — Wedding',
    alt: 'Hand-illustrated pink welcome sign on an easel at the entry of a rustic barn reception strung with fairy lights',
    tone: 'light',
    src: '/media/wed-hannah-and-zach-1.webp',
    creditPending: true,
    caption: 'Hannah and Zach — Wedding',
  },
  'wed-hannah-and-zach-2': {
    label: 'Hannah and Zach — Wedding',
    alt: 'Seating chart sign and gold-framed guest book overlooking a candlelit barn reception with white-linen tables',
    tone: 'light',
    src: '/media/wed-hannah-and-zach-2.webp',
    creditPending: true,
    caption: 'Hannah and Zach — Wedding',
  },
  'wed-farah-1': {
    label: 'Farah — Wedding',
    alt: 'Lounge vignette with blush settee, mercury-glass side tables, black candelabras, and a wisteria greenery drape backdrop',
    tone: 'light',
    src: '/media/wed-farah-1.webp',
    creditPending: true,
    caption: 'Farah — Wedding',
  },
  'wed-marisol-1': {
    label: 'Marisol — Wedding',
    alt: 'White skirted table with charcoal satin and rhinestone runner, calla lily arrangement, and branch accents',
    tone: 'light',
    src: '/media/wed-marisol-1.webp',
    creditPending: true,
    caption: 'Marisol — Wedding',
  },
  'sig-vow-renewal-lisa-and-john-1': {
    label: 'Lisa and John — Vow Renewal',
    alt: 'Couple laughing and dancing barefoot on a lawn beside a prairie pond at golden hour',
    tone: 'light',
    src: '/media/sig-vow-renewal-lisa-and-john-1.webp',
    creditPending: true,
    caption: 'Lisa and John — Vow Renewal',
  },
  'sig-vow-renewal-lisa-and-john-2': {
    label: 'Lisa and John — Vow Renewal',
    alt: 'Backlit golden-hour kiss in a grassy meadow with long shadows and sun flare',
    tone: 'light',
    src: '/media/sig-vow-renewal-lisa-and-john-2.webp',
    creditPending: true,
    caption: 'Lisa and John — Vow Renewal',
  },
  'sig-vow-renewal-lisa-and-john-3': {
    label: 'Lisa and John — Vow Renewal',
    alt: 'Black-and-white portrait of a couple holding hands, she in a birdcage veil and feather fascinator with embroidered sheer sleeves',
    tone: 'light',
    src: '/media/sig-vow-renewal-lisa-and-john-3.webp',
    creditPending: true,
    caption: 'Lisa and John — Vow Renewal',
  },
  'sig-engagement-c-and-a-1': {
    label: 'Claudia\'s Bridal Shower',
    alt: 'Gilded full-length mirror, candle stand, and balloon bouquet beside a she-said-yes welcome sign for a bridal shower',
    tone: 'light',
    src: '/media/sig-engagement-c-and-a-1.webp',
    creditPending: true,
    caption: 'Claudia\'s Bridal Shower',
  },
  'sig-engagement-c-and-a-2': {
    label: 'Claudia\'s Bridal Shower',
    alt: 'Blush, white, and gold balloon arch over a cream settee flanked by gold accent tables and sculptural decor',
    tone: 'light',
    src: '/media/sig-engagement-c-and-a-2.webp',
    creditPending: true,
    caption: 'Claudia\'s Bridal Shower',
  },
  'sig-proposal-niki-and-mervin-1': {
    label: 'Niki and Mervin — Proposal',
    alt: 'Couple embracing beside MARRY ME spelled in red rose petals, framed by moss garlands and red roses',
    tone: 'light',
    src: '/media/sig-proposal-niki-and-mervin-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Niki and Mervin — Proposal',
  },
  'sig-proposal-niki-and-mervin-2': {
    label: 'Niki and Mervin — Proposal',
    alt: 'Newly engaged couple at a moss-covered tablescape with red taper candles and a skyline view through the window',
    tone: 'light',
    src: '/media/sig-proposal-niki-and-mervin-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Niki and Mervin — Proposal',
  },
  'sig-proposal-meegan-and-logan-1': {
    label: 'Meegan and Logan — Proposal',
    alt: 'Candlelit winter proposal kiss surrounded by flocked evergreen trees, string lights, and a brass candelabra',
    tone: 'light',
    src: '/media/sig-proposal-meegan-and-logan-1.webp',
    credit: 'by Connor Eseau',
    caption: 'Meegan and Logan — Proposal',
  },
  'sig-proposal-tasnia-and-nick-1': {
    label: 'Tasnia and Nick — Proposal',
    alt: 'Groom-to-be kneeling with the ring amid flocked trees, marigold garlands, and a mirrored backdrop',
    tone: 'light',
    src: '/media/sig-proposal-tasnia-and-nick-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Tasnia and Nick — Proposal',
  },
  'sig-galentines-1': {
    label: 'Galentine\'s Styled Shoot',
    alt: 'Two friends tossing red and white balloons in a Valentine\'s set with gold chairs and heart garland backdrop',
    tone: 'light',
    src: '/media/sig-galentines-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Galentine\'s Styled Shoot',
  },
  'sig-galentines-2': {
    label: 'Galentine\'s Styled Shoot',
    alt: 'Styled Galentine\'s table with LOVE sign, heart wands, gold-framed chairs, and scattered balloons on gold sequin flooring',
    tone: 'light',
    src: '/media/sig-galentines-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Galentine\'s Styled Shoot',
  },
  'sig-bridal-shower-vegas-1': {
    label: 'Tasnia\'s Bridal Shower — Las Vegas',
    alt: 'Bridal party strolling beneath the golden crown facade of the Queens casino on Fremont Street in Las Vegas',
    tone: 'light',
    src: '/media/sig-bridal-shower-vegas-1.webp',
    credit: 'by The Wild Vow',
    caption: 'Tasnia\'s Bridal Shower — Las Vegas',
  },
  'sig-bridal-shower-vegas-2': {
    label: 'Tasnia\'s Bridal Shower — Las Vegas',
    alt: 'Four women glancing back beneath the gold Queens marquee and Fremont Street canopy in Las Vegas',
    tone: 'light',
    src: '/media/sig-bridal-shower-vegas-2.webp',
    credit: 'by The Wild Vow',
    caption: 'Tasnia\'s Bridal Shower — Las Vegas',
  },
  'corp-hull-services-winter-holiday-party-1': {
    label: 'Hull Services — Winter Holiday Party',
    alt: 'Winter wonderland photo lounge with white loveseat, flocked evergreens, lamp posts with red bows, and candle side tables',
    tone: 'light',
    src: '/media/corp-hull-services-winter-holiday-party-1.webp',
    creditPending: true,
    caption: 'Hull Services — Winter Holiday Party',
  },
  'corp-hull-services-winter-holiday-party-2': {
    label: 'Hull Services — Winter Holiday Party',
    alt: 'Christmas tree photo backdrop with popcorn-and-ornament garland, lace curtain, wrapped gifts, and quilted candle pillow',
    tone: 'light',
    src: '/media/corp-hull-services-winter-holiday-party-2.webp',
    creditPending: true,
    caption: 'Hull Services — Winter Holiday Party',
  },

  // ── Published press tear sheets ────────────────────────────────────────────
  'feature-bridal-fantasy-1': {
    label: 'Bridal Fantasy — Upcycled Grunge cover spread',
    alt: 'Bridal Fantasy magazine page: a couple embrace in a weathered green pickup, gown spilling to the ground, titled Upcycled Grunge',
    tone: 'light',
    src: '/media/feature-bridal-fantasy-1.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Bridal Fantasy Magazine — print feature',
  },
  'feature-bridal-fantasy-2': {
    label: 'Bridal Fantasy — Upcycled Grunge credits spread',
    alt: 'Bridal Fantasy magazine page of the Upcycled Grunge shoot crediting Sol Vé Custom Event Décor for floral, décor and styling',
    tone: 'light',
    src: '/media/feature-bridal-fantasy-2.webp',
    credit: 'by Abbey Raine Photography',
    caption: 'Bridal Fantasy Magazine — print feature',
  },

  // ── Reels assembled from the client's photography (no footage exists yet;
  //    each is a slow Ken Burns pass over the credited photographs) ───────────
  'reel-weddings': {
    label: 'Weddings in Motion',
    alt: 'A slow-moving reel of Sol Vé wedding and elopement photography',
    tone: 'light',
    video: '/media/reel-weddings.mp4',
    credit: 'by Abbey Raine Photography and Brottrel Co. Photography Studio',
    caption: 'Weddings in Motion',
  },
  'reel-signature-moments': {
    label: 'Signature Moments in Motion',
    alt: 'A slow-moving reel of proposal and Valentine’s photography',
    tone: 'light',
    video: '/media/reel-signature-moments.mp4',
    credit: 'by Abbey Raine Photography',
    caption: 'Signature Moments in Motion',
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
  // ── RESERVED SLOTS — added 2026-08-19, every one renders as a designed
  // placeholder until the client supplies the asset. Photo slots publish by
  // setting `src`; film slots by setting `video`. Nothing existing changed. ──

  // Films — the client has footage to send; these are their places.
  'film-weddings': {
    label: 'Weddings — Feature Film',
    alt: 'A violinist playing beside candlelit tables in a Sol Vé wedding reception room',
    tone: 'dark',
    kind: 'film',
    video: '/media/film-weddings.mp4',
  },
  'reel-design-stylization': {
    label: 'Design & Stylization — Reel',
    alt: 'A reel of Sol Vé rooms being designed, styled and revealed',
    tone: 'dark',
    kind: 'film',
  },
  'reel-workshops': {
    label: 'Workshops & Curated Experiences — Reel',
    alt: 'A reel of guests engaged in a Sol Vé workshop and curated experience',
    tone: 'dark',
    kind: 'film',
  },
  'reel-conferences': {
    label: 'Conferences & International Events — Reel',
    alt: 'A reel of delegates gathering at a Sol Vé conference',
    tone: 'dark',
    kind: 'film',
  },
  'reel-fundraising': {
    label: 'Fundraising Campaign Events — Reel',
    alt: 'A reel of a Sol Vé fundraising gala in motion',
    tone: 'dark',
    kind: 'film',
  },
  'film-highlights': {
    label: 'Portfolio — Event Film Highlights',
    alt: 'Highlights filmed across Sol Vé gatherings',
    tone: 'dark',
    kind: 'film',
  },

  // Page bands — one per page, placed where a photograph will serve best.
  'foundation-room': {
    label: 'Foundation — The Room Before Guests',
    alt: 'A Sol Vé room fully set in the quiet moments before the first guest arrives',
    tone: 'warm',
  },
  'way-hospitality': {
    label: 'The Sol Vé Way — Hospitality in Practice',
    alt: 'A Sol Vé host welcoming guests as the gathering begins',
    tone: 'warm',
  },
  'beyond-occasion-band': {
    label: 'Beyond the Occasion — What Follows',
    alt: 'Guests in conversation as a Sol Vé evening carries on beyond the programme',
    tone: 'dark',
  },
  'principles-craft': {
    label: 'Sol Vé Principles — Craftsmanship Detail',
    alt: 'A close detail of Sol Vé table craftsmanship, place settings and florals',
    tone: 'light',
  },
  'began-early': {
    label: 'Where It Began — An Early Gathering',
    alt: 'An early Sol Vé gathering, where the philosophy began',
    tone: 'warm',
  },
  'community-impact': {
    label: 'Community Impact — The Community Gathered',
    alt: 'A community brought together at a Sol Vé philanthropic gathering',
    tone: 'dark',
  },
  'capabilities-behind-scenes': {
    label: 'Service Capabilities — Behind the Scenes',
    alt: 'The Sol Vé team in production, building an event behind the scenes',
    tone: 'warm',
  },
  'founder-candid': {
    label: 'Meet the Founder — Greeting Guests, Candid',
    alt: 'Lynea greeting guests as they arrive at a Sol Vé gathering',
    tone: 'warm',
  },
  'testimonials-band': {
    label: 'Testimonials — Guests Gathered',
    alt: 'Guests gathered and at ease at a Sol Vé event',
    tone: 'warm',
  },
  'perspectives-band': {
    label: 'Perspectives — A Room in Conversation',
    alt: 'A room arranged by Sol Vé for open conversation',
    tone: 'light',
  },

  // Division galleries — the corporate-facing divisions have no photography
  // yet (flagged to the client); these labels double as the shot list.
  'gal-design-3': {
    label: 'Design & Stylization — Tablescape Detail',
    alt: 'A styled Sol Vé tablescape in close detail',
    tone: 'light',
  },
  'gal-workshops-1': {
    label: 'Workshops — Facilitated Session',
    alt: 'A facilitator leading a Sol Vé workshop session',
    tone: 'warm',
  },
  'gal-workshops-2': {
    label: 'Workshops — Executive Retreat Setting',
    alt: 'An executive retreat room prepared by Sol Vé',
    tone: 'light',
  },
  'gal-workshops-3': {
    label: 'Workshops — Creative Materials Detail',
    alt: 'Creative materials laid out for a Sol Vé curated experience',
    tone: 'warm',
  },
  'gal-conferences-1': {
    label: 'Conferences — Plenary Room',
    alt: 'A plenary room staged by Sol Vé before delegates arrive',
    tone: 'dark',
  },
  'gal-conferences-2': {
    label: 'Conferences — Delegates in Session',
    alt: 'Delegates in session at a Sol Vé conference',
    tone: 'warm',
  },
  'gal-conferences-3': {
    label: 'Conferences — Evening Reception',
    alt: 'An evening reception following a Sol Vé conference day',
    tone: 'dark',
  },
  'gal-fundraising-1': {
    label: 'Fundraising — Gala Room',
    alt: 'A gala room dressed by Sol Vé for a fundraising campaign evening',
    tone: 'dark',
  },
  'gal-fundraising-2': {
    label: 'Fundraising — Live Auction Moment',
    alt: 'A live auction moment at a Sol Vé fundraising gala',
    tone: 'warm',
  },
  'gal-fundraising-3': {
    label: 'Fundraising — Donor Recognition',
    alt: 'Donors recognised on stage at a Sol Vé fundraising event',
    tone: 'dark',
  },

  // Portfolio — the categories still awaiting photography.
  'portfolio-conf-lead-1': {
    label: 'Portfolio — Conferences & Leadership Events I',
    alt: 'A Sol Vé conference or leadership gathering',
    tone: 'dark',
    caption: 'Conferences & Leadership Events',
  },
  'portfolio-conf-lead-2': {
    label: 'Portfolio — Conferences & Leadership Events II',
    alt: 'Leaders convened at a Sol Vé event',
    tone: 'warm',
    caption: 'Conferences & Leadership Events',
  },
  'portfolio-fund-camp-1': {
    label: 'Portfolio — Fundraising Campaigns I',
    alt: 'A Sol Vé fundraising campaign evening',
    tone: 'dark',
    caption: 'Fundraising Campaigns',
  },
  'portfolio-fund-camp-2': {
    label: 'Portfolio — Fundraising Campaigns II',
    alt: 'Generosity celebrated at a Sol Vé fundraising campaign',
    tone: 'warm',
    caption: 'Fundraising Campaigns',
  },
  'portfolio-workshops-cur-1': {
    label: 'Portfolio — Workshops & Curated Experiences I',
    alt: 'A Sol Vé workshop or curated experience in progress',
    tone: 'light',
    caption: 'Workshops & Curated Experiences',
  },
  'portfolio-workshops-cur-2': {
    label: 'Portfolio — Workshops & Curated Experiences II',
    alt: 'Guests immersed in a Sol Vé curated experience',
    tone: 'warm',
    caption: 'Workshops & Curated Experiences',
  },

  // ── ROUND TWO — added at the client's request for more photography.
  // Every slot renders the designed placeholder; each label is the shot. ──

  // Home gallery strip
  'home-gal-1': { label: 'Home Gallery — Ceremony Detail', alt: 'A ceremony detail at a Sol Vé wedding', tone: 'light' },
  'home-gal-2': { label: 'Home Gallery — Guests Arriving', alt: 'Guests arriving at a Sol Vé gathering', tone: 'warm' },
  'home-gal-3': { label: 'Home Gallery — Tablescape', alt: 'A dressed Sol Vé tablescape at golden hour', tone: 'warm' },
  'home-gal-4': { label: 'Home Gallery — Speeches & Toasts', alt: 'A toast raised during a Sol Vé evening', tone: 'dark' },
  'home-gal-5': { label: 'Home Gallery — The Dance Floor', alt: 'The dance floor in motion at a Sol Vé celebration', tone: 'dark' },
  'home-gal-6': { label: 'Home Gallery — The Send-Off', alt: 'Guests sending off the couple at the end of a Sol Vé night', tone: 'warm' },

  // Foundation detail triptych
  'foundation-detail-1': { label: 'Foundation — Place Setting Detail', alt: 'A single place setting laid by Sol Vé', tone: 'light' },
  'foundation-detail-2': { label: 'Foundation — Floral Detail', alt: 'A floral arrangement detail from a Sol Vé room', tone: 'warm' },
  'foundation-detail-3': { label: 'Foundation — Candlelight Detail', alt: 'Candlelight along a Sol Vé table at dusk', tone: 'dark' },

  // The Sol Vé Way pair
  'way-welcome': { label: 'The Sol Vé Way — Guests Welcomed', alt: 'Guests being welcomed into a Sol Vé gathering', tone: 'warm' },
  'way-service': { label: 'The Sol Vé Way — Service in Motion', alt: 'The Sol Vé team serving guests during an event', tone: 'dark' },

  // Beyond the Occasion pair
  'beyond-family': { label: 'Beyond the Occasion — Two Families, One', alt: 'Two families celebrating together at a Sol Vé wedding', tone: 'warm' },
  'beyond-toast': { label: 'Beyond the Occasion — The Toast', alt: 'A heartfelt toast during a Sol Vé gathering', tone: 'dark' },

  // Commitments strip — one image per box, equal treatment
  'commitments-gal-1': { label: 'Reconciliation — Cultural Performance', alt: 'A cultural performance honoured at a Sol Vé gathering', tone: 'dark' },
  'commitments-gal-2': { label: 'Inclusion — A Celebration for All', alt: 'A celebration where every guest belongs, by Sol Vé', tone: 'warm' },
  'commitments-gal-3': { label: 'Conservation — Sustainable Décor', alt: 'Reusable and responsibly sourced décor at a Sol Vé event', tone: 'light' },

  // Principles — one image per principle
  'principles-gal-1': { label: 'Principles — Stewardship in Practice', alt: 'The Sol Vé team stewarding a gathering', tone: 'warm' },
  'principles-gal-2': { label: 'Principles — Intention in the Details', alt: 'An intentional detail from a Sol Vé design', tone: 'light' },
  'principles-gal-3': { label: 'Principles — Hospitality at the Door', alt: 'A guest welcomed by name at a Sol Vé event', tone: 'warm' },
  'principles-gal-4': { label: 'Principles — Craftsmanship Up Close', alt: 'Hands at work on a Sol Vé installation', tone: 'light' },
  'principles-gal-5': { label: 'Principles — Collaboration Backstage', alt: 'The team collaborating behind the scenes at a Sol Vé event', tone: 'dark' },
  'principles-gal-6': { label: 'Principles — Legacy, After the Gathering', alt: 'A quiet room after a meaningful Sol Vé gathering', tone: 'dark' },

  // Where It Began pair
  'began-detail-1': { label: 'Where It Began — First Celebrations', alt: 'One of the first celebrations Sol Vé designed', tone: 'warm' },
  'began-detail-2': { label: 'Where It Began — The Work in Progress', alt: 'Early Sol Vé work in progress, a room half-built', tone: 'light' },

  // What We Create + Divisions overview bands
  'create-band': { label: 'What We Create — The Room Revealed', alt: 'A finished Sol Vé room revealed before guests enter', tone: 'dark' },
  'divisions-band': { label: 'Signature Experiences — Overview', alt: 'A wide view across a signature Sol Vé experience', tone: 'warm' },

  // Division galleries — round two
  'gal-weddings-p1': { label: 'Weddings — The Ceremony', alt: 'A Sol Vé wedding ceremony in progress', tone: 'light' },
  'gal-weddings-p2': { label: 'Weddings — The First Dance', alt: 'A first dance at a Sol Vé wedding', tone: 'dark' },
  'gal-weddings-p3': { label: 'Weddings — The Details', alt: 'Wedding details styled by Sol Vé', tone: 'warm' },
  'gal-signature-p1': { label: 'Signature Moments — The Milestone Toast', alt: 'A milestone toast at a Sol Vé signature moment', tone: 'warm' },
  'gal-signature-p2': { label: 'Signature Moments — Family Gathered', alt: 'A family gathered for a Sol Vé milestone celebration', tone: 'warm' },
  'gal-signature-p3': { label: 'Signature Moments — Décor Detail', alt: 'Celebration décor detail by Sol Vé', tone: 'light' },
  'gal-design-4': { label: 'Design & Stylization — Custom Installation', alt: 'A custom Sol Vé installation being admired', tone: 'warm' },
  'gal-design-5': { label: 'Design & Stylization — Lighting Concept', alt: 'A lighting concept transforming a Sol Vé room', tone: 'dark' },
  'gal-design-6': { label: 'Design & Stylization — Lounge Design', alt: 'A lounge setting designed by Sol Vé', tone: 'warm' },
  'gal-workshops-4': { label: 'Workshops — Team Building', alt: 'A team building exercise at a Sol Vé workshop', tone: 'warm' },
  'gal-workshops-5': { label: 'Workshops — Wellness Retreat', alt: 'A wellness retreat setting prepared by Sol Vé', tone: 'light' },
  'gal-workshops-6': { label: 'Workshops — Networking Evening', alt: 'Guests connecting at a Sol Vé networking evening', tone: 'dark' },
  'gal-conferences-4': { label: 'Conferences — Keynote Stage', alt: 'A keynote stage designed by Sol Vé', tone: 'dark' },
  'gal-conferences-5': { label: 'Conferences — VIP Hospitality', alt: 'VIP hospitality at a Sol Vé conference', tone: 'warm' },
  'gal-conferences-6': { label: 'Conferences — Awards Gala', alt: 'An awards gala evening produced by Sol Vé', tone: 'dark' },
  'gal-fundraising-4': { label: 'Fundraising — Sponsor Activation', alt: 'A sponsor activation at a Sol Vé fundraising event', tone: 'warm' },
  'gal-fundraising-5': { label: 'Fundraising — The Entertainment', alt: 'Entertainment performing at a Sol Vé gala', tone: 'dark' },
  'gal-fundraising-6': { label: 'Fundraising — Community Celebration', alt: 'A community celebrating at a Sol Vé fundraising evening', tone: 'warm' },

  // Service Capabilities — one image per capability
  'cap-consultation-strategy': { label: 'Consultation & Strategy — At the Table', alt: 'A Sol Vé consultation in progress', tone: 'light' },
  'cap-planning-coordination': { label: 'Planning & Coordination — The Run Sheet', alt: 'Sol Vé coordinating an event day', tone: 'warm' },
  'cap-design-production': { label: 'Design & Production — The Build', alt: 'A Sol Vé production build in progress', tone: 'dark' },
  'cap-full-experience-management': { label: 'Full Experience Management — Every Detail', alt: 'Sol Vé managing every detail of a gathering', tone: 'warm' },

  // Meet the Founder — the remaining authenticity criteria
  'founder-team': { label: 'Meet the Founder — Collaborating with the Team', alt: 'Lynea collaborating with her team during an event build', tone: 'warm' },
  'founder-room': { label: 'Meet the Founder — Observing the Room', alt: 'Lynea quietly observing a room she has helped create', tone: 'dark' },

  // Portfolio — round two tiles
  'portfolio-conf-lead-3': { label: 'Portfolio — Conferences & Leadership Events III', alt: 'A leadership convening produced by Sol Vé', tone: 'light', caption: 'Conferences & Leadership Events' },
  'portfolio-fund-camp-3': { label: 'Portfolio — Fundraising Campaigns III', alt: 'A fundraising campaign evening by Sol Vé', tone: 'dark', caption: 'Fundraising Campaigns' },
  'portfolio-workshops-cur-3': { label: 'Portfolio — Workshops & Curated Experiences III', alt: 'A curated Sol Vé experience underway', tone: 'warm', caption: 'Workshops & Curated Experiences' },
  'portfolio-design-styl-1': { label: 'Portfolio — Design & Stylization I', alt: 'A styled Sol Vé environment', tone: 'light', caption: 'Design & Stylization' },
  'portfolio-design-styl-2': { label: 'Portfolio — Design & Stylization II', alt: 'A Sol Vé design concept realised', tone: 'warm', caption: 'Design & Stylization' },
  'portfolio-sig-mom-1': { label: 'Portfolio — Signature Moments I', alt: 'A signature moment celebrated with Sol Vé', tone: 'warm', caption: 'Signature Moments' },

  // Testimonials strip
  'testimonials-gal-1': { label: 'Testimonials — The Couples', alt: 'A couple celebrating at their Sol Vé wedding', tone: 'light' },
  'testimonials-gal-2': { label: 'Testimonials — Corporate Partners', alt: 'Corporate partners gathered at a Sol Vé event', tone: 'dark' },
  'testimonials-gal-3': { label: 'Testimonials — Community Partners', alt: 'Community partners celebrating at a Sol Vé gathering', tone: 'warm' },

  // Perspectives — images between the essays
  'perspectives-inline-1': { label: 'Perspectives — Convening in the Round', alt: 'People convened in the round at a Sol Vé gathering', tone: 'warm' },
  'perspectives-inline-2': { label: 'Perspectives — The Conversation Table', alt: 'A table set by Sol Vé for open conversation', tone: 'light' },

  // Connect pair
  'connect-gal-1': { label: 'Connect — The First Meeting', alt: 'A first planning conversation with Sol Vé', tone: 'warm' },
  'connect-gal-2': { label: 'Connect — Studio & Materials', alt: 'Sol Vé design materials and samples in the studio', tone: 'light' },

  // Features band
  'features-band': { label: 'Features — Press & Publications Spread', alt: 'Sol Vé press features and publications spread out', tone: 'light' },
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
