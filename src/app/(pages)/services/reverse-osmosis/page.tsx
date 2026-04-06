import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { ReverseOsmosisContent } from "./content";

export const metadata: Metadata = {
  title: "Reverse Osmosis Drinking Water Systems Tampa",
  description:
    "Reverse osmosis systems remove up to 99% of contaminants for pure drinking water. Professional installation in Tampa Bay. Free water test included.",
  alternates: { canonical: "/services/reverse-osmosis" },
};

export default function ReverseOsmosisPage() {
  return (
    <>
      <PageHero
        badge="Reverse Osmosis"
        title="The Purest Drinking Water"
        subtitle="Multi-stage reverse osmosis removes up to 99% of dissolved contaminants from your drinking water."
        backgroundImage="/images/ro-faucet-glass.jpeg"
        overlayOpacity={0.72}
      />
      <ReverseOsmosisContent />
      <CTASection />
    </>
  );
}
