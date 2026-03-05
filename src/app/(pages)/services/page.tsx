import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesContent } from "@/components/sections/services-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional water filtration services including whole-house systems, reverse osmosis, water softeners, water testing, and more. Serving Tampa Bay.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Water Filtration Solutions for Every Home"
        subtitle="From whole-house systems to reverse osmosis, we customize the right solution based on your water test results."
      />
      <ServicesContent />
      <CTASection />
    </>
  );
}
