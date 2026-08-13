#!/usr/bin/env python3
"""Sol Vé Custom Events — static site generator.

    python3 build_site.py && python3 check_site.py

Copy lives in content.py (verbatim from the client's messaging PDF). Imagery is
resolved through assets/photos/manifest.json: a photograph renders only when it is
approved and credited, otherwise a composed reserved plate stands in its place. That
rule is the point — nothing uncredited or amateur reaches the page by accident.

Design system: design.md · tokens.css · css/styles.css
"""

import html
import json
import pathlib

import content as C

ROOT = pathlib.Path(__file__).parent
MANIFEST = json.loads((ROOT / "assets" / "photos" / "manifest.json").read_text("utf-8"))

ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

# SOLVÉ Global Summit is off the site per the messaging PDF: "Remove SOLVÉ Global
# Summit completely for the time being... Until SOLVÉ Global Summit has finalized
# brand positioning, complete visual identity, messaging, governance, website, and
# launch strategy, DO NOT have it positioned anywhere on the website."
# Flip this to True to bring the parked pages back.
SOLVE_ENABLED = False


def e(text):
    """Escape for HTML text nodes. Copy is authored in Python, not trusted input,
    but ampersands and quotes in the client's writing still have to survive."""
    return html.escape(str(text), quote=False)


# ── Imagery ────────────────────────────────────────────────────
def _lookup(rel):
    key = rel.lstrip("/")
    for section in ("brand", "photography"):
        if key in MANIFEST.get(section, {}):
            return MANIFEST[section][key]
    return None


def photo(rel, *, cls="", sizes="", loading="lazy", reserved_label="",
          reserved_note="", ratio=None, compact=False):
    """Render a photograph, or the reserved plate that stands in for one.

    A photograph is published only when the manifest says it is approved AND names a
    photographer. Everything else renders as a plate — deliberately composed, so an
    absent image reads as restraint rather than as a hole in the page.
    """
    entry = _lookup(rel) if rel else None
    if entry and entry.get("approved") and entry.get("credit") and entry.get("alt"):
        style = f' style="aspect-ratio:{ratio}"' if ratio else ""
        w, h = entry.get("intrinsic", [None, None])
        dims = f' width="{w}" height="{h}"' if w and h else ""
        sz = f' sizes="{sizes}"' if sizes else ""
        return (f'<img class="{cls}" src="/{rel.lstrip("/")}" alt="{e(entry["alt"])}"'
                f'{dims}{sz} loading="{loading}"{style}>')

    note = reserved_note or (
        "This plate is held for Sol Vé photography. Nothing appears here until we "
        "have a professional image and the name of the photographer who made it.")
    label = reserved_label or "Plate reserved"
    style = f' style="aspect-ratio:{ratio}"' if ratio else ""
    variant = "compact " if compact else ""
    return f"""<div class="plate-reserved {variant}{cls}"{style}>
          <div class="guilloche" aria-hidden="true"></div>
          <div>
            <span class="medallion" aria-hidden="true"><span>SV</span></span>
            <span class="label">{e(label)}</span>
            <p>{e(note)}</p>
          </div>
        </div>"""


def credit_line(rel):
    """The credit that sits under a published photograph."""
    entry = _lookup(rel) if rel else None
    if entry and entry.get("credit") and entry.get("approved"):
        return f'<span class="credit">Photography: {e(entry["credit"])}</span>'
    return ""


def published_photos(category, *, exclude_aliases=True):
    """Every publishable photograph in a category, in filename order.

    The `-hero` and `-portfolio` files are aliases of gallery shots, so they are
    excluded by default — otherwise the same image appears twice on one page.
    """
    out = []
    for rel, entry in sorted(MANIFEST.get("photography", {}).items()):
        if entry.get("status") != "published":
            continue
        if not (entry.get("approved") and entry.get("credit") and entry.get("alt")):
            continue
        if entry.get("category") != category:
            continue
        if exclude_aliases and rel.rsplit("/", 1)[-1] in (
                f"{category}-hero.webp", f"{category}-portfolio.webp"):
            continue
        out.append((rel, entry))
    return out


def gallery_figure(rel, entry):
    """One photograph in an editorial grid, opening in the lightbox."""
    w, h = entry.get("intrinsic", [0, 0])
    wide = " eg-wide" if w > h else ""
    return f"""          <figure class="lightbox-item{wide}" data-category="{entry['category']}">
            {photo(rel)}
            <figcaption>
              {credit_line(rel)}
            </figcaption>
          </figure>"""


# ── Fragments ──────────────────────────────────────────────────
def socials(cls="socials"):
    links = "\n".join(
        f'        <a href="{url}" target="_blank" rel="noopener" '
        f'aria-label="Sol Vé Custom Events on {name}">'
        f'<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">{path}</svg></a>'
        for name, url, path in C.SOCIALS)
    return f'<div class="{cls}">\n{links}\n      </div>'


def rule(cls=""):
    return f'<div class="rule {cls}" aria-hidden="true"><i></i></div>'


def rise(text, tag="span"):
    """A line that rises out of its own mask."""
    return f'<{tag} class="rise"><span>{e(text)}</span></{tag}>'


def paras(items, cls=""):
    attr = f' class="{cls}"' if cls else ""
    return "\n".join(f"          <p{attr}>{e(p)}</p>" for p in items)


CREST = f"""<a class="crest" href="/" aria-label="Sol Vé Custom Events — home">
          <img src="/assets/solve-logo.webp" alt="" width="287" height="200">
          <span class="crest-word">Sol Vé Custom Events</span>
          <span class="crest-locality">{e(C.LOCATION_SHORT)} &middot; Producing Worldwide</span>
        </a>"""

# The chapter list. Titles follow the messaging PDF; routes are preserved from the
# existing site so nothing that is already linked or indexed breaks.
CHAPTERS = [
    ("Home", "/"),
    ("Foundation", "/foundation/"),
    ("Our Commitments", "/values/"),
    ("What We Create", "/divisions/"),
    ("Portfolio", "/portfolio/"),
    ("Perspectives", "/journal/"),
    ("About", "/about/"),
    ("Press and Awards", "/press/"),
    ("Connect", "/contact/"),
]

