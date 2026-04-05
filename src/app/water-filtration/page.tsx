import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Filtration Tampa Bay | Jusi H2O',
  description: 'Whole-house water filtration systems in Tampa Bay from Jusi H2O. Remove chlorine, sediment, and contaminants at every faucet. Free water test included.',
  alternates: {
    canonical: 'https://jusih2o.com/water-filtration',
  },
  openGraph: {
    title: 'Water Filtration Tampa Bay | Jusi H2O',
    description: 'Whole-house water filtration systems in Tampa Bay from Jusi H2O. Remove chlorine, sediment, and contaminants at every faucet. Free water test included.',
    url: 'https://jusih2o.com/water-filtration',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Filtration Services Tampa Bay' }],
    type: 'website',
  },
}

export default function WaterFiltrationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Water Filtration","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+1-813-303-0515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/water-filtration","description":"Jusi H2O provides professional water filtration services in your area. Free consultations available."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How Much Does Water Filtration Cost?","acceptedAnswer":{"@type":"Answer","text":"Water Filtration costs vary based on your home's specific needs, existing infrastructure, and system specifications. Jusi H2O provides free in-home assessments with detailed written quotes — so you know exactly what you&apos;ll pay before committing to anything."}},{"@type":"Question","name":"How Long Does Water Filtration Take?","acceptedAnswer":{"@type":"Answer","text":"Most residential water filtration projects are completed in a single day. More complex installations may take 2 days. During your free consultation with Jusi H2O, we&apos;ll give you a specific timeline for your your area project."}},{"@type":"Question","name":"Do I Need a Permit for Water Filtration?","acceptedAnswer":{"@type":"Answer","text":"Permit requirements depend on the specific work being done and local municipal regulations. Jusi H2O handles all required local permits as part of our service — we&apos;re familiar with local requirements and manage the paperwork on your behalf."}},{"@type":"Question","name":"What Warranty Does Jusi H2O Provide for Water Filtration?","acceptedAnswer":{"@type":"Answer","text":"Jusi H2O provides manufacturer warranties on all equipment and a labor guarantee on all installations. Specific warranty terms are provided in writing before work begins. Most equipment carries 5–10 year manufacturer warranties."}},{"@type":"Question","name":"Does Jusi H2O Provide Water Filtration in your area?","acceptedAnswer":{"@type":"Answer","text":"Yes, Jusi H2O serves your area and surrounding communities. Call (813) 303-0515 to confirm service availability in your specific neighborhood."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-5xl font-bold mb-6">Water Filtration</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional water filtration services from Jusi H2O — serving your area and surrounding areas.
            Free consultations. Licensed and insured.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+18133030515"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Call (813) 303-0515
            </a>
          </address>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">Why Choose Jusi H2O for Water Filtration</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Serving your area homeowners with professional water filtration since day one. Here&apos;s what sets us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Free In-Home Assessment</h3>
              <p className="text-gray-600">We evaluate your specific needs before recommending anything. No pressure, no obligation — just honest, expert advice about the right water filtration solution for your home.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">All Jusi H2O technicians are fully licensed, bonded, and insured. We provide documentation before work begins and stand behind everything we do.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Our relationship doesn&apos;t end at installation. Jusi H2O provides maintenance plans, warranty service, and responsive support to keep your system performing at its best for years.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">You receive a detailed written estimate before any work begins. No hidden fees, no surprise charges, and no pressure tactics — ever.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Local Expertise</h3>
              <p className="text-gray-600">Jusi H2O understands local conditions, building codes, and infrastructure. Our recommendations are informed by real experience in this specific market.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Quality Equipment</h3>
              <p className="text-gray-600">We use professional-grade, manufacturer-warranted equipment — not the entry-level systems found at big-box stores. Better equipment means better performance and longer service life.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">How Jusi H2O Delivers Water Filtration in your area</h2>
          <ol className="space-y-8">
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 1">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Free Consultation & Assessment</h3>
                <p className="text-gray-600">A certified Jusi H2O specialist visits your home, evaluates your specific situation, and answers your questions. We test, measure, and assess — then explain your options clearly with no sales pressure.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 2">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Custom Recommendation & Transparent Quote</h3>
                <p className="text-gray-600">Based on the assessment, we provide a written recommendation tailored to your home&apos;s needs. Your quote includes all equipment, installation labor, and applicable permits — no hidden costs.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 3">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                <p className="text-gray-600">Our licensed technicians complete the installation efficiently with minimal disruption to your home. We follow all manufacturer specifications and local code requirements.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 4">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Testing & Commissioning</h3>
                <p className="text-gray-600">Before we leave, we verify the system is operating correctly, test performance against spec, and walk you through operation and maintenance. You leave the day fully confident in your new system.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 5">
                5
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Ongoing Support & Maintenance</h3>
                <p className="text-gray-600">Jusi H2O offers maintenance plans and is available for any follow-up questions or service needs. We&apos;re your long-term partner, not just an installer.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Much Does Water Filtration Cost?</h3>
              <p className="text-gray-700">Water Filtration costs vary based on your home&apos;s specific needs, existing infrastructure, and system specifications. Jusi H2O provides free in-home assessments with detailed written quotes — so you know exactly what you&apos;ll pay before committing to anything.</p>
            </div>
            <div className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Long Does Water Filtration Take?</h3>
              <p className="text-gray-700">Most residential water filtration projects are completed in a single day. More complex installations may take 2 days. During your free consultation with Jusi H2O, we&apos;ll give you a specific timeline for your your area project.</p>
            </div>
            <div className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-lg mb-2">Do I Need a Permit for Water Filtration?</h3>
              <p className="text-gray-700">Permit requirements depend on the specific work being done and local municipal regulations. Jusi H2O handles all required local permits as part of our service — we&apos;re familiar with local requirements and manage the paperwork on your behalf.</p>
            </div>
            <div className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-lg mb-2">What Warranty Does Jusi H2O Provide for Water Filtration?</h3>
              <p className="text-gray-700">Jusi H2O provides manufacturer warranties on all equipment and a labor guarantee on all installations. Specific warranty terms are provided in writing before work begins. Most equipment carries 5–10 year manufacturer warranties.</p>
            </div>
            <div className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Jusi H2O Provide Water Filtration in your area?</h3>
              <p className="text-gray-700">Yes, Jusi H2O serves your area and surrounding communities. Call (813) 303-0515 to confirm service availability in your specific neighborhood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Ready to Get Started with Jusi H2O?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Jusi H2O offers free consultations with no obligation in your area. We&apos;ll assess your needs and provide a clear, honest recommendation.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+18133030515"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Call (813) 303-0515
            </a>
          </address>
        </div>
      </section>
    
        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related resources">
          <h2 className="text-lg font-semibold mb-3">Related Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/water-filtration-in-hillsborough-county-fl" className="text-blue-600 hover:underline">Water Filtration in Hillsborough County, FL</Link></li>
            <li><Link href="/water-filtration-in-pinellas-county-fl" className="text-blue-600 hover:underline">Water Filtration in Pinellas County, FL</Link></li>
            <li><Link href="/water-filtration-in-sarasota-county-fl" className="text-blue-600 hover:underline">Water Filtration in Sarasota County, FL</Link></li>
            <li><Link href="/water-filtration-in-tampa-bay-fl" className="text-blue-600 hover:underline">Water Filtration in Tampa Bay, FL</Link></li>
            <li><Link href="/water-filtration-in-florida" className="text-blue-600 hover:underline">Water Filtration in Florida</Link></li>
          </ul>
        </nav>
    </main>
  )
}
