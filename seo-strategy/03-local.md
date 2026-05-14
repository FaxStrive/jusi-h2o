# Local SEO Status

## Shipped Phase 3 (2026-05-14)

### Local grid
- 4 services x 20 cities = 80 combinations
- 5 combinations are owned by existing static pages and excluded via SKIP_SLUGS
- Net 75 dynamic pages live at `/{service-slug}-{city-slug}-fl`
- Each page: hero, intro tied to Tampa Bay water issues, "Water Quality at a Glance" panel (CCR data where available, otherwise note-only narrative), condition to action service description, FAQ (3 to 4 questions), CTA
- Service schema with provider @id referencing org
- BreadcrumbList schema
- NO Person schema on local routes (verified)

### Cities covered (20)
Tampa, St. Petersburg, Clearwater, Brandon, Sarasota, Bradenton, Lakeland, Plant City, Riverview, Wesley Chapel, Land O'Lakes, New Port Richey, Largo, Palm Harbor, Pinellas Park, Seminole, Dunedin, Tarpon Springs, Bartow, Winter Haven.

### Services covered (4)
- water-softener (5 city/static pages preserved, 15 dynamic)
- whole-house-filtration (20 dynamic)
- reverse-osmosis (20 dynamic)
- well-water-treatment (20 dynamic)

### CCR enrichment status
Round 1 ships utility names and homepage URLs for every city. No CCR numbers populated this round (all `ccr` fields undefined; pages render the "consult your utility's most recent CCR" fallback narrative). Tier 2 enrichment to be a follow-up PR using `pdftotext -layout` on real Tampa Bay utility CCR PDFs.

## Outstanding

- Tier 2 CCR data extraction: target the 4 biggest utilities first (Tampa Water Dept, St. Petersburg Water Resources, Pinellas County Utilities, Hillsborough County Public Utilities)
- Optimize Google Business Profile primary category and service tags
- Get Yelp, BBB, Angi profiles structured for AI citation
