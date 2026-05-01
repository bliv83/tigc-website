# Project Log

A running record of meaningful changes to the TIGC website. Entries are grouped by date and theme — finer-grained commit-by-commit history lives in `git log`.

## 2026-05-01 — Services restructure

- **New service: Project Advisory.** Added as `01` on the services page, ahead of Retainer (now `02`), Workshops (`03`), Research (`04`), and Immersions (`05`). New anchor `#project-advisory`.
- **Homepage teaser consolidated.** Project + Retainer collapsed into a single "Advisory" card on the homepage, now displayed first. Homepage continues to show four cards (Advisory, Workshops, Research, Immersions); the full five offerings live on `services.html`.
- Meta descriptions and `og:description` updated on both pages.

## 2026-04-19 — Favicon and link previews

- **Favicon set.** Shipped `favicon.svg` (rounded sage-green tile with TIGC mark) plus `favicon.ico` (16+32 multi-size), `favicon-32.png`, `favicon-192.png`, and `apple-touch-icon.png` (180×180). All nine HTML pages reference the full set so modern browsers, legacy clients, search indexers, and link-preview crawlers each find a usable format.
- **Open Graph link previews.** Added `og:image`, `og:url`, `og:type`, `og:image:alt`, and `twitter:card` meta tags to every page, pointing at the current portrait. Signal, WhatsApp, iMessage, LinkedIn, etc. now render preview cards.
- Contact page: matched Email and LinkedIn button dimensions by switching the Email control from `<button>` to `<a href="mailto:…">`.

## 2026-04 — Copy rewrite across the site

- **Service cards rewritten.** All four (now five) cards on `services.html` and the homepage teaser stripped of "X, not Y" juxtaposition patterns and emdashes. Short sentences, more natural prose.
- **About page rewrite.** Bio updated with "Joburg girl" reference and dual nationality framing. PhD now correctly described as "management and organisation studies". Meridian17 paragraph reframed around the founding conviction (think tank cofounded because policy dialogues need stronger focus on business reality). Past-clients line removed; closing line trimmed to "She lives between Johannesburg and the Netherlands."
- **Values section reworked.** "How I work" replaced earlier framing with three less-arrogant value items: *Clearer, not simpler* · *Connected on both sides* · *Synthesis and judgement*.
- **Portrait swap.** About-page hero photo updated to the newer professional portrait (`Kelly Alexander 15.04.2024-10PP.jpg`).

## 2026-04 — Speaking and Publications pages

- **Speaking signature talk.** Title changed to *"I speak from a deep conviction that Africa and Europe are much stronger together"*. Green accent line removed; padding tightened.
- **Topics redesigned.** Six topic cards converted to a clickable menu of titles. Selecting a title expands a single card to the right; selections are mutually exclusive.
- **Publications.** Whitepapers section removed entirely. Filter now shows only `Opinion` and `Policy Briefs`. Spacing equalised between the section title, filter tabs, and the article list.

## 2026-04 — Homepage refinements

- **Hero subheadline** updated to mention immersions explicitly.
- **Intro strip** reworked; first item rewritten to a simple sentence about academic rigour as foundation.
- **Services teaser** expanded from three cards to four (immersions added), buttons aligned across cards via flex-grow on the body and a consistent top margin on the CTA.
- **Featured publication** swapped to the most recent Business Day op-ed.

## 2026-04 — Housekeeping

- Copyright year updated to 2026 across all footers.
- UK English conventions enforced (programme, organise, etc.).

---

## How to use this file

When a meaningful change ships, add a dated entry under a new heading. Keep it user-facing — describe *what changed on the site*, not the implementation. Detailed history is always available via `git log`.
