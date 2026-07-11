# ShoreBridge BPO Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and ship shorebridgebpo.com — a fully static, Apple-styled ("Classic Light"), SEO/AI-search-optimized site for ShoreBridge BPO — pushed to github.com/rifathazim and deployable on Cloudflare Pages.

**Architecture:** Astro static site at repo root (`~/shorebridge-bpo`). All content pre-rendered HTML, zero client JS. Shared `Base.astro` layout injects meta + Organization JSON-LD; service pages are data-driven from `src/data/services.ts`; blog is an Astro content collection. Verification = `npm run build` + grep assertions against `dist/` output (no unit-test framework — the deliverable is HTML).

**Tech Stack:** Node 20 (via nvm), Astro 4.x, @astrojs/sitemap, plain CSS (no framework), Web3Forms (contact), Python3+PIL (OG image generation).

## Global Constraints

- Git identity: local config already set — `S. M. Ruhul Azim Rifath <29223028+rifathazim@users.noreply.github.com>`. NEVER push via the company `gh` login (`aifamecomputers-dev`); pushing requires user to auth as `rifathazim` first.
- Design "Classic Light": bg `#ffffff`, text `#1d1d1f`, secondary `#6e6e73`, section bands `#f5f5f7`, accent `#0071e3`, font Inter, pill buttons (radius `980px`), max content width `980px`, section vertical padding ≥ `120px` desktop.
- Voice: short declarative sentences; no corporate filler.
- Honesty rule: no invented clients/testimonials/team sizes. Founder facts only. Unconfirmed values carry visible token `[PLACEHOLDER: …]` and must be greppable.
- Every page: unique `<title>` (≤60 chars) + meta description (≤155 chars), canonical URL, OG tags, exactly one `<h1>`.
- Site URL constant: `https://shorebridgebpo.com`.
- Every task ends: `npm run build` passes + grep checks pass + git commit (author must be Rifath, per local config).
- Node via nvm: every shell that runs npm must first `export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"`.

---

### Task 0: Node 20 toolchain

**Files:** none (environment only)

**Interfaces:** Produces: working `node` ≥ 20 + `npm` for all later tasks.

