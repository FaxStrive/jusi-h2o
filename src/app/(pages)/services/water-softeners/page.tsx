import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { WaterSoftenersContent } from "./content";

export const metadata: Metadata = {
  title: "Water Softener Installation - Hard Water Tampa",
  description:
    "Professional water softener installation in Tampa Bay. Eliminate hard water scale, protect appliances, and enjoy softer skin and hair. Free in-home water test.",
  alternates: { canonical: "/services/water-softeners" },
};

export default function WaterSoftenersPage() {
  return (
    <>
      <PageHero
        badge="Water Softeners"
        title="Say Goodbye to Hard Water"
        subtitle="Tampa Bay has some of the hardest water in Florida. Our softening systems eliminate scale, protect your home, and improve daily life."
        backgroundImage="/images/shower-hands.jpeg"
        overlayOpacity={0.75}
      />
      <WaterSoftenersContent />
      <CTASection />
    </>
  );
}
