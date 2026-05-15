import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  cities,
  services,
  localPages,
  getLocalPage,
  type LocalCity,
  type LocalService,
} from "@/lib/local-services";

export function generateStaticParams() {
  return localPages.map((p) => ({ localSlug: p.slug }));
}

export const dynamicParams = false;

const SITE = "https://jusih2o.com";
const ORG_ID = `${SITE}/#organization`;

export function generateMetadata({
  params,
}: {
  params: { localSlug: string };
}): Metadata {
  const page = getLocalPage(params.localSlug);
  if (!page) return { title: "Not Found" };

  const { city, service } = page;
  const title = `${service.name} in ${city.name}, FL`;
  const description = `${service.name} for ${city.name}, FL homes by Jusi H2O. Free in-home water test, transparent pricing, and a system sized to your tested water. Call (813) 303-0515.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/${page.slug}` },
    openGraph: {
      title: `${title} | Jusi H2O`,
      description,
      type: "article",
      url: `${SITE}/${page.slug}`,
      images: [
        { url: service.heroImage, width: 1200, height: 630, alt: title },
      ],
    },
  };
}

function buildFaqs(city: LocalCity, service: LocalService): { q: string; a: string }[] {
  const cityName = city.name;

  if (service.slug === "water-softener") {
    return [
      {
        q: `How hard is the water in ${cityName}, FL?`,
        a: `${cityName} water tests in the ${city.hardness.split(",")[0]} range. That is enough scale-forming calcium and magnesium to coat water heater elements, dishwasher heaters, and shower glass within months. Every Jusi H2O install starts with a tested hardness number so the softener is sized correctly rather than guessed.`,
      },
      {
        q: `What size water softener fits a typical ${cityName} home?`,
        a: `A four-person ${cityName} home usually lands in the 40,000 to 64,000 grain capacity range given local hardness. We size from a real water test plus your daily use, not a rule of thumb. Oversizing wastes salt and water; undersizing means hard water breakthrough between regenerations.`,
      },
      {
        q: "How long does install take?",
        a: "Most ${cityName} softener installs run two to four hours. We shut the water off, plumb in a bypass and brine drain, set the resin and brine tanks, program the head to your tested hardness, then verify zero hardness at a tested fixture before leaving.".replace("${cityName}", cityName),
      },
      {
        q: "Is softened water safe to drink?",
        a: "Yes. A softener exchanges calcium and magnesium for a small amount of sodium. For households on a low-sodium diet, we usually pair the softener with an under-sink reverse osmosis system that removes the added sodium at the kitchen tap.",
      },
    ];
  }

  if (service.slug === "whole-house-filtration") {
    return [
      {
        q: `What does whole-house filtration remove from ${cityName} water?`,
        a: `For ${cityName} municipal supply, a properly built catalytic carbon system targets chloramines, chlorine, taste-and-odor compounds, sediment, and disinfection by-products. It does not soften the water on its own. Most Tampa Bay homes need carbon filtration paired with a softener.`,
      },
      {
        q: "How often do filters need changing?",
        a: "Sediment pre-filters typically run six to twelve months in this region. Catalytic carbon tank media commonly lasts three to five years on chloraminated municipal supply. We document a replacement schedule on your invoice and call you before the bed is exhausted.",
      },
      {
        q: `Will a whole-house filter drop my water pressure in ${cityName}?`,
        a: `A properly sized whole-house carbon tank has minimal effect on pressure. We size the tank for your home's peak flow (laundry plus a shower plus a hose) so pressure stays steady. Cartridge-style systems undersized for Florida flow rates are the usual cause of pressure complaints.`,
      },
    ];
  }

  if (service.slug === "reverse-osmosis") {
    return [
      {
        q: `Why install reverse osmosis in ${cityName}, FL?`,
        a: `Reverse osmosis is the only point-of-use technology that consistently removes dissolved solids, lead, arsenic, fluoride, nitrates, chloramines, and PFAS. For ${cityName} homes that means crisp drinking water and clear ice from the same line, plus protection against emerging contaminants the utility cannot fully filter at the plant.`,
      },
      {
        q: "How much water does a residential RO system waste?",
        a: "Older systems wasted four gallons to make one. Modern Jusi H2O installs use permeate-pump or tankless designs that run a one-to-one or better recovery ratio. Over a year of typical kitchen use, the waste is comparable to one or two extra dishwasher cycles.",
      },
      {
        q: "Will an RO system feed my refrigerator water and ice?",
        a: "In most cases, yes. We tee off the RO storage tank to feed the fridge ice maker and water dispenser when the run is short enough to maintain pressure. On longer runs we add a permeate pump so the fridge dispenser still flows at full rate.",
      },
      {
        q: "How often do RO filters need changing?",
        a: "Sediment and carbon pre-filters change every six to twelve months. The RO membrane typically lasts three to five years on softened Tampa Bay feed water, longer when a softener is installed upstream and the home is not on a private well.",
      },
    ];
  }

  // well-water-treatment
  return [
    {
      q: `What contaminants are common in ${cityName} well water?`,
      a: `Private wells across the Tampa Bay region commonly show dissolved iron (orange staining), hydrogen sulfide (rotten-egg smell), low pH, hardness, sediment, and occasional coliform bacteria. The actual mix depends on well depth and which Floridan Aquifer zone the well draws from. A comprehensive test identifies exactly what is present.`,
      },
    {
      q: "Why can't I just install a softener?",
      a: "Softeners can hold small amounts of clear iron, but they are the wrong tool when iron exceeds three parts per million or hydrogen sulfide is present. The resin fouls and the brine never fully removes the iron. We stage air-injection oxidation, neutralization, softening, and UV based on what your test shows.",
    },
    {
      q: `How often should well water be tested in ${cityName}?`,
      a: "The EPA recommends testing private wells at least once a year for coliform bacteria, nitrates, pH, and TDS. Test immediately after flooding, nearby construction, or any change in water taste, odor, or color. Our free comprehensive well test covers the parameters Florida well owners actually need.",
    },
    {
      q: "Do you handle the electrical and drain plumbing?",
      a: "Yes. Air-injection iron systems backwash on a timed cycle and need a dedicated drain plus standard electrical. Our crew permits the work where required, ties the drain into existing waste plumbing, and verifies the backwash cycle on site before leaving.",
    },
  ];
}

