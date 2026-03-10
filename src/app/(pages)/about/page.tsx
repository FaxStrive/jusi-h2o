import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { AboutContent } from "@/components/sections/about-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Jusi H2O has 15+ years of experience providing professional water testing and filtration for Tampa Bay homeowners. Meet our team, mission, and values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="Better Water for Every Home"
        subtitle="Born from a commitment to residential home solutions, Jusi H2O delivers honest water testing and customized filtration for Tampa Bay families."
        backgroundImage="/images/mom-daughter-water.jpeg"
        overlayOpacity={0.75}
        imagePosition="center 85%"
      />
      <AboutContent />
      <CTASection />
    </>
  );
}