OVERLAY_LINKS = "\n".join(
    f'            <li><a href="{href}">'
    f'<span class="num" aria-hidden="true">{ROMAN[i + 1]}</span>{e(title)}</a></li>'
    for i, (title, href) in enumerate(CHAPTERS))

OVERLAY_DIVISIONS = "\n".join(
    f'              <li><a href="/divisions/{d["slug"]}/">{e(d["name"])}</a></li>'
    for d in C.DIVISIONS)

NAV = f"""  <a class="skip-link" href="#main">Skip to content</a>

  <header class="masthead">
    <div class="container masthead-inner">
      <div class="masthead-left">
        <button class="menu-btn" type="button" data-menu-open
                aria-expanded="false" aria-controls="menu-overlay">
          <i aria-hidden="true"><span></span><span></span><span></span></i>
          <span class="lbl">Menu</span>
        </button>
      </div>
      {CREST}
      <div class="masthead-right">
        <a class="btn masthead-cta" href="/contact/"><span class="cta-long">Begin the Conversation</span><span class="cta-short">Contact</span></a>
      </div>
    </div>
  </header>

  <div class="compact" id="compact-nav">
    <div class="container compact-inner">
      <a class="compact-mark" href="/" aria-label="Sol Vé Custom Events — home">
        <img src="/assets/solve-logo.webp" alt="" width="287" height="200" loading="lazy">
        <span>Sol Vé</span>
      </a>
      <div class="compact-actions">
        <button class="menu-btn" type="button" data-menu-open
                aria-expanded="false" aria-controls="menu-overlay">
          <i aria-hidden="true"><span></span><span></span><span></span></i>
          <span class="lbl">Menu</span>
        </button>
        <a class="btn btn-primary" href="/contact/">Contact</a>
      </div>
    </div>
  </div>

  <div class="overlay" id="menu-overlay" role="dialog" aria-modal="true"
       aria-label="Menu" aria-hidden="true">
    <div class="overlay-frame" aria-hidden="true"></div>
    <div class="container overlay-inner">
      <div class="overlay-head">
        <span class="label">Sol Vé Custom Events</span>
        <button type="button" class="overlay-close" data-close aria-label="Close menu">&times;</button>
      </div>
      <div class="overlay-grid">
        <nav aria-label="Primary">
          <ul class="overlay-links">
{OVERLAY_LINKS}
          </ul>
        </nav>
        <div class="overlay-aside">
          <span class="label">Six Divisions of Experiences</span>
          {rule()}
          <ul class="sub-links">
{OVERLAY_DIVISIONS}
          </ul>
          <div class="overlay-contact">
            <a href="mailto:{C.EMAIL}">{C.EMAIL}</a>
            <a href="tel:{C.PHONE_HREF}">{C.PHONE_DISPLAY}</a>
            <span class="credit">{e(C.LOCATION)}</span>
          </div>
          <div style="margin-top:26px">{socials()}</div>
        </div>
      </div>
    </div>
  </div>"""

FOOTER_CHAPTERS = "\n".join(
    f'            <li><a href="{href}">{e(title)}</a></li>'
    for title, href in CHAPTERS if href != "/")

FOOTER_DIVISIONS = "\n".join(
    f'            <li><a href="/divisions/{d["slug"]}/">{e(d["name"])}</a></li>'
    for d in C.DIVISIONS)

FOOTER = f"""  <footer class="site-footer">
    <div class="container">
      <div class="rule-band footer-crown" aria-hidden="true"></div>
      <div class="footer-grid">
        <div class="footer-crest">
          <img src="/assets/solve-logo.webp" alt="" width="287" height="200" loading="lazy">
          <span class="crest-word">Sol Vé Custom Events</span>
          <p class="footer-tag">We design how people gather.</p>
        </div>
        <div class="footer-col">
          <h4>The Volume</h4>
          <ul>
{FOOTER_CHAPTERS}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Divisions</h4>
          <ul>
{FOOTER_DIVISIONS}
            <li><a href="/mystic/">Mystic Moonlight Masquerade</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <div class="footer-contact">
            <a href="mailto:{C.EMAIL}">{C.EMAIL}</a>
            <a href="tel:{C.PHONE_HREF}">{C.PHONE_DISPLAY}</a>
            <span>{e(C.LOCATION)}</span>
            <span>{e(C.SERVING)}</span>
          </div>
          {socials()}
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-legal">&copy; <span id="copyright-year">2026</span> Sol Vé Custom Events. All rights reserved.</span>
        <span class="footer-legal">All artistic concepts and design work remain the property of Sol Vé Custom Events.</span>
      </div>
    </div>
  </footer>"""


def contact_rail(heading="Let's begin the conversation.",
                 body="Every meaningful gathering begins with a conversation."):
    """Closing invitation. On every page — a contact route is never more than one
    screen away, which was an explicit requirement."""
    return f"""
    <section class="section on-ink contact-rail">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <h2>{e(heading)}</h2>
        {rule("center")}
        <p class="lead">{e(body)}</p>
        <div class="btn-row center">
          <a class="btn btn-primary" href="/contact/">Begin the Conversation</a>
        </div>
        <div class="contact-lines">
          <a href="mailto:{C.EMAIL}">{C.EMAIL}</a>
          <a href="tel:{C.PHONE_HREF}">{C.PHONE_DISPLAY}</a>
          <span class="credit">{e(C.LOCATION_SHORT)}</span>
        </div>
      </div>
    </section>
"""


