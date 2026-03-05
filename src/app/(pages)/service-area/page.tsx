import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceAreaContent } from "@/components/sections/service-area-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Jusi H2O serves Tampa Bay including Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties within 50 miles.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        badge="Coverage Area"
        title="Where We Serve"
        subtitle="Professional water testing and filtration services across Tampa Bay and surrounding communities."
        gradient="from-primary-800 via-primary-700 to-secondary-800"
      />
      <ServiceAreaContent />
      <CTASection />
    </>
  );
}
