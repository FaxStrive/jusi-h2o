# GEO Schema Audit — jusih2o.com

**Date:** 2026-05-14
**Auditor:** /geo schema (Claude Opus 4.7)
**Domain:** https://jusih2o.com
**Stack:** Next.js (App Router, SSR/SSG — JSON-LD is server-rendered, AI-crawler safe)
**Pages sampled:** 17 — homepage, /about, /services, /services/water-softeners, /services/water-filtration, /services/reverse-osmosis, /services/jusicare, /services/water-softener-installation, /services/well-water-treatment, /blog, /blog/hard-water-tampa-bay-guide, /blog/reverse-osmosis-benefits-tampa-bay, /blog/water-softener-cost-hillsborough-county-fl, /faq, /certifications, /water-softener-tampa-fl, /water-softener-clearwater-fl, /water-softener-in-hillsborough-county-fl

---

## Schema Score: 68 / 100  —  Fair (good coverage, critical wiring gaps)

| Component | Earned | Max | Notes |
|---|---|---|---|
| Organization / LocalBusiness | 14 | 20 | Plumber present with sameAs to 5 platforms — but NO Wikipedia/Wikidata/LinkedIn/YouTube; missing @id; @type is single not array |
| Article / content schema | 9 | 15 | Article + Person author + dateModified present, but publisher is inline stub (not @id-linked), no image, no mainEntityOfPage |
| Person schema for author | 3 | 15 | Marquis Pendergrass present as Person with name only — no sameAs, jobTitle, knowsAbout, image, worksFor |
| sameAs completeness | 5 | 15 | 5 links (FB, IG, Google Maps cid, Yelp, BBB) — none of the high-signal platforms (Wikipedia, Wikidata, LinkedIn, YouTube) |
| speakable property | 7 | 10 | Present on WebPage node but NOT wired into the Organization/Plumber or Article — and `.speakable` / `[data-speakable]` selectors are not used in body HTML (verified — selectors match nothing) |
| BreadcrumbList | 4 | 5 | Present on every page, but **duplicate BreadcrumbList on local-grid pages** (two competing trails) |
| WebSite + SearchAction | 5 | 5 | Present and valid on homepage |
| No deprecated schemas | 5 | 5 | No HowTo, no SpecialAnnouncement, no CourseInfo. FAQPage used (acceptable, restricted from rich-results but still useful semantic signal) |
| JSON-LD format | 5 | 5 | All schemas JSON-LD; no Microdata/RDFa |
| Validation (no errors) | 3 | 5 | All blocks parse, but multiple property-level issues (see below); two service pages render `_not-found` breadcrumbs |
| **Total** | **68** | **100** | |

---

## Detected Structured Data — by Page

| Page | Blocks | Types |
|---|---|---|
| / (home) | 4 | Plumber, WebSite+SearchAction, ItemList, WebPage+speakable |
| /about | 1 | BreadcrumbList only |
| /services | 1 | BreadcrumbList only |
| /services/water-softeners | 5 | BreadcrumbList, Service+Plumber, FAQPage, ItemList, WebPage+speakable |
| /services/water-filtration | 5 | BreadcrumbList, Service+Plumber, FAQPage, ItemList, WebPage+speakable |
| /services/reverse-osmosis | 5 | BreadcrumbList, Service+Plumber, FAQPage, ItemList, WebPage+speakable |
| /services/jusicare | 3 | BreadcrumbList, Service+Plumber, FAQPage |
| /services/water-softener-installation | 1 | **BreadcrumbList for `_not-found`** — page does not exist |
| /services/well-water-treatment | 1 | **BreadcrumbList for `_not-found`** — page does not exist |
| /blog | 1 | BreadcrumbList |
| /blog/hard-water-tampa-bay-guide | 2 | BreadcrumbList, Article + Person + Organization |
| /blog/reverse-osmosis-benefits-tampa-bay | 2 | BreadcrumbList, Article + Person + Organization |
| /blog/water-softener-cost-hillsborough-county-fl | 2 | BreadcrumbList, Article + Person + Organization |
| /faq | 3 | BreadcrumbList, WebPage+speakable, FAQPage (12 Q&A) |
| /certifications | 2 | BreadcrumbList, FAQPage |
| /water-softener-tampa-fl | 4 | BreadcrumbList ×2 (duplicate!), Plumber, FAQPage |
| /water-softener-clearwater-fl | 4 | BreadcrumbList ×2 (duplicate!), Plumber, FAQPage |
| /water-softener-in-hillsborough-county-fl | 4 | BreadcrumbList ×2 (duplicate!), Service+LocalBusiness, FAQPage |