MMM_DIALOG = f"""  <div class="dialog" id="mmm-dialog" role="dialog" aria-modal="true"
       aria-label="Mystic Moonlight Masquerade" aria-hidden="true">
    <div class="dialog-panel theme-mmm">
      <button type="button" class="dialog-close" data-close aria-label="Close">&times;</button>
      <img src="/assets/mmm-logo.webp" alt="Mystic Moonlight Masquerade"
           width="500" height="172" style="margin-bottom:22px">
      <h2>{e(C.MMM["title"])}</h2>
      <p class="credit" style="margin-top:10px">{e(C.MMM["presented"])}</p>
      {rule()}
      <h3>{e(C.MMM["theme_title"])}</h3>
      <p style="margin-top:10px">{e(C.MMM["theme_body"])}</p>
      <p style="margin-top:14px">{e(C.MMM["body"])}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="{C.MMM_SITE}" target="_blank" rel="noopener">Visit the Campaign</a>
        <a class="btn" href="{C.MMM_TICKETS}" target="_blank" rel="noopener">Gala Ball Tickets</a>
      </div>
    </div>
  </div>"""

LIGHTBOX = """  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true"
       aria-label="Gallery" aria-hidden="true">
    <button type="button" class="lb-close" data-close aria-label="Close gallery">&times;</button>
    <button type="button" class="lb-prev" aria-label="Previous image">&#8249;</button>
    <button type="button" class="lb-next" aria-label="Next image">&#8250;</button>
    <div>
      <img src="" alt="">
      <p class="lightbox-cap credit"></p>
    </div>
  </div>"""


def page(title, desc, body, *, lightbox=False, canonical="", body_class=""):
    canon = f'\n  <link rel="canonical" href="https://solvecustomevents.com{canonical}">' if canonical else ""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{e(title)}</title>
  <meta name="description" content="{e(desc)}">{canon}
  <meta property="og:title" content="{e(title)}">
  <meta property="og:description" content="{e(desc)}">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48.png">
  <link rel="apple-touch-icon" href="/assets/favicon-180.png">
  <link rel="preload" as="font" type="font/woff2"
        href="/assets/fonts/bodoni-moda-latin-normal.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2"
        href="/assets/fonts/inter-latin-normal.woff2" crossorigin>
  <script>document.documentElement.className+=" js";</script>
  <link rel="stylesheet" href="/css/styles.css">
  <script src="/js/lenis.min.js" defer></script>
  <script src="/js/main.js" defer></script>
</head>
<body class="{body_class}">

{NAV}

  <main id="main">
{body}
  </main>

{MMM_DIALOG}
{LIGHTBOX if lightbox else ""}

{FOOTER}

</body>
</html>
"""


def chapter_plate(number, eyebrow, title, lead="", ground="on-ink", meta=None):
    """Every page opens the same way: a folio, an engraved rule, and the title.
    The repetition is the point — it is what makes the site read as one volume."""
    meta_html = ""
    if meta:
        items = "\n".join(f'          <span class="label">{e(m)}</span>' for m in meta)
        meta_html = f'\n        <div class="plate-meta">\n{items}\n        </div>'
    lead_html = f'\n        <p class="lead">{e(lead)}</p>' if lead else ""
    return f"""
    <section class="section chapter-plate {ground}">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="folio">{e(f"Chapter {ROMAN[number]}")} &middot; {e(eyebrow)}</div>
        <h1>{rise(title)}</h1>{lead_html}{meta_html}
      </div>
    </section>
