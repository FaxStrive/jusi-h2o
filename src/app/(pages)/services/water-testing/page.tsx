import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WaterTestingContent } from "./content";

export const metadata: Metadata = {
  title: "Free In-Home Water Testing",
  description:
    "Free professional water testing in Tampa Bay. Test for hardness, chlorine, pH, iron, TDS, and more. Same-day results with no obligation. Call (813) 303-0515.",
  alternates: { canonical: "/services/water-testing" },
};

export default function WaterTestingPage() {
  return (
    <>
      <PageHero
        badge="Water Testing"
        title="Know What Is in Your Water"
        subtitle="Our free in-home water test checks for 10+ contaminants and gives you clear, honest results with zero obligation."
        backgroundImage="/images/water-droplet-lab.jpeg"
        overlayOpacity={0.7}
      />
      <WaterTestingContent />
      <CTASection />
    </>
  );
}
