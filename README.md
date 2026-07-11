# Sol Vé Custom Events — Website

Static site built exactly to the **Sol Vé Website Creative Direction Manual v1.0** (July 2026).

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. The site uses root-relative URLs (`/css/...`, `/solve/`), so it must be served — do not open the HTML files directly from disk.

## Structure

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about/` | About Lynea |
| `/divisions/` | Divisions overview |
| `/divisions/{event-design,weddings,proposals,retreats,conferences,fundraising}/` | Six division pages |
| `/solve/` | SOLVÉ Global Summit (dark institutional theme) |
| `/solve/delegate/` | Delegate interest form |
| `/solve/sponsor/` | Sponsorship inquiry form |
| `/mystic/` | MMM Fundraising Campaign (burgundy/gold theme) |
| `/portfolio/` `/press/` `/contact/` | Portfolio, Press, Contact |

Shared assets: `tokens.css` (locked design tokens — every color, font, and duration lives here), `css/styles.css` (component styles referencing tokens only), `js/main.js` (nav, forms). `build_divisions.py` regenerates the six division pages from one shared template — edit it and re-run `python3 build_divisions.py && python3 hallmark_fixes.py` rather than editing division pages by hand.

## Design discipline

The build follows the [Hallmark](https://github.com/nutlope/hallmark) anti-AI-slop design skill (installed at `~/.claude/skills/hallmark/`), audited against its slop-test gates: locked tokens (no inline color values), one orchestrated hero entrance instead of universal scroll reveals, honest captions (stock stand-ins are labelled "Style reference", never fabricated event names), eyebrows capped to manual-mandated ones, `minmax(0, 1fr)` grid tracks, no-wrap CTAs, and typographic apostrophes. Where Hallmark and the Creative Direction Manual conflict (fonts, exact hex palette, nav shape, uniform section padding, 100vh SOLVÉ hero), **the manual wins** — it is the binding client spec. Run history lives in `.hallmark/log.json`.

## Items requiring action before launch (per the manual)

- **Copy approval (Part 9.2):** Lynea must approve the About-page biography, philosophy quote, and Mission/Vision/Values before go-live.
- **Real photography (Part 6.3):** The Lynea-with-cello photo was pulled from the Drive (`assets/lynea-cello.jpg`) and is in place on the About page. The Mystic Mingle folder and MMM wordmark logo were not publicly downloadable — swap the marked stock images in `/mystic/` and the portfolio grids once those assets are exported from the Drive.
- **Form backend (Part 8.3):** Forms currently show the specified inline confirmations. Wire the `<form>` elements to a form endpoint (Formspree, Basin, or a serverless function) that routes to lynea@solvecustomevents.com and ridaghani2000@gmail.com, and add reCAPTCHA v3.
- **GA4 (Part 8.3):** Add the GA4 tag once the measurement ID exists.
- **Sitemap:** `sitemap.xml` is ready; submit it to Google Search Console after deploy.
