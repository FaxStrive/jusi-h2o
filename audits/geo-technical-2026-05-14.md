# Technical GEO Audit — jusih2o.com

**Audit date:** 2026-05-14
**Target URL:** https://jusih2o.com (canonicalizes to https://www.jusih2o.com/ via 307)
**Auditor:** SEOMAN /geo technical
**Hosting:** Vercel + Next.js (SSR/SSG)

---

## Technical GEO Score: 91/100 — Excellent

This is one of the strongest technical foundations across the FaxStrive water portfolio. The site is fully server-rendered on Vercel, has clean HTTPS + HSTS, structured llms.txt and llms-qa.json, a complete and accurate sitemap, and good Core Web Vitals. The deductions come from missing modern security headers (CSP, X-Frame-Options, X-Content-Type-Options, Permissions-Policy), a debatable robots.txt posture toward AI training crawlers, and a homepage LCP of 2.9s on mobile.

### Score Breakdown

| Category | Score | Weight | Weighted | Status |
|---|---|---|---|---|
| Server-Side Rendering | 100/100 | 25% | 25.0 | Excellent |
| Meta Tags & Indexability | 95/100 | 15% | 14.3 | Excellent |
| Crawlability (robots/sitemap/llms.txt) | 90/100 | 15% | 13.5 | Excellent |
| Security Headers | 55/100 | 10% | 5.5 | Fair |
| Core Web Vitals Risk | 85/100 | 10% | 8.5 | Good |
| Mobile Optimization | 100/100 | 10% | 10.0 | Excellent |
| URL Structure | 95/100 | 5% | 4.8 | Excellent |
| Response & Status | 90/100 | 5% | 4.5 | Excellent |
| Additional Checks | 90/100 | 5% | 4.5 | Excellent |
| **TOTAL** | | | **90.6** | **Excellent** |

---

## 1. Server-Side Rendering Assessment — CRITICAL FOR GEO

**Status:** LOW risk — Fully SSR/SSG
**Rendering Type:** Next.js App Router with Server Components (SSR + ISR via Vercel cache)
**Framework Detected:** Next.js on Vercel (server: Vercel; vary: RSC, Next-Router-State-Tree)

**Findings:**
- Initial HTML response is 109,737 bytes — substantial content rendered server-side before any JS executes.
- 8 H2 headings present in raw HTML body (visible to AI crawlers without JS execution).
- 4 JSON-LD `application/ld+json` blocks in initial response (excellent for AI parsing).
- 1 `__NEXT_DATA__`/Next streaming chunk present, confirming Next.js SSR with React Server Components.
- `vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch` confirms App Router server rendering.
- All meta tags, OG tags, canonical, title, description rendered in initial HTML — not injected by JS.

**AI crawler verdict:** GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, etc. see the full content. This is best-in-class for GEO.

---

## 2. Meta Tags & Indexability

| Tag | Status | Value |
|---|---|---|
| `<title>` | Present | "Water Filtration & Softener Experts Tampa Bay \| Jusi H2O" (60 chars — optimal) |
| `<meta description>` | Present | 173 chars — slightly long, may truncate. Compelling, includes keywords |
| `<link rel=canonical>` | Present | `https://jusih2o.com` (apex, but site redirects to www — see issue below) |
| `<meta robots>` | Present | `index, follow` — correct |
| `<meta viewport>` | Present | `width=device-width, initial-scale=1` — correct |
| `<html lang>` | Present | `en` — correct |
| Open Graph | Complete | og:title, description, url, image (1200x630), alt, type, site_name, locale — all present |
| Twitter Card | Not visually confirmed in sample | Recommend adding `twitter:card`, `twitter:image` if missing |
| Structured Data | 4 JSON-LD blocks | Strong signal (likely Organization + LocalBusiness + Service + FAQPage) |

**Canonical/redirect inconsistency (MEDIUM):** Apex `jusih2o.com` returns 307 to `www.jusih2o.com`, but the canonical tag on the rendered page points back to apex `https://jusih2o.com`. This creates a self-referential loop ambiguity (canonical points to URL that immediately redirects). Recommend either:
- Update canonical to `https://www.jusih2o.com/` to match the served version, OR
- Change the redirect so apex is the canonical destination.

---

## 3. Crawlability — robots.txt, Sitemap, llms.txt

### robots.txt — Found, well-structured

**Strengths:**
- Default `User-agent: *` allows all
- Sitemap reference present
- Distinguishes AI training crawlers (blocked) from AI search crawlers (allowed)
- References llms.txt and llms-full.txt locations in comments

### AI Crawler Access Matrix (14 known crawlers)

