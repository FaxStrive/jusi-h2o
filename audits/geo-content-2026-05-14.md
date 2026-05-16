# Jusi H2O — GEO Content Quality Audit (E-E-A-T)

**Domain:** https://jusih2o.com
**Date:** 2026-05-14
**Auditor:** SEOMAN GEO Content skill
**Framework:** Google E-E-A-T (2026 weights: Trustworthiness 30%, Authoritativeness 25%, Expertise 25%, Experience 20%)
**Sample size:** 11 pages (home, about, 3 services, 3 blog, 3 local-grid)

---

## Headline Score

**Content Score: 62 / 100 — Fair (mid-tier; strong technical foundation, severe author/citation gaps)**

| Dimension | Raw /25 | Weighted | Notes |
|---|---|---|---|
| Trustworthiness (30%) | 16/25 | 19.2/30 | NAP, HTTPS, license claim, privacy/TOS, schema ratings present; no inline sources, no editorial policy, no FTC/affiliate disclosure pattern, no individual author identification |
| Authoritativeness (25%) | 15/25 | 15.0/25 | Strong local geographic authority (real GPG numbers, real aquifer references, neighborhood depth); weak external validation, no media mentions, no industry awards visible |
| Expertise (25%) | 13/25 | 13.0/25 | Marquis Pendergrass named once on /about and Tampa city page; no individual bios, no credentials per technician, no author pages, no Person schema. Founder/owner is real (per memory) but barely surfaced |
| Experience (20%) | 12/25 | 9.6/20 | Two recent blog posts (brackish wells, hard-water heater) show genuine first-hand technical knowledge (Rinnai TB-114, AWWA 2009, SWUCA/SHARP, 2024 CCR numbers). Service pages remain generic with no case studies |
| **Total Weighted** | — | **56.8** | — |
| Content metrics adjust | +3 | | Strong heading structure, decent depth on flagship posts |
| AI-content / freshness / topical authority | +2 | | Minimal AI red-flags; freshness strong on blog; templated city pages drag |
| **Final** | — | **62 / 100** | |

---

## Sample Pages

| URL | Type | Words | Date | Author | Citations |
|---|---|---|---|---|---|
| `/` | home | ~2,300 | none | none | USGS, NSF, WQA, DOE (mentioned, not linked) |
| `/about` | trust | ~850 | none | Marquis Pendergrass (founder) | none |
| `/services/water-softeners` | pillar | ~850 | none | none | **0** |
| `/services/reverse-osmosis` | pillar | ~1,300 | none | none | **0** |
| `/services/well-water` | pillar | ~1,900 | none | none | **0** |
| `/blog/brackish-wells-apollo-beach-ruskin-saltwater-intrusion` | article | ~1,800 | 2026-04-19 | none | SWFWMD, EPA (named, not linked) |
| `/blog/tampa-bay-water-sources-whats-in-your-tap` | article | ~950 | 2026-04-21 | none | 2024 CCR (named, not linked) |
| `/blog/hard-water-tampa-water-heaters-tank-vs-tankless` | article | ~1,800 | 2026-04-17 | none | Rinnai TB-114, AWWA/Battelle 2009, Noritz, Navien |
| `/water-softener-tampa-fl` | local-grid | ~1,100 | none | "Marquis Pendergrass and the Jusi H2O team" | USGS (mentioned) |
| `/water-softener-clearwater-fl` | local-grid | ~620 | none | none | none |
| `/water-softener-brandon-fl` | local-grid | ~550 | none | none | none |

---

## E-E-A-T Detail

### Experience (12/25)
**Strong signals (recent blog posts only):**
- `/blog/hard-water-tampa-water-heaters-tank-vs-tankless` cites Rinnai TB-114 by document number and AWWA/Battelle 2009 — real first-hand integrator-level knowledge.
- `/blog/brackish-wells-...` references SWUCA management area (708 sq mi), 14 MGD figure, SHARP recovery program — content that could only be written by someone who has worked Apollo Beach/Ruskin wells.
- Tampa city page lists South Tampa, Hyde Park, Palma Ceia, Davis Islands with 15–25 GPG specificity.

**Missing:**
- No customer case studies (zero "we installed X for the Smith family in Brandon, here is the before/after iron ppm").
- No install-count breakdown by service line.
- No project photo galleries with dated captions.
- "2,500+ families" / "5.0 reviews since 2011" repeated but not tied to any specific Google Place ID or BBB profile link on-page.
- Service pillar pages contain zero case-study language.

