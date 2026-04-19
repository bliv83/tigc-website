# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this site is

Personal advisory website for **Dr Kelly Alexander / TIGC** — strategic advisory at the Africa-Europe interface. Pure HTML5, CSS3, and vanilla JS. No build tools, no frameworks, no dependencies.

**Live site:** https://www.tigc.nl (GitHub Pages, deployed from `main`)

## Running locally

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

No build step. Changes pushed to `main` go live within ~60 seconds.

## Deploying

```bash
git add <files>
git commit -m "message"
git push
```

## Architecture

Single-stylesheet, single-script site:

- `css/styles.css` — the entire design system. All colours, spacing, typography, and component styles live here as CSS custom properties in `:root`. Never override variables inline — extend the stylesheet.
- `js/main.js` — four concerns: mobile nav toggle, active nav link highlighting, scroll-triggered fade-ins (`[data-animate]`), and the publications filter tabs.
- `commentary/` — full-text article pages for Financieele Dagblad pieces (Dutch original + English translation). These are the only pages hosted on-site; all other op-eds link out to their source outlets.

## Page–file map

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services |
| `publications.html` | Publications |
| `speaking.html` | Speaking |
| `contact.html` | Contact |
| `commentary/fd-*.html` | Hosted FD articles |

## Publications filter

Items in `publications.html` carry a `data-type` attribute (`opinion`, `whitepaper`, `policy-brief`). The filter tabs in `main.js` show/hide items by matching `data-filter` on the button to `data-type` on the item. To add a new filter category, add the attribute to the items and a matching button to the `.filter-bar`.

## Design system conventions

- All design tokens are CSS custom properties in the `:root` block of `styles.css`.
- Spacing uses `--space-*` variables; never use raw `px` values for spacing.
- Headings: Cormorant Garamond (`--font-heading`). Body: Nunito Sans (`--font-body`).
- Accent colour: `--color-accent` (muted sage green). Secondary: `--color-accent-warm` (terracotta).
- Nav background (`--color-nav-bg`) is also used as the dark article header background on `commentary/` pages.