"""


# ────────────────────────────────────────────────────────────────
# HOME
# ────────────────────────────────────────────────────────────────
def division_card(d, index, ground_note=""):
    because = (f'\n              <p class="credit" style="margin-top:14px">'
               f'{e(d["because"])}</p>' if d.get("because") else "")
    return f"""          <a class="card" href="/divisions/{d['slug']}/">
            <div class="card-media unveil">
              {photo(f"assets/photos/{d['slug']}-hero.webp", ratio="4 / 3",
                     reserved_label=f"Division {ROMAN[index]}", compact=True)}
            </div>
            <span class="card-index">{e(f"Division {ROMAN[index]}")}</span>
            <h3>{e(d['name'])}</h3>
            <p>{e(d['short'])}</p>{because}
            <span class="link-rule">Explore this division</span>
          </a>"""


DIVISION_CARDS = "\n".join(division_card(d, i + 1) for i, d in enumerate(C.DIVISIONS))

MARQUEE_ITEMS = "".join(
    f'<li><span>{e(d["name"])}</span><i aria-hidden="true"></i></li>' for d in C.DIVISIONS)

HOME = f"""
    <section class="hero" aria-label="Sol Vé Custom Events">
      <div class="hero-film" aria-hidden="true">
        <!-- A silent looping <video> drops in here when the client's footage is
             imported (tools/import_film.py). Until then the plate carries it, and
             nothing amateur is used as filler. -->
        <div class="frame is-active"></div>
      </div>
      <div class="container">
        <div class="hero-crest">
          <div class="guilloche" aria-hidden="true"></div>
          <img src="/assets/solve-logo.webp" alt="" width="287" height="200" fetchpriority="high">
          <span class="wordmark">Sol Vé</span>
          <span class="crest-locality">{e(C.LOCATION_SHORT)} &middot; Producing Worldwide</span>
        </div>
        <div class="center">
          <p class="hero-statement">{rise(C.HOME_STATEMENT)}</p>
          {rule("center")}
          <p class="hero-sub">{e(C.HOME_SUB)}</p>
          <div class="btn-row center">
            <a class="btn btn-primary" href="{C.HOME_CTA_PRIMARY[1]}">{e(C.HOME_CTA_PRIMARY[0])}</a>
            <a class="btn" href="{C.HOME_CTA_SECONDARY[1]}">{e(C.HOME_CTA_SECONDARY[0])}</a>
          </div>
        </div>
        <div class="hero-foot">
          <span class="scroll-cue"><i aria-hidden="true"></i><span class="label">Scroll</span></span>
          <span class="label">Six Divisions &middot; One Philosophy</span>
        </div>
      </div>
    </section>

    <div class="marquee on-ink" aria-hidden="true">
      <div class="marquee-track">
        <ul>{MARQUEE_ITEMS}</ul>
        <ul>{MARQUEE_ITEMS}</ul>
      </div>
    </div>

    <!-- Foundation — the argument, on paper, where it can be read -->
    <section class="section on-paper">
      <div class="container">
        <div class="split top">
          <div>
            <span class="eyebrow">Foundation</span>
            <h2>Every meaningful gathering begins long before people arrive.</h2>
            {rule()}
          </div>
          <div>
{paras(C.FOUNDATION[:2])}
            <div class="btn-row">
              <a class="btn" href="/foundation/">Read the Foundation</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof, for the visitor who has to justify the choice to someone else -->
    <section class="section-sm on-paper" style="border-block:1px solid var(--rule)">
      <div class="container">
        <ul class="credentials">
          <li>Established in Calgary, Alberta</li>
          <li>Producing across Canada and internationally</li>
          <li>Lux Life Awards 2026</li>
          <li>Six divisions of experience</li>
        </ul>
      </div>
    </section>

    <!-- What We Create -->
    <section class="section on-paper">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What We Create</span>
          <h2>Six divisions of experiences.</h2>
          {rule()}
        </div>
        <div class="grid grid-3">
{DIVISION_CARDS}
        </div>
      </div>
    </section>

    <!-- The belief, set as a plate -->
    <section class="section on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="quote-plate">
          <blockquote>
            <p>{e(C.WHAT_WE_CREATE_BELIEF)}</p>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- How We Work — method, because assertion is not proof -->
    <section class="section on-paper">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">How We Work</span>
          <h2>Five movements, every time.</h2>
          {rule()}
        </div>
        <div class="steps">
{chr(10).join(f'''          <div class="step">
            <div>
              <h3>{e(t)}</h3>
              <p>{e(b)}</p>
            </div>
          </div>''' for t, b in C.PROCESS)}
        </div>
      </div>
    </section>

    <!-- Perspectives -->
    <section class="section on-paper" style="border-top:1px solid var(--rule)">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Perspectives</span>
          <h2>Writing on how people gather.</h2>
          {rule()}
        </div>
        <div class="journal-list">
{chr(10).join(f'''          <a class="journal-row" href="/journal/{es['slug']}/">
            <span class="folio">{ROMAN[i + 1]}</span>
            <h3>{e(es['title'])}</h3>
            <span class="link-rule">Read</span>
          </a>''' for i, es in enumerate(C.ESSAYS[:4]))}
        </div>
        <div class="btn-row">
          <a class="btn" href="/journal/">All Perspectives</a>
        </div>
      </div>
    </section>
{contact_rail()}
"""

# ────────────────────────────────────────────────────────────────
# FOUNDATION
# ────────────────────────────────────────────────────────────────
TRIPTYCH = "\n".join(f"""          <div class="card">
            <h3>{e(a)}</h3>
            <p>{e(b)}</p>
          </div>""" for a, b in C.BEYOND_TRIPTYCH)

PRINCIPLE_CARDS = "\n".join(f"""          <div class="card">
            <span class="card-index">{ROMAN[i + 1]}</span>
            <h3>{e(t)}</h3>
            <p>{e(b)}</p>
          </div>""" for i, (t, b) in enumerate(C.PRINCIPLES))

FOUNDATION_PAGE = chapter_plate(
    2, "Foundation", "Every meaningful gathering begins long before people arrive.",
    C.FOUNDATION[0]) + f"""
    <section class="section on-paper">
      <div class="container">
        <div class="essay">
{paras(C.FOUNDATION[1:], "")}
          {rule()}
          <span class="eyebrow">The Sol Vé Way</span>
          <h2>We design how people gather.</h2>
{paras(C.SOLVE_WAY[1:], "")}
          <p class="beat">{e(C.SOLVE_WAY_CLOSE)}</p>
        </div>
      </div>
    </section>

    <section class="section on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Beyond the Occasion</span>
          <h2>Not every gathering shapes what follows.</h2>
          {rule("center")}
        </div>
        <div class="container-narrow" style="padding-inline:0">
          <div class="essay">
{paras(C.BEYOND_OPEN[1:], "beat")}
{paras(C.BEYOND_BODY, "")}
          </div>
        </div>
        <div class="grid grid-3" style="margin-top:clamp(44px,5vw,76px)">
{TRIPTYCH}
        </div>
        <div class="container-narrow" style="padding-inline:0;margin-top:clamp(44px,5vw,76px)">
          <div class="essay">
{paras(C.BEYOND_CLOSE, "")}
            <p class="beat">{e(C.BEYOND_SIGNOFF)}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section on-paper">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Sol Vé Principles</span>
          <h2>Six principles that hold across every division.</h2>
          {rule()}
        </div>
        <div class="grid grid-3">
{PRINCIPLE_CARDS}
        </div>
      </div>
    </section>
{contact_rail()}
"""

# ────────────────────────────────────────────────────────────────
# OUR COMMITMENTS
# The client's instruction, verbatim: quote on top; below it three vertical boxes,
# RECONCILIATION / 2SLGBTQIA+ / CONSERVATION AND ENVIRONMENTAL, "each equal in size
# and spacing to show that none is more important than the other - EQUAL".
# Community Impact therefore sits in a band beneath, outside the triad.
# ────────────────────────────────────────────────────────────────
def commitment_card(c):
    link = ""
    if c["link"]:
        label, href = c["link"]
        link = (f'\n            <a class="link-rule triad-more" href="{href}" '
                f'target="_blank" rel="noopener">{e(label)}</a>')
    more = "\n".join(f"              <p>{e(p)}</p>" for p in c["more"])
    return f"""          <article class="triad-card">
            <div class="triad-head">
              <h2 class="triad-title">{e(c['title'])}</h2>
              <span class="credit">{e(c['subtitle'])}</span>
            </div>
            {rule("short")}
{paras(c['lead'])}
            <details>
              <summary>Read our full commitment</summary>
{more}
            </details>{link}
          </article>"""


COMMITMENT_CARDS = "\n".join(commitment_card(c) for c in C.COMMITMENTS)

VALUES_PAGE = f"""
    <section class="section chapter-plate on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="folio">Chapter {ROMAN[3]} &middot; Our Commitments</div>
        <h1 class="visually-hidden">Our Commitments</h1>
        <div class="quote-plate">
          <blockquote>
            <p>{e(C.COMMITMENTS_QUOTE)}</p>
            <cite>{e(C.COMMITMENTS_QUOTE_CITE)}</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="section-sm on-ink" style="border-top:1px solid var(--rule)">
      <div class="container-narrow center">
{paras(C.COMMITMENTS_INTRO)}
      </div>
    </section>

    <section class="section on-ink" aria-label="Our commitments, equal in weight">
      <div class="container">
        <div class="triad">
{COMMITMENT_CARDS}
        </div>
      </div>
    </section>

    <section class="section on-paper band-wide">
      <div class="container">
        <div class="split top">
          <div>
            <span class="eyebrow">{e(C.COMMUNITY_IMPACT['title'])}</span>
            <h2>{e(C.COMMUNITY_IMPACT['lead'])}</h2>
            {rule()}
            <p class="pullquote">{e(C.COMMUNITY_IMPACT['aside'])}</p>
          </div>
          <div>
{paras(C.COMMUNITY_IMPACT['body'])}
            <p class="beat" style="margin-top:1.2em"><em>{e(C.COMMUNITY_IMPACT['close'])}</em></p>
          </div>
        </div>
      </div>
    </section>
{contact_rail()}
"""

# ────────────────────────────────────────────────────────────────
# WHAT WE CREATE + division pages
# ────────────────────────────────────────────────────────────────
DIVISIONS_PAGE = chapter_plate(
    4, "What We Create", "Every gathering begins with a different purpose.",
    C.WHAT_WE_CREATE_CLOSE) + f"""
    <section class="section-sm on-paper" style="padding-block:clamp(64px,7vw,110px)">
      <div class="container-narrow">
        <div class="essay center">
{paras(C.WHAT_WE_CREATE_OPEN[1:], "beat")}
          <p>{e(C.WHAT_WE_CREATE_TURN)}</p>
          <p class="beat"><strong>{e(C.WHAT_WE_CREATE_BELIEF)}</strong></p>
        </div>
      </div>
    </section>

    <section class="section on-paper" style="border-top:1px solid var(--rule)">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Six Divisions of Experiences</span>
          <h2>One house. Six worlds.</h2>
          {rule()}
        </div>
        <div class="grid grid-2">
{DIVISION_CARDS}
        </div>
      </div>
    </section>

    <section class="section on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container center">
{paras(C.DIVISIONS_CLOSE, "beat")}
        <p class="hero-statement" style="margin-top:26px">{e(C.HOME_STATEMENT)}</p>
        <p class="hero-sub" style="margin-top:18px">{e(C.HOME_SUB)}</p>
      </div>
    </section>
{contact_rail()}
"""


def division_page(d, index):
    notes = ""
    if d.get("notes"):
        cards = "\n".join(f"""          <div class="card">
            <h3>{e(t)}</h3>
            <p>{e(b)}</p>
          </div>""" for t, b in d["notes"])
        cols = "grid-3" if len(d["notes"]) == 3 else "grid-2"
        notes = f"""
    <section class="section on-paper" style="border-top:1px solid var(--rule)">
      <div class="container">
        <div class="grid {cols}">
{cards}
        </div>
      </div>
    </section>