### Expertise (13/25)
**Present:**
- Founder Marquis Pendergrass named on /about and Tampa city page ("Marquis Pendergrass and the Jusi H2O team").
- WQA + NSF-42/44/53/55/58/401 certifications listed sitewide.
- "Licensed & Insured in Florida" badge.
- `EducationalOccupationalCredential` schema type present.

**Missing — biggest gap in the audit:**
- **No author byline on any blog post.** Eleven sampled pages, zero individual bylines.
- **No author pages** (`/author/marquis-pendergrass` or `/team/*` do not exist).
- **No technician bios** ("10+ Expert Technicians" claimed without one named).
- **No Person schema** for Marquis or any staff.
- **No Florida state license number visible** (CFC plumbing contractor license should be displayed — currently the page just says "Licensed").
- **No years-of-experience per person** (only company-level "15+ years").

### Authoritativeness (15/25)
**Present:**
- 18 schema types deployed including `Plumber`, `AggregateRating`, `SpeakableSpecification`, `ContactPoint`, `OpeningHoursSpecification`. This is above average for the niche.
- Local geographic depth: real GPG ranges differ correctly by city (Tampa 15–25, Clearwater 10–16, Brandon 15–25).
- References Floridan Aquifer, Hillsborough River, Pinellas County Utilities, Tampa Bay Water utility — correct hyperlocal entities.
- `sameAs` entity links present (schema includes external profile linking).

**Missing:**
- **No external citations are hyperlinked** — every "USGS / EPA / WQA / SWFWMD / 2024 CCR" reference is text-only, which kills the SEO and GEO benefit.
- No third-party media mentions surfaced (no "as seen in Tampa Bay Times / ABC Action News").
- No industry-association membership badges beyond WQA (no FWQA, no local plumbing association).
- No Wikipedia/Wikidata presence detectable for Jusi H2O entity.

### Trustworthiness (16/25)
**Present:**
- HTTPS, privacy-policy 200, terms-of-service 200.
- NAP: 7901 4th St N Ste 300, St. Petersburg FL 33702 / (813) 303-0515 / support@jusih2o.com — consistent sitewide.
- AggregateRating schema (5.0 / 2,500+ reviews claim).
- Copyright span "2011–2026" supports the 15+ years claim.

**Missing — critical:**
- **No editorial / correction policy** page.
- **No FTC affiliate disclosure** on any blog post (recommended even when none — explicit "this article contains no affiliate links" satisfies T04).
- **No "last reviewed" dates** on service pages or blog (only "published" dates on blog).
- **No Florida plumbing contractor license number** displayed (e.g., "CFC1234567").
- **No BBB profile link or Google Business Profile link** in footer.
- **No individual author** = no accountability — high T-axis risk under the 2026 trust weighting (30%).

---

## Content Metrics

| Metric | Median | Assessment |
|---|---|---|
| Word count, service pillars | ~1,300 | Standard. RO and well-water acceptable; softeners page **thin at ~850** |
| Word count, blog posts | ~1,800 | Below SEOMAN template target of 2,200–2,500 |
| Word count, local-grid | 550–1,100 | Clearwater + Brandon **thin** (<800); Tampa adequate |
| Heading hierarchy | One H1, logical H2/H3 | Pass |
| Readability (Flesch est. from blog samples) | ~55 | Fairly difficult — appropriate for technical buyer audience but tight for a homeowner; some sentences run >25 words |
| Internal links | 15–25 per page | Below the SEOMAN template requirement of 15+ on blog posts — borderline; service pages OK |
| Images | Used (hero only on blog; stock on /about) | No dated install photos = experience gap |

---

## AI Content Indicators

**Assessment: Likely Human or Lightly Edited.**

| Indicator | Found? | Detail |
|---|---|---|
| Generic phrasing ("delve", "tapestry", "realm", "ever-evolving") | **No** | Zero hits across 11 pages |
| "In today's" / "It's important to note" | 1 hit | "important to note" — 1 instance in hard-water-heater article |
| Lack of specifics | Mixed | Service pillar pages yes; blog posts no |
| No original data | Service pages yes; blog no | Blog posts cite Rinnai TB-114, AWWA 2009, SWUCA — real |
| Hedging overload | Mild | Brackish-wells post uses "typically / may be / often" but supported by data |
| No authorial voice | **Yes — sitewide** | Zero bylines, no first-person, no "we tested / we installed" narratives |

