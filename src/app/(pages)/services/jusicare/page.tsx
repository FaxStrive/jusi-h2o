import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { JusiCareContent } from "./content";

export const metadata: Metadata = {
  title: "JusiCare+ Annual Water System Protection Plan",
  description:
    "JusiCare+ annual protection plan: quarterly salt refills, scheduled filter replacements, system sanitation, priority service, and lifetime warranty. $199/year.",
  alternates: { canonical: "/services/jusicare" },
};

export default function JusiCarePage() {
  return (
    <>
      <PageHero
        badge="JusiCare+"
        title="Protect Your Water. Protect Your Home."
        subtitle="Our $199 annual protection plan keeps your system performing like new with professional maintenance and lifetime coverage."
        backgroundImage="/images/technician-homeowner.jpeg"
        overlayOpacity={0.75}
      />
      <JusiCareContent />
      <CTASection />
    </>
  );
}
