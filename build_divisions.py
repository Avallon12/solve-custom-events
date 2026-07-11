#!/usr/bin/env python3
"""One-shot generator for the six Sol Vé division pages.

All six pages share the identical five-section structure mandated by the
Creative Direction Manual (Part 4). Content per division is defined below.
Run: python3 build_divisions.py && python3 hallmark_fixes.py
(hallmark_fixes.py re-applies the Hallmark audit fixes — honest captions,
no scroll-reveal classes, no GSAP scripts, curly apostrophes.)
"""

import os

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{seo_title}</title>
  <meta name="description" content="{seo_desc}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
  <script src="/js/main.js" defer></script>
</head>
<body>
"""

NAV = """
  <header class="site-nav">
    <div class="container">
      <a class="nav-logo" href="/" aria-label="Sol Vé Custom Events home">
        <span class="wordmark">Sol Vé</span>
        <span class="wordmark-sub">Custom Events</span>
      </a>
      <nav aria-label="Primary">
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li class="has-dropdown">
            <a href="/divisions/">Divisions</a>
            <ul class="dropdown">
              <li><a href="/divisions/event-design/">Event Design and Styling</a></li>
              <li><a href="/divisions/weddings/">Weddings</a></li>
              <li><a href="/divisions/proposals/">Proposals and Bespoke Experiences</a></li>
              <li><a href="/divisions/retreats/">Retreats</a></li>
              <li><a href="/divisions/conferences/">Conferences and International Events</a></li>
              <li><a href="/divisions/fundraising/">Fundraising Campaign Events</a></li>
            </ul>
          </li>
          <li><a href="/solve/">SOLVÉ Global Summit</a></li>
          <li><a href="/portfolio/">Portfolio</a></li>
          <li><a href="/press/">Press</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-cta"><a class="btn btn-primary" href="/contact/">Tell Us Your Vision</a></div>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>
"""

FOOTER = """
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <span class="wordmark">Sol Vé</span>
          <p class="footer-tag">Luxury event production across six divisions. Calgary, Alberta.</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="/divisions/">Divisions</a></li>
            <li><a href="/solve/">SOLVÉ Global Summit</a></li>
            <li><a href="/mystic/">MMM Campaign</a></li>
            <li><a href="/portfolio/">Portfolio</a></li>
            <li><a href="/press/">Press</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="copyright-year"></span> Sol Vé Custom Events. All rights reserved.</span>
        <span><a href="mailto:lynea@solvecustomevents.com">lynea@solvecustomevents.com</a></span>
      </div>
    </div>
  </footer>

</body>
</html>
"""

PAGE = """
  <main>

    <!-- Section 1 — Hero -->
    <section class="hero hero-70">
      <div class="hero-img">
        <img class="full-bleed" src="{hero_img}" alt="{hero_alt}" fetchpriority="high">
      </div>
      <div class="container">
        <div class="hero-content">
          <span class="eyebrow">{eyebrow}</span>
          <h1>{headline}</h1>
          <p class="hero-sub">{subheadline}</p>
          <a class="btn btn-primary" href="/contact/">Tell Us Your Vision</a>
        </div>
      </div>
    </section>

    <!-- Section 2 — What We Do Here -->
    <section class="section">
      <div class="container">
        <div class="split">
          <div class="gsap-fade-up">
            <span class="eyebrow">What We Do Here</span>
            <h2>{what_headline}</h2>
            {what_body}
          </div>
          <div class="split-media gsap-fade-up">
            <img src="{what_img}" alt="{what_alt}" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 — Three Benefit Cards -->
    <section class="section section-linen" aria-labelledby="benefits-{slug}">
      <div class="container">
        <h2 id="benefits-{slug}" class="section-headline">The Sol Vé difference</h2>
        <div class="card-grid card-grid-3">
{benefit_cards}
        </div>
      </div>
    </section>
{callout}
    <!-- Section 4 — Portfolio -->
    <section class="section" aria-labelledby="portfolio-{slug}">
      <div class="container">
        <span class="eyebrow">Selected Work</span>
        <h2 id="portfolio-{slug}" class="section-headline">{portfolio_headline}</h2>
        <div class="editorial-grid">
{portfolio_figures}
        </div>
      </div>
    </section>

    <!-- Section 5 — Ending CTA -->
    <section class="section section-linen cta-band">
      <div class="container">
        <h2>Tell us your vision.</h2>
        <p>Every extraordinary event begins with a conversation. Tell us your vision and we will tell you what is possible.</p>
        <a class="btn btn-primary" href="/contact/">Begin Your Experience</a>
      </div>
    </section>

  </main>
