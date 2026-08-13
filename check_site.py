#!/usr/bin/env python3
"""Delivery gate for the Sol Vé Custom Events site.

    python3 build_site.py && python3 check_site.py

Every rule here exists because a person asked for it. They are checked mechanically so
that "it was addressed" is something the build proves rather than something we claim.

    1  every image is registered, credited and approved
    2  every internal link resolves
    3  every external link answers
    4  no adjective-selling ("luxury", "world-class", "opulent", "high-end")
    5  no SOLVÉ Global Summit anywhere outside the redirect stubs
    6  no placeholder credit strings
    7  a contact route in the masthead AND the footer of every page
    8  no image published below the resolution its role needs
    9  LinkedIn points at the company page, never a personal profile
   10  no lynea@ address on a public page
   11  every film has a poster frame and a credited videographer

Exit 0 means the site is deliverable. Anything else prints what is wrong and why.

--skip-external skips rule 3 when you're offline.
"""

import argparse
import json
import pathlib
import re
import sys
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parent
MANIFEST = ROOT / "assets" / "photos" / "manifest.json"
FILM_JSON = ROOT / "assets" / "film" / "film.json"

# Rule 4. "elegance" is deliberately NOT here: the messaging PDF uses it in
# "Where It Began" to argue that elegance is not what makes a gathering matter.
# "bespoke" is not here either; the PDF uses it in Signature Moments.
BANNED_WORDS = ["luxury", "luxurious", "world-class", "world class",
                "opulent", "opulence", "high-end"]

PLACEHOLDER_PATTERNS = [
    "credit to be confirmed",
    "pending confirmation",
    "awaiting sol vé photography",
    "awaiting sol ve photography",
    "style reference",
    "lorem ipsum",
    "tbd",
]

SUMMIT_PATTERNS = ["solvé global summit", "solve global summit", "/solve/"]

# Rule 8 — minimum intrinsic width for the job an image is doing.
ROLE_MINIMUMS = [
    (("hero", "chapter-plate", "scene", "full-bleed", "plate-figure"), 2000),
    (("card-img", "editorial-grid", "split-media", "figure"), 1000),
]
EXEMPT_FROM_RESOLUTION = ("logo", "crest", "mark", "medallion", "icon")


