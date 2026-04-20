import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NSF & WQA Certifications | Jusi H2O Tampa Bay',
  description: 'Jusi H2O holds 7 NSF certifications and WQA certification — the highest standards in water treatment. Learn what each certification means for your home\'s water quality.',
  alternates: { canonical: 'https://jusih2o.com/certifications' },
  openGraph: {
    title: 'NSF & WQA Certifications | Jusi H2O Tampa Bay',
    description: 'Jusi H2O holds 7 NSF certifications verifying our systems meet the highest standards for safety and performance. WQA certified technicians serving Tampa Bay.',
    url: 'https://jusih2o.com/certifications',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O NSF WQA Certifications' }],
    type: 'website',
  },
}

const certificationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is NSF certification for water treatment?',
      acceptedAnswer: { '@type': 'Answer', text: 'NSF International is an independent, accredited public health and safety organization that tests and certifies water treatment products. NSF certification verifies that a product\'s materials are safe, that it reduces the contaminants it claims to reduce, and that it performs as advertised under real-world conditions. NSF-certified systems are validated by third-party testing — not just manufacturer claims.' },
    },
    {
      '@type': 'Question',
      name: 'What is WQA certification?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Water Quality Association (WQA) is the leading industry organization for water treatment professionals in the United States. WQA certification requires water treatment specialists to demonstrate knowledge of water chemistry, treatment technologies, and professional standards. WQA-certified technicians are trained to properly diagnose water quality issues and recommend appropriate solutions.' },
    },
    {
      '@type': 'Question',
      name: 'Why does NSF certification matter?',
      acceptedAnswer: { '@type': 'Answer', text: 'Without NSF certification, a water treatment system\'s performance claims are unverified. NSF testing confirms that the system actually reduces the contaminants it claims to, that the materials won\'t leach harmful chemicals into your water, and that the system performs consistently under real household conditions. When you choose NSF-certified equipment, you\'re choosing verified performance — not marketing claims.' },
    },
  ],
}

