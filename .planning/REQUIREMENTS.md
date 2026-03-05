# Requirements: Jusi H2O

**Defined:** 2026-03-05
**Core Value:** Homeowners can quickly understand their water problems, see how Jusi H2O solves them, and schedule a free in-home water test with zero friction.

## v1 Requirements

### Foundation

- [ ] **FOUND-01**: Next.js 14.2.15 project with Tailwind, Framer Motion, and all animation dependencies installed
- [ ] **FOUND-02**: Brand color system as CSS custom properties (deep blue, green, dark blue-gray, neutrals)
- [ ] **FOUND-03**: Typography system with premium font pairing
- [ ] **FOUND-04**: Responsive layout system (320px, 768px, 1024px, 1440px breakpoints)
- [ ] **FOUND-05**: Hamburger navigation with smooth open/close animation
- [ ] **FOUND-06**: Footer with newsletter signup, sitemap, contact info, social links
- [ ] **FOUND-07**: Page transition animation via template.tsx + Framer Motion
- [ ] **FOUND-08**: Smooth scroll with Lenis

### Home Page

- [ ] **HOME-01**: Scroll-stopping hero with looping water video background + overlay + text animation + multi-layer motion
- [ ] **HOME-02**: Trust bar with NSF certifications, WQA badge, 2500+ reviews, 5-star rating, 15+ years
- [ ] **HOME-03**: Water problems section showing common issues (hard water, chlorine, lead, iron, etc.) with animated icons
- [ ] **HOME-04**: Services overview cards with hover effects linking to Services page
- [ ] **HOME-05**: How it works / 3-step process section (Test, Recommend, Install) with animated reveals
- [ ] **HOME-06**: Featured testimonials carousel/grid with customer quotes
- [ ] **HOME-07**: Brand partners section (Kinetico, Culligan, Pentair, Fleck, etc.)
- [ ] **HOME-08**: CTA section to schedule free water test
- [ ] **HOME-09**: Service area preview with Tampa Bay region mention

### Services Page

- [ ] **SERV-01**: Services page hero with animated headline and background treatment
- [ ] **SERV-02**: Whole-house filtration system showcase with image and description
- [ ] **SERV-03**: Reverse osmosis system showcase
- [ ] **SERV-04**: Water softener system showcase
- [ ] **SERV-05**: Water testing service showcase
- [ ] **SERV-06**: Commercial water treatment showcase
- [ ] **SERV-07**: Well water treatment showcase
- [ ] **SERV-08**: Maintenance/JusiCare+ program showcase with benefits list
- [ ] **SERV-09**: CTA for free water test on services page

### About Page

- [ ] **ABOUT-01**: About page hero with company story headline
- [ ] **ABOUT-02**: Company origin story section (expansion from residential home services)
- [ ] **ABOUT-03**: Mission statement display
- [ ] **ABOUT-04**: Company values section (Integrity, Quality, Customer First, Innovation, Responsibility)
- [ ] **ABOUT-05**: Key stats display (15+ years, 10+ technicians, 2500+ reviews, 5-star rating)
- [ ] **ABOUT-06**: Certifications and credentials display (NSF-42, NSF-44, NSF-53, NSF-55, NSF-58, NSF-401)
- [ ] **ABOUT-07**: CTA for scheduling water test

### Before & After Page

- [ ] **BA-01**: Before & After page hero
- [ ] **BA-02**: Case study: Whole Home Hard Water Solution (Hillsborough County)
- [ ] **BA-03**: Case study: Family Water Quality Upgrade (Manatee County)
- [ ] **BA-04**: Visual before/after comparison sections with images
- [ ] **BA-05**: CTA to schedule water test

### Testimonials Page

- [ ] **TEST-01**: Testimonials page hero
- [ ] **TEST-02**: Display all 4 testimonials (Sara L., Ray and Alissa, Lily S., Daniel R.) with locations
- [ ] **TEST-03**: Google review stats display (2500+ reviews, 5-star)
- [ ] **TEST-04**: Awards/recognition section
- [ ] **TEST-05**: CTA for free water test

### Service Area Page

- [ ] **AREA-01**: Service area page hero
- [ ] **AREA-02**: Interactive/visual map showing Tampa Bay coverage area
- [ ] **AREA-03**: County listing (Hillsborough, Pinellas, Manatee, Sarasota, Polk)
- [ ] **AREA-04**: Same-day response time highlight
- [ ] **AREA-05**: CTA for checking service availability / scheduling test

### FAQ Page

- [ ] **FAQ-01**: FAQ page hero
- [ ] **FAQ-02**: FAQ accordion with categories (water quality, systems, installation, maintenance, pricing)
- [ ] **FAQ-03**: At least 15 relevant FAQs about water filtration
- [ ] **FAQ-04**: CTA for contacting with additional questions

### Contact Page

- [ ] **CONT-01**: Contact page hero
- [ ] **CONT-02**: Contact form (name, email, phone, message, service interest)
- [ ] **CONT-03**: Phone number display (770-875-9932)
- [ ] **CONT-04**: Email display (support@jusih2o.com)
- [ ] **CONT-05**: Social media links (Facebook, Instagram)
- [ ] **CONT-06**: Service hours / response time information

### Animation & Interaction