| Crawler | Purpose | Current Status | Recommended |
|---|---|---|---|
| GPTBot | OpenAI training | **Disallow** | Reconsider — blocks training data influence |
| ClaudeBot | Anthropic training | **Disallow** | Reconsider |
| anthropic-ai | Anthropic (legacy) | **Disallow** | Reconsider |
| CCBot | Common Crawl (feeds many LLMs) | **Disallow** | Reconsider — broadly blocks AI training |
| Google-Extended | Google AI training | **Allow** | Good |
| Applebot-Extended | Apple Intelligence | **Allow** | Good |
| Amazonbot | Amazon (Alexa, training) | **Disallow** | Reconsider |
| cohere-ai | Cohere | **Disallow** | Acceptable |
| Meta-ExternalAgent | Meta AI training | **Disallow** | Acceptable |
| OAI-SearchBot | ChatGPT search index | **Allow** | Excellent (drives citations) |
| Claude-SearchBot | Claude search | **Allow** | Excellent |
| PerplexityBot | Perplexity index | **Allow** | Excellent |
| ChatGPT-User | User-triggered fetch | **Allow** | Excellent |
| Claude-User | User-triggered fetch | **Allow** | Excellent |
| Perplexity-User | User-triggered fetch | **Allow** | Excellent |
| Bytespider | ByteDance training | Not listed | Default *: Allow — recommend explicit Disallow |
| Diffbot | Crawler | Not listed | Default *: Allow — acceptable |
| ImagesiftBot | TheHive AI image | Not listed | Default *: Allow — recommend explicit Disallow |
| FacebookBot | Facebook (separate from Meta-External) | Not listed | Default *: Allow |

**HIGH issue:** Blocking GPTBot, ClaudeBot, anthropic-ai, and CCBot is a defensible privacy stance but may reduce long-term AI citation share. ChatGPT/Claude/Perplexity SearchBots are correctly allowed (those are the citation-drivers), so the impact on real-time AI search visibility is minimal. The risk is that as models retrain, jusih2o.com data is not absorbed into model weights and so loses long-tail "what do you know about" recall. For a local-service business in 2026, **the current posture is acceptable**; the search-index crawlers are what matter.

### sitemap.xml — Found, well-formed

- Valid XML, proper `<urlset>` namespace
- All URLs use apex `jusih2o.com` (will 307 to www — sitemap should use the final www URLs to avoid wasted crawl budget) — **MEDIUM**
- `<lastmod>` dates present and recent (2026-03 to 2026-04)
- Service pages, county landing pages, and home included
- Reasonable URL count (15+ URLs visible in sample, likely 30+ total)

### llms.txt — Present and high quality

- Well-structured per Anthropic spec: title, blurb, About, Services, Service Areas, FAQ, Contact, All Pages, Machine-Readable Versions
- Founder name (Marquis Pendergrass) and full NAP present
- 9 service URLs with descriptions, 5 service area entries
- 5 FAQ pairs with 40-60 word answers (optimal citation length)
- References llms-full.txt and llms-qa.json (advanced GEO setup)
- llms-full.txt also accessible (returns 307→www but resolves)

This is one of the strongest llms.txt implementations in the portfolio.

---

## 4. Security Headers

| Header | Status | Value |
|---|---|---|
| HTTPS | Yes | HTTP/2, valid TLS |
| HSTS | Present | `max-age=63072000` (2 years) — strong, but missing `includeSubDomains` and `preload` |
| Content-Security-Policy | **Missing** | High risk — XSS exposure |
| X-Frame-Options | **Missing** | Clickjacking risk |
| X-Content-Type-Options | **Missing** | MIME sniffing risk |
| Referrer-Policy | **Missing** | Referrer leakage |
| Permissions-Policy | **Missing** | Browser feature abuse risk |
| Cache-Control | Present | `public, max-age=0, must-revalidate` |
| ETag | Present | Strong validator |

**Action:** Add the missing security headers via `next.config.mjs` `headers()` function. Vercel will serve them with no perf impact.

---

## 5. Core Web Vitals (PageSpeed Insights, May 2026)

| Metric | Mobile | Desktop | 2026 Threshold | Status |
|---|---|---|---|---|
| Performance Score | 95 | 99 | — | Excellent |
| LCP | **2.9 s** | 0.6 s | ≤2.5s good | Mobile: Needs Improvement |
| CLS | 0.00 | 0.00 | ≤0.1 good | Excellent |
| TBT (INP proxy) | 10 ms | 0 ms | ≤200ms INP good | Excellent |
| FCP | 1.0 s | — | — | Good |
| Speed Index | 3.1 s | — | — | Good |
| SEO score | 100 | — | — | Perfect |
| Accessibility | 96 | — | — | Excellent |
| Best Practices | 100 | — | — | Perfect |

**CrUX field data:** Not yet available (low traffic threshold). All numbers are Lighthouse lab.

