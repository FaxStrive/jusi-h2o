import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WaterFiltrationContent } from "./content";

export const metadata: Metadata = {
  title: "Whole-House Water Filtration Installation Tampa Bay",
  description:
    "Get clean, filtered water at every faucet with a whole-house water filtration system from Jusi H2O. We remove chlorine, sediment, and contaminants for Tampa Bay homes. Free water test included.",
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
