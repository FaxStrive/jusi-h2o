/**
 * Local service-area pages for Jusi H2O.
 *
 * Tampa Bay metro: 20 cities x 4 services = 80 combinations.
 * 7 city/service combinations are already covered by static pages and are
 * excluded from this dynamic list (see SKIP_SLUGS in [localSlug]/page.tsx).
 *
 * SOURCING DISCIPLINE
 * -------------------
 * Every utility name and source URL points to a real, verifiable utility page.
 * We do NOT invent CCR numbers. Where a CCR PDF could not be verified at write
 * time, the ccr field is left undefined and the page renders narrative
 * language directing readers to the utility's most recent report.
 */

export type CcrData = {
  url: string;
  reportYear: number;
  dataYear: number;
  treatmentPlant?: string;
  chlorineMpa?: number;
  chlorineRaa?: number;
  tthmRaa?: number;
  tthmRange?: [number, number];
  haa5Raa?: number;
  haa5Range?: [number, number];
  fluoride?: number;
  nitrate?: number;
  lead90th?: number;
  leadPeriod?: string;
  copper90th?: number;
  copperPeriod?: string;
  sodium?: number;
  hardnessReported?: string;
  note?: string;
};

export type LocalCity = {
  slug: string;
  name: string;
  county: string;
  population: string;
  utility: string;
  utilityUrl: string;
  waterSource: string;
  hardness: string;
  zipCodes: string[];
  neighborhoods: string[];
  ccr?: CcrData;
};

export type LocalService = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  scopeOfWork: string[];
  relatedServicePage: string;
  relatedPillar: string;
  heroImage: string;
};

export type LocalPage = {
  slug: string;
  city: LocalCity;
  service: LocalService;
};

// -----------------------------------------------------------------------------
// CITIES (20)
// -----------------------------------------------------------------------------

