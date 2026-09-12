# Sol Vé Custom Events — website

React + Vite + TypeScript + Tailwind. No UI framework, no page builder.

Deployed on Vercel. Vercel blocks a deployment when the commit email cannot be
matched to a GitHub account, so commits from this repository are authored as
`hello@avallon.ca` — set locally, in `.git/config`, not globally:

```bash
git config user.email "hello@avallon.ca"
git config user.name  "Avallon"
```

```bash
npm install
npm run dev      # local preview
npm run build    # type-check + production build
npm run smoke    # renders every route and reports failures
npm run audit    # fails on summit references or photographer-credit lines
npm run lint
```

---

## What this site is

Exactly the client's document — "Sol Vé Custom Events Website order and
messaging" — in its wording and its sequence, and nothing else.

Her instruction, verbatim: *"I want the EXACT writing in the EXACT same order
that is in the document I sent you. Both the messaging and sequence is
explicitly determined by where my brand is going and directly correlates to
upcoming expansions. Please do not add extra areas or explanations. Simply use
what has been provided."*

So the twelve pages are her twelve, in her order:

`Home · Foundation · The Sol Vé Way · Beyond the Occasion · Our Commitments ·
Sol Vé Principles · Where It Began · What We Create · Signature Experiences ·
Meet the Founder · Portfolio / Journal · Connect`

**Removed**, because it came from the Creative Direction Manual or Build v5
rather than from her document: the six division sub-pages, the Press page,
the Mystic Moonlight page and nav dialog, "What Sol Vé Is", the four-card
values strip, "Who we are", Mission/Vision/Values, the first-person biography,
Notable Work, the founder pull-quote, and the homepage sections beneath the
hero. Her document gives the Home page one block of copy; that is what it has.

**Removed, on her explicit instruction:** SOLVÉ Global Summit, in full — the
page, both forms, its data, colours and assets. `npm run audit` renders every
route and fails the build if a reference reappears, including in alt text and
metadata.

Her brand architecture, in her words, is why the sequence matters:

> There is Sol Vé Custom Events. There is Mystic Moonlight Masquerade Ball &
> Gala Fundraising Campaign (a production of Sol Vé Custom Events). There is
> SOLVÉ the branded institution. There is SOLVÉ Global Summit in production.

Nothing in `src/data/content.ts` is invented or paraphrased. Before adding a
section, check it exists in her document. One exception, at her request on
2026-09-11: a grammar pass that fixed agreement, spelling and punctuation
without changing a word's meaning (listed in that day's commit message).

---

## Before this goes live

### 1. Photographer credits — `src/data/media.ts`

**Every image slot is filled with real Sol Vé photography.** Most of it comes
from the *Exact Banner-by-Banner Photo Guide* — the photographs are embedded in
that PDF, so they were extracted at full resolution and placed in the exact
slots Lynea assigns them. The rest came from solvecustomevents.com. All of it is
re-encoded to WebP (3 MB for the whole site) and defined once in `media.ts`.

**Credit lines are switched off.** Lynea asked for every photographer-credit
mention to come off the site until she supplies the names herself. The display
is gated behind `SHOW_CREDITS` in `src/components/Media.tsx`, currently `false`.

The data is intact. `creditPending: true` still records which photographs are
waiting on a name, and one photograph — the Mike Hopkins frame on *Where It
Began*, credited from its own filename — still carries a real `credit`. Nothing
was deleted, only hidden.

When the names arrive: fill in `credit: 'by …'` on each slot, flip
`SHOW_CREDITS` to `true`, and remove the credit patterns from
`scripts/audit.tsx`. Every line returns in place.

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

**No placeholders remain.** If a slot is ever emptied it falls back to a warm
gradient, film grain and the Sol Vé emblem rather than a broken image, so
nothing is ever presented as Sol Vé's work when it isn't.

**Reels:** set `video: '/media/clip.mp4'` instead of `src`. It plays muted and
looping. Luxury footage only — no animation, no cartoon.

### 2. Social links — done

LinkedIn (the company page, not a personal profile), Instagram and Facebook are
live in the footer and the menu, and all three were checked to resolve. Any
future entry left as an empty string renders as a dimmed, non-clickable icon
marked "link pending" rather than a broken link.

### 3. Form routing — `src/pages/Connect.tsx`

`FORM_ENDPOINT` is empty. Paste a Formspree / HubSpot / Netlify endpoint and
submissions POST to it. Until then the form composes the same submission as an
email to `lynea@solvecustomevents.com` (Build v5: all forms route to Lynea only)
so no enquiry is silently lost. `info@solvecustomevents.com` remains the
public-facing address.

### 4. Logos — done

Both real marks are in place: `public/media/logo.webp` (Sol Vé, gold on
transparent, so it works on ivory and on charcoal) and
`public/media/solve-summit-logo.webp` (SOLVÉ Global Summit). The Sol Vé mark
renders 56px in the bar and 92px in the footer, well above the old 44px ceiling
that made it "lost and irrelevant".

