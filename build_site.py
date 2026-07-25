#!/usr/bin/env python3
"""Sol Vé Custom Events — full static site generator.

Source of truth: "SolVe_Website_Build_v5.pdf" (Website Build Instructions v5.0,
July 12, 2026). All copy below is verbatim from that document; do not paraphrase.

Run: python3 build_site.py   (writes every index.html in place)
"""

import pathlib

ROOT = pathlib.Path(__file__).parent

FONTS = (
    '  <link rel="preconnect" href="https://fonts.googleapis.com">\n'
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
    '  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;700&display=swap">\n'
    '  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">\n'
)

# v5 division roster — names, slugs, one-line homepage copy, full overview copy
DIVISIONS = [
    {
        "slug": "event-design",
        "name": "Event Design and Styling",
        "home": "For fashion shows, galas, branded activations, and cultural productions.",
        "full": "For fashion shows, galas, branded activations, and cultural productions. Sol V\u00e9\u2019s creative direction, artistic concept, and visual execution are designed with heartfelt consideration for every detail. All artistic IP remains owned by Sol V\u00e9.",
        "img": "/assets/photos/division-event-design.webp",
        "alt": "A styled dessert table beneath a blush balloon arch with gold accents",
    },
    {
        "slug": "weddings",
        "name": "Weddings",
        "home": "For multicultural, luxury, and destination weddings that belong in a magazine.",
        "full": "For multicultural, luxury, and destination weddings that belong in a magazine. From concept to execution, we carry your vision through every detail, invitations, decorations, florals, food, performers, and beyond.",
        "img": "/assets/photos/division-weddings.webp",
        "alt": "A pair of wedding rings resting on rustic wood",
    },
    {
        "slug": "signature-moments",
        "name": "Signature Moments",
        "home": "For the proposal, the anniversary, the celebration that deserves to be remembered exactly right.",
        "full": "For the proposal, the anniversary, the celebration that deserves to be remembered exactly right. Whether setting the mood or full design and facilitation, the sky is literally the limit. Surprise engagements are our specialty.",
        "img": "/assets/photos/division-signature-moments.webp",
        "alt": "A romantic LOVE dessert display styled with red and blush balloons",
    },
    {
        "slug": "workshops",
        "name": "Workshops and Curated Experiences",
        "home": "For industry professionals, portfolio development, and destination training experiences that restore as well as inspire.",
        "full": "For industry professionals seeking portfolio development, destination training experiences, and curated wellness retreats that restore as well as inspire. We travel worldwide to bring your experience to life.",
        "img": "/assets/photos/division-workshops.webp",
        "alt": "Historic stone ruins framing an intimate curated experience",
    },
    {
        "slug": "conferences",
        "name": "Conferences and International Events",
        "home": "For world-class productions at every scale. Including the SOLV\u00c9 Global Summit. Coming Soon.",
        "full": "For world-class productions at every scale. From boardroom conferences to international summits, Sol V\u00e9 brings the same precision and artistry that defines every division to the global stage. The SOLV\u00c9 Global Summit: Coming Soon.",
        "img": "/assets/photos/division-conferences.webp",
        "alt": "A white beachfront gazebo under palms at a destination event",
    },
    {
        "slug": "fundraising",
        "name": "Fundraising Campaign Events",
        "home": "For campaigns that use art, culture, and community to make people show up for the causes that matter.",
        "full": "For campaigns that use art, culture, and community to make people show up for the causes that matter. Sol V\u00e9 produced the Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026, Calgary\u2019s most extraordinary fundraising campaign of the year.",
        "img": "/assets/photos/division-fundraising.webp",
        "alt": "A grand banquet hall set for a gala under dramatic purple lighting",
    },
]

MMM_TICKETS = "https://www.eventbrite.ca/e/mystic-moonlight-masquerade-gala-ball-tickets-1990348600242"
MMM_SITE = "https://www.mysticmoonlightmasquerade.com"

DROPDOWN = "\n".join(
    f'              <li><a href="/divisions/{d["slug"]}/">{d["name"]}</a></li>'
    for d in DIVISIONS
)

# Nav — v5 Page 1: logo image top left, Values link, Press and Awards,
# MMM logo as popup trigger (never a text link), CTA top right.
NAV = f"""  <header class="site-nav">
    <div class="container">
      <a class="nav-logo" href="/" aria-label="Sol V\u00e9 Custom Events home">
        <img src="/assets/solve-logo.webp" alt="Sol V\u00e9 Custom Events" width="287" height="200">
      </a>
      <nav aria-label="Primary">
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="/values/">Values</a></li>
          <li class="has-dropdown">
            <a href="/divisions/">Divisions</a>
            <ul class="dropdown">
{DROPDOWN}
            </ul>
          </li>
          <li><a href="/solve/">SOLV\u00c9 Global Summit</a></li>
          <li><a href="/portfolio/">Portfolio</a></li>
          <li><a href="/press/">Press and Awards</a></li>
          <li><a href="/contact/">Contact</a></li>
          <li>
            <button type="button" class="nav-mmm-btn" aria-haspopup="dialog" aria-label="About the Mystic Moonlight Masquerade campaign">
              <img src="/assets/mmm-logo.webp" alt="Mystic Moonlight Masquerade" width="500" height="172">
            </button>
          </li>
        </ul>
      </nav>
      <div class="nav-cta"><a class="btn btn-primary" href="/contact/">Tell Us Your Vision</a></div>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>"""

# MMM nav popup — v5 Page 12, exact copy. Present on every page.
MMM_POPUP = f"""  <div class="mmm-popup" id="mmm-popup" role="dialog" aria-modal="true" aria-label="Mystic Moonlight Masquerade">
    <div class="mmm-popup-panel">
      <button type="button" class="mmm-popup-close" aria-label="Close">&times;</button>
      <img class="mmm-logo-img" src="/assets/mmm-logo.webp" alt="Mystic Moonlight Masquerade" width="500" height="172">
      <h2>Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026</h2>
      <p class="mmm-presented">Proudly presented by Sol V\u00e9 Custom Events</p>
      <h3>2026 Campaign Theme: Silk Roads to Discovery</h3>
      <p>A celebration of the weaving together of the fabrics of societies: those that brought us dance, music, spices, foods and fashion.</p>
      <p>The Mystic Moonlight Masquerade Campaign is an immersive charity masquerade event in Calgary, Alberta, featuring a wide range of performers, live DJs, visual art installations, and a multi-tier gala experience, with 100% of net proceeds supporting marginalized communities.</p>
      <p class="mmm-stats">Goal: $200,000&nbsp;|&nbsp;10 Non-Profits and Charities&nbsp;|&nbsp;Multiple events&nbsp;|&nbsp;1 Movement</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="{MMM_SITE}" target="_blank" rel="noopener">Visit MMM Website</a>
        <a class="btn btn-secondary" href="{MMM_TICKETS}" target="_blank" rel="noopener">Get Gala Ball Tickets</a>
      </div>
    </div>
  </div>"""

FOOTER = """  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-logo">
          <img src="/assets/solve-logo.webp" alt="Sol V\u00e9 Custom Events" width="287" height="200" loading="lazy">
          <p class="footer-tag">Luxury event production across six divisions. Calgary, Alberta.</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="/values/">Values</a></li>
            <li><a href="/divisions/">Divisions</a></li>
            <li><a href="/solve/">SOLV\u00c9 Global Summit</a></li>
            <li><a href="/mystic/">MMM Campaign</a></li>
            <li><a href="/portfolio/">Portfolio</a></li>
            <li><a href="/press/">Press and Awards</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="copyright-year"></span> Sol V\u00e9 Custom Events. All rights reserved.</span>
        <span><a href="mailto:lynea@solvecustomevents.com">lynea@solvecustomevents.com</a></span>
      </div>
    </div>
  </footer>"""


def page(title, desc, body, theme=""):
    theme_attr = f' class="{theme}"' if theme else ""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{desc}">
{FONTS}  <link rel="stylesheet" href="/css/styles.css">
  <script src="/js/main.js" defer></script>
</head>
<body>

{NAV}

  <main{theme_attr}>
{body}
  </main>

{MMM_POPUP}

{FOOTER}

