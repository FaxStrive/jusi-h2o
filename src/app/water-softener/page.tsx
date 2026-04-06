import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Softener Installation & Service Tampa Bay',
  description: 'Professional water softener installation in Tampa Bay by Jusi H2O. Eliminate hard water, protect appliances, and enjoy softer skin. Free water test.',
  alternates: {
    canonical: 'https://jusih2o.com/water-softener',
  },
  openGraph: {
    title: 'Water Softener Installation & Service Tampa Bay | Jusi H2O',
    description: 'Professional water softener installation in Tampa Bay by Jusi H2O. Eliminate hard water, protect appliances, and enjoy softer skin. Free water test.',
    url: 'https://jusih2o.com/water-softener',
    siteName: 'Jusi H2O',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Jusi H2O Water Filtration Services Tampa Bay' }],
    type: 'website',
  },
}

export default function WaterSoftenerPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Water Softener","provider":{"@type":"LocalBusiness","name":"Jusi H2O","telephone":"+18133030515","url":"https://jusih2o.com"},"areaServed":[{"@type":"City","name":"Hillsborough County, FL"},{"@type":"City","name":"Pinellas County, FL"},{"@type":"City","name":"Sarasota County, FL"},{"@type":"City","name":"Tampa Bay, FL"},{"@type":"City","name":"Florida"}],"url":"https://jusih2o.com/water-softener","description":"Jusi H2O provides professional water softener services in Tampa and the greater Tampa Bay area. Free consultations available."}` }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How Much Does Water Softener Cost?","acceptedAnswer":{"@type":"Answer","text":"Water Softener costs vary based on your home's specific needs, existing infrastructure, and system specifications. Jusi H2O provides free in-home assessments with detailed written quotes — so you know exactly what you'll pay before committing to anything."}},{"@type":"Question","name":"How Long Does Water Softener Take?","acceptedAnswer":{"@type":"Answer","text":"Most residential water softener projects are completed in a single day. More complex installations may take 2 days. During your free consultation with Jusi H2O, we'll give you a specific timeline for your Tampa project."}},{"@type":"Question","name":"Do I Need a Permit for Water Softener?","acceptedAnswer":{"@type":"Answer","text":"Permit requirements depend on the specific work being done and local municipal regulations. Jusi H2O handles all required local permits as part of our service — we're familiar with Tampa Bay requirements and manage the paperwork on your behalf."}},{"@type":"Question","name":"What Warranty Does Jusi H2O Provide for Water Softener?","acceptedAnswer":{"@type":"Answer","text":"Jusi H2O provides manufacturer warranties on all equipment and a labor guarantee on all installations. Specific warranty terms are provided in writing before work begins. Most equipment carries 5–10 year manufacturer warranties."}},{"@type":"Question","name":"Does Jusi H2O Provide Water Softener in Tampa?","acceptedAnswer":{"@type":"Answer","text":"Yes, Jusi H2O serves Tampa and surrounding communities. Call (813) 303-0515 to confirm service availability in your specific neighborhood."}}]}` }}
      />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Last updated: <time dateTime="2026-04-05">April 2026</time>
          </p>
          <h1 className="text-5xl font-bold mb-6">Water Softener Installation and Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional water softener installation and maintenance from Jusi H2O — serving Tampa Bay, Hillsborough County, Pinellas County, and surrounding Florida communities.
            Free in-home water testing and consultation. Licensed and insured.
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

      {/* What Is a Water Softener */}
      <section className="py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center mb-6">What Is a Water Softener and Why Do Tampa Bay Homes Need One?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              A water softener is a whole-home filtration system that removes calcium, magnesium, and other dissolved minerals from your household water supply through a process called ion exchange. Tampa Bay&apos;s municipal water is sourced primarily from surface reservoirs and the Floridan Aquifer, both of which carry elevated mineral concentrations that make the region&apos;s water among the hardest in Florida. Water hardness levels in Hillsborough and Pinellas counties regularly measure between 12 and 25 grains per gallon — well above the 7 GPG threshold where the Water Quality Association recommends softening.
            </p>
            <p>
              Hard water leaves visible white scale deposits on faucets, showerheads, and glass surfaces. Over time, that same mineral buildup accumulates inside water heaters, dishwashers, and washing machines, reducing their efficiency and shortening their operational lifespan. The U.S. Department of Energy estimates that just a quarter inch of scale buildup inside a water heater can increase energy consumption by up to 29 percent. For Tampa Bay homeowners running their water heater year-round, that translates to a measurable increase in monthly utility bills.
            </p>
            <p>
              Beyond appliance protection, softened water improves daily comfort. Shampoo and soap lather more effectively, leaving hair softer and skin less dry. Laundry comes out brighter and feels softer without the mineral residue that causes fabric stiffness. Dishes and glassware dry spot-free without the chalky film hard water leaves behind.
            </p>
            <p>
              Jusi H2O installs and services residential water softeners sized specifically for Tampa Bay water conditions. We test your water on-site, measure hardness, iron content, and pH levels, and then recommend a system calibrated to your household&apos;s daily water usage and the number of bathrooms in your home. Every installation includes a bypass valve for outdoor irrigation lines, ensuring softened water goes where it benefits you most while untreated water feeds your lawn and landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Signs You Need a Water Softener */}
      <section className="py-16 px-4 bg-blue-50" aria-labelledby="signs-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="signs-heading" className="text-3xl font-bold text-center mb-4">Signs Your Tampa Bay Home Needs a Water Softener</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Many homeowners live with hard water for years without realizing how much it costs them. Here are the most common indicators that your home would benefit from a water softener system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">White Crusty Buildup on Fixtures</h3>
              <p className="text-gray-600">Chalky white or greenish deposits around faucets, showerheads, and drain openings are calcium and magnesium scale — a direct result of hard water evaporating and leaving minerals behind.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Dry Skin and Flat Hair After Showering</h3>
              <p className="text-gray-600">Hard water prevents soap from fully dissolving, leaving a residue on your skin and hair. If your skin feels tight or itchy after bathing, or your hair looks dull despite using quality products, mineral-laden water is likely the cause.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Spots on Dishes and Glassware</h3>
              <p className="text-gray-600">Cloudy spots and film on glasses, silverware, and dishes after running the dishwasher are caused by mineral deposits drying onto surfaces. No amount of rinse aid fully corrects this without addressing the source water.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Stiff, Dingy Laundry</h3>
              <p className="text-gray-600">Towels feel rough and scratchy. White clothes develop a grayish tint over time. Colors fade faster than expected. Hard water traps detergent in fabric fibers instead of rinsing it away cleanly.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Frequent Plumbing Repairs</h3>
              <p className="text-gray-600">Scale accumulation narrows pipe diameter over time, reducing water pressure and causing blockages. If you are calling a plumber more often than expected, hard water may be accelerating wear on your plumbing system.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">High Water Heater Energy Bills</h3>
              <p className="text-gray-600">Scale acts as an insulator inside your water heater tank, forcing the heating element to work harder and run longer. Tampa Bay homeowners with hard water often notice their water heater struggles to maintain consistent hot water output.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-4">Why Choose Jusi H2O for Water Softener Installation</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Serving Tampa Bay homeowners with professional water softener installation and service. Here&apos;s what sets us apart from other water treatment companies in the area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Free In-Home Assessment</h3>
              <p className="text-gray-600">We evaluate your specific needs before recommending anything. No pressure, no obligation — just honest, expert advice about the right water softener solution for your home.</p>
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
          <h2 id="process-heading" className="text-3xl font-bold text-center mb-12">How Jusi H2O Installs Your Water Softener in Tampa Bay</h2>
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

      {/* Types of Water Softeners */}
      <section className="py-16 px-4" aria-labelledby="types-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="types-heading" className="text-3xl font-bold text-center mb-6">Types of Water Softener Systems We Install</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Not every home requires the same type of water softener. Jusi H2O evaluates your water quality, household size, plumbing configuration, and budget to recommend the most effective solution. We install and service several categories of softening systems across the Tampa Bay area.
            </p>
            <p>
              <strong>Salt-based ion exchange softeners</strong> are the most common and effective option for Tampa Bay&apos;s hard water. These systems use resin beads charged with sodium ions to swap out calcium and magnesium as water passes through the tank. The resin regenerates automatically using a brine solution, keeping the system operating without manual intervention. Salt-based systems are ideal for homes with hardness levels above 10 GPG — which includes most of Hillsborough and Pinellas County.
            </p>
            <p>
              <strong>Salt-free water conditioners</strong> use template-assisted crystallization to change the structure of hardness minerals so they do not adhere to surfaces. These systems do not technically remove minerals from the water, so they are best suited for homes with moderate hardness or homeowners who prefer to avoid sodium in their water supply. They require no electricity, produce no wastewater, and need minimal maintenance.
            </p>
            <p>
              <strong>Dual-tank softeners</strong> provide uninterrupted soft water by alternating between two resin tanks during regeneration cycles. This is the preferred option for larger households, homes with high water demand, or properties where consistent water quality is critical around the clock.
            </p>
            <p>
              During your free in-home consultation, our technician will test your water, discuss your household&apos;s usage patterns, and explain which system type will deliver the best results for your specific situation. We pair water softeners with <Link href="/water-filtration" className="text-blue-600 hover:underline">whole-house filtration</Link> when needed to address chlorine, sediment, and other contaminants alongside hardness. We also service and repair existing water softener systems regardless of brand or age, including salt replenishment, resin replacement, and control valve rebuilds.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Water Softeners</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Much Does a Water Softener Cost in Tampa Bay?</h3>
              <p className="text-gray-700">Water softener costs depend on your home&apos;s size, water hardness level, the type of system selected, and any plumbing modifications needed for installation. Residential systems in the Tampa Bay area typically range from several hundred to several thousand dollars installed. Jusi H2O provides free in-home assessments with detailed written quotes so you know exactly what to expect before committing.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Long Does Water Softener Installation Take?</h3>
              <p className="text-gray-700">Most residential water softener installations are completed in two to four hours. If additional plumbing work is needed — such as rerouting pipes or adding a dedicated drain line — installation may take a full day. We schedule a specific window during your free consultation so you know exactly when to expect us.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">How Often Does a Water Softener Need Maintenance?</h3>
              <p className="text-gray-700">Salt-based systems need salt replenished every four to eight weeks depending on water usage and hardness levels. Beyond salt, we recommend an annual system inspection to check the resin bed, clean the brine tank, and verify the control valve is cycling properly. Jusi H2O offers maintenance plans that cover all of this on a regular schedule.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Will a Water Softener Make My Water Taste Salty?</h3>
              <p className="text-gray-700">No. The amount of sodium added during the ion exchange process is very small — typically 12 to 30 milligrams per 8-ounce glass, depending on hardness level. That is well below the threshold most people can taste. If sodium is a dietary concern, we can install a potassium chloride system or add a <Link href="/reverse-osmosis" className="text-blue-600 hover:underline">reverse osmosis system</Link> at your kitchen sink for drinking water.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-lg mb-2">Does Jusi H2O Service Existing Water Softeners?</h3>
              <p className="text-gray-700">Yes. We service and repair all major brands of water softeners, including systems we did not originally install. Common service calls include replacing worn resin, rebuilding control valves, diagnosing regeneration issues, and resolving salt bridging. Call <a href="tel:+18133030515" className="text-blue-600 hover:underline">(813) 303-0515</a> to schedule a service appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Get a Free Water Softener Consultation in Tampa Bay</h2>
          <p className="text-blue-100 text-lg mb-8">
            Jusi H2O offers free in-home water testing and consultations with no obligation. We&apos;ll test your water hardness, assess your plumbing, and provide a clear recommendation tailored to your home.
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
    
        <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related services">
          <h2 className="text-lg font-semibold mb-3">Related Services</h2>
          <ul className="space-y-2">
            <li><Link href="/water-filtration" className="text-blue-600 hover:underline">Water Filtration Systems</Link></li>
            <li><Link href="/water-testing" className="text-blue-600 hover:underline">Water Testing</Link></li>
            <li><Link href="/whole-house-filtration" className="text-blue-600 hover:underline">Whole-House Filtration</Link></li>
          </ul>
        </nav>
        <nav className="mt-8 pt-8 border-t border-gray-200" aria-label="Service areas">
          <h2 className="text-lg font-semibold mb-3">Water Softener by Area</h2>
          <ul className="space-y-2">
            <li><Link href="/water-softener-in-hillsborough-county-fl" className="text-blue-600 hover:underline">Water Softener in Hillsborough County, FL</Link></li>
            <li><Link href="/water-softener-in-pinellas-county-fl" className="text-blue-600 hover:underline">Water Softener in Pinellas County, FL</Link></li>
            <li><Link href="/water-softener-in-sarasota-county-fl" className="text-blue-600 hover:underline">Water Softener in Sarasota County, FL</Link></li>
            <li><Link href="/water-softener-in-tampa-bay-fl" className="text-blue-600 hover:underline">Water Softener in Tampa Bay, FL</Link></li>
            <li><Link href="/water-softener-in-florida" className="text-blue-600 hover:underline">Water Softener in Florida</Link></li>
          </ul>
        </nav>
    </main>
  )
}
