#!/usr/bin/env python3
"""Import client footage from assets/film/incoming/ into the site.

    python3 tools/import_film.py

Each clip is encoded twice — mp4 (H.264, universal) and webm (VP9, smaller) — capped
at a size budget so a hero film never becomes the reason the page is slow. A poster
frame is pulled from the clip so the hero has something composed to show before the
video loads, and for anyone who has asked for reduced motion.

Credits work exactly as they do for photography: name the videographer in a
credits.txt beside the clips, or the clip is imported but held.
"""

import argparse
import json
import pathlib
import shutil
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
INCOMING = ROOT / "assets" / "film" / "incoming"
OUTDIR = ROOT / "assets" / "film"
FILM_JSON = OUTDIR / "film.json"

SOURCE_SUFFIXES = {".mov", ".mp4", ".m4v", ".avi", ".mkv", ".webm"}
TARGET_HEIGHT = 1080
MAX_SECONDS = 20             # a hero loop; not a showreel
POSTER_AT = 1.0              # seconds into the clip
CRF_MP4 = 26
CRF_WEBM = 34


def need(binary):
    if not shutil.which(binary):
        sys.exit(f"{binary} is required and was not found on PATH")


def run(cmd):
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.strip().splitlines()[-1] if proc.stderr else "ffmpeg failed")


def read_credits(folder):
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
    out = [c if c.isalnum() else "-" for c in stem.lower()]
    slug = "".join(out)
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug.strip("-") or "clip"


# Scale to TARGET_HEIGHT, keep aspect, force even dimensions (H.264 requires it).
VF = f"scale=-2:{TARGET_HEIGHT}:flags=lanczos"


def encode(src, slug):
    mp4 = OUTDIR / f"{slug}.mp4"
    webm = OUTDIR / f"{slug}.webm"
    poster = OUTDIR / f"{slug}-poster.webp"

    # Silent by design: a hero that makes noise on load is a reason to leave.
    run(["ffmpeg", "-y", "-i", str(src), "-t", str(MAX_SECONDS), "-an",
         "-vf", VF, "-c:v", "libx264", "-preset", "slow", "-crf", str(CRF_MP4),
         "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(mp4)])

    run(["ffmpeg", "-y", "-i", str(src), "-t", str(MAX_SECONDS), "-an",
         "-vf", VF, "-c:v", "libvpx-vp9", "-crf", str(CRF_WEBM), "-b:v", "0",
         "-row-mt", "1", str(webm)])

    run(["ffmpeg", "-y", "-ss", str(POSTER_AT), "-i", str(src), "-frames:v", "1",
         "-vf", VF, "-q:v", "80", str(poster)])

    return mp4, webm, poster


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--budget-mb", type=float, default=4.0,
                    help="warn when an encoded mp4 exceeds this (default 4 MB)")
    args = ap.parse_args()

    need("ffmpeg")
    if not INCOMING.exists():
        sys.exit(f"No drop folder at {INCOMING}")

    credits = read_credits(INCOMING)
    registry = json.loads(FILM_JSON.read_text(encoding="utf-8")) if FILM_JSON.exists() else {}

    done, held, failed = [], [], []

    for src in sorted(INCOMING.iterdir()):
        if src.suffix.lower() not in SOURCE_SUFFIXES or src.name.startswith("."):
            continue

        slug = slugify(src.stem)
        credit = credits.get(src.name.lower(), "").strip()

        try:
            mp4, webm, poster = encode(src, slug)
        except RuntimeError as exc:
            failed.append((src.name, str(exc)))
            continue

        size_mb = mp4.stat().st_size / 1_048_576
        registry[slug] = {
            "mp4": f"assets/film/{mp4.name}",
            "webm": f"assets/film/{webm.name}",
            "poster": f"assets/film/{poster.name}",
            "credit": credit,
            "approved": bool(credit),
            "status": "published" if credit else "held",
            "mp4_mb": round(size_mb, 2),
            "source": src.name,
        }
        if not credit:
            held.append(slug)
        done.append((slug, size_mb, credit or "— held, no credit —"))

        if size_mb > args.budget_mb:
            print(f"  note: {mp4.name} is {size_mb:.1f} MB, over the "
                  f"{args.budget_mb:.0f} MB budget — consider a shorter loop")

    FILM_JSON.write_text(json.dumps(registry, indent=2, ensure_ascii=False) + "\n",
                         encoding="utf-8")

    print(f"encoded {len(done)}   held {len(held)}   failed {len(failed)}")
    for slug, mb, credit in done:
        print(f"  ok       {slug}  ({mb:.1f} MB, {credit})")
    for name, why in failed:
        print(f"  FAILED   {name}: {why}")
    if held:
        print("\nThese clips need a videographer's name before they can go live: "
              + ", ".join(held))


if __name__ == "__main__":
    main()
