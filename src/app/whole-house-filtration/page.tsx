import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Whole-House Water Filtration Tampa Bay FL',
  description: 'Whole-house filtration systems in Tampa Bay from Jusi H2O. Clean filtered water at every faucet in your home. Free water test included.',
  alternates: {
    canonical: 'https://jusih2o.com/whole-house-filtration',
  },
  openGraph: {
    title: 'Whole-House Water Filtration Tampa Bay FL | Jusi H2O',
    description: 'Whole-house filtration systems in Tampa Bay from Jusi H2O. Clean filtered water at every faucet in your home. Free water test included.',
    url: 'https://jusih2o.com/whole-house-filtration',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Filtration Services Tampa Bay' }],
    type: 'website',
  },
}

export default function WholeHouseFiltrationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Whole-House Filtration","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+18133030515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/whole-house-filtration","description":"Jusi H2O provides professional whole-house filtration services in Clearwater and the greater Tampa Bay area. Free consultations available."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does a whole-house filtration system do?","acceptedAnswer":{"@type":"Answer","text":"A whole-house system filters all water entering your home at the main supply line, delivering clean water to every faucet, shower, and appliance. It removes chlorine, sediment, and other contaminants before water reaches any fixture."}},{"@type":"Question","name":"How much does whole-house filtration cost?","acceptedAnswer":{"@type":"Answer","text":"Costs depend on system complexity, number of filtration stages, and plumbing configuration. Jusi H2O provides free in-home water testing and detailed written quotes with no obligation."}},{"@type":"Question","name":"Does Jusi H2O serve Tampa Bay?","acceptedAnswer":{"@type":"Answer","text":"Yes, Jusi H2O serves Hillsborough, Pinellas, and Sarasota counties. Call (813) 303-0515 to schedule a free water test."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-5xl font-bold mb-6">Whole-House Water Filtration for Tampa Bay Homes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Clean, filtered water at every faucet, shower, and appliance in your home. Jusi H2O installs whole-house filtration systems designed for Tampa Bay water conditions — removing chlorine, sediment, and contaminants before they reach any fixture. Free in-home water test included.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Schedule Free Consultation</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

      {/* What Is Whole-House Filtration */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center mb-6">Why Whole-House Filtration Is the Most Effective Approach</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              A whole-house filtration system — also called a point-of-entry system — is installed on the main water line where it enters your home. Every gallon of water that flows through your plumbing passes through the filtration system first, so every faucet, showerhead, dishwasher, and washing machine receives filtered water. This is fundamentally different from point-of-use systems like under-sink filters or pitcher filters, which only treat water at a single location.
            </p>
            <p>
              For Tampa Bay homeowners, whole-house filtration is particularly valuable because the contaminants in municipal water affect more than just drinking water. Chlorine and chloramines in shower water are absorbed through your skin and inhaled as steam — exposure that a kitchen-only filter does nothing to address. Sediment in your water supply can damage washing machine valves, dishwasher spray arms, and water heater elements. A whole-house system eliminates these issues everywhere simultaneously.
            </p>
            <p>
              Jusi H2O designs whole-house systems with multiple filtration stages tailored to your specific water test results. A typical Tampa Bay installation includes a sediment pre-filter to capture particles and protect downstream components, followed by a catalytic carbon filter sized specifically for chloramine removal — the disinfectant used throughout the Tampa Bay region. Additional stages for iron removal, pH adjustment, or specialty contaminants are added only when your water test indicates they are needed.
            </p>
            <p>
              The result is noticeably better water everywhere in your home. Showers feel cleaner and your skin and hair are no longer stripped by chlorine. Laundry comes out brighter. Appliances last longer without sediment and chemical exposure. And the water from every tap in your home tastes and smells clean. For homeowners who also need hardness treatment, we pair whole-house filtration with a <Link href="/water-softener" className="text-blue-600 hover:underline">water softener</Link> to create a complete <Link href="/water-treatment" className="text-blue-600 hover:underline">water treatment</Link> solution.
            </p>
          </div>
        </div>
      </section>

      {/* Whole-House vs Point-of-Use */}
      <section className="py-16 px-4 bg-blue-50" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="comparison-heading" className="text-3xl font-bold text-center mb-4">Whole-House vs. Point-of-Use Filtration</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Understanding the difference helps you choose the right approach — or combination — for your home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Whole-House Filtration (Point-of-Entry)</h3>
              <p className="text-gray-600 mb-3">Installed on the main water line. Filters all water entering the home before it reaches any fixture or appliance.</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside text-sm">
                <li>Removes chlorine, sediment, and contaminants from every faucet</li>
                <li>Protects appliances and plumbing from sediment damage</li>
                <li>Reduces chlorine exposure during showers and baths</li>
                <li>One system covers the entire home</li>
                <li>Requires professional installation on the main line</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Point-of-Use Filtration (Under-Sink or Countertop)</h3>
              <p className="text-gray-600 mb-3">Installed at a single faucet, typically the kitchen sink. Only filters water at that specific location.</p>
              <ul className="text-gray-600 space-y-1 list-disc list-inside text-sm">
                <li>Improves drinking water quality at one tap</li>
                <li>Does not address shower, laundry, or appliance water</li>
                <li>Lower upfront cost but limited coverage</li>
                <li><Link href="/reverse-osmosis" className="text-blue-600 hover:underline">Reverse osmosis</Link> provides the highest purity for drinking water</li>
                <li>Best used as a complement to whole-house filtration</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-6">
            Many Tampa Bay homeowners install both: a whole-house system for comprehensive protection and an RO system at the kitchen sink for the purest possible drinking and cooking water.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">Why Choose Jusi H2O for Whole-House Filtration</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Tampa Bay homeowners trust Jusi H2O because we design filtration systems based on actual water test data — not guesswork.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Free Water Testing</h3>
              <p className="text-gray-600">We test your water on-site before recommending any system. You see the results and understand exactly what contaminants are present in your home&apos;s water supply.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Custom System Sizing</h3>
              <p className="text-gray-600">We size every system based on your household&apos;s peak flow rate and daily water usage to ensure full filtration without any pressure loss — even when multiple fixtures are running.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Licensed Installation</h3>
              <p className="text-gray-600">All work is performed by licensed, insured Jusi H2O technicians. We handle plumbing modifications, bypass valves, and connections per local building codes.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Chloramine-Rated Media</h3>
              <p className="text-gray-600">Tampa Bay uses chloramines, not just chlorine. We use catalytic carbon media specifically rated for chloramine removal — standard carbon filters are not effective against this disinfectant.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Filter Replacement Service</h3>
              <p className="text-gray-600">Jusi H2O tracks your filter change schedule and offers automatic replacement service. We contact you when service is due and handle everything — no reminders needed on your end.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">You receive a complete written estimate including equipment, installation, and any plumbing modifications before any work begins. No hidden costs.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">How We Install Your Whole-House Filtration System</h2>
          <ol className="space-y-8">
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 1">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">In-Home Water Test</h3>
                <p className="text-gray-600">We visit your home and test your water for chlorine, chloramines, sediment, iron, hardness, pH, and TDS. This test is free, takes about 30 minutes, and there is no obligation.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 2">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">System Design and Quote</h3>
                <p className="text-gray-600">We configure a multi-stage filtration system matched to your test results, household size, and plumbing layout. Your written quote details every component, its purpose, and the total installed cost.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 3">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                <p className="text-gray-600">Our licensed technicians install the system on your main water line, including bypass valves, pressure gauges, and all necessary plumbing connections. Most installations are completed in half a day.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 4">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">System Verification</h3>
                <p className="text-gray-600">After installation, we re-test your water to confirm contaminant removal rates meet specifications. We walk you through the system, show you how to use the bypass valve, and explain the maintenance schedule.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 5">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Ongoing Filter Service</h3>
                <p className="text-gray-600">We schedule and perform all filter replacements according to your system&apos;s requirements. You never need to order parts or remember when service is due.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Whole-House Filtration</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Long Do Whole-House Filters Last?</h3>
              <p className="text-gray-700">Sediment pre-filters typically last three to six months. Carbon filters for chloramine removal last six to twelve months depending on water usage. The filter tanks and housings themselves last 10 to 15 years or more with proper maintenance. Jusi H2O tracks your filter schedule and contacts you when service is due.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Will a Whole-House System Remove Hardness?</h3>
              <p className="text-gray-700">Standard whole-house filtration systems remove contaminants like chlorine, sediment, and organic compounds but do not soften water. To remove hardness minerals (calcium and magnesium), you need a <Link href="/water-softener" className="text-blue-600 hover:underline">water softener</Link> installed alongside the filtration system. Jusi H2O designs integrated systems that handle both.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Where Is the System Installed?</h3>
              <p className="text-gray-700">Whole-house filtration is installed on the main water supply line, typically in the garage, utility room, or near the water heater. The system requires about three to four feet of wall space. We assess the best location during your free consultation.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Installation Require Shutting Off Water?</h3>
              <p className="text-gray-700">Yes, the water supply is shut off briefly during installation — typically for one to two hours while we connect the system to the main line. We schedule installation at a time that works for your household and complete the work as quickly as possible.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Jusi H2O Serve the Tampa Bay Area?</h3>
              <p className="text-gray-700">Yes. We install and service whole-house filtration systems throughout Hillsborough, Pinellas, and Sarasota counties. Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> to schedule your free in-home water test.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Get Clean Water at Every Faucet in Your Home</h2>
          <p className="text-blue-100 text-lg mb-8">Schedule a free water test with Jusi H2O. We will test your water, design a whole-house filtration system for your home, and provide a detailed quote — all with no obligation.</p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Schedule Free Water Test</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related services">
          <h2 className="text-lg font-semibold mb-3">Related Services</h2>
          <ul className="space-y-2">
            <li><Link href="/water-filtration" className="text-blue-600 hover:underline">Water Filtration Systems</Link></li>
            <li><Link href="/water-softener" className="text-blue-600 hover:underline">Water Softener Installation</Link></li>
            <li><Link href="/reverse-osmosis" className="text-blue-600 hover:underline">Reverse Osmosis Drinking Water</Link></li>
          </ul>
        </nav>
        <nav className="mt-8 pt-8 border-t border-gray-200" aria-label="Service areas">
          <h2 className="text-lg font-semibold mb-3">Whole-House Filtration by Area</h2>
          <ul className="space-y-2">
            <li><Link href="/whole-house-filtration-in-hillsborough-county-fl" className="text-blue-600 hover:underline">Whole-House Filtration in Hillsborough County, FL</Link></li>
            <li><Link href="/whole-house-filtration-in-pinellas-county-fl" className="text-blue-600 hover:underline">Whole-House Filtration in Pinellas County, FL</Link></li>
            <li><Link href="/whole-house-filtration-in-sarasota-county-fl" className="text-blue-600 hover:underline">Whole-House Filtration in Sarasota County, FL</Link></li>
            <li><Link href="/whole-house-filtration-in-tampa-bay-fl" className="text-blue-600 hover:underline">Whole-House Filtration in Tampa Bay, FL</Link></li>
            <li><Link href="/whole-house-filtration-in-florida" className="text-blue-600 hover:underline">Whole-House Filtration in Florida</Link></li>
          </ul>
        </nav>
    </main>
  )
}
