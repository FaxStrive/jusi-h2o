# GEO Platform Readiness Analysis — jusih2o.com

**Audit date:** 2026-05-14
**Target URL:** https://jusih2o.com
**Business:** Jusi H2O — Tampa Bay water treatment (Marquis Pendergrass, founded 2011)
**Service area:** Hillsborough, Pinellas, Manatee, Sarasota, Polk counties (FL)
**Top commercial queries audited against:** "water softener Tampa", "PFAS Tampa Bay water", "reverse osmosis Tampa", "well water Hillsborough county"

---

## Platform Readiness Analysis

**Platform Readiness Average: 56/100**

### Platform Scores Overview

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 64/100 | Fair |
| ChatGPT Web Search | 55/100 | Fair |
| Perplexity AI | 48/100 | Poor |
| Google Gemini | 58/100 | Fair |
| Bing Copilot | 53/100 | Fair |

**Strongest Platform:** Google AI Overviews (64/100). The site has clean Plumber/LocalBusiness JSON-LD, AggregateRating with 2,500+ reviews, a SpeakableSpecification block, an `data-bluf` answer-target pattern, and structured FAQ-style content via llms.txt. Local intent ("water softener Tampa") is well covered by county-specific pages.

**Weakest Platform:** Perplexity AI (48/100). Perplexity weighs Reddit, forum, and third-party community signals heavily and Jusi H2O has effectively zero detectable Reddit/Quora/StackExchange footprint. PerplexityBot is correctly allowed in robots.txt, but the surrounding community-validation layer is missing. Most Perplexity citations for Tampa water treatment queries currently go to Reddit threads, Tampa Bay Times articles, and EPA/USGS pages, not local installer sites.

---

### Google AI Overviews

**Score: 64/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Content Structure | 28/40 | H2s are descriptive but not question-shaped ("What's Really in Your Water?" is the closest match). `data-bluf` lead pattern present. Lists/steps schema (ItemList "3 Simple Steps") is well-formed. No comparison tables on home. FAQ content lives in llms.txt but is not mirrored as on-page FAQ HTML on the home page. |
| Source Authority | 18/30 | Niche local site, no detectable Wikipedia/Wikidata/news coverage; 2,500+ Google reviews and NSF/WQA certifications partially compensate. Ranking signals concentrated in geo-specific service pages (Hillsborough, Pinellas) — these are the realistic AIO candidates, not the home page. |
| Technical Signals | 18/30 | Clean Plumber, WebSite, ItemList, WebPage+Speakable JSON-LD. AggregateRating, OpeningHoursSpecification, GeoCoordinates, ContactPoint all present. SSR via Next.js (HTML carries content, not just hydration shell). Headings appear to skip cleanly. No Article/FAQPage schema on home (FAQPage is restricted by Google to gov/health since Aug 2023, so this is correct). Missing BreadcrumbList on the home is acceptable. |

**Readiness call:** Reasonably positioned for branded and hyper-local AIO surfaces ("water softener Tampa cost", "free water test Tampa"). Unlikely to surface for broad informational queries ("what is PFAS", "how does reverse osmosis work") without dedicated long-form pages.

**Optimization Actions:**
1. Add 4–6 on-page FAQ blocks to the home and each service page using question H3s ("How much does a water softener cost in Tampa?", "Is Tampa water hard?", "Does Tampa Bay water contain PFAS?") with 40–60 word direct-answer paragraphs immediately under each. Mirror the questions already drafted in llms.txt.
2. Build a "PFAS in Tampa Bay water" pillar page with a county-by-county comparison table (Hillsborough/Pinellas/Manatee/Sarasota/Polk × PFAS detected ppt × EPA MCL 4 ppt) — comparison tables are the single highest-yield AIO extraction format for contaminant queries.
3. Convert the "Better Water in 3 Simple Steps" ItemList into HowTo-equivalent ordered content with visible step numbering on the page (HowTo schema itself is deprecated, but the ordered-list pattern still feeds AIO).

