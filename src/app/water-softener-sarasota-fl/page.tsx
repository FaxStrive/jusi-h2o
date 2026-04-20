import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Softener Installation Sarasota, FL',
  description: 'Jusi H2O installs water softeners in Sarasota, FL. Hard water damages appliances and causes dry skin. Free in-home water test. NSF certified. Call (813) 303-0515.',
  alternates: { canonical: 'https://jusih2o.com/water-softener-sarasota-fl' },
  openGraph: {
    title: 'Water Softener Installation Sarasota, FL | Jusi H2O',
    description: 'Professional water softener installation in Sarasota, FL. Free in-home water test, WQA & NSF certified systems, 2,500+ five-star reviews.',
    url: 'https://jusih2o.com/water-softener-sarasota-fl',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Softener Sarasota FL' }],
    type: 'website',
  },
}

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Plumber',
    name: 'Jusi H2O', url: 'https://jusih2o.com', telephone: '+18133030515',
    address: { '@type': 'PostalAddress', streetAddress: '7901 4th St N Ste 300', addressLocality: 'St. Petersburg', addressRegion: 'FL', postalCode: '33702', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 27.3364, longitude: -82.5307 },
    areaServed: { '@type': 'City', name: 'Sarasota, FL' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 5.0, reviewCount: 2500, bestRating: 5 },
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How hard is the water in Sarasota, FL?', acceptedAnswer: { '@type': 'Answer', text: 'Sarasota water, sourced from the Peace River and the Floridan Aquifer, tests at 12–20 GPG — classified as very hard. Sarasota County Utilities treats the water but cannot remove hardness minerals without a home water softener. At this level, scale buildup in water heaters reduces efficiency by up to 25% and appliances wear out 30–40% faster.' } },
      { '@type': 'Question', name: 'Does Jusi H2O serve Venice, North Port, and Englewood?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Jusi H2O serves all of Sarasota County including Sarasota, Venice, North Port, Englewood, Osprey, Siesta Key, and Nokomis. We serve Sarasota County within our 50-mile service radius.' } },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Jusi H2O', item: 'https://jusih2o.com' },
      { '@type': 'ListItem', position: 2, name: 'Water Softener', item: 'https://jusih2o.com/water-softener' },
      { '@type': 'ListItem', position: 3, name: 'Sarasota, FL', item: 'https://jusih2o.com/water-softener-sarasota-fl' },
    ],
  },
]

export default function WaterSoftenerSarasotaPage() {
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
            <span className="text-white">Sarasota, FL</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Water Softener Installation in Sarasota, FL</h1>
          <p className="text-xl text-primary-100 max-w-2xl mb-8">Sarasota water tests at 12–20 GPG — very hard. Protect your home&apos;s appliances, plumbing, and your skin and hair with an NSF-certified water softener from Jusi H2O. Free in-home water test.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105">Get Free Water Test</Link>
            <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (813) 303-0515</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-200">
            <span>✓ Serving Sarasota County</span>
            <span>✓ WQA & NSF certified</span>
            <span>✓ Free in-home water test</span>
            <span>✓ 2,500+ five-star reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-text mb-6">Water Softeners for Sarasota Homes</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">Sarasota County Utilities sources water from the Peace River Manasota Regional Water Supply Authority and the Floridan Aquifer — both high in dissolved calcium and magnesium. Despite treatment, hardness minerals pass through to your home, testing at 12–20 grains per gallon (GPG). That&apos;s &quot;very hard&quot; by U.S. Geological Survey classification, and hard enough to cause real damage to your home over time.</p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">Sarasota homeowners frequently ask us about dry skin and brittle hair, white scale on their beautiful modern fixtures, spotted glassware from the dishwasher, and water heaters that seem to need replacing every 8–10 years instead of lasting 15+. All of these are direct effects of hard water that a properly installed water softener eliminates.</p>
            <p className="text-text-secondary text-lg leading-relaxed">Jusi H2O serves all of Sarasota County within our 50-mile service radius. Our team has installed water softeners in Sarasota, Venice, North Port, Englewood, and throughout the county. We provide free in-home water testing, same-day quotes, and installation typically within 2–5 business days.</p>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-4">Sarasota Areas We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {['Downtown Sarasota', 'Siesta Key', 'Longboat Key', 'Venice', 'North Port', 'Englewood', 'Osprey', 'Nokomis', 'Lakewood Ranch', 'Palmer Ranch', 'South Sarasota'].map((n) => (
                <span key={n} className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How hard is the water in Sarasota?', a: 'Sarasota water tests at 12–20 GPG — very hard by U.S. Geological Survey standards. The hardness comes from the Peace River and Floridan Aquifer sources, both rich in calcium and magnesium minerals. A free Jusi H2O water test gives you your home\'s exact hardness measurement.' },
                { q: 'Does Jusi H2O serve Venice, North Port, and Englewood?', a: 'Yes. Jusi H2O serves all of Sarasota County including Sarasota, Venice, North Port, Englewood, Osprey, Siesta Key, Nokomis, and Lakewood Ranch. Call (813) 303-0515 to schedule service.' },
                { q: 'What water treatment services does Jusi H2O offer in Sarasota?', a: 'In Sarasota, Jusi H2O installs water softeners, whole-house filtration systems, reverse osmosis drinking water systems, water heaters, and offers free in-home water testing. We also offer JusiCare+ ($199/year) for ongoing maintenance, quarterly salt refills, and lifetime warranty coverage.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-border-light pb-6">
                  <h3 className="font-heading font-semibold text-text mb-2">{item.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10">
            <h2 className="font-heading text-2xl font-bold text-text mb-3">Schedule Your Free Water Test in Sarasota</h2>
            <p className="text-text-secondary mb-6">2,500+ five-star reviews. WQA certified. NSF-certified systems. Licensed and insured in Florida. Free in-home water test — no obligation.</p>
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
              <Link href="/water-softener-brandon-fl" className="text-primary hover:underline text-sm">Brandon, FL</Link>
              <Link href="/service-areas" className="text-primary hover:underline text-sm">All Service Areas</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}
