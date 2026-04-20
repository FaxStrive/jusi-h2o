import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WaterFiltrationContent } from "./content";

export const metadata: Metadata = {
  title: "Whole-House Water Filtration Tampa Bay",
  description:
    "Clean water at every faucet. Jusi H2O installs whole-house filtration systems that remove chlorine, sediment, and contaminants for Tampa Bay homes. Free in-home water test included.",
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
