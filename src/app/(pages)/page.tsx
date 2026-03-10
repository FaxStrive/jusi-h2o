import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ZipChecker } from "@/components/sections/zip-checker";
import { WaterProblems } from "@/components/sections/water-problems";
import { ServicesOverview } from "@/components/sections/services-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { ServiceAreaPreview } from "@/components/sections/service-area-preview";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ZipChecker />
      <WaterProblems />
      <ServicesOverview />
      <HowItWorks />
      <TestimonialsPreview />
      <ServiceAreaPreview />
      <CTASection />
    </>
  );
}
