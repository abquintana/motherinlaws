# Mother-in-Law's Bistro

Marketing landing page for Mother-in-Law's Bistro — elevated home cooking in
Cos Cob, Connecticut (207 Valley Road).

Built as a single, responsive static page from the approved **Hydrangea Blue**
design ("2b (final)") exported from Claude Design.

## Run it

No build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Structure

```
index.html        markup (nav, hero, scene, menu, story/visit, footer)
styles.css        design tokens + responsive layout
script.js         mobile nav toggle
assets/images/    dish + scene photos
project/          original Claude Design handoff bundle (source of truth)
chats/            design conversation transcript
```

### The Scene gallery — photo swap

The `#scene` gallery (first nav item, full-width band right after the hero) is
a candid photo gallery: a two-image feature row over a CSS multi-column masonry
(`column-count: 3` desktop / `2` mobile, `break-inside: avoid`).

The feature row is meant to hold **family photos**, which aren't in this repo.
Two placeholder images stand in for them — replace these files in place (keep
the names/paths) with the real photos and no markup changes are needed:

- `assets/images/scene-kitchen.jpeg` → mother-in-law + granddaughter in the kitchen
- `assets/images/scene-family.jpeg`  → the full family birthday group photo

The masonry below is populated with the available plated-dish and table-scene
photos; drop additional images into `assets/images/` and add `<img>` tags to
`.scene__grid` to extend it.

## Design notes

- **Palette** — carried over verbatim from the approved design. The accent
  (`#3d689e`) and label (`#5d7186`) blues were darkened during the design
  review so all text passes WCAG AA contrast.
- **Type** — DM Serif Display (display), Karla (body), Caveat (script
  accents), Jost (labels/nav/buttons), loaded from Google Fonts.
- **Responsive** — the 1180px desktop layout collapses to a single column;
  below 720px the nav becomes a hamburger menu, matching the 390px mobile
  comp from the design.
- **Interactivity** — nav links smooth-scroll to sections, the phone number
  is a `tel:` link, and the hamburger toggles the mobile menu. No backend.
