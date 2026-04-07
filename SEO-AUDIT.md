# SEO Audit Report

**Site:** Jusi H2O
**URL:** https://jusih2o.com
**Date:** 2026-04-06
**Mode:** Live Crawl
**Pages Analyzed:** 32
**Overall Score:** 71/100 -- Above Average

---

## Score Summary

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Technical Foundation | 19 | 21 | Good |
| On-Page SEO | 24 | 38 | Fair |
| Structured Data | 12 | 23 | Needs Work |
| Open Graph / Social | 11 | 12 | Good |
| Performance Signals | 18 | 29 | Fair |
| LLM / GEO Optimization | 28 | 32 | Good |
| **TOTAL** | **71** | **100** | **Above Average** |

---

## Executive Summary

- **[HIGH]** Add FAQPage schema to pages with question headings
- **[HIGH]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
- **[HIGH]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
- **[HIGH]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
- **[HIGH]** Wrap all phone numbers in tel: links for click-to-call on mobile

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
| Canonical tags on all pages | 2 | 1 | FAIL | 2/32 pages missing canonical tag |
| Clean URL structure | 1 | 1 | PASS |  |
| Favicon | 1 | 1 | PASS |  |
| Custom 404 page | 1 | 1 | PASS |  |
| Analytics tracking installed | 1 | 1 | PASS | Found: GTM |
| Mobile content parity (no critical content hidden) | 1 | 1 | PASS |  |
| All pages within 3 clicks of homepage | 1 | 1 | PASS |  |

## 2. On-Page SEO -- 24/38

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| Unique title tags, correct length | 3 | 2 | FAIL | 4 page(s) with missing/bad-length titles |
| Unique meta descriptions, correct length | 3 | 2 | FAIL | 7 page(s) with missing/bad-length meta desc |
| Single H1 per page | 2 | 2 | PASS |  |
| Proper heading hierarchy (H1>H2>H3) | 2 | 2 | PASS |  |
| Alt text on all images | 2 | 2 | PASS |  |
| Image dimensions (CLS prevention) | 2 | 2 | PASS |  |
| Images use next/image component | 2 | 2 | PASS |  |
| No duplicate content across pages | 1 | 0 | FAIL | 7 page pair(s) with >50% content overlap: /before-after <> /faq (71%); /before-after <> /service-are... |
| Internal linking with descriptive anchors | 2 | 1 | FAIL | 1 link(s) with weak anchor text |
| No orphan pages (all pages internally linked) | 1 | 0 | FAIL | 5 page(s) with no internal links pointing to them: /blog/[slug], /gallery, /privacy-policy... |
| External links have rel="noopener" | 1 | 1 | PASS |  |
| Content length meets threshold | 1 | 0 | FAIL | 16 thin service page(s) |
| Primary keyword in title + H1 | 2 | 0 | FAIL | 10/32 pages have matching keywords in title and H1 |
| No plain text email addresses exposed | 1 | 0 | FAIL | 1 email(s) exposed in plain text: support@jusih2o.com |
| Top keywords present in title + meta description | 2 | 0 | FAIL | 14/32 pages have keyword alignment (44%) |
| Business address visible on page | 1 | 1 | PASS |  |
| E-E-A-T: License number visible | 2 | 2 | PASS |  |
| E-E-A-T: Years in business stated | 1 | 1 | PASS |  |
| Pages have sufficient internal links (min 2) | 1 | 0 | FAIL | 2 page(s) have fewer than 2 internal links — isolated pages receive less link equity: /gallery, /ser... |
| Service pages cross-link to related services | 1 | 1 | PASS | 20 service page(s) found |
| Blog posts link to relevant service pages | 1 | 0 | FAIL | Blog posts do not link to service pages — add contextual links from blog content to service pages to... |
| Breadcrumb navigation implemented | 1 | 1 | PASS | 2 page(s) have breadcrumb nav |
| No thin content pages (min 300 words) | 1 | 0 | FAIL | 15 page(s) have fewer than 300 words — thin content rarely ranks well: /about, /before-after, /conta... |
| Pages have heading structure (H2/H3) | 1 | 1 | PASS |  |
| Content-to-code ratio (text vs. HTML/JS) | 1 | 1 | PASS | 32 pages with ratio data |

