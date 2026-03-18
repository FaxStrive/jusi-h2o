import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WellWaterContent } from "./content";

export const metadata: Metadata = {
  title: "Well Water Treatment Tampa Bay",
  description:
    "Professional well water treatment in Tampa Bay. Remove iron staining, sulfur smell, bacteria, and sediment. Free comprehensive well water testing. Licensed & insured.",
  alternates: { canonical: "/services/well-water" },
  keywords: [
    "well water treatment Tampa",
    "well water filtration Tampa Bay",
    "iron removal well water Florida",
    "sulfur smell well water",
    "well water bacteria treatment",
    "well water testing Tampa",
    "acid neutralizer well water",
    "UV disinfection well water",
    "well water sediment filter",
    "tannin removal well water Florida",
  ],
};

export default function WellWaterPage() {
  return (
    <>
      <PageHero
        badge="Well Water Treatment"
        title="Clean, Safe Well Water for Your Home"
        subtitle="Florida well water comes with unique challenges. From iron staining to sulfur smell to harmful bacteria, we design custom treatment systems that solve every problem at the source."
        backgroundImage="/images/well-water-pipe.jpeg"
        overlayOpacity={0.72}
      />
      <WellWaterContent />
      <CTASection />
    </>
  );
}
