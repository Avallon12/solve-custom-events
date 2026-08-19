/**
 * MEDIA REGISTRY — every image and video slot on the site, in one place.
 *
 * NO PHOTOGRAPHY IS CURRENTLY PUBLISHED. Every slot renders as a designed
 * placeholder that names the photograph it is waiting for. The client's rule
 * is "ALL art and photos must have a credited artist (If it is not known,
 * please ask)" — and almost the entire library is awaiting confirmed credits,
 * so nothing ships until the names arrive.
 *
 * The previously used WebP files (re-encoded from solvecustomevents.com) are
 * preserved in `media-archive/` at the repo root, outside the deploy bundle.
 * The "Matt & Ann: A Touch of Magic" gallery and several others carry a
 * visible "Faithful" watermark and must never return (Manual 6.2).
 *
 * `credit` / `creditPending` below record what is known so far. The one
 * confirmed credit (Mike Hopkins Photography) is kept on its slot.
 *
 * To publish a photograph: move the WebP into public/media/ and set
 * `src: '/media/file.webp'` on its slot, with its `credit`.
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
  /**
   * Required aspect ratio shown on the placeholder (e.g. '21:9') for slots
   * with no entry in media-dimensions. Slots with known dimensions derive it.
   */
  ratioHint?: string
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
    creditPending: true,
  },
  // Slots below marked "Photo Guide" are assigned by Lynea's
  // "Exact Banner-by-Banner Photo Guide" and should not be swapped without her.
  'home-philosophy': {
    label: 'Our philosophy',
    alt: 'A mural of an eye surrounded by butterflies, flowers and mountains',
    tone: 'warm',
    creditPending: true,
  },
  'home-band': {
    label: 'Home — Editorial Band',
    alt: 'A wide view across a Sol Vé room in full evening light, tables dressed and candles lit',
    tone: 'warm',
    ratioHint: '21:9',
  },
  'foundation-hero': {
    label: 'Foundation hero',
    alt: 'A Sol Vé ballroom prepared with intention before the first guest arrives',
    tone: 'dark',
    creditPending: true,
  },
  'foundation-began': {
    label: 'Where it began',
    alt: 'White garden roses and trailing greenery running the length of a Sol Vé table',
    tone: 'warm',
    credit: CREDIT_MIKE_HOPKINS,
  },
  'commitments-hero': {
    label: 'Commitments hero',
    alt: 'Cultural dancers performing for guests in the centre of a Sol Vé celebration',
    tone: 'dark',
    creditPending: true,
  },
  'experiences-hero': {
    label: 'What we create hero',
    alt: 'A gold mirrored table dressed with white hydrangea and candlelight',
    tone: 'dark',
    creditPending: true,
  },
  'division-design-stylization': {
    label: 'Division — Design & Stylization',
    alt: 'A dessert table beneath a blush and gold balloon installation, dressed with gold candelabra',
    tone: 'warm',
    creditPending: true,
  },
  'division-weddings': {
    label: 'Division — Weddings',
    alt: 'Two wedding rings resting together on a heart-shaped stone',
    tone: 'light',
    creditPending: true,
  },
  'division-signature-moments': {
    label: 'Division — Signature Moments',
    alt: 'A celebration table dressed in red, blush and gold for a milestone occasion',
    tone: 'warm',
    creditPending: true,
  },
  'division-workshops': {
    label: 'Division — Workshops & Curated Experiences',
    alt: 'A ceremony staged within stone ruins, dressed with candles and drapery',
    tone: 'light',
    creditPending: true,
  },
  'division-conferences': {
    label: 'Division — Conferences & International Events',
    alt: 'A white gazebo on a Caribbean shoreline, set for an international gathering',
    tone: 'dark',
    creditPending: true,
  },
  'division-fundraising': {
    label: 'Division — Fundraising Campaign Events',
    alt: 'Long banquet tables beneath timber beams and violet light, set for a gala',
    tone: 'warm',
    creditPending: true,
  },
  'founder-hero': {
    label: 'Founder page hero',
    alt: 'A Sol Vé room photographed in warm light as the evening begins',
    tone: 'dark',
    creditPending: true,
  },
  'founder-portrait': {
    label: 'Founder portrait — Lynea',
    alt: 'Lynea Vaugeois Hetherington, Founder and Creative Director of Sol Vé Custom Events',
    tone: 'warm',
    creditPending: true,
  },
  'founder-second': {
    label: 'Founder — stewardship',
    alt: 'Lynea photographed in dappled afternoon light between events',
    tone: 'light',
    creditPending: true,
  },
  'portfolio-claudia-ali': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'A bride and groom together, her veil carried out across the frame',
    tone: 'light',
    creditPending: true,
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-florals': {
    label: 'Floral Design',
    alt: 'A tall arrangement of white roses and tropical foliage on a dressed table',
    tone: 'light',
    creditPending: true,
    caption: 'Floral Design',
  },

  // ── Portfolio, per the Exact Banner-by-Banner Photo Guide ──────────────────
  'portfolio-mmm': {
    label: 'Portfolio — MMM Campaign',
    alt: 'Performers with illuminated fans and hoops at the Mystic Moonlight Masquerade',
    tone: 'dark',
    creditPending: true,
    caption: 'Mystic Moonlight Masquerade Campaign',
  },
  'portfolio-mingle': {
    label: 'Portfolio — Mystic Mingle',
    alt: 'Lion dancers in yellow and red performing at Mystic Mingle',
    tone: 'warm',
    creditPending: true,
    caption: 'Mystic Mingle',
  },
  'portfolio-threads': {
    label: 'Portfolio — Mystic Threads',
    alt: 'An illuminated plumed masquerade headpiece from Mystic Threads',
    tone: 'dark',
    creditPending: true,
    caption: 'Mystic Threads',
  },
  'portfolio-vogue': {
    label: 'Portfolio — The World In Vogue',
    alt: 'The Calgary skyline at dusk',
    tone: 'dark',
    creditPending: true,
    caption: 'The World In Vogue',
  },
  'portfolio-weddings': {
    label: 'Portfolio — Weddings Division',
    alt: 'A couple walking together through a white and ivory wedding reception',
    tone: 'light',
    creditPending: true,
    caption: 'Weddings Division',
  },
  'portfolio-destination': {
    label: 'Portfolio — Destination Weddings',
    alt: 'A couple embracing on the shore of a mountain lake',
    tone: 'light',
    creditPending: true,
    caption: 'Destination Weddings',
  },
  'portfolio-multicultural': {
    label: 'Portfolio — Multicultural Weddings',
    alt: 'A ceremonial book displayed on a gold stand at a multicultural wedding',
    tone: 'warm',
    creditPending: true,
    caption: 'Multicultural Weddings',
  },
  'portfolio-signature': {
    label: 'Portfolio — Signature Moments',
    alt: 'A celebration table dressed in red, blush and gold for a milestone occasion',
    tone: 'warm',
    creditPending: true,
    caption: 'Signature Moments',
  },
  'portfolio-workshops': {
    label: 'Portfolio — Workshops & Curated Experiences',
    alt: 'A ceremony staged within stone ruins, dressed with candles and drapery',
    tone: 'light',
    creditPending: true,
    caption: 'Workshops & Curated Experiences',
  },
  'portfolio-conferences': {
    label: 'Portfolio — Conferences & International Events',
    alt: 'A white gazebo on a Caribbean shoreline, set for an international gathering',
    tone: 'light',
    creditPending: true,
    caption: 'Conferences & International Events',
  },
  'portfolio-fundraising': {
    label: 'Portfolio — Fundraising Campaign Events',
    alt: 'Long banquet tables beneath timber beams and violet light, set for a gala',
    tone: 'warm',
    creditPending: true,
    caption: 'Fundraising Campaign Events',
  },

  'connect-hero': {
    label: 'Connect hero',
    alt: 'A long dressed table with a linen runner and candlelight, set for conversation',
    tone: 'dark',
    creditPending: true,
  },

  // ── Client photography curated from the Google Drive library, Aug 2026 ────
  'wed-claudia-and-ali-1': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Trio of pillar candles in glass hurricane vases with a single white rose, styled on a white pedestal in a softly lit ballroom',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'wed-claudia-and-ali-2': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Close-up of a Rolls-Royce Spirit of Ecstasy hood ornament in warm sunlight, a luxury car detail from the wedding day',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'wed-claudia-and-ali-3': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Tiered acrylic dessert tower of mini pastries beside a macaron tower, white hydrangea pomander, and gold cake servers',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'wed-paula-and-ever-1': {
    label: 'Paula and Ever — Wedding',
    alt: 'Overhead view of a first dance in a red ball gown on a warm wood floor surrounded by hanging Edison bulbs and styled tables',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Paula and Ever — Wedding',
  },
  'wed-paula-and-ever-2': {
    label: 'Paula and Ever — Wedding',
    alt: 'Couple in a red gown and plaid suit leaning together on a mezzanine railing framed by strings of glowing Edison bulbs',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Paula and Ever — Wedding',
  },
  'wed-rob-and-lynea-1': {
    label: 'Rob and Lynea — Surprise Wedding',
    alt: 'Newlyweds embracing guests in front of a marigold-orange draped ceremony backdrop with tropical greenery',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Rob and Lynea — Surprise Wedding',
  },
  'wed-rob-and-lynea-2': {
    label: 'Rob and Lynea — Surprise Wedding',
    alt: 'Ceremony moment beneath an orange draped canopy with patterned tile backdrop and monstera leaf accents',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Rob and Lynea — Surprise Wedding',
  },
  'wed-erin-and-rick-1': {
    label: 'Erin and Rick — Wedding',
    alt: 'Round timber pavilion venue with central stone firepit, log benches, string lights, and a draped head-table backdrop',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Erin and Rick — Wedding',
  },
  'wed-erin-and-rick-2': {
    label: 'Erin and Rick — Wedding',
    alt: 'Bride in lace gown and groom walking hand in hand along a pine forest path',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Erin and Rick — Wedding',
  },
  'wed-erin-and-rick-3': {
    label: 'Erin and Rick — Wedding',
    alt: 'Groom embracing bride on a driftwood-strewn mountain lakeshore under dramatic clouds',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Erin and Rick — Wedding',
  },
  'wed-christina-and-vince-1': {
    label: 'Christina and Vince — Wedding',
    alt: 'Bride with bouquet and groom posed in riverside greenery with the downtown skyline and bridge behind them',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Christina and Vince — Wedding',
  },
  'wed-christina-and-vince-2': {
    label: 'Christina and Vince — Wedding',
    alt: 'Sunlit A-frame reception hall set with white linens, gold-sashed lace chair covers, and white balloon columns',
    tone: 'light',
    credit: 'by Mike Hopkins Photography',
    caption: 'Christina and Vince — Wedding',
  },
  'wed-christina-and-vince-3': {
    label: 'Christina and Vince — Wedding',
    alt: 'Round reception table with satin linens, lace and gold runner, white rose centerpiece, and wrapped charger plates',
    tone: 'light',
    credit: 'by Mike Hopkins Photography',
    caption: 'Christina and Vince — Wedding',
  },
  'wed-hannah-and-zach-1': {
    label: 'Hannah and Zach — Wedding',
    alt: 'Hand-illustrated pink welcome sign on an easel at the entry of a rustic barn reception strung with fairy lights',
    tone: 'light',
    creditPending: true,
    caption: 'Hannah and Zach — Wedding',
  },
  'wed-hannah-and-zach-2': {
    label: 'Hannah and Zach — Wedding',
    alt: 'Seating chart sign and gold-framed guest book overlooking a candlelit barn reception with white-linen tables',
    tone: 'light',
    creditPending: true,
    caption: 'Hannah and Zach — Wedding',
  },
  'wed-farah-1': {
    label: 'Farah — Wedding',
    alt: 'Lounge vignette with blush settee, mercury-glass side tables, black candelabras, and a wisteria greenery drape backdrop',
    tone: 'light',
    creditPending: true,
    caption: 'Farah — Wedding',
  },
  'wed-marisol-1': {
    label: 'Marisol — Wedding',
    alt: 'White skirted table with charcoal satin and rhinestone runner, calla lily arrangement, and branch accents',
    tone: 'light',
    creditPending: true,
    caption: 'Marisol — Wedding',
  },
  'sig-vow-renewal-lisa-and-john-1': {
    label: 'Lisa and John — Vow Renewal',
    alt: 'Couple laughing and dancing barefoot on a lawn beside a prairie pond at golden hour',
    tone: 'light',
    creditPending: true,
    caption: 'Lisa and John — Vow Renewal',
  },
  'sig-vow-renewal-lisa-and-john-2': {
    label: 'Lisa and John — Vow Renewal',
    alt: 'Backlit golden-hour kiss in a grassy meadow with long shadows and sun flare',
    tone: 'light',
    creditPending: true,
    caption: 'Lisa and John — Vow Renewal',
  },
  'sig-vow-renewal-lisa-and-john-3': {
    label: 'Lisa and John — Vow Renewal',
    alt: 'Black-and-white portrait of a couple holding hands, she in a birdcage veil and feather fascinator with embroidered sheer sleeves',
    tone: 'light',
    creditPending: true,
    caption: 'Lisa and John — Vow Renewal',
  },
  'sig-engagement-c-and-a-1': {
    label: 'Claudia\'s Bridal Shower',
    alt: 'Gilded full-length mirror, candle stand, and balloon bouquet beside a she-said-yes welcome sign for a bridal shower',
    tone: 'light',
    creditPending: true,
    caption: 'Claudia\'s Bridal Shower',
  },
  'sig-engagement-c-and-a-2': {
    label: 'Claudia\'s Bridal Shower',
    alt: 'Blush, white, and gold balloon arch over a cream settee flanked by gold accent tables and sculptural decor',
    tone: 'light',
    creditPending: true,
    caption: 'Claudia\'s Bridal Shower',
  },
  'sig-proposal-niki-and-mervin-1': {
    label: 'Niki and Mervin — Proposal',
    alt: 'Couple embracing beside MARRY ME spelled in red rose petals, framed by moss garlands and red roses',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Niki and Mervin — Proposal',
  },
  'sig-proposal-niki-and-mervin-2': {
    label: 'Niki and Mervin — Proposal',
    alt: 'Newly engaged couple at a moss-covered tablescape with red taper candles and a skyline view through the window',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Niki and Mervin — Proposal',
  },
  'sig-proposal-meegan-and-logan-1': {
    label: 'Meegan and Logan — Proposal',
    alt: 'Candlelit winter proposal kiss surrounded by flocked evergreen trees, string lights, and a brass candelabra',
    tone: 'light',
    credit: 'by Connor Eseau',
    caption: 'Meegan and Logan — Proposal',
  },
  'sig-proposal-tasnia-and-nick-1': {
    label: 'Tasnia and Nick — Proposal',
    alt: 'Groom-to-be kneeling with the ring amid flocked trees, marigold garlands, and a mirrored backdrop',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Tasnia and Nick — Proposal',
  },
  'sig-galentines-1': {
    label: 'Galentine\'s Styled Shoot',
    alt: 'Two friends tossing red and white balloons in a Valentine\'s set with gold chairs and heart garland backdrop',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Galentine\'s Styled Shoot',
  },
  'sig-galentines-2': {
    label: 'Galentine\'s Styled Shoot',
    alt: 'Styled Galentine\'s table with LOVE sign, heart wands, gold-framed chairs, and scattered balloons on gold sequin flooring',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Galentine\'s Styled Shoot',
  },
  'sig-bridal-shower-vegas-1': {
    label: 'Tasnia\'s Bridal Shower — Las Vegas',
    alt: 'Bridal party strolling beneath the golden crown facade of the Queens casino on Fremont Street in Las Vegas',
    tone: 'light',
    credit: 'by The Wild Vow',
    caption: 'Tasnia\'s Bridal Shower — Las Vegas',
  },
  'sig-bridal-shower-vegas-2': {
    label: 'Tasnia\'s Bridal Shower — Las Vegas',
    alt: 'Four women glancing back beneath the gold Queens marquee and Fremont Street canopy in Las Vegas',
    tone: 'light',
    credit: 'by The Wild Vow',
    caption: 'Tasnia\'s Bridal Shower — Las Vegas',
  },
  'corp-hull-services-winter-holiday-party-1': {
    label: 'Hull Services — Winter Holiday Party',
    alt: 'Winter wonderland photo lounge with white loveseat, flocked evergreens, lamp posts with red bows, and candle side tables',
    tone: 'light',
    creditPending: true,
    caption: 'Hull Services — Winter Holiday Party',
  },
  'corp-hull-services-winter-holiday-party-2': {
    label: 'Hull Services — Winter Holiday Party',
    alt: 'Christmas tree photo backdrop with popcorn-and-ornament garland, lace curtain, wrapped gifts, and quilted candle pillow',
    tone: 'light',
    creditPending: true,
    caption: 'Hull Services — Winter Holiday Party',
  },

  // ── Published press tear sheets ────────────────────────────────────────────
  'feature-bridal-fantasy-1': {
    label: 'Bridal Fantasy — Upcycled Grunge cover spread',
    alt: 'Bridal Fantasy magazine page: a couple embrace in a weathered green pickup, gown spilling to the ground, titled Upcycled Grunge',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Bridal Fantasy Magazine — print feature',
  },
  'feature-bridal-fantasy-2': {
    label: 'Bridal Fantasy — Upcycled Grunge credits spread',
    alt: 'Bridal Fantasy magazine page of the Upcycled Grunge shoot crediting Sol Vé Custom Event Décor for floral, décor and styling',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Bridal Fantasy Magazine — print feature',
  },

  // ── Reels assembled from the client's photography (no footage exists yet;
  //    each is a slow Ken Burns pass over the credited photographs) ───────────
  'reel-weddings': {
    label: 'Weddings in Motion',
    alt: 'A slow-moving reel of Sol Vé wedding and elopement photography',
    tone: 'light',
    credit: 'by Abbey Raine Photography and Brottrel Co. Photography Studio',
    caption: 'Weddings in Motion',
  },
  'reel-signature-moments': {
    label: 'Signature Moments in Motion',
    alt: 'A slow-moving reel of proposal and Valentine’s photography',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Signature Moments in Motion',
  },

  // ── Client photography recovered from the iMessage archives, Aug 2026 ──────
  'portfolio-italiano-1': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bridal bouquet of white and yellow blooms resting on a tufted vintage bench',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-2': {
    label: 'Elopement Italiano Vibes',
    alt: 'A candlelit sweetheart table styled with florals for an evening reception',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-3': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bride and groom seated together on a vintage settee beneath a tree',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-4': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bride\'s portrait on a vintage settee beneath a tree, framed by sheer drapery',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-5': {
    label: 'Elopement Italiano Vibes',
    alt: 'A close portrait of a bride and groom cheek to cheek in evening light',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-6': {
    label: 'Elopement Italiano Vibes',
    alt: 'A bride and groom in a close embrace among green leaves',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-italiano-7': {
    label: 'Elopement Italiano Vibes',
    alt: 'A groom\'s portrait in a lace shirt and black vest at the treeline',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Italiano Vibes',
  },
  'portfolio-nathan-allan-1': {
    label: 'Nathan and Allan — Elopement',
    alt: 'A groom in the barber\'s chair getting ready before the ceremony',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-nathan-allan-2': {
    label: 'Nathan and Allan — Elopement',
    alt: 'A wedding stationery suite of menu, RSVP and day-of cards arranged against tree bark',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-nathan-allan-3': {
    label: 'Nathan and Allan — Elopement',
    alt: 'Two grooms share a dip kiss in a riverside meadow',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-nathan-allan-4': {
    label: 'Nathan and Allan — Elopement',
    alt: 'Two grooms embrace beside a creek, one dipping the other mid-laugh',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Nathan and Allan — Elopement',
  },
  'portfolio-dirt-roads-1': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A bride seated with a guitar while her groom stands beside her in a prairie field',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-dirt-roads-2': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A bride and groom walk a prairie path carrying vintage suitcases',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-dirt-roads-3': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A couple walk hand in hand down a field track with suitcases and a guitar case',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-dirt-roads-4': {
    label: 'Elopement Styled Shoot — Dirt Roads',
    alt: 'A bride and groom pause with a suitcase in a ripened wheat field',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Elopement Styled Shoot — Dirt Roads',
  },
  'portfolio-marie-andre-1': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'A bride raises her bouquet overhead in an open snowfield',
    tone: 'light',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-marie-andre-2': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'A bride and groom share a dip kiss in deep snow at their mountain ski elopement',
    tone: 'light',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-marie-andre-3': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'A groom lifts his bride in a snowy clearing beneath a mountain ridge',
    tone: 'light',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-marie-andre-4': {
    label: 'Marie and Andre — Ski Elopement',
    alt: 'The bride in her ski jacket on a snow-edged mountain road before the ceremony',
    tone: 'light',
    credit: 'by Brottrel Co. Photography Studio',
    caption: 'Marie and Andre — Ski Elopement',
  },
  'portfolio-claudia-ali-2': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'A bride and groom climb a sweeping staircase hand in hand beneath a timber ceiling',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-claudia-ali-3': {
    label: 'Claudia and Ali — White Wedding',
    alt: 'Gold letters spelling love, votive candles and a citrus drink dispenser styled on a black bar cart',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Claudia and Ali — White Wedding',
  },
  'portfolio-proposal-1': {
    label: 'Tasnia and Nick — Proposal',
    alt: 'A newly engaged couple embrace beside a lit Christmas tree',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Tasnia and Nick — Proposal',
  },
  'portfolio-proposal-2': {
    label: 'Tasnia and Nick — Proposal',
    alt: 'An engaged couple hold each other by candlelight',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Tasnia and Nick — Proposal',
  },
  'portfolio-valentines-1': {
    label: 'Valentine\'s Styled Shoot',
    alt: 'A couple kiss before a white floral arch ringed with candles',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Valentine\'s Styled Shoot',
  },
  'portfolio-valentines-2': {
    label: 'Valentine\'s Styled Shoot',
    alt: 'A couple share a kiss beneath a white rose arch',
    tone: 'light',
    credit: 'by Abbey Raine Photography',
    caption: 'Valentine\'s Styled Shoot',
  },
  'portfolio-valentines-3': {
    label: 'Valentine\'s Styled Shoot',
    alt: 'An orange love sign with glittered hearts styled for a Valentine\'s shoot',
    tone: 'light',
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
