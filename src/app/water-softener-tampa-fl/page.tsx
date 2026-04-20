import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Softener Installation Tampa, FL',
  description: 'Jusi H2O installs water softeners in Tampa, FL. Tampa water measures 15–25 GPG — extremely hard. Free in-home water test. 2,500+ five-star reviews. Call (813) 303-0515.',
  alternates: {
    canonical: 'https://jusih2o.com/water-softener-tampa-fl',
  },
  openGraph: {
    title: 'Water Softener Installation Tampa, FL | Jusi H2O',
    description: 'Professional water softener installation in Tampa, FL. Free in-home water test. WQA certified. 2,500+ five-star reviews. Serving all Tampa neighborhoods.',
    url: 'https://jusih2o.com/water-softener-tampa-fl',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Softener Installation Tampa FL' }],
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Jusi H2O',
  description: 'Professional water softener installation and water filtration services in Tampa, FL. Free in-home water testing with same-day results.',
  url: 'https://jusih2o.com',
  telephone: '+18133030515',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7901 4th St N Ste 300',
    addressLocality: 'St. Petersburg',
    addressRegion: 'FL',
    postalCode: '33702',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 27.9506, longitude: -82.4572 },
  areaServed: { '@type': 'City', name: 'Tampa, FL' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: 5.0, reviewCount: 2500, bestRating: 5 },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How hard is the water in Tampa, FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tampa, FL water measures 15–25 grains per gallon (GPG), which is classified as very hard to extremely hard. The U.S. Geological Survey classifies anything above 10.5 GPG as very hard. Tampa draws its water from the Hillsborough River and the Floridan Aquifer, both of which carry high concentrations of calcium and magnesium carbonate minerals. This level of hardness causes accelerated scale buildup in pipes, water heaters, and appliances.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does water softener installation cost in Tampa, FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water softener installation in Tampa, FL typically costs between $1,200 and $3,500 depending on system size, brand, and installation complexity. A whole-home filtration bundle ranges from $2,500 to $5,500. Jusi H2O provides a precise, no-obligation quote after your free in-home water test.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Jusi H2O serve all of Tampa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Jusi H2O serves all Tampa neighborhoods including South Tampa, New Tampa, Westchase, Carrollwood, Ybor City, Hyde Park, Palma Ceia, Davis Islands, and surrounding areas. We cover all of Hillsborough County within a 50-mile radius of St. Petersburg.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can Jusi H2O install a water softener in Tampa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most water softener installations in Tampa are scheduled within 2–5 business days. Installation itself takes 2–4 hours. Same-day and next-day service is available in many cases — call (813) 303-0515 to check current availability.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Jusi H2O', item: 'https://jusih2o.com' },
    { '@type': 'ListItem', position: 2, name: 'Water Softener', item: 'https://jusih2o.com/water-softener' },
    { '@type': 'ListItem', position: 3, name: 'Tampa, FL', item: 'https://jusih2o.com/water-softener-tampa-fl' },
  ],
}

