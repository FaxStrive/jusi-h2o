import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Softener & Filtration Pricing Tampa Bay',
  description: 'Transparent pricing for water softeners, whole-house filtration, and reverse osmosis in Tampa Bay. Jusi H2O provides upfront quotes after your free in-home water test.',
  alternates: { canonical: 'https://jusih2o.com/pricing' },
  openGraph: {
    title: 'Water Treatment Pricing Tampa Bay | Jusi H2O',
    description: 'Honest, transparent pricing for water softeners, filtration, and reverse osmosis in Tampa Bay. Free in-home water test included with every quote.',
    url: 'https://jusih2o.com/pricing',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Treatment Pricing Tampa Bay' }],
    type: 'website',
  },
}

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a water softener cost in Tampa Bay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Water softener installation in Tampa Bay costs $1,200–$3,500 for a standard residential system. The price depends on system capacity (measured in grains), brand, and installation complexity. High-efficiency or salt-free systems range from $2,500–$5,000. Jusi H2O provides a precise, no-obligation quote after your free in-home water test.' },
    },
    {
      '@type': 'Question',
      name: 'How much does whole-house water filtration cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Whole-house water filtration systems in Tampa Bay cost $800–$2,500 for a single-stage carbon filter, and $2,000–$5,000 for a multi-stage system with sediment pre-filter, carbon block, and post-filter. Systems bundled with a water softener are often more cost-effective.' },
    },
    {
      '@type': 'Question',
      name: 'How much does reverse osmosis installation cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Under-sink reverse osmosis systems cost $400–$900 installed. Annual filter replacement costs $60–$150 depending on the number of stages. All Jusi H2O RO systems include NSF-58 certified components and a free follow-up water test.' },
    },
    {
      '@type': 'Question',
      name: 'What does the JusiCare+ maintenance plan cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'JusiCare+ costs $199/year and includes quarterly salt refills for water softeners, scheduled filter replacements, full system sanitation, annual performance check, priority service scheduling, and lifetime warranty on covered Jusi H2O systems.' },
    },
  ],
}

