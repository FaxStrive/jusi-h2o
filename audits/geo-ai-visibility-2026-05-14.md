# GEO / AI Visibility Audit — jusih2o.com

**Date:** 2026-05-14
**Auditor:** SEOMAN GEO Agent
**Target:** https://jusih2o.com
**Business:** Jusi H2O — Tampa Bay water filtration / softeners / RO, founded 2011 by Marquis Pendergrass

---

## AI Visibility Score: 51 / 100 — Fair

Solid on-page technical hygiene (robots, llms.txt, schema, SSR) is being held back by near-zero off-site entity signals. The site is well-prepared to *be cited* but AI models have almost no third-party corroboration to *recognize the entity* in the first place.

### Score Breakdown

| Component | Score | Weight | Weighted |
|---|---|---|---|
| Citability | 74 / 100 | 35% | 25.9 |
| Brand Mentions | 10 / 100 | 30% | 3.0 |
| Crawler Access | 60 / 100 | 25% | 15.0 |
| llms.txt | 75 / 100 | 10% | 7.5 |
| **Total** | | | **~51** |

Interpretation: Fair — Some AI visibility but significant gaps. The on-site work is genuinely good; the off-site entity gap is the limiting factor.

---

## 1. AI Citability — 74 / 100

The site has strong, AI-extractable answer blocks. Most content is in the 30–80 word range (shorter than the 134–167 optimum), but the answer-block quality, structural readability, and statistical density are high.

### Citation-ready passages (score ≥70)

1. **/certifications — Why Certifications Matter (NSF intro) — 86/100**
   > "The water treatment industry is largely unregulated at the federal level. Any company can claim their system 'removes 99% of contaminants' without independent verification. NSF certification changes that — it requires third-party testing that verifies a system actually performs as claimed…"
   Self-contained, original framing, defines its own terms, names the certifying body. Exactly the kind of passage Perplexity and ChatGPT pull verbatim.

2. **/certifications — NSF-44 definition block — 82/100**
   Definition + scope + applicability. AI engines love named-standard explainers because they answer "what is NSF-44 for a water softener" directly.

3. **Homepage — Water Facts statistics block — 80/100**
   Four stat callouts with named sources (USGS, NSF International, DOE, WQA). Statistical density is the strongest dimension here — every claim is sourced. Optimal for AI Overview citation.

4. **llms.txt — Softener vs Filter FAQ — 78/100**
   > "A water softener removes hardness minerals — calcium and magnesium — through ion exchange to prevent scale buildup. A water filter removes contaminants such as chlorine, sediment, heavy metals, and PFAS to improve taste, odor, and safety."
   Two-sentence direct answer, defines mechanism, lists specific contaminants. Textbook AI snippet bait.

5. **/services/reverse-osmosis — 4-stage RO explanation — 75/100**
   Numbered, structurally clean, each stage names what it removes. Good scannability and self-containment.

### Citation-unlikely areas (score ≤30)

- **Homepage hero ("Your Water. Tested. Treated. Trusted.") — 22/100.** Pure marketing copy. Zero answer value, zero stats, not extractable as a quotable passage.
- **/services/water-softeners "The Problem" cards — 28/100.** Each card is 1 sentence; lacks the 40–60 word density AI engines reward. Combined with the surrounding hero copy, this section reads as ad copy rather than reference content.
- **Most CTA-adjacent paragraphs — 25/100.** "Softer Water, Happier Home" / "Taste the Difference" — repeated throughout, dilutes the page's citation surface area.

### Citability dimension averages (across top 5 pages)

| Dimension | Avg | Notes |
|---|---|---|
| Answer Block Quality | 78 | Strong on certifications, FAQs, RO stages |
| Self-Containment | 75 | NSF/WQA defined, services explained |
| Structural Readability | 82 | Good H2/H3 hierarchy, bulleted feature lists |
| Statistical Density | 70 | Homepage stat callouts sourced, RO 99% claim repeated |
| Uniqueness | 60 | Few original/proprietary insights; mostly industry-standard explainers |
| **Weighted** | **74** | |

