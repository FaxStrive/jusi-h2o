import type { Metadata } from 'next';
import Link from 'next/link';
import { localPages } from '@/lib/local-services';

export const metadata: Metadata = {
  title: 'Water Treatment Service Areas Across Tampa Bay FL',
  description: 'Jusi H2O provides water softener, filtration, reverse osmosis, and well water treatment across Tampa Bay. Serving Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties.',
  alternates: { canonical: '/service-areas' },
};

// Static city pages already covered by dedicated routes outside the dynamic [localSlug] generator.
const staticCityPages = [
  { slug: 'water-softener-tampa-fl', label: 'Water Softener in Tampa, FL' },
  { slug: 'water-softener-st-petersburg-fl', label: 'Water Softener in St. Petersburg, FL' },
  { slug: 'water-softener-clearwater-fl', label: 'Water Softener in Clearwater, FL' },
  { slug: 'water-softener-brandon-fl', label: 'Water Softener in Brandon, FL' },
  { slug: 'water-softener-sarasota-fl', label: 'Water Softener in Sarasota, FL' },
  { slug: 'water-softener-in-hillsborough-county-fl', label: 'Water Softener in Hillsborough County, FL' },
  { slug: 'water-softener-in-pinellas-county-fl', label: 'Water Softener in Pinellas County, FL' },
];

export default function ServiceAreasPage() {
  // Build dynamic-route entries from the canonical local-services data source.
  const dynamicAreas = localPages
    .map((p) => ({
      slug: p.slug,
      label: `${p.service.name} in ${p.city.name}, FL`,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const all = [
    ...staticCityPages.map((s) => ({ ...s, label: s.label })),
    ...dynamicAreas,
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Water Treatment Service Areas</h1>
      <p className="text-lg text-gray-700 mb-4">
        Jusi H2O proudly serves homeowners across a 50-mile radius of Tampa Bay with professional water testing, filtration, softening, and treatment services. Our licensed technicians provide same-day response throughout Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Whether you need a <Link href="/water-softener" className="text-blue-600 hover:underline">water softener</Link> to tackle the hard water common throughout Central Florida, a <Link href="/whole-house-filtration" className="text-blue-600 hover:underline">whole-house filtration system</Link> to remove chlorine and sediment, or a <Link href="/reverse-osmosis" className="text-blue-600 hover:underline">reverse osmosis system</Link> for pure drinking water, our team delivers expert installation and ongoing maintenance right to your door.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Every service call begins with a free in-home <Link href="/water-testing" className="text-blue-600 hover:underline">water test</Link> so we can recommend the right solution for your specific water quality challenges. From <Link href="/well-water-treatment" className="text-blue-600 hover:underline">well water treatment</Link> in rural Hillsborough County to condo-friendly RO systems in downtown St. Petersburg, Jusi H2O has you covered.
      </p>
      <p className="text-lg text-gray-700 mb-10">
        Select your area below to learn more about water treatment services available near you, or call <a href="tel:+18133030515" className="text-blue-600 font-semibold hover:underline">(813) 303-0515</a> to schedule your free water test today.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {all.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/${area.slug}`}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              {area.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