- [ ] **Step 1: Install nvm + Node 20**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
nvm install 20
```

- [ ] **Step 2: Verify**

Run: `node --version` → Expected: `v20.x.x`

### Task 1: Astro scaffold + design system + Base layout

**Files:**
- Create: `package.json`, `astro.config.mjs` (via `npm create astro@latest . -- --template minimal --no-install --no-git` then `npm install`; add `@astrojs/sitemap`)
- Create: `src/styles/global.css` — Classic Light tokens: CSS vars for the palette above; `body{font-family:'Inter',-apple-system,sans-serif;color:#1d1d1f;font-size:17px;line-height:1.6}`; `.container{max-width:980px;margin:0 auto;padding:0 22px}`; `.section{padding:120px 0}` (60px mobile); `.band{background:#f5f5f7}`; `.btn{background:#0071e3;color:#fff;border-radius:980px;padding:12px 24px;font-weight:500}`; `.btn-link{color:#0071e3}`; h1 `clamp(40px,6vw,72px)`, h2 `clamp(28px,4vw,48px)`, both `font-weight:700;letter-spacing:-.02em;line-height:1.1`. Inter self-hosted: download woff2 (400,500,600,700) to `public/fonts/` + `@font-face` rules.
- Create: `src/data/site.ts`:

```ts
export const SITE = {
  name: "ShoreBridge BPO",
  url: "https://shorebridgebpo.com",
  tagline: "Your team. On the other shore.",
  email: "hello@shorebridgebpo.com", // [PLACEHOLDER: confirm mailbox]
  phone: "[PLACEHOLDER: BD phone]",
  whatsapp: "[PLACEHOLDER: wa.me link]",
  address: { street: "[PLACEHOLDER: street]", city: "Dhaka", country: "BD" },
  founder: "S. M. Ruhul Azim Rifath",
  githubOwner: "rifathazim",
};
```

- Create: `src/layouts/Base.astro` — props `{title, description, path, schema?: object[]}`. Head: charset, viewport, title, description, `<link rel="canonical" href={SITE.url + path}>`, OG/Twitter tags (og:image `${SITE.url}/og.png`), font preloads, global.css. Body: sticky header (blurred `rgba(251,251,253,.8)`, wordmark "ShoreBridge" linking `/`, nav: Services dropdown-less inline links / Pricing / About / Blog / Contact), `<slot/>`, footer (nav links, © year ShoreBridge BPO, Dhaka Bangladesh, founder name). Always injects Organization JSON-LD:

```ts
const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  name: "ShoreBridge BPO", url: SITE.url, email: SITE.email,
  founder: { "@type": "Person", name: SITE.founder, url: SITE.url + "/about/" },
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  description: "Outsourced call center, creative, healthcare back-office and data teams in Dhaka, Bangladesh for US and Bangladeshi companies."
};
```
plus any page `schema` array items, each in `<script type="application/ld+json" set:html={JSON.stringify(s)}>`.
- Create: `src/pages/index.astro` — stub: `<Base title="ShoreBridge BPO — Outsourced Teams in Bangladesh" ...><h1>ShoreBridge</h1></Base>` (real copy in Task 3).
- Modify: `astro.config.mjs` — `site: 'https://shorebridgebpo.com'`, `integrations: [sitemap()]`, `trailingSlash: 'always'`.

**Interfaces:** Produces: `Base.astro` (props above), `SITE` constant, CSS classes `.container .section .band .btn .btn-link .subtitle`.

- [ ] **Step 1: Scaffold + install** (commands above; `npm install @astrojs/sitemap`)
- [ ] **Step 2: Write the files** (contents above)
- [ ] **Step 3: Verify** — `npm run build` passes; `grep -l 'application/ld+json' dist/index.html`; `grep -c 'sitemap' dist/` contains `sitemap-index.xml` file.
- [ ] **Step 4: Commit** — `git add -A && git commit -m "feat: Astro scaffold, Classic Light design system, Base layout with Organization schema"`

### Task 2: Shared components

**Files:**
- Create: `src/components/Hero.astro` — props `{title, sub, ctaText?="Get a quote", ctaHref?="/contact/"}`: centered `.section`, h1, `.subtitle` (21px `#6e6e73`), `.btn` + "Learn more ›" `.btn-link`.
- Create: `src/components/Stats.astro` — props `{items: {big, small}[]}`: `.band` flex row, big number 32px/700, small label 14px `#6e6e73`.
- Create: `src/components/FAQ.astro` — props `{items: {q, a}[]}`: renders `<section>` of `<details><summary>{q}</summary><p>{a}</p></details>` AND emits FAQPage JSON-LD built from items (`mainEntity` → `Question`/`acceptedAnswer`).
- Create: `src/components/CTABand.astro` — `.band .section` centered: h2 "Let's build your team.", buttons: quote (btn) + "WhatsApp us" (btn-link, href `SITE.whatsapp`).

**Interfaces:** Produces the four components with exact prop shapes above; consumed by Tasks 3–7.

- [ ] **Step 1: Write components**
- [ ] **Step 2: Verify** — temporarily use all four on index stub, `npm run build`, `grep 'FAQPage' dist/index.html` after adding one dummy FAQ… then remove dummy (final index in Task 3 keeps Hero/Stats/CTABand).
- [ ] **Step 3: Commit** — `git commit -m "feat: Hero, Stats, FAQ (FAQPage schema), CTABand components"`

### Task 3: Home page (real copy)

**Files:** Modify: `src/pages/index.astro`

Content, in order:
1. Hero: title `Your team. On the other shore.` sub `US-quality call center, creative, and back-office teams in Dhaka — at up to 60% less than US cost.`
2. Stats: `24/7 US-hours coverage` · `60% typical cost savings` · `4 service lines`.
3. Direct-answer block (p, 21px, centered, max 640px): `ShoreBridge BPO is an outsourcing company in Dhaka, Bangladesh. We build dedicated call center, design and video editing, healthcare back-office, and data teams for companies in the United States and Bangladesh.`
4. Four service cards (grid 2×2, each links to its page): name + one-line pitch + "from $X/hr" (values from Task 5 table).
5. Founder strip (`.band`): `[PLACEHOLDER: founder photo]` + `Founded by S. M. Ruhul Azim Rifath, who has managed offshore call-center and back-office operations serving US hotels and clinics. [PLACEHOLDER: confirm founder bio facts]` + link `/about/`.
6. CTABand.

Title: `ShoreBridge BPO — Outsourced Teams in Dhaka, Bangladesh`. Description: `Dedicated call center, creative, healthcare back-office and data teams in Bangladesh for US and BD companies. US-hours coverage at up to 60% savings.`

- [ ] **Step 1: Write page** · **Step 2: Verify** — build; `grep 'other shore' dist/index.html`; `grep -c '<h1' dist/index.html` = 1 · **Step 3: Commit** `feat: home page`

### Task 4: Service pages (data-driven)

**Files:**
- Create: `src/layouts/ServicePage.astro` — props `{svc}` (shape below). Renders: Hero(title=svc.h1, sub=svc.answer) → "What's included" ul → "How it works" 3 steps (Discovery call → We recruit & train your team → You go live with US-hours coverage) → price line (`Typical range: {svc.price}. See pricing ›`) → "Why Bangladesh" para (shared: English-proficient workforce, ~60% below US labor cost, timezone allows overnight turnaround and US-hours shifts) → `<FAQ items={svc.faq}/>` → CTABand. Emits `Service` JSON-LD (`serviceType: svc.name, provider: Organization ref, areaServed: ["US","BD"]`) — FAQ component emits its own FAQPage schema.
- Create: `src/data/services.ts` exporting `SERVICES: Svc[]`:

```ts
export interface Svc { slug: string; name: string; h1: string; title: string; desc: string;
  answer: string; included: string[]; price: string; faq: {q: string; a: string}[]; }
```

Four entries (full copy — abbreviated answers shown here must be written out in the file exactly as given):

1. `call-center` — h1 `Outsourced Call Center & Customer Support`; answer: `ShoreBridge builds dedicated customer support teams in Dhaka that answer your calls, chats, and emails during US business hours. A trained agent typically costs $6–9/hour — about 60% less than a US hire. [PLACEHOLDER: confirm rates]`; included: inbound/outbound voice, live chat & email, help-desk ticketing, quality monitoring & call recording, dedicated team lead; faq (5): cost per agent / how fast can a team launch (2–4 weeks) / do agents speak fluent English / can they work US time zones (yes, night shifts in Dhaka = US day) / minimum team size (1 agent to start).
2. `creative` — h1 `Graphic Design & Video Editing Outsourcing`; answer: `ShoreBridge provides dedicated graphic designers and video editors in Bangladesh from $8–15/hour. Send briefs at the end of your day — because of the time difference, finished work is usually waiting the next morning. [PLACEHOLDER: confirm rates]`; included: social/brand design, video post-production, thumbnails & shorts, motion graphics, unlimited-revision retainer options; faq (5): tools used (Adobe CC, Premiere, After Effects, Figma) / turnaround / per-project vs dedicated / how revisions work / file handoff.
3. `healthcare` — h1 `Telemedicine & Healthcare Back-Office Support`; answer: `ShoreBridge staffs remote medical admin teams — appointment scheduling, insurance verification, patient intake, and telehealth coordination — for US clinics from $7–10/hour. [PLACEHOLDER: confirm rates]`; included: scheduling & reminders, insurance eligibility checks, intake & records upkeep, telehealth session coordination, billing support; faq (5): HIPAA (we sign BAAs and train agents on HIPAA-compliant handling `[PLACEHOLDER: confirm compliance posture]`) / EHR systems / after-hours coverage / clinic size fit / start timeline.
4. `back-office` — h1 `Back-Office, Data & Virtual Assistant Services`; answer: `ShoreBridge provides dedicated back-office staff in Dhaka — data entry, bookkeeping support, research, and virtual assistants — from $4–7/hour for both US and Bangladeshi companies. [PLACEHOLDER: confirm rates]`; included: data entry & cleanup, CRM upkeep, bookkeeping support, research & lead lists, executive VA; faq (5): accuracy/QA process / data security & NDAs / BD companies outsourcing locally (yes — same teams, BDT billing available `[PLACEHOLDER: confirm BDT billing]`) / part-time options / management & reporting cadence.

- Create: `src/pages/services/[slug].astro` — `getStaticPaths` from SERVICES; renders `<Base title={svc.title} description={svc.desc} path={'/services/'+svc.slug+'/'} schema=[serviceSchema]><ServicePage svc={svc}/></Base>`.

**Interfaces:** Consumes FAQ/CTABand/Hero (Task 2 props). Produces `SERVICES` (shape above) — consumed by Home cards (Task 3 may import), Pricing (Task 5), llms.txt (Task 7).

- [ ] **Step 1: Write data + layout + route** · **Step 2: Verify** — build; for each of the 4 slugs: `grep -l 'FAQPage' dist/services/<slug>/index.html` and `grep -l '"@type":"Service"' …` · **Step 3: Commit** `feat: four service pages with Service + FAQPage schema`

### Task 5: Pricing page

**Files:** Create: `src/pages/pricing.astro`

H1 `Honest BPO pricing.` + answer block: `Most BPO companies hide their rates. Here is what ShoreBridge teams actually cost per hour, per dedicated agent, billed monthly. [PLACEHOLDER: confirm all rates]`. Table (from SERVICES data): Call center $6–9 · Creative $8–15 · Healthcare back-office $7–10 · Back-office/data $4–7, each row: what drives the range (experience level, shift, team size). Below: "What affects your price" 4 short paras + note `No setup fees. No long-term lock-in. [PLACEHOLDER: confirm terms]` + CTABand. Title `BPO Pricing in Bangladesh — Real Hourly Rates | ShoreBridge`.

- [ ] Write · Verify (build; `grep 'Honest BPO pricing' dist/pricing/index.html`) · Commit `feat: pricing page`

### Task 6: About + Contact + 404

**Files:**
- Create: `src/pages/about.astro` — H1 `The person behind ShoreBridge.`; founder story (photo `[PLACEHOLDER: founder photo]`; truthful bio: years managing US-facing call-center/back-office operations for hotels and clinics, CCNA-track network background, why ShoreBridge — every specific claim marked `[PLACEHOLDER: confirm]` until user supplies facts); company facts block (founded 2026, Dhaka, services list). `Person` JSON-LD: `{name: SITE.founder, jobTitle: "Founder & CEO", worksFor: Organization ref, url: SITE.url+"/about/", sameAs: ["https://github.com/rifathazim", "[PLACEHOLDER: LinkedIn URL]"]}`.
- Create: `src/pages/contact.astro` — H1 `Let's talk.`; Web3Forms POST form (`action="https://api.web3forms.com/submit"`, hidden `access_key` = `[PLACEHOLDER: web3forms key]`, name/email/company/message, `.btn` submit); WhatsApp button (SITE.whatsapp); email + phone + Dhaka address; line `We work US hours — evening in Dhaka is morning in Dallas.` `LocalBusiness` JSON-LD with address/phone/email/openingHours.
- Create: `src/pages/404.astro` — h1 `Lost at sea.` + link home.

- [ ] Write · Verify (build; `grep '"@type":"Person"' dist/about/index.html`; `grep 'web3forms' dist/contact/index.html`) · Commit `feat: about, contact, 404`

### Task 7: Blog (content collection) + 3 launch posts

**Files:**
- Create: `src/content.config.ts` — collection `blog`: `{title, description, pubDate: date, updatedDate: date}` (zod).
- Create: `src/content/blog/outsourced-call-center-cost-2026.md` — quick-answer first para (`A dedicated outsourced call center agent costs $6–9/hour in Bangladesh, $8–12 in the Philippines, and $25–35 for a US in-house hire, fully loaded. [PLACEHOLDER: verify figures before launch]`), cost tables, what's included, hidden costs section.
- Create: `src/content/blog/bangladesh-vs-philippines-vs-india.md` — honest comparison: rates, English accent trade-offs, attrition, time zones; verdict framed by use-case (voice→PH edge, cost+design+data→BD, engineering-heavy→IN).
- Create: `src/content/blog/bd-companies-outsourcing-guide.md` — for Bangladeshi companies outsourcing back-office locally: why, costs in BDT `[PLACEHOLDER: BDT rates]`, how to start.
- Create: `src/pages/blog/index.astro` — list, dates, descriptions.
- Create: `src/pages/blog/[slug].astro` — renders post via `render()`; `Article` + `BreadcrumbList` JSON-LD (headline, datePublished, dateModified, author=Person Rifath, publisher=Organization); visible `Last updated: {updatedDate}` line.

- [ ] Write · Verify (build; 3 posts in `dist/blog/*/index.html` each `grep -l '"@type":"Article"'`) · Commit `feat: blog with 3 answer-shaped launch posts`

### Task 8: SEO plumbing — robots, llms.txt, OG image, favicon

**Files:**
- Create: `public/robots.txt`:

```
User-agent: *
Allow: /
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: CCBot
Allow: /
Sitemap: https://shorebridgebpo.com/sitemap-index.xml
```

- Create: `public/llms.txt` — markdown: what ShoreBridge is (2 sentences), the 4 services w/ one-liners + rate ranges + page URLs, founder line, contact, pricing-page pointer.
- Create: `public/favicon.svg` — rounded square `#0071e3`, white bridge-arc + "S" wordmark path (simple hand-written SVG).
- Create: `scripts/make_og.py` — PIL: 1200×630 white, "ShoreBridge" wordmark `#1d1d1f` + tagline + blue arc → `public/og.png`. Run once.
- Modify: `src/layouts/Base.astro` — confirm favicon link + og:image already reference these paths.

- [ ] Write + run og script · Verify — build; `test -f dist/robots.txt && test -f dist/llms.txt && test -f dist/og.png && test -f dist/sitemap-index.xml` · Commit `feat: robots.txt, llms.txt, favicon, OG image`

### Task 9: Final QA + README

**Files:** Create: `README.md` — what the site is, dev commands (with nvm preamble), deploy steps (below), placeholder checklist, post-launch ranking checklist copied from spec §9.

- [ ] **Step 1: Full audit** — `npm run build`; assert: every `dist/**/index.html` has exactly one `<h1` and one `rel="canonical"`; list all `PLACEHOLDER` occurrences (`grep -rno 'PLACEHOLDER[^]]*' dist | sort -u`) into README checklist. Internal links resolve (grep hrefs → files exist).
- [ ] **Step 2: Commit** `docs: README with deploy + placeholder checklist`

### Task 10: GitHub push (personal account gate) + Cloudflare Pages handoff

- [ ] **Step 1: USER GATE — personal GitHub auth.** Ask user to run: `! gh auth login` (choose GitHub.com → HTTPS → login as **rifathazim**). Verify: `gh auth status` shows rifathazim active. **Show the user the active account and get explicit OK before pushing. Do NOT push as aifamecomputers-dev.**
- [ ] **Step 2: Create repo + push** — `gh repo create rifathazim/shorebridge-bpo --public --source . --push` (confirm remote URL is under rifathazim first).
- [ ] **Step 3: Cloudflare Pages (user actions, documented in README):** dash.cloudflare.com → Workers & Pages → Create → connect GitHub repo → framework preset Astro, build `npm run build`, output `dist`, Node 20 env var (`NODE_VERSION=20`). Then buy `shorebridgebpo.com` (Cloudflare Registrar) → add as custom domain. Then: Search Console + Bing Webmaster verification + submit sitemap.
- [ ] **Step 4: Verify deploy** — fetch the `*.pages.dev` URL; grep for `other shore` + `application/ld+json`.

---

## Self-review notes

- Spec coverage: §2 design→T1; §3 sitemap→T3–T7 (9 pages + blog ✓); §4 anatomy→T4 layout order matches; §5 posts→T7; §6 SEO→T1 (canonical/OG/sitemap), T4 (Service/FAQPage), T6 (Person/LocalBusiness), T7 (Article), T8 (robots/llms/OG); §7 stack→T0/T1/T10; §8 inputs→PLACEHOLDER tokens greppable (T9 audit); §9 checklist→README (T9) + T10; §11 success→T9/T10 verifications. Lighthouse ≥95 expected from zero-JS static output; measured post-deploy.
- Type consistency: `Svc` shape defined once (T4), consumed by T3/T5/T8 via import of `SERVICES`; component props defined in T2 and used per those shapes.
- Placeholders in plan are *deliberate content tokens* (user-supplied facts), not plan gaps; each is enumerated in the T9 README checklist.