"""

    faq = ""
    if d.get("faq"):
        items = "\n".join(f"""          <details class="card" style="margin-bottom:var(--card-gap)">
            <summary><h3 style="display:inline">{e(q)}</h3></summary>
            <p style="margin-top:14px">{e(a)}</p>
          </details>""" for q, a in d["faq"])
        faq = f"""
    <section class="section on-paper" style="border-top:1px solid var(--rule)">
      <div class="container-narrow">
        <div class="section-head">
          <h2>Questions we are asked</h2>
          {rule()}
        </div>
{items}
      </div>
    </section>
"""

    because = f'\n          <p class="pullquote">{e(d["because"])}</p>' if d.get("because") else ""

    shots = published_photos(d["slug"])
    gallery = ""
    if shots:
        figs = "\n".join(gallery_figure(rel, entry) for rel, entry in shots)
        gallery = f"""
    <section class="section on-paper" style="border-top:1px solid var(--rule)">
      <div class="container">
        <div class="section-head">
          <h2>From the work</h2>
          {rule()}
        </div>
        <div class="editorial-grid">
{figs}
        </div>
      </div>
    </section>
"""

    return chapter_plate(
        5, d["name"], d["headline"], d["short"]
    ) + f"""
    <figure class="plate-figure unveil">
      {photo(f"assets/photos/{d['slug']}-hero.webp",
             reserved_label=d["name"],
             reserved_note="Held for Sol Vé photography of this division's work. "
                           "Nothing generic or uncredited will be used here.")}
      <figcaption>
        <span class="credit">{e(d["name"])}</span>
        {credit_line(f"assets/photos/{d['slug']}-hero.webp")}
      </figcaption>
    </figure>

    <section class="section on-paper">
      <div class="container">
        <div class="split top">
          <div>
            <span class="eyebrow">What we do</span>
            {rule()}{because}
          </div>
          <div>
{paras(d["body"])}
            <div class="btn-row">
              <a class="btn btn-primary" href="/contact/">Request a Proposal</a>
            </div>
          </div>
        </div>
      </div>
    </section>
{gallery}{notes}{faq}{contact_rail("Tell us what you are building.",
                          "Every experience begins with a conversation about what the "
                          "gathering has to carry.")}
