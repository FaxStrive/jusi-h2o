import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesContent } from "@/components/sections/services-content";
import { ServicesComparison } from "@/components/sections/services-comparison";
import { CTASection } from "@/components/sections/cta-section";
import { InlineCTA } from "@/components/ui/inline-cta";

export const metadata: Metadata = {
  title: "Water Filtration & Treatment Services Tampa Bay",
  description:
    "Tampa Bay water filtration services: whole-house filters, reverse osmosis, water softeners, well water treatment, and JusiCare+ maintenance plans. Free quotes.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Water Filtration Solutions for Every Home"
        subtitle="From whole-house systems to reverse osmosis, we customize the right solution based on your water test results."
        backgroundVideo="/videos/tap-water.mp4"
        overlayOpacity={0.78}
      />
      <ServicesContent />
      <InlineCTA variant="banner" text="Not Sure Which System You Need?" message="Start with a free water test. We will recommend the perfect solution for your home." />
      <ServicesComparison />
      <CTASection />
    </>
  );
}