</body>
</html>
"""


def division_cards(kind="home"):
    cards = []
    for d in DIVISIONS:
        text = d[kind] if kind in d else d["home"]
        cards.append(f"""          <a class="card division-card" href="/divisions/{d['slug']}/">
            <div class="card-img"><img src="{d['img']}" alt="{d['alt']}" loading="lazy"></div>
            <div class="card-body">
              <h4>{d['name']}</h4>
              <p>{text}</p>
              <span class="card-link">Explore This Division</span>
            </div>
          </a>""")
    return "\n".join(cards)


# ────────────────────────────────────────────────────────────────
# PAGE 1: HOMEPAGE
# ────────────────────────────────────────────────────────────────
HOME = f"""
    <!-- Hero — dark placeholder until Lynea provides Sol V\u00e9 event photography (v5 Page 1) -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="eyebrow">Sol V\u00e9 Custom Events</span>
          <h1>Where vision becomes unforgettable.</h1>
          <p class="hero-sub">Luxury event production across six divisions. Calgary, Alberta.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/contact/">Begin Your Experience</a>
            <a class="btn btn-secondary on-dark" href="/divisions/">Explore Our Divisions</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy — Soft Ivory with gold rim border top and bottom -->
    <section class="section gold-rim">
      <div class="container">
        <div class="split">
          <div>
            <span class="eyebrow">Our Philosophy</span>
            <h2>We do not produce events. We produce the moments people spend their lives remembering.</h2>
            <p class="justify">Sol V\u00e9 Custom Events is a multi-division luxury event production company founded in Calgary, Alberta. From intimate proposals to international conferences, from charity galas to destination weddings, every experience we produce is built on a single principle: that the extraordinary is not an accident. It is designed.</p>
          </div>
          <div class="split-media">
            <img src="/assets/photos/philosophy.webp" alt="A vivid mural of an eye surrounded by butterflies and color" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Values — Deep Olive Charcoal with gold rim borders (v5) -->
    <section class="section section-dark gold-rim" aria-labelledby="values-heading">
      <div class="container">
        <h2 id="values-heading" class="section-headline">What we stand for.</h2>
        <div class="card-grid card-grid-4">
          <article class="card value-card">
            <h4><a href="/values/">Diversity, Inclusion and Belonging</a></h4>
            <p>Diversity is having a seat at the table. Inclusion is having a voice. Belonging is having that voice be heard.</p>
          </article>
          <article class="card value-card">
            <h4><a href="/values/">Reconciliation</a></h4>
            <p>We acknowledge and honor the traditional Treaty 7 territory. We honor all people, Indigenous and Non, who live, work and play on this land.</p>
          </article>
          <article class="card value-card">
            <h4><a href="/values/">2SLGBTQIA+ Inclusion</a></h4>
            <p>Sol V\u00e9 Custom Events emphatically states our strong and unwavering support of 2SLGBTQIA+ communities. We provide services that are safe and welcoming spaces for all.</p>
          </article>
          <article class="card value-card">
            <h4><a href="/values/">Community and Environment</a></h4>
            <p>We believe in supporting likeminded inclusive, people-empowered businesses. We are mindful of the environment and choose eco-friendly options wherever possible.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- One house. Six worlds. — Soft Ivory, headline in gold (never invisible) -->
    <section class="section" aria-labelledby="divisions-heading">
      <div class="container">
        <h2 id="divisions-heading" class="section-headline">One house. Six worlds.</h2>
        <div class="card-grid card-grid-3">
{division_cards("home")}
        </div>
      </div>
    </section>

    <!-- SOLV\u00c9 feature banner — Far Blue full width, no dates (v5) -->
    <section class="section theme-solve" aria-labelledby="solve-banner-heading">
      <div class="container" style="text-align: center;">
        <span class="eyebrow">SOLV\u00c9 Global Summit</span>
        <h2 id="solve-banner-heading" style="font-size: 42px;">The world\u2019s first politically neutral international conference on human trafficking.</h2>
        <p class="hero-sub" style="margin: 0 auto 40px; max-width: 640px; font-size: 20px;">Coming Soon&nbsp;|&nbsp;Riviera Maya, Mexico</p>
        <div class="btn-row" style="justify-content: center;">
          <a class="btn btn-primary" href="/solve/">Learn About SOLV\u00c9</a>
          <a class="btn btn-secondary" href="/solve/delegate/">Register Delegate Interest</a>
          <a class="btn-text" href="/solve/sponsor/">Sponsorship Inquiry</a>
        </div>
      </div>
    </section>

    <!-- Portfolio highlights — editorial asymmetric grid, lightbox (v5) -->
    <section class="section" aria-labelledby="portfolio-heading">
      <div class="container">
        <h2 id="portfolio-heading" class="section-headline">Portfolio highlights</h2>
        <div class="editorial-grid">
          <figure class="eg-a lightbox-item">
            <img src="/assets/photos/mmm-campaign.webp" alt="Performers in luminous costumes at the Mystic Moonlight Masquerade" loading="lazy">
            <figcaption>Mystic Moonlight Masquerade Campaign, 2026</figcaption>
          </figure>
          <figure class="eg-b lightbox-item">
            <img src="/assets/photos/mystic-mingle.webp" alt="Vibrant lion-dance performers at Mystic Mingle" loading="lazy">
            <figcaption>Mystic Mingle, 2026</figcaption>
          </figure>
          <figure class="eg-c lightbox-item">
            <img src="/assets/photos/mystic-threads.webp" alt="An illuminated feathered masquerade headdress" loading="lazy">
            <figcaption>Mystic Threads, 2026</figcaption>
          </figure>
          <figure class="eg-d lightbox-item">
            <img src="/assets/photos/wedding-division.webp" alt="A bride and groom on a white dance floor in an elegant hall" loading="lazy">
            <figcaption>Weddings Division</figcaption>
          </figure>
          <figure class="eg-e lightbox-item">
            <img src="/assets/photos/destination-wedding.webp" alt="A couple embracing before a mountain lake at a destination wedding" loading="lazy">
            <figcaption>Destination Weddings</figcaption>
          </figure>
          <figure class="eg-f lightbox-item">
            <img src="/assets/photos/world-in-vogue.webp" alt="A glittering city skyline at night for The World In Vogue" loading="lazy">
            <figcaption>The World In Vogue, 2026</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Press and recognition -->
    <section class="section" style="padding-top: 80px; padding-bottom: 80px;" aria-labelledby="press-heading">
      <div class="container">
        <h2 id="press-heading" class="section-headline">Press and recognition</h2>
        <div class="press-row">
          <div class="press-item">
            <span class="press-name">HUM TV</span>
            <span class="press-label">The World In Vogue fashion show, featuring Zainab Chottani</span>
          </div>
          <div class="press-item">
            <span class="press-name">AVOLA Magazine</span>
            <span class="press-label">Editorial feature</span>
          </div>
          <div class="press-item">
            <span class="press-name">Canada Council for the Arts</span>
            <span class="press-label">Arts and culture recognition</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder quote — Linen Cream with gold left border accent -->
    <section class="section section-linen">
      <div class="container">
        <div class="founder-quote">
          <blockquote>
            <p>&ldquo;I got tired of watching extraordinary organizations fight for visibility alone. Sol V\u00e9 exists because the most important things in this city, the causes, the stories, the people, deserve a stage that matches them. We build that stage.&rdquo;</p>
            <cite>Lynea Vaugeois Hetherington, Founder, Sol V\u00e9 Custom Events</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Final CTA — Deep Olive Charcoal -->
    <section class="section section-dark cta-band">
      <div class="container">
        <h2>Tell us what you are building.</h2>
        <p>Every extraordinary event begins with a conversation. Tell us your vision and we will tell you what is possible.</p>
        <a class="btn btn-primary" href="/contact/">Begin Your Experience</a>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# PAGE 2: ABOUT — Who We Are + Meet Lynea, copy exact from v5
# ────────────────────────────────────────────────────────────────
WHO_WE_ARE = [
    "At Sol V\u00e9 Custom Events, we are passionate about creating unforgettable events that leave a lasting impression. With years of experience in the event planning industry, we have the expertise and resources to handle every aspect of your event, from the initial consultation to the final execution. Our team of experienced planners will work with you every step of the way to ensure that your event is a reflection of your personal style and taste, and that every detail is taken care of with precision and care. Whether you\u2019re planning a corporate event, wedding, birthday or any of life\u2019s celebratory events, we have the creativity and knowledge to make your vision a reality.",
    "Sol V\u00e9 is a unique and custom stylizing and planning company that also offers rentals. We are based in Calgary, Alberta, but organize and travel to worldwide destinations to ensure you have the personalized event services you deserve.",
    "Specializing in weddings, fundraisers, corporate functions, life events and rentals, planning and styling, we love nothing more than creating beautiful and personable designs for every one of our projects.",
    "We believe in inclusivity, equality, respect and love, welcoming everyone with open arms.",
    "We believe in supporting and creating long-lasting relationships with likeminded inclusive, people empowered businesses by working with one another to create outstanding designs and creations for our clientele.",
    "At Sol V\u00e9, we choose to be mindful of the community environment by using as much eco-friendly items as we possibly can to make your visions come to life.",
    "We choose to work closely with our clients by taking basics and turning it into something personable and inclusive. Your event is our priority. From the creation of concept, invitations, decorations, flowers, food and performers, we help you build your event from the ground up.",
    "We think outside of the box, carrying your theme through small objects and details using unique decor with visionary artistry. We strive for 100% client satisfaction. We like to travel and love to have fun, making each journey an adventure.",
]

