# Site: Jusi H2O

## Site Details
- **URL:** https://jusih2o.com
- **Phone:** (813) 303-0515
- **CMS:** Next.js 14.2.15 + React 18 + Tailwind + GSAP + Lottie + Lenis
- **Business Type:** Local Service, Water Treatment + Plumbing
- **Location:** Tampa Bay, FL (Hillsborough, Pinellas, Manatee, Sarasota, Polk Counties)
- **Founded:** 2011 by Marquis Pendergrass
- **Current Phase:** Audit

## Services
- Water softeners
- Whole-house filtration
- Reverse osmosis
- Water testing
- Well water treatment
- Plumbing
- Water heater installation
- Commercial solutions

## Trust Signals
- Founded 2011 (14+ years)
- 2,500 reviews
- 5.0★ rating
- 15+ years experience
- 10+ technicians
- 50-mile service radius
- 7 NSF certifications
- WQA certified

## Target Keywords
- water softener Tampa FL
- water filtration Hillsborough County
- water treatment Tampa Bay
- reverse osmosis Tampa
- whole house water filter St. Petersburg
- water heater installation Tampa
- plumbing Tampa FL
- commercial water treatment Tampa
- well water treatment Sarasota
- water softener Polk County

## Main Competitors
- Pure Viva (Tampa, direct competitor, same market)
- RainSoft Tampa
- Kinetico Tampa Bay

## Current SEO Status
- **SEO Health Score:** 71/100 (pre-fix audit)
- **GEO Score:** 28/32
- **Last Audit:** 2026-04-19
- **Current Phase:** Fix → Upgrade

## Fixes Applied (2026-04-19)
- ✅ Fixed llms-qa.json, removed 5 "undefined, undefined" broken entries, replaced with real city/service Q&As (18 total)
- ✅ Rewrote llms.txt, comprehensive with all services, service areas, key facts
- ✅ Added sameAs entity links to Organization schema (Facebook, Instagram, Google Maps, Yelp, BBB)
- ✅ Changed schema type from HomeAndConstructionBusiness → Plumber (more specific, better local signals)
- ✅ Replaced deprecated HowTo schema (removed Sept 2023) with valid ItemList/process schema
- ✅ Added speakable schema to key pages (/, /faq, all main service pages)
- ✅ Fixed Bing verification placeholder, needs real code from Bing Webmaster Tools
- ✅ Added LCP preload hint for hero image
- ✅ Fixed footer copyright: "2026" → "© 2011–2026 Jusi H2O. All rights reserved. Licensed & Insured in Florida."
- ✅ Fixed water-filtration title: 62 chars → 49 chars (within 60-char limit with template)
- ✅ Fixed well-water title: 56 chars → 50 chars
- ✅ Allowed Applebot-Extended in robots.txt (Apple Intelligence indexing)
- ✅ Added llms-full.txt and llms-qa.json to robots.txt discovery comment

## Additional Fixes Applied (2026-04-19)
- ✅ Fixed all blog authors: "Jusi H2O Team" → "Marquis Pendergrass" (MDX files + blog-posts.ts, 14 articles total)
- ✅ Created 5 city pages: Tampa, St. Petersburg, Clearwater, Brandon, Sarasota, all with LocalBusiness schema, FAQPage schema, BreadcrumbList, full content, neighborhood lists, city-specific hardness data
- ✅ Created /pricing page, transparent pricing for all services with FAQPage schema
- ✅ Created /certifications page, detailed NSF-42/44/53/55/58/401 + WQA explanation with FAQPage schema
- ✅ Added pricing + certifications to footer navigation
- ✅ Written 3 new blog articles: water heater cost, best water softener buying guide, commercial water treatment
- ✅ Registered new articles in blog-posts.ts
- ✅ Updated sitemap.ts, added all new pages with correct lastModified dates, removed duplicate homepage entry
- ✅ Fixed footer: "Services" section gets pricing + certifications links

