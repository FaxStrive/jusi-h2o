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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Filtration Tampa Bay',
  description:
    'Jusi H2O is Tampa Bay\'s trusted water specialist. Free in-home water testing, water softeners, reverse osmosis, and whole-house filtration. Serving 5 counties. Call (725) 235-8278.',
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
      <HowItWorks />
      <WaterStats />
      <TestimonialsPreview />
      <ServiceAreaPreview />
      <CTASection />
    </>
  );
}
