import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reverse Osmosis Drinking Water Systems Tampa Bay',
  description: 'Reverse osmosis drinking water systems in Tampa Bay. Removes up to 99% of contaminants. Professional installation by Jusi H2O. Free water test.',
  alternates: {
    canonical: 'https://jusih2o.com/reverse-osmosis',
  },
  openGraph: {
    title: 'Reverse Osmosis Drinking Water Systems Tampa Bay | Jusi H2O',
    description: 'Reverse osmosis drinking water systems in Tampa Bay. Removes up to 99% of contaminants. Professional installation by Jusi H2O. Free water test.',
    url: 'https://jusih2o.com/reverse-osmosis',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Filtration Services Tampa Bay' }],
    type: 'website',
  },
}

export default function ReverseOsmosisPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Reverse Osmosis","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+18133030515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/reverse-osmosis","description":"Jusi H2O installs reverse osmosis drinking water systems throughout the Tampa Bay area. Removes up to 99% of contaminants. Free water test."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does reverse osmosis remove from water?","acceptedAnswer":{"@type":"Answer","text":"RO systems remove up to 99% of dissolved contaminants including lead, arsenic, fluoride, nitrates, sodium, chlorine, and total dissolved solids. They produce the purest drinking water available from a residential system."}},{"@type":"Question","name":"How much does an RO system cost?","acceptedAnswer":{"@type":"Answer","text":"Under-sink RO systems are among the most affordable water treatment options. Jusi H2O provides free water testing and detailed written quotes. Most installations are completed in a few hours."}},{"@type":"Question","name":"Does Jusi H2O serve Tampa Bay?","acceptedAnswer":{"@type":"Answer","text":"Yes. We install and service RO systems throughout Hillsborough, Pinellas, and Sarasota counties. Call (813) 303-0515 for a free consultation."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Reverse Osmosis Drinking Water Systems</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The purest drinking water available from a residential system. Reverse osmosis removes up to 99 percent of dissolved contaminants including lead, fluoride, arsenic, sodium, and total dissolved solids. Professional installation by Jusi H2O throughout Tampa Bay. Free water test included.
          </p>
          <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Schedule Free Consultation</Link>
            <a href="tel:+18133030515" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">Call (813) 303-0515</a>
          </address>
        </div>
      </section>

      {/* How RO Works */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center mb-6">How Reverse Osmosis Works</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Reverse osmosis forces water through a semi-permeable membrane with pores small enough to block dissolved contaminants while allowing pure water molecules to pass through. The membrane rejects contaminants at the molecular level — including substances too small for standard carbon or sediment filters to capture. This makes RO the most thorough residential water purification method available.
            </p>
            <p>
              A typical under-sink RO system includes multiple filtration stages that work in sequence. Water first passes through a sediment pre-filter that removes particles and protects the membrane. Next, a carbon pre-filter removes chlorine and chloramines — which would damage the RO membrane if not removed first. The water then passes through the reverse osmosis membrane itself, where up to 99 percent of dissolved contaminants are separated and flushed to drain. Finally, a carbon post-filter polishes the taste of the purified water before it reaches your dedicated RO faucet.
            </p>
            <p>
              For Tampa Bay homeowners, RO is particularly valuable because the region&apos;s water contains elevated total dissolved solids from the limestone aquifer, residual sodium from water softeners, and disinfection byproducts from chloramine treatment. An RO system at your kitchen sink gives you bottled-water quality directly from the tap — eliminating the cost, waste, and inconvenience of buying plastic water bottles. Many Tampa Bay families report that after installing an RO system, they stop buying bottled water entirely.
            </p>
            <p>
              Jusi H2O installs RO systems as standalone drinking water solutions or as the final stage of a complete <Link href="/water-treatment" className="text-blue-600 hover:underline">water treatment system</Link>. When paired with a <Link href="/water-softener" className="text-blue-600 hover:underline">water softener</Link> and <Link href="/whole-house-filtration" className="text-blue-600 hover:underline">whole-house filtration</Link>, the RO membrane lasts longer because it receives pre-treated water with fewer contaminants to process.
            </p>
          </div>
        </div>
      </section>

      {/* What RO Removes */}
      <section className="py-16 px-4 bg-blue-50" aria-labelledby="removes-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="removes-heading" className="text-3xl font-bold text-center mb-4">What Reverse Osmosis Removes from Your Water</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            RO membranes reject contaminants at the molecular level — far beyond what standard filters can achieve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Lead and Heavy Metals</h3>
              <p className="text-gray-600">RO removes up to 99 percent of lead, mercury, cadmium, and other heavy metals that can leach from older plumbing or enter groundwater from industrial sources.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Fluoride</h3>
              <p className="text-gray-600">For homeowners who prefer to control their fluoride intake, RO is one of the few residential methods that effectively removes fluoride from drinking water. Standard carbon filters do not remove fluoride.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Sodium and TDS</h3>
              <p className="text-gray-600">Water softeners add a small amount of sodium during the ion exchange process. RO removes this sodium along with the elevated total dissolved solids common in Tampa Bay water, producing water with a clean, neutral taste.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Arsenic and Nitrates</h3>
              <p className="text-gray-600">These contaminants can be present in well water and occasionally in municipal supplies. RO membranes reject both arsenic and nitrates at high efficiency — a capability most other residential filters lack.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Chlorine and Chloramines</h3>
              <p className="text-gray-600">The carbon pre-filter stage removes chlorine and chloramines before they reach the membrane, protecting the membrane while also eliminating the chemical taste and smell from your drinking water.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Pharmaceuticals and Microplastics</h3>
              <p className="text-gray-600">RO membranes are effective at removing pharmaceutical residues, endocrine disruptors, and microplastics that pass through municipal treatment. These emerging contaminants are increasingly found in surface water sources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">Why Choose Jusi H2O for Reverse Osmosis</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Professional installation ensures your RO system performs at peak efficiency from day one.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Free Water Testing</h3>
              <p className="text-gray-600">We test your water before installation to confirm which contaminants are present and verify that an RO system is the right solution for your specific water quality concerns.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Professional Under-Sink Installation</h3>
              <p className="text-gray-600">Our technicians install the system under your kitchen sink, connect the dedicated RO faucet, and route the drain line — all without damaging your countertop or cabinetry. Installation is typically complete in two to three hours.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Refrigerator and Ice Maker Connection</h3>
              <p className="text-gray-600">We can connect your RO system to your refrigerator water line so your ice and cold water dispenser also produce purified water — not just the kitchen faucet.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Filter Replacement Service</h3>
              <p className="text-gray-600">RO systems require periodic filter and membrane replacement. Jusi H2O tracks your service schedule and offers automatic replacement visits so your system always produces peak-quality water.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Eliminate Bottled Water</h3>
              <p className="text-gray-600">An RO system produces water that meets or exceeds bottled water purity — at a fraction of the per-gallon cost. Most families recoup the system cost within the first year by eliminating bottled water purchases.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">You receive a complete written quote including the system, installation, faucet, and any additional connections before any work begins. No hidden fees.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">How We Install Your Reverse Osmosis System</h2>
          <ol className="space-y-8">
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 1">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Water Test and Consultation</h3>
                <p className="text-gray-600">We test your water to confirm contaminant levels and discuss your goals. We also inspect the under-sink space to plan the installation layout. Free and no obligation.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 2">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">System Selection and Quote</h3>
                <p className="text-gray-600">We recommend an RO system matched to your water conditions and usage needs — including the number of filtration stages, tank size, and whether to include refrigerator/ice maker connection. Your quote details every component and cost.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 3">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                <p className="text-gray-600">Our technician installs the system under your sink, mounts the dedicated faucet, connects the feed and drain lines, and routes tubing to the refrigerator if requested. Most installations take two to three hours.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 4">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">System Flush and TDS Verification</h3>
                <p className="text-gray-600">After installation, we flush the system, fill the storage tank, and test the output water with a TDS meter to verify contaminant rejection rates meet specifications. You see the results before we leave.</p>
              </div>
            </li>
            <li className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" aria-label="Step 5">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Filter Change Schedule</h3>
                <p className="text-gray-600">We provide a maintenance schedule specific to your system and usage. Pre-filters need changing every six to twelve months, and membranes every two to five years. Jusi H2O offers automatic filter replacement service.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Reverse Osmosis</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Reverse Osmosis Waste a Lot of Water?</h3>
              <p className="text-gray-700">Modern RO systems produce three to four gallons of purified water for every gallon sent to drain — a significant improvement over older systems. The reject water can also be routed to landscape irrigation. When you consider that most households use only a few gallons per day for drinking and cooking, the total water usage is modest.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does RO Remove Beneficial Minerals?</h3>
              <p className="text-gray-700">RO does remove most dissolved minerals, including calcium and magnesium. However, the amount of minerals in drinking water contributes a very small percentage of your daily mineral intake compared to food. If mineral content is a concern, we can install a remineralization filter after the RO membrane that adds back beneficial minerals.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Does RO Water Taste Compared to Bottled Water?</h3>
              <p className="text-gray-700">Most people describe RO water as very clean and neutral-tasting. It is comparable to or better than premium bottled water because the purification happens right at your tap — the water does not sit in plastic for weeks or months before you drink it. The carbon post-filter stage ensures a polished, fresh taste.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Can I Connect an RO System to My Refrigerator?</h3>
              <p className="text-gray-700">Yes. Jusi H2O can route a line from your RO system to your refrigerator&apos;s water inlet, so your ice maker and cold water dispenser produce purified RO water. This is one of the most popular upgrades we install alongside RO systems.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Much Does an RO System Cost?</h3>
              <p className="text-gray-700">Under-sink RO systems are among the most affordable water treatment options available. The total installed cost includes the system, dedicated faucet, installation labor, and any optional connections like refrigerator lines. Jusi H2O provides detailed written quotes with no obligation. Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> for a free consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Stop Buying Bottled Water — Get Pure Water from Your Tap</h2>
          <p className="text-blue-100 text-lg mb-8">Jusi H2O installs reverse osmosis drinking water systems throughout Tampa Bay. Schedule a free water test and find out how clean your water can be.</p>
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
            <li><Link href="/water-testing" className="text-blue-600 hover:underline">Water Testing</Link></li>
          </ul>
        </nav>
        <nav className="mt-8 pt-8 border-t border-gray-200" aria-label="Service areas">
          <h2 className="text-lg font-semibold mb-3">Reverse Osmosis by Area</h2>
          <ul className="space-y-2">
            <li><Link href="/reverse-osmosis-in-hillsborough-county-fl" className="text-blue-600 hover:underline">Reverse Osmosis in Hillsborough County, FL</Link></li>
            <li><Link href="/reverse-osmosis-in-pinellas-county-fl" className="text-blue-600 hover:underline">Reverse Osmosis in Pinellas County, FL</Link></li>
            <li><Link href="/reverse-osmosis-in-sarasota-county-fl" className="text-blue-600 hover:underline">Reverse Osmosis in Sarasota County, FL</Link></li>
            <li><Link href="/reverse-osmosis-in-tampa-bay-fl" className="text-blue-600 hover:underline">Reverse Osmosis in Tampa Bay, FL</Link></li>
            <li><Link href="/reverse-osmosis-in-florida" className="text-blue-600 hover:underline">Reverse Osmosis in Florida</Link></li>
          </ul>
        </nav>
    </main>
  )
}