export default function LocalServicePage({
  params,
}: {
  params: { localSlug: string };
}) {
  const page = getLocalPage(params.localSlug);
  if (!page) notFound();

  const { city, service } = page;
  const url = `${SITE}/${page.slug}`;
  const title = `${service.name} in ${city.name}, FL`;
  const faqs = buildFaqs(city, service);

  const cityIdx = cities.findIndex((c) => c.slug === city.slug);
  const siblingCity = cities[(cityIdx + 1) % cities.length];
  const serviceIdx = services.findIndex((s) => s.slug === service.slug);
  const siblingService = services[(serviceIdx + 1) % services.length];
  const siblingCityPage = `/${service.slug}-${siblingCity.slug}-fl`;
  const siblingServicePage = `/${siblingService.slug}-${city.slug}-fl`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${SITE}${service.relatedServicePage}`,
      },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: service.description,
    serviceType: service.name,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: `${city.name}, FL`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    offers: {
      "@type": "Offer",
      url: `${SITE}${service.relatedServicePage}`,
      availability: "https://schema.org/InStock",
    },
    url,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href={service.relatedServicePage} className="hover:text-white transition-colors">{service.name}</Link>
              <span>/</span>
              <span className="text-white">{city.name}, FL</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p data-bluf className="text-white/90 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
              Jusi H2O installs {service.shortName} for homes across {city.name}, Florida and the surrounding {city.county}. Every job starts with a free in-home water test and a system sized to your actual tested water, not a generic spec sheet. Founder Marquis Pendergrass has built Jusi H2O since 2011 to focus on Tampa Bay water chemistry specifically.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block bg-white text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-all">
                Get a Free Water Test
              </Link>
              <a href="tel:+18133030515" className="inline-block border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                (813) 303-0515
              </a>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold">

            <h2 className="text-2xl md:text-3xl">Why {city.name} Homes Need {service.name}</h2>
            <p>
              {city.name} ({city.population}, in {city.county}) is served by{" "}
              <a href={city.utilityUrl} target="_blank" rel="noopener noreferrer">{city.utility}</a>. Drinking water comes from {city.waterSource}. Hardness at the tap is {city.hardness}.
            </p>

            <aside className="not-prose my-6 rounded-2xl border-2 border-primary-100 bg-primary-50/60 p-5">
              <h3 className="font-bold text-base text-gray-900 m-0 mb-3">
                {city.name} Water Quality at a Glance
                <span className="block text-xs font-medium text-gray-600 mt-1">
                  {city.ccr
                    ? `From the ${city.ccr.reportYear} Consumer Confidence Report covering ${city.ccr.dataYear}`
                    : `Consult ${city.utility}'s most recent Consumer Confidence Report for current numbers`}
                </span>
              </h3>
              {city.ccr ? (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {city.ccr.chlorineRaa !== undefined && (
                    <div className="flex justify-between border-b border-primary-100 py-1.5">
                      <dt className="text-gray-700">Chlorine residual (RAA)</dt>
                      <dd className="text-gray-900 font-semibold">{city.ccr.chlorineRaa} mg/L</dd>
                    </div>
                  )}
                  {city.ccr.tthmRaa !== undefined && (
                    <div className="flex justify-between border-b border-primary-100 py-1.5">
                      <dt className="text-gray-700">TTHM (RAA)</dt>
                      <dd className="text-gray-900 font-semibold">{city.ccr.tthmRaa} ppb</dd>
                    </div>
                  )}
                  {city.ccr.haa5Raa !== undefined && (
                    <div className="flex justify-between border-b border-primary-100 py-1.5">
                      <dt className="text-gray-700">HAA5 (RAA)</dt>
                      <dd className="text-gray-900 font-semibold">{city.ccr.haa5Raa} ppb</dd>
                    </div>
                  )}
                  {city.ccr.lead90th !== undefined && (
                    <div className="flex justify-between border-b border-primary-100 py-1.5">
                      <dt className="text-gray-700">Lead (90th pct)</dt>
                      <dd className="text-gray-900 font-semibold">{city.ccr.lead90th} ppb</dd>
                    </div>
                  )}
                </dl>
              ) : (
                <p className="text-sm text-gray-700 m-0">
                  We have not parsed verbatim numbers from the most recent {city.name} CCR. The narrative ranges on this page reflect long-running regional values for the Floridan Aquifer and Tampa Bay Water supply. For current verified values pull the latest CCR from{" "}
                  <a href={city.utilityUrl} target="_blank" rel="noopener noreferrer" className="text-primary-700 underline">
                    {city.utility}
                  </a>
                  . We always bring a fresh on-site test to consultations.
                </p>
              )}
            </aside>

            <p>
              For most {city.name} homeowners that means visible scale on faucet aerators and showerheads within a year, water heaters that fail earlier than rated, and detergent that never quite lathers. A properly sized {service.shortName} fixes the water that arrives at every fixture, not just the kitchen tap. For the regional context behind these recommendations, see our{" "}
              <Link href={service.relatedPillar}>full water-treatment guide</Link>.
            </p>

            <h2 className="text-2xl md:text-3xl">How Our {service.name} Works</h2>
            <p>{service.description}</p>
            <p>
              Every install starts with a real water test. We do not size off a utility average. The Tampa Bay distribution loop carries seasonal variation, and the actual water at your kitchen sink may differ from headline numbers in any utility&apos;s annual report. For deeper background, read our{" "}
              <Link href={service.relatedServicePage}>{service.name} service page</Link>{" "}or the pillar guide at{" "}
              <Link href={service.relatedPillar}>{service.relatedPillar.replace(/^\//, "/")}</Link>.
            </p>

            <h2 className="text-2xl md:text-3xl">What&apos;s Included in a Jusi H2O Install</h2>
            <ul>
              {service.scopeOfWork.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl">{city.name}-Specific Considerations</h2>
            <p>
              {city.name} sits in {city.county}. The water you drink, cook with, and shower in is treated by {city.utility} (see the{" "}
              <a href={city.utilityUrl} target="_blank" rel="noopener noreferrer">utility&apos;s water-quality page</a>).
            </p>
            <p>
              We install for homeowners across {city.name}. Common neighborhoods include {city.neighborhoods.join(", ")}, plus the broader {city.county} area. Primary ZIP codes: {city.zipCodes.join(", ")}. Outside this list? We still likely serve you. <Link href="/contact">Schedule a free water test</Link> or call <a href="tel:+18133030515">(813) 303-0515</a>.
            </p>

            <p>
              Looking at a neighboring city or a different system? See{" "}
              <Link href={siblingCityPage}>{service.name} in {siblingCity.name}, FL</Link>{" "}or{" "}
              <Link href={siblingServicePage}>{siblingService.name} in {city.name}, FL</Link>.
            </p>

            <h2 className="text-2xl md:text-3xl">Frequently Asked Questions</h2>
            <div className="not-prose space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary-400 transition-all">
                  <summary className="cursor-pointer px-6 py-4 font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                    {faq.q}
                  </summary>
                  <div className="px-6 pb-4 pt-2 text-gray-700 leading-relaxed border-t border-gray-200">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <section className="not-prose mt-12 mb-8 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-600 p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to fix the water at your {city.name} home?
              </h2>
              <p className="text-white/90 mb-5">
                Free in-home water test. No high-pressure sales. A written quote with the system sized for your tested water.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-block bg-white text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-all">
                  Schedule a Free Water Test
                </Link>
                <a href="tel:+18133030515" className="inline-block border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  (813) 303-0515
                </a>
              </div>
            </section>

            <p className="text-xs text-gray-500 mt-8 not-prose">
              Social preview image: <a href={service.heroCredit.sourceUrl} className="underline" rel="nofollow">{service.heroCredit.title}</a>
              {service.heroCredit.author ? <> by {service.heroCredit.author}</> : null}
              {service.heroCredit.licenseUrl ? (
                <>, <a href={service.heroCredit.licenseUrl} className="underline" rel="nofollow">{service.heroCredit.license}</a></>
              ) : (
                <>, {service.heroCredit.license}</>
              )}
              , via Wikimedia Commons.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
