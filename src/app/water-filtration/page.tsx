import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Whole-House Water Filtration Systems Tampa Bay',
  description: 'Whole-house water filtration systems in Tampa Bay from Jusi H2O. Remove chlorine, sediment, and contaminants at every faucet. Free water test included.',
  alternates: {
    canonical: 'https://jusih2o.com/water-filtration',
  },
  openGraph: {
    title: 'Whole-House Water Filtration Systems Tampa Bay | Jusi H2O',
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
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Water Filtration","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+18133030515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/water-filtration","description":"Jusi H2O provides professional water filtration services in St. Petersburg and the greater Tampa Bay area. Free consultations available."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How Much Does Water Filtration Cost?","acceptedAnswer":{"@type":"Answer","text":"Water filtration costs depend on the type of system, contaminants being targeted, and your plumbing configuration. Jusi H2O provides free in-home water testing and detailed written quotes."}},{"@type":"Question","name":"How Often Do Water Filters Need Changing?","acceptedAnswer":{"@type":"Answer","text":"Sediment filters last 3-6 months, carbon filters 6-12 months, and specialty media 1-3 years. Jusi H2O provides a maintenance schedule and offers automatic filter replacement service."}},{"@type":"Question","name":"Will a Water Filter Reduce Water Pressure?","acceptedAnswer":{"@type":"Answer","text":"A properly sized system should not noticeably reduce pressure. We size every system based on peak flow rate. Reduced pressure usually indicates filters need changing."}},{"@type":"Question","name":"What Warranty Does Jusi H2O Provide?","acceptedAnswer":{"@type":"Answer","text":"Jusi H2O provides manufacturer warranties on all equipment and a labor guarantee on all installations. Most equipment carries 5-10 year manufacturer warranties."}},{"@type":"Question","name":"Does Jusi H2O Serve Tampa Bay?","acceptedAnswer":{"@type":"Answer","text":"Yes, Jusi H2O serves Hillsborough, Pinellas, and Sarasota counties plus surrounding Tampa Bay communities. Call (813) 303-0515 to schedule a free water test."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-5xl font-bold mb-6">Water Filtration Systems for Tampa Bay Homes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Remove chlorine, sediment, and contaminants from your household water with a professionally installed filtration system from Jusi H2O. Serving Tampa Bay, Hillsborough, Pinellas, and Sarasota counties. Free in-home water testing included.
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

      {/* What Is Water Filtration */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center mb-6">How Water Filtration Works and Why Tampa Bay Homes Benefit</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Water filtration systems use physical barriers, chemical processes, or biological methods to remove impurities from your tap water. Tampa Bay&apos;s municipal water supply is treated with chlorine and chloramines to kill bacteria during distribution, but those same disinfectants remain in the water when it reaches your faucets. The result is water that smells and tastes like a swimming pool — something most Tampa Bay residents notice immediately when filling a glass from the kitchen tap.
            </p>
            <p>
              Beyond chlorine taste and odor, Tampa Bay water can contain sediment, dissolved organic compounds, and trace levels of contaminants that pass through municipal treatment. Homes built before the 1980s may have older galvanized or copper pipes that contribute additional particles and metals to the water flowing through them. Even newer homes connected to municipal water benefit from filtration because water quality can fluctuate seasonally as source water conditions change.
            </p>
            <p>
              A properly sized water filtration system addresses these issues at the point of entry or point of use, depending on the system type. Jusi H2O installs both whole-house systems that treat every drop entering your home and targeted under-sink systems that focus on drinking water quality at the kitchen tap. We begin every project with a free <Link href="/water-testing" className="text-blue-600 hover:underline">water test</Link> so we can identify exactly what is in your water before recommending a solution.
            </p>
            <p>
              The benefits of filtration extend beyond taste. Filtered water reduces the chlorine exposure your skin and hair absorb during showers, extends the life of water-using appliances by preventing sediment buildup, and provides peace of mind that your family is drinking clean, tested water every day.
            </p>
          </div>
        </div>
      </section>

      {/* Contaminants We Remove */}
      <section className="py-16 px-4 bg-blue-50" aria-labelledby="contaminants-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="contaminants-heading" className="text-3xl font-bold text-center mb-4">Common Tampa Bay Water Contaminants We Remove</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Every water source is different. Our free water test identifies exactly what is in your water so we can recommend the right filtration approach for your home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Chlorine and Chloramines</h3>
              <p className="text-gray-600">Municipal water treatment uses these disinfectants to kill bacteria. While effective for safety, they cause unpleasant taste, odor, and can dry out skin and hair. Carbon filtration removes both effectively.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Sediment and Particulates</h3>
              <p className="text-gray-600">Sand, silt, rust particles, and pipe debris can cloud your water and clog fixtures. Sediment filters capture particles down to 5 microns, protecting both your plumbing and downstream filtration stages.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Volatile Organic Compounds</h3>
              <p className="text-gray-600">VOCs include industrial chemicals, herbicides, and pesticides that can enter groundwater and surface water sources. Activated carbon filters absorb these compounds before they reach your glass.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Iron and Manganese</h3>
              <p className="text-gray-600">These naturally occurring metals cause orange and black staining on fixtures, laundry, and surfaces. Specialized oxidizing filters convert dissolved metals into particles that can be captured and flushed away.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Hydrogen Sulfide</h3>
              <p className="text-gray-600">The rotten egg smell common in many Florida water supplies comes from hydrogen sulfide gas dissolved in groundwater. Aeration or oxidation filtration eliminates this odor at its source.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Lead and Heavy Metals</h3>
              <p className="text-gray-600">Older plumbing can leach lead and copper into household water. Point-of-use <Link href="/reverse-osmosis" className="text-blue-600 hover:underline">reverse osmosis</Link> systems remove up to 99 percent of dissolved metals from drinking water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">Why Choose Jusi H2O for Water Filtration</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Serving Tampa Bay homeowners with professional water filtration systems designed for local water conditions. Here&apos;s what sets us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Free In-Home Water Test</h3>
              <p className="text-gray-600">We test your water on-site for chlorine, hardness, iron, pH, TDS, and other parameters before recommending anything. You see the results and understand what is in your water before any purchase decision.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Licensed and Insured</h3>
              <p className="text-gray-600">All Jusi H2O technicians are fully licensed, bonded, and insured. We provide documentation before work begins and stand behind everything we do.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Our relationship does not end at installation. Jusi H2O provides filter change schedules, maintenance plans, and responsive support to keep your system performing optimally year after year.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">You receive a detailed written estimate before any work begins. No hidden fees, no surprise charges, and no pressure tactics.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Tampa Bay Water Expertise</h3>
              <p className="text-gray-600">Jusi H2O understands the specific water challenges in Hillsborough, Pinellas, and Sarasota counties. Our recommendations are informed by testing thousands of homes in this region.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Professional-Grade Equipment</h3>
              <p className="text-gray-600">We install manufacturer-warranted filtration systems built for reliability and performance — not the entry-level units found at big-box stores that need replacement every few years.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">How Jusi H2O Installs Your Water Filtration System</h2>
          <ol className="space-y-8">
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 1">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Free Water Test and Consultation</h3>
                <p className="text-gray-600">A Jusi H2O water specialist visits your home, tests your water for multiple parameters including chlorine, hardness, iron, pH, and total dissolved solids, and discusses what you are noticing with your current water quality. No cost and no obligation.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 2">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Custom System Recommendation</h3>
                <p className="text-gray-600">Based on test results and your household&apos;s water usage, we recommend a filtration system configured for your specific contaminant profile. Your written quote includes all equipment, installation labor, and any plumbing modifications needed.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 3">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                <p className="text-gray-600">Our licensed technicians install the system according to manufacturer specifications and local plumbing codes. Most installations are completed within a few hours with minimal disruption.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 4">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Post-Installation Water Test</h3>
                <p className="text-gray-600">After installation, we test your water again to verify the system is performing as expected. We walk you through the system operation, explain the filter change schedule, and answer any questions.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 5">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Ongoing Filter Maintenance</h3>
                <p className="text-gray-600">Jusi H2O offers scheduled filter replacement services so you never have to worry about when your filters need changing. We contact you when service is due and handle everything.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Filtration vs Softening */}
      <section className="py-16 px-4" aria-labelledby="comparison-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="comparison-heading" className="text-3xl font-bold text-center mb-6">Water Filtration vs. Water Softening: Which Do You Need?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Many Tampa Bay homeowners ask whether they need a <Link href="/water-softener" className="text-blue-600 hover:underline">water softener</Link>, a water filtration system, or both. The answer depends on what is in your water and which problems you are experiencing. These are two different systems that address two different categories of water quality issues.
            </p>
            <p>
              <strong>Water filtration</strong> removes contaminants — chlorine, sediment, organic compounds, and dissolved metals — that affect taste, odor, appearance, and safety. If your water smells like chlorine, tastes off, looks cloudy, or stains surfaces orange or black, you have a filtration issue.
            </p>
            <p>
              <strong>Water softening</strong> removes hardness minerals — calcium and magnesium — that cause scale buildup on fixtures, leave spots on glass, and reduce soap lathering. If you see white crusty deposits on faucets and showerheads, your water is hard and needs softening.
            </p>
            <p>
              Many homes in Tampa Bay benefit from both systems working together. A <Link href="/whole-house-filtration" className="text-blue-600 hover:underline">whole-house filtration system</Link> removes chlorine, sediment, and contaminants, while a water softener addresses hardness minerals. Jusi H2O designs combined systems that work efficiently together, and our free water test identifies exactly which issues your home has so you invest only in what you actually need.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Water Filtration</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Much Does a Water Filtration System Cost?</h3>
              <p className="text-gray-700">The cost depends on the type of system, the contaminants being targeted, your home&apos;s plumbing configuration, and household water volume. Under-sink drinking water filters are the most affordable, while multi-stage whole-house systems are a larger investment. Jusi H2O provides free water testing and detailed written quotes so you know the full cost before making any commitment.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Often Do Water Filters Need to Be Changed?</h3>
              <p className="text-gray-700">Filter change intervals depend on the filter type and your water usage. Sediment pre-filters typically need replacement every three to six months. Carbon filters last six to twelve months. Specialty media for iron or sulfur removal may last one to three years. Jusi H2O provides a maintenance schedule specific to your system and offers automatic filter replacement service.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Will a Water Filter Reduce My Water Pressure?</h3>
              <p className="text-gray-700">A properly sized filtration system should not noticeably reduce water pressure. We size every system based on your household&apos;s peak flow rate to ensure adequate pressure at all fixtures. Reduced pressure is usually a sign that filters need changing, not a permanent issue.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Can I Install a Water Filter Myself?</h3>
              <p className="text-gray-700">Simple under-sink filters are DIY-friendly, but whole-house systems require plumbing modifications, proper sizing calculations, and knowledge of local building codes. Improper installation can cause leaks, pressure loss, or bypassed filtration. Professional installation by Jusi H2O ensures the system is connected correctly, tested, and warranted.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Jusi H2O Service Tampa Bay?</h3>
              <p className="text-gray-700">Yes. Jusi H2O provides water filtration installation, service, and filter replacement throughout Hillsborough County, Pinellas County, Sarasota County, and surrounding Tampa Bay communities. Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> to schedule your free water test.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Find Out What Is in Your Tampa Bay Water</h2>
          <p className="text-blue-100 text-lg mb-8">
            Schedule a free in-home water test with Jusi H2O. We will test your water, explain the results, and recommend a filtration solution tailored to your home — with no obligation.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Free Water Test
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

        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related services">
          <h2 className="text-lg font-semibold mb-3">Related Services</h2>
          <ul className="space-y-2">
            <li><Link href="/water-softener" className="text-blue-600 hover:underline">Water Softener Installation</Link></li>
            <li><Link href="/whole-house-filtration" className="text-blue-600 hover:underline">Whole-House Filtration</Link></li>
            <li><Link href="/reverse-osmosis" className="text-blue-600 hover:underline">Reverse Osmosis Systems</Link></li>
          </ul>
        </nav>
        <nav className="mt-8 pt-8 border-t border-gray-200" aria-label="Service areas">
          <h2 className="text-lg font-semibold mb-3">Water Filtration by Area</h2>
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
