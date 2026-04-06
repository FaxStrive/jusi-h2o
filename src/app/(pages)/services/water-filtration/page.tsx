import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WaterFiltrationContent } from "./content";

export const metadata: Metadata = {
  title: "Whole-House Water Filtration Systems Tampa Bay",
  description:
    "Whole house water filtration systems for Tampa Bay homes. Clean, filtered water at every faucet. Remove chlorine, sediment, and contaminants. Free water test.",
  alternates: { canonical: "/services/water-filtration" },
};

export default function WaterFiltrationPage() {
  return (
    <>
      <PageHero
        badge="Water Filtration"
        title="Clean Water at Every Faucet"
        subtitle="Our whole-house filtration systems treat every drop of water entering your home, from the kitchen to the shower."
        backgroundImage="/images/family-glasses-cheers.jpeg"
        overlayOpacity={0.75}
      />
      <WaterFiltrationContent />
      <CTASection />
    </>
  );
}
