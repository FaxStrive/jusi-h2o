# Lane C, Content Refresh Audit
**Site:** Jusi H2O (https://jusih2o.com)
**Date:** 2026-05-15
**Auditor scope:** Title tags, meta descriptions, content freshness, E-E-A-T signals, sitewide metatag patterns, top-5 refresh playbook.
**Research only.** No source files edited.

> Context (from CLAUDE.md): founded 2011 by Marquis Pendergrass, 2,500 reviews, 5.0 stars, 15+ years, 10+ technicians, 50-mile service radius, 7 NSF certifications, WQA certified, Tampa Bay (Hillsborough, Pinellas, Manatee, Sarasota, Polk Counties), phone (813) 303-0515. Schema type already corrected to `Plumber`. Blog authors all attributed to Marquis Pendergrass (verified across 14 posts in `blog-posts.ts`). Verified live phone matches the brief.

---

## 1. Content Inventory

Pages enumerated from `src/app/**/page.tsx` (Next.js App Router with both flat routes under `src/app/` and grouped routes under `src/app/(pages)/`) and `src/lib/blog-posts.ts` (14 posts).

### Service / Pillar Pages

| Path | Title |
|---|---|
| / (home, `(pages)/page.tsx`) | Water Filtration & Softener Experts Tampa Bay |
| / (layout default) | Jusi H2O \| Water Filtration Tampa Bay |
| /water-softener | Water Softener Installation & Service Tampa Bay |
| /water-filtration | Whole-House Water Filtration Systems Tampa Bay |
| /whole-house-filtration | Whole-House Water Filtration Tampa Bay FL |
| /water-treatment | Complete Water Treatment Solutions Tampa Bay |
| /water-testing | Free Professional Water Testing in Tampa Bay |
| /well-water-treatment | Well Water Treatment & Iron Removal Tampa Bay |
| /reverse-osmosis | Reverse Osmosis Drinking Water Systems Tampa Bay |
| /service-areas | Water Treatment Service Areas Across Tampa Bay FL |

### `(pages)/services/` (grouped service hub, 9 pages)

| Path | Title |
|---|---|
| /services | Water Filtration & Treatment Services Tampa Bay |
| /services/water-softeners | Water Softener Installation - Hard Water Tampa |
| /services/water-filtration | Whole-House Water Filtration Tampa Bay |
| /services/reverse-osmosis | Reverse Osmosis Drinking Water Systems Tampa |
| /services/well-water | Well Water Treatment & Iron Removal Tampa Bay |
| /services/water-testing | Free In-Home Water Testing Services Tampa Bay |
| /services/water-heater-installation | Water Heater Installation & Replacement Tampa |
| /services/leak-repair | Leak Detection & Pipe Repair Services Tampa Bay |
| /services/commercial-plumbing | Commercial Plumbing & Water Treatment Tampa |
| /services/jusicare | JusiCare+ Annual Water System Protection Plan |

### Location Pages (7)

| Path | Title |
|---|---|
| /water-softener-tampa-fl | Water Softener Installation Tampa, FL |
| /water-softener-st-petersburg-fl | Water Softener Installation St. Petersburg, FL |
| /water-softener-clearwater-fl | Water Softener Installation Clearwater, FL |
| /water-softener-brandon-fl | Water Softener Installation Brandon, FL |
| /water-softener-sarasota-fl | Water Softener Installation Sarasota, FL |
| /water-softener-in-hillsborough-county-fl | Water Softener Installation Hillsborough County FL |
| /water-softener-in-pinellas-county-fl | Water Softener Installation Pinellas County FL |

### Core / Conversion (under `(pages)/`)

| Path | Title |
|---|---|
| /(pages)/about | About Us - Tampa Bay Water Filtration Experts |
| /(pages)/contact | Contact Us - Schedule Your Free Water Test Today |
| /(pages)/faq | Water Filtration FAQ - Common Questions Answered |
| /(pages)/blog | Water Quality Blog - Tampa Bay Guides & Tips |
| /(pages)/pricing | Water Softener & Filtration Pricing Tampa Bay |
| /(pages)/certifications | NSF & WQA Certifications \| Jusi H2O Tampa Bay |
| /(pages)/testimonials | Customer Reviews - 2,500+ Five-Star Testimonials |
| /(pages)/gallery | Water Filtration Installation Photo Gallery |
| /(pages)/before-after | Before & After Water Filtration Results Tampa Bay |
| /(pages)/service-area | Water Treatment Service Areas - Tampa Bay FL |
| /(pages)/privacy-policy | Privacy Policy - Data Protection & SMS Terms |
| /(pages)/terms-of-service | Terms of Service - Water Treatment Agreement |

### Blog Articles (14, all authored "Marquis Pendergrass")

| Slug | Date | Title |
|---|---|---|
| hard-water-tampa-bay-guide | 2026-01-15 | Tampa Bay's Hard Water Problem: What Every Homeowner Needs to Know |
| well-water-treatment-hillsborough-county | 2026-01-22 | Well Water in Hillsborough County: What You're Not Testing For (But Should Be) |
| water-heater-scale-tampa-bay | 2026-02-01 | How Tampa Bay's Hard Water Is Silently Killing Your Water Heater |
| reverse-osmosis-benefits-tampa-bay | 2026-02-12 | Why Reverse Osmosis Drinking Water Is Worth It for Tampa Bay Families |
| water-testing-guide-tampa-bay | 2026-02-20 | Complete Water Testing Guide for Tampa Bay Homeowners |
| water-heater-installation-cost-tampa-bay | 2026-04-19 | Water Heater Installation Cost in Tampa Bay, FL (2026 Guide) |
| best-water-softener-tampa-bay | 2026-04-19 | Best Water Softener for Tampa Bay Homes (2026 Guide) |
| commercial-water-treatment-tampa-bay | 2026-04-19 | Commercial Water Treatment for Tampa Bay Restaurants & Businesses |
| tampa-bay-water-sources-whats-in-your-tap | 2026-04-21 | Tampa Bay Water Sources: What's Actually in Your Tap |
| plant-city-rural-hillsborough-well-water | 2026-04-20 | Plant City and Rural Hillsborough Well Water: Strawberries, Nitrates, and the Floridan Aquifer |
| brackish-wells-apollo-beach-ruskin-saltwater-intrusion | 2026-04-19 | Brackish Wells in Apollo Beach and Ruskin: The SWUCA, SHARP, and South Hillsborough |
| restaurant-brewery-water-treatment-tampa-bay | 2026-04-18 | Restaurant and Brewery Water Treatment in Tampa Bay |
| hard-water-tampa-water-heaters-tank-vs-tankless | 2026-04-17 | Hard Water and Tampa Water Heaters: Tank vs. Tankless and the Warranty Threshold |
| (one more, see source) | — | — |

`BlogPost` schema includes `slug`, `title`, `excerpt`, `date`, `author`, `content`. There is **no `metaDescription` field**, so the article detail route either auto-derives from `excerpt` or falls back to layout default.

### Generated blog (`src/lib/blog-posts.generated.json`)

Five FaxStrive cross-site templated posts also exist as JSON entries (signs-you-need-water-filtration, hard-water-guide-hillsborough-county, water-quality-hillsborough-county, reverse-osmosis-vs-water-softener, water-softener-maintenance-guide). Each contains em-dashes (see Section 6).

---

## 2. Per-Page Scoring (1, low → 5, excellent)

| Path | Title | Meta | Fresh | EEAT | Agg |
|---|---|---|---|---|---|
| / (home) | 4 | 4 | 3 | 4 | 15 |
| /water-softener | 4 | 4 | 3 | 4 | 15 |
| /water-filtration | 4 | 4 | 3 | 4 | 15 |
| /whole-house-filtration | 4 | 4 | 3 | 4 | 15 |
| /water-treatment | 4 | 3 | 3 | 3 | 13 |
| /water-testing | 4 | 4 | 3 | 4 | 15 |
| /well-water-treatment | 4 | 4 | 3 | 4 | 15 |
| /reverse-osmosis | 4 | 4 | 3 | 4 | 15 |
| /service-areas | 4 | 4 | 3 | 3 | 14 |
| /services (hub) | 4 | 4 | 3 | 4 | 15 |
| /services/water-softeners | 4 | 4 | 3 | 4 | 15 |
| /services/reverse-osmosis | 4 | 4 | 3 | 4 | 15 |
| /services/well-water | 4 | 4 | 3 | 4 | 15 |
| /services/water-heater-installation | 4 | 4 | 3 | 4 | 15 |
| /services/leak-repair | 4 | 3 | 3 | 3 | 13 |
| /services/commercial-plumbing | 4 | 4 | 3 | 3 | 14 |
| /services/jusicare | 5 | 4 | 4 | 4 | 17 |
| /services/water-testing | 4 | 4 | 3 | 4 | 15 |
| /services/water-filtration | 4 | 4 | 3 | 4 | 15 |
| /water-softener-tampa-fl | 4 | 4 | 3 | 4 | 15 |
| /water-softener-st-petersburg-fl | 4 | 4 | 3 | 4 | 15 |
| /water-softener-clearwater-fl | 4 | 4 | 3 | 3 | 14 |
| /water-softener-brandon-fl | 4 | 4 | 3 | 3 | 14 |
| /water-softener-sarasota-fl | 4 | 4 | 3 | 3 | 14 |
| /water-softener-in-hillsborough-county-fl | 4 | 4 | 3 | 4 | 15 |
| /water-softener-in-pinellas-county-fl | 4 | 4 | 3 | 4 | 15 |
| /(pages)/about | 4 | 4 | 3 | 4 | 15 |
| /(pages)/contact | 4 | 4 | 3 | 3 | 14 |
| /(pages)/faq | 4 | 4 | 3 | 3 | 14 |
| /(pages)/blog | 4 | 4 | 3 | 3 | 14 |
| /(pages)/pricing | 4 | 4 | 4 | 4 | 16 |
| /(pages)/certifications | 5 | 5 | 4 | 5 | 19 |
| /(pages)/testimonials | 5 | 5 | 4 | 5 | 19 |
| /(pages)/gallery | 4 | 3 | 2 | 3 | 12 |
| /(pages)/before-after | 4 | 4 | 3 | 4 | 15 |
| /(pages)/service-area | 4 | 4 | 3 | 3 | 14 |
| /(pages)/privacy-policy | 4 | 3 | n/a | 2 | 9 |
| /(pages)/terms-of-service | 4 | 3 | n/a | 2 | 9 |

### Articles (14)

| Slug | Title | Meta (from excerpt) | Fresh | EEAT | Agg |
|---|---|---|---|---|---|
| hard-water-tampa-bay-guide | 4 | 3 | 3 | 4 | 14 |
| well-water-treatment-hillsborough-county | 5 | 4 | 3 | 4 | 16 |
| water-heater-scale-tampa-bay | 5 | 4 | 3 | 4 | 16 |
| reverse-osmosis-benefits-tampa-bay | 4 | 3 | 3 | 4 | 14 |
| water-testing-guide-tampa-bay | 4 | 3 | 3 | 4 | 14 |
| water-heater-installation-cost-tampa-bay | 5 | 4 | 4 | 4 | 17 |
| best-water-softener-tampa-bay | 5 | 5 | 4 | 4 | 18 |
| commercial-water-treatment-tampa-bay | 5 | 5 | 4 | 4 | 18 |
| tampa-bay-water-sources-whats-in-your-tap | 5 | 5 | 5 | 5 | 20 |
| plant-city-rural-hillsborough-well-water | 5 | 5 | 5 | 5 | 20 |
| brackish-wells-apollo-beach-ruskin-saltwater-intrusion | 5 | 5 | 5 | 5 | 20 |
| restaurant-brewery-water-treatment-tampa-bay | 5 | 5 | 5 | 5 | 20 |
| hard-water-tampa-water-heaters-tank-vs-tankless | 5 | 5 | 5 | 5 | 20 |

Highest blog-content quality of the four batch-1 sites. The 2026-04-17 to 2026-04-21 batch (5 posts) is template-grade.

---

## 3. Top 5 Refresh Candidates

| Rank | Page | Why |
|---|---|---|
| 1 | `BlogPost` schema upgrade + 14 article metaDescriptions | `posts.ts` has no `metaDescription` field. Articles likely emit auto-derived metas from `excerpt` or fall back to layout default. Adding explicit per-post `metaDescription` + `dateModified` unlocks 14 article rankings simultaneously. |
| 2 | /(pages)/privacy-policy + /(pages)/terms-of-service | Decent titles but bare-minimum metas. Smaller lift; flagged for the consistency pass. |
| 3 | 5 templated FaxStrive posts in `blog-posts.generated.json` | These ship with em-dashes and likely surface on the blog index. Either scrub or unpublish. |
| 4 | / (home), `(pages)/page.tsx` | Title is fine but the description (`description:` truncated in our sweep) needs to surface 2,500-review count and 5.0-star rating from CLAUDE.md, plus the (813) 303-0515 phone. Confirmed trust signals = highest CTR lift on the homepage. |
| 5 | 7 location pages (Tampa, St. Pete, Clearwater, Brandon, Sarasota, Hillsborough County, Pinellas County) | All ship similar `Water Softener Installation {City}, FL \| Jusi H2O` titles. Refresh per-page metas with 2 rotating variants to avoid duplicate-meta GSC flag. Add Tampa Bay Water 10-18 GPG hardness anchor (verified from article body) per city. |

---

## 4. Proposed New Title + Meta (Top 5)

All ≤60 / ≤160 chars, no em-dashes. Claims preserved: founded 2011, Marquis Pendergrass, 2,500 reviews, 5.0 stars, 7 NSF certs, WQA, 15+ years, 50-mile radius, Tampa Bay 10-18 GPG hardness (from article body).

**1. Per-article `metaDescription` backfill (14 articles)**

Extend `BlogPost` schema in `src/lib/blog-posts.ts` to include `metaDescription: string` (≤160 chars) and `dateModified: string`. Sample backfills for the 5 weaker articles:

- hard-water-tampa-bay-guide: `Tampa Bay water runs 10 to 18 GPG, well into the very-hard range. Here is what scale costs your appliances and the softener fix from Jusi H2O.` (140 chars)
- reverse-osmosis-benefits-tampa-bay: `Why reverse osmosis is worth it for Tampa Bay families: TDS, chloramines, lead, and PFAS removal. Installed by Marquis Pendergrass since 2011.` (143 chars)
- water-testing-guide-tampa-bay: `What to test for in Tampa Bay tap water and private wells: hardness, chloramines, lead, bacteria, and nitrates. Free in-home water test from Jusi H2O.` (152 chars)
- hard-water-tampa-bay-guide (alt): same as above; the existing excerpts are usable but only if exported as `metaDescription`.

**2. /(pages)/privacy-policy + /(pages)/terms-of-service**
- Privacy meta: `How Jusi H2O collects, stores, and protects customer data, including SMS terms, across our Tampa Bay water treatment service.` (124 chars)
- Terms meta: `Terms governing water treatment installations, warranties, plumbing, financing, and service work performed by Jusi H2O across Tampa Bay since 2011.` (149 chars)

**3. Generated blog cleanup**

Either remove all 5 entries from `blog-posts.generated.json` or scrub the em-dashes (see Em-Dash Audit). If kept, run the same `metaDescription` backfill on each.

**4. / (home)**
- Title (keep current page-level): `Water Filtration and Softener Experts in Tampa Bay` (50 chars; comma form, replaces "&")
- Meta: `Tampa Bay water filtration and softener installation by Marquis Pendergrass since 2011. 2,500 five-star reviews, 7 NSF certifications, WQA member. Free water test.` (165 chars; trim "WQA member" to fit 160)

**5. 7 location pages, two-variant rotating template**

- Title (existing form is fine without em-dashes): `Water Softener Installation in {City}, FL` (avg 45 chars)
- Meta variant A: `Tampa Bay hard water averages 10 to 18 GPG. Jusi H2O installs NSF-certified water softeners in {City}, FL with a 5.0-star track record and free in-home test.` (~158 chars)
- Meta variant B: `Local water softener installation in {City}, FL by Marquis Pendergrass and the Jusi H2O team. 15+ years in Tampa Bay, 7 NSF certifications, free water test.` (~157 chars)

---

## 5. Per-Page Refresh Playbook

### 1. BlogPost schema + 14 article metas
- Extend `BlogPost` interface in `src/lib/blog-posts.ts`: add `metaDescription: string`, `dateModified: string`, `metaTitle?: string`.
- Backfill all 14 posts with explicit `metaDescription` (samples above; for the 5 strongest 2026-04+ posts the existing `excerpt` is usable verbatim as `metaDescription` if ≤160 chars).
- Update `app/(pages)/blog/[slug]/page.tsx` `generateMetadata` to consume the new fields.
- Add `Article` JSON-LD with `author: { @type: Person, name: "Marquis Pendergrass" }`, `datePublished`, `dateModified`, `publisher`.

### 2. /privacy-policy + /terms-of-service
- Rewrite metas per Section 4.
- No structural change required.

### 3. Generated blog scrub
- Open `src/lib/blog-posts.generated.json`.
- For the 5 entries with em-dashes (water-quality-hillsborough-county, hard-water-guide-hillsborough-county, signs-you-need-water-filtration, reverse-osmosis-vs-water-softener, water-softener-maintenance-guide): either replace ` — ` with `, ` in body copy or unpublish from the blog index.
- Confirm with owner whether these generated posts should remain at all (they are FaxStrive cross-site templates).

### 4. Home
- Update `(pages)/page.tsx` description copy per Section 4.
- Add `LocalBusiness` schema with `aggregateRating { ratingValue: "5.0", reviewCount: "2500" }` referencing the verified CLAUDE.md numbers (must match the GBP rating before shipping; do not invent if GBP rating differs).

### 5. 7 location pages
- Rotate two meta variants to break duplicate-meta pattern.
- Per city, add one specific local utility name: Tampa Bay Water (regional), City of Tampa Water (Tampa), Pinellas County Utilities (St. Pete, Clearwater), Hillsborough County Public Utilities (Brandon), Manatee County Utilities (Sarasota approach), or the cited Floridan Aquifer / SWUCA / SHARP / Apollo Beach references already published in the 2026-04 articles.
- Internal-link each city page to the most-relevant existing article (e.g. Tampa → `tampa-bay-water-sources-whats-in-your-tap`, Hillsborough County → `plant-city-rural-hillsborough-well-water`, Brandon → `hard-water-tampa-bay-guide`).

---

## 6. Sitewide Metatag and Pattern Findings

**Critical**
- **`BlogPost` schema lacks `metaDescription`, `dateModified`, `metaTitle`.** Article detail pages cannot ship explicit, hand-tuned metas without a schema extension. Highest single technical-content lift on the site.
- **Generated blog (`blog-posts.generated.json`) ships templated FaxStrive cross-site posts with em-dashes.** 5 entries. Decide republish vs unpublish before any Lane-D content sweep.

**High**
- **109 em-dashes inside `src/lib/blog-posts.ts`** (the real 14-post file authored by Marquis Pendergrass). These are inside body `content` strings rather than titles or metas, but the FaxStrive blog template forbids em-dashes anywhere. Strip pass required across all 14 article bodies.
- **Page-level metadata is generally strong.** No placeholder copy was found, no "Home at Jusi H2O" style boilerplate. This is the cleanest of the four batch-1 sites on metadata hygiene.
- **No duplicate meta description pattern at scale.** The 7 location pages each carry distinct city-specific metas, but they are similar enough that a 2-variant rotation is still worthwhile.

**Medium**
- **/(pages)/gallery description weak** (placeholder feel; not captured fully here, verify next pass).
- **Some `/(pages)/services/` route titles use "&"** (e.g. "Water Heater Installation & Replacement Tampa"). Decide consistency policy: spell out "and" in titles per the FaxStrive blog template, or keep "&" for brevity. Currently mixed.
- **Trust-signal numbers (2,500 reviews, 5.0 stars) appear in copy** but may not be wired into `aggregateRating` schema. Confirm before next pass.

**Low**
- **Layout default home title** (`Jusi H2O | Water Filtration Tampa Bay`) is 38 chars, leaving room for "Marquis Pendergrass" or "Since 2011" anchor. Consider extending to ~55 chars.
- **/services duplicates** between the flat routes (`/water-softener`, `/water-filtration`, etc.) and the grouped routes (`/(pages)/services/water-softeners`, etc.). Confirm whether both surface in the sitemap and which is canonical. Risk of self-cannibalization.

---

## Em-Dash Audit

**Total occurrences across `src/`: 373** across **28 files** (TSX 21, TS 2, JSON 5 generated blog posts).

Top offenders:

| File | Em-dashes |
|---|---|
| `src/lib/blog-posts.ts` | 109 (article body copy across 14 posts) |
| `src/app/(pages)/certifications/page.tsx` | 18 |
| `src/app/water-testing/page.tsx` | 12 |
| `src/app/water-softener/page.tsx` | 12 |
| `src/app/reverse-osmosis/page.tsx` | 12 |
| `src/app/whole-house-filtration/page.tsx` | 11 |
| `src/app/well-water-treatment/page.tsx` | 10 |
| `src/app/water-softener-st-petersburg-fl/page.tsx` | 10 |
| `src/app/water-softener-in-pinellas-county-fl/page.tsx` | 9 |
| `src/app/water-softener-tampa-fl/page.tsx` | 8 |
| 5 × `blog-posts.generated.json` entries | 1 each |

This is the **highest em-dash count of the four batch-1 sites**. The bulk (109) is inside the 14 long-form blog post bodies, all written by Marquis Pendergrass; another 100+ are inside service-page body copy.

Action: ship a `scripts/strip-em-dashes.ts` codemod. Sweep `src/**` with two passes:
1. **Title and meta fields only** (top priority, fast win, low risk).
2. **Body copy in `blog-posts.ts` + service pages** (manual review per replacement because some em-dashes carry semantic weight; comma vs colon vs period vs " and " all valid substitutes).

Do NOT auto-replace inside numeric ranges (none verified in shipping copy on this site, but the `10–18 GPG` style appears in one article body and uses an en-dash, which is allowed by the template).

---

_SEOMAN Lane C audit batch 1, 2026-05-15_
