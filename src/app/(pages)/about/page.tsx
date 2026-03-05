import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { AboutContent } from "@/components/sections/about-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jusi H2O - 15+ years of professional water testing and filtration solutions for Tampa Bay homeowners. Our story, mission, and values.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="Better Water for Every Home"
        subtitle="Born from a commitment to residential home solutions, Jusi H2O delivers honest water testing and customized filtration for Tampa Bay families."
        gradient="from-primary-700 via-primary-800 to-secondary-900"
      />
      <AboutContent />
      <CTASection />
    </>
  );
}