"""


# ────────────────────────────────────────────────────────────────
# ABOUT — Where It Began · Meet the Founder
# ────────────────────────────────────────────────────────────────
FOUNDER_BRIEF = " &middot; ".join(e(x) for x in C.FOUNDER_PHOTO_BRIEF)

ABOUT_PAGE = chapter_plate(
    7, "Where It Began", "The gathering was never the destination.",
    C.WHERE_IT_BEGAN[0]) + f"""
    <section class="section on-paper">
      <div class="container">
        <div class="essay">
          <p class="essay-open">{e(C.WHERE_IT_BEGAN[1])}</p>
{paras(C.WHERE_IT_BEGAN[2:], "")}
        </div>
      </div>
    </section>

    <section class="section on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Meet the Founder</span>
          <h2>{e(C.FOUNDER_NAME)}</h2>
          {rule()}
        </div>
        <div class="split split-40 top">
          <div>
            <div class="unveil">
              {photo("assets/photos/founder-portrait.webp", ratio="4 / 5",
                     reserved_label="Founder portrait",
                     reserved_note="Reserved for an authentic photograph: "
                                   + ", ".join(C.FOUNDER_PHOTO_BRIEF) + ".")}
            </div>
            <p class="credit" style="margin-top:12px">{e(C.FOUNDER_ROLE)}</p>
          </div>
          <div>
{paras(C.MEET_FOUNDER_OPEN, "beat")}
{paras(C.MEET_FOUNDER)}
            <p class="pullquote" style="margin-top:2em">{e(C.MEET_FOUNDER_CLOSE)}</p>
          </div>
        </div>
      </div>
    </section>
{contact_rail()}
"""

# ────────────────────────────────────────────────────────────────
# PORTFOLIO
# ────────────────────────────────────────────────────────────────
FILTER_BUTTONS = "\n".join(
    f'          <button type="button" class="filter-btn{" is-active" if slug == "all" else ""}" '
    f'data-filter="{slug}" aria-pressed="{"true" if slug == "all" else "false"}">{e(label)}</button>'
    for slug, label in [("all", "All")] + list(C.PORTFOLIO_CATEGORIES))

PORTFOLIO_PLATES = "\n".join(
    [f"""          <figure data-category="{slug}">
            {photo(f"assets/photos/{slug}-portfolio.webp", ratio="4 / 5",
                   reserved_label=label, compact=True)}
            <figcaption>
              <span class="credit">{e(label)}</span>
            </figcaption>
          </figure>""" for slug, label in C.PORTFOLIO_CATEGORIES]
    + [gallery_figure(rel, entry)
       for slug, _label in C.PORTFOLIO_CATEGORIES
       for rel, entry in published_photos(slug)])

PROJECT_TEMPLATE = "\n".join(
    f'          <li><span class="label">{ROMAN[i + 1]}</span> {e(f)}</li>'
    for i, f in enumerate(C.PROJECT_FIELDS))

PORTFOLIO_PAGE = chapter_plate(
    5, "Portfolio", "The work, recorded.", C.PORTFOLIO_INTRO) + f"""
    <section class="section on-paper">
      <div class="container">
        <div class="filter-bar" role="group" aria-label="Filter by division">
{FILTER_BUTTONS}
        </div>
        <div class="editorial-grid">
{PORTFOLIO_PLATES}
        </div>
      </div>
    </section>

    <section class="section on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="split top">
          <div>
            <span class="eyebrow">How each project is recorded</span>
            <h2>Five things, for every piece of work.</h2>
            {rule()}
            <p>Photography is credited to the photographer who made it. Where we do not
               yet hold a credit, the plate stays empty rather than filled.</p>
          </div>
          <div>
            <ul class="steps">
{PROJECT_TEMPLATE}
            </ul>
          </div>
        </div>
      </div>
    </section>
{contact_rail()}
"""

# ────────────────────────────────────────────────────────────────
# JOURNAL — Perspectives
# ────────────────────────────────────────────────────────────────
JOURNAL_ROWS = "\n".join(f"""          <a class="journal-row" href="/journal/{es['slug']}/">
            <span class="folio">{ROMAN[i + 1]}</span>
            <div>
              <h3>{e(es['title'])}</h3>
              <p style="margin-top:8px">{e(es['standfirst'])}</p>
            </div>
            <span class="link-rule">Read</span>
          </a>""" for i, es in enumerate(C.ESSAYS))

JOURNAL_PAGE = chapter_plate(
    6, "Perspectives", "Writing on how people gather.",
    "Essays from Sol Vé on convening, environment, collaboration, and why gathering "
    "in person still matters.") + f"""
    <section class="section on-paper">
      <div class="container">
        <div class="journal-list">
{JOURNAL_ROWS}
        </div>
      </div>
    </section>
{contact_rail()}
"""


def essay_page(es, index):
    body = []
    for kind, text in es["body"]:
        cls = ' class="beat"' if kind == "beat" else ""
        body.append(f"          <p{cls}>{e(text)}</p>")
    others = [x for x in C.ESSAYS if x["slug"] != es["slug"]][:3]
    more = "\n".join(f"""          <a class="journal-row" href="/journal/{o['slug']}/">
            <span class="folio">{ROMAN[C.ESSAYS.index(o) + 1]}</span>
            <h3>{e(o['title'])}</h3>
            <span class="link-rule">Read</span>
          </a>""" for o in others)

    return f"""
    <section class="section chapter-plate on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="folio">Perspectives &middot; {ROMAN[index]}</div>
        <h1>{rise(es['title'])}</h1>
        <p class="lead">{e(es['standfirst'])}</p>
      </div>
    </section>

    <article class="section on-paper">
      <div class="container">
        <div class="essay">
{chr(10).join(body)}
          {rule()}
          <p class="credit">Sol Vé Custom Events</p>
        </div>
      </div>
    </article>

    <section class="section on-paper" style="border-top:1px solid var(--rule)">
      <div class="container">
        <div class="section-head">
          <h2>More perspectives</h2>
          {rule()}
        </div>
        <div class="journal-list">
{more}
        </div>
      </div>
    </section>
{contact_rail()}
"""


# ────────────────────────────────────────────────────────────────
# PRESS
# ────────────────────────────────────────────────────────────────
FEATURE_CARDS = "\n".join(f"""          <div class="card">
            <span class="card-index">{ROMAN[i + 1]}</span>
            <h3>{e(f)}</h3>
          </div>""" for i, f in enumerate(C.FEATURES))

AWARD_CARDS = "\n".join(f"""          <div class="card">
            <h3>{e(t)}</h3>
            <p>{e(org)}</p>
          </div>""" for t, org in C.AWARDS)

TESTIMONIAL_CARDS = "\n".join(f"""          <figure class="testimonial">
            <span class="medallion sm" aria-hidden="true"><span>&ldquo;</span></span>
            <blockquote>Reserved for {e(role.lower())} testimonial.</blockquote>
            <figcaption class="credit">{e(role)}</figcaption>
          </figure>""" for role in C.TESTIMONIAL_ROLES)

PRESS_PAGE = chapter_plate(
    8, "Press and Awards", "Recognition, features, and words from the room.") + f"""
    <section class="section on-paper">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Awards</span>
          <h2>Recognition.</h2>
          {rule()}
        </div>
        <div class="grid grid-2">
{AWARD_CARDS}
        </div>
      </div>
    </section>

    <section class="section on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Features</span>
          <h2>Where our work has appeared.</h2>
          {rule()}
        </div>
        <div class="grid grid-3">
{FEATURE_CARDS}
        </div>
      </div>
    </section>

    <section class="section on-paper">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Testimonials</span>
          <h2>Words from the people we have gathered.</h2>
          {rule()}
          <p>Seven voices, one from each kind of partnership we hold. Each is published
             with the speaker's permission and attributed to their role.</p>
        </div>
        <div class="grid grid-3">
{TESTIMONIAL_CARDS}
        </div>
      </div>
    </section>
{contact_rail()}
"""

# ────────────────────────────────────────────────────────────────
# CONTACT
# ────────────────────────────────────────────────────────────────
INQUIRY_OPTIONS = "\n".join(
    f"                  <option>{e(t)}</option>" for t in C.INQUIRY_TYPES)

CONTACT_PAGE = chapter_plate(
    9, "Connect", "Let's begin the conversation.", C.CONTACT_OPEN[0]) + f"""
    <section class="section on-paper">
      <div class="container">
        <div class="split top">
          <div>
{paras(C.CONTACT_OPEN[1:3])}
            <p class="beat" style="margin-top:1.2em">{e(C.CONTACT_OPEN[3])}</p>
            <p class="beat">{e(C.CONTACT_OPEN[4])}</p>
{paras(C.CONTACT_OPEN[5:])}

            {rule()}
            <span class="eyebrow">Get in Touch</span>
            <p>{e(C.GET_IN_TOUCH_INTRO)}</p>
            <div class="footer-contact" style="margin-top:24px">
              <a href="mailto:{C.EMAIL}">{C.EMAIL}</a>
              <a href="tel:{C.PHONE_HREF}">{C.PHONE_DISPLAY}</a>
              <span>{e(C.LOCATION)}</span>
              <span>{e(C.SERVING)}</span>
            </div>

            {rule()}
            <span class="eyebrow">Follow Along</span>
            <p>{e(C.FOLLOW_ALONG)}</p>
            <div style="margin-top:22px">{socials()}</div>
          </div>

          <div>
            <form class="form" data-confirm="contact-confirmation" novalidate>
              <div class="field">
                <label class="field-label" for="c-name">Full name <span class="req">*</span></label>
                <input type="text" id="c-name" name="full_name" required autocomplete="name">
              </div>
              <div class="field">
                <label class="field-label" for="c-email">Email <span class="req">*</span></label>
                <input type="email" id="c-email" name="email" required autocomplete="email">
              </div>
              <div class="field">
                <label class="field-label" for="c-phone">Phone</label>
                <input type="tel" id="c-phone" name="phone" autocomplete="tel">
              </div>
              <div class="field">
                <label class="field-label" for="c-type">What are you planning? <span class="req">*</span></label>
                <select id="c-type" name="inquiry_type" required>
                  <option value="">Select one</option>
{INQUIRY_OPTIONS}
                </select>
              </div>
              <div class="field">
                <label class="field-label" for="c-message">Tell us about it <span class="req">*</span></label>
                <textarea id="c-message" name="message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Begin the Conversation</button>
              <p class="form-note">Your message reaches {C.EMAIL}. We reply to every enquiry.</p>
            </form>
            <div class="form-confirm" id="contact-confirmation" role="status" tabindex="-1">
              <h3>Thank you.</h3>
              <p style="margin-top:10px">We have your note and we will be in touch shortly.
                 If it is urgent, call {C.PHONE_DISPLAY}.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section on-ink">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container-narrow center">
        <span class="eyebrow">A Final Thought</span>
        {rule("center")}
        <div class="essay">
{paras(C.FINAL_THOUGHT[:3])}
          <p class="beat">{e(C.FINAL_THOUGHT[3])}</p>
          <p class="beat">{e(C.FINAL_THOUGHT[4])}</p>
        </div>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# MYSTIC MOONLIGHT MASQUERADE
