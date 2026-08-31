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

The email form on the page posts to a Google Apps Script Web App, which appends each submission to the **Tiffin Developments Lead Form** Google Sheet. It logs to the sheet only — it does not send an email notification (that could be added to `Code.gs` with `MailApp.sendEmail` if wanted).

- Sheet: https://docs.google.com/spreadsheets/d/1_HqF14QRrvUSyQDdSr5esuLN6gfL5ZhG87w6XxzrmYI/edit
- Script source: `Code.gs` in this repo (bound to the Sheet above, not the earlier "Website Leads" sheet)
- `index.html`'s `WEBAPP_URL` is already wired to the deployed Web app URL — confirmed working end-to-end (real submission logged Aug 31, 2026).