export default function WaterSoftenerTampaPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Jusi H2O</Link>
            <span className="mx-2">/</span>
            <Link href="/water-softener" className="hover:text-white transition-colors">Water Softener</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Tampa, FL</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Water Softener Installation in Tampa, FL
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mb-8">
            Tampa water tests at 15–25 GPG — among the hardest in Florida. Jusi H2O installs NSF-certified water softeners for Tampa homeowners with a free in-home water test and no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105">
              Get Free Water Test
            </Link>
            <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">
              Call (813) 303-0515
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-200">
            <span>✓ 2,500+ five-star reviews</span>
            <span>✓ WQA & NSF certified</span>
            <span>✓ Free in-home water test</span>
            <span>✓ Same-day service available</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Why Tampa Needs Water Softeners */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-text mb-6">Why Tampa Homeowners Need Water Softeners</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Tampa&apos;s water supply draws from the Hillsborough River and the Floridan Aquifer System — one of the world&apos;s most productive aquifer systems. As groundwater percolates through Florida&apos;s thick limestone formations, it dissolves calcium and magnesium carbonate minerals, resulting in water that tests 15–25 grains per gallon (GPG). The U.S. Geological Survey classifies anything above 10.5 GPG as &quot;very hard.&quot;
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              At this hardness level, Tampa homeowners experience accelerated scale buildup in water heaters (reducing efficiency by up to 25%), shortened appliance lifespan (30–40% reduction according to the Water Quality Research Foundation), poor soap lathering requiring up to 75% more detergent, and the characteristic white deposits on faucets, showerheads, and glassware.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              A properly sized water softener eliminates these problems by removing hardness minerals through ion exchange before they enter your home&apos;s plumbing. Most Tampa homeowners see payback within 3–5 years through reduced appliance repairs, lower energy bills, and decreased soap and cleaning product costs.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '15–25 GPG', label: 'Tampa water hardness' },
              { value: '25%', label: 'Water heater efficiency loss from scale' },
              { value: '2,500+', label: 'Five-star reviews across Tampa Bay' },
              { value: '3–5 yrs', label: 'Typical payback period' },
            ].map((stat) => (
              <div key={stat.label} className="p-5 bg-primary-50 rounded-xl text-center">
                <div className="font-heading text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services in Tampa */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Water Softener Services in Tampa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Water Softener Installation', desc: 'NSF-44 certified systems sized for your Tampa home\'s specific hardness level. Installed in 2–4 hours.', href: '/services/water-softeners' },
                { title: 'Free In-Home Water Test', desc: 'We test your Tampa water for hardness, chlorine, pH, iron, and TDS. Same-day results, no obligation.', href: '/services/water-testing' },
                { title: 'Whole-House Filtration', desc: 'Remove chlorine, sediment, and contaminants at every faucet. Often paired with a water softener.', href: '/services/water-filtration' },
                { title: 'Reverse Osmosis', desc: 'Under-sink RO for drinking water. Removes 99% of contaminants including lead and fluoride.', href: '/services/reverse-osmosis' },
                { title: 'JusiCare+ Maintenance', desc: 'Annual plan at $199/year. Quarterly salt refills, filter changes, lifetime warranty on covered systems.', href: '/services/jusicare' },
                { title: 'Water Heater Installation', desc: 'Pair your softener with a new tankless or traditional water heater for maximum efficiency.', href: '/services/water-heater-installation' },
              ].map((service) => (
                <Link key={service.title} href={service.href} className="p-5 border border-border-light rounded-xl hover:border-primary/30 hover:shadow-brand-sm transition-all group">
                  <h3 className="font-heading font-semibold text-text mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-text-secondary">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Tampa Neighborhoods */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-4">Tampa Neighborhoods We Serve</h2>
            <p className="text-text-secondary mb-4">Jusi H2O serves all of Tampa including:</p>
            <div className="flex flex-wrap gap-2">
              {['South Tampa', 'Hyde Park', 'Palma Ceia', 'Davis Islands', 'Westchase', 'Carrollwood', 'New Tampa', 'Ybor City', 'Seminole Heights', 'Channelside', 'Riverview', 'Brandon', 'Temple Terrace', 'Lutz', 'Land O\' Lakes', 'Wesley Chapel'].map((n) => (
                <span key={n} className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How hard is the water in Tampa, FL?',
                  a: 'Tampa water measures 15–25 grains per gallon (GPG) — classified as very hard to extremely hard by the U.S. Geological Survey. Most of Hillsborough County falls in this range due to the high mineral content of the Floridan Aquifer. This is significantly harder than the national average of 10 GPG and causes visible scale buildup, appliance damage, and dry skin and hair.'
                },
                {
                  q: 'How much does water softener installation cost in Tampa?',
                  a: 'Water softener installation in Tampa typically costs $1,200–$3,500 for a standard residential system, depending on system capacity, brand, and installation complexity. Whole-home filtration bundles range from $2,500–$5,500. Jusi H2O provides a precise, no-obligation quote after your free in-home water test — no surprises.'
                },
                {
                  q: 'How long does water softener installation take?',
                  a: 'Most residential water softener installations in Tampa take 2–4 hours from start to finish. Our technician installs the system, programs it to your home\'s specific water hardness level, verifies it\'s working correctly, and walks you through how to maintain it before leaving.'
                },
                {
                  q: 'Is softened water safe to drink in Tampa?',
                  a: 'Yes, softened water is safe to drink for most Tampa residents. The softening process adds a small amount of sodium — about 20–40 mg per 8 oz glass depending on your water\'s hardness level. Those on strict low-sodium diets may prefer a reverse osmosis system under the kitchen sink for drinking water, which removes the added sodium along with other contaminants.'
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-border-light pb-6">
                  <h3 className="font-heading font-semibold text-text mb-2">{item.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10">
            <h2 className="font-heading text-2xl font-bold text-text mb-3">Ready for Soft Water in Tampa?</h2>
            <p className="text-text-secondary mb-6">
              Schedule your free in-home water test. Marquis Pendergrass and the Jusi H2O team have served Tampa Bay homeowners since 2011 — 2,500+ five-star reviews, WQA certified, NSF-certified systems, licensed and insured in Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105">
                Get Free Water Test
              </Link>
              <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary-50 transition-colors">
                Call (813) 303-0515
              </a>
            </div>
          </div>

          {/* Related Links */}
          <nav className="mt-10 pt-8 border-t border-border-light" aria-label="Related pages">
            <h2 className="font-heading text-lg font-semibold text-text mb-3">Related Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/water-softener-st-petersburg-fl" className="text-primary hover:underline text-sm">St. Petersburg, FL</Link>
              <Link href="/water-softener-clearwater-fl" className="text-primary hover:underline text-sm">Clearwater, FL</Link>
              <Link href="/water-softener-brandon-fl" className="text-primary hover:underline text-sm">Brandon, FL</Link>
              <Link href="/water-softener-sarasota-fl" className="text-primary hover:underline text-sm">Sarasota, FL</Link>
              <Link href="/water-softener-in-hillsborough-county-fl" className="text-primary hover:underline text-sm">Hillsborough County</Link>
              <Link href="/water-softener-in-pinellas-county-fl" className="text-primary hover:underline text-sm">Pinellas County</Link>
              <Link href="/service-areas" className="text-primary hover:underline text-sm">All Service Areas</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}
