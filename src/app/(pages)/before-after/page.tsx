import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { BeforeAfterContent } from "@/components/sections/before-after-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Before & After Results",
  description:
    "See real before and after water filtration results from Tampa Bay homeowners. Case studies showing hard water, chlorine, and contaminant removal by Jusi H2O.",
  alternates: { canonical: "/before-after" },
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        badge="Real Results"
        title="See the Difference Clean Water Makes"
        subtitle="Real case studies from Tampa Bay homeowners who trusted Jusi H2O with their water quality."
        backgroundImage="/images/dirty-vs-clean-water.jpeg"
        overlayOpacity={0.72}
      />
      <BeforeAfterContent />
      <CTASection />
    </>
  );
}