MEET_LYNEA = [
    "Hi there! My name is Lynea (Vaugeois) Hetherington (She/Her), and I am the owner and creative designer behind Sol V\u00e9 Custom Events.",
    "I was born and raised in the beautiful city of Prince George, British Columbia.",
    "At the age of 13, I joined the modelling industry and quickly found a life-time love and passion for design. Although modelling had its perks, I was always more drawn to the creative aspect of photoshoots through behind the scenes production and styling.",
    "Soon after I decided to leave the modelling industry, I committed my time to volunteering in event planning and designing, through community events and non-profit organizations.",
    "After years of experience, I decided to become a business owner and entrepreneur and created Sol V\u00e9 Custom Events.",
    "Coming from a Norwegian-Irish and Spanish background, family and culture has always played a huge part in my life, with over 200 family members, I have always been surrounded by loved ones, food and music.",
    "I love to go on adventures and have travelled to over 12 countries. I like to think that this has helped me connect with my clients on a more personable level by getting involved and learning about new cultures, through foods, music, language and faiths.",
    "Growing up, I had the heart and soul desire to become a mother, which is why I made the amazing, life-changing decision to become a foster parent in 1997. It is a passion that I continue to pursue today.",
    "I am a mother to two beautiful biological children, Kory and Katrina, as well as to my two loving adopted sons, Shaun and Jesse, and a mom to hundreds of children who have impacted my life for the better throughout the last 27 years.",
    "Life has shown me the importance of relationship! I have been blessed to have enjoyed a 24 year marriage with my late husband and am currently married to an amazing man who walks beside me through all of life\u2019s moments. Now I am ready to invest my all back into my business, in hopes to create new journeys and adventure through the rebirth of Sol V\u00e9 Custom Events.",
]


def paras(lst, cls=""):
    cls_attr = f' class="{cls}"' if cls else ""
    return "\n".join(f"        <p{cls_attr}>{p}</p>" for p in lst)


ABOUT = f"""
    <!-- Hero — dark overlay 65% over Lynea portrait (v5 Page 2) -->
    <section class="hero hero-70">
      <div class="hero-img">
        <img class="full-bleed" src="/assets/lynea-cello.webp" alt="Lynea Vaugeois Hetherington" fetchpriority="high">
      </div>
      <div class="container">
        <div class="hero-content">
          <h1>Behind every extraordinary event is an extraordinary vision.</h1>
          <p class="hero-sub">Lynea Vaugeois Hetherington, Founder and Creative Director, Sol V\u00e9 Custom Events.</p>
        </div>
      </div>
    </section>

    <!-- Who we are — copy exactly from solvecustomevents.com/about -->
    <section class="section gold-rim">
      <div class="container" style="max-width: 960px;">
        <h2>Who we are</h2>
{paras(WHO_WE_ARE)}
      </div>
    </section>

    <!-- Meet Lynea — copy exactly from solvecustomevents.com/about -->
    <section class="section" aria-labelledby="lynea-heading">
      <div class="container">
        <div class="split split-40-60">
          <div class="split-media portrait-frame">
            <img src="/assets/photos/founder-portrait.webp" alt="Lynea Vaugeois Hetherington, Founder and Creative Director of Sol V\u00e9 Custom Events" style="min-width: min(400px, 100%);" loading="lazy">
          </div>
          <div>
            <h2 id="lynea-heading">Meet Lynea (Vaugeois) Hetherington</h2>
            <p class="eyebrow" style="margin-top: -8px;">Founder and Creative Director</p>
{paras(MEET_LYNEA)}
          </div>
        </div>
      </div>
    </section>

    <!-- Behind the scenes — full-bleed founder portrait (banner guide) -->
    <section class="section" aria-label="Behind the scenes at Sol Vé">
      <div class="container">
        <figure class="split-media landscape" style="max-width: 960px; margin: 0 auto;">
          <img src="/assets/photos/behind-the-scenes.webp" alt="Lynea outdoors among the trees, styled for a Sol Vé shoot" loading="lazy">
        </figure>
      </div>
    </section>

    <!-- Our six divisions — same content as homepage grid (v5) -->
    <section class="section section-dark gold-rim" aria-labelledby="about-divisions-heading">
      <div class="container">
        <h2 id="about-divisions-heading" class="section-headline">Our six divisions</h2>
        <div class="card-grid card-grid-2">
{division_cards("home")}
        </div>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# PAGE 3: VALUES — copy exactly from solvecustomevents.com/values-1
# ────────────────────────────────────────────────────────────────
VALUES = """
    <section class="section gold-rim" style="padding-top: 140px;">
      <div class="container" style="max-width: 960px;">
        <h1>Sol V\u00e9 Custom Events Values</h1>
      </div>
    </section>

    <section class="section" aria-labelledby="land-heading">
      <div class="container" style="max-width: 960px;">
        <h2 id="land-heading">Land Acknowledgement</h2>
        <p>We at Sol V\u00e9 Custom Events believe that all people share the responsibility to contribute to reconciliation.</p>
        <p>In the spirit of respect, reciprocity and truth, we acknowledge and honor Moh\u2019kinsstis, and the traditional Treaty 7 territory and oral practices of the Blackfoot Confederacy: which includes the Siksika, Kainai, Piikani, as well as the Iyarhe Stoney Nakoda and Tsuut\u2019ina Nations. We acknowledge that this territory is home to the Otipemisiwak Metis Government of the Metis Nation within Alberta District 6. We honor all people, Indigenous and Non, who live, work and play on this land.</p>
        <p>To support reconciliation we must truly hear Indigenous oral and written history, share their dreams and celebrate their culture and future endeavors.</p>
        <p><a class="btn-text" href="https://camsc.ca/indigenous-business-directory/" target="_blank" rel="noopener">Support Indigenous Business</a></p>
      </div>
    </section>

    <section class="section section-dark gold-rim" aria-labelledby="dib-heading">
      <div class="container" style="max-width: 960px;">
        <h2 id="dib-heading">Diversity, Inclusion and Belonging</h2>
        <div class="founder-quote" style="margin: 0;">
          <blockquote>
            <p style="color: var(--ivory);">&ldquo;DIVERSITY is having a seat at the table, INCLUSION is having a voice, BELONGING is having that voice be heard.&rdquo;</p>
            <cite style="color: var(--stone);">Author unknown</cite>
          </blockquote>
        </div>
        <p style="margin-top: 40px;">At Sol V\u00e9 Custom Events, the owners and staff alike live by these expressed values of diversity, inclusion and belonging.</p>
      </div>
    </section>

    <section class="section" aria-labelledby="inclusion-heading">
      <div class="container" style="max-width: 960px;">
        <h2 id="inclusion-heading">Inclusion</h2>
        <p>Sol V\u00e9 Custom Events emphatically states our strong and unwavering support of Two-Spirit, Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and Asexual communities (2SLGBTQIA+). We provide services and facilities that are safe and welcoming spaces for all 2SLGBTQIA+ individuals and their allies.</p>
        <p>We are deeply troubled that harassment, discrimination, and bigotry related to gender identity or expression, continue to cause harm.</p>
        <p>Sol V\u00e9 Custom Events is a company for all people. Sol V\u00e9 Custom Events stands by our stated inclusivity values in all our interactions both professionally as well as personally. All owners and staff believe in social equality, reconciliation and anti-racism, conducting themselves accordingly. It is our goal to become not just inclusive, but anti-racist, including condemning discrimination through our communications wherever possible, and enhancing access to safe and inclusive events and activities in our community.</p>
        <p>We affirm our commitment to the inclusivity of all. Everyone deserves to be free to express their gender identity and sexual orientation.</p>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# PAGE 4: DIVISIONS OVERVIEW
# ────────────────────────────────────────────────────────────────
DIVISIONS_OVERVIEW = f"""
    <section class="section gold-rim" style="padding-top: 140px;">
      <div class="container">
        <h1>One house. Six worlds.</h1>
        <p style="max-width: 760px; font-size: 20px;">Every event Sol V\u00e9 produces lives within one of six distinct divisions. Each one is a complete world with its own expertise, aesthetic, and team. Together they make Sol V\u00e9 the most versatile luxury event production company in Calgary.</p>
      </div>
    </section>

    <section class="section" aria-label="The six divisions">
      <div class="container">
        <div class="card-grid card-grid-2">
{division_cards("full")}
        </div>
      </div>
    </section>
"""


# ────────────────────────────────────────────────────────────────
# Division page scaffolding
# ────────────────────────────────────────────────────────────────
def division_hero(eyebrow, h1, sub, img, alt):
    return f"""
    <section class="hero hero-70">
      <div class="hero-img">
        <img class="full-bleed" src="{img}" alt="{alt}" fetchpriority="high">
      </div>
      <div class="container">
        <div class="hero-content">
          <span class="eyebrow">{eyebrow}</span>
          <h1>{h1}</h1>
          <p class="hero-sub">{sub}</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/contact/">Tell Us Your Vision</a>
          </div>
        </div>
      </div>
    </section>
"""


