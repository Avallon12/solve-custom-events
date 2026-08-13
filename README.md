# Sol Vé Custom Events — website

Static site. No build step beyond one Python script, no dependencies to install, no
framework. Every page is generated; nothing is hand-edited in an `index.html`.

```bash
python3 build_site.py        # regenerate every page + sitemap.xml
python3 check_site.py        # the delivery gate — must exit 0 before shipping
python3 -m http.server 8899  # preview at http://localhost:8899
```

The site uses root-relative URLs, so it must be served — opening the HTML from disk
will not load the CSS.

## Where things are

| Path | What it is |
|---|---|
| `content.py` | **All site copy**, verbatim from the client's messaging PDF. Edit words here. |
| `build_site.py` | The generator: templates, page assembly, routes, redirects. |
| `check_site.py` | The delivery gate. Eleven rules, each one a client requirement. |
| `design.md` | The design system, and the reasoning behind it. Read before changing CSS. |
| `tokens.css` | Colour, type scale, spacing, motion tokens. |
| `css/styles.css` | Components. |
| `js/main.js` | Menu, dialogs, reveals, film, lightbox, filters, forms. |
| `assets/photos/manifest.json` | **Source of truth for imagery.** Nothing publishes without a credit. |
| `tools/import_photos.py` | Import client photography from the drop folder. |
| `tools/import_film.py` | Encode client footage to mp4 + webm with a poster frame. |

## Adding photographs

1. Drop originals into `assets/photos/incoming/<division>/` — at least 2000px on the
   long edge.
2. Optionally add a `credits.txt` beside them: `filename.jpg = Photographer Name`
3. Run `python3 tools/import_photos.py`
4. Run `python3 build_site.py && python3 check_site.py`

Anything without a photographer's name is imported but **held unpublished** and listed
in `CREDITS-NEEDED.md`. Add the name, re-run, and it goes live. Until then a composed
reserved plate stands in its place.

This is deliberate: every photograph and artwork on the site carries a named artist.

## Adding film

Drop clips into `assets/film/incoming/`, name the videographer in a `credits.txt`
there, then `python3 tools/import_film.py`. Requires `ffmpeg`.

## The delivery gate

`check_site.py` fails the build on any of:

1. an image that is unregistered, uncredited, unapproved, or has no alt attribute
2. an internal link that does not resolve
3. an external link that does not answer (`--skip-external` to skip when offline)
4. adjective-selling — *luxury, world-class, opulent, high-end*
5. any surviving SOLVÉ Global Summit reference outside the redirect stubs
6. placeholder text (`credit to be confirmed`, `pending confirmation`, …)
7. a page without a contact button in the masthead and a contact route in the footer
8. an image too low-resolution for the role it is filling
9. a LinkedIn URL that is a personal profile rather than the company page
10. a `lynea@` address on a public page
11. a video without a poster frame or a credited videographer

Rules 1, 7, 9 and 10 exist because they were explicitly asked for. Rule 8 exists
because a 442×650 photograph was being stretched across the homepage.

## Known outstanding

- **`content.py` → `LINKEDIN_URL`** is a placeholder. The build intentionally fails
  rule 9 until the Sol Vé Custom Events company page URL replaces it. That is what
  stops the personal profile shipping again.
- Photography and film: all plates are currently reserved, awaiting client assets.
- The logo is a 287×200 raster. Fine at the sizes used, but a vector (SVG/AI/EPS) is
  needed before it can be set any larger.
- Testimonial quotes: seven role slots are reserved in `content.py`.

## Routes

`/` · `/foundation/` · `/values/` (Our Commitments) · `/divisions/` (What We Create)
· six division pages · `/portfolio/` · `/journal/` + seven essays · `/about/`
· `/press/` · `/contact/` · `/mystic/`

Redirects kept alive: `/solve/`, `/solve/delegate/`, `/solve/sponsor/` →
`/divisions/conferences/`; `/divisions/proposals/` → `/divisions/signature-moments/`;
`/divisions/retreats/` → `/divisions/workshops/`.

**SOLVÉ Global Summit is off the site** per the client's messaging PDF, until it has
finalized positioning, identity, messaging, governance, website and launch strategy.
The code is parked behind `SOLVE_ENABLED = False` in `build_site.py`.
