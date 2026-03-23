# SEO Audit Report

**Site:** Jusi H2O
**URL:** https://jusih2o.com
**Date:** 2026-03-23
**Mode:** Live Crawl
**Pages Analyzed:** 22
**Overall Score:** 71/100 -- Above Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 17 | 19 | Good |
| On-Page SEO | 13 | 25 | Needs Work |
| Structured Data | 11 | 16 | Fair |
| Open Graph / Social | 10 | 12 | Good |
| Performance Signals | 9 | 18 | Needs Work |
| LLM / GEO Optimization | 18 | 20 | Good |
| **TOTAL** | **71** | **100** | **Above Average** |

---

## Executive Summary

- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Add H1 to 20 page(s)
- **[HIGH]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
- **[HIGH]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)

---

## 1. Technical Foundation -- 17/19

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| HTTPS | 2 | 2 | PASS |  |
| Viewport meta tag | 1 | 1 | PASS |  |
| HTML lang attribute | 1 | 1 | PASS |  |
| Charset declaration | 1 | 1 | PASS |  |
| robots.txt valid | 2 | 2 | PASS |  |
| XML sitemap exists | 2 | 2 | PASS | Dynamic sitemap.ts |
| Sitemap in robots.txt | 1 | 1 | PASS |  |
| No broken internal links | 2 | 2 | PASS |  |
| Canonical tags on all pages | 2 | 1 | FAIL | 2/22 pages missing canonical tag |
| Clean URL structure | 1 | 1 | PASS |  |
| Favicon | 1 | 1 | PASS |  |
| Custom 404 page | 1 | 1 | PASS |  |
| Analytics tracking installed | 1 | 1 | PASS | Found: GA4 |

## 2. On-Page SEO -- 13/25

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 2 | FAIL | 21 page(s) with missing/bad-length titles |
| Unique meta descriptions, correct length | 3 | 2 | FAIL | 5 page(s) with missing/bad-length meta desc |
| Single H1 per page | 2 | 1 | FAIL | 20 page(s) missing H1 |
| Proper heading hierarchy (H1>H2>H3) | 2 | 1 | FAIL | 1 page(s) have H3 without H2 |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Internal linking with descriptive anchors | 2 | 1 | FAIL | 1 link(s) with weak anchor text |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 16 page(s) with no internal links pointing to them: /about, /before-after, /blog/[slug]... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | 10 thin service page(s) |
| Primary keyword in title + H1 | 2 | 0 | FAIL | 0/22 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 0 | FAIL | 1 email(s) exposed in plain text: support@jusih2o.com |
| Top keywords present in title + meta description | 2 | 0 | FAIL | 3/22 pages have keyword alignment (14%) |
| Business address visible on page | 1 | 1 | PASS |  |

## 3. Structured Data -- 11/16

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LocalBusiness or subtype schema | 3 | 2 | FAIL | Found: LocalBusiness (use specific subtype for +1pt) |
| NAP in schema | 1 | 1 | PASS |  |
| NAP consistency (schema vs page) | 1 | 0 | FAIL | Schema phone +1-000-000-0000 not found in page content phones: (725) 235-8278, 7252358278, 725235827... |
| WebSite schema on homepage | 1 | 1 | PASS |  |
| BreadcrumbList on interior pages | 2 | 2 | PASS |  |
| FAQPage schema | 3 | 1 | FAIL | 3 page(s) have questions but no FAQPage schema |
| Service schema | 2 | 2 | PASS |  |
| Article schema | 1 | 0 | FAIL | No Article schema (may not have blog) |
| dateModified/datePublished in schemas | 1 | 1 | PASS |  |
| Schema validates (no parse errors) | 1 | 1 | PASS |  |

## 4. Open Graph / Social -- 10/12

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| og:title on all pages | 2 | 2 | PASS |  |
| og:description on all pages | 2 | 2 | PASS |  |
| og:image on all pages | 2 | 2 | PASS |  |
| og:url on all pages | 1 | 1 | PASS |  |
| og:type set | 1 | 1 | PASS |  |
| Twitter/X card tags | 1 | 1 | PASS |  |
| og:image:alt | 1 | 0 | FAIL | og:image:alt missing |
| Social profile links on site | 2 | 1 | FAIL | Missing: twitter, linkedin, youtube |

## 5. Performance Signals -- 9/18

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LCP image preloaded | 3 | 1 | FAIL | No <link rel="preload" as="image"> found |
| INP < 200ms | 3 | 1 | FAIL | Requires real user measurement (PageSpeed Insights) |
| CLS: images have width/height | 3 | 3 | PASS |  |
| Resource hints (preconnect/dns-prefetch) | 2 | 0 | FAIL | No preconnect or dns-prefetch hints |
| Font loading optimized | 2 | 2 | PASS |  |
| No render-blocking JS in <head> | 2 | 2 | PASS |  |
| Bing sitemap submitted (Bing verification) | 2 | 0 | FAIL | No Bing site verification found (add msvalidate.01 meta tag or BingSiteAuth.xml) |
| Minimal inline styles | 1 | 0 | FAIL | 164 inline style attributes found across pages (move to CSS classes) |

