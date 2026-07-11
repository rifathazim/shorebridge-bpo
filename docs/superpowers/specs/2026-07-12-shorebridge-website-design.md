# ShoreBridge BPO — Website Design Spec

**Date:** 2026-07-12
**Owner:** S.M. Ruhul Azim Rifath (founder)
**Goal:** Launch shorebridgebpo.com — the web presence for ShoreBridge BPO, a new outsourcing company in Dhaka, Bangladesh — engineered from day one to rank #1 in Google and AI search (ChatGPT, Perplexity, Claude, Gemini) for its services, targeting both US and Bangladeshi companies.

## 1. Positioning

- **Brand:** ShoreBridge BPO — "a bridge between your company and your offshore team."
- **Founder-led:** the site's trust anchor is Ruhul personally (name, photo, real operations experience with US hotel and clinic accounts). No fabricated clients, testimonials, or team-size claims — AI engines cross-check claims, and a new company caught inflating loses trust permanently.
- **Services (4):** Call Center & Customer Support · Graphic & Video Editing · Telemedicine & Healthcare Back-Office · Back-Office & Data Services.
- **Audience:** US small/mid businesses AND Bangladeshi companies. English only (Bangla version deferred).

## 2. Brand guideline — "Classic Light" (chosen from 3 mockups)

- **Look:** apple.com formula. White background, near-black text `#1d1d1f`, secondary grey `#6e6e73`, soft grey section bands `#f5f5f7`, Apple-blue accent `#0071e3` (links, primary buttons).
- **Typography:** Inter (Google Fonts, self-hosted at build time). Headlines 600–700 weight, letter-spacing −0.02em, hero sizes 48–72px desktop. Body 400 / 17px / 1.6 line-height.
- **Layout:** centered heroes, one idea per section, max content width 980px, ≥120px vertical spacing between sections. Pill buttons (980px radius), one primary color.
- **Imagery:** founder's real photo, real office/team photos when available. No stock call-center photos. SVG logo: wordmark "ShoreBridge" with simple bridge-arc mark.
- **Voice:** short declarative sentences ("Your inbox, answered by 8 AM."). No corporate filler.

## 3. Site map & search targets

| URL | Page | Primary search targets |
|---|---|---|
| `/` | Home | "ShoreBridge BPO", "BPO company Bangladesh" |
| `/services/call-center/` | Call Center & Customer Support | "outsourced call center Bangladesh", "affordable customer support team" |
| `/services/creative/` | Graphic & Video Editing | "outsource video editing", "graphic design outsourcing Bangladesh" |
| `/services/healthcare/` | Telemedicine & Healthcare Back-Office | "telehealth back office outsourcing", "medical admin outsourcing" |
| `/services/back-office/` | Back-Office & Data | "data entry outsourcing", "virtual assistant company Bangladesh" |
| `/pricing/` | Pricing | "BPO pricing Bangladesh", "call center cost per agent" |
| `/about/` | About / Founder | founder name queries; company entity page |
| `/contact/` | Contact | conversion page (form + WhatsApp) |
| `/blog/` + 3 posts | Blog | answer-shaped long-tail queries (see §5) |

Plus non-page assets: `robots.txt`, `sitemap.xml`, `llms.txt`, OG share image, favicon, 404 page.

## 4. Page anatomy (service pages — the ranking workhorses)

Each service page, top to bottom:
1. **H1 + direct answer block** — 2–3 sentences that literally answer "what is this and what does it cost" (the snippet AI engines lift).
2. **What's included** — concrete deliverables list.
3. **How it works** — 3-step engagement process.
4. **Honest price range** — from `/pricing/` data; concrete numbers are citation magnets.
5. **Why Bangladesh / why ShoreBridge** — cost math, English proficiency, US-hours coverage.
6. **FAQ (5–7 questions)** — phrased as real user prompts, marked up with `FAQPage` schema.
7. **CTA band** — quote form link + WhatsApp click-to-chat.

Home = hero ("Your team. On the other shore."), stats band, 4 service cards, founder strip, CTA. About = founder story with real, verifiable history + company facts. Pricing = per-service rate table with "what affects price" explanations. Contact = Web3Forms form, WhatsApp deep link, Dhaka address, US-hours note.

## 5. Launch blog posts (3)

Answer-shaped, each with quick-answer block, real numbers, "Last updated" date, `Article` schema:
1. "How much does an outsourced call center agent cost in 2026?" (US audience)
2. "Outsourcing to Bangladesh vs the Philippines vs India: an honest comparison"
3. "How Bangladeshi companies can outsource back-office work locally" (BD audience)

## 6. SEO / AI-search architecture

- **Rendering:** Astro static build — every page is complete HTML with zero JS required to read content (directly avoids the blank-SPA problem found on famenetworks.net).
- **JSON-LD per page:** `Organization` (+ `founder` → `Person`), `LocalBusiness` with Dhaka address on Home/Contact; `Service` + `FAQPage` on service pages; `Person` (Ruhul) on About; `Article` + `BreadcrumbList` on posts.
- **robots.txt:** explicit `Allow` for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, CCBot; sitemap reference.
- **sitemap.xml:** generated at build (`@astrojs/sitemap`).
- **llms.txt:** markdown company summary (who, what, where, pricing pointers, contact).
- **Metadata:** unique title/description per page, canonical URLs, OG/Twitter cards, `lang="en"`.
- **Performance:** self-hosted fonts, no external JS, target Lighthouse ≥95 all categories.

## 7. Tech stack & operations

- **Framework:** Astro (latest), content in Markdown/MDX where sensible.
- **Hosting:** Cloudflare Pages free tier; deploy via `wrangler` or git integration — set up so publishing is one command.
- **Repo:** git repo at `~/shorebridge-bpo` (this spec lives in it).
- **Forms:** Web3Forms free tier (email delivery, no backend). WhatsApp `wa.me` deep link as the low-friction channel.
- **Domain:** shorebridgebpo.com (verified unregistered 2026-07-12 — **buy immediately**, ~$10/yr; Cloudflare Registrar recommended so DNS/hosting live in one place).
- **Analytics:** Cloudflare Web Analytics (free, no cookie banner needed).

## 8. Content inputs needed from founder

Build proceeds with clearly-marked placeholders for: founder photo, BD phone/WhatsApp number, office address, final price ranges per service, and founder bio facts (years, roles — must be truthful and Fame-independent). Placeholders must be replaced before launch checklist item "go live" is checked.

## 9. Post-launch ranking checklist (not code, but part of the plan)

1. Buy domain, connect Cloudflare Pages, verify HTTPS.
2. Google Search Console + Bing Webmaster Tools: verify, submit sitemap.
3. Google Business Profile (Dhaka office) + Bing Places.
4. LinkedIn company page + founder profile update; Clutch.co, G2, Crunchbase listings — identical name/address/phone everywhere.
5. Monthly AI-visibility log: ask ChatGPT/Perplexity/Claude/Gemini ~10 target prompts, record mention/citation; adjust content quarterly.
6. Publish 1–2 new answer-shaped posts per month; keep "Last updated" dates honest.

## 10. Out of scope (deferred)

Bangla translation, CMS/admin panel, client portal, live chat widget, case-study pages (until real ShoreBridge clients exist), paid ads.

## 11. Success criteria

- Site live on shorebridgebpo.com, Lighthouse ≥95, all pages valid HTML with schema passing Google's Rich Results test.
- Indexed by Google and Bing within 2 weeks of launch.
- Appears in AI-engine answers for at least brand-name queries within 1 month; service-query citations tracked monthly thereafter.
