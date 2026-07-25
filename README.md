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
index.html        markup (nav, hero, scene, menu, story/visit, share, footer)
styles.css        design tokens + responsive layout
script.js         mobile nav toggle
assets/images/    dish + scene photos
project/          original Claude Design handoff bundle (source of truth)
chats/            design conversation transcript
```

### The Scene gallery

The `#scene` gallery (first nav item, full-width band right after the hero) is
a candid photo gallery — the heart of the site: a two-image feature row over a
CSS multi-column masonry (`column-count: 3` desktop / `2` mobile,
`break-inside: avoid`). Family gathering shots are intermixed with plated-dish
photos for rhythm.

- Feature row — `scene-kitchen.jpeg` (grandmother + granddaughter cooking) and
  the larger, right-anchored `scene-family.jpeg` (the family birthday group).
- Masonry — the family shots (`scene-dinner`, `scene-gingerbread`,
  `scene-generations`) woven through the dish photos; the landscape gingerbread
  shot is placed to break up the portrait columns.

To extend the gallery, drop images into `assets/images/` and add `<img>` tags
(with `width`/`height`) to `.scene__grid`. On mobile the feature row collapses
to a single full-width `scene-family.jpeg` banner above a two-column grid.

### The memory ask

The point of the page is to collect memories of Doreen's cooking, so the ask
appears twice. The hero CTA (`Tell us your Doreen story`) and the `#share`
section both link out to a Google Form in a new tab; the nav's "Share a Memory"
item anchors to `#share` in-page rather than jumping straight to the form, so
visitors meet the explainer copy first.

`#share` sits deliberately right after `#story` — the story ends on "this is us
carrying it forward," which is the page's highest-intent moment, and the section
picks that line up. Its three prompts (a dish, a saying, something you still
cook) exist to defeat blank-page paralysis; they matter more to submissions than
the button wording does. Keep them concrete if you revise the copy.

## Design notes

- **Palette** — carried over verbatim from the approved design. The accent
  (`#3d689e`) and label (`#5d7186`) blues were darkened during the design
  review so all text passes WCAG AA contrast.
- **Type** — DM Serif Display (display), Karla (body), Caveat (script
  accents), Jost (labels/nav/buttons), loaded from Google Fonts.
- **Responsive** — the 1180px desktop layout collapses to a single column;
  below 720px the nav becomes a hamburger menu, matching the 390px mobile
  comp from the design.
- **Interactivity** — nav links smooth-scroll to sections and the hamburger
  toggles the mobile menu. No backend.
- **Link previews** — Open Graph + Twitter Card tags in the head, pointing at
  `https://www.motherinlawsbistro.com/`. The page is shared person to person far
  more than it's found by search, so the card matters. `og-share.jpeg` is a
  1200×630 crop of `scene-family.jpeg` taken at the same 42% vertical bias the
  CSS uses, so every platform shows identical framing rather than cropping the
  4:3 original its own way. Absolute URLs are required — scrapers don't reliably
  resolve relative ones — so these need updating if the domain ever changes.
- **Analytics** — Vercel Web Analytics via the plain-HTML script tag
  (`/_vercel/insights/script.js`), not the `@vercel/analytics` package, which
  would need a build step this site doesn't have. Page views only. The endpoint
  is served by Vercel once Analytics is enabled for the project and the site is
  redeployed; anywhere else (including a local `http.server`) it 404s and the
  page is unaffected. Custom events would additionally need the `window.va`
  shim from Vercel's snippet, deliberately omitted while nothing fires events.
