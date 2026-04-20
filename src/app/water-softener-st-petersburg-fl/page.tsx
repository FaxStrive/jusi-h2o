import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Softener Installation St. Petersburg, FL',
  description: 'Jusi H2O installs water softeners in St. Petersburg, FL. Hard water causes scale, appliance damage & dry skin. Free water test. 2,500+ reviews. Call (813) 303-0515.',
  alternates: { canonical: 'https://jusih2o.com/water-softener-st-petersburg-fl' },
  openGraph: {
    title: 'Water Softener Installation St. Petersburg, FL | Jusi H2O',
    description: 'Professional water softener installation in St. Petersburg. Free in-home water test. WQA & NSF certified. Headquartered in St. Pete — your local experts.',
    url: 'https://jusih2o.com/water-softener-st-petersburg-fl',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Softener St. Petersburg FL' }],
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Jusi H2O',
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
  geo: { '@type': 'GeoCoordinates', latitude: 27.7676, longitude: -82.6403 },
  areaServed: { '@type': 'City', name: 'St. Petersburg, FL' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: 5.0, reviewCount: 2500, bestRating: 5 },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How hard is the water in St. Petersburg, FL?',
      acceptedAnswer: { '@type': 'Answer', text: 'St. Petersburg water draws from Pinellas County utilities and tests at 10–18 grains per gallon (GPG) — classified as hard to very hard. At this level, scale buildup in water heaters reduces efficiency by 20–25% and shortens appliance lifespan significantly. Jusi H2O is headquartered in St. Petersburg and offers free water hardness testing to give you your home\'s exact measurement.' },
    },
    {
      '@type': 'Question',
      name: 'Is Jusi H2O local to St. Petersburg?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Jusi H2O is headquartered at 7901 4th St N Ste 300, St. Petersburg, FL 33702. We\'ve been serving St. Petersburg and Pinellas County homeowners since 2011. This means faster response times, local knowledge of St. Pete water quality, and technicians who know your neighborhood.' },
    },
    {
      '@type': 'Question',
      name: 'What neighborhoods in St. Pete does Jusi H2O serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'Jusi H2O serves all St. Petersburg neighborhoods including Downtown St. Pete, Historic Kenwood, Snell Isle, Shore Acres, Euclid-St. Paul, Crescent Lake, Disston Heights, Gulfport, Coquina Key, and surrounding areas. We cover all of Pinellas County.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Jusi H2O', item: 'https://jusih2o.com' },
    { '@type': 'ListItem', position: 2, name: 'Water Softener', item: 'https://jusih2o.com/water-softener' },
    { '@type': 'ListItem', position: 3, name: 'St. Petersburg, FL', item: 'https://jusih2o.com/water-softener-st-petersburg-fl' },
  ],
}

export default function WaterSoftenerStPetersburgPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Jusi H2O</Link>
            <span className="mx-2">/</span>
            <Link href="/water-softener" className="hover:text-white transition-colors">Water Softener</Link>
            <span className="mx-2">/</span>
            <span className="text-white">St. Petersburg, FL</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Water Softener Installation in St. Petersburg, FL
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mb-8">
            Jusi H2O is headquartered in St. Petersburg — your local water softener experts since 2011. Free in-home water test, WQA & NSF certified systems, and 2,500+ five-star reviews.
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
            <span>✓ Headquartered in St. Pete</span>
            <span>✓ 2,500+ five-star reviews</span>
            <span>✓ WQA & NSF certified</span>
            <span>✓ Free in-home water test</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-text mb-6">Your Local St. Petersburg Water Softener Experts</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Jusi H2O isn&apos;t just a company that serves St. Petersburg — we&apos;re based here. Our office is located at 7901 4th St N in St. Pete, and our technicians live and work in the communities we serve. That means faster response times, deep knowledge of local water quality, and a reputation built entirely on St. Pete word-of-mouth.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              St. Petersburg water, sourced primarily through Pinellas County Utilities, tests at 10–18 grains per gallon (GPG). While slightly softer than Tampa on average, it&apos;s still firmly in the &quot;hard&quot; to &quot;very hard&quot; range — enough to cause visible scale on faucets, spotted glassware, dry skin after showering, and accelerated wear on water heaters and appliances.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our WQA-certified technicians have installed hundreds of water softeners throughout St. Pete&apos;s neighborhoods — from the historic bungalows of Kenwood to the waterfront homes of Snell Isle and Shore Acres. We know the plumbing challenges common to each area and design systems to fit your specific situation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '10–18 GPG', label: 'St. Pete water hardness' },
              { value: 'Since 2011', label: 'Serving St. Petersburg' },
              { value: '7901 4th St N', label: 'Our St. Pete office' },
              { value: '2,500+', label: 'Five-star reviews' },
            ].map((stat) => (
              <div key={stat.label} className="p-5 bg-primary-50 rounded-xl text-center">
                <div className="font-heading text-xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">St. Petersburg Neighborhoods We Serve</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Downtown St. Pete', 'Historic Kenwood', 'Snell Isle', 'Shore Acres', 'Euclid-St. Paul', 'Crescent Lake', 'Disston Heights', 'Gulfport', 'Coquina Key', 'St. Pete Beach', 'Pinellas Park', 'Largo', 'Seminole', 'Treasure Island'].map((n) => (
                <span key={n} className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How hard is the water in St. Petersburg?', a: 'St. Petersburg water tests at 10–18 GPG — classified as hard to very hard. At this hardness level, scale accumulates inside water heaters (reducing efficiency by up to 25%), and appliances like dishwashers and washing machines wear out 30–40% faster than in soft-water areas. A free Jusi H2O water test gives you your home\'s exact reading.' },
                { q: 'Is Jusi H2O local to St. Pete?', a: 'Yes — Jusi H2O is headquartered at 7901 4th St N Ste 300, St. Petersburg, FL. We\'ve been serving St. Pete since 2011. This means faster scheduling, technicians who know your neighborhood\'s plumbing, and a local reputation built on 2,500+ reviews from your neighbors.' },
                { q: 'How much does a water softener cost in St. Petersburg?', a: 'Water softener installation in St. Petersburg typically ranges from $1,200 to $3,500 for a standard residential system. Whole-home filtration bundles cost $2,500–$5,500. Jusi H2O provides a precise, no-obligation quote after your free in-home water test.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-border-light pb-6">
                  <h3 className="font-heading font-semibold text-text mb-2">{item.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10">
            <h2 className="font-heading text-2xl font-bold text-text mb-3">Schedule Your Free Water Test in St. Pete</h2>
            <p className="text-text-secondary mb-6">Your neighbors trust us — 2,500+ five-star reviews from Tampa Bay homeowners. WQA certified, NSF-certified systems, licensed and insured in Florida.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all">Get Free Water Test</Link>
              <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary-50 transition-colors">Call (813) 303-0515</a>
            </div>
          </div>

          <nav className="mt-10 pt-8 border-t border-border-light" aria-label="Related pages">
            <h2 className="font-heading text-lg font-semibold text-text mb-3">Related Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/water-softener-tampa-fl" className="text-primary hover:underline text-sm">Tampa, FL</Link>
              <Link href="/water-softener-clearwater-fl" className="text-primary hover:underline text-sm">Clearwater, FL</Link>
              <Link href="/water-softener-brandon-fl" className="text-primary hover:underline text-sm">Brandon, FL</Link>
              <Link href="/water-softener-sarasota-fl" className="text-primary hover:underline text-sm">Sarasota, FL</Link>
              <Link href="/water-softener-in-pinellas-county-fl" className="text-primary hover:underline text-sm">Pinellas County</Link>
              <Link href="/service-areas" className="text-primary hover:underline text-sm">All Service Areas</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}