---

### ChatGPT Web Search

**Score: 55/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Entity Recognition | 14/35 | No Wikipedia article. No Wikidata QID. `sameAs` array only lists Facebook, Instagram, Google Maps CID, Yelp, BBB — strong NAP signals but no encyclopedic anchors. Founder Marquis Pendergrass has no Person schema on site and no detectable third-party entity record. |
| Content Preferences | 25/40 | Clear factual statements (founded 2011, 7 NSF certifications listed, 50-mile radius, 5 counties). llms.txt is exceptionally well-structured for ChatGPT (it loves machine-readable summaries). `dateModified: 2026-04-19` on WebSite schema gives a freshness signal. Missing: author bylines, visible publication dates on service pages, expert credential attribution on individual claims. |
| Crawler Access | 16/25 | OAI-SearchBot: allowed. ChatGPT-User: allowed. GPTBot (training): blocked. Blocking GPTBot is a defensible business choice but it does cost a small amount of model-memory entity reinforcement; it does not affect live ChatGPT web search retrieval. |

**Readiness call:** ChatGPT can retrieve and quote the site for direct-intent Tampa Bay queries ("best water filtration company Tampa Bay reviews"), but for entity-style queries ("who is Jusi H2O") it lacks an authoritative anchor and will likely fall back to Google Maps / Yelp / BBB summaries instead.

**Optimization Actions:**
1. Add `Person` schema for Marquis Pendergrass with `jobTitle: "Founder"`, `worksFor: @id of LocalBusiness`, and `sameAs` linking to LinkedIn profile, any podcast appearances, and local press mentions. Reference him by name in an "About the founder" block on the home page with credentials (years in industry, WQA certifications held).
2. Create a Wikidata entry for Jusi H2O (Q-item) with properties: instance of (water treatment company), founded by (Marquis Pendergrass), inception (2011), headquarters location (St. Petersburg, FL), official website. Then add the Wikidata URL and the company's Google Knowledge Graph KGMID (once issued) to the `sameAs` array.
3. Add visible "Last updated: [date]" timestamps to every service page and the home; ChatGPT web search down-ranks pages where it cannot establish recency.

---

### Perplexity AI

**Score: 48/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Community Validation | 8/30 | No detectable Reddit threads about Jusi H2O. No Quora answers. No /r/tampa, /r/StPetersburgFL, or /r/Plumbing mentions. 2,500+ Google reviews are off-platform for Perplexity (it does not heavily index Google review prose). BBB profile in sameAs is a minor positive. |
| Source Directness | 16/30 | Site offers genuine primary data (free in-home water testing, NSF certs, county-specific service pages) but does not publish primary-source content such as "Tampa Bay water hardness map" with original measurements, or a "PFAS testing results from 200 Hillsborough homes" dataset. Without proprietary data, Perplexity prefers EPA, USGS, Tampa Bay Water utility reports. |
| Content Freshness | 12/20 | `dateModified: 2026-04-19` exists on WebSite schema (within 30 days, strong signal). Per-page modification dates not visible to users. No blog cadence detectable from the home (no "latest from the blog" section). |
| Technical Access | 12/20 | PerplexityBot: allowed. Perplexity-User: allowed. SSR via Next.js — content is in the initial HTML, which is critical because Perplexity does limited JS execution. Page is large (110 KB HTML) but acceptable. |

**Readiness call:** Perplexity will rarely cite jusih2o.com today for the target queries. Cited sources for "water softener Tampa" on Perplexity today are dominated by Reddit, Angi, HomeAdvisor, and Tampa Bay Times. To break in, Jusi H2O must either generate community signal or publish primary data competitors cannot.

