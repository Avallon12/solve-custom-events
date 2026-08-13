# Drop your photographs here

One folder per division. Drop files into the folder they belong to, then run:

```bash
python3 tools/import_photos.py
```

The importer resizes, converts to webp, writes them into `assets/photos/`, and
registers them in `manifest.json`. Nothing you drop here is published directly —
it goes through the manifest first.

## What to drop

- **Originals, not exports.** JPEG/PNG/HEIC/TIFF straight from the photographer.
- **At least 2000px on the long edge.** Anything smaller is rejected with a message
  telling you the size it came in at. This is not fussiness: the old homepage hero
  was 442×650 stretched across a 1440px screen, and the softness was one of the
  reasons the site read as cheap.
- **Only professional photography.** No phone snaps, no screenshots, no stock.

## Credits

Every photograph needs the photographer's name. Two ways to supply it:

**1. A `credits.txt` in the same folder** — one line per file:

```
gala-entrance.jpg = Jane Okafor
head-table.jpg    = Jane Okafor
ceremony-arch.jpg = Marc Devries
```

**2. Nothing at all** — the importer brings the file in but holds it unpublished and
adds it to `CREDITS-NEEDED.md` at the repo root. That file is your chase list: one
line per photograph, with the path so you can look at it. As soon as you learn a name,
add it to `credits.txt` and re-run the importer, and the photograph goes live.

If a photograph genuinely has no findable photographer, tell me and we'll decide
between crediting the studio, crediting Sol Vé, or leaving it out.

## Founder photograph

`founder/` has a specific brief, from the messaging PDF. It should be authentic —
one of:

- greeting guests
- speaking with a couple
- collaborating with a team
- quietly observing a room you've helped create

A studio portrait is a fallback, not the target.

## Film

Video goes in `assets/film/incoming/` instead. Same rule on credits — the
videographer gets named. Send the highest-quality source you have; an Instagram
download has already been compressed once and it shows on a large screen.