## 3. Structured Data -- 12/23

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LocalBusiness or subtype schema | 3 | 2 | FAIL | Found: LocalBusiness (use specific subtype for +1pt) |
| NAP in schema | 1 | 1 | PASS |  |
| NAP consistency (schema vs page) | 1 | 0 | FAIL | Schema phone +1-000-000-0000 not found in page content phones: 1813303051, (813) 303-0515, 181330305... |
| WebSite schema on homepage | 1 | 1 | PASS |  |
| BreadcrumbList on interior pages | 2 | 2 | PASS |  |
| FAQPage schema | 3 | 1 | FAIL | 4 page(s) have questions but no FAQPage schema |
| Service schema | 2 | 2 | PASS |  |
| Article schema | 1 | 0 | FAIL | No Article schema (may not have blog) |
| dateModified/datePublished in schemas | 1 | 1 | PASS |  |
| Schema validates (no parse errors) | 1 | 0 | FAIL | 3 JSON-LD parse error(s) |
| GeoCoordinates in LocalBusiness | 1 | 0 | FAIL | No geo coordinates in LocalBusiness schema. Add latitude/longitude via .seo-config.json. |
| hasCertification in schema | 1 | 0 | FAIL | No certifications in schema. Add certifications via .seo-config.json. |
| HowTo schema | 1 | 0 | FAIL | 11 page(s) have step content but no HowTo schema |
| AggregateRating in schema | 1 | 0 | FAIL | No AggregateRating in schema. Add reviewRating/reviewCount via .seo-config.json. |
| VideoObject schema | 1 | 0 | FAIL | No VideoObject schema. Add YouTube video embeds to pages for video rich results. |
| E-E-A-T: Team/author bios configured | 2 | 2 | PASS |  |

## 4. Open Graph / Social -- 11/12

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| og:title on all pages | 2 | 2 | PASS |  |
| og:description on all pages | 2 | 2 | PASS |  |
| og:image on all pages | 2 | 2 | PASS |  |
| og:url on all pages | 1 | 1 | PASS |  |
| og:type set | 1 | 1 | PASS |  |
| Twitter/X card tags | 1 | 1 | PASS |  |
| og:image:alt | 1 | 1 | PASS |  |
| Social profile links on site | 2 | 1 | FAIL | Missing: twitter, linkedin, youtube |

## 5. Performance Signals -- 18/29

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| LCP image preloaded | 3 | 1 | FAIL | No <link rel="preload" as="image"> found |
| INP < 200ms | 3 | 1 | FAIL | Requires real user measurement (PageSpeed Insights) |
| CLS: images have width/height | 3 | 3 | PASS |  |
| Resource hints (preconnect/dns-prefetch) | 2 | 2 | PASS |  |
| Font loading optimized | 2 | 2 | PASS |  |
| No render-blocking JS in <head> | 2 | 2 | PASS |  |
| Bing sitemap submitted (Bing verification) | 2 | 2 | PASS |  |
| Minimal inline styles | 1 | 0 | FAIL | 168 inline style attributes found across pages (move to CSS classes) |
| Click-to-call (phone numbers in tel: links) | 1 | 0 | FAIL | 24 phone number(s) not wrapped in tel: links |
| GA4 conversion event tracking | 2 | 1 | FAIL | Analytics installed but no conversion events detected. Add gtag("event", "generate_lead") or dataLay... |
| Call tracking configured | 1 | 0 | FAIL | Phone numbers found but no call tracking (CallRail, CallTrackingMetrics, Marchex, WhatConverts). Can... |
| Form submission tracking | 1 | 0 | FAIL | 1 form(s) without analytics event on submit. Add gtag("event", "form_submit") or dataLayer.push in o... |
| Conversion funnel (CTA on all pages) | 1 | 0 | FAIL | Dead-end pages without CTA: /before-after, /blog, /blog/[slug], /gallery, /service-area (+10 more) |
| Image alt text quality (descriptive, not filename) | 1 | 1 | PASS |  |
| Images use modern formats (WebP/AVIF) | 1 | 0 | FAIL | 13 image(s) use legacy formats (JPG/PNG) — convert to WebP or AVIF for 25-50% smaller file sizes |
| Image filenames are descriptive (not IMG_1234) | 1 | 1 | PASS |  |
| Below-fold images use lazy loading | 1 | 1 | PASS |  |
| Image SEO overall (alt + format + filename + lazy) | 1 | 1 | PASS | 37 total images audited |

