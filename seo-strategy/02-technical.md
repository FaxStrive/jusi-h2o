# Technical SEO Status

## Shipped Phase 3 (2026-05-14)

- Org schema upgraded: @type now `["HomeAndConstructionBusiness","Plumber"]` array
- Org @id set to `https://jusih2o.com/#organization` (referenced by all Article and Service schemas)
- areaServed expanded to include all 20 Tampa Bay cities served by the local grid
- speakable spec added at org level (cssSelector includes h1, h2, .speakable, [data-speakable], [data-bluf])
- hasCredential preserved with the 7 NSF certifications and WQA
- sameAs preserved (Facebook, Instagram, Google Maps, Yelp, BBB)
- Sitemap updated to include 3 pillar URLs, 3 new blog URLs, and all 75 dynamic local pages
- Em-dash sweep: zero em-dashes across `src/`, `public/`, and CLAUDE.md

## Outstanding

- Bing Webmaster Tools verification code (placeholder; needs real code from BWT)
- Convert remaining JPG/PNG images to WebP/AVIF
- GA4 conversion event tracking on form submit, phone click, booking
- CCR Tier 2 enrichment (most cities still have undefined `ccr` in local-services.ts)