- [ ] **ANIM-01**: 3+ advanced Framer Motion patterns used across the site (useScroll chains, magnetic hover, velocity effects)
- [ ] **ANIM-02**: 2+ different animation types per page (never all fadeUp)
- [ ] **ANIM-03**: Staggered list animations for cards/grid sections
- [ ] **ANIM-04**: Scroll-triggered reveals using Intersection Observer
- [ ] **ANIM-05**: Micro-interactions on all interactive elements (buttons, cards, links)
- [ ] **ANIM-06**: prefers-reduced-motion support

### Performance & SEO

- [ ] **PERF-01**: Lighthouse Performance score 90+
- [ ] **PERF-02**: CLS < 0.1, FCP < 1.5s, LCP < 2.5s
- [ ] **PERF-03**: All images via next/image with proper sizing
- [ ] **PERF-04**: SEO meta tags on every page (title, description, OG tags)
- [ ] **PERF-05**: Semantic HTML structure
- [ ] **PERF-06**: npm run build passes clean

## v2 Requirements

### Blog

- **BLOG-01**: Blog listing page with articles
- **BLOG-02**: Individual blog post pages
- **BLOG-03**: Blog categories and tags

### Enhanced Features

- **ENH-01**: Live chat integration (third-party widget)
- **ENH-02**: Online booking system with calendar
- **ENH-03**: Customer portal for JusiCare+ members
- **ENH-04**: Before/after slider component with drag interaction

## Out of Scope

| Feature | Reason |
|---------|--------|
| E-commerce / product ordering | Service-based business, not retail |
| Customer login/portal | Not needed for v1 lead generation |
| Dark mode | CLAUDE.md prohibits |
| Blog | Client deferred to future |
| Backend/database | Static site with form submissions |
| Multilingual support | English-only market |
| A/B testing | Future optimization |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 2 | Pending |
| FOUND-06 | Phase 2 | Pending |
| FOUND-07 | Phase 1 | Pending |
| FOUND-08 | Phase 1 | Pending |
| HOME-01 | Phase 3 | Pending |
| HOME-02 | Phase 3 | Pending |
| HOME-03 | Phase 3 | Pending |
| HOME-04 | Phase 3 | Pending |
| HOME-05 | Phase 3 | Pending |
| HOME-06 | Phase 3 | Pending |
| HOME-07 | Phase 3 | Pending |
| HOME-08 | Phase 3 | Pending |
| HOME-09 | Phase 3 | Pending |
| SERV-01 | Phase 4 | Pending |
| SERV-02 | Phase 4 | Pending |
| SERV-03 | Phase 4 | Pending |
| SERV-04 | Phase 4 | Pending |
| SERV-05 | Phase 4 | Pending |
| SERV-06 | Phase 4 | Pending |
| SERV-07 | Phase 4 | Pending |
| SERV-08 | Phase 4 | Pending |
| SERV-09 | Phase 4 | Pending |
| ABOUT-01 | Phase 5 | Pending |
| ABOUT-02 | Phase 5 | Pending |
| ABOUT-03 | Phase 5 | Pending |
| ABOUT-04 | Phase 5 | Pending |
| ABOUT-05 | Phase 5 | Pending |
| ABOUT-06 | Phase 5 | Pending |
| ABOUT-07 | Phase 5 | Pending |
| BA-01 | Phase 6 | Pending |
| BA-02 | Phase 6 | Pending |
| BA-03 | Phase 6 | Pending |
| BA-04 | Phase 6 | Pending |
| BA-05 | Phase 6 | Pending |
| TEST-01 | Phase 6 | Pending |
| TEST-02 | Phase 6 | Pending |
| TEST-03 | Phase 6 | Pending |
| TEST-04 | Phase 6 | Pending |
| TEST-05 | Phase 6 | Pending |
| AREA-01 | Phase 7 | Pending |
| AREA-02 | Phase 7 | Pending |
| AREA-03 | Phase 7 | Pending |
| AREA-04 | Phase 7 | Pending |
| AREA-05 | Phase 7 | Pending |
| FAQ-01 | Phase 7 | Pending |
| FAQ-02 | Phase 7 | Pending |
| FAQ-03 | Phase 7 | Pending |
| FAQ-04 | Phase 7 | Pending |
| CONT-01 | Phase 8 | Pending |
| CONT-02 | Phase 8 | Pending |
| CONT-03 | Phase 8 | Pending |
| CONT-04 | Phase 8 | Pending |
| CONT-05 | Phase 8 | Pending |
| CONT-06 | Phase 8 | Pending |
| ANIM-01 | Phase 3 | Pending |
| ANIM-02 | Phase 3 | Pending |
| ANIM-03 | Phase 3 | Pending |
| ANIM-04 | Phase 3 | Pending |
| ANIM-05 | Phase 3 | Pending |
| ANIM-06 | Phase 3 | Pending |
| PERF-01 | Phase 9 | Pending |
| PERF-02 | Phase 9 | Pending |
| PERF-03 | Phase 9 | Pending |
| PERF-04 | Phase 9 | Pending |
| PERF-05 | Phase 9 | Pending |
| PERF-06 | Phase 9 | Pending |

**Coverage:**
- v1 requirements: 60 total
- Mapped to phases: 60
- Unmapped: 0

---
*Requirements defined: 2026-03-05*
*Last updated: 2026-03-05 after initial definition*
