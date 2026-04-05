'use client'

import { usePathname } from 'next/navigation'

const SITE_URL = 'https://jusih2o.com'
const BUSINESS_NAME = 'Jusi H2O'
const SCHEMA_TYPE = 'HomeAndConstructionBusiness'
const DATE_MODIFIED = '2026-03-18'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': SCHEMA_TYPE,
  name: BUSINESS_NAME,
  description:
    'Jusi H2O provides professional water filtration, water softeners, and reverse osmosis systems in Tampa Bay, FL. Free in-home water testing with same-day results. Serving Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties.',
  url: SITE_URL,
  telephone: '+18133030515',
  priceRange: '$',
  image: `${SITE_URL}/images/og-image.png`,
  logo: `${SITE_URL}/images/logo.png`,
  dateModified: DATE_MODIFIED,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'St. Petersburg',
    addressRegion: 'FL',
    postalCode: '33702',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.7676,
    longitude: -82.6403,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Hillsborough County, FL' },
    { '@type': 'AdministrativeArea', name: 'Pinellas County, FL' },
    { '@type': 'AdministrativeArea', name: 'Manatee County, FL' },
    { '@type': 'AdministrativeArea', name: 'Sarasota County, FL' },
    { '@type': 'AdministrativeArea', name: 'Polk County, FL' },
    { '@type': 'City', name: 'Tampa, FL' },
    { '@type': 'City', name: 'St. Petersburg, FL' },
    { '@type': 'City', name: 'Clearwater, FL' },
    { '@type': 'City', name: 'Brandon, FL' },
    { '@type': 'City', name: 'Sarasota, FL' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+18133030515',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5.0,
    reviewCount: 2500,
    bestRating: 5,
    worstRating: 1,
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'WQA Certified (Water Quality Association)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NSF-42: Aesthetic effects' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NSF-44: Cation exchange water softeners' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NSF-53: Health effects' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'NSF-58: Reverse osmosis systems' },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Water Softener Installation',
        description:
          'Professional water softener installation in Tampa Bay. Eliminates hard water scale and protects appliances.',
        url: `${SITE_URL}/services/water-softeners`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Whole-House Water Filtration',
        description:
          'Whole-house water filtration systems for clean water at every faucet in Tampa Bay homes.',
        url: `${SITE_URL}/services/water-filtration`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Reverse Osmosis Systems',
        description:
          'Reverse osmosis drinking water systems that remove up to 99% of contaminants.',
        url: `${SITE_URL}/services/reverse-osmosis`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Free Water Testing',
        description:
          'Free professional in-home water testing in Tampa Bay with same-day results and no obligation.',
        url: `${SITE_URL}/services/water-testing`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Well Water Treatment',
        description:
          'Professional well water treatment removing iron, sulfur, bacteria, and sediment in Tampa Bay.',
        url: `${SITE_URL}/services/well-water`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Leak Detection & Repair',
        description:
          'Advanced leak detection and repair services in Tampa Bay. Find and fix hidden leaks fast.',
        url: `${SITE_URL}/services/leak-repair`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Water Heater Installation',
        description:
          'Tankless and traditional water heater installation in Tampa Bay. Energy-efficient options available.',
        url: `${SITE_URL}/services/water-heater-installation`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Commercial Plumbing & Water Treatment',
        description:
          'Commercial water treatment and plumbing for Tampa Bay restaurants, offices, and medical facilities.',
        url: `${SITE_URL}/services/commercial-plumbing`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'JusiCare+ Protection Plan',
        description:
          'Annual maintenance protection plan at $199/year including quarterly salt refills and filter replacements.',
        url: `${SITE_URL}/services/jusicare`,
      },
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_NAME,
  url: SITE_URL,
  dateModified: DATE_MODIFIED,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const SERVICE_SCHEMA_MAP: Record<
  string,
  { name: string; description: string; faq: Array<{ q: string; a: string }> }