# ────────────────────────────────────────────────────────────────
MMM_STATS = "\n".join(f"""            <div class="stat">
              <span class="stat-value">{e(v)}</span>
              <span class="stat-label">{e(l)}</span>
            </div>""" for v, l in C.MMM["stats"])

MYSTIC_PAGE = f"""
    <section class="section chapter-plate theme-mmm">
      <div class="guilloche" aria-hidden="true"></div>
      <div class="container">
        <div class="folio">A Sol Vé Fundraising Campaign</div>
        <img src="/assets/mmm-logo.webp" alt="Mystic Moonlight Masquerade"
             width="500" height="172" style="margin-bottom:28px">
        <h1>{rise(C.MMM["theme_title"])}</h1>
        <p class="lead">{e(C.MMM["theme_body"])}</p>
      </div>
    </section>

    <section class="section theme-mmm" style="border-top:1px solid var(--rule)">
      <div class="container">
        <div class="split top">
          <div>
            <span class="eyebrow">{e(C.MMM["presented"])}</span>
            <h2>{e(C.MMM["title"])}</h2>
            {rule()}
          </div>
          <div>
            <p>{e(C.MMM["body"])}</p>
            <div class="stat-row" style="margin-top:36px">
{MMM_STATS}
            </div>
            <div class="btn-row">
              <a class="btn btn-primary" href="{C.MMM_SITE}" target="_blank" rel="noopener">Visit the Campaign</a>
              <a class="btn" href="{C.MMM_TICKETS}" target="_blank" rel="noopener">Gala Ball Tickets</a>
            </div>
          </div>
        </div>
      </div>
    </section>
{contact_rail("Bring a cause to the room.",
              "Tell us about the community you want to reach and we will build a "
              "campaign around it.")}
"""