**Optimization Actions:**
1. Publish a "Tampa Bay Water Quality Report 2026" with original aggregated data from the company's free water tests (anonymized): average hardness by ZIP code, chlorine ranges, iron prevalence, PFAS detection rates. This becomes a primary source Perplexity can cite directly. Distribute the URL in 3–5 relevant Reddit threads (/r/tampa, /r/StPetersburgFL, /r/HomeImprovement) with a Marquis Pendergrass AMA-style answer in each.
2. Seed community presence: have the founder or a senior tech answer 10–15 substantive questions on Reddit's Tampa subs and r/Plumbing over the next 90 days using a transparent, verified-business account. Perplexity heavily weights recent (last 6–12 months) Reddit answers with high upvote ratios.
3. Add visible `<time datetime="">` modification dates to every service and location page. Perplexity penalizes pages where freshness cannot be established without schema parsing.

---

### Google Gemini

**Score: 58/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Google Ecosystem | 18/35 | Google Maps CID is in sameAs (good — implies a verified Google Business Profile). 2,500+ Google reviews is excellent ecosystem signal. No detectable YouTube channel. No Google Scholar presence (not applicable). No Google News inclusion. |
| Knowledge Graph | 14/30 | No KG entity panel detectable for "Jusi H2O" brand search. `sameAs` covers Facebook/Instagram/Yelp/BBB but is missing LinkedIn company page and YouTube. Consistent NAP across visible properties (phone 813-303-0515, address 7901 4th St N Ste 300, St. Petersburg FL 33702). |
| Content Quality | 26/35 | Strong topical clustering implied (service pages × location pages × treatment-type pages = matrix structure). Internal linking from llms.txt is comprehensive. Long-form depth on individual pages is unverified from this single-page audit but home is content-rich. Google-Extended allowed in robots.txt — Gemini training-data access is open. |

**Readiness call:** Gemini will surface Jusi H2O for branded queries and is well-positioned for Tampa Bay local intent thanks to the GBP signal. The big gap is YouTube — Gemini pulls heavily from YouTube for "how to" and product evaluation queries, and absence is a measurable loss.

**Optimization Actions:**
1. Launch a YouTube channel with 8–12 videos in 90 days: "Tampa Bay water hardness test walkthrough," "How a water softener installation actually works (Hillsborough home)," "PFAS explained for Tampa homeowners," with Marquis Pendergrass on camera and the company NAP in every description. YouTube mentions correlate 0.737 with AI visibility (single strongest signal per SEOMAN GEO knowledge base).
2. Create and verify a LinkedIn company page for Jusi H2O, add LinkedIn URL to `sameAs`, and have Marquis Pendergrass connect the page to his personal profile. Cross-post 2 articles/month from the website.
3. Add `founder` property to the Plumber schema referencing a `Person` node for Marquis Pendergrass; this is one of the strongest signals for Google Knowledge Graph entity disambiguation for small businesses.

---

### Bing Copilot

**Score: 53/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Bing Index Signals | 12/30 | No `msvalidate.01` meta tag detected (Bing Webmaster Tools verification not visible in HTML — may be done via DNS, unverifiable from external analysis). No IndexNow key file detected at common paths. Sitemap declared in robots.txt. |
| Content Preferences | 20/30 | Professional tone, structured content, clear NAP, AggregateRating with reviewCount. Suitable for "find a Tampa water treatment contractor" workplace-style queries. Lacks the comparison-matrix and feature-grid formats Copilot prefers for B2B-flavored research. |
| Microsoft Ecosystem | 8/20 | No LinkedIn company page in sameAs. No GitHub (not expected for service business). No Microsoft Partner or Surface/Office mentions (not applicable). LinkedIn is the realistic lever. |
| Technical Signals | 13/20 | Clean HTML5 semantics, JSON-LD schema, SSR. Page weight is on the heavy side (110 KB HTML) but Bing tolerates this. Mobile experience and CWVs not measured in this audit — assume Next.js defaults are acceptable. |

**Readiness call:** Bing Copilot will retrieve the site for local intent but lacks the Microsoft ecosystem signals and IndexNow plumbing that would put it on equal footing with national directories (Angi, HomeAdvisor) that dominate Bing's water-treatment SERP.