## 6. LLM / GEO Optimization -- 18/20

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| llms.txt well-formed | 2 | 2 | PASS | 4 links |
| llms-full.txt extended context file | 1 | 1 | PASS |  |
| FAQ with query-matched headings | 3 | 3 | PASS | 12 page(s) with question headings |
| Citation-ready answer blocks | 2 | 2 | PASS |  |
| Statistics with citations | 2 | 2 | PASS |  |
| Named authors with credentials | 2 | 0 | FAIL | No named authors detected |
| Content freshness (dateModified) | 2 | 2 | PASS |  |
| Semantic HTML elements | 2 | 2 | PASS |  |
| Comparison tables | 1 | 1 | PASS |  |
| Direct answer in first 100 words | 1 | 1 | PASS |  |
| AI crawler rules optimized | 2 | 2 | PASS |  |

---

## Page-by-Page Summary

| Page | Score | Title (chars) | Meta Desc (chars) | H1 | Alt | Words | Issues |
|------|-------|--------------|-------------------|-------|-----|-------|--------|
| / | 19/25 | 37ch | 181ch | OK | OK | 450 | title 37ch, desc 181ch |
| /about | 18/25 | 19ch | 150ch | NONE | OK | 123 | title 19ch, no H1 |
| /before-after | 18/25 | 33ch | 157ch | NONE | OK | 149 | title 33ch, no H1 |
| /blog | 19/25 | 29ch | 149ch | NONE | OK | 1348 | title 29ch, no H1 |
| /blog/[slug] | 14/25 | 37ch | 209ch | NONE | - | 1338 | title 37ch, desc 209ch, no H1, no canonical |
| /contact | 17/25 | 39ch | 134ch | NONE | OK | 86 | title 39ch, no H1, thin |
| /faq | 18/25 | 37ch | 146ch | NONE | OK | 246 | title 37ch, no H1 |
| /gallery | 15/25 | 18ch | 98ch | OK | OK | 64 | title 18ch, desc 98ch, no canonical, thin |
| /privacy-policy | 18/25 | 25ch | 124ch | NONE | OK | 125 | title 25ch, no H1 |
| /service-area | 17/25 | 44ch | 152ch | NONE | OK | 59 | title 44ch, no H1, thin |
| /services | 18/25 | 36ch | 159ch | NONE | OK | 265 | title 36ch, no H1 |
| /services/commercial-plumbing | 19/25 | 48ch | 152ch | NONE | OK | 326 | title 48ch, no H1 |
| /services/jusicare | 18/25 | 48ch | 159ch | NONE | OK | 263 | title 48ch, no H1 |
| /services/leak-repair | 19/25 | 34ch | 156ch | NONE | OK | 396 | title 34ch, no H1 |
| /services/reverse-osmosis | 18/25 | 49ch | 147ch | NONE | OK | 256 | title 49ch, no H1 |
| /services/water-filtration | 18/25 | 39ch | 158ch | NONE | OK | 230 | title 39ch, no H1 |
| /services/water-heater-installation | 18/25 | 50ch | 161ch | NONE | OK | 275 | desc 161ch, no H1 |
| /services/water-softeners | 19/25 | 49ch | 159ch | NONE | OK | 425 | title 49ch, no H1 |
| /services/water-testing | 18/25 | 37ch | 157ch | NONE | OK | 198 | title 37ch, no H1 |
| /services/well-water | 16/25 | 41ch | 166ch | NONE | OK | 446 | title 41ch, desc 166ch, no H1 |
| /terms-of-service | 17/25 | 27ch | 131ch | NONE | OK | 92 | title 27ch, no H1, thin |
| /testimonials | 18/25 | 42ch | 138ch | NONE | OK | 135 | title 42ch, no H1 |

**Page Score Stats:** avg 18/25, min 14/25, max 19/25, 6 page(s) below 18/25 threshold

---

## Content Gaps

**Found:** Services overview page, About page, Contact page, FAQ page, Reviews / Testimonials, Service area pages, Blog / Resources, Privacy policy, Terms of service

**Missing:**
- Pricing / Financing
- Certifications page
- Process / How it works
- Individual city pages

---

## Priority Fix List

### HIGH

1. **[Structured Data]** Add FAQPage schema to pages with question headings
2. **[On-Page]** Add H1 to 20 page(s)
3. **[Structured Data]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
4. **[On-Page]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
5. **[On-Page]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
### MEDIUM

6. **[Performance]** Add Bing site verification (msvalidate.01 meta tag or BingSiteAuth.xml) and submit sitemap to Bing Webmaster Tools
7. **[On-Page]** Remove or obfuscate plain text email addresses to prevent spam scraping
8. **[On-Page]** Align title tags and meta descriptions with top page keywords for better ranking
9. **[On-Page]** Add internal links to orphan pages — these pages have no links pointing to them from other pages
10. **[OG/Social]** Add social profile links to footer (Missing: twitter, linkedin, youtube)
### LOW

11. **[Performance]** Move inline styles to CSS classes or Tailwind utilities
12. **[Performance]** Add preconnect for Google Fonts/CDN
13. **[LLM/GEO]** Add named authors with credentials
---

## External Audit Estimate (SEOptimer-style)

| Category | Est. Grade | Our Score |
|----------|-----------|----------|
| Overall | **C-** | 71/100 |
| On-Page SEO | D | 52% |
| Usability | D | 66% |
| Performance | F | 50% |
| Social | B | 83% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
