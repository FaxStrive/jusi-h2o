import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { BeforeAfterContent } from "@/components/sections/before-after-content";
import { CTASection } from "@/components/sections/cta-section";
import { InlineCTA } from "@/components/ui/inline-cta";

export const metadata: Metadata = {
  title: "Before & After Water Filtration Results Tampa Bay",
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
      <InlineCTA variant="banner" text="Want Results Like These?" message="Book your free water test and start your transformation." />
      <section className="py-12 px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl font-bold text-text mb-4">Explore Our Solutions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/services/water-softeners" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Water Softeners</Link>
          <Link href="/services/water-filtration" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Water Filtration</Link>
          <Link href="/testimonials" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Customer Reviews</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
