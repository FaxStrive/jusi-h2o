import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ZipChecker } from "@/components/sections/zip-checker";
import { WaterProblems } from "@/components/sections/water-problems";
import { ServicesOverview } from "@/components/sections/services-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WaterStats } from "@/components/sections/water-stats";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { ServiceAreaPreview } from "@/components/sections/service-area-preview";
import { CTASection } from "@/components/sections/cta-section";
import { InlineCTA } from "@/components/ui/inline-cta";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Filtration & Softener Experts Tampa Bay',
  description:
    'Jusi H2O is Tampa Bay\'s trusted water specialist. Free in-home water testing, water softeners, reverse osmosis, and whole-house filtration. Serving 5 counties.',
  alternates: { canonical: 'https://jusih2o.com' },
};


export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ZipChecker />
      <WaterProblems />
      <ServicesOverview />
      <InlineCTA variant="button" text="Get Your Free Water Test" trustLine="No cost, no obligation. See what is in your water." />
      <HowItWorks />
      <WaterStats />
      <TestimonialsPreview />
      <InlineCTA variant="banner" text="Tampa Bay Families Trust Jusi H2O" message="Schedule your free in-home water test and experience the difference." />
      <ServiceAreaPreview />
      <CTASection />
    </>
  );
}