## Still To Do
- [ ] Bing Webmaster Tools, get verification code from Bing Webmaster Tools and add to layout.tsx
- [ ] Convert 13 JPG/PNG images to WebP/AVIF format
- [ ] Add GA4 conversion event tracking (form submit, phone click, booking)
- [ ] Build Wikipedia/Wikidata entity presence for Jusi H2O brand
- [ ] Create YouTube channel, GEO brand signal (0.737 correlation with AI citations)
- [ ] Add Reddit presence in r/tampa, r/tampabay, r/watertreatment subreddits
- [ ] Pursue Google Maps verified listing optimization (primary category review)
- [ ] Get Yelp, BBB, and Angi profile optimized (cited by ChatGPT)

## Opportunities
- Plumbing service pages (expands keyword surface significantly)
- Water heater content cluster
- Commercial water treatment content
- Location pages for each county (Hillsborough, Pinellas, Manatee, Sarasota, Polk)
- 2,500 review count should be prominently displayed everywhere

## Quick Commands
```
/seo audit https://jusih2o.com
/geo audit https://jusih2o.com
/seo local https://jusih2o.com
/seo technical https://jusih2o.com
```

## Phase 3 + Local Grid Shipped 2026-05-14

Branch: `phase3-local-2026-05-14`

### What landed
- **3 pillar pages** under `/water-treatment/[slug]` rendered from `src/lib/pillars.ts`:
  - `/water-treatment/hard-water-tampa-bay`
  - `/water-treatment/florida-well-water`
  - `/water-treatment/reverse-osmosis-drinking-water`
- **3 long-form blog posts** registered in `src/lib/blog-posts.ts` (cost, diagnostic, regulation playbooks):
  - `/blog/water-softener-cost-tampa-bay-2026`
  - `/blog/tampa-water-smells-chlorine-rotten-eggs`
  - `/blog/pfas-tampa-bay-drinking-water-2026`
- **75 dynamic local pages** at `/{service-slug}-{city-slug}-fl` rendered from `src/lib/local-services.ts` + `src/app/[localSlug]/page.tsx`. 4 services x 20 Tampa Bay cities, with SKIP_SLUGS excluding the 5 existing static water-softener city pages and 2 county pages.
- **Org schema upgrade** in `src/components/seo/schema-markup.tsx`: `@type` array `["HomeAndConstructionBusiness","Plumber"]`, `@id` set to `https://jusih2o.com/#organization`, speakable spec added, areaServed expanded to all 20 cities. All Service schemas now reference org `@id` via `provider`.
- **Blog detail page upgrade**: Article + FAQPage + BreadcrumbList schemas with Person author and `worksFor.@id` linking to org. FAQPage extracted automatically from h3/p pairs under the "Frequently Asked Questions" h2.
- **Sitemap**: now imports `localPages` and `pillars` to auto-generate URLs.
- **Em-dash sweep**: zero em-dashes across `src/`, `public/`, and root content files.
- **Image library**: 3 unique blog-hero JPGs (1200x630) and 4 service-hero JPGs (1200x630), all sourced from Wikimedia Commons with credit. Mirrored to `~/Desktop/seoman-image-library/jusi-h2o/`, manifest updated.

### Verification gates passed
- `npx tsc --noEmit` clean
- `npm run build` succeeds with 150 static pages generated
- Zero em-dashes (grep)
- Zero Person schema on local-grid routes
- All image md5s unique vs the SEOMAN image library manifest

### CCR enrichment
Tier 1 (this PR): every city has the real utility name and utility homepage URL. No CCR numbers populated; pages render narrative fallback directing readers to the utility's most recent CCR.

Tier 2 (follow-up PR): use `pdftotext -layout` on Tampa Bay utility CCR PDFs to populate verbatim numbers in the `CcrData` block per city.

### Strategy docs
New `seo-strategy/` directory: INDEX, content roadmap, technical, local, GEO, entity. Concise per-area state for resuming work.