def proposal_section(body, cta):
    return f"""
    <!-- Request a proposal (v5) -->
    <section class="section section-dark gold-rim cta-band">
      <div class="container">
        <h2>Request a proposal</h2>
        <p>{body}</p>
        <a class="btn btn-primary" href="/contact/">{cta}</a>
      </div>
    </section>
"""


# PAGE 5: EVENT DESIGN AND STYLING
EVENT_DESIGN = division_hero(
    "Event Design and Styling",
    "The room says everything before anyone speaks.",
    "For fashion shows, galas, branded activations, and cultural productions.",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2000&q=80",
    "A styled gala room with dramatic warm lighting and floral installations",
) + """
    <section class="section gold-rim">
      <div class="container" style="max-width: 960px;">
        <h2>Creative direction from concept to execution.</h2>
        <p class="justify">Our design services are customized to your wants and needs. With your thoughts and dreams, we bring your vision to life by sorting through ideas, colour schemes and themes. We work with you to create a unique perspective of your vision.</p>
        <p class="justify">Sol V\u00e9\u2019s creative direction, artistic concept, and visual execution are entirely ours. We do not hand off. We see it through. All artistic IP, design concepts, and creative work produced by Sol V\u00e9 Custom Events remains our sole property.</p>
      </div>
    </section>

    <section class="section" aria-label="What sets this division apart">
      <div class="container">
        <div class="card-grid card-grid-3">
          <article class="card">
            <h4>Concept to execution</h4>
            <p>We do not hand off. We see it through.</p>
          </article>
          <article class="card">
            <h4>Cultural fluency</h4>
            <p>We design within and across cultural traditions with genuine respect and artistry.</p>
          </article>
          <article class="card">
            <h4>Artistic ownership</h4>
            <p>All creative concepts, design ideas, and visual direction belong to Sol V\u00e9.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Notable work — images to be provided by Lynea -->
    <section class="section section-dark gold-rim" aria-labelledby="notable-heading">
      <div class="container">
        <h2 id="notable-heading" class="section-headline">Notable work</h2>
        <div class="card-grid card-grid-2">
          <article class="card value-card">
            <h4>The World In Vogue</h4>
            <p>Fashion show featuring Zainab Chottani, broadcast on HUM TV.</p>
          </article>
          <article class="card value-card">
            <h4>Mystic Moonlight Masquerade Campaign</h4>
            <p>Design and styling across the 2026 fundraising campaign events.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container">
        <h2>Ready to build something unforgettable?</h2>
        <a class="btn btn-primary" href="/contact/">Tell Us Your Vision</a>
      </div>
    </section>
"""

# PAGE 6: WEDDINGS
WEDDINGS = division_hero(
    "Weddings",
    "The day you have imagined deserves a producer who can make it real.",
    "Luxury, multicultural, and destination weddings designed to belong in a magazine and live in a memory.",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
    "A couple beneath a floral wedding arch in warm evening light",
) + """
    <section class="section gold-rim">
      <div class="container" style="max-width: 960px;">
        <h2>What we do</h2>
        <p class="justify">Our custom designs, creations, rentals and complimentary vendors ensure you have the unique event you want and deserve. From engagements, elopements, weddings, to anniversary parties, we assist you in the event that is defined by you.</p>
        <p class="justify">We are based in Calgary, Alberta, but organize and travel to worldwide destinations to ensure you have the personalized event services you deserve.</p>
      </div>
    </section>
""" + proposal_section(
    "Every wedding we produce begins with a conversation. Tell us your vision and we will build a custom proposal tailored to your event, your style, and your budget.",
    "Request a Wedding Proposal",
) + """
    <!-- FAQ — from original site (v5) -->
    <section class="section" aria-labelledby="faq-heading">
      <div class="container">
        <h2 id="faq-heading" class="section-headline">Frequently asked questions</h2>
        <div class="faq-list">
          <details>
            <summary>When should you hire an event planner?</summary>
            <p>The best answer is as soon as possible. Event planners are great resources that can help you with vendor and location settings. In addition, they often save clients both financially and time.</p>
          </details>
          <details>
            <summary>Are you able to do destination events and will the planner attend them personally?</summary>
            <p>Yes, we do and yes they can. We offer a variety of planning and coordination services both within Canada, United States, and around the world. With global connections and our hands-on approach, we are able to ensure your event is spectacular in any location.</p>
          </details>
          <details>
            <summary>Can you help me surprise my partner when I propose marriage?</summary>
            <p>Absolutely! Surprise engagements are so exciting to put together. Whether it is setting the mood or full design and facilitation, the sky is literally the limit.</p>
          </details>
        </div>
      </div>
    </section>
"""

# PAGE 7: SIGNATURE MOMENTS (was /proposals)
SIGNATURE_MOMENTS = division_hero(
    "Signature Moments",
    "The moment that changes everything deserves to be designed for exactly that.",
    "For proposals, anniversaries, intimate celebrations, and every milestone that deserves to be remembered perfectly.",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=2000&q=80",
    "An intimate candlelit proposal setting at sunset",
) + """
    <section class="section gold-rim">
      <div class="container" style="max-width: 960px;">
        <h2>What we do</h2>
        <p class="justify">Whether setting the mood or full design and facilitation, the sky is literally the limit. Surprise proposals, anniversary celebrations, intimate gatherings: we bring the same artistry and precision to the most personal moments as we do to the grandest events.</p>
      </div>
    </section>
""" + proposal_section(
    "Tell us about your moment and we will build a custom proposal tailored to what you are envisioning.",
    "Request a Proposal",
)

# PAGE 8: WORKSHOPS AND CURATED EXPERIENCES (was /retreats)
WORKSHOPS = division_hero(
    "Workshops and Curated Experiences",
    "The best ideas happen when people feel restored enough to have them.",
    "For industry professionals, portfolio development, destination training experiences, and curated wellness retreats that inspire as much as they restore.",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80",
    "A serene resort pool surrounded by palms at golden hour",
) + """
    <section class="section gold-rim" aria-label="Sub-divisions">
      <div class="container">
        <div class="card-grid card-grid-2">
          <article class="card">
            <h4>Portfolio Development Workshops</h4>
            <p>For industry professionals seeking structured programs to develop and elevate their creative portfolios.</p>
          </article>
          <article class="card">
            <h4>Wellness Retreats</h4>
            <p>For individuals and groups seeking a curated experience that restores mind, body, and creative spirit.</p>
          </article>
          <article class="card">
            <h4>Corporate Retreats</h4>
            <p>For teams seeking a meaningful offsite experience that builds connection and resets perspective.</p>
          </article>
          <article class="card">
            <h4>Destination Training Experiences</h4>
            <p>For professionals and organizations seeking immersive learning in extraordinary settings worldwide.</p>
          </article>
        </div>
      </div>
    </section>
""" + proposal_section(
    "Tell us about your group, your goals, and your dream setting and we will build a custom experience around you.",
    "Request a Proposal",
)

# PAGE 9: CONFERENCES AND INTERNATIONAL EVENTS
CONFERENCES = division_hero(
    "Conferences and International Events",
    "World-class production at every scale.",
    "From boardroom conferences to international summits, Sol V\u00e9 brings the same precision and artistry that defines every division to the global stage.",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80",
    "Delegates gathered at an international conference session",
) + """
    <section class="section gold-rim">
      <div class="container" style="max-width: 960px;">
        <h2>What we do</h2>
        <p class="justify">Our custom event design and management services extend to conferences, corporate functions, and international productions. We handle every aspect from the initial consultation to the final execution, ensuring your event reflects your vision with precision and care.</p>
        <p class="justify">We work with world-class AV production partners for international events. We are based in Calgary but travel to worldwide destinations to produce events that are spectacular in any location.</p>
      </div>
    </section>

    <!-- SOLV\u00c9 callout — Far Blue, Coming Soon, no dates (v5) -->
    <section class="section" aria-labelledby="solve-callout-heading">
      <div class="container">
        <div class="callout-solve">
          <div>
            <h3 id="solve-callout-heading">SOLV\u00c9 Global Summit</h3>
            <p>The world\u2019s first politically neutral, cross-sector, holistic international conference on human trafficking.</p>
            <span class="callout-status">Coming Soon&nbsp;|&nbsp;Riviera Maya, Mexico</span>
          </div>
          <a class="btn btn-primary" href="/solve/">Learn More</a>
        </div>
      </div>
    </section>

    <!-- Revive by Design — appears on this page and the SOLV\u00c9 page only -->
    <section class="section gold-rim" aria-labelledby="revive-heading">
      <div class="container" style="max-width: 960px;">
        <h2 id="revive-heading">Training and Certification Partner</h2>
        <p class="justify">Revive by Design is a SOLV\u00c9 conference training and certification partner, supporting the RESTORE pillar through accredited professional development programming.</p>
      </div>
    </section>
"""