> = {
  'water-softeners': {
    name: 'Water Softener Installation',
    description:
      'Professional water softener installation in Tampa Bay. Eliminates hard water scale buildup, protects appliances, and improves skin and hair. Free in-home water test included.',
    faq: [
      {
        q: 'How hard is Tampa Bay water?',
        a: 'Tampa Bay area water typically measures 150-300 mg/L (8-17 grains per gallon), which is classified as very hard to extremely hard. This is significantly harder than the national average and causes accelerated scale buildup in pipes and appliances.',
      },
      {
        q: 'How long does water softener installation take?',
        a: 'Most residential water softener installations take 2-4 hours from start to finish. Our technician installs the system, programs it to your water hardness level, and ensures everything is working correctly before leaving.',
      },
      {
        q: 'How much salt does a water softener use?',
        a: 'A typical residential water softener uses 6-10 lbs of salt per week, depending on water hardness and household size. Our JusiCare+ plan includes quarterly salt refills so you never run out.',
      },
    ],
  },
  'reverse-osmosis': {
    name: 'Reverse Osmosis Systems',
    description:
      'Multi-stage reverse osmosis drinking water systems that remove up to 99% of dissolved contaminants including lead, arsenic, fluoride, nitrates, and chlorine. Professional installation in Tampa Bay.',
    faq: [
      {
        q: 'What contaminants does reverse osmosis remove?',
        a: 'Reverse osmosis removes up to 99% of dissolved contaminants including lead, arsenic, fluoride, nitrates, chlorine, chloramines, chromium, copper, radium, and total dissolved solids (TDS). It provides the highest level of purification available for residential drinking water.',
      },
      {
        q: 'How often do reverse osmosis filters need to be replaced?',
        a: 'Pre-filters and post-filters typically need replacement every 6-12 months. The RO membrane itself lasts 2-3 years under normal use. We set up automatic reminders so you never miss a filter change.',
      },
      {
        q: 'Where is a reverse osmosis system installed?',
        a: 'Reverse osmosis systems are installed under the kitchen sink and take up minimal space. A dedicated faucet is installed at the sink for purified drinking water. The system connects directly to your cold water line.',
      },
    ],
  },
  'water-filtration': {
    name: 'Whole-House Water Filtration',
    description:
      'Whole-house water filtration systems that treat every drop of water entering your Tampa Bay home. Remove chlorine, sediment, VOCs, and other contaminants at every faucet and shower.',
    faq: [
      {
        q: 'What is the difference between a whole-house filter and a point-of-use filter?',
        a: 'A whole-house filter (point-of-entry) treats all the water coming into your home at the main water line. Every faucet, shower, and appliance receives filtered water. A point-of-use filter only treats water at one specific location, like under the kitchen sink.',
      },
      {
        q: 'Will a whole-house water filter reduce my water pressure?',
        a: 'A properly sized whole-house filter has minimal effect on water pressure. Our technicians size the system for your home\'s flow rate to ensure strong pressure throughout. Some homeowners actually notice improved pressure after removing buildup.',
      },
      {
        q: 'How long do whole-house water filter cartridges last?',
        a: 'Most whole-house filter cartridges last 3-6 months, depending on your water quality and household water usage. Carbon media in larger systems can last 6-12 months. We provide replacement schedule reminders with every installation.',
      },
    ],
  },
  'water-testing': {
    name: 'Free In-Home Water Testing',
    description:
      'Free professional in-home water testing in Tampa Bay. Our certified technicians test for 10+ contaminants including hardness, chlorine, pH, iron, lead, and TDS. Same-day results with no obligation.',
    faq: [
      {
        q: 'What does the free water test check for?',
        a: 'Our free in-home water test checks for hardness (calcium/magnesium), chlorine, pH levels, iron, total dissolved solids (TDS), sulfur, and other contaminants common to your water source. Results are explained in plain language by our certified technician.',
      },
      {
        q: 'Is there any obligation after the free water test?',
        a: 'Absolutely none. Our free water test is exactly that, free and no-obligation. We explain your results, and if you are interested in solutions, we provide a clear quote. There is zero pressure to purchase anything.',
      },
      {
        q: 'How long does the in-home water test take?',
        a: 'The water test itself takes approximately 30 minutes. Our technician will conduct the tests, explain each result in plain language, and if you have questions or want recommendations, budget about 60 minutes total for the appointment.',
      },
    ],
  },
  'leak-repair': {
    name: 'Leak Detection & Repair',
    description:
      'Professional leak detection and repair services in Tampa Bay using advanced technology to find hidden leaks fast. Prevent water damage and high bills. Licensed and insured.',
    faq: [
      {
        q: 'How do you detect leaks without tearing up walls?',
        a: 'We use advanced leak detection technology including acoustic listening devices, thermal imaging, and pressure testing to locate leaks precisely without unnecessary demolition. This minimally invasive approach saves time, money, and protects your home.',
      },
      {
        q: 'What are signs I might have a hidden leak?',
        a: 'Common signs include unexplained increases in water bills, damp spots on walls or floors, mold or mildew smell, reduced water pressure, sounds of running water when nothing is on, and cracks in walls or foundation near water lines.',
      },
      {
        q: 'How quickly can you respond to a leak repair call?',
        a: 'We offer same-day service in most Tampa Bay service areas. For emergency leaks causing active water damage, call (813) 303-0515 and we will dispatch a technician as quickly as possible.',
      },
    ],
  },
  'water-heater-installation': {
    name: 'Water Heater Installation & Replacement',
    description:
      'Professional water heater installation in Tampa Bay. Tankless and traditional options with same-day service available. Energy-efficient solutions with full warranty coverage.',
    faq: [
      {
        q: 'Should I get a tankless or traditional water heater?',
        a: 'Tankless water heaters cost more upfront but provide unlimited hot water on demand and can reduce energy bills by 24-34% for average households. Traditional tank heaters are less expensive initially and work well for most homes. We help you choose based on your household size, usage patterns, and budget.',
      },
      {
        q: 'How long does water heater installation take?',
        a: 'A standard water heater replacement typically takes 2-3 hours. A new tankless installation can take 3-5 hours depending on the venting and gas/electrical requirements. We handle all permits and inspections.',
      },
      {
        q: 'How long do water heaters last?',
        a: 'Traditional tank water heaters typically last 8-12 years. Tankless water heaters can last 15-20 years with proper maintenance. Hard water in Tampa Bay can shorten lifespan, which is why we recommend pairing your water heater with a softener.',
      },
    ],
  },
  'commercial-plumbing': {
    name: 'Commercial Plumbing & Water Treatment',
    description:
      'Commercial water treatment and plumbing services in Tampa Bay for restaurants, offices, medical facilities, and commercial properties. High-capacity systems with ongoing maintenance.',
    faq: [
      {
        q: 'Do you service restaurants and food service businesses?',
        a: 'Yes, we specialize in water treatment systems for restaurants and food service operations. Proper water filtration improves ice quality, extends equipment life, enhances food and beverage taste, and helps meet health department requirements.',
      },
      {
        q: 'What commercial water treatment systems do you install?',
        a: 'We install high-capacity whole-house filtration, commercial reverse osmosis systems, water softeners, scale prevention systems, UV disinfection, and custom multi-stage treatment systems sized for commercial flow rates and regulatory requirements.',
      },
      {
        q: 'Do you offer maintenance contracts for commercial systems?',
        a: 'Yes, we offer commercial maintenance contracts tailored to your system type and usage. Regular professional maintenance extends system life, ensures consistent water quality, and helps avoid costly emergency repairs.',
      },
    ],
  },
  jusicare: {
    name: 'JusiCare+ Protection Plan',
    description:
      'JusiCare+ annual protection plan at $199/year. Includes quarterly salt refills, scheduled filter replacements, system sanitation, priority service scheduling, and lifetime warranty on covered systems.',
    faq: [
      {
        q: 'What is included in the JusiCare+ protection plan?',
        a: 'JusiCare+ includes quarterly salt refills for water softeners, scheduled filter replacements based on your system type, complete system sanitation, annual performance check, priority service scheduling, and lifetime warranty on covered systems, all for $199 per year.',
      },
      {
        q: 'Is JusiCare+ available for all Jusi H2O systems?',
        a: 'JusiCare+ is available for water softeners, whole-house filtration systems, and reverse osmosis systems installed by Jusi H2O. It is designed to keep your investment performing at peak efficiency year after year.',
      },
      {
        q: 'What happens if my system breaks down under JusiCare+?',
        a: 'JusiCare+ members receive priority service scheduling, meaning we come to you first. Covered systems are protected under lifetime warranty, so parts and labor for covered failures are included at no additional cost.',
      },
    ],
  },
  'well-water': {
    name: 'Well Water Treatment',
    description:
      'Professional well water treatment in Tampa Bay. Remove iron staining, sulfur smell, bacteria, and sediment with custom treatment systems. Free comprehensive well water testing included.',
    faq: [
      {
        q: 'What contaminants are common in Florida well water?',
        a: 'Florida well water commonly contains iron (causing orange staining), hydrogen sulfide (sulfur/rotten egg smell), tannins (tea-colored water), bacteria and coliform, hard minerals, sediment, and occasionally arsenic or nitrates depending on location. A comprehensive well water test identifies exactly what is present.',
      },
      {
        q: 'Do I need a special filtration system for well water?',
        a: 'Yes, well water treatment is different from municipal water treatment. Municipal water is pre-treated; well water requires addressing your specific contaminants. We design custom multi-stage systems that may include sediment filters, iron filters, acid neutralizers, UV disinfection, and softeners based on your test results.',
      },
      {
        q: 'How often should well water be tested?',
        a: 'The EPA recommends testing well water at least once a year for coliform bacteria, nitrates, pH, and TDS. After flooding or nearby construction, test immediately. Our free comprehensive well water test covers all the critical parameters for Florida well owners.',
      },
    ],
  },
}

