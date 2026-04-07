import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Well Water Treatment & Iron Removal Tampa Bay',
  description: 'Well water treatment in Tampa Bay by Jusi H2O. Remove iron staining, sulfur smell, bacteria, and sediment with custom filtration systems. Free well water testing included.',
  alternates: {
    canonical: 'https://jusih2o.com/well-water-treatment',
  },
  openGraph: {
    title: 'Well Water Treatment & Iron Removal Tampa Bay | Jusi H2O',
    description: 'Well water treatment in Tampa Bay by Jusi H2O. Remove iron staining, sulfur smell, bacteria, and sediment with custom filtration systems. Free well water testing included.',
    url: 'https://jusih2o.com/well-water-treatment',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Filtration Services Tampa Bay' }],
    type: 'website',
  },
}

export default function WellWaterTreatmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Well Water Treatment","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+18133030515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/well-water-treatment","description":"Jusi H2O provides professional well water treatment services in the greater Tampa Bay area. Free well water testing available."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What contaminants are common in Florida well water?","acceptedAnswer":{"@type":"Answer","text":"Florida well water commonly contains iron, sulfur (hydrogen sulfide), hardness minerals, tannins, and bacteria. Specific contaminants vary by location and aquifer depth. A comprehensive water test identifies exactly what is present."}},{"@type":"Question","name":"How much does well water treatment cost?","acceptedAnswer":{"@type":"Answer","text":"Costs depend on which contaminants are present and the treatment stages needed. Jusi H2O provides free well water testing and detailed written quotes with no obligation."}},{"@type":"Question","name":"Does Jusi H2O serve Tampa Bay well water homes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Jusi H2O serves well water homes throughout Hillsborough, Pinellas, Sarasota counties and surrounding areas. Call (813) 303-0515 for a free well water test."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Well Water Treatment for Tampa Bay Homes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Eliminate iron staining, sulfur odor, bacteria, and hardness from your private well water. Jusi H2O designs custom well water treatment systems for homes across Hillsborough, Pinellas, and Sarasota counties. Free comprehensive well water testing included.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Schedule Free Well Water Test</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

      {/* Well Water Challenges */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center mb-6">Why Florida Well Water Requires Specialized Treatment</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Private well water in the Tampa Bay region comes from the Floridan Aquifer — a massive underground limestone formation that stretches beneath most of Florida. As groundwater moves through this porous rock, it dissolves minerals and picks up naturally occurring contaminants that create a unique set of water quality challenges. Unlike municipal water, well water is not treated by a utility before it reaches your home. The homeowner is entirely responsible for testing, treating, and maintaining water quality.
            </p>
            <p>
              The most common well water issues in the Tampa Bay area include elevated iron levels that stain fixtures, laundry, and surfaces orange or rust-colored; hydrogen sulfide gas that produces a strong rotten egg smell; extreme hardness from dissolved calcium and magnesium that exceeds 20 GPG in many locations; and bacterial contamination that can occur from surface water infiltration, aging well casings, or seasonal water table changes. Some wells also contain tannins — naturally occurring organic compounds that give water a yellow or brown tint and a musty taste.
            </p>
            <p>
              Jusi H2O specializes in well water treatment systems designed for Florida&apos;s specific groundwater chemistry. We begin every project with a comprehensive well water test that goes beyond the basic parameters used for municipal water. Our well water panel tests for iron (both ferrous and ferric), hydrogen sulfide, hardness, pH, tannins, bacteria, nitrates, and total dissolved solids. These results drive every recommendation we make, ensuring you invest only in treatment stages that address contaminants actually present in your well water.
            </p>
          </div>
        </div>
      </section>

      {/* Common Well Water Problems */}
      <section className="py-16 px-4 bg-blue-50" aria-labelledby="problems-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="problems-heading" className="text-3xl font-bold text-center mb-4">Common Well Water Problems We Solve</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Every well is different. These are the issues we encounter most frequently when testing private wells across the Tampa Bay area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Iron Staining</h3>
              <p className="text-gray-600">Orange, rust, or reddish-brown stains on toilets, sinks, showers, and laundry are caused by dissolved iron in your well water. Even low concentrations of 0.3 parts per million can produce visible staining. We use oxidizing filters and iron-specific media to remove iron before it reaches your fixtures.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Sulfur Smell (Rotten Egg Odor)</h3>
              <p className="text-gray-600">Hydrogen sulfide gas dissolved in groundwater produces a distinctive rotten egg smell that is noticeable when running hot water or first turning on a faucet. Aeration systems or oxidizing media neutralize hydrogen sulfide and eliminate the odor completely.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Extreme Hardness</h3>
              <p className="text-gray-600">Well water in the Tampa Bay area often measures 20 to 35 GPG or higher — far beyond the threshold for severe scale buildup. A properly sized <Link href="/water-softener" className="text-blue-600 hover:underline">water softener</Link> removes calcium and magnesium before they damage your plumbing, appliances, and fixtures.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Bacterial Contamination</h3>
              <p className="text-gray-600">Coliform bacteria and E. coli can enter well water through cracked casings, surface water infiltration, or flooding events. UV disinfection systems eliminate bacteria and viruses without adding chemicals to your water, providing continuous protection at the point of entry.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Tannins and Discoloration</h3>
              <p className="text-gray-600">Organic tannins from decaying vegetation in the soil give well water a yellow, brown, or tea-colored tint. Tannin-specific anion exchange filters remove these organic compounds and restore water clarity without affecting mineral content.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Low pH (Acidic Water)</h3>
              <p className="text-gray-600">Well water with pH below 7.0 is acidic and can corrode copper plumbing, cause blue-green stains on fixtures, and leach metals into your water supply. Calcite or soda ash injection systems raise pH to neutral levels and protect your entire plumbing system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">Why Choose Jusi H2O for Well Water Treatment</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Well water treatment requires specialized expertise. Here is why Tampa Bay well water homeowners trust Jusi H2O.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Comprehensive Well Water Testing</h3>
              <p className="text-gray-600">Our well water test panel goes beyond basic parameters. We test for iron types, sulfur, bacteria, tannins, pH, hardness, nitrates, and TDS — giving us the complete picture needed to design an effective treatment system.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Florida Well Water Expertise</h3>
              <p className="text-gray-600">We understand the Floridan Aquifer and the specific contaminant profiles it produces across different areas of Tampa Bay. This local knowledge means more accurate system design and better results.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Multi-Stage System Design</h3>
              <p className="text-gray-600">Well water rarely has just one problem. We design integrated systems where each treatment stage works together — oxidation, filtration, softening, and disinfection in the correct sequence for maximum effectiveness.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Licensed and Insured</h3>
              <p className="text-gray-600">All Jusi H2O technicians are fully licensed, bonded, and insured. We follow manufacturer specifications and local codes for every installation.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Annual Well Water Monitoring</h3>
              <p className="text-gray-600">Well water quality can change over time as aquifer conditions shift. We offer annual testing services to monitor your water and adjust treatment as needed — an important safeguard for well water homes.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">You receive a detailed written quote with every component itemized before any work begins. No hidden fees. We recommend only what your water test results indicate you need.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">Our Well Water Treatment Process</h2>
          <ol className="space-y-8">
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 1">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Comprehensive Well Water Test</h3>
                <p className="text-gray-600">We visit your home and collect water samples directly from your well. We test on-site for key parameters and may send samples to a certified laboratory for detailed analysis of bacteria, nitrates, and other contaminants. This testing is free.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 2">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Custom Treatment System Design</h3>
                <p className="text-gray-600">Based on your well water test results, we design a multi-stage treatment system that addresses every identified contaminant. Your written proposal details each component, its purpose, and the total installed cost.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 3">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                <p className="text-gray-600">Our licensed technicians install the complete treatment system — from the well head through your plumbing. We position equipment in the correct treatment sequence and configure each component for your specific water chemistry.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 4">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Post-Treatment Verification</h3>
                <p className="text-gray-600">We test your treated water to verify every contaminant has been reduced to safe, clean levels. You see the before and after results side by side. We also walk you through system operation and maintenance.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 5">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Ongoing Service and Annual Testing</h3>
                <p className="text-gray-600">We provide scheduled maintenance, filter replacements, and annual well water re-testing to ensure your system continues performing as conditions change over time.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Well Water Treatment</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Often Should I Test My Well Water?</h3>
              <p className="text-gray-700">The Florida Department of Health recommends testing private well water at least annually for bacteria and nitrates. We recommend a more comprehensive test every year that includes iron, sulfur, hardness, pH, and TDS — since these parameters can change as aquifer conditions shift seasonally or after heavy rain events.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Can Well Water Be Made as Clean as Municipal Water?</h3>
              <p className="text-gray-700">Yes — and often cleaner. With the right treatment system, well water can be free of iron, sulfur, hardness, bacteria, and sediment. Adding a <Link href="/reverse-osmosis" className="text-blue-600 hover:underline">reverse osmosis system</Link> at the kitchen sink produces drinking water that exceeds the purity of most bottled water brands.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">My Well Water Smells Like Rotten Eggs. What Causes This?</h3>
              <p className="text-gray-700">The rotten egg smell is hydrogen sulfide gas, which is common in Florida well water. It occurs naturally when sulfur-reducing bacteria in the aquifer break down organic matter. Aeration or oxidation filtration systems eliminate this gas completely. The smell is not harmful at typical residential concentrations but is very unpleasant.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Much Does Well Water Treatment Cost?</h3>
              <p className="text-gray-700">Costs vary significantly based on which contaminants are present and how many treatment stages are needed. A simple iron filter is less expensive than a multi-stage system treating iron, sulfur, hardness, and bacteria. Jusi H2O provides free well water testing and a detailed written quote so you know the full cost before committing.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Jusi H2O Work with Well Water Homes in Tampa Bay?</h3>
              <p className="text-gray-700">Yes. We specialize in well water treatment for homes across Hillsborough, Pinellas, and Sarasota counties. Many rural and semi-rural areas throughout Tampa Bay rely on private wells, and we have extensive experience with the specific water quality challenges found in each area. Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> to schedule your free well water test.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Get Your Well Water Tested for Free</h2>
          <p className="text-blue-100 text-lg mb-8">Jusi H2O provides comprehensive well water testing at no cost. We will identify every contaminant in your well water and design a treatment system that eliminates them — with transparent pricing and no obligation.</p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Schedule Free Well Water Test</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related services">
          <h2 className="text-lg font-semibold mb-3">Related Services</h2>
          <ul className="space-y-2">
            <li><Link href="/water-treatment" className="text-blue-600 hover:underline">Complete Water Treatment</Link></li>
            <li><Link href="/water-softener" className="text-blue-600 hover:underline">Water Softener Installation</Link></li>
            <li><Link href="/water-testing" className="text-blue-600 hover:underline">Water Testing</Link></li>
          </ul>
        </nav>
        <nav className="mt-8 pt-8 border-t border-gray-200" aria-label="Service areas">
          <h2 className="text-lg font-semibold mb-3">Well Water Treatment by Area</h2>
          <ul className="space-y-2">
            <li><Link href="/well-water-treatment-in-hillsborough-county-fl" className="text-blue-600 hover:underline">Well Water Treatment in Hillsborough County, FL</Link></li>
            <li><Link href="/well-water-treatment-in-pinellas-county-fl" className="text-blue-600 hover:underline">Well Water Treatment in Pinellas County, FL</Link></li>
            <li><Link href="/well-water-treatment-in-sarasota-county-fl" className="text-blue-600 hover:underline">Well Water Treatment in Sarasota County, FL</Link></li>
            <li><Link href="/well-water-treatment-in-tampa-bay-fl" className="text-blue-600 hover:underline">Well Water Treatment in Tampa Bay, FL</Link></li>
            <li><Link href="/well-water-treatment-in-florida" className="text-blue-600 hover:underline">Well Water Treatment in Florida</Link></li>
          </ul>
        </nav>
    </main>
  )
}