### 5. Still needed from Lynea

- **One decision on the Land Acknowledgement.** Two of her documents give
  different versions. Build v5 (copied from solvecustomevents.com/values-1)
  names *Moh'kinsstis* and the *Otipemisiwak Métis Government of the Métis
  Nation within Alberta District 6*. The newer document names the *Îyârhe
  Nakoda Nations (Bearspaw, Chiniki, Goodstoney)* and the *Métis Nation of
  Alberta, Region 3*. The site currently uses the newer, fuller territory
  paragraph, with v5's opening and closing lines around it. Lynea should confirm
  which naming is current — this is not text to guess at.
- **Testimonial quotes — done.** Four arrived (Rida Ghani, Laura Darichuk,
  Quora Strings, Mike G. Guthrie) and are in `src/data/content.ts` word for
  word, per her note: not rewritten, corrected, shortened or paraphrased. The
  seven placeholder categories from the earlier document are gone. Any further
  quote is one more entry in that array; the page, the header dropdown and the
  Portfolio list all read from it.
- **Public reviews — Google done, Facebook pending.** `portfolio.reviews` in
  `src/data/content.ts` holds eight of the twelve five-star Google reviews,
  copied word for word from the Google Business listing on 2026-09-08; each
  card shows the stars, the platform mark and the reviewer's public name. The
  `year` is read off Google's relative date that day. Facebook reviews need a
  logged-in session to read, so none are in yet: add each as an entry with
  `source: 'facebook'` and the card gets the Facebook mark automatically.
- **Per-project detail for the Portfolio.** The newest document asks each
  project to carry its purpose, story, design philosophy, photography and client
  outcome. The gallery is in place; the written detail per project is not,
  because none was supplied.
- **Photographer names** for the photographs marked `creditPending` — credit
  lines stay hidden site-wide until they arrive (see section 1)
- Mystic Moonlight Masquerade photography — lion dancers, performers, event scenes
- Press and publication article links, award imagery
- Confirmation of the two unnamed publications and the "Best Decoration" award body
- CRM platform choice

---

## SEO

Every route is prerendered to static HTML at build time, so crawlers and
social scrapers receive the finished document rather than an empty shell.

- `scripts/prerender.tsx` runs as the last step of `npm run build`. It renders
  each route in `src/data/routes.ts` with React's static API (lazy chunks
  resolve before the HTML is captured) and writes `dist/<route>.html`
  with title, description, canonical, Open Graph, Twitter card, a preload for
  the hero photograph, and JSON-LD. It also writes `404.html`, `sitemap.xml`
  and `robots.txt`. **Add a route in App.tsx, add it to `routes.ts`.**
- `src/lib/meta.ts` — `usePageMeta(title, description, { image, robots, type })`.
  Every page calls it; the build fails if one does not. `SITE_URL` there is the
  canonical origin used everywhere — `https://www.solvecustomevents.com`, because
  Vercel 308-redirects the apex to www. Heroes register their photograph as the
  page's preview image automatically.
- `src/lib/structured-data.ts` — the JSON-LD graph: Organization + LocalBusiness
  (address as published on the Google Business listing), WebSite, the page
  with its breadcrumb, plus Service on each division, Person on the founder
  page and Article on each Perspectives essay. Review markup is deliberately
  left out: Google ignores self-published reviews.
- `public/media/og/` — 1200×630 JPEG twins of the hero photographs, because
  some scrapers will not read WebP. Generated on macOS with `sips`; regenerate
  by deleting a file and running the same loop (see git history of this
  section) after swapping a hero.
- `main.tsx` hydrates the prerendered markup; `vite dev` still renders fresh.
  Reveal blocks carry `data-reveal` so a no-script visitor still sees content.
- `/faq` is `noindex` until Lynea supplies the questions and answers; the 404
  page is `noindex, nofollow`. Both are excluded from the sitemap.
- Fonts are linked from `index.html` (not `@import`) so they load alongside
  the CSS bundle. Hero images load eagerly with high fetch priority; all other
  photographs stay lazy. Routes other than Home are code-split.
- `vercel.json`: clean URLs (`/foundation` serves `foundation.html`), no
  trailing slashes, permanent redirects from the old site's URLs (`/about`,
  `/contact-us`, `/services`, `/rentals`, `/values-1`) to their successors,
  immutable caching for hashed assets, a
  week for photographs. There is no SPA rewrite any more — unknown paths get a
  real 404 from `404.html`.

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
| SOLVÉ Far Blue `#0E2447` · Grey Blue `#808898` · Deep Crimson `#6B0F1A` | `/solve` only |

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
  pages/        one file per route (incl. Solve, SolveDelegate, SolveSponsor)
  lib/meta.ts   per-page SEO title + description
scripts/smoke.tsx   renders all 20 routes, catches runtime errors
```

Contact is reachable from anywhere: the nav button, a floating rail that appears
on scroll on every page except `/connect`, and a closing call to action at the
foot of every page.