function getBreadcrumbs(pathname: string) {
  if (pathname === '/') return null
  const segments = pathname.split('/').filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    dateModified: DATE_MODIFIED,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...segments.map((seg: string, i: number) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: seg
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c: string) => c.toUpperCase()),
        item: `${SITE_URL}/${segments.slice(0, i + 1).join('/')}`,
      })),
    ],
  }
}

function getServiceSchema(pathname: string) {
  const slug = pathname.replace('/services/', '').replace(/\/$/, '')
  const serviceData = SERVICE_SCHEMA_MAP[slug]
  if (!serviceData) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceData.name,
    description: serviceData.description,
    url: `${SITE_URL}${pathname}`,
    dateModified: DATE_MODIFIED,
    provider: {
      '@type': SCHEMA_TYPE,
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: '+18133030515',
    },
    areaServed: [
      { '@type': 'City', name: 'Tampa, FL' },
      { '@type': 'City', name: 'St. Petersburg, FL' },
      { '@type': 'City', name: 'Clearwater, FL' },
      { '@type': 'AdministrativeArea', name: 'Hillsborough County, FL' },
      { '@type': 'AdministrativeArea', name: 'Pinellas County, FL' },
    ],
  }
}

function getFaqSchema(pathname: string) {
  const slug = pathname.replace('/services/', '').replace(/\/$/, '')
  const serviceData = SERVICE_SCHEMA_MAP[slug]
  if (!serviceData || !serviceData.faq?.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: serviceData.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export default function SchemaMarkup() {
  const pathname = usePathname()
  const schemas: object[] = []

  // Homepage: LocalBusiness + WebSite
  if (pathname === '/') {
    schemas.push(localBusinessSchema, websiteSchema)
  }

  // All interior pages: BreadcrumbList
  const breadcrumbs = getBreadcrumbs(pathname)
  if (breadcrumbs) schemas.push(breadcrumbs)

  // Service detail pages: Service schema + FAQ schema
  if (pathname.startsWith('/services/') && pathname !== '/services') {
    const service = getServiceSchema(pathname)
    if (service) schemas.push(service)

    const faq = getFaqSchema(pathname)
    if (faq) schemas.push(faq)
  }

  if (schemas.length === 0) return null

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
