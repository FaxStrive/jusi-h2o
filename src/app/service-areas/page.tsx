import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas | Jusi H2O',
  description: 'Jusi H2O serves these locations. Click your city to learn more.',
};

const areas = [
  {
    "slug": "water-softener-in-hillsborough-county-fl",
    "city": "Water Softener In Hillsborough County Fl",
    "state": "",
    "href": "/water-softener-in-hillsborough-county-fl"
  },
  {
    "slug": "water-softener-in-pinellas-county-fl",
    "city": "Water Softener In Pinellas County Fl",
    "state": "",
    "href": "/water-softener-in-pinellas-county-fl"
  },
  {
    "slug": "water-softener-in-sarasota-county-fl",
    "city": "Water Softener In Sarasota County Fl",
    "state": "",
    "href": "/water-softener-in-sarasota-county-fl"
  },
  {
    "slug": "water-softener-in-tampa-bay-fl",
    "city": "Water Softener In Tampa Bay Fl",
    "state": "",
    "href": "/water-softener-in-tampa-bay-fl"
  },
  {
    "slug": "water-softener-in-florida",
    "city": "Water Softener In Florida",
    "state": "",
    "href": "/water-softener-in-florida"
  },
  {
    "slug": "whole-house-filtration-in-hillsborough-county-fl",
    "city": "Whole House Filtration In Hillsborough County Fl",
    "state": "",
    "href": "/whole-house-filtration-in-hillsborough-county-fl"
  },
  {
    "slug": "whole-house-filtration-in-pinellas-county-fl",
    "city": "Whole House Filtration In Pinellas County Fl",
    "state": "",
    "href": "/whole-house-filtration-in-pinellas-county-fl"
  },
  {
    "slug": "whole-house-filtration-in-sarasota-county-fl",
    "city": "Whole House Filtration In Sarasota County Fl",
    "state": "",
    "href": "/whole-house-filtration-in-sarasota-county-fl"
  },
  {
    "slug": "whole-house-filtration-in-tampa-bay-fl",
    "city": "Whole House Filtration In Tampa Bay Fl",
    "state": "",
    "href": "/whole-house-filtration-in-tampa-bay-fl"
  },
  {
    "slug": "whole-house-filtration-in-florida",
    "city": "Whole House Filtration In Florida",
    "state": "",
    "href": "/whole-house-filtration-in-florida"
  },
  {
    "slug": "reverse-osmosis-in-hillsborough-county-fl",
    "city": "Reverse Osmosis In Hillsborough County Fl",
    "state": "",
    "href": "/reverse-osmosis-in-hillsborough-county-fl"
  },
  {
    "slug": "reverse-osmosis-in-pinellas-county-fl",
    "city": "Reverse Osmosis In Pinellas County Fl",
    "state": "",
    "href": "/reverse-osmosis-in-pinellas-county-fl"
  },
  {
    "slug": "reverse-osmosis-in-sarasota-county-fl",
    "city": "Reverse Osmosis In Sarasota County Fl",
    "state": "",
    "href": "/reverse-osmosis-in-sarasota-county-fl"
  },
  {
    "slug": "reverse-osmosis-in-tampa-bay-fl",
    "city": "Reverse Osmosis In Tampa Bay Fl",
    "state": "",
    "href": "/reverse-osmosis-in-tampa-bay-fl"
  },
  {
    "slug": "reverse-osmosis-in-florida",
    "city": "Reverse Osmosis In Florida",
    "state": "",
    "href": "/reverse-osmosis-in-florida"
  },
  {
    "slug": "water-filtration-in-hillsborough-county-fl",
    "city": "Water Filtration In Hillsborough County Fl",
    "state": "",
    "href": "/water-filtration-in-hillsborough-county-fl"
  },
  {
    "slug": "water-filtration-in-pinellas-county-fl",
    "city": "Water Filtration In Pinellas County Fl",
    "state": "",
    "href": "/water-filtration-in-pinellas-county-fl"
  },
  {
    "slug": "water-filtration-in-sarasota-county-fl",
    "city": "Water Filtration In Sarasota County Fl",
    "state": "",
    "href": "/water-filtration-in-sarasota-county-fl"
  },
  {
    "slug": "water-filtration-in-tampa-bay-fl",
    "city": "Water Filtration In Tampa Bay Fl",
    "state": "",
    "href": "/water-filtration-in-tampa-bay-fl"
  },
  {
    "slug": "water-filtration-in-florida",
    "city": "Water Filtration In Florida",
    "state": "",
    "href": "/water-filtration-in-florida"
  },
  {
    "slug": "water-testing-in-hillsborough-county-fl",
    "city": "Water Testing In Hillsborough County Fl",
    "state": "",
    "href": "/water-testing-in-hillsborough-county-fl"
  },
  {
    "slug": "water-testing-in-pinellas-county-fl",
    "city": "Water Testing In Pinellas County Fl",
    "state": "",
    "href": "/water-testing-in-pinellas-county-fl"
  },
  {
    "slug": "water-testing-in-sarasota-county-fl",
    "city": "Water Testing In Sarasota County Fl",
    "state": "",
    "href": "/water-testing-in-sarasota-county-fl"
  },
  {
    "slug": "water-testing-in-tampa-bay-fl",
    "city": "Water Testing In Tampa Bay Fl",
    "state": "",
    "href": "/water-testing-in-tampa-bay-fl"
  },
  {
    "slug": "water-testing-in-florida",
    "city": "Water Testing In Florida",
    "state": "",
    "href": "/water-testing-in-florida"
  },
  {
    "slug": "water-treatment-in-hillsborough-county-fl",
    "city": "Water Treatment In Hillsborough County Fl",
    "state": "",
    "href": "/water-treatment-in-hillsborough-county-fl"
  },
  {
    "slug": "water-treatment-in-pinellas-county-fl",
    "city": "Water Treatment In Pinellas County Fl",
    "state": "",
    "href": "/water-treatment-in-pinellas-county-fl"
  },
  {
    "slug": "water-treatment-in-sarasota-county-fl",
    "city": "Water Treatment In Sarasota County Fl",
    "state": "",
    "href": "/water-treatment-in-sarasota-county-fl"
  },
  {
    "slug": "water-treatment-in-tampa-bay-fl",
    "city": "Water Treatment In Tampa Bay Fl",
    "state": "",
    "href": "/water-treatment-in-tampa-bay-fl"
  },
  {
    "slug": "water-treatment-in-florida",
    "city": "Water Treatment In Florida",
    "state": "",
    "href": "/water-treatment-in-florida"
  },
  {
    "slug": "well-water-treatment-in-hillsborough-county-fl",
    "city": "Well Water Treatment In Hillsborough County Fl",
    "state": "",
    "href": "/well-water-treatment-in-hillsborough-county-fl"
  },
  {
    "slug": "well-water-treatment-in-pinellas-county-fl",
    "city": "Well Water Treatment In Pinellas County Fl",
    "state": "",
    "href": "/well-water-treatment-in-pinellas-county-fl"
  },
  {
    "slug": "well-water-treatment-in-sarasota-county-fl",
    "city": "Well Water Treatment In Sarasota County Fl",
    "state": "",
    "href": "/well-water-treatment-in-sarasota-county-fl"
  },
  {
    "slug": "well-water-treatment-in-tampa-bay-fl",
    "city": "Well Water Treatment In Tampa Bay Fl",
    "state": "",
    "href": "/well-water-treatment-in-tampa-bay-fl"
  },
  {
    "slug": "well-water-treatment-in-florida",
    "city": "Well Water Treatment In Florida",
    "state": "",
    "href": "/well-water-treatment-in-florida"
  }
];

export default function ServiceAreasPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Service Areas</h1>
      <p className="text-lg text-gray-700 mb-10">
        Jusi H2O proudly serves the following communities.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/service-areas/${area.slug}`}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              {area.city}{area.state ? `, ${area.state}` : ''}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