**Em-dash rule violation (CLAUDE.md forbids `—`):**
- `/blog/hard-water-tampa-water-heaters-tank-vs-tankless`: **28 em-dashes**
- `/blog/tampa-bay-water-sources-whats-in-your-tap`: **5 em-dashes**
- `/blog/brackish-wells-apollo-beach-ruskin-saltwater-intrusion`: multiple em-dashes (including in H2 "SHARP — The Regional Recovery Project")

This violates the canonical FaxStrive editorial rule in `/Users/ezekiel/Desktop/SEOMAN/CLAUDE.md`. **All blog posts need em-dash purge.**

---

## Topical Authority

**Assessment: Moderate.**

- Content breadth: 17 blog posts visible in sitemap covering Tampa Bay sources, brackish wells, restaurant/brewery, well water, hard water + heaters — good local hub-and-spoke seed.
- Service pillars (softeners, RO, filtration, well, whole-house, testing) all exist — proper pillar/spoke structure.
- 7 local-grid pages: Tampa, St Pete, Clearwater, Brandon, Sarasota, Hillsborough Cty, Pinellas Cty — strong geo grid for the metro.
- Hub-and-spoke linking exists but not yet dense — blog posts do not consistently link back to their parent pillar with optimized anchors.
- Gaps: no `/blog` posts yet on chlorine taste, lead service lines, PFAS (rising YMYL topic), septic+well combo, vacation-home water systems.

---

## Content Freshness

| Asset | Date | Age | Time-sensitive? | Verdict |
|---|---|---|---|---|
| Homepage | 2026-04-19 | ~25 days | Medium | Current |
| Service pages | 2026-03-18 | ~57 days | Low | Acceptable |
| Recent blog (3 sampled) | 2026-04-17 to 2026-04-21 | <30 days | High (CCR numbers, May 2025 chlorine burn) | Excellent |
| About page | 2026-04-19 | ~25 days | Low | Current |

**Strength of the audit.** Freshness is genuinely good — recent CCR + May 2025 chloramine burn references show active maintenance.

---

## CRITICAL FINDING (not content but blocks GEO ROI)

**robots.txt blocks the AI training crawlers Jusi H2O most needs to be cited by:**

```
User-agent: GPTBot       Disallow: /
User-agent: ClaudeBot    Disallow: /
User-agent: anthropic-ai Disallow: /
User-agent: CCBot        Disallow: /
User-agent: Meta-ExternalAgent  Disallow: /
User-agent: Amazonbot    Disallow: /
```

This is the single biggest blocker for AI citation visibility — no matter how good the E-E-A-T work, ChatGPT and Claude **cannot index this site**. Only `Google-Extended` and `Applebot-Extended` are allowed. Per SEOMAN knowledge base: AI crawlers do not execute JS *and they must be allowed first*. Flagged out of scope but absolutely must be raised.

---

## Top 10 Findings

| # | Severity | Finding |
|---|---|---|
| 1 | **CRITICAL** | GPTBot, ClaudeBot, anthropic-ai, CCBot, Amazonbot, Meta-ExternalAgent all disallowed in robots.txt. Negates ~80% of the GEO citation opportunity regardless of content quality. |
| 2 | **CRITICAL** | Zero individual author bylines across 11 sampled pages despite a real, named founder (Marquis Pendergrass, per memory). T-axis (30% weight in 2026) takes the biggest hit here. |
| 3 | **HIGH** | No external citations are hyperlinked anywhere. Rinnai TB-114, AWWA 2009, SWUCA, SWFWMD, EPA, 2024 Tampa Bay Water CCR are all named in text but not linked — wasted authority signal. |
| 4 | **HIGH** | Service pillar pages (softeners, RO, well, etc.) carry **zero source citations and zero case studies**. Average ~1,000 words of pure marketing copy. Pillars should anchor the topical authority but currently undercut it. |
| 5 | **HIGH** | Em-dash violations sitewide (28 in one article alone). Violates the canonical FaxStrive editorial rule in SEOMAN CLAUDE.md. Needs scripted purge across the MDX content and components. |
| 6 | **HIGH** | No Florida plumbing contractor license number displayed. "Licensed & Insured" is a claim without a verifiable identifier. T-axis veto risk. |
| 7 | **MEDIUM** | Local-grid pages (Clearwater 620w, Brandon 550w) are thin. Below the 800-word threshold; Hillsborough/Pinellas county pages likely similar — risk Helpful Content classifier. |
| 8 | **MEDIUM** | No "last reviewed" / "last updated" dates on service or local-grid pages. Only blog has a publish date. AI engines weight freshness signals heavily. |
| 9 | **MEDIUM** | No FAQ schema on blog posts; site `/faq` page exists but is not in-context. The recent blog posts list FAQ-style H2s but do not surface FAQPage JSON-LD (and FAQ rich results are restricted to gov/health — but FAQPage in body still helps AI extraction). |
| 10 | **LOW** | Stock imagery on /about; no team photos despite 10+ technicians claimed. Authenticity gap. |