const pricingItems = [
  {
    service: 'Water Softener Installation',
    range: '$1,200 – $3,500',
    details: 'NSF-44 certified systems sized to your home\'s hardness level and usage. Includes installation, programming, and water test verification.',
    factors: ['System capacity (grains)', 'Brand and technology', 'Installation complexity', 'Existing plumbing condition'],
    href: '/services/water-softeners',
    note: 'Most Tampa Bay homes need a 32,000–64,000 grain system.',
  },
  {
    service: 'Whole-House Water Filtration',
    range: '$800 – $5,000',
    details: 'Single to multi-stage systems removing chlorine, sediment, VOCs, and other contaminants. Often bundled with a softener for maximum protection.',
    factors: ['Number of filter stages', 'Flow rate requirement', 'Contaminants to target', 'Softener bundle discount'],
    href: '/services/water-filtration',
    note: 'Bundling with a water softener saves 10–20% vs. buying separately.',
  },
  {
    service: 'Reverse Osmosis System',
    range: '$400 – $900',
    details: 'Under-sink multi-stage RO for drinking water. Removes 99% of contaminants including lead, arsenic, fluoride, nitrates, and chlorine.',
    factors: ['Number of stages (4–7)', 'Tankless vs. tank system', 'Dedicated faucet style', 'Filter replacement plan'],
    href: '/services/reverse-osmosis',
    note: 'Annual filter replacements: $60–$150/year.',
  },
  {
    service: 'Free Water Testing',
    range: 'Always Free',
    details: 'Professional in-home water test for 10+ parameters: hardness, chlorine, pH, iron, TDS, sulfur, and more. Same-day results. No obligation.',
    factors: [],
    href: '/services/water-testing',
    note: 'Every Jusi H2O quote starts with a free water test.',
  },
  {
    service: 'Water Heater Installation',
    range: '$800 – $3,500',
    details: 'Tankless and traditional water heater installation. Handles all plumbing, electrical/gas connections, permits, and inspections.',
    factors: ['Tankless vs. traditional', 'Gas vs. electric', 'BTU capacity', 'Permit requirements'],
    href: '/services/water-heater-installation',
    note: 'Tankless heaters cost more upfront but save 24–34% on energy.',
  },
  {
    service: 'JusiCare+ Annual Plan',
    range: '$199/year',
    details: 'Comprehensive annual maintenance: quarterly salt refills, scheduled filter changes, system sanitation, priority scheduling, lifetime warranty.',
    factors: [],
    href: '/services/jusicare',
    note: 'Covers water softeners, filtration systems, and RO units installed by Jusi H2O.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Transparent Water Treatment Pricing
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mb-6">
            We believe you should know what things cost before you invite us into your home. These are real price ranges — not bait-and-switch estimates. Your final price depends on your specific situation, which is why every quote starts with a free in-home water test.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105">
              Get Free Water Test + Quote
            </Link>
            <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">
              Call (813) 303-0515
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-text-secondary text-lg leading-relaxed">
              Every Jusi H2O installation begins with a <strong>free in-home water test</strong> — we measure your water&apos;s actual hardness, chlorine, pH, iron, and TDS levels, then recommend the right system for your home. No generic packages, no pressure. Just honest water treatment.
            </p>
          </div>

          <div className="space-y-6">
            {pricingItems.map((item) => (
              <div key={item.service} className="p-6 md:p-8 border border-border-light rounded-2xl hover:border-primary/20 hover:shadow-brand-sm transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-text mb-1">
                      <Link href={item.href} className="hover:text-primary transition-colors">{item.service}</Link>
                    </h2>
                    <p className="text-text-secondary">{item.details}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="font-heading text-2xl font-bold text-primary">{item.range}</span>
                    <span className="block text-sm text-text-tertiary text-right">installed</span>
                  </div>
                </div>
                {item.factors.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-text mb-2">Price depends on:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.factors.map((f) => (
                        <span key={f} className="text-xs px-2.5 py-1 bg-primary-50 text-primary rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                )}
                {item.note && (
                  <p className="text-sm text-secondary font-medium">💡 {item.note}</p>
                )}
              </div>
            ))}
          </div>

          {/* What's Always Included */}
          <div className="mt-12 p-8 bg-primary-50 rounded-2xl">
            <h2 className="font-heading text-2xl font-bold text-text mb-4">What&apos;s Always Included</h2>
            <p className="text-text-secondary mb-4">Every Jusi H2O installation includes:</p>
            <ul className="space-y-2 text-text-secondary">
              {[
                'Free in-home water test (10+ parameters, same-day results)',
                'Honest, no-pressure written quote before any work begins',
                'Professional installation by WQA-certified technicians',
                'System programming to your home\'s exact water hardness',
                'Output water test verification after installation',
                'Homeowner walkthrough — we explain how everything works',
                'Licensed and insured — all work fully documented',
                'Same-day service available in most Tampa Bay areas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Pricing Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'Do you offer financing?', a: 'Yes. Jusi H2O offers financing options for qualified customers. Ask about available plans when scheduling your free water test.' },
                { q: 'Are there any hidden fees?', a: 'No. Your written quote covers the complete job — equipment, installation, programming, and post-install water testing. The only additional cost would be if unexpected plumbing issues are discovered during installation, which we\'ll explain before proceeding.' },
                { q: 'Do prices include permits?', a: 'Yes. Jusi H2O handles all required permits for water treatment installations in Tampa Bay. We pull permits, schedule inspections, and provide documentation.' },
                { q: 'Is the free water test really free?', a: 'Absolutely. Our in-home water test is free with no obligation. We test your water, explain the results in plain language, and provide a written quote. You decide if you want to proceed — zero pressure either way.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-border-light pb-6">
                  <h3 className="font-heading font-semibold text-text mb-2">{item.q}</h3>
                  <p className="text-text-secondary">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10 text-center">
            <h2 className="font-heading text-2xl font-bold text-text mb-3">Get Your Exact Price</h2>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              Schedule your free in-home water test. We&apos;ll test your water, explain exactly what you need (and don&apos;t need), and give you a precise quote with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105">
                Schedule Free Water Test
              </Link>
              <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary-50 transition-colors">
                Call (813) 303-0515
              </a>
            </div>
            <p className="mt-4 text-sm text-text-tertiary">2,500+ five-star reviews · WQA certified · Licensed & insured in Florida</p>
          </div>
        </div>
      </section>
    </main>
  )
}
