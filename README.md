# Sol Vé Custom Events — Website

Static site built exactly to the **Sol Vé Website Build Instructions v5.0** (July 12, 2026, prepared by Rida Ghani on behalf of Lynea Vaugeois Hetherington).

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. The site uses root-relative URLs (`/css/...`, `/solve/`), so it must be served — do not open the HTML files directly from disk.

## Structure

| Path | Page |
|---|---|
| `/` | Homepage (values section, six divisions, SOLVÉ banner, portfolio, press, founder quote) |
| `/about/` | Who we are + Meet Lynea (exact copy from solvecustomevents.com/about) |
| `/values/` | Land Acknowledgement, Diversity/Inclusion/Belonging, 2SLGBTQIA+ Inclusion |
| `/divisions/` | Divisions overview |
| `/divisions/{event-design,weddings,signature-moments,workshops,conferences,fundraising}/` | Six division pages |
| `/divisions/{proposals,retreats}/` | Redirects to the renamed v5 slugs |
| `/solve/` | SOLVÉ Global Summit (Far Blue #0E2447 theme, no dates — Coming Soon only) |
| `/solve/delegate/` `/solve/sponsor/` | Delegate interest + sponsorship inquiry forms |
| `/mystic/` | MMM full page (Deep Burgundy/MMM Gold theme, Stand With Humanity) |
| `/portfolio/` | Filterable gallery with lightbox |
| `/press/` | Press, Publications and Awards |
| `/contact/` | Contact form (v5 field set) |

Shared assets: `tokens.css` (locked design tokens — every color, font, and duration lives here), `css/styles.css` (component styles referencing tokens only), `js/main.js` (nav, MMM popup, lightbox, portfolio filters, forms), `assets/` (WebP images: Sol Vé logo, MMM logo, Lynea portrait, SOLVÉ five-pillars banner).

**`build_site.py` is the single source of truth for every page.** All v5 copy lives in it verbatim. Edit it and re-run `python3 build_site.py` rather than editing HTML by hand.

The MMM item in the navigation is the MMM logo (not text) and opens the campaign popup with the MMM website and Eventbrite ticket links, per v5 Section 0 / Page 12.

## Design discipline

The locked design system lives in **`design.md`** (2026-08 redesign per Lynea's feedback email: grand two-tier masthead with large logo, per-page contact button, socials + LinkedIn site-wide, credited photography, equal-triad Values layout, cinematic crossfade hero). The build follows the [Hallmark](https://github.com/nutlope/hallmark) anti-AI-slop design skill: locked tokens, one orchestrated hero entrance, honest captions (stock stand-ins are labelled "Style reference"), `minmax(0, 1fr)` grid tracks, no-wrap CTAs, typographic apostrophes. Where Hallmark and the v5 build document conflict, **the document wins** — it is the binding client spec. v5 contrast law is enforced: light text only on dark grounds (#242216, #0E2447, #5B1020), dark text only on ivory; 1px gold hairlines between sections; gold borders on all cards. Run history lives in `.hallmark/log.json`.

## Items requiring assets or action before launch (v5 Section 16)

- **Photographer credits (client action):** Every image now carries a visible credit slot. All Sol Vé photographs currently read "Photography credit to be confirmed" — Lynea to supply the photographer name for each image in `assets/photos/` (see the PHOTO CREDIT list in the delivery email). Division-page heroes are labelled "Style reference" stock and are to be replaced with category-relevant Sol Vé photography once Lynea provides access.
- **Reels / video:** The homepage hero is a CSS cinematic crossfade of four Sol Vé stills. When real reels arrive, drop a `<video>` element into `.hero-film-frames` (see the comment in `build_site.py` HOME).
- **Social URLs:** Instagram/Facebook/Pinterest verified from the live site; LinkedIn is Lynea's personal profile — confirm with Lynea whether a company LinkedIn page should be used instead (`SOCIALS` in `build_site.py`).
- **Photography:** Homepage hero, philosophy image, division pages, and portfolio use Sol Vé stills / labelled stock until Lynea provides final photography.
- **"Resourcing the Fight" quote photo:** v5 says the SOLVÉ hero headline must be replaced with Lynea's photographed quote. That image was not among the delivered assets — the text headline stands in; swap it into `.solve-hero` when received.
- **5-emoji photo placement:** Currently placed inside the "Who This Is For" section on `/solve/` (one of the two positions v5 allows). Confirm placement with Lynea.
- **Press/award links:** Bridal Fantasy, Men's Vow Magazine, Dance BBG, AVOLA links and award images to be provided by Lynea.
- **Form backend:** Forms show the specified inline confirmations. Wire the `<form>` elements to a form endpoint that routes to **lynea@solvecustomevents.com only** (v5 URGENT — not Rida, not any other email), and connect a CRM (v5 recommends HubSpot free tier; confirm platform with Lynea).
- **Performance:** All local images are WebP. After deploy, run [PageSpeed Insights](https://pagespeed.web.dev) against the live URL and fix any critical issues.
- **Sitemap:** `sitemap.xml` is ready; submit it to Google Search Console after deploy.