"""


def benefit_card(title, body):
    return (
        '          <article class="card gsap-fade-up">\n'
        f'            <h4>{title}</h4>\n'
        f'            <p>{body}</p>\n'
        '          </article>'
    )


def figure(cls, img, alt, caption):
    return (
        f'          <figure class="{cls} gsap-fade-up">\n'
        f'            <img src="https://images.unsplash.com/photo-{img}?auto=format&fit=crop&w=1200&q=80" alt="{alt}" loading="lazy">\n'
        f'            <figcaption>{caption}</figcaption>\n'
        '          </figure>'
    )


DIVISIONS = [
    {
        "slug": "event-design",
        "seo_title": "Event Design and Styling Calgary | Sol Vé Custom Events",
        "seo_desc": "Event design and styling for fashion shows, galas, branded activations, and cultural productions — including The World In Vogue featuring Zainab Chottani on HUM TV.",
        "eyebrow": "Event Design and Styling",
        "headline": "The room says everything before anyone speaks.",
        "subheadline": "For fashion shows, galas, branded activations, cultural productions, and everything in between.",
        "hero_img": "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2000&q=80",
        "hero_alt": "A gala room styled with dramatic warm lighting and floral installations",
        "what_headline": "Design that carries the evening.",
        "what_body": (
            '<p class="justify">From The World In Vogue fashion show featuring Zainab Chottani on HUM TV to the events of the Mystic Moonlight Masquerade campaign, Sol Vé designs rooms that tell the guest what the evening means before a single word is spoken. Fashion shows, galas, branded activations, cultural productions — each begins with a concept and ends with a room nobody wants to leave.</p>'
            '<p class="justify">Every detail is intentional: the light, the florals, the fabric, the flow of the guest through the space. The result is a production that feels designed, because it is.</p>'
        ),
        "what_img": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
        "what_alt": "A styled event space with cascading florals and candlelight",
        "benefits": [
            ("Concept to execution", "We do not hand off. We see it through — from the first sketch to the final candle."),
            ("Cultural fluency", "We design within and across cultural traditions with genuine respect."),
            ("Intellectual property ownership", "All creative concepts, design ideas, and artistic direction belong to Sol Vé."),
        ],
        "portfolio_headline": "From the design portfolio",
        "figures": [
            ("eg-a", "1519167758481-83f550bb49b3", "A candlelit gala dinner with warm florals and draped fabric", "Mystic Moonlight Masquerade Campaign, 2026"),
            ("eg-b", "1531058020387-3be344556be6", "A cultural performance in vibrant costume", "Mystic Threads, 2026"),
            ("eg-f", "1511578314322-379afb476865", "Guests mingling at an elegant evening event under warm string lights", "Mystic Mingle, 2026"),
        ],
        "callout": "",
    },
    {
        "slug": "weddings",
        "seo_title": "Luxury Wedding Producer Calgary Alberta | Sol Vé Custom Events",
        "seo_desc": "Luxury, multicultural, and destination weddings designed to belong in a magazine and live in a memory. Sol Vé Custom Events, Calgary, Alberta.",
        "eyebrow": "Weddings",
        "headline": "The day you have imagined deserves a producer who can make it real.",
        "subheadline": "Luxury, multicultural, and destination weddings designed to belong in a magazine and live in a memory.",
        "hero_img": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
        "hero_alt": "A couple beneath a floral wedding arch in warm evening light",
        "what_headline": "Weddings designed across traditions.",
        "what_body": (
            '<p class="justify">Sol Vé produces weddings that honour where two families come from and celebrate where they are going. South Asian, Middle Eastern, Western, and fusion celebrations — each designed with genuine cultural fluency, from the mehndi to the walima, from the ceremony to the last dance.</p>'
            '<p class="justify">Whether the celebration unfolds in Calgary or on a coastline a continent away, every wedding is produced end to end: design, styling, production, and the quiet choreography that lets the couple simply be present in their own day.</p>'
        ),
        "what_img": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        "what_alt": "A bride and groom in an intimate moment during golden hour",
        "benefits": [
            ("Multicultural by design", "Ceremonies and celebrations designed within and across cultural traditions — South Asian, Middle Eastern, Western, and fusion."),
            ("Editorial standard", "Every wedding is styled to belong in a magazine — because your photographs will outlive the evening."),
            ("Destination production", "From Calgary to the coast of Mexico, we produce the full journey, not just the day."),
        ],
        "portfolio_headline": "The gallery, by cultural aesthetic",
        "figures": [
            ("eg-a", "1583939003579-730e3918a45a", "A couple in richly embroidered attire during a golden-hour ceremony", "South Asian — style reference"),
            ("eg-b", "1519741497674-611481863552", "A ceremony beneath a floral arch at dusk", "Western — style reference"),
            ("eg-g", "1529636798458-92182e662485", "A styled outdoor ceremony space with draped fabric", "Middle Eastern — style reference"),
            ("eg-g", "1465495976277-4387d4b0b4c6", "A reception table styled with candles and florals in warm light", "Fusion — style reference"),
        ],
        "callout": "",
    },
    {
        "slug": "proposals",
        "seo_title": "Luxury Proposal Planner Calgary | Sol Vé Custom Events",
        "seo_desc": "High-end proposals, intimate celebrations, and bespoke moments designed exactly right. Sol Vé Custom Events, Calgary, Alberta.",
        "eyebrow": "Proposals and Bespoke Experiences",
        "headline": "The moment that changes everything deserves to be designed for exactly that.",
        "subheadline": "High-end proposals, intimate celebrations, and bespoke moments for the people who deserve them.",
        "hero_img": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=2000&q=80",
        "hero_alt": "An intimate candlelit proposal setting at sunset",
        "what_headline": "One moment. Designed completely.",
        "what_body": (
            '<p class="justify">A proposal is the rarest kind of event: an audience of one, a single take, and a memory that will be retold for the rest of two lives. Sol Vé designs these moments with the same rigour as a gala for five hundred — location, light, timing, music, and the seconds immediately after the yes.</p>'
            '<p class="justify">Beyond proposals, we produce bespoke experiences of every kind: anniversary evenings, milestone celebrations, and the intimate occasions that deserve more than a reservation.</p>'
        ),
        "what_img": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
        "what_alt": "Two hands clasped in an intimate moment in warm light",
        "benefits": [
            ("Absolute discretion", "The surprise survives every stage of planning. Nothing reaches the wrong ears."),
            ("Designed to the second", "Location, light, music, and timing are choreographed so the moment lands exactly right."),
            ("Beyond the yes", "The celebration after the answer — family reveals, private dinners, the first toast — is part of the design."),
        ],
        "portfolio_headline": "From the bespoke portfolio",
        "figures": [
            ("eg-a", "1518895949257-7621c3c786d7", "A candlelit proposal setting at sunset", "Private Proposal, 2025"),
            ("eg-b", "1520854221256-17451cc331bf", "A couple celebrating at golden hour", "Private Celebration, 2025"),
            ("eg-f", "1492684223066-81342ee5ff30", "Sparklers at an intimate evening celebration", "Private Anniversary, 2024"),
        ],
        "callout": "",
    },
    {
        "slug": "retreats",
        "seo_title": "Corporate and Wellness Retreat Production | Sol Vé Custom Events",
        "seo_desc": "Corporate and wellness retreats in destinations that do the work before the agenda begins. Sol Vé Custom Events, Calgary, Alberta.",
        "eyebrow": "Retreats",
        "headline": "The best ideas happen when people feel restored enough to have them.",
        "subheadline": "Corporate and wellness retreats in destinations that do the work before the agenda begins.",
        "hero_img": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80",
        "hero_alt": "A serene resort pool surrounded by palms at golden hour",
        "what_headline": "Restoration is the agenda.",
        "what_body": (
            '<p class="justify">A retreat is not a meeting in a nicer room. It is an environment designed so that people arrive carrying less and leave carrying more. Sol Vé produces corporate and wellness retreats where the destination, the pacing, and the care built into every hour do the work before the first session begins.</p>'
            '<p class="justify">From leadership offsites in the mountains to wellness programs at destination resorts, every retreat is designed around a single question: what do these people need to feel, in order to do what they came to do?</p>'
        ),
        "what_img": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "what_alt": "A warm boutique hotel space with soft natural light",
        "benefits": [
            ("Destination intelligence", "Venues chosen for what they do to the people inside them — not just their capacity chart."),
            ("Designed pacing", "Sessions, meals, and rest are choreographed so the agenda breathes."),
            ("Care as infrastructure", "Wellness, food, and hospitality are produced with the same rigour as the program itself."),
        ],
        "portfolio_headline": "From the retreat portfolio",
        "figures": [
            ("eg-a", "1540541338287-41700207dee6", "A resort deck overlooking the water at dusk", "Leadership Retreat, 2025"),
            ("eg-b", "1544161515-4ab6ce6db874", "A quiet spa setting with warm stones and soft light", "Wellness Program, 2025"),
            ("eg-f", "1566073771259-6a8506099945", "A resort pool at golden hour", "Destination Offsite, 2024"),
        ],
        "callout": "",
    },
    {
        "slug": "conferences",
        "seo_title": "Conference and International Event Production | Sol Vé Custom Events",
        "seo_desc": "World-class production at every scale — from boardroom conferences to international summits including the SOLVÉ Global Summit, April 2028, Riviera Maya.",
        "eyebrow": "Conferences and International Events",
        "headline": "World-class production at every scale.",
        "subheadline": "From boardroom conferences to international summits including the SOLVÉ Global Summit, April 2028, Riviera Maya.",
        "hero_img": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80",
        "hero_alt": "Delegates gathered at an international conference session",
        "what_headline": "Productions that carry weight.",
        "what_body": (
            '<p class="justify">A conference is judged in its first ten minutes. The registration flow, the room, the sound, the light — every element tells the delegate whether the next three days will be worth their attention. Sol Vé produces conferences and international events where every one of those signals says yes.</p>'
            '<p class="justify">Our flagship international production is the SOLVÉ Global Summit — April 2028, Riviera Maya, Mexico — produced with Encore Audio Visual, whose presence in Mexico anchors the summit\u2019s production infrastructure.</p>'
        ),
        "what_img": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
        "what_alt": "A speaker addressing an audience in warm morning light",
        "benefits": [
            ("Every scale", "From a forty-person boardroom summit to an international delegation — the production standard does not change."),
            ("International reach", "Destination logistics, cross-border partners, and on-the-ground production teams, including Encore Audio Visual in Mexico."),
            ("Delegate experience", "We design the conference around the human being in the seat — arrival to departure."),
        ],
        "portfolio_headline": "From the conference portfolio",
        "figures": [
            ("eg-a", "1540575467063-178a50c2df87", "Delegates in conversation between conference sessions", "International Summit Production, 2025"),
            ("eg-b", "1505236858219-8359eb29e329", "A conference audience during a keynote in warm light", "Executive Conference, 2025"),
            ("eg-f", "1475721027785-f74eccf877e2", "A speaker on stage before delegates", "Leadership Forum, 2024"),
        ],
        "callout": """
    <!-- SOLVÉ callout — dark background, gold border -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="callout-dark gsap-fade-up">
          <div>
            <span class="eyebrow" style="color: var(--gold);">Flagship Production</span>
            <h3>SOLVÉ Global Summit 2028</h3>
            <p>The world's first politically neutral international conference on human trafficking. April 7–10, 2028. Riviera Maya, Mexico.</p>
          </div>
          <a class="btn btn-primary" href="/solve/">Explore SOLVÉ</a>
        </div>
      </div>
    </section>
