import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { AboutContent } from "@/components/sections/about-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us - Tampa Bay Water Filtration Experts",
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
      <section className="py-12 px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl font-bold text-text mb-4">Learn More About Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/services" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Our Services</Link>
          <Link href="/before-after" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Before & After Results</Link>
          <Link href="/services/water-testing" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Free Water Testing</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