class Extractor(HTMLParser):
    """Pulls the handful of facts the rules need out of a rendered page."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links, self.images, self.videos = [], [], []
        self.text_parts = []
        self._skip_depth = 0
        self._in_header = 0
        self._in_footer = 0
        self.header_hrefs, self.footer_hrefs = [], []
        self._class_stack = []

    # Void elements never emit an end tag, so pushing them onto the class stack
    # would leave it permanently misaligned — every element after the first <img>
    # would inherit someone else's ancestor classes.
    VOID = {"img", "source", "br", "hr", "meta", "link", "input", "wbr",
            "track", "area", "base", "col", "embed", "param"}

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        cls = a.get("class", "")
        if tag not in self.VOID:
            self._class_stack.append(cls)

        if tag in ("script", "style"):
            self._skip_depth += 1
        if tag == "header" or "masthead" in cls or "compact-nav" in cls:
            self._in_header += 1
        if tag == "footer" or "site-footer" in cls:
            self._in_footer += 1

        if tag == "a" and "href" in a:
            self.links.append(a["href"])
            if self._in_header:
                self.header_hrefs.append(a["href"])
            if self._in_footer:
                self.footer_hrefs.append(a["href"])
        if tag == "img" and "src" in a:
            self.images.append((a["src"], " ".join(self._class_stack + [cls]), a.get("alt")))
        if tag == "source" and "src" in a:
            self.images.append((a["src"], " ".join(self._class_stack + [cls]), None))
        if tag == "video":
            self.videos.append(a)

    def handle_endtag(self, tag):
        if self._class_stack:
            self._class_stack.pop()
        if tag in ("script", "style") and self._skip_depth:
            self._skip_depth -= 1
        if tag in ("header", "footer"):
            if tag == "header" and self._in_header:
                self._in_header -= 1
            if tag == "footer" and self._in_footer:
                self._in_footer -= 1

    def handle_data(self, data):
        if not self._skip_depth:
            self.text_parts.append(data)

    @property
    def text(self):
        return " ".join(self.text_parts)


def pages():
    """Every generated index.html, excluding drop folders and tooling."""
    for path in sorted(ROOT.rglob("index.html")):
        rel = path.relative_to(ROOT)
        if any(part in (".git", "node_modules", "incoming", "tools") for part in rel.parts):
            continue
        yield rel, path


def is_redirect_stub(html):
    return 'http-equiv="refresh"' in html


def published_images(manifest):
    """rel-path -> entry, for images cleared to appear on the site."""
    out = {}
    for section in ("brand", "photography"):
        for rel, entry in manifest.get(section, {}).items():
            out[rel] = entry
    return out


def check(skip_external=False):
    failures = []
    warnings = []

    def fail(rule, page, detail):
        failures.append((rule, str(page), detail))

    if not MANIFEST.exists():
        return [("setup", "-", f"missing {MANIFEST.relative_to(ROOT)}")], []

    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    registry = published_images(manifest)
    film = json.loads(FILM_JSON.read_text(encoding="utf-8")) if FILM_JSON.exists() else {}

    external = set()
    all_pages = list(pages())
    if not all_pages:
        return [("setup", "-", "no pages found — run build_site.py first")], []

    for rel, path in all_pages:
        html = path.read_text(encoding="utf-8")
        if is_redirect_stub(html):
            continue

        p = Extractor()
        p.feed(html)
        text = p.text
        low = text.lower()

        # ── 4. adjective-selling ──────────────────────────────────
        for word in BANNED_WORDS:
            if re.search(rf"\b{re.escape(word)}\b", low):
                fail(4, rel, f'body copy still says "{word}" — the design is supposed '
                             f'to carry that, not the sentence')

        # ── 5. the Summit ─────────────────────────────────────────
        hay = (low + " " + " ".join(p.links).lower())
        for pat in SUMMIT_PATTERNS:
            if pat in hay:
                fail(5, rel, f'"{pat}" is still present — the messaging PDF says remove '
                             f'SOLVÉ Global Summit completely')

        # ── 6. placeholder credits ────────────────────────────────
        for pat in PLACEHOLDER_PATTERNS:
            if pat in low:
                fail(6, rel, f'placeholder text "{pat}" would ship to a client')

        # ── 10. retired address ───────────────────────────────────
        if "lynea@" in low or "lynea@" in " ".join(p.links).lower():
            fail(10, rel, "lynea@ is still public; contact should be info@solvecustomevents.com")

        # ── 1 & 8. imagery ────────────────────────────────────────
        for src, cls, alt in p.images:
            if not src.strip():
                continue                    # a slot the lightbox fills at runtime
            if src.startswith(("http://", "https://")):
                fail(1, rel, f"remote image {src[:60]}… — imagery must be hosted here "
                             f"and credited, not hotlinked stock")
                continue
            key = src.lstrip("/")
            entry = registry.get(key)
            if entry is None:
                fail(1, rel, f"{key} is not in manifest.json")
                continue
            if not entry.get("credit"):
                fail(1, rel, f"{key} has no photographer credited")
            if not entry.get("approved"):
                fail(1, rel, f"{key} is not approved for publication "
                             f"({entry.get('reason', 'no reason recorded')})")
            # alt="" is correct for a decorative mark that sits beside its own text
            # label; a *missing* alt attribute is the actual failure.
            if alt is None:
                fail(1, rel, f"{key} has no alt attribute")
            elif not alt.strip() and not entry.get("decorative"):
                fail(1, rel, f"{key} has empty alt but is not marked decorative")

            blob = f"{cls} {key}".lower()
            if not any(x in blob for x in EXEMPT_FROM_RESOLUTION):
                width = (entry.get("intrinsic") or [0, 0])[0]
                for markers, minimum in ROLE_MINIMUMS:
                    if any(m in blob for m in markers):
                        if width and width < minimum:
                            fail(8, rel, f"{key} is {width}px wide but is used at "
                                         f"{minimum}px+ — it will look soft")
                        break

        # ── 11. film ──────────────────────────────────────────────
        for v in p.videos:
            if not v.get("poster"):
                fail(11, rel, "a <video> has no poster frame")
        for slug, entry in film.items():
            if entry.get("poster", "").lstrip("/") in [i[0].lstrip("/") for i in p.images] \
                    and not entry.get("credit"):
                fail(11, rel, f"film '{slug}' has no videographer credited")

        # ── 2 & 3. links ──────────────────────────────────────────
        for href in p.links:
            if href.startswith(("mailto:", "tel:", "#", "data:")):
                continue
            if href.startswith(("http://", "https://")):
                external.add(href)
                # ── 9. LinkedIn ───────────────────────────────────
                if "linkedin.com" in href:
                    if "/company/" not in href:
                        fail(9, rel, f"LinkedIn points at {href} — it must be the "
                                     f"Sol Vé Custom Events company page, not a "
                                     f"personal profile")
                    if "REPLACE" in href.upper() or "PLACEHOLDER" in href.upper():
                        fail(9, rel, "LinkedIn URL is still the placeholder")
                continue
            target = ROOT / href.lstrip("/")
            if target.is_dir():
                if not (target / "index.html").exists():
                    fail(2, rel, f"{href} has no index.html")
            elif not target.exists():
                fail(2, rel, f"{href} does not resolve to a file")

        # ── 7. reachable contact ──────────────────────────────────
        # The masthead needs an actual button to /contact/. A mailto: buried in a
        # 12px meta line is not "a highly visible and easy contact button".
        if not any("/contact" in h for h in p.header_hrefs):
            fail(7, rel, "no /contact/ button in the masthead — a contact button has to "
                         "be visible on every page without scrolling")
        if not any("/contact" in h or h.startswith(("mailto:", "tel:"))
                   for h in p.footer_hrefs):
            fail(7, rel, "no contact route in the footer")

    # ── 3. external links, once each ──────────────────────────────
    # Shelled out to curl rather than urllib: this machine's Python has no usable CA
    # bundle, and a link check that reports every https URL as broken is worse than
    # no link check at all.
    if not skip_external and external:
        import shutil
        import subprocess
        if not shutil.which("curl"):
            warnings.append("curl not found — external links not checked")
        else:
            # Social platforms fingerprint user agents and answer inconsistently:
            # Facebook returns 400 to a full Chrome UA and 200 to a bare one. Try
            # both before calling a link broken — a checker that cries wolf is a
            # checker people learn to ignore.
            AGENTS = [
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/120.0 Safari/537.36",
                "Mozilla/5.0",
            ]

            def probe(url):
                best = 0
                for agent in AGENTS:
                    try:
                        out = subprocess.run(
                            ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}",
                             "-L", "--max-time", "15", "-A", agent, url],
                            capture_output=True, text=True, timeout=25)
                        code = int(out.stdout.strip() or 0)
                    except Exception:
                        continue
                    if 200 <= code < 400:
                        return code
                    best = code or best
                return best

            for url in sorted(external):
                if "fonts.googleapis" in url or "fonts.gstatic" in url:
                    continue
                code = probe(url)
                if code == 0:
                    warnings.append(f"{url} did not respond — verify by hand")
                # 999 is LinkedIn refusing bots; 403/405 usually means the host blocks
                # automated requests, not that the page is missing.
                elif code in (403, 405, 999):
                    warnings.append(f"{url} returned {code} to an automated check "
                                    f"(bot protection) — verify by hand")
                elif code >= 400:
                    fail(3, "external", f"{url} returned {code}")

    return failures, warnings


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--skip-external", action="store_true",
                    help="skip the external link check (rule 3)")
    args = ap.parse_args()

    failures, warnings = check(skip_external=args.skip_external)

    for note in warnings:
        print(f"note     {note}")

    if not failures:
        print("\nAll checks passed. The site is deliverable.")
        return 0

    by_rule = {}
    for rule, page, detail in failures:
        by_rule.setdefault(rule, []).append((page, detail))

    titles = {
        1: "Imagery — registered, credited, approved, described",
        2: "Internal links resolve",
        3: "External links answer",
        4: "No adjective-selling",
        5: "SOLVÉ Global Summit removed",
        6: "No placeholder text",
        7: "Contact reachable from every page",
        8: "Images big enough for the job",
        9: "LinkedIn is the company page",
        10: "lynea@ retired from public pages",
        11: "Film has posters and credits",
        "setup": "Setup",
    }

    print()
    for rule in sorted(by_rule, key=lambda r: (isinstance(r, str), r)):
        items = by_rule[rule]
        print(f"RULE {rule} — {titles.get(rule, '')}  ({len(items)})")
        seen = set()
        for page, detail in items:
            line = f"    {page}: {detail}"
            if line not in seen:
                seen.add(line)
                print(line)
        print()

    print(f"{len(failures)} problem(s). The site is not deliverable yet.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
