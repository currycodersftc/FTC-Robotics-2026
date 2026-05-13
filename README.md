# FTC Robotics Team Website

A professional, responsive single-page website template for an FTC robotics team.

## Files
- `index.html` — markup and content
- `styles.css` — all styling (dark theme, FTC orange accent)
- `script.js` — sticky nav + mobile menu + footer year

## How to preview
Just double-click `index.html` or open it in any browser. No build step.

For local dev with auto-reload, run any static server in this folder:
```
npx serve .
```

## What to customize

### 1. Team identity (`index.html`)
- Replace every `#XXXX` with your team number once FIRST assigns one. It appears in: meta description, `<title>`, hero subtext, and footer copyright. (Note: the brand label in the nav and footer was switched from `Team #XXXX` to the team name itself — update those if you want the number back in the brand.)
- The team name lives in: `<title>`, meta description, hero subtext, brand (nav + footer), and footer copyright.
- Update the season text in the hero eyebrow at the start of each FTC season.

### 2. Team members (8 cards in the `#team` section)
For each `<article class="member">`:
- Replace `data-initials="M1"` with the member's initials (shown until you add a photo).
- Replace `Member One` with the member's name.
- Replace `Team Captain · Drive Coach` with their role.
- Replace the bio text.
- To add a real photo, replace the `<div class="member-photo" data-initials="..."></div>`
  with `<img class="member-photo" src="images/yourname.jpg" alt="Name">`.

### 3. Build progress (`#robot`)
- Update each `.phase` block to reflect where you are in the season.
- Change a phase's CSS class to update its status:
  - `class="phase done"` — finished (blue badge)
  - `class="phase active"` — currently working on it (orange pulse)
  - `class="phase"` (no modifier) — upcoming (muted badge)
- When you have a robot, you can either keep this section as a progress log or
  swap it back to a photo + specs layout — let me know and I'll add it back.

### 4. Season Goals (`#goals`)
- Add/remove `.t-item` blocks for each goal or milestone.
- When the team has real awards/event history, this section can be relabeled back to "Achievements" (just update the section eyebrow/title, the comment banner, and the nav + footer link text/href).

### 5. Sponsors (`#sponsors`)
- Replace `Sponsor 1` text with sponsor logos (`<img>` tags inside each `.sponsor-card`).

### 6. Contact
- Update email, social handles, and location.
- The form is currently a placeholder — wire it to Formspree, Netlify Forms,
  or your own backend.

### 7. Colors (`styles.css`)
The accent color is FTC orange (`--accent: #ff6b1a`). Change the `:root` variables
at the top of `styles.css` to retheme the whole site.

## Deployment
Free options:
- **GitHub Pages**: push to a repo, enable Pages.
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the folder.
