# Design — Sol Vé Custom Events

A locked design system for this site. Every page redesign reads this file
before emitting code. Extend or amend this file when the system needs to grow —
do not regenerate per page.

## Genre
Editorial (luxury register). The feeling to carry: old-world opulence and
charm, sober enough to reassure corporate, government and institutional
buyers. Those words never appear in copy — design carries them.

## Copy rule (overrides everything)
Every word of visible copy comes verbatim from the client's content document,
in her order. No invented headings, no filler, no paraphrase. `npm run build`
plus the verbatim checker enforce this — see the scripts/ directory.

## Theme
The client's own palette (Creative Direction Manual, Chapter 1), tokenised in
`tailwind.config.js` — that config is the single token source; use the named
Tailwind colours, never raw hex in components.

- Paper: `ivory` #F8F7F6 · secondary grounds `linen`, `champagne`
- Ink: `charcoal` #242216 · secondary inks `espresso`, `walnut`, `cocoa`
- Accent: `gold` #9E8D6F — the only accent, ≤ ~5 % of any viewport
- Rules/hairlines: `stone`, `bronze`, and the `.foil` gold gradient rule

## Typography — two families, no exceptions
- Display: **Fraunces Variable** (self-hosted via @fontsource), weight 340,
  `font-optical-sizing: auto`, tracking −0.01em, roman only — never italic
  headings, never a third face.
- Body: **EB Garamond** 400 (+500/600 and italic), 18 px base, 1.6 leading.
  Her document's italic standfirsts render in EB Garamond italic.
- UI labels/eyebrows/buttons: EB Garamond 600, uppercase, tracked
  (0.12–0.3 em) — the text face in caps, not a third family.
- Scale: Display xl 40→88 px (leading 1.02–1.04), lg 32→52, md 25→33,
  sm 21→25. Body 17–22 px. Dramatic contrast comes from size, not weight.

## Spacing
Sections: 60 px mobile / 100–128 px desktop (`Section` primitive). Containers:
1240 px default, 820 narrow, 1440 wide. Use the primitives, not raw sections.

## Motion
- framer-motion for the Home scroll hero only; everywhere else the `Reveal`
  primitive (fade + 24 px rise, 900 ms, ease-out, once).
- `prefers-reduced-motion` collapses everything (src/index.css).
- Never animate layout properties; never animate the focus ring.

## Imagery
No photograph or reel ships until its photographer credit is confirmed.
Every media slot renders the designed placeholder (`Placeholder` in
`src/components/Media.tsx`): tone gradient, hairline inner frame, emblem,
slot label, required aspect ratio, "Photography to be supplied", and
"Photo: [credit pending]". Swapping in a real photo is one line: move the
file into `public/media/` and set `src:` on the slot in `src/data/media.ts`.
Call sites own the layout aspect ratio, so nothing reflows at swap time.
No cartoons or illustration anywhere; professional photography only.

## CTA voice
Approved wording only (`cta` in `src/data/site.ts`) — "Begin the
Conversation", "Explore Our Experiences", "View Our Work", "Request a
Proposal". Buttons: 2 px radius, min-height 52 px, EB Garamond 600 caps.
The site-wide closing CTA uses her verbatim Connect lines.

## What pages MUST share
The wordmark, the gold accent and its restraint, both typefaces, the CTA
voice, the Section/Container rhythm, the hairline-and-ornament divider
language, and the placeholder treatment.

## What pages MAY differ on
Section composition within the page (index lists, split layouts, full-bleed
bands), tone alternation (ivory/linen/charcoal), and hero size — Home keeps
the scroll-choreography hero; inner pages use the quieter `Hero` primitive.

## Rendering
Every route is statically prerendered (`scripts/prerender.tsx`) with a unique
title, meta description, OG/Twitter tags and canonical URL, then hydrated.
Keep new pages in the ROUTES lists of scripts/prerender.tsx, smoke, audit,
placeholder-check, and render-text.