### Passage-length gap

Almost no paragraph on the site reaches the 134–167-word optimal AI-extraction window. Most sit at 30–80 words. This means individual passages will be cited as snippets but the site is not yet structured to dominate "explain X" long-form AI answers.

---

## 2. AI Crawler Access — 60 / 100

robots.txt is thoughtfully written but **blocks five training crawlers** — a defensible business call, but it costs points in this scoring model because it reduces the corpus AI systems train on.

| Crawler | Status | Notes |
|---|---|---|
| GPTBot (OpenAI training) | **Blocked** | `Disallow: /` |
| OAI-SearchBot | Allowed | Good — feeds ChatGPT Search index |
| ChatGPT-User | Allowed | User-triggered fetches OK |
| ClaudeBot (Anthropic training) | **Blocked** | `Disallow: /` |
| Claude-SearchBot | Allowed | Good |
| Claude-User | Allowed | Good |
| PerplexityBot | Allowed | Good — Perplexity is a top traffic source for GEO |
| Perplexity-User | Allowed | Good |
| Google-Extended (Gemini training) | Allowed | Good |
| Applebot-Extended | Allowed | Good |
| Amazonbot | Blocked | Minor signal |
| CCBot (Common Crawl) | **Blocked** | Significant — CCBot feeds many open-source LLMs |
| anthropic-ai (legacy) | Blocked | Redundant with ClaudeBot |
| Meta-ExternalAgent | Blocked | |
| cohere-ai | Blocked | |
| Sitemap | Referenced | `https://jusih2o.com/sitemap.xml` — good |

**Scoring:**
- Start 100
- GPTBot blocked: -15
- ClaudeBot blocked: -15
- CCBot blocked: -10 (training corpus)
- Sitemap present: +0 (no penalty)
- **= 60 / 100**

**Strategic note:** the "block training, allow search" split is a legitimate stance. If the business decides being in training corpora outweighs IP risk, unblocking GPTBot + ClaudeBot would raise this to 90.

---

## 3. llms.txt — 75 / 100

**Present, well-formed, and comprehensive.** This is the strongest single asset in the audit.

- Valid H1, blockquote description, H2 sections (`## About`, `## Services`, `## Service Areas`, `## FAQ`, `## Contact & Booking`, `## All Pages`).
- Links in correct markdown format with descriptions.
- Includes business identity (founder, year, address, phone, certifications).
- References `/llms-full.txt` and `/llms-qa.json` (both present, HTTP 200).
- FAQs are sized 40–60 words — ideal for AI Q&A surfacing.

**Minor gaps holding it back from 90+:**
- `## All Pages` section only lists the homepage — should enumerate all service pages, service-area pages, blog posts, certifications, pricing, about.
- No `## Optional` section for supplementary resources (industry guides, water-quality data).
- No `lastUpdated` metadata line (a non-spec convention some AI parsers prefer).
- Manatee/Sarasota/Polk county pages referenced as text but not as links — if those pages exist they should be linked; if they don't, this implies an internal-link gap.

---

## 4. Brand Authority — 10 / 100

This is the audit's most damaging finding. **For a business with 2,500+ five-star reviews and 15 years in market, the off-site entity signal is essentially zero.**

| Platform | Status | Evidence | Points |
|---|---|---|---|
| Wikipedia | **Absent** | API check `srsearch=Jusi H2O` → 0 results. `Marquis Pendergrass` → 0 relevant (only unrelated Rod Stewart / Emil Wilbekin entries). | 0 / 30 |
| Reddit | **Absent** | `site:reddit.com "jusi h2o"` → 0 results. No discussion in r/Tampa, r/StPetersburgFL, r/WaterTreatment, r/Plumbing. | 0 / 20 |
| YouTube | **Absent** | `site:youtube.com "jusi h2o"` → 0 results. No official channel, no third-party reviews, no install videos. This is the **0.737 correlation signal** — the single strongest predictor of AI visibility, and it is zero. | 0 / 15 |
| LinkedIn | **Absent** | `linkedin.com/company/jusi-h2o` → 404. `site:linkedin.com "jusi h2o"` → 0 results. No company page, no founder profile linkage. | 0 / 10 |
| Industry / niche | **Minimal** | Site exists, Google Business presence (implied by 2,500 reviews) but no presence on WQA member directory pulled in search, no G2/Trustpilot/Capterra (not applicable to local services anyway), no Angi/HomeAdvisor citations surfaced. | 10 / 25 |