**Optimization Actions:**
1. Implement IndexNow: generate a key, host the key file at `https://jusih2o.com/{key}.txt`, and ping `https://api.indexnow.org/indexnow` on every publish/update. This guarantees Bing re-indexes within hours rather than weeks and is a direct ranking-velocity input for Copilot.
2. Verify the site in Bing Webmaster Tools, add the `msvalidate.01` meta tag for redundancy, and submit the sitemap explicitly. While in BWT, enable the Microsoft Clarity integration — Bing uses Clarity engagement data as a ranking signal for Copilot retrieval.
3. Create a LinkedIn company page, publish a "Tampa Bay water treatment 2026 buyer's guide" article on LinkedIn linking back to jusih2o.com, and add the LinkedIn URL to the `sameAs` schema array. LinkedIn is the highest-weighted Microsoft-ecosystem signal for non-tech local businesses.

---

### Cross-Platform Synergies

Actions that improve multiple platforms simultaneously:

1. **Create Wikidata entry + add LinkedIn + add YouTube channel, all linked in expanded `sameAs`** — Impacts: ChatGPT Web Search, Google Gemini, Bing Copilot, Perplexity (entity recognition is shared infrastructure across all four).
2. **Publish "Tampa Bay Water Quality Report 2026" with original data, seed in Reddit** — Impacts: Perplexity, ChatGPT Web Search, Google AI Overviews (primary-source data is the universal AI-citation lever).
3. **Add Person schema for Marquis Pendergrass with visible author bylines on service pages** — Impacts: Google AI Overviews (E-E-A-T author signal), ChatGPT (expert attribution), Gemini (Knowledge Graph entity), Bing Copilot (authoritative sourcing).
4. **Add on-page FAQ blocks with question-shaped H3s mirroring llms.txt** — Impacts: Google AI Overviews, ChatGPT Web Search, Bing Copilot (question-answer extraction format works across all three).
5. **Add visible "Last updated" timestamps site-wide** — Impacts: ChatGPT Web Search, Perplexity, Google AI Overviews (freshness signals are universal).

---

### Priority Actions (All Platforms)

1. **[CRITICAL]** Publish "Tampa Bay Water Quality Report 2026" with original aggregated test data — Affects: Perplexity, AIO, ChatGPT, Gemini — Effort: High
2. **[CRITICAL]** Launch YouTube channel with 8–12 founder-on-camera videos in 90 days — Affects: Gemini, ChatGPT, AIO — Effort: High
3. **[HIGH]** Create Wikidata entry, LinkedIn company page, and expand `sameAs` to include Wikidata + LinkedIn + YouTube + KGMID — Affects: ChatGPT, Gemini, Bing Copilot, Perplexity — Effort: Medium
4. **[HIGH]** Add Person schema for Marquis Pendergrass + visible author bylines on service pages — Affects: All five platforms — Effort: Low
5. **[HIGH]** Add on-page FAQ blocks (4–6 per page) with question H3s mirroring llms.txt content — Affects: AIO, ChatGPT, Bing Copilot — Effort: Low
6. **[MEDIUM]** Implement IndexNow + verify Bing Webmaster Tools + enable Microsoft Clarity — Affects: Bing Copilot, AIO (indirect) — Effort: Low
7. **[MEDIUM]** Seed 10–15 substantive Reddit answers from a verified founder account in /r/tampa, /r/StPetersburgFL, /r/Plumbing over 90 days — Affects: Perplexity, ChatGPT — Effort: Medium
8. **[MEDIUM]** Add visible `<time datetime>` last-modified dates to every service and location page — Affects: Perplexity, ChatGPT, AIO — Effort: Low
9. **[MEDIUM]** Build "PFAS in Tampa Bay water" pillar with county-by-county comparison table — Affects: AIO, ChatGPT, Perplexity — Effort: Medium