## 6. LLM / GEO Optimization -- 28/32

| Check | Points | Earned | Status | Notes |
|-------|--------|--------|--------|-------|
| llms.txt well-formed | 2 | 2 | PASS | 5 links |
| llms-full.txt extended context file | 1 | 1 | PASS |  |
| FAQ with query-matched headings | 3 | 3 | PASS | 21 page(s) with question headings |
| Citation-ready answer blocks | 2 | 2 | PASS |  |
| Statistics with citations | 2 | 2 | PASS |  |
| Named authors with credentials | 2 | 0 | FAIL | No named authors detected |
| Content freshness (dateModified) | 2 | 2 | PASS |  |
| Semantic HTML elements | 2 | 2 | PASS |  |
| Comparison tables | 1 | 1 | PASS |  |
| Direct answer in first 100 words | 1 | 1 | PASS |  |
| AI crawler rules optimized | 2 | 2 | PASS |  |
| Entity density (brand/org/product names) | 2 | 2 | PASS | Avg 24 entities/page |
| Passage-level section length (134-250 words) | 1 | 0 | FAIL | Sections too thin: avg 51 words (need 134+). Expand content under each H2/H3. |
| BLUF: keyword in first 100 words after H1 | 1 | 1 | PASS | 27/32 pages have BLUF |
| Content freshness (files updated within 180 days) | 1 | 1 | PASS | Oldest page: 3 days |
| Multimodal content (text + images + video + schema + tables + lists) | 1 | 1 | PASS | Avg 3.8 content types/page |
| E-E-A-T: Business certifications listed | 2 | 2 | PASS |  |
| E-E-A-T: Transparent pricing data | 2 | 2 | PASS |  |
| E-E-A-T: Project photos documented | 1 | 1 | PASS |  |

---

## Page-by-Page Summary

| Page | Score | Title (chars) | Meta Desc (chars) | H1 | Alt | Words | Issues |
|------|-------|--------------|-------------------|-------|-----|-------|--------|
| / | 25/25 | 56ch | 160ch | OK | OK | 457 | - |
| /about | 24/25 | 56ch | 150ch | OK | OK | 146 | - |
| /before-after | 24/25 | 60ch | 157ch | OK | OK | 161 | - |
| /blog | 25/25 | 55ch | 149ch | OK | OK | 1366 | - |
| /blog/[slug] | 20/25 | 49ch | 159ch | OK | - | 1357 | title 49ch, no canonical |
| /contact | 23/25 | 59ch | 152ch | OK | OK | 95 | thin |
| /faq | 24/25 | 59ch | 146ch | OK | OK | 257 | - |
| /gallery | 21/25 | 54ch | 155ch | OK | OK | 82 | no canonical, thin |
| /privacy-policy | 24/25 | 55ch | 153ch | OK | OK | 125 | - |
| /reverse-osmosis | 25/25 | 59ch | 143ch | OK | - | 381 | - |
| /service-area | 23/25 | 55ch | 152ch | OK | OK | 66 | thin |
| /service-areas | 20/25 | 60ch | 175ch | OK | - | 50 | desc 175ch, thin |
| /services | 24/25 | 58ch | 159ch | OK | OK | 272 | - |
| /services/commercial-plumbing | 25/25 | 54ch | 152ch | OK | OK | 350 | - |
| /services/jusicare | 24/25 | 56ch | 159ch | OK | OK | 286 | - |
| /services/leak-repair | 25/25 | 58ch | 156ch | OK | OK | 428 | - |
| /services/reverse-osmosis | 24/25 | 55ch | 147ch | OK | OK | 285 | - |
| /services/water-filtration | 18/25 | 62ch | 193ch | OK | OK | 257 | title 62ch, desc 193ch |
| /services/water-heater-installation | 25/25 | 56ch | 151ch | OK | OK | 307 | - |
| /services/water-softeners | 25/25 | 57ch | 159ch | OK | OK | 453 | - |
| /services/water-testing | 24/25 | 56ch | 157ch | OK | OK | 220 | - |
| /services/well-water | 19/25 | 62ch | 176ch | OK | OK | 467 | title 62ch, desc 176ch |
| /terms-of-service | 20/25 | 55ch | 161ch | OK | OK | 95 | desc 161ch, thin |
| /testimonials | 24/25 | 59ch | 138ch | OK | OK | 151 | - |
| /water-filtration | 25/25 | 57ch | 151ch | OK | - | 397 | - |
| /water-softener | 25/25 | 58ch | 148ch | OK | - | 478 | - |
| /water-softener-in-hillsborough-county-f... | 18/25 | 61ch | 167ch | OK | - | 206 | title 61ch, desc 167ch |
| /water-softener-in-pinellas-county-fl | 21/25 | 57ch | 163ch | OK | - | 218 | desc 163ch |
| /water-testing | 25/25 | 55ch | 140ch | OK | - | 375 | - |
| /water-treatment | 25/25 | 55ch | 144ch | OK | - | 380 | - |
| /well-water-treatment | 22/25 | 56ch | 171ch | OK | - | 438 | desc 171ch |
| /whole-house-filtration | 25/25 | 52ch | 135ch | OK | - | 334 | - |