**Score: 10 / 100.**

The implication is severe: AI models that have not crawled jusih2o.com directly have **no independent corroborating source** to recognize Jusi H2O as a real entity, verify trust claims, or distinguish it from generically named competitors ("Jusi H2O" vs "H2O Heroes" vs "Pure H2O" vs "EcoWater Tampa"). All five trust signals the business owns — 2,500 reviews, 5.0 stars, 7 NSF certs, WQA cert, founder name, 50-mile radius — are unverifiable from outside the domain.

---

## Findings by Severity

### CRITICAL

- **C1. Zero off-site entity footprint.** No Wikipedia, no Wikidata, no LinkedIn company page, no YouTube channel, no Reddit mentions. AI engines have no way to verify Jusi H2O exists beyond the .com itself. This caps practical AI visibility regardless of how good the on-site content gets.
- **C2. Founder is invisible.** Marquis Pendergrass is named on /about and in llms.txt but does not appear in any third-party source AI models index. No LinkedIn profile linkage, no industry press, no podcast appearances, no expert-quote citations. E-E-A-T "Experience" and "Authoritativeness" signals are unsourceable.

### HIGH

- **H1. No LinkedIn Company Page.** A free, 30-minute fix. LinkedIn pages are crawled by every major AI search system and are a primary Knowledge Graph seed.
- **H2. No YouTube presence.** 0.737 correlation with AI citation per SEOMAN knowledge base. Even 4–6 short install/water-test videos would move this needle.
- **H3. CCBot blocked.** Common Crawl is the corpus behind Mistral, Llama, and most open-source models. If training-corpus inclusion is desired, unblock.
- **H4. Schema is `Plumber` not `LocalBusiness` with `founder`, `sameAs`, and `award` properties.** The Plumber schema lacks `sameAs` entity links to LinkedIn/YouTube/GBP/Wikidata — these are the primary signals AI models use to cross-link entities.

### MEDIUM

- **M1. llms.txt `All Pages` is a stub.** Only the homepage is listed. Should enumerate every URL in sitemap.xml.
- **M2. Passage length skewed short.** Few paragraphs hit the 134–167 word AI-extraction sweet spot. Service pages and the about page are 30–80 words per block.
- **M3. No author/expert byline on any page.** No `Person` schema for Marquis Pendergrass, no /team or /our-experts page, no individual technician profiles. AI engines reward identified experts.
- **M4. No FAQPage schema detected on FAQ blocks** (water-softeners and RO pages have FAQ headings but no JSON-LD).
- **M5. No `speakable` extension on service pages.** Homepage has it; service pages do not.

### LOW

- **L1. `dateModified` is on schema but no visible "last updated" date on content pages.** Hurts freshness signal.
- **L2. No `BreadcrumbList` schema detected on inner pages.**
- **L3. GPTBot/ClaudeBot training crawlers blocked.** Defensible policy — flag only as a tradeoff to revisit.

---

## Top 5 Priority Fixes (Highest Impact)

