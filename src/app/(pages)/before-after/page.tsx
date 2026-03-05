import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { BeforeAfterContent } from "@/components/sections/before-after-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "See real water filtration results from Jusi H2O customers across Tampa Bay. Case studies and visual proof.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        badge="Real Results"
        title="See the Difference Clean Water Makes"
        subtitle="Real case studies from Tampa Bay homeowners who trusted Jusi H2O with their water quality."
        gradient="from-secondary-800 via-primary-800 to-primary-900"
      />
      <BeforeAfterContent />
      <CTASection />
    </>
  );
}