**Total blocks across sample:** 46 — all parse as valid JSON-LD.

---

## Validation Findings

### Organization (Homepage Plumber block)

| Property | Status | Detail |
|---|---|---|
| @context | OK | `https://schema.org` |
| @type | **Partial** | `"Plumber"` — single string. Plan called for `["HomeAndConstructionBusiness","Plumber"]` array — **not deployed** |
| @id | **MISSING** | No `@id` anywhere on the site. Cannot cross-reference from Article.publisher, Service.provider, FAQPage, etc. This is the #1 entity-graph blocker. |
| name, url, telephone | OK | "Jusi H2O", https://jusih2o.com, +18133030515 |
| description | OK | 248 chars, geo-specific |
| address (PostalAddress) | OK | 7901 4th St N Ste 300, St. Petersburg, FL 33702 |
| geo (GeoCoordinates) | OK | 27.7676, -82.6403 |
| areaServed | OK | 5 counties + 5 cities |
| openingHoursSpecification | OK | Mon-Fri 08:00-18:00, Sat 08:00-14:00 |
| contactPoint | OK | customer service, US, English |
| aggregateRating | **Risky** | ratingValue 5, reviewCount **2500** — round/inflated number invites Google manual-action scrutiny when AggregateRating sits on Plumber type. Recommend tying to actual GBP review count |
| image, logo | OK | both present |
| dateModified | OK | 2026-04-19 |
| hasCredential | **Deployed** | 7 items (WQA + 6× NSF: NSF-42/53/55/58/61/372 — count matches the planned "WQA + 7 NSF" but is actually 1 WQA + 6 NSF. Confirm whether NSF-44 is intentionally missing |
| sameAs | **Weak** | Only 5 links: Facebook, Instagram, Google Maps (cid pseudo-URL), Yelp, BBB. **Missing high-signal platforms — see "sameAs Entity Linking" below** |
| speakable | **MISSING from Plumber** | Speakable exists only on a separate WebPage node, not on the Organization/Plumber. AI assistants resolving the org entity will not see it |
| inLanguage | **MISSING** | Not present anywhere |
| founder / foundingDate / numberOfEmployees / slogan / knowsAbout | MISSING | Optional but useful E-E-A-T signals |

### sameAs on Plumber — current vs gap

| Platform | Linked | Notes |
|---|---|---|
| Wikipedia | No | Brand likely not notable enough for own page yet, but linking a Tampa/water-utility entity is not appropriate. Skip. |
| Wikidata | **No — fix** | Create a Wikidata entity (Q-number) for "Jusi H2O" and link it. Cheapest, highest-leverage GEO move. |
| LinkedIn (company page) | **No — fix** | High-signal for AI entity graphs. |
| YouTube (channel) | **No — fix** | YouTube mentions are the single strongest GEO signal (0.737 correlation). If no channel exists, create one. |
| Crunchbase | **No — fix** | Free profile. |
| Google Business Profile (canonical g.page URL) | Partial | Current `google.com/maps?cid=jusih2o` is **not a valid Maps URL** — `cid` must be a numeric ID. This link is broken or speculative — replace with the actual `g.page/<handle>` or `maps.google.com/?cid=<numeric>` URL. |
| Facebook | OK | profile.php?id=61578123391295 — verify resolves |
| Instagram | OK | @jusih2o |
| Yelp | OK | biz/jusi-h2o |
| BBB | OK | profile/water-filtration — verify resolves to actual listing |

### Article schema (blog posts — 3 sampled)

| Property | Status | Detail |
|---|---|---|
| @type Article | OK | Could upgrade to `BlogPosting` for slightly tighter semantics |
| headline | OK | Full title strings |
| description | OK | Geo-targeted |
| datePublished / dateModified | OK | Both ISO-8601 |
| author | **Partial** | `Person` with `name: "Marquis Pendergrass"` only. No `url`, no `sameAs`, no `jobTitle`, no `worksFor`, no `image`, no `knowsAbout`. This is the #1 E-E-A-T gap. Per project memory, author identity must be real and verifiable — confirm Marquis Pendergrass is the actual author and add proof |
| publisher | **Partial** | Inline Organization with `name` + `url` only — not @id-linked to the homepage Plumber node. Should reference `{"@id":"https://jusih2o.com/#organization"}` once @id is added |
| image | **MISSING** | Required for Article rich-result eligibility. Tampa-specific hero images expected per the FaxStrive water-template (`/public/images/blog-hero/{slug}.jpg`). |
| mainEntityOfPage | **MISSING** | Required for proper page-Article binding |
| articleSection | MISSING | Topic category (e.g., "Hard Water", "Reverse Osmosis") |
| wordCount | MISSING | Optional but helps AI rank passage length |
| inLanguage | MISSING | `en-US` |
| speakable | **MISSING** | Articles are the highest-value place for speakable — none deployed |

### Service schema (service pages)

Status: **Solid baseline.** All three live service pages have well-formed `Service` blocks with provider (`Plumber`), description, URL, dateModified, and areaServed. Gaps:
- `provider` is an inline Plumber stub (only name/url/telephone) — should @id-reference the homepage Plumber once @id exists
- No `offers` / `hasOfferCatalog` (the homepage Plumber has a 7-offer catalog — duplicate it at service-level for AI entity binding)
- No `serviceType`, no `category`
- No `image`
- `/services/water-softener-installation` and `/services/well-water-treatment` are 404s with `_not-found` breadcrumbs — broken internal links pointing to these from somewhere. Find and fix.

### FAQPage

Three live: `/faq` (12 Q&A), `/certifications` (3 Q&A), and per-service pages (3 each). All syntactically valid. Reminder: FAQPage rich results restricted since Aug 2023 to gov/health authorities — **keep for AI semantic value but do not expect SERP enhancements**. Acceptable.

### BreadcrumbList — duplicate trails on local-grid pages

`/water-softener-tampa-fl`, `/water-softener-clearwater-fl`, `/water-softener-in-hillsborough-county-fl` each emit **two** BreadcrumbList blocks:

1. Auto-generated 2-item trail: `Home > Water Softener Tampa Fl` (slug-cased, ugly)
2. Hand-crafted 3-item trail: `Jusi H2O > Water Softener > Tampa, FL`

The auto-generated one points position 1 to "Home" with `name="Water Softener Tampa Fl"` (URL-derived). Google picks one arbitrarily — the slug-cased version is the likely loser. **Remove the auto-generated breadcrumb** and keep the curated one. Same fix needed on all 7 local-grid pages.

### speakable — wired wrong

A `WebPage + SpeakableSpecification` node appears on homepage, /faq, and the three live service pages with this selector array:

```json
"cssSelector": ["h1", "h2", ".speakable", "[data-speakable]"]
```

Issues:
1. Targeting **every h1 and h2** is too broad — speakable should mark *self-contained answer passages* (40–60 word factual chunks), not headings.
2. `.speakable` class and `[data-speakable]` attribute **are not present in the rendered body HTML** of any page sampled (verified). The two custom selectors match zero elements.
3. Speakable is **not present on Article schemas at all** — Articles are the highest-value target.
4. Speakable is **not present on the Organization/Plumber** — meaning AI assistants resolving the brand entity get no speakable hook.

### Local-grid Plumber blocks (Tampa, Clearwater)

| Property | Tampa page | Clearwater page | Note |
|---|---|---|---|
| @id | Missing | Missing | Should @id-reference `https://jusih2o.com/#organization` (not duplicate the Plumber) |
| address | St. Petersburg HQ | St. Petersburg HQ | OK |
| geo coordinates | **27.9506, -82.4572** (Tampa) | (Clearwater coords) | **Geo conflict** — coordinates differ between pages but address is identical St. Petersburg. AI models will flag this as inconsistent NAP. Pick one strategy: (a) keep HQ-only with single Plumber and use Service with areaServed per city, OR (b) only if real branch offices exist, give each its own complete PostalAddress + own @id |
| aggregateRating | reviewCount 2500 | reviewCount 2500 | **Same rating duplicated on every local page** — Google treats this as fabricated/non-page-specific aggregate. High manual-action risk. Either remove from local pages and keep only on homepage Plumber, or scope to actual per-city review counts |

### `/water-softener-in-hillsborough-county-fl` — quality issues

- `Service.name`: `"Water Softener in Hillsborough County, FL, "` — **trailing comma + space** in the name string.
- `Service.provider` is `LocalBusiness` (not Plumber) — inconsistent with rest of site (everywhere else uses Plumber).
- `areaServed`: `City` with name "Hillsborough County, FL" — Hillsborough is a **County, not a City**; type is wrong.

---

## GEO-Critical Schema Assessment

| Schema | Status | GEO Impact | Verdict |
|---|---|---|---|
| Organization / Plumber + @id | **Partial** | Critical | `@id` missing site-wide — biggest single fix |
| sameAs entity linking | Weak (5 links, no high-signal) | Critical | Add Wikidata, LinkedIn, YouTube, Crunchbase |
| Person (author) full identity | **Partial** | High | Only name present — no sameAs, jobTitle, knowsAbout |
| Article + dateModified + image + mainEntityOfPage | Partial | High | image + mainEntityOfPage missing on all 3 sampled |
| Service.provider @id reference | Missing | High | All Service blocks inline-stub the Plumber |
| speakable on Org + Article | Missing (only on WebPage stub) | Medium | Move speakable onto Plumber and Article; fix selectors |
| hasCredential | **Deployed** | Medium | 7 credentials — confirm count vs plan (1 WQA + 6 NSF, not 1+7) |
| BreadcrumbList | Duplicate on local pages | Low | Remove auto-generated trail |
| WebSite + SearchAction | OK | Low | No action |
| FAQPage | Present, restricted | Low | Keep for AI semantics, do not expect rich results |
| inLanguage | Missing site-wide | Low | Add `"inLanguage": "en-US"` |

---

## JavaScript Rendering Risk

**Verdict: SAFE.** The site is Next.js (App Router) but JSON-LD is server-rendered into the initial HTML response. Confirmed by curl-only fetch (no JS execution) returning all blocks. AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) will receive the schema. No JS-injection risk detected.