# PAGE 10: FUNDRAISING CAMPAIGN EVENTS
FUNDRAISING = division_hero(
    "Fundraising Campaign Events",
    "Art has always been the most powerful instrument for social change.",
    "For campaigns that use beauty, culture, and community to make people show up for the causes that matter most.",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=80",
    "A performance on stage at a charity gala bathed in warm light",
) + f"""
    <section class="section gold-rim">
      <div class="container" style="max-width: 960px;">
        <h2>What we do</h2>
        <p class="justify">Sol V\u00e9 produces multi-event fundraising campaigns that use immersive performance, art, and cultural celebration as the primary tool for community engagement and charitable impact. We create rooms where people who would not normally sit together find themselves changed by the experience.</p>
      </div>
    </section>

    <!-- MMM campaign feature — MMM brand colors for this section only (v5) -->
    <section class="section" aria-labelledby="mmm-feature-heading">
      <div class="container">
        <div class="callout-mmm">
          <h3 id="mmm-feature-heading" style="font-size: 32px;">Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026</h3>
          <p>The Mystic Moonlight Masquerade Campaign is an immersive charity masquerade event in Calgary, Alberta, featuring a wide range of performers, live DJs, visual art installations, and a multi-tier gala experience, with 100% of net proceeds supporting marginalized communities.</p>
          <p class="mmm-theme-line">Silk Roads to Discovery: A celebration of the weaving together of the fabrics of societies: those that brought us dance, music, spices, foods and fashion.</p>
          <div class="stat-row">
            <div class="stat"><span class="stat-value">10</span><span class="stat-label">Non-Profits and Charities</span></div>
            <div class="stat"><span class="stat-value">Multiple</span><span class="stat-label">Events</span></div>
            <div class="stat"><span class="stat-value">1</span><span class="stat-label">Movement</span></div>
            <div class="stat"><span class="stat-value">$200,000</span><span class="stat-label">Goal</span></div>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="{MMM_TICKETS}" target="_blank" rel="noopener">Get Gala Ball Tickets</a>
            <a class="btn btn-secondary" href="{MMM_SITE}" target="_blank" rel="noopener">Visit MMM Website</a>
          </div>
        </div>
      </div>
    </section>
""" + proposal_section(
    "Tell us about the cause you are championing and the community you want to reach and we will build a campaign around it.",
    "Request a Proposal",
)

# ────────────────────────────────────────────────────────────────
# PAGE 11: SOLV\u00c9 GLOBAL SUMMIT — Far Blue, no dates anywhere
# ────────────────────────────────────────────────────────────────
SOLVE = """
    <!-- Hero — Far Blue full screen. The Global Summit logo lockup replaces the
         text eyebrow; the mark itself reads "SOLVE Global Summit". -->
    <section class="solve-hero">
      <div class="container hero-content">
        <img class="solve-summit-mark" src="/assets/solve-summit-logo.webp" alt="SOLV\u00c9 Global Summit" width="1061" height="635">
        <h1>Resourcing the fight. Restoring the fighters.</h1>
        <p class="hero-meta">Coming Soon&nbsp;|&nbsp;Riviera Maya, Mexico</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/solve/delegate/">Register Delegate Interest</a>
          <a class="btn btn-secondary" href="/solve/sponsor/">Sponsorship Inquiry</a>
          <a class="btn-text" href="#founders">Meet the Founders</a>
        </div>
      </div>
    </section>

    <!-- The Problem — Far Blue -->
    <section class="section">
      <div class="container" style="max-width: 960px;">
        <span class="eyebrow">The Problem</span>
        <h2>The people doing the hardest work are rarely restored.</h2>
        <p class="justify">Human trafficking is one of the most complex and devastating crises of our time. The organizations fighting it work in silos. The conferences that exist are single-sector, politically aligned, or enforcement-heavy. The people doing the hardest work in this space are rarely restored. And the voices that need to be at the same table, policymakers, survivors, first responders, educators, philanthropists, tech innovators, rarely are.</p>
      </div>
    </section>

    <!-- The Solution — Grey Blue supporting section -->
    <section class="section section-solve-grey">
      <div class="container" style="max-width: 960px;">
        <span class="eyebrow">The Solution</span>
        <h2>SOLV\u00c9 exists to build that table.</h2>
        <p class="justify">We are the world\u2019s first politically neutral, cross-sector, holistic international conference on human trafficking. We bring together every voice that matters, without a political agenda, without enforcement bias, without leaving anyone behind, in a luxury resort setting that models the restoration we preach.</p>
      </div>
    </section>

    <!-- Why Now -->
    <section class="section">
      <div class="container" style="max-width: 960px;">
        <span class="eyebrow">Why Now</span>
        <h2>That room is SOLV\u00c9. And it is coming.</h2>
        <p class="justify">The problem is escalating. The movement is fragmented. And there has never been a single room where all of this has come together at once.</p>
      </div>
    </section>

    <!-- The Four Pillars — 2x2, dark cards with gold borders -->
    <section class="section" aria-labelledby="pillars-heading">
      <div class="container">
        <h2 id="pillars-heading" class="section-headline">The Four Pillars</h2>
        <div class="card-grid card-grid-2">
          <article class="card pillar-card">
            <span class="pillar-num">Pillar 1</span>
            <h4>ILLUMINATE</h4>
            <p>Education for general public, students, and communities. Building a world that recognizes trafficking before it happens.</p>
          </article>
          <article class="card pillar-card">
            <span class="pillar-num">Pillar 2</span>
            <h4>EQUIP</h4>
            <p>First responder and professional training covering all forms of human trafficking: sexual exploitation, labour trafficking, forced marriage, organ trafficking. Practical. Accredited. Actionable.</p>
          </article>
          <article class="card pillar-card">
            <span class="pillar-num">Pillar 3</span>
            <h4>UNITE</h4>
            <p>Cross-sector, non-partisan collaboration and policy. The room where adversaries become allies because the cause demands it.</p>
          </article>
          <article class="card pillar-card">
            <span class="pillar-num">Pillar 4</span>
            <h4>RESTORE</h4>
            <p>Survivor support and holistic healing for the professionals who carry this work. The all-inclusive resort setting is not luxury for luxury\u2019s sake. It is the methodology. The people fighting the hardest battles deserve to be restored, not just informed.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Who This Is For — minimum 20px, plus the 5-emoji photo (v5) -->
    <section class="section" aria-labelledby="delegates-heading">
      <div class="container">
        <h2 id="delegates-heading" class="section-headline">Who This Is For</h2>
        <img class="solve-banner-img" src="/assets/solve-five-pillars.webp" alt="Uniting global leadership to expose, disrupt, and end human trafficking: awareness, advocacy, victim rights, supports and services, legal change. One challenge. One movement. One shared responsibility." style="margin-bottom: 48px;" loading="lazy">
        <ul class="delegate-list">
          <li>Policymakers and lawmakers</li>
          <li>Government officials and civil servants</li>
          <li>Victim services and survivor advocates</li>
          <li>First responders and law enforcement</li>
          <li>Educators and academics</li>
          <li>Technology innovators</li>
          <li>Philanthropists and foundation leaders</li>
          <li>Corporate CSR leaders</li>
          <li>Nonprofit and NGO executives</li>
          <li>Volunteers and community advocates</li>
        </ul>
      </div>
    </section>

    <!-- Why the resort setting -->
    <section class="section">
      <div class="container">
        <div class="split split-40-60">
          <div class="split-media">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80" alt="A quiet resort pool at golden hour in Riviera Maya" loading="lazy">
          </div>
          <div>
            <h2>Why the resort setting</h2>
            <p class="justify">The all-inclusive resort setting is not a vacation. It is the architecture of SOLV\u00c9\u2019s methodology. When the people fighting the hardest battles wake up in the morning and the food is already prepared, the pool is available, and the wellness professionals are on site, they are being cared for in the same way they are trying to care for others. RESTORE is not a pillar. It is the foundation.</p>
            <p>Entertainment is always an option.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founding Partners — redM removed per v5 URGENT -->
    <section class="section" aria-labelledby="partners-heading">
      <div class="container">
        <h2 id="partners-heading" class="section-headline">Founding Partners</h2>
        <div class="card-grid card-grid-3">
          <article class="card">
            <span class="pillar-num">Founding Partner</span>
            <h4>Sol V\u00e9 Custom Events</h4>
            <p>Founding Partner and Conference Producer.</p>
          </article>
          <article class="card">
            <span class="pillar-num">Founding Partner</span>
            <h4>Revive by Design</h4>
            <p>Training and Certification Partner, RESTORE Pillar.</p>
          </article>
          <article class="card placeholder-card">
            <span class="ph-label">Founding Partner</span>
            <h4>To Be Announced</h4>
          </article>
          <article class="card placeholder-card">
            <span class="ph-label">Founding Partner</span>
            <h4>To Be Announced</h4>
          </article>
          <article class="card placeholder-card">
            <span class="ph-label">Founding Partner</span>
            <h4>To Be Announced</h4>
          </article>
        </div>
        <p style="margin-top: 40px; max-width: 760px;">A limited number of founding partner positions remain for organizations aligned with SOLV\u00c9\u2019s four pillars.</p>
      </div>
    </section>

    <!-- Founders and Advisory Board -->
    <section class="section" id="founders" aria-labelledby="board-heading">
      <div class="container">
        <h2 id="board-heading" class="section-headline">Founders and Advisory Board</h2>
        <div class="card-grid card-grid-3">
          <article class="card">
            <span class="pillar-num">Founder</span>
            <h4>Lynea Vaugeois Hetherington</h4>
            <p>Founder and Conference Director, Sol V\u00e9 Custom Events.</p>
          </article>
          <article class="card">
            <span class="pillar-num">Co-Founder</span>
            <h4>Rida Ghani</h4>
            <p>Co-Founder and Director of Partnerships and Development.</p>
          </article>
          <article class="card placeholder-card">
            <span class="ph-label">Advisory Board</span>
            <h4>Board Member, To Be Confirmed</h4>
          </article>
          <article class="card placeholder-card">
            <span class="ph-label">Advisory Board</span>
            <h4>Board Member, To Be Confirmed</h4>
          </article>
          <article class="card placeholder-card">
            <span class="ph-label">Advisory Board</span>
            <h4>Board Member, To Be Confirmed</h4>
          </article>
          <article class="card placeholder-card">
            <span class="ph-label">Advisory Board</span>
            <h4>Board Member, To Be Confirmed</h4>
          </article>
        </div>
        <p style="margin-top: 40px;">Advisory board appointments are underway and will be announced as confirmed.</p>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="section cta-band">
      <div class="container">
        <h2>Be in the room.</h2>
        <p>Delegate registration interest is open now. Every registration signals to funders, governments, and partners that this movement is ready for one table.</p>
        <div class="btn-row" style="justify-content: center;">
          <a class="btn btn-primary" href="/solve/delegate/">Register Delegate Interest</a>
          <a class="btn btn-secondary" href="/solve/sponsor/">Sponsorship Inquiry</a>
        </div>
      </div>
    </section>
"""

