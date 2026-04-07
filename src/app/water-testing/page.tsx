import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Professional Water Testing in Tampa Bay',
  description: 'Free professional water testing in Tampa Bay from Jusi H2O. Test for hardness, chlorine, pH, iron, and TDS. Same-day results, no obligation.',
  alternates: {
    canonical: 'https://jusih2o.com/water-testing',
  },
  openGraph: {
    title: 'Free Professional Water Testing in Tampa Bay | Jusi H2O',
    description: 'Free professional water testing in Tampa Bay from Jusi H2O. Test for hardness, chlorine, pH, iron, and TDS. Same-day results, no obligation.',
    url: 'https://jusih2o.com/water-testing',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Filtration Services Tampa Bay' }],
    type: 'website',
  },
}

export default function WaterTestingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Water Testing","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+18133030515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/water-testing","description":"Jusi H2O provides free professional water testing throughout the Tampa Bay area. Test for hardness, chlorine, pH, iron, TDS, and more."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is the water test really free?","acceptedAnswer":{"@type":"Answer","text":"Yes. Jusi H2O provides a complete in-home water test at no cost with no obligation. We test multiple parameters and explain the results, whether or not you purchase a system."}},{"@type":"Question","name":"What does the water test measure?","acceptedAnswer":{"@type":"Answer","text":"Our standard test measures water hardness, chlorine/chloramines, pH, iron, total dissolved solids (TDS), and sulfur. Well water tests include additional parameters like bacteria and nitrates."}},{"@type":"Question","name":"Does Jusi H2O serve Tampa Bay?","acceptedAnswer":{"@type":"Answer","text":"Yes. We provide free water testing throughout Hillsborough, Pinellas, and Sarasota counties. Call (813) 303-0515 to schedule."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Free Professional Water Testing in Tampa Bay</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find out exactly what is in your water. Jusi H2O provides free in-home water testing throughout Tampa Bay — measuring hardness, chlorine, pH, iron, TDS, and more. Same-day results, clear explanations, and zero obligation. The first step to better water starts with knowing what you are working with.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Schedule Free Water Test</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

      {/* Why Test Your Water */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center mb-6">Why You Should Test Your Tampa Bay Water</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Most Tampa Bay homeowners have never had their water professionally tested. They know it tastes like chlorine, they see the scale on their fixtures, and they notice the spots on their glasses — but they do not know exactly what is causing these issues or how severe the levels are. A professional water test replaces guesswork with data, giving you the specific measurements needed to make informed decisions about water treatment.
            </p>
            <p>
              Municipal water in Tampa Bay meets federal Safe Drinking Water Act standards, but meeting minimum safety thresholds does not mean the water is free of issues that affect comfort, taste, and appliance longevity. Chloramine disinfection residuals, elevated hardness from the Floridan Aquifer, and seasonal fluctuations in total dissolved solids are all common in Tampa Bay water — and none of these are captured by a simple taste test or visual inspection.
            </p>
            <p>
              For homes on private wells, testing is even more critical. Well water is not monitored or treated by any utility. The homeowner is solely responsible for water quality, and conditions can change over time as aquifer levels fluctuate, nearby land use changes, or well components age. The Florida Department of Health recommends annual testing for bacteria and nitrates at minimum, with more comprehensive testing if you notice any changes in taste, odor, or appearance.
            </p>
            <p>
              Jusi H2O&apos;s free water test gives you a clear picture of your water quality — whether you are on municipal water or a private well. We test at your home, explain every result in plain language, and discuss what treatment options would address any issues found. There is absolutely no obligation to purchase anything. Many homeowners schedule a test simply to confirm their water is fine — and that is a perfectly valid reason to call us.
            </p>
          </div>
        </div>
      </section>

      {/* What We Test For */}
      <section className="py-16 px-4 bg-blue-50" aria-labelledby="parameters-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="parameters-heading" className="text-3xl font-bold text-center mb-4">What Our Water Test Measures</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Our standard in-home test covers the most important water quality parameters for Tampa Bay homes. Well water homes receive additional testing for bacteria and other well-specific contaminants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Water Hardness</h3>
              <p className="text-gray-600">Measures the concentration of calcium and magnesium in grains per gallon. Tampa Bay water typically tests between 12 and 25 GPG — well into the &quot;very hard&quot; range. Hardness above 7 GPG warrants <Link href="/water-softener" className="text-blue-600 hover:underline">water softening</Link>.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Chlorine and Chloramines</h3>
              <p className="text-gray-600">Measures residual disinfectant levels in parts per million. Tampa Bay uses chloramines, which are more persistent than chlorine and require specialized catalytic carbon <Link href="/water-filtration" className="text-blue-600 hover:underline">filtration</Link> to remove effectively.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">pH Level</h3>
              <p className="text-gray-600">Measures how acidic or alkaline your water is on a scale of 0 to 14. Ideal drinking water pH is 6.5 to 8.5. Low pH (acidic water) can corrode pipes and leach metals. High pH can cause scale formation and affect taste.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Iron Content</h3>
              <p className="text-gray-600">Measures dissolved iron in parts per million. Concentrations above 0.3 PPM cause visible orange staining on fixtures, laundry, and surfaces. Well water in the Tampa Bay area frequently contains iron levels several times above this threshold.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Total Dissolved Solids (TDS)</h3>
              <p className="text-gray-600">Measures the total concentration of dissolved substances in your water — minerals, salts, metals, and organic compounds. TDS affects taste and is a general indicator of overall water quality. Lower TDS generally means cleaner, better-tasting water.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Hydrogen Sulfide (Well Water)</h3>
              <p className="text-gray-600">Tests for the dissolved gas that causes rotten egg odor in <Link href="/well-water-treatment" className="text-blue-600 hover:underline">well water</Link>. This is one of the most common complaints from well water homeowners in Florida and can be eliminated with proper treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Why Jusi H2O */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">Why Choose Jusi H2O for Water Testing</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Our water test is free, thorough, and comes with zero sales pressure. Here is what makes our testing different.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Completely Free, No Strings</h3>
              <p className="text-gray-600">Our water test is free whether or not you purchase a system. We believe in informed homeowners. If your water tests well, we will tell you so and leave without pitching anything.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">On-Site Results in Minutes</h3>
              <p className="text-gray-600">We bring professional testing equipment to your home and provide results on the spot. You do not have to wait days or weeks for a lab report. We explain every measurement in plain language.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Multiple Parameters Tested</h3>
              <p className="text-gray-600">We do not just test one thing. Our standard panel covers hardness, chlorine, pH, iron, and TDS. Well water homes receive additional testing for sulfur, bacteria, and nitrates.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Tampa Bay Water Knowledge</h3>
              <p className="text-gray-600">We know what to expect from Tampa Bay water sources and can put your results into local context. We explain not just what the numbers mean, but what they mean for homes in your specific neighborhood.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Honest, No-Pressure Recommendations</h3>
              <p className="text-gray-600">If your water does not need treatment, we will tell you. If it does, we explain what options are available and provide a written quote you can review on your own time. No same-day pressure tactics.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Written Results to Keep</h3>
              <p className="text-gray-600">You receive a written copy of your water test results that you can keep for your records, share with family members, or use to compare quotes from other companies. The data is yours.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">What to Expect During Your Free Water Test</h2>
          <ol className="space-y-8">
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 1">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Schedule Your Appointment</h3>
                <p className="text-gray-600">Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> or <Link href="/contact" className="text-blue-600 hover:underline">request an appointment online</Link>. We schedule at a time convenient for you, including evenings and weekends.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 2">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">We Test Your Water at Home</h3>
                <p className="text-gray-600">A Jusi H2O water specialist arrives with professional testing equipment. We collect samples from your kitchen tap and any other relevant sources, then run tests for hardness, chlorine, pH, iron, TDS, and additional parameters based on your water source.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 3">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">We Explain Your Results</h3>
                <p className="text-gray-600">We walk you through each measurement — what it means, how it compares to recommended levels, and whether it indicates a problem that would benefit from treatment. We answer every question you have.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 4">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Receive Treatment Recommendations (If Needed)</h3>
                <p className="text-gray-600">If your water test indicates issues that would benefit from treatment, we explain which systems would address them — <Link href="/water-softener" className="text-blue-600 hover:underline">softening</Link>, <Link href="/water-filtration" className="text-blue-600 hover:underline">filtration</Link>, <Link href="/reverse-osmosis" className="text-blue-600 hover:underline">reverse osmosis</Link>, or a combination. If your water is fine, we will tell you that too.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 5">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Take Your Written Results Home</h3>
                <p className="text-gray-600">You receive a written copy of all test results and any recommendations. Take your time reviewing everything. There is no expiration date on the quote and no pressure to decide on the spot.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Water Testing</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Is the Water Test Really Free?</h3>
              <p className="text-gray-700">Yes. There is no cost for the water test, no hidden fees, and absolutely no obligation to purchase anything. We provide the test as a service to Tampa Bay homeowners because an informed customer makes better decisions — and many of those homeowners eventually choose Jusi H2O when they are ready to improve their water quality.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Long Does the Water Test Take?</h3>
              <p className="text-gray-700">The entire visit — including testing, explanation of results, and answering your questions — takes approximately 30 to 45 minutes. Most individual tests produce results within minutes using our on-site equipment.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Should I Test City Water or Only Well Water?</h3>
              <p className="text-gray-700">Both benefit from testing. While city water meets federal safety standards, it often contains elevated hardness, chloramine residuals, and TDS levels that affect taste, comfort, and appliance longevity. Testing reveals the specific levels in your home — which can differ from your neighbor&apos;s depending on your plumbing age and distance from the treatment plant.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">What If My Water Tests Fine?</h3>
              <p className="text-gray-700">That is a great outcome. We will tell you your water is within acceptable ranges and you can have peace of mind. We do not recommend systems that are not needed, and we never pressure anyone into a purchase. Many homeowners schedule a test just for reassurance.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Jusi H2O Test Water Throughout Tampa Bay?</h3>
              <p className="text-gray-700">Yes. We provide free water testing across Hillsborough County, Pinellas County, Sarasota County, and surrounding Tampa Bay communities — for both municipal water and private wells. Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> to schedule your appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Schedule Your Free Water Test Today</h2>
          <p className="text-blue-100 text-lg mb-8">The first step to better water is knowing what you are working with. Jusi H2O provides free, thorough, no-pressure water testing throughout Tampa Bay. Schedule your appointment now.</p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Schedule Free Water Test</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related services">
          <h2 className="text-lg font-semibold mb-3">Related Services</h2>
          <ul className="space-y-2">
            <li><Link href="/water-treatment" className="text-blue-600 hover:underline">Complete Water Treatment</Link></li>
            <li><Link href="/water-softener" className="text-blue-600 hover:underline">Water Softener Installation</Link></li>
            <li><Link href="/water-filtration" className="text-blue-600 hover:underline">Water Filtration Systems</Link></li>
          </ul>
        </nav>
        <nav className="mt-8 pt-8 border-t border-gray-200" aria-label="Service areas">
          <h2 className="text-lg font-semibold mb-3">Water Testing by Area</h2>
          <ul className="space-y-2">
            <li><Link href="/water-testing-in-hillsborough-county-fl" className="text-blue-600 hover:underline">Water Testing in Hillsborough County, FL</Link></li>
            <li><Link href="/water-testing-in-pinellas-county-fl" className="text-blue-600 hover:underline">Water Testing in Pinellas County, FL</Link></li>
            <li><Link href="/water-testing-in-sarasota-county-fl" className="text-blue-600 hover:underline">Water Testing in Sarasota County, FL</Link></li>
            <li><Link href="/water-testing-in-tampa-bay-fl" className="text-blue-600 hover:underline">Water Testing in Tampa Bay, FL</Link></li>
            <li><Link href="/water-testing-in-florida" className="text-blue-600 hover:underline">Water Testing in Florida</Link></li>
          </ul>
        </nav>
    </main>
  )
}
