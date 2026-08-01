# Design — Sol Vé Custom Events

A locked design system for this site. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow. Produced by the 2026-08-01 full-site redesign responding
to Lynea's feedback email (bigger header/logo, socials, per-page contact button,
credited photography, equal-boxes Values layout, cinematic motion, old-world
opulence that stays corporate-safe).

Where this file and the v5 Build Instructions conflict on *copy or information
architecture*, v5 wins. Where they conflict on *visual execution*, the client's
2026-08 feedback email (and therefore this file) wins.

## Genre
editorial (luxury register — "old-world opulence, relatable to corporate")

## Macrostructure family
- Marketing pages (home, divisions, SOLVÉ, MMM): Photographic Marquee —
  full-bleed cinematic hero, centred ornamented section heads, alternating
  ivory/charcoal bands, asymmetric editorial splits.
- Content pages (about, values, press): Long Document — generous measure,
  drop caps on openers, centred ornament rules, quote-led where copy allows.
- Form pages (contact, delegate, sponsor): Split Letter — headline column +
  refined form column.

## Theme
Client-locked palette (hex values binding per v5 — OKLCH substitution not
permitted; see tokens.css for the full set):
- `--ivory` #F8F7F6 · `--charcoal` #242216 · `--gold` #9E8D6F ·
  `--gold-ink` #7C6A4C · `--bronze` #8B765C · `--champagne` #C7B6A6 ·
  `--linen` #D0C8B1 · `--stone` #ABA297
- SOLVÉ pages: Far Blue #0E2447 family. MMM: Deep Burgundy #5B1020 family.
- Contrast law (v5): light text only on dark grounds; dark text only on ivory.
- Gold-foil gradient (large display on dark only): champagne → gold range,
  darkest stop #9E8D6F to keep ≥3:1 on charcoal/far-blue.

## Typography
- Display: "Cormorant Garamond", weight 500/600, style normal — always roman.
  Hero display clamp(2.9rem → 5.5rem); section display clamp(2.1rem → 3.4rem).
- Caps/UI voice: "Cinzel", weight 400/600 — nav links, eyebrows, buttons,
  labels, figcaption credits. Uppercase, tracked 0.14–0.3em. This face IS the
  old-world layer; never use it for running text.
- Body: "Cormorant Garamond" 400/500, 19–21px, line-height 1.65 for prose.
- Forms + fine print: "Inter" 400/500 only.
- Drop caps: first paragraph of long-document openers only (About, division
  intros). Cormorant 600, 3-line height, gold-ink.
- Italic: body-copy emphasis only. Never on headings, never on display quotes.

## Spacing
4-pt scale in tokens.css. Section rhythm: `--section-pad` =
clamp(96px, 11vw, 168px). Pages use named tokens, never raw values.

## Ornament language (the opulence layer — use with restraint)
- Ornament rule: short hairline · small gold lozenge · hairline, centred under
  major section heads. Max one per section.
- Double-hairline gold rules at band seams (1px + 3px gap + 1px).
- Corner ticks on cards: L-shaped gold corners at top-left/bottom-right.
- Roman numerals (I–VI) on division cards as crafted metadata.
- Oversized hanging quote mark (Cormorant, champagne) on quote blocks.

## Motion
- Easing: cubic-bezier(0.16, 1, 0.3, 1) as `--ease-out`.
- One orchestrated hero entrance per page (opacity + translateY).
- Homepage hero: 4-still cinematic crossfade, 28s cycle, slow scale 1→1.07.
  transform/opacity only. This is the "film" layer until real reels arrive;
  a real `<video>` drop-in slot is documented in build_site.py.
- Nav condense: separate fixed compact bar, transform: translateY only.
- prefers-reduced-motion: hero film freezes on first frame; entrance becomes
  ≤150ms opacity; nav bar snaps.
- No scroll-triggered reveals. No animation library. No layout animation.

## Microinteractions stance
- Silent success on forms (inline confirmation, no toasts).
- Link hover: color shift + underline grow (transform: scaleX on a ::after).
- Card hover: border brightens, background warms; no lift/scale.
- Focus: 2px gold outline, 3px offset, instant.

## CTA voice
- Primary: gold fill, ivory Cinzel caps 13px tracked 0.16em, square (2px),
  generous padding, no-wrap. Copy pattern: "Begin Your Experience",
  "Tell Us Your Vision" — invitation verbs, never "Submit"/"Learn More" alone.
- Secondary: 1px bronze outline, transparent, same voice.
- Contact CTA is present on every page: masthead + compact bar + closing band.

## Chrome (fixed across the site)
- Nav: grand masthead — utility strip (charcoal: location left, socials +
  email right), then one crest row: three-line Menu button (staggered lines,
  middle line draws full on hover, tracked-caps "Menu" label) left, centred
  logo ≥104px tall, gold contact button right. No visible links row at any
  width — the Menu button is the way in, every viewport.
- The Menu: full-screen charcoal overlay framed by an inset gold hairline.
  Left: numbered (roman) display links in Cormorant, staggered fade-up on
  open, gold underline grows on hover. Right aside: The Six Divisions list,
  ornament rule, MMM logo popup trigger (v5), socials, email. Reduced motion:
  opacity-only, no stagger.
- On scroll: fixed compact bar (Menu button · 48px logo · Contact) slides in
  (transform only).
- Footer: charcoal colophon — large centred logo, ornament rule, link row,
  social icons (Instagram, Facebook, Pinterest, LinkedIn — inline SVG, gold),
  email + location, bottom bar with © · credit "Powered by Avallon".

## Imagery & credits
- Professional photography only. Every figure carries a credit slot:
  known → "Photography: <name>"; unknown → "Photography credit to be
  confirmed" (PHOTO_CREDITS dict in build_site.py is the single source).
- Stock stand-ins are labelled "Style reference — awaiting Sol Vé photography"
  and are scheduled for replacement by client-supplied images.
- No cartoons, no illustration, no AI-generated imagery. Luxury only.

## Per-page allowances
- Homepage MAY use the cinematic crossfade hero (only page with it).
- SOLVÉ/MMM keep their own palettes but share type, ornament, CTA voice.
- Form pages: typography only, no enrichment.

## What pages MUST share
- The masthead/footer chrome, logo scale, contact CTA placement.
- Display + caps + body faces. The ornament language. The CTA voice.
- Section-head rhythm (centred eyebrow → display head → ornament rule).

## What pages MAY differ on
- Macrostructure within the family. Band order/count. Split direction.
- SOLVÉ/MMM palette swap per v5.

## Socials (site-wide)
- Instagram: https://www.instagram.com/solvecustomevents/
- Facebook: https://www.facebook.com/solvecustomevents/
- Pinterest: https://www.pinterest.com/solvecustomevents
- LinkedIn: https://ca.linkedin.com/in/lynea-vaugeois-hetherington-31020875