---

## Top 5 Fixes — Prioritized by Impact

### 1. Unblock AI crawlers in robots.txt (CRITICAL — 1 hour, max impact)
Change `Disallow: /` to `Allow: /` for: GPTBot, ClaudeBot, anthropic-ai, CCBot, Amazonbot, Meta-ExternalAgent, PerplexityBot (if listed). Keep Google-Extended/Applebot-Extended as Allow. Without this, every other content fix delivers no AI-citation lift.

### 2. Add real author byline + Person schema for Marquis Pendergrass (CRITICAL — 1 day)
- Build `/team/marquis-pendergrass` author page with: photo, FL plumbing contractor license number, WQA certification IDs, founding year, 1–2 paragraph bio, sameAs links to LinkedIn / Google Business Profile / BBB.
- Add Person JSON-LD on that page with `hasCredential`.
- Add byline + "Reviewed by Marquis Pendergrass, FL CFC#____" on every blog post and every service pillar.
- This alone moves T-axis from 16→20 and Ex-axis from 13→18.

### 3. Hyperlink every existing external citation (HIGH — half day)
Audit pass over the 3 recent blog posts plus any pillar that mentions a source. Convert text mentions to outbound links:
- Rinnai TB-114 → manufacturer URL
- AWWA/Battelle 2009 → AWWA reference
- SWUCA / SHARP → SWFWMD program pages
- Tampa Bay Water 2024 CCR → utility PDF
- USGS hardness map, EPA secondary standards → official URLs
Adds Authoritativeness without any new writing.

### 4. Em-dash purge + service-pillar enrichment pass (HIGH — 2–3 days)
- Run a content script over `/content/articles/*.mdx` and `/src/app/**/page.tsx` to replace `—` with commas/colons per FaxStrive rule.
- Re-write the 3 thinnest assets to ≥2,200 words with the SEOMAN blog template: softeners service page, Clearwater local-grid, Brandon local-grid. Each gets:
  - BLUF lead paragraph
  - Recommended-Method table (Tampa GPG → action)
  - "Call a professional if…" boundary section
  - 4–6 FAQ entries with FAQPage JSON-LD (in body, not for rich-results — gov/health restriction acknowledged, but AI engines still extract)
  - 15+ internal links
  - 2+ inline citations to authoritative sources
  - 1 mini case-study paragraph ("Last month we installed a 48,000-grain softener for a home in [neighborhood]; pre-test 22 GPG, post-test 0 GPG…")

### 5. Add editorial/trust infrastructure (MEDIUM — 1 day)
- Publish `/editorial-policy` (sourcing standards, correction process, review cadence).
- Publish `/disclosures` (FTC affiliate posture — even if "no affiliate income on blog content").
- Add "Last reviewed: 2026-05-14 by Marquis Pendergrass" to every service and local-grid page.
- Display FL license + WQA member IDs in the footer NAP block.

---

## Score Path

| Change | Projected Score |
|---|---|
| Current | 62 / 100 |
| + Unblock AI crawlers (Fix 1) | 62 (no content delta, but unlocks downstream ROI — separate GEO citation lift) |
| + Author + Person schema (Fix 2) | 70 |
| + Hyperlink citations (Fix 3) | 73 |
| + Em-dash purge + pillar enrichment (Fix 4) | 80 |
| + Editorial trust infra (Fix 5) | 84 |

Target after full retrofit: **80–85 / 100**, putting Jusi H2O in the top tier of the FaxStrive water portfolio for AI citability.

---

*Audit produced by SEOMAN geo-content skill. Methodology: WebFetch sampling of 11 representative URLs, robots.txt + schema introspection, manual E-E-A-T scoring against 2026 weights. Readability scoring is approximate; AI-content detection is signal-based, not definitive.*