### 1. [CRITICAL] Build the off-site entity graph (estimated lift: +20 to +30 visibility points)
Create within 30 days:
- **LinkedIn Company Page** for Jusi H2O (logo, description matching llms.txt, founder tagged, address, NSF/WQA badges).
- **Marquis Pendergrass LinkedIn profile** with "Founder, Jusi H2O" headline and link back.
- **YouTube channel** with 6 starter videos: free water test walkthrough, NSF-44 explained, hard water before/after, RO install timelapse, JusiCare+ overview, founder intro.
- **Wikidata entry** for Jusi H2O (Wikipedia article won't pass notability yet, but Wikidata will — and ChatGPT/Gemini both query Wikidata).
- Then add `sameAs` array in the homepage `LocalBusiness` schema pointing to all of the above + GBP + Yelp + BBB.

### 2. [CRITICAL] Add author/expertise infrastructure (lift: +5 to +10)
- Build `/about/marquis-pendergrass` (or `/team/founder`) with full bio, certifications, photo, years in industry.
- Add `Person` JSON-LD schema with `sameAs` to LinkedIn.
- Add author bylines to all blog posts and the water-quality explainer content.

### 3. [HIGH] Upgrade schema from Plumber → LocalBusiness with full entity linking (lift: +3 to +5)
- Add `sameAs` array (LinkedIn, YouTube, GBP CID, Facebook, Yelp, BBB, Wikidata Q-ID once created).
- Add `founder` (Person reference), `foundingDate` 2011, `award` array for the 7 NSF certs + WQA, `numberOfEmployees`, `areaServed` as `AdministrativeArea` array for the five counties.
- Add `FAQPage` schema to /services/water-softeners and /services/reverse-osmosis FAQ sections.
- Add `BreadcrumbList` to all inner pages.

### 4. [HIGH] Expand citation-ready passage density (lift: +5 to +8)
- Rewrite the top 3 commercially-important pages (water-softeners, reverse-osmosis, water-filtration) so each H2 section opens with a 140–160 word "BLUF" paragraph that directly answers a query.
- Each page should contain at least 2 quote-ready 150-word blocks loaded with named standards, numerical claims, and time/cost data.
- Target queries: "what is NSF-44 certification", "how often does a water softener need salt", "does reverse osmosis remove PFAS", "best water softener size for Tampa Bay".

### 5. [HIGH] Seed organic Reddit + forum presence (lift: +3 to +5)
- Marquis (or a designated staff member) answers 8–12 substantive questions over 90 days in r/Tampa, r/StPetersburgFL, r/HomeImprovement, r/Plumbing, r/WaterTreatment. No promotion — just expert answers with NSF-cert backed accuracy.
- Same approach on Quora and Nextdoor.
- These are the platforms AI models scrape for "real human" opinion on local services.

---

## Quick Wins (under 1 day each)

- Flesh out `## All Pages` in llms.txt to include every sitemap URL.
- Add `lastUpdated:` line to llms.txt.
- Add `FAQPage` JSON-LD to all pages that already render FAQ accordions.
- Add `speakable` schema to all service pages (homepage already has it).
- Unblock CCBot in robots.txt (if business comfortable).

---

## Files / Artifacts

- Robots: `/tmp/jusi_robots.txt` (analyzed)
- llms.txt: `/tmp/jusi_llms.txt` (analyzed, valid)
- Homepage HTML: `/tmp/jusi_home.html` (109 KB, 4 JSON-LD blocks detected: Plumber, WebSite, ItemList, WebPage with speakable)
- Service pages: `/tmp/jusi_softeners.html`, `/tmp/jusi_ro.html`, `/tmp/jusi_cert.html`, `/tmp/jusi_about.html`
- Sitemap: `https://jusih2o.com/sitemap.xml` (valid, lastmod fresh through 2026-04-19)

## Verification Notes

- Wikipedia API queried directly (not via web search) for "Jusi H2O", "Jusi H2o", "JusiH2O", "Marquis Pendergrass" — all returned zero matches or unrelated entities.
- LinkedIn `linkedin.com/company/jusi-h2o` returned HTTP 404 (no page exists).
- YouTube and Reddit `site:` searches returned zero results.
- All on-site content was fetched server-rendered (HTML payload contains visible copy without JS execution) — good for AI crawler access.
