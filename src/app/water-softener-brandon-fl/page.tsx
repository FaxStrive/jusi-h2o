import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Softener Installation Brandon, FL',
  description: 'Jusi H2O installs water softeners in Brandon, FL. Brandon Hillsborough water is extremely hard. Free in-home water test. NSF certified. Call (813) 303-0515.',
  alternates: { canonical: 'https://jusih2o.com/water-softener-brandon-fl' },
  openGraph: {
    title: 'Water Softener Installation Brandon, FL | Jusi H2O',
    description: 'Professional water softener installation in Brandon, FL. Free water test, WQA & NSF certified, 2,500+ five-star reviews. Serving all Brandon neighborhoods.',
    url: 'https://jusih2o.com/water-softener-brandon-fl',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Softener Brandon FL' }],
    type: 'website',
  },
}

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Plumber',
    name: 'Jusi H2O', url: 'https://jusih2o.com', telephone: '+18133030515',
    address: { '@type': 'PostalAddress', streetAddress: '7901 4th St N Ste 300', addressLocality: 'St. Petersburg', addressRegion: 'FL', postalCode: '33702', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 27.9378, longitude: -82.2859 },
    areaServed: { '@type': 'City', name: 'Brandon, FL' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 5.0, reviewCount: 2500, bestRating: 5 },
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How hard is the water in Brandon, FL?', acceptedAnswer: { '@type': 'Answer', text: 'Brandon is part of Hillsborough County and receives water that tests at 15–25 GPG — extremely hard by U.S. Geological Survey standards. Brandon\'s location in inland Hillsborough County means its water draws heavily from the Floridan Aquifer, which has very high mineral content. This causes rapid scale buildup in water heaters, dishwashers, and plumbing.' } },
      { '@type': 'Question', name: 'Does Jusi H2O serve Valrico, Riverview, and surrounding Brandon areas?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Jusi H2O serves all of the Brandon, FL area including Valrico, Riverview, Seffner, Lithia, and throughout eastern Hillsborough County. We cover the full area within our 50-mile service radius of St. Petersburg.' } },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Jusi H2O', item: 'https://jusih2o.com' },
      { '@type': 'ListItem', position: 2, name: 'Water Softener', item: 'https://jusih2o.com/water-softener' },
      { '@type': 'ListItem', position: 3, name: 'Brandon, FL', item: 'https://jusih2o.com/water-softener-brandon-fl' },
    ],
  },
]

export default function WaterSoftenerBrandonPage() {
  return (
    <main className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" /></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Jusi H2O</Link>
            <span className="mx-2">/</span>
            <Link href="/water-softener" className="hover:text-white transition-colors">Water Softener</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Brandon, FL</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Water Softener Installation in Brandon, FL</h1>
          <p className="text-xl text-primary-100 max-w-2xl mb-8">Brandon water tests at 15–25 GPG — among the hardest in Hillsborough County. Jusi H2O provides free in-home water testing and NSF-certified water softener installation for Brandon homeowners.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105">Get Free Water Test</Link>
            <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (813) 303-0515</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-200">
            <span>✓ Serving Brandon since 2011</span>
            <span>✓ WQA & NSF certified</span>
            <span>✓ Free in-home water test</span>
            <span>✓ 2,500+ five-star reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-text mb-6">Why Brandon Homeowners Need Water Softeners</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">Brandon, FL sits in eastern Hillsborough County, drawing its water from one of the highest-mineral aquifer regions in the state. Brandon area water tests at 15–25 grains per gallon (GPG) — the U.S. Geological Survey classifies anything above 10.5 GPG as &quot;very hard.&quot; Many Brandon homes test even higher depending on their specific neighborhood and water source.</p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">At this hardness level, calcium and magnesium minerals coat the inside of your water heater at a rate that reduces efficiency by up to 25% within the first few years. The same minerals clog showerheads, leave white deposits on fixtures, cause soap to lather poorly, and scratch glassware in the dishwasher. Many Brandon homeowners first call us after noticing their water heater or dishwasher failing prematurely.</p>
            <p className="text-text-secondary text-lg leading-relaxed">A Jusi H2O water softener removes these minerals at the point of entry to your home&apos;s plumbing — before they can cause damage. We size every system to your home&apos;s specific hardness level and water usage, so you get the right capacity without overpaying.</p>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-4">Brandon Areas We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {['Brandon', 'Valrico', 'Riverview', 'Seffner', 'Lithia', 'Fishhawk', 'Bloomingdale', 'Plant City', 'Dover', 'Sun City Center'].map((n) => (
                <span key={n} className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How hard is the water in Brandon, FL?', a: 'Brandon water typically tests at 15–25 GPG — classified as very hard to extremely hard. Brandon\'s location in inland Hillsborough County means the water draws heavily from the Floridan Aquifer with very high mineral content. This causes rapid scale buildup in pipes, water heaters, and appliances.' },
                { q: 'Does Jusi H2O serve Valrico, Riverview, and Seffner?', a: 'Yes. Jusi H2O serves all of the greater Brandon area including Valrico, Riverview, Seffner, Lithia, Fishhawk, Bloomingdale, and throughout eastern Hillsborough County.' },
                { q: 'How long does water softener installation take in Brandon?', a: 'Most water softener installations in Brandon take 2–4 hours. Our technician installs the system, programs it to your home\'s exact hardness level, tests the output water, and walks you through operation before leaving.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-border-light pb-6">
                  <h3 className="font-heading font-semibold text-text mb-2">{item.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10">
            <h2 className="font-heading text-2xl font-bold text-text mb-3">Schedule Your Free Water Test in Brandon</h2>
            <p className="text-text-secondary mb-6">2,500+ five-star reviews. WQA certified, NSF-certified systems. Licensed and insured in Florida. Free in-home water test with same-day results.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all">Get Free Water Test</Link>
              <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary-50 transition-colors">Call (813) 303-0515</a>
            </div>
          </div>

          <nav className="mt-10 pt-8 border-t border-border-light" aria-label="Related pages">
            <h2 className="font-heading text-lg font-semibold text-text mb-3">Related Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/water-softener-tampa-fl" className="text-primary hover:underline text-sm">Tampa, FL</Link>
              <Link href="/water-softener-st-petersburg-fl" className="text-primary hover:underline text-sm">St. Petersburg, FL</Link>
              <Link href="/water-softener-clearwater-fl" className="text-primary hover:underline text-sm">Clearwater, FL</Link>
              <Link href="/water-softener-sarasota-fl" className="text-primary hover:underline text-sm">Sarasota, FL</Link>
              <Link href="/water-softener-in-hillsborough-county-fl" className="text-primary hover:underline text-sm">Hillsborough County</Link>
              <Link href="/service-areas" className="text-primary hover:underline text-sm">All Service Areas</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}
