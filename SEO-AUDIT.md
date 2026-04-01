# SEO Audit Report

**Site:** Jusi H2O
**URL:** https://jusih2o.com
**Date:** 2026-03-31
**Mode:** Live Crawl
**Pages Analyzed:** 22
**Overall Score:** 67/100 -- Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 19 | 21 | Good |
| On-Page SEO | 16 | 28 | Needs Work |
| Structured Data | 11 | 21 | Needs Work |
| Open Graph / Social | 10 | 12 | Good |
| Performance Signals | 10 | 24 | Needs Work |
| LLM / GEO Optimization | 23 | 27 | Good |
| **TOTAL** | **67** | **100** | **Average** |

---

## Executive Summary

- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Add H1 to 20 page(s)
- **[HIGH]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
- **[HIGH]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)

---

## 1. Technical Foundation -- 19/21

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
| Mobile content parity (no critical content hidden) | 1 | 1 | PASS |  |
| All pages within 3 clicks of homepage | 1 | 1 | PASS |  |

## 2. On-Page SEO -- 16/28

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 2 | FAIL | 21 page(s) with missing/bad-length titles |
| Unique meta descriptions, correct length | 3 | 2 | FAIL | 5 page(s) with missing/bad-length meta desc |
| Single H1 per page | 2 | 1 | FAIL | 20 page(s) missing H1 |
| Proper heading hierarchy (H1>H2>H3) | 2 | 1 | FAIL | 1 page(s) have H3 without H2 |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Images use next/image component | 2 | 2 | PASS |  |
| No duplicate content across pages | 1 | 1 | PASS |  |
| Internal linking with descriptive anchors | 2 | 1 | FAIL | 1 link(s) with weak anchor text |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 16 page(s) with no internal links pointing to them: /about, /before-after, /blog/[slug]... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | 10 thin service page(s) |
| Primary keyword in title + H1 | 2 | 0 | FAIL | 0/22 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 0 | FAIL | 1 email(s) exposed in plain text: support@jusih2o.com |
| Top keywords present in title + meta description | 2 | 0 | FAIL | 3/22 pages have keyword alignment (14%) |
| Business address visible on page | 1 | 1 | PASS |  |

## 3. Structured Data -- 11/21

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
| GeoCoordinates in LocalBusiness | 1 | 0 | FAIL | No geo coordinates in LocalBusiness schema. Add latitude/longitude via .seo-config.json. |
| hasCertification in schema | 1 | 0 | FAIL | No certifications in schema. Add certifications via .seo-config.json. |
| HowTo schema | 1 | 0 | FAIL | 4 page(s) have step content but no HowTo schema |
| AggregateRating in schema | 1 | 0 | FAIL | No AggregateRating in schema. Add reviewRating/reviewCount via .seo-config.json. |
| VideoObject schema | 1 | 0 | FAIL | No VideoObject schema. Add YouTube video embeds to pages for video rich results. |

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

## 5. Performance Signals -- 10/24

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
| Click-to-call (phone numbers in tel: links) | 1 | 0 | FAIL | 6 phone number(s) not wrapped in tel: links |
| GA4 conversion event tracking | 2 | 1 | FAIL | Analytics installed but no conversion events detected. Add gtag("event", "generate_lead") or dataLay... |
| Call tracking configured | 1 | 0 | FAIL | Phone numbers found but no call tracking (CallRail, CallTrackingMetrics, Marchex, WhatConverts). Can... |
| Form submission tracking | 1 | 0 | FAIL | 1 form(s) without analytics event on submit. Add gtag("event", "form_submit") or dataLayer.push in o... |
| Conversion funnel (CTA on all pages) | 1 | 0 | FAIL | Dead-end pages without CTA: /, /about, /before-after, /blog, /blog/[slug] (+12 more) |

## 6. LLM / GEO Optimization -- 23/27

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| llms.txt well-formed | 2 | 2 | PASS | 5 links |
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
| Entity density (brand/org/product names) | 2 | 2 | PASS | Avg 23 entities/page |
| Passage-level section length (134-250 words) | 1 | 0 | FAIL | Sections too thin: avg 51 words (need 134+). Expand content under each H2/H3. |
| BLUF: keyword in first 100 words after H1 | 1 | 1 | PASS | 15/22 pages have BLUF |
| Content freshness (files updated within 180 days) | 1 | 1 | PASS | Oldest page: 10 days |
| Multimodal content (text + images + video + schema + tables + lists) | 1 | 1 | PASS | Avg 4.2 content types/page |

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
6. **[Performance]** Wrap all phone numbers in tel: links for click-to-call on mobile
### MEDIUM

7. **[Performance]** Add Bing site verification (msvalidate.01 meta tag or BingSiteAuth.xml) and submit sitemap to Bing Webmaster Tools
8. **[On-Page]** Remove or obfuscate plain text email addresses to prevent spam scraping
9. **[On-Page]** Align title tags and meta descriptions with top page keywords for better ranking
10. **[On-Page]** Add internal links to orphan pages — these pages have no links pointing to them from other pages
11. **[OG/Social]** Add social profile links to footer (Missing: twitter, linkedin, youtube)
12. **[LLM/GEO]** Optimize section lengths: each H2/H3 section should be 134-250 words for ideal LLM citation extraction
13. **[Structured Data]** Add GeoCoordinates to LocalBusiness schema via .seo-config.json (latitude/longitude)
14. **[Structured Data]** Add business certifications to schema via .seo-config.json
15. **[Structured Data]** Add AggregateRating to schema via .seo-config.json (reviewRating/reviewCount)
16. **[Performance]** Add conversion event tracking to analytics: gtag("event", "generate_lead"), dataLayer.push for form submissions and phone clicks
17. **[Performance]** Install call tracking (CallRail, CallTrackingMetrics) to measure phone call conversions and attribute calls to marketing channels
18. **[Performance]** Add analytics event firing on form submissions — forms exist but have no conversion tracking in onSubmit handlers
19. **[Performance]** Fix conversion funnel dead-ends: Dead-end pages without CTA: /, /about, /before-after, /blog, /blog/[slug] (+12 more)
20. **[Performance]** 60-80% of calls go unanswered during peak hours. Consider adding: (1) after-hours answering service, (2) AI voice agent for 24/7 coverage, (3) callback request form, (4) SMS text-back automation.
### LOW

21. **[Performance]** Move inline styles to CSS classes or Tailwind utilities
22. **[Performance]** Add preconnect for Google Fonts/CDN
23. **[Structured Data]** Add HowTo schema to pages with step-by-step content (process, how-it-works)
24. **[Structured Data]** Add VideoObject schema to pages with YouTube embeds for video rich results
25. **[LLM/GEO]** Add named authors with credentials
---

## External Audit Estimate (SEOptimer-style)

| Category | Est. Grade | Our Score |
|----------|-----------|----------|
| Overall | **D+** | 67/100 |
| On-Page SEO | D+ | 57% |
| Usability | D | 61% |
| Performance | F | 42% |
| Social | B | 83% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
