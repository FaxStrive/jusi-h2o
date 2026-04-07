import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete Water Treatment Solutions Tampa Bay',
  description: 'Complete water treatment solutions in Tampa Bay by Jusi H2O. Custom systems for hard water, chlorine, iron, and contaminants. Free consultation.',
  alternates: {
    canonical: 'https://jusih2o.com/water-treatment',
  },
  openGraph: {
    title: 'Complete Water Treatment Solutions Tampa Bay | Jusi H2O',
    description: 'Complete water treatment solutions in Tampa Bay by Jusi H2O. Custom systems for hard water, chlorine, iron, and contaminants. Free consultation.',
    url: 'https://jusih2o.com/water-treatment',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Filtration Services Tampa Bay' }],
    type: 'website',
  },
}

export default function WaterTreatmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Water Treatment","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+18133030515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/water-treatment","description":"Jusi H2O provides comprehensive water treatment services in the greater Tampa Bay area. Free consultations available."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between water treatment and filtration?","acceptedAnswer":{"@type":"Answer","text":"Water treatment is the comprehensive approach that may include filtration, softening, disinfection, and pH balancing. Filtration is one component of treatment focused on removing contaminants."}},{"@type":"Question","name":"How much does a water treatment system cost?","acceptedAnswer":{"@type":"Answer","text":"Costs vary based on the combination of systems needed, home size, and water quality issues. Jusi H2O provides free in-home water testing and detailed written quotes with no obligation."}},{"@type":"Question","name":"Does Jusi H2O serve Tampa Bay?","acceptedAnswer":{"@type":"Answer","text":"Yes, Jusi H2O serves Hillsborough, Pinellas, and Sarasota counties plus surrounding Tampa Bay communities. Call (813) 303-0515 for a free consultation."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Complete Water Treatment Solutions for Tampa Bay</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Comprehensive water treatment systems that address every water quality challenge in your home. Jusi H2O designs custom solutions combining softening, filtration, and purification — tailored to Tampa Bay&apos;s unique water conditions. Free in-home water testing and consultation.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Schedule Free Consultation</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

      {/* What Is Water Treatment */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center mb-6">What Is Water Treatment and How Does It Differ from Filtration?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Water treatment is the umbrella term for any process that improves water quality for a specific end use. While <Link href="/water-filtration" className="text-blue-600 hover:underline">water filtration</Link> focuses on removing physical and chemical contaminants, and <Link href="/water-softener" className="text-blue-600 hover:underline">water softening</Link> addresses mineral hardness, water treatment encompasses both of these plus additional processes like pH balancing, disinfection, and mineral adjustment. When Jusi H2O provides water treatment, we are designing a complete system that addresses every measurable issue found during your water test.
            </p>
            <p>
              Tampa Bay draws its water from a combination of surface water reservoirs, the Hillsborough River, and the Floridan Aquifer. Each source introduces different contaminants and mineral profiles. Surface water tends to carry more organic matter and disinfection byproducts, while groundwater from the aquifer is typically harder and may contain elevated levels of iron, sulfur, and dissolved solids. Many Tampa Bay homes receive a blend of these sources, meaning your water quality can shift throughout the year as the utility adjusts its water blend.
            </p>
            <p>
              A comprehensive water treatment approach accounts for this variability. Rather than installing a single system that addresses only one issue, Jusi H2O evaluates the full spectrum of your water quality and designs a multi-stage solution. This might include a sediment pre-filter to protect downstream equipment, a carbon filter to remove chlorine and organic compounds, a water softener to eliminate hardness, and a <Link href="/reverse-osmosis" className="text-blue-600 hover:underline">reverse osmosis system</Link> at your kitchen sink for the purest possible drinking water.
            </p>
            <p>
              The result is water that is clean, soft, great-tasting, and safe throughout your entire home — not just at one faucet. Every component works together as an integrated system, and each stage is sized and configured based on your specific water test results and household usage patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Tampa Bay Water Challenges */}
      <section className="py-16 px-4 bg-blue-50" aria-labelledby="challenges-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="challenges-heading" className="text-3xl font-bold text-center mb-4">Water Quality Challenges Specific to Tampa Bay</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Understanding your local water conditions is the first step toward solving them. These are the most common issues we encounter when testing homes across Hillsborough, Pinellas, and Sarasota counties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Extreme Water Hardness</h3>
              <p className="text-gray-600">Tampa Bay water hardness levels frequently exceed 15 GPG and can reach 25 GPG or higher in some neighborhoods. This causes rapid scale accumulation in water heaters, dishwashers, and pipes — reducing efficiency and shortening equipment lifespan.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Chloramine Disinfection</h3>
              <p className="text-gray-600">The Tampa Bay area uses chloramines for residual disinfection, which are more persistent than chlorine alone. Standard pitcher filters cannot remove chloramines effectively, requiring catalytic carbon filtration designed specifically for this disinfectant.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Seasonal Source Water Changes</h3>
              <p className="text-gray-600">Tampa Bay Water blends surface and groundwater sources depending on demand and availability. Your water quality can change from season to season, making a comprehensive treatment approach more effective than a single-purpose system.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Elevated Total Dissolved Solids</h3>
              <p className="text-gray-600">Florida groundwater dissolves limestone and other minerals as it moves through the aquifer, leading to TDS levels that affect water taste and leave residue on surfaces. Multi-stage treatment reduces TDS to produce noticeably better-tasting water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">The Jusi H2O Approach to Water Treatment</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">We do not sell one-size-fits-all systems. Every recommendation starts with a comprehensive water test and ends with a solution engineered for your home.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Test-First Philosophy</h3>
              <p className="text-gray-600">We test your water for hardness, chlorine, iron, pH, TDS, sulfur, and other contaminants before recommending anything. Your treatment plan is based on data, not assumptions or sales targets.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Integrated System Design</h3>
              <p className="text-gray-600">We design treatment systems where each component complements the others. Pre-filtration protects softeners, softeners protect RO membranes, and every stage is sized for your actual water usage.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Licensed Professional Installation</h3>
              <p className="text-gray-600">All equipment is installed by licensed, bonded, and insured technicians following manufacturer specifications and local plumbing codes. We test the system before leaving your home.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Transparent Itemized Pricing</h3>
              <p className="text-gray-600">Your written quote breaks down equipment, labor, and any modifications needed. No hidden fees or surprise charges. You approve every line item before we proceed.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Long-Term Maintenance Plans</h3>
              <p className="text-gray-600">Water treatment systems need periodic service. Jusi H2O offers maintenance plans that keep your system running at peak performance without you having to remember service schedules.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Manufacturer Warranties</h3>
              <p className="text-gray-600">We install professional-grade equipment backed by manufacturer warranties of 5 to 10 years. Warranty terms are provided in writing before work begins.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">Our Water Treatment Process</h2>
          <ol className="space-y-8">
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 1">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Comprehensive Water Testing</h3>
                <p className="text-gray-600">We test your water at the source — whether municipal supply or <Link href="/well-water-treatment" className="text-blue-600 hover:underline">private well</Link> — for hardness, chlorine, iron, pH, TDS, sulfur, bacteria, and other relevant parameters.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 2">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Custom System Design</h3>
                <p className="text-gray-600">Based on test results, household size, and plumbing layout, we design a treatment system that addresses every identified issue. You receive a detailed written proposal with all costs itemized.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 3">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Multi-Stage Installation</h3>
                <p className="text-gray-600">Our technicians install each treatment component in the correct sequence — pre-filtration, softening, post-filtration, and point-of-use purification — ensuring optimal performance of the entire system.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 4">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Verification and Walkthrough</h3>
                <p className="text-gray-600">We test your treated water to confirm every parameter meets expectations, then walk you through system operation, maintenance requirements, and how to reach us for service.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 5">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Scheduled Maintenance and Support</h3>
                <p className="text-gray-600">We monitor your system&apos;s service schedule and contact you when maintenance is due. From filter changes to salt delivery to annual inspections, we handle it all.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Water Treatment</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">What Is the Difference Between Water Treatment, Filtration, and Softening?</h3>
              <p className="text-gray-700">Water treatment is the comprehensive approach that may include filtration, softening, and additional processes. <Link href="/water-filtration" className="text-blue-600 hover:underline">Filtration</Link> removes contaminants like chlorine, sediment, and organic compounds. <Link href="/water-softener" className="text-blue-600 hover:underline">Softening</Link> removes hardness minerals. Water treatment combines whatever processes your water test indicates are needed.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Do I Know Which Treatment System I Need?</h3>
              <p className="text-gray-700">Start with a water test. Jusi H2O offers free in-home <Link href="/water-testing" className="text-blue-600 hover:underline">water testing</Link> that measures multiple parameters. The results tell us exactly what is in your water, and we recommend only the treatment stages that address issues actually present.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Long Does a Complete Installation Take?</h3>
              <p className="text-gray-700">A single-system installation typically takes two to four hours. Multi-stage systems may take a full day. We provide a specific timeline during your consultation so you can plan accordingly.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">What Does Ongoing Maintenance Involve?</h3>
              <p className="text-gray-700">Softener salt needs replenishing every four to eight weeks, sediment and carbon filters need replacement every three to twelve months, and RO membranes last two to five years. Jusi H2O tracks all service intervals and offers maintenance plans covering everything.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Jusi H2O Serve All of Tampa Bay?</h3>
              <p className="text-gray-700">Yes. We serve Hillsborough, Pinellas, and Sarasota counties and surrounding communities. Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> to schedule your free water test.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Get a Complete Water Treatment Solution for Your Home</h2>
          <p className="text-blue-100 text-lg mb-8">Start with a free in-home water test. Jusi H2O will identify every issue in your water and design a treatment system that solves them all — with transparent pricing and no obligation.</p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Schedule Free Water Test</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related services">
          <h2 className="text-lg font-semibold mb-3">Related Services</h2>
          <ul className="space-y-2">
            <li><Link href="/water-softener" className="text-blue-600 hover:underline">Water Softener Installation</Link></li>
            <li><Link href="/water-filtration" className="text-blue-600 hover:underline">Water Filtration Systems</Link></li>
            <li><Link href="/well-water-treatment" className="text-blue-600 hover:underline">Well Water Treatment</Link></li>
          </ul>
        </nav>
        <nav className="mt-8 pt-8 border-t border-gray-200" aria-label="Service areas">
          <h2 className="text-lg font-semibold mb-3">Water Treatment by Area</h2>
          <ul className="space-y-2">
            <li><Link href="/water-treatment-in-hillsborough-county-fl" className="text-blue-600 hover:underline">Water Treatment in Hillsborough County, FL</Link></li>
            <li><Link href="/water-treatment-in-pinellas-county-fl" className="text-blue-600 hover:underline">Water Treatment in Pinellas County, FL</Link></li>
            <li><Link href="/water-treatment-in-sarasota-county-fl" className="text-blue-600 hover:underline">Water Treatment in Sarasota County, FL</Link></li>
            <li><Link href="/water-treatment-in-tampa-bay-fl" className="text-blue-600 hover:underline">Water Treatment in Tampa Bay, FL</Link></li>
            <li><Link href="/water-treatment-in-florida" className="text-blue-600 hover:underline">Water Treatment in Florida</Link></li>
          </ul>
        </nav>
    </main>
  )
}
