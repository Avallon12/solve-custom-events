# Sol Vé Custom Events — website

React + Vite + TypeScript + Tailwind. No UI framework, no page builder.

```bash
npm install
npm run dev      # local preview
npm run build    # type-check + production build
npm run smoke    # renders every route and reports failures
npm run lint
```

---

## What was decided, and why

Three client documents contradict each other. Where they conflict, the newest
one wins. These are the calls that were made — flag any you want reversed.

**1. SOLVÉ Global Summit is not on the site.**
The Creative Direction Manual and Build v5 both feature it heavily. The newer
"Website order and messaging" document ends with: *"Remove SOLVÉ Global Summit
completely for the time being… DO NOT have it positioned anywhere on the
website!"* — so there is no `/solve` page, no homepage banner, no delegate or
sponsor form, and no mention on the Conferences page. Nothing else was built
around its absence, so it can be added later as one more route.

**2. The newest document's page order and copy.**
`Home → Foundation → Commitments → Experiences → Portfolio → Perspectives →
Press → Connect`, plus `Meet the Founder`, the six division pages, and the
Mystic Moonlight campaign. The older sitemap's `/about`, `/values`, `/divisions`
naming was dropped along with its weaker copy.

**3. Division five's headline.**
Build v5 gives "World-class production at every scale", but the Manual's own
forbidden-vocabulary list (9.3) rules out *world-class*. The newer document's
line is used instead: **"The way leaders gather influences what becomes possible
together."**

**4. Divisions renamed** to the newest document's names — *Design & Stylization,
Weddings, Signature Moments, Workshops & Curated Experiences, Conferences &
International Events, Fundraising Campaign Events* — with the older document's
longer body copy kept where it existed.

**5. Community Impact sits outside the three commitment boxes.**
Lynea asked for three vertical boxes, equal in size and spacing, so that none
reads as more important. The source document has four commitments. Reconciliation,
2SLGBTQIA+ and Conservation & Environmental are the three boxes, rendered from a
single loop with identical markup so they cannot drift out of parity; Community
Impact is a full-width section below them.

---

## Before this goes live

### 1. Photographer credits — `src/data/media.ts`

**23 of the 24 image slots are filled with real Sol Vé photography**, taken from
solvecustomevents.com, re-encoded to WebP (4 MB total for the whole site) and
placed in `public/media/`. Every slot is defined once in `media.ts`.

**What still needs doing: the photographer names.** Only six files on the old
site name their photographer, in the filename — those are credited to *Mike
Hopkins Photography, 2019*. The rest carry no attribution anywhere, so they are
marked `creditPending: true` and render with a visible line beneath them:
*"Photographer credit to be confirmed."* Lynea's instruction was "ALL art and
photos must have a credited artist (If it is not known, please ask)" — so the
site asks, in public, until the names arrive. Replace each `creditPending: true`
with `credit: 'by …'` as they are confirmed.

```ts
'home-hero': {
  label: 'Homepage hero',
  alt: 'A Sol Vé ballroom set beneath blossom trees…',
  tone: 'dark',
  src: '/media/home-hero.webp',
  credit: 'by Jane Doe',   // ← replaces creditPending: true
},
```

**Deliberately excluded:** the "Matt & Ann: A Touch of Magic" gallery and several
others carry a visible *Faithful* photographer watermark. Manual 6.2 forbids
watermarked images, so none of them were used.

**Still a placeholder:** the Mystic Moonlight hero. No MMM photography exists on
the old site — Lynea's Mystic Mingle folder (lion dancers, performers) belongs
there. Empty slots render a warm gradient, film grain and the Sol Vé emblem
rather than a broken image, so nothing is ever presented as Sol Vé's work when
it isn't.

**Reels:** set `video: '/media/clip.mp4'` instead of `src`. It plays muted and
looping. Luxury footage only — no animation, no cartoon.

### 2. Social links — `src/data/site.ts`

Four URLs, currently empty. Any left empty renders as a dimmed, non-clickable
icon marked "link pending" rather than a broken link.

```ts
{ name: 'LinkedIn', url: '' },   // ← the Sol Vé Custom Events COMPANY page
{ name: 'Instagram', url: '' },
{ name: 'Facebook', url: '' },
```

### 3. Form routing — `src/pages/Connect.tsx`

`FORM_ENDPOINT` is empty. Paste a Formspree / HubSpot / Netlify endpoint and
submissions POST to it. Until then the form composes the same submission as an
email to `lynea@solvecustomevents.com` (Build v5: all forms route to Lynea only)
so no enquiry is silently lost. `info@solvecustomevents.com` remains the
public-facing address.

### 4. Logo

`src/components/Logo.tsx` is a typographic stand-in built to the brand's
proportions — emblem plus wordmark, 56px in the bar and 96px in the footer,
well above the old 44px ceiling that made it "lost and irrelevant". Download the
real mark from solvecustomevents.com, drop it in `public/media/logo.svg` and
swap the component's internals for an `<img>`.

### 5. Still needed from Lynea

- **Photographer names** for the 22 photographs currently marked
  `creditPending` (see section 1)
- Mystic Moonlight Masquerade photography — lion dancers, performers, event scenes
- Testimonial quotes (seven categories are named in her document; none are
  written, so no testimonials section was built rather than inventing any)
- Press and publication article links, award imagery
- Confirmation of the two unnamed publications and the "Best Decoration" award body
- CRM platform choice

---

## Design system

| | |
|---|---|
| Ivory `#F8F7F6` | page ground |
| Muted Antique Gold `#9E8D6F` | logo, headings, primary CTA, rules |
| Warm Stone `#ABA297` | secondary accents |
| Deep Olive Charcoal `#242216` | dark sections, body text |
| Bronze `#8B765C` | borders, hairlines, hover |
| Champagne `#C7B6A6` · Linen `#D0C8B1` · Cocoa `#6C6251` | supporting |
| MMM Burgundy `#5B1020` · MMM Gold `#C9A84C` | campaign section only |

Playfair Display for headings, Cormorant Garamond for body, Inter for labels
and buttons. Type scale, spacing and button specs follow the Manual.

Contrast rule is absolute: light type only on dark grounds, dark type only on
light. Sections alternate ivory → linen → charcoal so no two adjacent sections
share a ground.

## Structure

```
src/
  data/         all copy and configuration — no strings live in components
    site.ts       nav, contact, socials, CTA wording
    media.ts      every image/video slot
    divisions.ts  the six divisions + Mystic campaign facts
    content.ts    foundation, commitments, founder, perspectives, press
  components/
    Nav · Footer · ContactRail · MysticDialog
    Hero · ScrollFeature · Media · ClosingCTA · Logo · BrandIcons · ui
  pages/        one file per route
  lib/meta.ts   per-page SEO title + description
scripts/smoke.tsx   renders all 17 routes, catches runtime errors
```

Contact is reachable from anywhere: the nav button, a floating rail that appears
on scroll on every page except `/connect`, and a closing call to action at the
foot of every page.
