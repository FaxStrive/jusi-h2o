import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WaterHeaterContent } from "./content";

export const metadata: Metadata = {
  title: "Water Heater Installation & Replacement Tampa",
  description:
    "Professional water heater installation in Tampa Bay. Tankless and traditional options. Same-day service. Energy-efficient solutions with full warranty.",
  alternates: { canonical: "/services/water-heater-installation" },
};

export default function WaterHeaterPage() {
  return (
    <>
      <PageHero
        badge="Water Heaters"
        title="Hot Water When You Need It"
        subtitle="From tankless upgrades to standard replacements, we install energy-efficient water heaters sized for your home."
        backgroundImage="/images/water-heater-install.jpeg"
        overlayOpacity={0.72}
      />
      <WaterHeaterContent />
      <CTASection />
    </>
  );
}