export const cities: LocalCity[] = [
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    population: "approximately 403,000 residents",
    utility: "Tampa Water Department",
    utilityUrl: "https://www.tampa.gov/water",
    waterSource:
      "the Hillsborough River, with groundwater supplements from the Floridan Aquifer",
    hardness:
      "very hard, typically 200 to 240 mg/L as calcium carbonate (about 12 to 14 grains per gallon)",
    zipCodes: ["33602", "33603", "33604", "33605", "33606", "33607", "33609", "33610", "33611", "33612", "33613", "33614", "33615", "33616", "33617", "33618", "33619", "33620", "33621", "33624", "33625", "33626", "33629", "33634", "33637", "33647"],
    neighborhoods: ["South Tampa", "New Tampa", "Westchase", "Carrollwood", "Ybor City", "Hyde Park", "Palma Ceia", "Davis Islands", "Seminole Heights", "Channelside"],
  },
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    county: "Pinellas County",
    population: "approximately 261,000 residents",
    utility: "St. Petersburg Water Resources",
    utilityUrl: "https://www.stpete.org/government/city_departments/water_resources.php",
    waterSource:
      "wholesale supply from Tampa Bay Water, which blends Hillsborough River, Tampa Bypass Canal, Alafia River, and Floridan Aquifer sources",
    hardness:
      "very hard, typically 180 to 240 mg/L as calcium carbonate (about 11 to 14 grains per gallon)",
    zipCodes: ["33701", "33702", "33703", "33704", "33705", "33706", "33707", "33708", "33709", "33710", "33711", "33712", "33713", "33714", "33715", "33716"],
    neighborhoods: ["Downtown", "Old Northeast", "Snell Isle", "Shore Acres", "Crescent Lake", "Gulfport", "Tyrone", "Pinellas Point"],
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    county: "Pinellas County",
    population: "approximately 117,000 residents",
    utility: "Clearwater Public Utilities",
    utilityUrl: "https://www.myclearwater.com/government/city-departments/public-utilities",
    waterSource:
      "a blend of local Floridan Aquifer wells and wholesale supply from Pinellas County Utilities",
    hardness:
      "very hard, typically 180 to 230 mg/L as calcium carbonate (about 11 to 13 grains per gallon)",
    zipCodes: ["33755", "33756", "33759", "33761", "33762", "33763", "33764", "33765", "33767"],
    neighborhoods: ["Downtown Clearwater", "Clearwater Beach", "Island Estates", "Countryside", "Sand Key"],
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    population: "approximately 116,000 residents",
    utility: "Hillsborough County Public Utilities",
    utilityUrl: "https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/utilities",
    waterSource:
      "wholesale supply from Tampa Bay Water, treated and distributed by Hillsborough County",
    hardness:
      "very hard, typically 200 to 250 mg/L as calcium carbonate (about 12 to 15 grains per gallon)",
    zipCodes: ["33510", "33511", "33594", "33596"],
    neighborhoods: ["Bloomingdale", "FishHawk Ranch", "Valrico", "Riverview adjacent", "Limona"],
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    county: "Sarasota County",
    population: "approximately 57,000 residents",
    utility: "City of Sarasota Public Works",
    utilityUrl: "https://www.sarasotafl.gov/government/public-works/utilities",
    waterSource:
      "reverse-osmosis-treated Floridan Aquifer water from the Verna Wellfield",
    hardness:
      "moderate to hard, typically 100 to 180 mg/L as calcium carbonate (about 6 to 10 grains per gallon) after RO treatment",
    zipCodes: ["34231", "34232", "34233", "34234", "34236", "34237", "34239", "34240", "34241", "34242"],
    neighborhoods: ["Downtown Sarasota", "Lido Key", "Siesta Key", "Bird Key", "Southside Village", "Gulf Gate"],
  },
  {
    slug: "bradenton",
    name: "Bradenton",
    county: "Manatee County",
    population: "approximately 56,000 residents",
    utility: "Manatee County Utilities",
    utilityUrl: "https://www.mymanatee.org/departments/utilities",
    waterSource:
      "Lake Manatee surface water treated at the Lake Manatee Water Treatment Plant",
    hardness:
      "moderately hard, typically 90 to 150 mg/L as calcium carbonate (about 5 to 9 grains per gallon)",
    zipCodes: ["34203", "34205", "34207", "34208", "34209", "34210", "34211", "34212"],
    neighborhoods: ["Downtown Bradenton", "Cortez", "Palmetto adjacent", "West Bradenton", "Lakewood Ranch adjacent"],
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    population: "approximately 116,000 residents",
    utility: "Lakeland Water Utilities",
    utilityUrl: "https://www.lakelandgov.net/departments/water-utilities/",
    waterSource:
      "Floridan Aquifer groundwater drawn from the T.B. Williams and C. Wayne Smith Water Treatment Plants",
    hardness:
      "very hard, typically 200 to 280 mg/L as calcium carbonate (about 12 to 16 grains per gallon)",
    zipCodes: ["33801", "33803", "33805", "33809", "33810", "33811", "33812", "33813", "33815"],
    neighborhoods: ["Lake Hollingsworth", "Dixieland", "Cleveland Heights", "South Lakeland", "Lake Morton"],
  },
  {
    slug: "plant-city",
    name: "Plant City",
    county: "Hillsborough County",
    population: "approximately 40,000 residents",
    utility: "Plant City Utilities",
    utilityUrl: "https://www.plantcitygov.com/229/Utilities",
    waterSource:
      "Floridan Aquifer groundwater treated locally; many outlying homes use private wells",
    hardness:
      "very hard, typically 220 to 300 mg/L as calcium carbonate (about 13 to 18 grains per gallon)",
    zipCodes: ["33563", "33565", "33566", "33567"],
    neighborhoods: ["Downtown Plant City", "Walden Lake", "North Plant City", "Coronet"],
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    population: "approximately 100,000 residents",
    utility: "Hillsborough County Public Utilities",
    utilityUrl: "https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/utilities",
    waterSource:
      "wholesale supply from Tampa Bay Water, distributed by Hillsborough County",
    hardness:
      "very hard, typically 200 to 250 mg/L as calcium carbonate (about 12 to 15 grains per gallon)",
    zipCodes: ["33569", "33578", "33579"],
    neighborhoods: ["Boyette", "Summerfield", "Panther Trace", "Rivercrest"],
  },
  {
    slug: "wesley-chapel",
    name: "Wesley Chapel",
    county: "Pasco County",
    population: "approximately 64,000 residents",
    utility: "Pasco County Utilities",
    utilityUrl: "https://www.pascocountyfl.net/188/Utilities",
    waterSource:
      "Floridan Aquifer groundwater plus wholesale supply from Tampa Bay Water in some service areas",
    hardness:
      "very hard, typically 180 to 260 mg/L as calcium carbonate (about 11 to 15 grains per gallon)",
    zipCodes: ["33543", "33544", "33545"],
    neighborhoods: ["Seven Oaks", "Meadow Pointe", "Saddlebrook", "Wiregrass Ranch"],
  },
  {
    slug: "land-o-lakes",
    name: "Land O'Lakes",
    county: "Pasco County",
    population: "approximately 38,000 residents",
    utility: "Pasco County Utilities",
    utilityUrl: "https://www.pascocountyfl.net/188/Utilities",
    waterSource:
      "Floridan Aquifer groundwater; many homes outside the central service area use private wells",
    hardness:
      "very hard, typically 200 to 280 mg/L as calcium carbonate (about 12 to 16 grains per gallon)",
    zipCodes: ["34637", "34638", "34639"],
    neighborhoods: ["Connerton", "Lake Padgett", "Bexley", "Stonegate"],
  },
  {
    slug: "new-port-richey",
    name: "New Port Richey",
    county: "Pasco County",
    population: "approximately 17,000 residents",
    utility: "New Port Richey Public Works",
    utilityUrl: "https://www.cityofnewportrichey.org/government/departments/public-works/",
    waterSource:
      "Floridan Aquifer groundwater treated at the city water treatment plant",
    hardness:
      "very hard, typically 200 to 270 mg/L as calcium carbonate (about 12 to 16 grains per gallon)",
    zipCodes: ["34652", "34653", "34654", "34655"],
    neighborhoods: ["Downtown", "Gulf Harbors", "Jasmine Lakes", "Veterans Village"],
  },
  {
    slug: "largo",
    name: "Largo",
    county: "Pinellas County",
    population: "approximately 84,000 residents",
    utility: "Pinellas County Utilities",
    utilityUrl: "https://pinellas.gov/water-quality/",
    waterSource:
      "wholesale supply from Tampa Bay Water, treated and distributed by Pinellas County",
    hardness:
      "very hard, typically 180 to 240 mg/L as calcium carbonate (about 11 to 14 grains per gallon)",
    zipCodes: ["33770", "33771", "33773", "33774", "33778"],
    neighborhoods: ["Downtown Largo", "Belleair Bluffs adjacent", "Indian Rocks Beach adjacent"],
  },
  {
    slug: "palm-harbor",
    name: "Palm Harbor",
    county: "Pinellas County",
    population: "approximately 60,000 residents",
    utility: "Pinellas County Utilities",
    utilityUrl: "https://pinellas.gov/water-quality/",
    waterSource:
      "wholesale supply from Tampa Bay Water, distributed by Pinellas County",
    hardness:
      "very hard, typically 180 to 240 mg/L as calcium carbonate (about 11 to 14 grains per gallon)",
    zipCodes: ["34683", "34684", "34685"],
    neighborhoods: ["Lansbrook", "Crystal Beach", "Ozona", "Highland Lakes"],
  },
  {
    slug: "pinellas-park",
    name: "Pinellas Park",
    county: "Pinellas County",
    population: "approximately 53,000 residents",
    utility: "Pinellas County Utilities",
    utilityUrl: "https://pinellas.gov/water-quality/",
    waterSource:
      "wholesale supply from Tampa Bay Water, distributed by Pinellas County",
    hardness:
      "very hard, typically 180 to 240 mg/L as calcium carbonate (about 11 to 14 grains per gallon)",
    zipCodes: ["33781", "33782"],
    neighborhoods: ["Mainlands", "Park Station", "Bardmoor adjacent"],
  },
  {
    slug: "seminole",
    name: "Seminole",
    county: "Pinellas County",
    population: "approximately 19,000 residents",
    utility: "Pinellas County Utilities",
    utilityUrl: "https://pinellas.gov/water-quality/",
    waterSource:
      "wholesale supply from Tampa Bay Water, distributed by Pinellas County",
    hardness:
      "very hard, typically 180 to 240 mg/L as calcium carbonate (about 11 to 14 grains per gallon)",
    zipCodes: ["33772", "33776", "33777"],
    neighborhoods: ["Bardmoor", "Bay Pines adjacent", "Oakhurst"],
  },
  {
    slug: "dunedin",
    name: "Dunedin",
    county: "Pinellas County",
    population: "approximately 36,000 residents",
    utility: "Dunedin Public Works and Utilities",
    utilityUrl: "https://www.dunedingov.com/Departments/Public-Works-Utilities",
    waterSource:
      "wholesale supply from Pinellas County, sourced from Tampa Bay Water",
    hardness:
      "very hard, typically 180 to 240 mg/L as calcium carbonate (about 11 to 14 grains per gallon)",
    zipCodes: ["34698"],
    neighborhoods: ["Downtown Dunedin", "Honeymoon Island adjacent", "Caladesi adjacent"],
  },
  {
    slug: "tarpon-springs",
    name: "Tarpon Springs",
    county: "Pinellas County",
    population: "approximately 26,000 residents",
    utility: "Tarpon Springs Public Services",
    utilityUrl: "https://www.ctsfl.us/departments/public-services",
    waterSource:
      "Floridan Aquifer groundwater treated locally, supplemented by Pinellas County wholesale water",
    hardness:
      "very hard, typically 180 to 260 mg/L as calcium carbonate (about 11 to 15 grains per gallon)",
    zipCodes: ["34688", "34689"],
    neighborhoods: ["Sponge Docks", "Whitcomb Bayou", "Sunset Hills"],
  },
  {
    slug: "bartow",
    name: "Bartow",
    county: "Polk County",
    population: "approximately 19,000 residents",
    utility: "Bartow Water Utilities",
    utilityUrl: "https://www.cityofbartow.net/162/Water-Department",
    waterSource:
      "Floridan Aquifer groundwater treated at the city water treatment plant",
    hardness:
      "very hard, typically 220 to 300 mg/L as calcium carbonate (about 13 to 18 grains per gallon)",
    zipCodes: ["33830"],
    neighborhoods: ["Downtown Bartow", "Wabash", "South Bartow"],
  },
  {
    slug: "winter-haven",
    name: "Winter Haven",
    county: "Polk County",
    population: "approximately 56,000 residents",
    utility: "Winter Haven Water Department",
    utilityUrl: "https://www.mywinterhaven.com/department/water/",
    waterSource:
      "Floridan Aquifer groundwater treated at multiple city water treatment plants",
    hardness:
      "very hard, typically 200 to 280 mg/L as calcium carbonate (about 12 to 16 grains per gallon)",
    zipCodes: ["33880", "33881", "33884"],
    neighborhoods: ["Cypress Gardens adjacent", "Lake Eloise", "Florence Villa", "Eloise"],
  },
];

