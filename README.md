# TIGC Website

Personal advisory website for **Kelly Alexander** / TIGC — strategic advisory at the Africa-Europe interface.

Built with pure HTML5, CSS3, and vanilla JavaScript. No frameworks, no build tools, no dependencies.

**Live site:** https://bliv83.github.io/tigc-website/

---

## Running locally

No build step required. Just open any HTML file in a browser:

```bash
open index.html
```

Or use a simple local server to avoid any path issues:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

---

## Updating content

All content is in the HTML files. Each file corresponds to one page:

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services |
| `publications.html` | Publications |
| `speaking.html` | Speaking |
| `contact.html` | Contact |

Search for `<!-- REPLACE:` comments throughout the HTML — these mark every placeholder that needs real content before launch.

### Key things to update before launch

- **Kelly's email** — search for `kelly@meridian17.org` and confirm it's correct
- **LinkedIn URL** — search for `href="#" aria-label="LinkedIn profile"` and add the real URL
- **Publication platforms** — search for `[Platform TBC]` in `publications.html`
- **Hero image** — replace `picsum.photos` URL in `index.html` with a real photo
- **About portrait** — replace `picsum.photos` URL in `about.html` with Kelly's professional photo
- **Contact form** — connect Formspree (see below)

---

## Swapping placeholder images

Placeholder images use `https://picsum.photos` URLs. To replace:

1. Add your image file to the `images/` folder (JPG recommended, under 300KB)
2. Find the `<img>` tag with the picsum URL (see `images/README.md` for a full list)
3. Replace the `src` with `images/your-filename.jpg`
4. Update the `alt` text to describe the image accurately

---

## Connecting the contact form

The contact form currently uses a `mailto:` fallback. To connect a proper form handler:

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form and copy your endpoint URL (looks like `https://formspree.io/f/abcdefgh`)
3. In `contact.html`, find the `<form>` tag and update:
   - `action="mailto:..."` → `action="https://formspree.io/f/YOUR_ID"`
   - `method="POST"` (already set)
   - Remove `enctype="text/plain"`
4. Remove the `<p class="form-note">` warning paragraph below the submit button

---

## GitHub Pages deployment

The site is deployed automatically from the `main` branch.

**To deploy changes:**

```bash
git add .
git commit -m "your message"
git push
```

GitHub Pages will rebuild within ~60 seconds. Visit https://bliv83.github.io/tigc-website/ to verify.

**To set up GitHub Pages on a new repo:**

1. Go to repository Settings → Pages
2. Source: Deploy from a branch → `main` → `/ (root)`
3. Save — site will be live at `https://[username].github.io/[repo-name]/`

**Custom domain (e.g. tigc.org):**

1. Add a file named `CNAME` to the repo root containing just your domain: `tigc.org`
2. In your DNS provider, add a CNAME record pointing `www` to `bliv83.github.io`
3. For the apex domain, add four A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Back in GitHub Pages settings, enter your custom domain and enable HTTPS

---

## Design system

All colours, fonts, spacing, and component styles are defined as CSS variables in `css/styles.css`. The variable names are self-documenting — edit the `:root` block at the top of that file to make global changes.

Do not override the CSS variables inline — extend the stylesheet instead.