**Page Score Stats:** avg 23/25, min 18/25, max 25/25, 0 page(s) below 18/25 threshold

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
2. **[Structured Data]** Fix NAP mismatch — phone number in schema does not match phone visible on page (hurts local rankings)
3. **[On-Page]** Fix title tag lengths — must be 50-60 characters (industry standard for SERP display)
4. **[On-Page]** Fix meta description lengths — must be 120-160 characters (industry standard for SERP display)
5. **[Performance]** Wrap all phone numbers in tel: links for click-to-call on mobile
6. **[On-Page]** Fix duplicate content — multiple pages have >50% content overlap, risking cannibalization
7. **[On-Page]** Expand thin content pages — pages with fewer than 300 words rarely rank for competitive terms. Add service details, process steps, FAQs, cost information, and local context.
### MEDIUM

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
19. **[Performance]** Fix conversion funnel dead-ends: Dead-end pages without CTA: /before-after, /blog, /blog/[slug], /gallery, /service-area (+10 more)
20. **[Performance]** 60-80% of calls go unanswered during peak hours. Consider adding: (1) after-hours answering service, (2) AI voice agent for 24/7 coverage, (3) callback request form, (4) SMS text-back automation.
21. **[Performance]** Convert images from JPG/PNG to WebP or AVIF format — modern formats are 25-50% smaller with same visual quality, improving page speed scores
22. **[On-Page]** Add internal links to isolated pages — pages with fewer than 2 internal links receive less link equity and are harder for crawlers to discover and prioritize
23. **[On-Page]** Add links from blog posts to relevant service pages — topical cluster architecture channels blog traffic to conversion pages and signals content authority to Google
### LOW

24. **[Performance]** Move inline styles to CSS classes or Tailwind utilities
25. **[Structured Data]** Add HowTo schema to pages with step-by-step content (process, how-it-works)
26. **[Structured Data]** Add VideoObject schema to pages with YouTube embeds for video rich results
27. **[LLM/GEO]** Add named authors with credentials
---

## External Audit Estimate (SEOptimer-style)

| Category | Est. Grade | Our Score |
|----------|-----------|----------|
| Overall | **C-** | 71/100 |
| On-Page SEO | C- | 63% |
| Usability | C | 73% |
| Performance | D | 62% |
| Social | A- | 92% |

*Note: External audit tools may differ. This is an estimate based on our internal scoring.*

---

*Generated by Fax Strive SEO Bot v3.0*
*Run again after applying fixes to measure improvement*