COUNTRIES = [
    "Canada", "United States", "Mexico", "United Kingdom", "Afghanistan", "Albania",
    "Algeria", "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Brazil",
    "Chile", "China", "Colombia", "Costa Rica", "Czech Republic", "Denmark", "Egypt",
    "Ethiopia", "Finland", "France", "Germany", "Ghana", "Greece", "Guatemala", "India",
    "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kenya", "Malaysia",
    "Morocco", "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Saudi Arabia", "Singapore",
    "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Thailand", "Turkey",
    "Uganda", "Ukraine", "United Arab Emirates", "Vietnam",
]
COUNTRY_OPTIONS = "\n".join(f"              <option>{c}</option>" for c in COUNTRIES) + \
    '\n              <option value="Other">Other</option>'

# DELEGATE FORM — v5: routes to lynea@solvecustomevents.com only, no dates
DELEGATE = f"""
    <section class="section" style="padding-top: 140px;">
      <div class="container">
        <span class="eyebrow">SOLV\u00c9 Global Summit</span>
        <h1>Be in the room.</h1>
        <p style="max-width: 720px;" class="lead-muted">Delegate registration interest is open now. Every registration signals to funders, governments, and partners that this movement is ready for one table.</p>
        <p class="hero-meta" style="font-family: var(--font-ui); font-size: 15px; margin-bottom: 56px;">Coming Soon&nbsp;|&nbsp;Riviera Maya, Mexico</p>

        <form class="form" data-confirmation="delegate-confirmation" novalidate>
          <div class="form-field">
            <label for="d-name">Full Name <span class="req">*</span></label>
            <input type="text" id="d-name" name="full_name" required autocomplete="name">
          </div>
          <div class="form-field">
            <label for="d-org">Organization Name <span class="req">*</span></label>
            <input type="text" id="d-org" name="organization" required autocomplete="organization">
          </div>
          <div class="form-field">
            <label for="d-title">Title or Role <span class="req">*</span></label>
            <input type="text" id="d-title" name="title" required autocomplete="organization-title">
          </div>
          <div class="form-field">
            <label for="d-country">Country <span class="req">*</span></label>
            <select id="d-country" name="country" required>
              <option value="">Select your country</option>
{COUNTRY_OPTIONS}
            </select>
          </div>
          <div class="form-field">
            <label for="d-email">Email Address <span class="req">*</span></label>
            <input type="email" id="d-email" name="email" required autocomplete="email">
          </div>
          <div class="form-field">
            <label for="d-pillar">Which pillar interests you most? <span class="req">*</span></label>
            <select id="d-pillar" name="pillar" required>
              <option value="">Select a pillar</option>
              <option>ILLUMINATE</option>
              <option>EQUIP</option>
              <option>UNITE</option>
              <option>RESTORE</option>
              <option>All four equally</option>
            </select>
          </div>
          <div class="form-field">
            <label for="d-hear">How did you hear about SOLV\u00c9? <span style="text-transform: none; letter-spacing: 0;">(optional)</span></label>
            <input type="text" id="d-hear" name="referral">
          </div>
          <button type="submit" class="btn btn-primary">Register My Interest</button>
          <p class="form-note">Submissions are routed to lynea@solvecustomevents.com.</p>
        </form>
        <div class="form-confirmation" id="delegate-confirmation" role="status">
          Thank you. We will be in touch as delegate registration opens.
        </div>
      </div>
    </section>
"""

