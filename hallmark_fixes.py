#!/usr/bin/env python3
"""One-shot Hallmark audit fixes across all HTML pages.

- Drop GSAP CDN scripts (hero entrance is now pure CSS; no scroll reveals).
- Strip .gsap-fade-up classes (universal animate-on-scroll is a slop gate).
- Replace fabricated portfolio captions with honest style-reference labels.
- Remove decorative eyebrows beyond the manual-mandated ones.
- Curl apostrophes in rendered text nodes.
Run once: python3 hallmark_fixes.py
"""

import pathlib
import re

GSAP_LINES = [
    '  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>\n',
    '  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>\n',
]

# Fabricated event captions -> honest labels (real events keep their names)
CAPTIONS = {
    "Private Wedding, 2025": "Style reference — Weddings Division",
    "Destination Ceremony, 2025": "Style reference — Destination Weddings",
    "Private Reception, 2024": "Style reference — Receptions",
    "Private Proposal, 2025": "Style reference — Proposals",
    "Private Celebration, 2025": "Style reference — Bespoke Experiences",
    "Private Anniversary, 2024": "Style reference — Intimate Celebrations",
    "Leadership Retreat, 2025": "Style reference — Corporate Retreats",
    "Wellness Program, 2025": "Style reference — Wellness Retreats",
    "Destination Offsite, 2024": "Style reference — Destination Retreats",
    "International Summit Production, 2025": "Style reference — International Events",
    "Executive Conference, 2025": "Style reference — Conferences",
    "Leadership Forum, 2024": "Style reference — Conference Production",
    "Campaign Gala Styling, 2026": "Style reference — Campaign Galas",
    "MMM Gala Ball Preview, 2026": "Style reference — Gala Ball 2026",
}

# Decorative eyebrows to remove (manual-mandated ones stay)
EYEBROWS_REMOVE = [
    "Six Divisions",
    "A World Within Sol Vé",
    "Selected Work",
    "Recognition",
    "The Setting",
    "Governance",
    "Contact",
    "Flagship Production",
    "Now Underway",
]


def curl_apostrophes(html: str) -> str:
    """Curly apostrophes in text nodes only (pages carry no inline JS)."""
    parts = re.split(r"(<[^>]*>)", html)
    for i, part in enumerate(parts):
        if not part.startswith("<"):
            parts[i] = re.sub(r"(?<=[A-Za-z])'(?=[A-Za-z])", "\u2019", part)
    return "".join(parts)


def process(path: pathlib.Path) -> None:
    html = path.read_text(encoding="utf-8")

    for line in GSAP_LINES:
        html = html.replace(line, "")

    html = html.replace(' class="gsap-fade-up"', "")
    html = html.replace(" gsap-fade-up", "")

    for old, new in CAPTIONS.items():
        html = html.replace(f"<figcaption>{old}</figcaption>", f"<figcaption>{new}</figcaption>")

    for label in EYEBROWS_REMOVE:
        html = re.sub(
            r'[ \t]*<span class="eyebrow"[^>]*>' + re.escape(label) + r"</span>\n",
            "",
            html,
        )

    html = curl_apostrophes(html)
    path.write_text(html, encoding="utf-8")
    print("fixed", path)


if __name__ == "__main__":
    for f in sorted(pathlib.Path(".").rglob("*.html")):
        process(f)
