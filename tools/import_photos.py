#!/usr/bin/env python3
"""Import client photography from assets/photos/incoming/ into the site.

Drop originals into assets/photos/incoming/<category>/, optionally alongside a
credits.txt mapping filenames to photographers, then:

    python3 tools/import_photos.py

Everything imported is registered in assets/photos/manifest.json. A photograph is
published only when it has a credit; without one it is imported but held, and listed
in CREDITS-NEEDED.md for the client to chase.

Rejections are loud and specific — a file that comes in under the minimum resolution
says so, with its actual size, because "too small" is the failure that made the old
homepage hero look cheap.
"""

import argparse
import json
import pathlib
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is required:  python3 -m pip install Pillow")

ROOT = pathlib.Path(__file__).resolve().parent.parent
INCOMING = ROOT / "assets" / "photos" / "incoming"
OUTDIR = ROOT / "assets" / "photos"
MANIFEST = OUTDIR / "manifest.json"
CREDITS_DOC = ROOT / "CREDITS-NEEDED.md"

MIN_LONG_EDGE = 2000
MAX_LONG_EDGE = 2800          # what we actually ship; beyond this is wasted bytes
WEBP_QUALITY = 82
SOURCE_SUFFIXES = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".heic", ".heif", ".webp"}


def load_manifest():
    with MANIFEST.open(encoding="utf-8") as fh:
        return json.load(fh)


def save_manifest(data):
    with MANIFEST.open("w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2, ensure_ascii=False)
        fh.write("\n")


def read_credits(folder):
    """credits.txt — one 'filename = Photographer Name' per line. '#' comments."""
    path = folder / "credits.txt"
    if not path.exists():
        return {}
    credits = {}
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        name, _, who = line.partition("=")
        credits[name.strip().lower()] = who.strip()
    return credits


def slugify(stem):
    out = []
    for ch in stem.lower():
        if ch.isalnum():
            out.append(ch)
        elif ch in " _-.":
            out.append("-")
    slug = "".join(out)
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug.strip("-") or "image"


def convert(src, dest):
    """Downscale to MAX_LONG_EDGE, honour EXIF rotation, write webp."""
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGB")
        w, h = im.size
        long_edge = max(w, h)
        if long_edge > MAX_LONG_EDGE:
            scale = MAX_LONG_EDGE / long_edge
            im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
        im.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
        return im.size


def intrinsic_size(path):
    with Image.open(path) as im:
        return ImageOps.exif_transpose(im).size


def write_credits_doc(held):
    if not held:
        if CREDITS_DOC.exists():
            CREDITS_DOC.unlink()
        return

    lines = [
        "# Photographs waiting on a credit",
        "",
        f"{len(held)} photograph(s) are imported but **not published**, because we don't",
        "have the photographer's name yet. Every photograph on the site carries a named",
        "artist, so these stay held until we do.",
        "",
        "To release one: add the name to the `credits.txt` in its `incoming/` folder and",
        "re-run `python3 tools/import_photos.py`. It goes live on the next build.",
        "",
        "| Photograph | Division | Who took it? |",
        "|---|---|---|",
    ]
    for entry in sorted(held, key=lambda e: (e["category"], e["file"])):
        lines.append(f"| `{entry['file']}` | {entry['category']} | _______________ |")
    lines += [
        "",
        "If a photograph has no findable photographer, say so and we'll decide between",
        "crediting the studio, crediting Sol Vé, or leaving it out of the site.",
        "",
    ]
    CREDITS_DOC.write_text("\n".join(lines), encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--dry-run", action="store_true", help="report without writing")
    args = ap.parse_args()

    if not INCOMING.exists():
        sys.exit(f"No drop folder at {INCOMING}")

    manifest = load_manifest()
    photos = manifest.setdefault("photography", {})
    allowed = set(manifest["_rules"]["allowed_categories"])

    imported, rejected, held = [], [], []

    for folder in sorted(p for p in INCOMING.iterdir() if p.is_dir()):
        category = folder.name
        if category not in allowed:
            rejected.append((folder.name, f"'{category}' is not a known division"))
            continue

        credits = read_credits(folder)

        for src in sorted(folder.iterdir()):
            if src.suffix.lower() not in SOURCE_SUFFIXES or src.name.startswith("."):
                continue

            try:
                w, h = intrinsic_size(src)
            except Exception as exc:                       # unreadable / corrupt
                rejected.append((src.name, f"could not be read ({exc})"))
                continue

            if max(w, h) < MIN_LONG_EDGE:
                rejected.append((
                    src.name,
                    f"{w}x{h} — under the {MIN_LONG_EDGE}px minimum on the long edge. "
                    f"Send the original rather than an export."
                ))
                continue

            rel = f"assets/photos/{category}-{slugify(src.stem)}.webp"
            dest = ROOT / rel
            credit = credits.get(src.name.lower(), "").strip()

            if not args.dry_run:
                out_w, out_h = convert(src, dest)
            else:
                out_w, out_h = (w, h)

            entry = {
                "status": "published" if credit else "held",
                "category": category,
                "credit": credit,
                "approved": bool(credit),
                "alt": photos.get(rel, {}).get("alt", ""),
                "intrinsic": [out_w, out_h],
                "source": src.name,
            }
            if not credit:
                entry["reason"] = "Photographer unknown. Listed in CREDITS-NEEDED.md."
                held.append({"file": rel, "category": category})

            photos[rel] = entry
            imported.append((rel, credit or "— held, no credit —"))

    if not args.dry_run:
        save_manifest(manifest)
        write_credits_doc(held + [
            {"file": f, "category": e.get("category", "?")}
            for f, e in photos.items()
            if e.get("status") == "held" and not any(h["file"] == f for h in held)
        ])

    print(f"imported {len(imported)}   held {len(held)}   rejected {len(rejected)}")
    for name, credit in imported:
        print(f"  ok       {name}  ({credit})")
    for name, why in rejected:
        print(f"  REJECTED {name}: {why}")
    if held:
        print(f"\n{len(held)} photograph(s) need a photographer's name — see CREDITS-NEEDED.md")
    if args.dry_run:
        print("\n(dry run — nothing written)")


if __name__ == "__main__":
    main()