# SPONSORSHIP INQUIRY FORM — v5 field set
SPONSOR = """
    <section class="section" style="padding-top: 140px;">
      <div class="container">
        <span class="eyebrow">SOLV\u00c9 Global Summit</span>
        <h1>Sponsorship Inquiry</h1>
        <p style="max-width: 720px;" class="lead-muted">A limited number of founding partner and sponsorship positions remain for organizations aligned with SOLV\u00c9\u2019s four pillars.</p>
        <p class="hero-meta" style="font-family: var(--font-ui); font-size: 15px; margin-bottom: 56px;">Coming Soon&nbsp;|&nbsp;Riviera Maya, Mexico</p>

        <form class="form" data-confirmation="sponsor-confirmation" novalidate>
          <div class="form-field">
            <label for="s-org">Organization Name <span class="req">*</span></label>
            <input type="text" id="s-org" name="organization" required autocomplete="organization">
          </div>
          <div class="form-field">
            <label for="s-name">Contact Name <span class="req">*</span></label>
            <input type="text" id="s-name" name="contact_name" required autocomplete="name">
          </div>
          <div class="form-field">
            <label for="s-title">Title <span class="req">*</span></label>
            <input type="text" id="s-title" name="title" required autocomplete="organization-title">
          </div>
          <div class="form-field">
            <label for="s-email">Email <span class="req">*</span></label>
            <input type="email" id="s-email" name="email" required autocomplete="email">
          </div>
          <div class="form-field">
            <label for="s-phone">Phone <span style="text-transform: none; letter-spacing: 0;">(optional)</span></label>
            <input type="tel" id="s-phone" name="phone" autocomplete="tel">
          </div>
          <div class="form-field">
            <label for="s-level">Sponsorship interest level <span class="req">*</span></label>
            <select id="s-level" name="interest_level" required>
              <option value="">Select a level</option>
              <option>Title Sponsor</option>
              <option>Presenting Sponsor</option>
              <option>Major Sponsor</option>
              <option>Supporting Sponsor</option>
              <option>Not Sure Yet</option>
            </select>
          </div>
          <div class="form-field">
            <label for="s-message">Message <span style="text-transform: none; letter-spacing: 0;">(optional)</span></label>
            <textarea id="s-message" name="message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit Inquiry</button>
          <p class="form-note">Submissions are routed to lynea@solvecustomevents.com.</p>
        </form>
        <div class="form-confirmation" id="sponsor-confirmation" role="status">
          Thank you. Your inquiry has been received. We will be in touch shortly.
        </div>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# PAGE 12: MMM FULL PAGE (/mystic) — MMM colors only
# ────────────────────────────────────────────────────────────────
MYSTIC = f"""
    <!-- Stand With Humanity — Deep Burgundy throughout (v5 Page 12) -->
    <section class="section" style="min-height: 70vh; display: flex; align-items: center; padding-top: 160px;">
      <div class="container">
        <img class="mmm-logo-img" src="/assets/mmm-logo.webp" alt="Mystic Moonlight Masquerade" width="500" height="172" fetchpriority="high">
        <h1 style="max-width: 860px;">Stand With Humanity</h1>
        <p style="max-width: 620px; font-size: 22px; color: var(--mmm-champagne);">Support with the arts and costume for the cause!</p>
        <div class="btn-row" style="margin-top: 40px;">
          <a class="btn btn-primary" href="{MMM_TICKETS}" target="_blank" rel="noopener">Get Gala Ball Tickets</a>
          <a class="btn btn-secondary" href="{MMM_SITE}" target="_blank" rel="noopener">Visit MMM Website</a>
        </div>
      </div>
    </section>

    <!-- Campaign stats strip -->
    <section class="section" aria-label="Campaign statistics">
      <div class="container">
        <div class="stat-row">
          <div class="stat"><span class="stat-value">$200,000</span><span class="stat-label">Goal</span></div>
          <div class="stat"><span class="stat-value">10</span><span class="stat-label">Non-Profits and Charities</span></div>
          <div class="stat"><span class="stat-value">Multiple</span><span class="stat-label">Events</span></div>
          <div class="stat"><span class="stat-value">1</span><span class="stat-label">Movement</span></div>
        </div>
      </div>
    </section>

    <!-- Body — from MMM website exactly -->
    <section class="section" aria-labelledby="mmm-mission-heading">
      <div class="container" style="max-width: 960px;">
        <h2 id="mmm-mission-heading">The campaign</h2>
        <p class="justify">At the heart of the Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign is a commitment to supporting community-rooted charities whose work strengthens the fabric of society. These organizations are often closest to the people they serve, offering direct care, education, advocacy, and support where it is needed most. By supporting them, we amplify their impact, foster healing, and build pathways toward a more compassionate and inclusive future.</p>
        <p class="justify">Throughout history, art has been a powerful voice for the underrepresented, bringing visibility to struggle, affirming identity, and inspiring movements for justice. In that same spirit, this Gala campaign merges artistry with advocacy, using creativity and celebration to unite us in support of those working tirelessly for change.</p>
      </div>
    </section>

    <!-- Theme -->
    <section class="section" aria-labelledby="mmm-theme-heading">
      <div class="container" style="max-width: 960px;">
        <h2 id="mmm-theme-heading">2026 Campaign Theme: Silk Roads to Discovery</h2>
        <p class="justify">A celebration of the weaving together of the fabrics of societies: those that brought us dance, music, spices, foods and fashion.</p>
      </div>
    </section>

    <!-- Beneficiaries -->
    <section class="section" aria-labelledby="beneficiaries-heading">
      <div class="container">
        <h2 id="beneficiaries-heading" class="section-headline">Beneficiaries</h2>
        <div class="card-grid card-grid-2">
          <article class="card"><h4>Rowan House Society</h4></article>
          <article class="card"><h4>redM</h4></article>
          <article class="card"><h4>Phoenix Foundation</h4></article>
          <article class="card"><h4>WEDO Canada</h4></article>
        </div>
      </div>
    </section>

    <!-- Campaign events -->
    <section class="section" aria-labelledby="events-heading">
      <div class="container">
        <h2 id="events-heading" class="section-headline">Campaign events</h2>
        <ul class="event-timeline">
          <li>
            <span class="ev-name">Mystic Threads</span>
            <span class="ev-detail">A Rococo Reimagining</span>
          </li>
          <li>
            <span class="ev-name">Mystic Mingle</span>
            <span class="ev-detail">A Charitable Showcase and Market</span>
          </li>
          <li>
            <span class="ev-name">Mystic Menagerie</span>
            <span class="ev-detail">VIP Sponsor Soiree</span>
          </li>
          <li>
            <span class="ev-name">Mystic Moonlight Masquerade Gala Ball</span>
            <span class="ev-detail">October 23, 2026, Fairmont Palliser</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-band">
      <div class="container">
        <h2>Stand with humanity.</h2>
        <div class="btn-row" style="justify-content: center;">
          <a class="btn btn-primary" href="{MMM_TICKETS}" target="_blank" rel="noopener">Get Gala Ball Tickets</a>
          <a class="btn btn-secondary" href="{MMM_SITE}" target="_blank" rel="noopener">Visit MMM Website</a>
        </div>
        <p style="margin-top: 40px; font-family: var(--font-ui); font-size: 14px;">Contact: <a href="mailto:lynea@mysticmoonlightmasquerade.com" style="color: var(--mmm-gold);">lynea@mysticmoonlightmasquerade.com</a></p>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# PAGE 13: PORTFOLIO — filterable gallery + lightbox
# ────────────────────────────────────────────────────────────────
PORTFOLIO_IMAGES = [
    ("eg-a", "fundraising", "/assets/photos/mmm-campaign.webp",
     "Performers in luminous costumes at the Mystic Moonlight Masquerade", "Mystic Moonlight Masquerade Campaign, 2026"),
    ("eg-b", "fundraising", "/assets/photos/mystic-mingle.webp",
     "Vibrant lion-dance performers at Mystic Mingle", "Mystic Mingle, 2026"),
    ("eg-c", "event-design", "/assets/photos/mystic-threads.webp",
     "An illuminated feathered masquerade headdress", "Mystic Threads, 2026"),
    ("eg-d", "event-design", "/assets/photos/world-in-vogue.webp",
     "A glittering city skyline at night", "The World In Vogue, 2026"),
    ("eg-e", "weddings", "/assets/photos/wedding-division.webp",
     "A bride and groom on a white dance floor in an elegant hall", "Weddings Division"),
    ("eg-f", "weddings", "/assets/photos/destination-wedding.webp",
     "A couple embracing before a mountain lake at a destination wedding", "Destination Weddings"),
    ("eg-c", "signature-moments", "/assets/photos/division-signature-moments.webp",
     "A romantic LOVE dessert display styled with red and blush balloons", "Signature Moments"),
    ("eg-d", "workshops", "/assets/photos/division-workshops.webp",
     "Historic stone ruins framing an intimate curated experience", "Workshops and Curated Experiences"),
    ("eg-e", "conferences", "/assets/photos/division-conferences.webp",
     "A white beachfront gazebo under palms at a destination event", "Conferences and International Events"),
    ("eg-g", "event-design", "/assets/photos/division-event-design.webp",
     "A styled dessert table beneath a blush balloon arch with gold accents", "Event Design and Styling"),
    ("eg-g", "weddings", "/assets/photos/multicultural-weddings.webp",
     "Gold-foiled multicultural wedding invitations styled with candles", "Multicultural Weddings"),
    ("eg-f", "fundraising", "/assets/photos/division-fundraising.webp",
     "A grand banquet hall set for a gala under dramatic purple lighting", "Fundraising Campaign Events"),
]

FILTERS = [
    ("all", "All"), ("event-design", "Event Design"), ("weddings", "Weddings"),
    ("signature-moments", "Signature Moments"), ("workshops", "Workshops"),
    ("conferences", "Conferences"), ("fundraising", "Fundraising"),
]

PORTFOLIO_FIGURES = "\n".join(
    f"""          <figure class="{cls} lightbox-item" data-category="{cat}">
            <img src="{src}" alt="{alt}" loading="lazy">
            <figcaption>{cap}</figcaption>
          </figure>""" for cls, cat, src, alt, cap in PORTFOLIO_IMAGES
)

FILTER_BUTTONS = "\n".join(
    f'          <button type="button" class="filter-btn{" active" if f == "all" else ""}" data-filter="{f}">{label}</button>'
    for f, label in FILTERS
)

PORTFOLIO = f"""
    <section class="section gold-rim" style="padding-top: 140px;">
      <div class="container">
        <h1>Gallery of Unforgettable Events</h1>
        <p style="max-width: 720px;">A selection of Sol V\u00e9 productions across every division. Every image opens in the gallery.</p>
      </div>
    </section>

    <section class="section" aria-label="Portfolio gallery">
      <div class="container">
        <div class="filter-bar" role="group" aria-label="Filter gallery by division">
{FILTER_BUTTONS}
        </div>
        <div class="editorial-grid">
{PORTFOLIO_FIGURES}
        </div>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# PAGE 14: PRESS AND AWARDS — structured to be easily updated
# ────────────────────────────────────────────────────────────────
PRESS = """
    <section class="section gold-rim" style="padding-top: 140px;">
      <div class="container">
        <h1>Press, Publications and Awards</h1>
      </div>
    </section>

    <section class="section" aria-labelledby="awards-heading">
      <div class="container">
        <h2 id="awards-heading" class="section-headline">Awards</h2>
        <div class="card-grid card-grid-3">
          <article class="card">
            <h4>Best Bespoke Wedding &amp; Event Design Company</h4>
            <p>Lux Life Awards 2026</p>
          </article>
          <article class="card">
            <h4>Artful Event Storytelling Excellence Award</h4>
            <p>Lux Life Awards 2026</p>
          </article>
          <article class="card">
            <h4>Best Decoration</h4>
            <p>Awarding organization &mdash; pending confirmation</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-dark gold-rim" aria-labelledby="press-pub-heading">
      <div class="container">
        <h2 id="press-pub-heading" class="section-headline">Press and Publications</h2>
        <div class="card-grid card-grid-2">
          <article class="card value-card">
            <h4>Bridal Fantasy</h4>
            <p>2019 / 2020</p>
          </article>
          <article class="card value-card">
            <h4>AVOLA Magazine</h4>
            <p>Editorial Feature</p>
          </article>
          <article class="card value-card">
            <h4>Publication &mdash; pending confirmation</h4>
            <p>2020</p>
          </article>
          <article class="card value-card">
            <h4>Publication &mdash; pending confirmation</h4>
            <p>2020</p>
          </article>
        </div>
      </div>
    </section>
