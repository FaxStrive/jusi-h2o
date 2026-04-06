import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceAreaContent } from "@/components/sections/service-area-content";
import { CTASection } from "@/components/sections/cta-section";
import { InlineCTA } from "@/components/ui/inline-cta";

export const metadata: Metadata = {
  title: "Water Treatment Service Areas - Tampa Bay FL",
  description: "Jusi H2O serves a 50-mile radius across Tampa Bay: Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties. Same-day response. Call (813) 303-0515.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        badge="Coverage Area"
        title="Where We Serve"
        subtitle="Professional water testing and filtration services across Tampa Bay and surrounding communities."
        backgroundImage="/images/ocean-aerial.jpeg"
        overlayOpacity={0.75}
      />
      <ServiceAreaContent />
      <InlineCTA variant="button" text="Check If We Serve Your Area" trustLine="Covering 5 counties across Tampa Bay." />
      <CTASection />
    </>
  );
}
