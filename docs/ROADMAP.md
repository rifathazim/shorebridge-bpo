# ShoreBridge BPO — Master Roadmap & Decisions

*Last updated: 2026-07-12. This is the single source of truth for what was decided, what's done, and what's next.*

## The goal

S. M. Ruhul Azim Rifath is launching **ShoreBridge BPO** (Dhaka) — his own company, fully independent of Fame IT Networks. Services: call center/customer support, graphic & video editing, telemedicine back-office, back-office/data & VAs. Clients: **US and Bangladeshi companies**. Objective: **rank #1 in Google and AI search** (ChatGPT, Perplexity, Claude, Gemini) for these services.

## Decisions made (2026-07-12)

| Decision | Choice |
|---|---|
| Brand name | **ShoreBridge BPO** — domain **shorebridgebpo.com** (verified unregistered 2026-07-12 — BUY ASAP) |
| Design | "Classic Light" — apple.com style: white, #1d1d1f text, #0071e3 accent, Inter font |
| Tech | Astro 5 static site (100% pre-rendered HTML — AI crawlers read everything) |
| Hosting | Cloudflare Pages, free tier ($0) |
| Language | English only (Bangla later) |
| Git identity | Personal only: GitHub **rifathazim** — never the company account |
| Honesty rule | No fake clients/testimonials; founder's real experience is the trust anchor |

## What's DONE ✅

- Website built: 13 pages (home, 4 service pages, pricing, about, contact, blog ×3, 404)
- Full SEO/AI machinery: JSON-LD schema on every page (Organization, Person, Service, FAQPage, LocalBusiness, Article), robots.txt AI-crawler allowlist, llms.txt, sitemap, canonical URLs, OG image
- QA passed: one h1 + canonical per page, zero broken links
- Pushed to **https://github.com/rifathazim/shorebridge-bpo**
- Design spec: `docs/superpowers/specs/2026-07-12-shorebridge-website-design.md`
- Implementation plan: `docs/superpowers/plans/2026-07-12-shorebridge-website.md`

## What's NEXT (in order)

1. **Buy shorebridgebpo.com** — Cloudflare Registrar, ~$10/yr. First-come-first-served; do this first.
2. **Deploy**: dash.cloudflare.com → Workers & Pages → Create → Pages → connect GitHub repo → preset Astro, build `npm run build`, output `dist`, env `NODE_VERSION=20` → add custom domain.
3. **Set up email** (see recommendation below) + SPF/DKIM/DMARC DNS records.
4. **Replace the 15 [PLACEHOLDER] items** — checklist in `README.md` (phone/WhatsApp, address, founder photo+bio, Web3Forms key, confirm all rates/terms/HIPAA posture/BDT billing).
5. **Register with search engines**: Google Search Console + Bing Webmaster Tools (Bing feeds ChatGPT search), submit sitemap.
6. **Entity building**: Google Business Profile (Dhaka) + Bing Places; LinkedIn company page + founder profile; Clutch.co, G2, Crunchbase — identical name/address/phone everywhere.
7. **Content cadence**: 1–2 answer-shaped blog posts/month with real numbers and honest "Last updated" dates.
8. **Measure monthly**: ask ChatGPT/Perplexity/Claude/Gemini ~10 target prompts ("outsourced call center Bangladesh", "BPO pricing Bangladesh"...), log mentions/citations.

## Hosting recommendation (multi-site, cheapest)

- **Default: Cloudflare Pages free tier** — unlimited static sites, unlimited bandwidth. Any future marketing site built with Astro = $0 hosting forever.
- **Only if a site needs WordPress/PHP**: one Hetzner VPS (~$4–6/mo) running CloudPanel or Coolify hosts 10+ sites; also a potential "we host your site" revenue line for BPO clients. Shared hosting (Hostinger ~$3/mo) if zero maintenance is preferred. Oracle Cloud free ARM tier is $0 but signup from BD can be finicky.
- **First-year total for ShoreBridge: domain $10 + hosting $0 + email ~$12–24 = under $40.**

## Email recommendation

- **NEVER self-host a mail server** — deliverability to Gmail/Outlook will fail (blacklisted VPS IPs, reputation), and sales email landing in spam kills the business. Not worth the $1 saved.
- **Recommended: Zoho Mail** (~$1/user/mo Mail Lite; Forever-Free tier: 5 users, web/mobile only) for hello@shorebridgebpo.com.
- $0 stopgap: Cloudflare Email Routing (forward to Gmail). Upgrade path: Google Workspace ($6+/user) once revenue starts.
- Always set **SPF + DKIM + DMARC** DNS records — deliverability AND an AI-search legitimacy signal.

## AI Search (GEO) playbook — the strategy behind everything

1. **Machine-readable site** (done): pre-rendered HTML, schema, robots.txt allowing GPTBot/ClaudeBot/PerplexityBot/etc., llms.txt.
2. **Entity trust**: consistent business listings (step 6 above); AI engines cross-reference Clutch/GBP/LinkedIn before recommending a company.
3. **Citation-worthy content**: pages that directly answer real questions, with concrete numbers (pricing transparency is the moat — competitors hide rates), statistics, and fresh update dates.
4. **Measure and iterate**: the monthly prompt log (step 8) is the scoreboard.

## Where everything lives

- **This roadmap**: `~/shorebridge-bpo/docs/ROADMAP.md` (and on GitHub)
- **Placeholder checklist + deploy commands**: `~/shorebridge-bpo/README.md`
- **Site content to edit**: `src/data/services.ts` (services/rates/FAQs), `src/data/site.ts` (contact info), `src/content/blog/` (posts)
- **Design spec & build plan**: `~/shorebridge-bpo/docs/superpowers/`