"""

# ────────────────────────────────────────────────────────────────
# PAGE 15: CONTACT — v5 form: name, email, phone, inquiry type, message
# ────────────────────────────────────────────────────────────────
CONTACT = """
    <section class="section" style="padding-top: 160px;">
      <div class="container">
        <div class="split">
          <div>
            <h1>Tell us what you are building.</h1>
            <p style="max-width: 540px;">Every extraordinary event begins with a conversation.</p>
            <p style="font-family: var(--font-ui); font-size: 14px; color: var(--cocoa);">
              Calgary, Alberta<br>
              <a href="mailto:lynea@solvecustomevents.com" style="color: var(--bronze);">lynea@solvecustomevents.com</a>
            </p>
          </div>
          <div>
            <form class="form" data-confirmation="contact-confirmation" novalidate>
              <div class="form-field">
                <label for="c-name">Full Name <span class="req">*</span></label>
                <input type="text" id="c-name" name="full_name" required autocomplete="name">
              </div>
              <div class="form-field">
                <label for="c-email">Email <span class="req">*</span></label>
                <input type="email" id="c-email" name="email" required autocomplete="email">
              </div>
              <div class="form-field">
                <label for="c-phone">Phone <span style="text-transform: none; letter-spacing: 0;">(optional)</span></label>
                <input type="tel" id="c-phone" name="phone" autocomplete="tel">
              </div>
              <div class="form-field">
                <label for="c-type">Type of inquiry <span class="req">*</span></label>
                <select id="c-type" name="inquiry_type" required>
                  <option value="">Select a type</option>
                  <option>Sol V\u00e9 Events</option>
                  <option>SOLV\u00c9 Global Summit</option>
                  <option>MMM Campaign</option>
                </select>
              </div>
              <div class="form-field">
                <label for="c-message">Message <span class="req">*</span></label>
                <textarea id="c-message" name="message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Your Vision</button>
              <p class="form-note">Submissions are routed to lynea@solvecustomevents.com.</p>
            </form>
            <div class="form-confirmation" id="contact-confirmation" role="status">
              Thank you. Your vision has been received. We will be in touch shortly.
            </div>
          </div>
        </div>
      </div>
    </section>
"""

REDIRECT_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url={target}">
  <link rel="canonical" href="{target}">
  <title>Redirecting to {target}</title>
</head>
<body>
  <p>This page has moved to <a href="{target}">{target}</a>.</p>
</body>
</html>
"""

PAGES = {
    "index.html": dict(
        title="Sol V\u00e9 Custom Events Luxury Event Production Calgary Alberta",
        desc="Sol V\u00e9 Custom Events is a multi-division luxury event production company in Calgary, Alberta \u2014 event design, weddings, signature moments, workshops, conferences, and fundraising campaigns.",
        body=HOME,
    ),
    "about/index.html": dict(
        title="About Sol V\u00e9 Custom Events Lynea Vaugeois Hetherington Founder",
        desc="Meet Lynea (Vaugeois) Hetherington, founder and creative director of Sol V\u00e9 Custom Events, and learn who we are \u2014 a Calgary luxury event planning and styling company that travels worldwide.",
        body=ABOUT,
    ),
    "values/index.html": dict(
        title="Sol V\u00e9 Custom Events Values Land Acknowledgement Inclusion",
        desc="Sol V\u00e9 Custom Events values: land acknowledgement of Treaty 7 territory, diversity, inclusion and belonging, and unwavering support of 2SLGBTQIA+ communities.",
        body=VALUES,
    ),
    "divisions/index.html": dict(
        title="Six Divisions of Sol V\u00e9 Custom Events One House Six Worlds",
        desc="Every event Sol V\u00e9 produces lives within one of six distinct divisions: event design, weddings, signature moments, workshops, conferences, and fundraising campaigns.",
        body=DIVISIONS_OVERVIEW,
    ),
    "divisions/event-design/index.html": dict(
        title="Event Design and Styling Division Sol V\u00e9 Custom Events Calgary",
        desc="Creative direction from concept to execution for fashion shows, galas, branded activations, and cultural productions. All artistic IP remains owned by Sol V\u00e9.",
        body=EVENT_DESIGN,
    ),
    "divisions/weddings/index.html": dict(
        title="Luxury Multicultural Destination Weddings Sol V\u00e9 Custom Events",
        desc="Luxury, multicultural, and destination weddings designed to belong in a magazine and live in a memory. Based in Calgary, producing weddings worldwide.",
        body=WEDDINGS,
    ),
    "divisions/signature-moments/index.html": dict(
        title="Signature Moments Proposals and Celebrations Sol V\u00e9 Custom Events",
        desc="Proposals, anniversaries, intimate celebrations, and every milestone that deserves to be remembered perfectly. Surprise engagements are our specialty.",
        body=SIGNATURE_MOMENTS,
    ),
    "divisions/workshops/index.html": dict(
        title="Workshops and Curated Experiences Sol V\u00e9 Custom Events",
        desc="Portfolio development workshops, wellness retreats, corporate retreats, and destination training experiences that inspire as much as they restore.",
        body=WORKSHOPS,
    ),
    "divisions/conferences/index.html": dict(
        title="Conferences and International Events Sol V\u00e9 Custom Events",
        desc="World-class production at every scale, from boardroom conferences to international summits, including the SOLV\u00c9 Global Summit. Coming Soon.",
        body=CONFERENCES,
    ),
    "divisions/fundraising/index.html": dict(
        title="Fundraising Campaign Events Division Sol V\u00e9 Custom Events",
        desc="Multi-event fundraising campaigns that use immersive performance, art, and cultural celebration for community engagement and charitable impact, including the Mystic Moonlight Masquerade Campaign 2026.",
        body=FUNDRAISING,
    ),
    "solve/index.html": dict(
        title="SOLV\u00c9 Global Summit International Anti-Trafficking Conference Riviera Maya",
        desc="The world's first politically neutral, cross-sector, holistic international conference on human trafficking. Coming Soon. Riviera Maya, Mexico.",
        body=SOLVE, theme="theme-solve",
    ),
    "solve/delegate/index.html": dict(
        title="Register Delegate Interest SOLV\u00c9 Global Summit",
        desc="Register your delegate interest for the SOLV\u00c9 Global Summit, the world's first politically neutral international conference on human trafficking. Coming Soon.",
        body=DELEGATE, theme="theme-solve",
    ),
    "solve/sponsor/index.html": dict(
        title="Sponsorship Inquiry SOLV\u00c9 Global Summit Founding Partners",
        desc="Inquire about sponsorship and founding partner positions for the SOLV\u00c9 Global Summit, aligned with the four pillars: ILLUMINATE, EQUIP, UNITE, RESTORE.",
        body=SPONSOR, theme="theme-solve",
    ),
    "mystic/index.html": dict(
        title="Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026",
        desc="Stand With Humanity. The Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026 \u2014 goal $200,000, 10 non-profits and charities, multiple events, 1 movement.",
        body=MYSTIC, theme="theme-mmm",
    ),
    "portfolio/index.html": dict(
        title="Gallery of Unforgettable Events Sol V\u00e9 Custom Events Portfolio",
        desc="A filterable gallery of Sol V\u00e9 Custom Events work across event design, weddings, signature moments, workshops, conferences, and fundraising campaigns.",
        body=PORTFOLIO,
    ),
    "press/index.html": dict(
        title="Press Publications and Awards Sol V\u00e9 Custom Events",
        desc="Sol V\u00e9 Custom Events in the press: HUM TV, AVOLA Magazine, Canada Council for the Arts, Bridal Fantasy, Men's Vow Magazine, Dance BBG, and award recognition.",
        body=PRESS,
    ),
    "contact/index.html": dict(
        title="Contact Sol V\u00e9 Custom Events Tell Us Your Vision",
        desc="Tell us what you are building. Every extraordinary event begins with a conversation with Sol V\u00e9 Custom Events, Calgary, Alberta.",
        body=CONTACT,
    ),
    # Old slugs redirect to the v5 slugs
    "divisions/proposals/index.html": REDIRECT_TEMPLATE.format(target="/divisions/signature-moments/"),
    "divisions/retreats/index.html": REDIRECT_TEMPLATE.format(target="/divisions/workshops/"),
}


def main():
    for rel, spec in PAGES.items():
        out = ROOT / rel
        out.parent.mkdir(parents=True, exist_ok=True)
        if isinstance(spec, str):
            html = spec
        else:
            html = page(spec["title"], spec["desc"], spec["body"], spec.get("theme", ""))
        out.write_text(html, encoding="utf-8")
        print("wrote", rel)


if __name__ == "__main__":
    main()