const certs = [
  {
    name: 'WQA Certified',
    full: 'Water Quality Association',
    what: 'Industry certification for water treatment professionals',
    means: 'Our technicians are trained and tested by the Water Quality Association — the leading professional body for water treatment specialists in the U.S. WQA certification requires ongoing education to maintain, ensuring our team stays current with the latest water treatment technologies and standards.',
    applies: 'All Jusi H2O technicians and service personnel',
    logo: 'WQA',
  },
  {
    name: 'NSF-42',
    full: 'NSF/ANSI 42 — Aesthetic Effects',
    what: 'Reduction of taste, odor, and chlorine',
    means: 'NSF-42 certified systems are independently verified to reduce chlorine taste and odor, sediment, and other aesthetic contaminants that affect water taste and smell. This certification applies to our whole-house carbon filtration systems and reverse osmosis post-filters.',
    applies: 'Whole-house filtration, RO post-filters',
    logo: 'NSF 42',
  },
  {
    name: 'NSF-44',
    full: 'NSF/ANSI 44 — Cation Exchange Water Softeners',
    what: 'Water softener performance and material safety',
    means: 'NSF-44 is the specific certification for residential cation exchange water softeners. It verifies that the softener reduces hardness to the level it claims, that the resin and brine tank materials are safe and won\'t contaminate your water, and that the system\'s salt efficiency meets performance standards. This is the most important certification for water softeners.',
    applies: 'All Jusi H2O water softener systems',
    logo: 'NSF 44',
  },
  {
    name: 'NSF-53',
    full: 'NSF/ANSI 53 — Health Effects',
    what: 'Reduction of health-concern contaminants',
    means: 'NSF-53 certifies that a filtration system reduces specific health-concern contaminants including lead, cysts (Giardia, Cryptosporidium), PFAS, and other contaminants with established health effects. This is one of the most rigorous NSF standards — systems must demonstrate verified reduction of contaminants at the levels claimed under real household flow conditions.',
    applies: 'Whole-house filtration with health-effect reduction claims',
    logo: 'NSF 53',
  },
  {
    name: 'NSF-55',
    full: 'NSF/ANSI 55 — Ultraviolet Microbiological Water Treatment Systems',
    what: 'UV disinfection system performance',
    means: 'NSF-55 certifies ultraviolet (UV) water treatment systems for their ability to inactivate bacteria, viruses, and other microorganisms. Class A systems achieve a minimum 3-log (99.9%) reduction of bacteria and 4-log (99.99%) reduction of viruses. This certification applies to our well water UV disinfection systems.',
    applies: 'UV disinfection systems for well water treatment',
    logo: 'NSF 55',
  },
  {
    name: 'NSF-58',
    full: 'NSF/ANSI 58 — Reverse Osmosis Drinking Water Treatment Systems',
    what: 'RO system performance and material safety',
    means: 'NSF-58 is the specific certification for reverse osmosis systems. It verifies that the membrane and filtration stages reduce contaminants to the levels claimed (including lead, arsenic, nitrates, fluoride, chromium, and dissolved solids), that all materials in contact with drinking water are safe, and that the system performs consistently. All Jusi H2O RO systems carry NSF-58 certification.',
    applies: 'All Jusi H2O reverse osmosis systems',
    logo: 'NSF 58',
  },
  {
    name: 'NSF-401',
    full: 'NSF/ANSI 401 — Emerging Contaminants',
    what: 'Reduction of emerging contaminants',
    means: 'NSF-401 certifies systems for reducing emerging contaminants — a category that includes prescription drugs, over-the-counter medications, herbicides, pesticides, and PFAS chemicals that aren\'t yet regulated under Safe Drinking Water Act standards but are increasingly found in water supplies. This certification reflects our commitment to addressing the newest water quality concerns, not just traditional contaminants.',
    applies: 'Advanced filtration systems with emerging contaminant reduction claims',
    logo: 'NSF 401',
  },
]

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Jusi H2O</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Certifications</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Our Certifications & Standards
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mb-6">
            Jusi H2O holds 7 NSF certifications and WQA certification — the highest independently verified standards in residential water treatment. Here&apos;s what each one means for your home.
          </p>
          <div className="flex flex-wrap gap-3">
            {['WQA', 'NSF-42', 'NSF-44', 'NSF-53', 'NSF-55', 'NSF-58', 'NSF-401'].map((cert) => (
              <span key={cert} className="px-4 py-2 bg-white/15 text-white text-sm font-bold rounded-full">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-text mb-4">Why Certifications Matter</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            The water treatment industry is largely unregulated at the federal level. Any company can claim their system &quot;removes 99% of contaminants&quot; without independent verification. NSF certification changes that — it requires third-party testing that verifies a system actually performs as claimed, that materials are safe, and that performance is consistent under real household conditions.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            When you choose Jusi H2O, you&apos;re choosing systems whose performance is verified by NSF International — an independent, accredited public health organization. Not manufacturer claims. Not marketing materials. Independent testing.
          </p>
        </div>
      </section>

      {/* Certifications Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {certs.map((cert) => (
              <div key={cert.name} className="p-6 md:p-8 border border-border-light rounded-2xl">
                <div className="flex items-start gap-5 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary text-xs text-center leading-tight px-1">{cert.logo}</span>
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-text">{cert.name}</h2>
                    <p className="text-sm text-text-tertiary">{cert.full}</p>
                    <p className="text-sm font-semibold text-secondary mt-1">{cert.what}</p>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-3">{cert.means}</p>
                <p className="text-sm text-text-tertiary"><strong>Applies to:</strong> {cert.applies}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-text mb-6">Certification Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'What is NSF certification?', a: 'NSF International is an independent, accredited public health and safety organization that tests and certifies water treatment products. NSF certification verifies that a product reduces the contaminants it claims to, that its materials are safe, and that it performs consistently under real-world conditions.' },
                { q: 'What is WQA certification?', a: 'The Water Quality Association (WQA) is the leading industry organization for water treatment professionals. WQA certification requires technicians to demonstrate knowledge of water chemistry, treatment technologies, and professional standards — and to maintain that knowledge through ongoing education.' },
                { q: 'Why does NSF certification matter?', a: 'Without NSF certification, a system\'s performance claims are unverified. NSF testing provides independent confirmation that a system works as advertised. When you choose NSF-certified equipment, you\'re choosing verified performance — not marketing claims.' },
                { q: 'Are all Jusi H2O systems NSF certified?', a: 'Yes. Every system Jusi H2O installs uses NSF-certified components appropriate for its function — NSF-44 for water softeners, NSF-58 for reverse osmosis, NSF-42/53 for filtration systems, and NSF-55 for UV disinfection.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-border-light pb-6">
                  <h3 className="font-heading font-semibold text-text mb-2">{item.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10 text-center">
            <h2 className="font-heading text-2xl font-bold text-text mb-3">Ready for Certified Water Treatment?</h2>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">Schedule your free in-home water test. WQA certified technicians. NSF-certified systems. 2,500+ five-star reviews. Licensed and insured in Florida.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105">Get Free Water Test</Link>
              <a href="tel:+18133030515" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary-50 transition-colors">Call (813) 303-0515</a>
            </div>
          </div>

          <nav className="mt-10 pt-8 border-t border-border-light" aria-label="Related pages">
            <h2 className="font-heading text-lg font-semibold text-text mb-3">Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="text-primary hover:underline text-sm">About Jusi H2O</Link>
              <Link href="/services" className="text-primary hover:underline text-sm">Our Services</Link>
              <Link href="/pricing" className="text-primary hover:underline text-sm">Pricing</Link>
              <Link href="/services/water-softeners" className="text-primary hover:underline text-sm">Water Softeners</Link>
              <Link href="/services/reverse-osmosis" className="text-primary hover:underline text-sm">Reverse Osmosis</Link>
              <Link href="/faq" className="text-primary hover:underline text-sm">FAQ</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}