---

## Top 5 Fixes (Priority Order)

### 1. [CRITICAL] Add `@id` to the Organization and wire all schemas to it

The user said the Plumber org was upgraded with `@id: https://jusih2o.com/#organization`. **That is not currently live.** Without it, Article.publisher, Service.provider, FAQPage.publisher, and per-location Plumber blocks all duplicate the org as inline stubs — AI entity graphs see 4-5 different "Jusi H2O" entities instead of one.

```json
// homepage Plumber block — add these:
{
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "Plumber"],
  "@id": "https://jusih2o.com/#organization",
  "inLanguage": "en-US",
  ...existing properties...
}
```

Then replace every `publisher` / `provider` inline stub with:
```json
"publisher": { "@id": "https://jusih2o.com/#organization" }
"provider": { "@id": "https://jusih2o.com/#organization" }
```

### 2. [CRITICAL] Strengthen sameAs — add Wikidata, LinkedIn, YouTube, Crunchbase; fix broken Google Maps URL

The current `google.com/maps?cid=jusih2o` is **not a valid URL** (`cid` must be a numeric Google Business Profile ID). Replace and add the 4 high-signal platforms. Target sameAs (8-9 items):

```json
"sameAs": [
  "https://www.wikidata.org/wiki/Q<NUMBER>",        // create Wikidata entry first
  "https://www.linkedin.com/company/jusi-h2o",
  "https://www.youtube.com/@jusih2o",
  "https://www.crunchbase.com/organization/jusi-h2o",
  "https://www.facebook.com/profile.php?id=61578123391295",
  "https://www.instagram.com/jusih2o/",
  "https://maps.google.com/?cid=<numeric-cid>",     // get real CID from GBP
  "https://www.yelp.com/biz/jusi-h2o",
  "https://www.bbb.org/us/fl/st-petersburg/profile/water-filtration"
]
```