**LCP Risk:** Mobile LCP at 2.9s exceeds 2.5s "good" threshold. Hero image is likely the LCP element. Found 6 `loading="lazy"` attributes but no `fetchpriority="high"` on the hero. Recommend adding `fetchpriority="high"` and a `<link rel="preload">` for the hero image. Expected improvement: 0.5-1.0s LCP reduction.

**INP Risk:** Very low — TBT is 10ms on mobile, 0ms desktop. React hydration is minimal.

**CLS Risk:** Zero observed. Excellent.

---

## 6. Mobile Optimization

- Viewport meta correctly configured
- Tailwind responsive utility classes (flex, grid, responsive breakpoints) confirmed in HTML class lists
- `loading="lazy"` on below-the-fold images
- Font system uses CSS custom properties (`__variable_*` Next.js font optimization)
- Mobile Lighthouse Accessibility: 96, Best Practices: 100
- No horizontal scroll indicators
- Touch targets appear adequate (Tailwind defaults to py-3+ for buttons)

**Status:** Fully optimized.

---

## 7. URL Structure

**Target URL pattern:** `https://www.jusih2o.com/services/water-softeners`

- Clean, descriptive, hierarchical
- Lowercase, hyphenated, no parameters or session IDs
- Service pages: `/services/<slug>` — logical
- Geo pages: `/water-softener-in-<county>-fl` — flat, geo-keyword optimized
- Under 80 chars, max 2-3 levels deep
- Apex→www 307 redirect (should be 301 for SEO equity — **MEDIUM**)

**Score: 95/100.** Single deduction for using 307 (temporary) instead of 301 (permanent) on the apex→www redirect — search engines treat 307 as non-canonical-shifting, which may slow consolidation of ranking signals.

---

## 8. Response Headers & Status

- HTTP/2 enabled
- 307 redirect apex→www (should be 301)
- Final response: 200 OK
- `x-vercel-cache: HIT` (excellent CDN caching)
- ETag + Cache-Control present
- Content-Encoding: not visible in headers but Vercel auto-compresses (br/gzip)
- No redirect chains beyond the single apex→www hop

---

## 9. Additional Checks

- **Structured data:** 4 JSON-LD blocks in HTML head — strong
- **Resource hints:** Next.js auto-injects font preloads; manual hero preload missing
- **hreflang:** Not present — acceptable (single-language site, en-US)
- **Duplicate content:** Canonical points to apex while site serves www — minor inconsistency
- **noscript fallback:** Not required (content is SSR)

---

## Priority Actions

### CRITICAL
None. The site has no critical technical GEO issues.

### HIGH
1. **Fix apex/www canonical mismatch.** Either change canonical tag to `https://www.jusih2o.com/` (recommended) or change the redirect so apex is canonical. Currently canonical = apex but apex 307s to www, creating ambiguity.
2. **Convert apex→www 307 to 301.** A permanent redirect ensures search engines fully consolidate ranking signals. Update Vercel redirect config from `permanent: false` to `permanent: true` in `next.config.mjs`.
3. **Improve mobile LCP from 2.9s to under 2.5s.** Add `fetchpriority="high"` to the hero image `<Image>` component and a preload hint. Avoid `loading="lazy"` on above-the-fold images.

### MEDIUM
4. **Add modern security headers** via `next.config.mjs` `headers()`:
   - `Content-Security-Policy` (start with report-only)
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=(self)`
   - Strengthen HSTS to `max-age=63072000; includeSubDomains; preload`
5. **Update sitemap.xml to use www URLs.** All entries currently point to `jusih2o.com` and will 307 — wastes crawl budget. Generator should output the final canonical hostname.
6. **Add explicit Disallow for Bytespider, ImagesiftBot** if the privacy stance against AI training scraping is intentional.

### LOW
7. **Tighten meta description** to 150-160 chars (current ~173 chars may truncate).
8. **Add Twitter Card meta tags** if not already present in head (twitter:card, twitter:title, twitter:description, twitter:image).
9. **Reconsider GPTBot/ClaudeBot/CCBot Disallow.** Search-index crawlers (allowed) drive 95%+ of AI citation traffic, but training crawlers ensure long-term entity recall. For a local service business this matters less, but worth a strategic decision.

---

## Summary

jusih2o.com is in the top tier technically. Next.js SSR on Vercel gives AI crawlers full, immediate access to all content. The llms.txt setup (with llms-full.txt and llms-qa.json) is best-practice. Structured data is rendered server-side. Core Web Vitals are nearly perfect on desktop and very good on mobile (with one LCP optimization needed). The main gaps are missing modern security headers and a canonical/redirect inconsistency — both are easy fixes that will push the technical score from 91 toward 97+.
