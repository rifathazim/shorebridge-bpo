# ShoreBridge BPO — shorebridgebpo.com

Static marketing site for ShoreBridge BPO (Dhaka, Bangladesh). Built with Astro; every page ships as pre-rendered HTML with schema.org JSON-LD so search engines **and AI search crawlers** (GPTBot, ClaudeBot, PerplexityBot, etc.) can read everything.

## Develop

Requires Node ≥ 20 (installed via nvm on this machine):

```bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Regenerate the social share image after editing `scripts/make_og.py`:

```bash
python3 scripts/make_og.py
```

## Structure

- `src/data/site.ts` — company constants (name, contact, address)
- `src/data/services.ts` — all four services' copy, prices, FAQs (edit content here)
- `src/layouts/Base.astro` — head/meta/JSON-LD + header/footer
- `src/content/blog/*.md` — blog posts (add new posts here)
- `public/robots.txt` — AI crawler allowlist · `public/llms.txt` — AI summary file

## Before launch — replace every placeholder

Search the repo for `PLACEHOLDER` (`grep -rn PLACEHOLDER src public`). Current list:

- [ ] Web3Forms access key (create free account at web3forms.com) — `src/pages/contact.astro`
- [ ] BD phone number + WhatsApp wa.me link — `src/data/site.ts`
- [ ] Office street address — `src/data/site.ts`
- [ ] Confirm mailbox hello@shorebridgebpo.com exists — `src/data/site.ts`
- [ ] Founder photo + confirmed bio facts (years, roles, credentials) — `src/pages/about.astro`, home page
- [ ] LinkedIn URL — `src/pages/about.astro`
- [ ] Confirm all hourly rates — `src/data/services.ts`, blog posts
- [ ] Confirm terms (no setup fees / no lock-in) — pricing page, blog
- [ ] HIPAA compliance posture (BAA capability) — healthcare service FAQ
- [ ] BDT billing + local rate table — back-office FAQ, BD blog post

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub (`rifathazim/shorebridge-bpo`).
2. dash.cloudflare.com → Workers & Pages → Create → Pages → connect the GitHub repo.
3. Framework preset **Astro**; build command `npm run build`; output dir `dist`; env var `NODE_VERSION=20`.
4. Buy `shorebridgebpo.com` (Cloudflare Registrar keeps DNS+hosting in one place) → add as custom domain.
5. Every push to the default branch auto-deploys.

## Post-launch ranking checklist

1. Google Search Console + Bing Webmaster Tools: verify domain, submit `sitemap-index.xml` (Bing matters — ChatGPT search runs on it).
2. Google Business Profile (Dhaka office) + Bing Places.
3. LinkedIn company page + founder profile; Clutch.co, G2, Crunchbase listings — identical name/address/phone everywhere.
4. Monthly AI-visibility log: ask ChatGPT/Perplexity/Claude/Gemini ~10 target prompts ("outsourced call center Bangladesh", "BPO pricing Bangladesh"…), record whether ShoreBridge is mentioned/cited.
5. Publish 1–2 answer-shaped blog posts per month; update `updatedDate` honestly when refreshing.
