import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { CommercialContent } from "./content";

export const metadata: Metadata = {
  title: "Commercial Plumbing & Water Treatment Tampa",
  description:
    "Commercial water treatment and plumbing services in Tampa Bay. Restaurants, offices, medical facilities. High-capacity systems with ongoing maintenance.",
  alternates: { canonical: "/services/commercial-plumbing" },
};

export default function CommercialPlumbingPage() {
  return (
    <>
      <PageHero
        badge="Commercial Services"
        title="Water Solutions for Business"
        subtitle="High-capacity water treatment and plumbing services built for the demands of commercial operations."
        backgroundImage="/images/plumber-pipes.jpeg"
        overlayOpacity={0.75}
      />
      <CommercialContent />
      <CTASection />
    </>
  );
}