""",
    },
    {
        "slug": "fundraising",
        "seo_title": "Fundraising Campaign Events Calgary | Sol Vé Custom Events",
        "seo_desc": "Multi-event fundraising campaigns that use beauty, culture, and community to make people show up for causes that matter — including the Mystic Moonlight Masquerade 2026.",
        "eyebrow": "Fundraising Campaign Events",
        "headline": "Art has always been the most powerful instrument for social change.",
        "subheadline": "Multi-event fundraising campaigns that use beauty, culture, and community to make people show up for causes that matter.",
        "hero_img": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=80",
        "hero_alt": "A performance on stage at a charity gala bathed in warm light",
        "what_headline": "Campaigns, not one-night galas.",
        "what_body": (
            '<p class="justify">A single gala raises money once. A campaign builds a movement. Sol Vé designs multi-event fundraising campaigns that carry an audience from first introduction to final gala — each event building the story, the community, and the giving.</p>'
            '<p class="justify">The flagship is the Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026: four events across a year, benefiting ten Calgary charities, with one hundred percent of net proceeds donated, culminating at the Fairmont Palliser on October 23, 2026.</p>'
        ),
        "what_img": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        "what_alt": "Guests at an elegant evening fundraiser under warm string lights",
        "benefits": [
            ("The campaign arc", "Multiple events across a season, each building the story and the community toward the final gala."),
            ("Radical transparency", "One hundred percent of net proceeds to the beneficiary organizations. Stated plainly, honoured completely."),
            ("Art as the instrument", "Performance, fashion, and culture do the asking — because beauty moves people to give."),
        ],
        "portfolio_headline": "From the campaign portfolio",
        "figures": [
            ("eg-a", "1519167758481-83f550bb49b3", "A candlelit gala dinner with warm florals", "MMM Gala Ball Preview, 2026"),
            ("eg-b", "1531058020387-3be344556be6", "A cultural performance in vibrant costume", "Mystic Threads, 2026"),
            ("eg-f", "1511578314322-379afb476865", "Guests mingling at an evening campaign event", "Mystic Mingle, 2026"),
        ],
        "callout": """
    <!-- MMM callout -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="callout-dark gsap-fade-up" style="background: var(--mmm-burgundy); border-color: var(--mmm-gold); display: block;">
          <span class="eyebrow" style="color: var(--mmm-gold);">Now Underway</span>
          <h3 style="color: var(--mmm-gold);">Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026</h3>
          <p style="max-width: none; margin-bottom: 32px;">An Audio Visual Extravaganza Unlike Anything Calgary Has Seen.</p>
          <div class="stat-row" style="margin-bottom: 32px;">
            <div class="stat" style="border-color: rgba(201,168,76,0.4);"><span class="stat-value" style="color: var(--mmm-gold);">4</span><span class="stat-label" style="color: var(--ivory);">Events</span></div>
            <div class="stat" style="border-color: rgba(201,168,76,0.4);"><span class="stat-value" style="color: var(--mmm-gold);">10</span><span class="stat-label" style="color: var(--ivory);">Calgary Charities</span></div>
            <div class="stat" style="border-color: rgba(201,168,76,0.4);"><span class="stat-value" style="color: var(--mmm-gold);">100%</span><span class="stat-label" style="color: var(--ivory);">Net Proceeds</span></div>
            <div class="stat" style="border-color: rgba(201,168,76,0.4);"><span class="stat-value" style="color: var(--mmm-gold);">Oct 23</span><span class="stat-label" style="color: var(--ivory);">Fairmont Palliser, 2026</span></div>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" style="background: var(--mmm-gold); color: var(--mmm-burgundy);" href="/mystic/">Explore the Campaign</a>
            <a class="btn btn-secondary" style="border-color: var(--mmm-gold); color: var(--ivory);" href="https://www.eventbrite.ca/e/mystic-moonlight-masquerade-gala-ball-tickets-1990348600242" target="_blank" rel="noopener">Get Your Tickets</a>
          </div>
        </div>
      </div>
    </section>
""",
    },
]


def build():
    for d in DIVISIONS:
        cards = "\n".join(benefit_card(t, b) for t, b in d["benefits"])
        figs = "\n".join(figure(*f) for f in d["figures"])
        html = (
            HEAD.format(seo_title=d["seo_title"], seo_desc=d["seo_desc"])
            + NAV
            + PAGE.format(
                slug=d["slug"],
                eyebrow=d["eyebrow"],
                headline=d["headline"],
                subheadline=d["subheadline"],
                hero_img=d["hero_img"],
                hero_alt=d["hero_alt"],
                what_headline=d["what_headline"],
                what_body=d["what_body"],
                what_img=d["what_img"],
                what_alt=d["what_alt"],
                benefit_cards=cards,
                portfolio_headline=d["portfolio_headline"],
                portfolio_figures=figs,
                callout=d["callout"],
            )
            + FOOTER
        )
        out = os.path.join("divisions", d["slug"], "index.html")
        os.makedirs(os.path.dirname(out), exist_ok=True)
        with open(out, "w", encoding="utf-8") as fh:
            fh.write(html)
        print("wrote", out)


if __name__ == "__main__":
    build()
