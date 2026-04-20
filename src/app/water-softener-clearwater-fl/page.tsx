import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Softener Installation Clearwater, FL',
  description: 'Jusi H2O installs water softeners in Clearwater, FL. Hard water is damaging your appliances and skin. Free in-home water test. NSF certified. Call (813) 303-0515.',
  alternates: { canonical: 'https://jusih2o.com/water-softener-clearwater-fl' },
  openGraph: {
    title: 'Water Softener Installation Clearwater, FL | Jusi H2O',
    description: 'Professional water softener installation in Clearwater, FL. Free in-home water test, WQA & NSF certified systems, 2,500+ five-star reviews.',
    url: 'https://jusih2o.com/water-softener-clearwater-fl',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Softener Clearwater FL' }],
    type: 'website',
  },
}

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Plumber',
    name: 'Jusi H2O', url: 'https://jusih2o.com', telephone: '+18133030515',
    address: { '@type': 'PostalAddress', streetAddress: '7901 4th St N Ste 300', addressLocality: 'St. Petersburg', addressRegion: 'FL', postalCode: '33702', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 27.9659, longitude: -82.8001 },
    areaServed: { '@type': 'City', name: 'Clearwater, FL' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 5.0, reviewCount: 2500, bestRating: 5 },
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How hard is the water in Clearwater, FL?', acceptedAnswer: { '@type': 'Answer', text: 'Clearwater water, supplied by Pinellas County Utilities, tests at 10–16 GPG — classified as hard to very hard. Clearwater\'s coastal location doesn\'t reduce water hardness; the mineral content comes from the underground aquifer, not the ocean. This level causes scale buildup on showerheads, faucets, and inside appliances.' } },
      { '@type': 'Question', name: 'Does Jusi H2O serve Clearwater Beach?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Jusi H2O serves all of Clearwater including Clearwater Beach, Safety Harbor, Dunedin, and throughout Pinellas County. We install water softeners, whole-house filtration systems, and reverse osmosis drinking water systems for Clearwater homeowners.' } },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Jusi H2O', item: 'https://jusih2o.com' },
      { '@type': 'ListItem', position: 2, name: 'Water Softener', item: 'https://jusih2o.com/water-softener' },
      { '@type': 'ListItem', position: 3, name: 'Clearwater, FL', item: 'https://jusih2o.com/water-softener-clearwater-fl' },
    ],
  },
]

export default function WaterSoftenerClearwaterPage() {
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
            <span className="text-white">Clearwater, FL</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Water Softener Installation in Clearwater, FL</h1>
          <p className="text-xl text-primary-100 max-w-2xl mb-8">Clearwater water tests at 10–16 GPG — hard enough to scale your pipes, shorten appliance life, and dry out your skin. Jusi H2O offers free in-home testing and NSF-certified water softener installation.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105">Get Free Water Test</Link>
            <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (813) 303-0515</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-200">
            <span>✓ Serving Clearwater since 2011</span>
            <span>✓ WQA & NSF certified</span>
            <span>✓ Free in-home water test</span>
            <span>✓ 2,500+ five-star reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-text mb-6">Water Softeners for Clearwater Homes</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">Clearwater is a beautiful city, but its water is hard. Pinellas County Utilities delivers water that tests at 10–16 grains per gallon (GPG) — well into the &quot;hard&quot; range by U.S. Geological Survey standards. The hardness minerals come from the Floridan Aquifer, which supplies most of Pinellas County regardless of proximity to the Gulf.</p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">For Clearwater homeowners, this means scale deposits on fixtures, white spots on glassware, soap that doesn&apos;t lather well, and water heaters working 20–25% harder than they need to. A properly sized water softener eliminates all of these problems and typically pays for itself in 3–5 years through energy savings and reduced appliance repairs.</p>
            <p className="text-text-secondary text-lg leading-relaxed">Jusi H2O has installed water softeners throughout Clearwater, Clearwater Beach, Dunedin, Safety Harbor, and all of Pinellas County since 2011. Our technicians know the local plumbing, understand Clearwater water quality, and install NSF-44 certified systems sized specifically for your home&apos;s water usage and hardness level.</p>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-4">Clearwater Areas We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {['Clearwater Beach', 'Downtown Clearwater', 'Dunedin', 'Safety Harbor', 'Palm Harbor', 'Tarpon Springs', 'Oldsmar', 'East Lake', 'Countryside', 'Pinellas Park'].map((n) => (
                <span key={n} className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How hard is the water in Clearwater?', a: 'Clearwater water tests at 10–16 GPG — classified as hard to very hard. This level causes visible scale buildup on faucets and showerheads, spotted dishes and glassware, and reduced efficiency in water heaters and appliances. A free Jusi H2O water test gives you the exact hardness reading for your home.' },
                { q: 'Does Jusi H2O serve Clearwater Beach?', a: 'Yes. Jusi H2O serves all of Clearwater including Clearwater Beach, Dunedin, Safety Harbor, and throughout Pinellas County. We install water softeners, whole-house filtration, and reverse osmosis systems for all Clearwater homeowners.' },
                { q: 'What is the cost of water softener installation in Clearwater?', a: 'Water softener installation in Clearwater typically costs $1,200–$3,500 depending on system capacity, brand, and installation complexity. Jusi H2O provides a precise, no-obligation quote after your free in-home water test — call (813) 303-0515 to schedule.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-border-light pb-6">
                  <h3 className="font-heading font-semibold text-text mb-2">{item.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10">
            <h2 className="font-heading text-2xl font-bold text-text mb-3">Ready for Better Water in Clearwater?</h2>
            <p className="text-text-secondary mb-6">2,500+ five-star reviews. WQA certified. NSF-certified systems. Licensed and insured in Florida. Free in-home water test with no obligation.</p>
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
