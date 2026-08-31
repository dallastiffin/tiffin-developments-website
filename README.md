# Tiffin Developments — Landing Page

Single-page marketing site for Tiffin Developments (home service lead generation).

- **Live URL:** https://dallastiffin.github.io/tiffin-developments-website/
- **Custom domain (once DNS is set up):** https://www.tiffindevelopments.com

## Structure

Everything lives in one self-contained file: `index.html` (HTML, CSS, and fonts loaded from Google Fonts — no build step, no dependencies).

## Editing

Edit `index.html` directly, commit, and push to `main` — GitHub Pages redeploys automatically within a minute or two.

## Custom domain

The `CNAME` file points GitHub Pages at `www.tiffindevelopments.com`. To finish connecting it, add a DNS record for that domain in Cloudflare (see the setup notes from the deployment session, or GitHub's [Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

## Lead capture form

The email form on the page posts to a Google Apps Script Web App, which appends each submission to the **Tiffin Developments — Website Leads** Google Sheet.

- Sheet: https://docs.google.com/spreadsheets/d/1iKasqrgDaSatxUfWp-nRysuRJFrCwr3fOrpfH4KEZbc/edit
- Script source: `Code.gs` in this repo
- `index.html` has a `WEBAPP_URL` placeholder near the bottom that needs the deployed Web app URL pasted in (see the setup steps at the top of `Code.gs`) — until then, the form falls back to telling visitors to email directly.