REDIRECT = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url={target}">
  <link rel="canonical" href="{target}">
  <meta name="robots" content="noindex">
  <title>Redirecting</title>
</head>
<body>
  <p>This page has moved to <a href="{target}">{target}</a>.</p>
</body>
</html>
"""

# ────────────────────────────────────────────────────────────────
PAGES = {
    "index.html": dict(
        title="Sol Vé Custom Events — We design how people gather",
        desc="Sol Vé Custom Events designs how people gather. Weddings, signature "
             "moments, design and stylization, workshops, conferences, and fundraising "
             "campaigns, from Calgary, Alberta, produced worldwide.",
        body=HOME, canonical="/", body_class="is-home"),

    "foundation/index.html": dict(
        title="Foundation — Sol Vé Custom Events",
        desc="The belief Sol Vé Custom Events is built on: thoughtful design and "
             "genuine hospitality are acts of stewardship, and the way people gather "
             "shapes everything that follows.",
        body=FOUNDATION_PAGE, canonical="/foundation/"),

    "values/index.html": dict(
        title="Our Commitments — Sol Vé Custom Events",
        desc="Sol Vé Custom Events commitments, equal in weight: reconciliation and the "
             "Treaty 7 land acknowledgement, 2SLGBTQIA+ inclusivity and belonging, and "
             "conservation and environmental responsibility.",
        body=VALUES_PAGE, canonical="/values/"),

    "divisions/index.html": dict(
        title="What We Create — Six Divisions of Experiences",
        desc="Six divisions of experiences from Sol Vé Custom Events: design and "
             "stylization, weddings, signature moments, workshops and curated "
             "experiences, conferences and international events, and fundraising "
             "campaign events.",
        body=DIVISIONS_PAGE, canonical="/divisions/"),

    "portfolio/index.html": dict(
        title="Portfolio — Sol Vé Custom Events",
        desc="Selected work from Sol Vé Custom Events across weddings, signature "
             "moments, fundraising campaigns, conferences, design and stylization, and "
             "curated experiences.",
        body=PORTFOLIO_PAGE, lightbox=True, canonical="/portfolio/"),

    "journal/index.html": dict(
        title="Perspectives — Sol Vé Custom Events",
        desc="Essays from Sol Vé Custom Events on convening without hierarchy, how "
             "environment shapes dialogue, designing spaces for difficult "
             "conversations, and why we still gather.",
        body=JOURNAL_PAGE, canonical="/journal/"),

    "about/index.html": dict(
        title="Where It Began — Lynea Vaugeois Hetherington, Sol Vé Custom Events",
        desc="How Sol Vé Custom Events began, and the founder behind it: Lynea "
             "Vaugeois Hetherington, Founder and Creative Director.",
        body=ABOUT_PAGE, canonical="/about/"),

    "press/index.html": dict(
        title="Press and Awards — Sol Vé Custom Events",
        desc="Sol Vé Custom Events in AVOLA Magazine, REDTV Canada, Bridal Fantasy, "
             "Dancing With Her and Men's Vow Magazine, with Lux Life Awards 2026 "
             "recognition.",
        body=PRESS_PAGE, canonical="/press/"),

    "contact/index.html": dict(
        title="Connect — Sol Vé Custom Events",
        desc="Begin the conversation with Sol Vé Custom Events. "
             + C.EMAIL + " · " + C.PHONE_DISPLAY + " · Calgary, Alberta.",
        body=CONTACT_PAGE, canonical="/contact/"),

    "mystic/index.html": dict(
        title="Mystic Moonlight Masquerade Fundraising Campaign 2026",
        desc="Silk Roads to Discovery — the Mystic Moonlight Masquerade Ball and Gala "
             "Fundraising Campaign 2026, presented by Sol Vé Custom Events.",
        body=MYSTIC_PAGE, canonical="/mystic/"),
}

for i, _d in enumerate(C.DIVISIONS):
    PAGES[f"divisions/{_d['slug']}/index.html"] = dict(
        title=f"{_d['name']} — Sol Vé Custom Events",
        desc=_d["short"],
        body=division_page(_d, i + 1),
        lightbox=bool(published_photos(_d["slug"])),
        canonical=f"/divisions/{_d['slug']}/")

for i, _es in enumerate(C.ESSAYS):
    PAGES[f"journal/{_es['slug']}/index.html"] = dict(
        title=f"{_es['title']} — Perspectives, Sol Vé Custom Events",
        desc=_es["standfirst"],
        body=essay_page(_es, i + 1),
        canonical=f"/journal/{_es['slug']}/")

# Retired routes keep working.
REDIRECTS = {
    "divisions/proposals/index.html": "/divisions/signature-moments/",
    "divisions/retreats/index.html": "/divisions/workshops/",
}
if not SOLVE_ENABLED:
    # SOLVÉ Global Summit is parked. The routes stay alive and point at the division
    # that will carry it when it returns, so no existing link 404s.
    REDIRECTS.update({
        "solve/index.html": "/divisions/conferences/",
        "solve/delegate/index.html": "/divisions/conferences/",
        "solve/sponsor/index.html": "/divisions/conferences/",
    })


def write_sitemap():
    base = "https://solvecustomevents.com"
    urls = "\n".join(
        f"  <url><loc>{base}{spec.get('canonical', '/' + rel.replace('index.html', ''))}</loc></url>"
        for rel, spec in PAGES.items())
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{urls}\n</urlset>\n", encoding="utf-8")


def main():
    for rel, spec in PAGES.items():
        out = ROOT / rel
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(page(spec["title"], spec["desc"], spec["body"],
                            lightbox=spec.get("lightbox", False),
                            canonical=spec.get("canonical", ""),
                            body_class=spec.get("body_class", "")), encoding="utf-8")

    for rel, target in REDIRECTS.items():
        out = ROOT / rel
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(REDIRECT.format(target=target), encoding="utf-8")

    write_sitemap()
    print(f"wrote {len(PAGES)} pages, {len(REDIRECTS)} redirects, sitemap.xml")


if __name__ == "__main__":
    main()