// -----------------------------------------------------------------------------
// SERVICES (4)
// -----------------------------------------------------------------------------

export const services: LocalService[] = [
  {
    slug: "water-softener",
    name: "Water Softener Installation",
    shortName: "water softener installation",
    description:
      "Professional cation-exchange water softener installation sized to your home's flow rate and tested hardness. Eliminates scale buildup that damages water heaters and shortens appliance life.",
    scopeOfWork: [
      "Free in-home hardness test before sizing",
      "Resin tank, brine tank, and bypass valve installation",
      "Permitted plumbing tie-in at the main supply line",
      "System programming based on tested water hardness",
      "Walkthrough of operation, salt refill, and maintenance",
      "Manufacturer warranty registration",
    ],
    relatedServicePage: "/services/water-softeners",
    relatedPillar: "/water-treatment/hard-water-tampa-bay",
    heroImage: "/images/service-hero/water-softener.jpg",
  },
  {
    slug: "whole-house-filtration",
    name: "Whole-House Water Filtration",
    shortName: "whole-house water filtration",
    description:
      "Point-of-entry carbon filtration systems that treat every faucet, shower, and appliance in your home. Removes chloramines, chlorine, sediment, and disinfection by-products common in Tampa Bay municipal water.",
    scopeOfWork: [
      "Comprehensive water test for chlorine, chloramines, sediment, and TDS",
      "Catalytic carbon tank sized to your home's peak flow rate",
      "Sediment pre-filter and bypass valve installation",
      "Main-line plumbing tie-in with proper drain plumbing",
      "Flow and pressure verification at multiple fixtures",
      "Replacement schedule documented on the invoice",
    ],
    relatedServicePage: "/services/water-filtration",
    relatedPillar: "/water-treatment/hard-water-tampa-bay",
    heroImage: "/images/service-hero/whole-house-filtration.jpg",
  },
  {
    slug: "reverse-osmosis",
    name: "Reverse Osmosis Drinking Water Systems",
    shortName: "reverse osmosis installation",
    description:
      "Multi-stage under-sink reverse osmosis systems that remove up to 99 percent of dissolved solids including lead, arsenic, fluoride, nitrates, and PFAS. Dedicated faucet at the kitchen sink for crisp drinking and cooking water.",
    scopeOfWork: [
      "Pre-filter, RO membrane, and post-filter installation",
      "Dedicated faucet drilling and installation",
      "Storage tank and air-gap drain saddle connections",
      "Refrigerator water and ice maker tee-off when feasible",
      "Output TDS testing to confirm membrane performance",
      "Replacement schedule for pre-filters, post-filters, and membrane",
    ],
    relatedServicePage: "/services/reverse-osmosis",
    relatedPillar: "/water-treatment/reverse-osmosis-drinking-water",
    heroImage: "/images/service-hero/reverse-osmosis.jpg",
  },
  {
    slug: "well-water-treatment",
    name: "Well Water Treatment",
    shortName: "well water treatment",
    description:
      "Custom multi-stage treatment for private wells in the Tampa Bay region. Targets iron, hydrogen sulfide, low pH, sediment, and bacteria common in Floridan Aquifer well water.",
    scopeOfWork: [
      "Free comprehensive well water test (iron, sulfur, pH, hardness, bacteria)",
      "Custom multi-stage system design based on your specific water chemistry",
      "Air-injection oxidation, neutralization, softening, and UV stages as needed",
      "Sediment pre-filter and bypass valve installation",
      "Backwash drain plumbing and electrical tie-in",
      "Follow-up testing to verify treatment effectiveness",
    ],
    relatedServicePage: "/services/well-water",
    relatedPillar: "/water-treatment/florida-well-water",
    heroImage: "/images/service-hero/well-water-treatment.jpg",
  },
];

// -----------------------------------------------------------------------------
// SKIP set: combinations already covered by static pages.
// -----------------------------------------------------------------------------

export const SKIP_SLUGS = new Set<string>([
  "water-softener-tampa-fl",
  "water-softener-st-petersburg-fl",
  "water-softener-clearwater-fl",
  "water-softener-brandon-fl",
  "water-softener-sarasota-fl",
  "water-softener-in-hillsborough-county-fl",
  "water-softener-in-pinellas-county-fl",
]);

// -----------------------------------------------------------------------------
// Build the cross-product, excluding skipped slugs.
// -----------------------------------------------------------------------------

function buildPages(): LocalPage[] {
  const pages: LocalPage[] = [];
  for (const service of services) {
    for (const city of cities) {
      const slug = `${service.slug}-${city.slug}-fl`;
      if (SKIP_SLUGS.has(slug)) continue;
      pages.push({ slug, city, service });
    }
  }
  return pages;
}

export const localPages: LocalPage[] = buildPages();

export function getLocalPage(slug: string): LocalPage | undefined {
  return localPages.find((p) => p.slug === slug);
}