### 3. [HIGH] Flesh out Article schemas — image, mainEntityOfPage, full Person author

Every blog post is missing: `image`, `mainEntityOfPage`, full Person, speakable. Template:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://jusih2o.com/blog/hard-water-tampa-bay-guide#article",
  "headline": "Tampa Bay's Hard Water Problem: What Every Homeowner Needs to Know",
  "description": "Tampa Bay has some of Florida's hardest water...",
  "image": "https://jusih2o.com/images/blog-hero/hard-water-tampa-bay-guide.jpg",
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "inLanguage": "en-US",
  "wordCount": 2300,
  "articleSection": "Hard Water",
  "mainEntityOfPage": { "@id": "https://jusih2o.com/blog/hard-water-tampa-bay-guide" },
  "author": {
    "@type": "Person",
    "@id": "https://jusih2o.com/about#marquis-pendergrass",
    "name": "Marquis Pendergrass",
    "url": "https://jusih2o.com/about",
    "jobTitle": "[REPLACE: actual title — ASK before filling, do not fabricate]",
    "worksFor": { "@id": "https://jusih2o.com/#organization" },
    "knowsAbout": ["water softening", "reverse osmosis", "Florida water quality"],
    "sameAs": ["[REPLACE: LinkedIn URL if exists — ASK before filling]"]
  },
  "publisher": { "@id": "https://jusih2o.com/#organization" },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["[data-bluf]", ".faq-answer", ".speakable"]
  }
}
```

**Per project memory: do not fabricate Marquis Pendergrass's jobTitle, credentials, or LinkedIn — ask Luke before filling those fields.**

### 4. [HIGH] Fix local-grid pages — remove duplicate breadcrumb, fix Hillsborough type, scope aggregateRating

Three concurrent issues on every `/water-softener-<city>-fl` page:

a) **Delete the auto-generated 2-item BreadcrumbList** (the one with `name="Water Softener Tampa Fl"`); keep only the curated 3-item trail.

b) **Hillsborough County page:** change `City` → `AdministrativeArea`, fix Service.name trailing comma, switch `provider` from `LocalBusiness` to `Plumber` (consistency with site).

c) **AggregateRating duplication:** the 5.0 × 2500 reviews currently appears on the homepage + every local-grid page. Either (i) remove from local-grid pages entirely (keep only on homepage Organization), or (ii) replace with realistic per-city counts (e.g., 5.0 × 420 for Tampa). Identical 2500 across every page is a manual-action vector.

### 5. [HIGH] Fix two 404'd service URLs and move speakable to where it matters

- `/services/water-softener-installation` and `/services/well-water-treatment` return `_not-found`. The internal links pointing to them (found on homepage and blog listing) need to be retargeted to the real slugs: `/services/water-softeners` and `/services/well-water` (per sitemap.xml).

- Move the `speakable` property OFF the standalone WebPage node and ONTO:
  - The homepage Plumber (entity-level speakable for brand resolution)
  - Every Article (passage-level speakable for AI citation)

- Replace the current broken selectors (`.speakable`, `[data-speakable]` — they match nothing in rendered HTML) with selectors that actually target your content: e.g., `[data-bluf]` (per the FaxStrive blog template), `.faq-answer`, the first paragraph of each H2 section. Do NOT use `h1, h2` — speakable is for answer passages, not headings.

---

## Recommended JSON-LD Templates

### Homepage Organization (drop-in replacement for current Plumber block)

```json
{
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "Plumber"],
  "@id": "https://jusih2o.com/#organization",
  "name": "Jusi H2O",
  "url": "https://jusih2o.com",
  "logo": "https://jusih2o.com/images/logo.png",
  "image": "https://jusih2o.com/images/og-image.png",
  "telephone": "+18133030515",
  "priceRange": "$",
  "inLanguage": "en-US",
  "description": "Jusi H2O provides professional water filtration, water softeners, and reverse osmosis systems in Tampa Bay, FL. Free in-home water testing with same-day results. Serving Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties.",
  "foundingDate": "[REPLACE: ASK Luke — do not fabricate]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7901 4th St N Ste 300",
    "addressLocality": "St. Petersburg",
    "addressRegion": "FL",
    "postalCode": "33702",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 27.7676, "longitude": -82.6403 },
  "areaServed": [ ... keep current 5 counties + 5 cities ... ],
  "openingHoursSpecification": [ ... keep current ... ],
  "contactPoint": { ... keep current ... },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[REPLACE: actual GBP rating]",
    "reviewCount": "[REPLACE: actual GBP review count — not round 2500]",
    "bestRating": 5,
    "worstRating": 1
  },
  "sameAs": [
    "https://www.wikidata.org/wiki/Q<NUMBER>",
    "https://www.linkedin.com/company/jusi-h2o",
    "https://www.youtube.com/@jusih2o",
    "https://www.crunchbase.com/organization/jusi-h2o",
    "https://www.facebook.com/profile.php?id=61578123391295",
    "https://www.instagram.com/jusih2o/",
    "https://maps.google.com/?cid=<NUMERIC_CID>",
    "https://www.yelp.com/biz/jusi-h2o",
    "https://www.bbb.org/us/fl/st-petersburg/profile/water-filtration"
  ],
  "hasCredential": [ ... keep current 7 EducationalOccupationalCredential entries ... ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["[data-bluf]", ".key-fact", ".faq-answer"]
  },
  "knowsAbout": ["water softening", "reverse osmosis", "well water treatment", "water filtration", "Tampa Bay water quality"],
  "hasOfferCatalog": { ... keep current 7-offer catalog ... }
}
```

### Article (drop-in for every blog post — see Fix #3 above)

### Person (new — add to /about page or hidden on each article)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://jusih2o.com/about#marquis-pendergrass",
  "name": "Marquis Pendergrass",
  "url": "https://jusih2o.com/about",
  "image": "[REPLACE: author headshot URL]",
  "jobTitle": "[REPLACE: ASK Luke — do not fabricate]",
  "worksFor": { "@id": "https://jusih2o.com/#organization" },
  "knowsAbout": ["water softening", "reverse osmosis", "Florida water quality", "well water treatment"],
  "sameAs": ["[REPLACE: LinkedIn URL — ASK Luke before adding]"],
  "description": "[REPLACE: 1-2 sentence verified bio — ASK Luke]"
}
```

---

## Files

- Audit report: `/Users/ezekiel/Desktop/SEOMAN/active-seo/jusi-h2o/audits/geo-schema-2026-05-14.md`
- Parsed JSON-LD dump (working file): `/tmp/jusi-schema/report.json`
- Raw HTML samples (working files): `/tmp/jusi-schema/*.html`
