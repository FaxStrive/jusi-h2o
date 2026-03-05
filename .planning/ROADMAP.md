# Roadmap: Jusi H2O

**Created:** 2026-03-05
**Phases:** 9
**Requirements:** 60

## Milestone 1: v1 Launch

### Phase 1: Foundation & Design System
**Goal:** Establish the complete design system, global styles, typography, color tokens, smooth scroll, and page transition framework.
**Requirements:** FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-07, FOUND-08

**Success Criteria:**
1. CSS custom properties defined for all brand colors with light mode palette
2. Typography system with premium font pairing renders correctly
3. Tailwind config extended with brand tokens
4. Lenis smooth scroll working across pages
5. template.tsx page transitions animate on navigation
6. npm run build passes

### Phase 2: Navigation & Layout Shell
**Goal:** Build hamburger navigation, footer, and the shared layout components used by all pages.
**Requirements:** FOUND-05, FOUND-06

**Success Criteria:**
1. Hamburger menu opens/closes with smooth animation
2. Navigation links to all 8 pages
3. Footer renders newsletter signup form, sitemap, contact info, social links
4. Layout is responsive across all breakpoints
5. Navigation and footer appear on every page

### Phase 3: Home Page (Hero + All Sections)
**Goal:** Build the complete homepage with scroll-stopping hero, trust bar, water problems, services overview, process, testimonials, partners, CTA, and service area preview. This is the flagship page.
**Requirements:** HOME-01 through HOME-09, ANIM-01 through ANIM-06

**Success Criteria:**
1. Hero has looping water video background with overlay, text animation, and multi-layer motion
2. Trust bar displays certifications, review count, star rating, years in business
3. Water problems section shows 9 common issues with animated icons
4. Services cards have hover effects and link to Services page
5. 3-step process section has animated reveals
6. Testimonials display with stagger animation
7. Partners section shows brand logos
8. CTA section drives to scheduling
9. 3+ advanced Framer Motion patterns used (useScroll, magnetic, velocity)
10. All animations respect prefers-reduced-motion

### Phase 4: Services Page
**Goal:** Build the services page showcasing all 7 system types plus JusiCare+ maintenance program.
**Requirements:** SERV-01 through SERV-09

**Success Criteria:**
1. Services page hero with gradient bg + animated headline
2. Each service type has dedicated section with image, description, benefits
3. JusiCare+ section highlights ongoing maintenance benefits
4. 2+ different animation types used
5. CTA present for scheduling water test
6. All sections have unique background treatments

### Phase 5: About Page
**Goal:** Build the about page with company story, mission, values, stats, and certifications.
**Requirements:** ABOUT-01 through ABOUT-07

**Success Criteria:**
1. About hero with company narrative headline
2. Origin story section is compelling and personal
3. 5 company values displayed with visual treatment
4. Stats section shows key numbers with animated counters
5. NSF certifications displayed clearly
6. CTA for water test scheduling

### Phase 6: Before & After + Testimonials Pages
**Goal:** Build both proof-of-results pages showing case studies, visual comparisons, customer reviews, and awards.
**Requirements:** BA-01 through BA-05, TEST-01 through TEST-05

**Success Criteria:**
1. Before & After page shows both case studies with detail
2. Visual comparison sections with relevant imagery
3. Testimonials page displays all 4 customer quotes with names/locations
4. Google review stats prominently shown (2500+, 5-star)
5. Awards/recognition section populated
6. Both pages have unique hero treatments

### Phase 7: Service Area + FAQ Pages
**Goal:** Build the service area page with map/coverage visualization and the FAQ page with accordion.
**Requirements:** AREA-01 through AREA-05, FAQ-01 through FAQ-04

**Success Criteria:**
1. Service area map/visual showing Tampa Bay coverage
2. Counties listed with visual treatment
3. Same-day response highlighted
4. FAQ accordion with 15+ questions organized by category
5. Both pages have hero sections with bg treatments
6. CTAs present on both pages

### Phase 8: Contact Page
**Goal:** Build the contact page with form, phone, email, social links, and response time info.
**Requirements:** CONT-01 through CONT-06

**Success Criteria:**
1. Contact form captures name, email, phone, message, service interest
2. Phone number clickable (tel: link)
3. Email clickable (mailto: link)
4. Social media links to Facebook and Instagram
5. Service hours/response time displayed
6. Contact page hero with bg treatment

### Phase 9: Performance Polish & SEO
**Goal:** Optimize all pages for Lighthouse 90+, add SEO meta tags, verify build, and final quality pass.
**Requirements:** PERF-01 through PERF-06

**Success Criteria:**
1. Lighthouse Performance 90+ on all pages
2. CLS < 0.1, FCP < 1.5s, LCP < 2.5s
3. All images use next/image with proper width/height
4. Every page has unique title, description, OG tags
5. Semantic HTML verified (headings hierarchy, landmarks)
6. npm run build passes with zero errors

---
*Created: 2026-03-05*
*Last updated: 2026-03-05 after initial creation*
