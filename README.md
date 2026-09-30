# Tiffin Developments — tiffindevelopments.com

Static site: home page plus six service pages. No build step needed to deploy —
push to `main` and GitHub Pages publishes to https://www.tiffindevelopments.com
within a minute or two.

## Pages
- `index.html` — home
- `services/<slug>/index.html` — AI phone receptionist, instant lead follow-up,
  back-office workflow automation, AI chatbots, review automation, lead generation funnels
- `ai-automation/…` — redirect stubs so the older URLs still work
- `assets/site.css`, `assets/site.js` — shared styles and the lead form

## Leads
The "Book my free call" form (name, business, phone, email, city, service, message)
posts to the portfolio **Lead Router** Apps Script with site key `tiffin-developments`.
Each lead is added to the **Tiffin Developments - Website Leads** Google Sheet
(in tiffindevelopments@gmail.com's Drive) and emailed to tiffindevelopments@gmail.com.
Change the alert address in the Lead Router's Config tab — no code change needed.

The `Register lead sheet` workflow (Actions tab) creates/links that sheet; it is safe to re-run.

`Code.gs` is the retired email-only script from the old landing page. Its sheet,
"Tiffin Developments Lead Form", keeps the older submissions.
