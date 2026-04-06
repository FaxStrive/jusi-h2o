import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsContent } from "@/components/sections/testimonials-content";
import { CTASection } from "@/components/sections/cta-section";
import { InlineCTA } from "@/components/ui/inline-cta";

export const metadata: Metadata = {
  title: "Customer Reviews - 2,500+ Five-Star Testimonials",
  description: "Read 2,500+ five-star Google reviews from Tampa Bay homeowners who trust Jusi H2O for water filtration, softening, and treatment services.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        badge="Customer Reviews"
        title="What Our Customers Say"
        subtitle="2,500+ five-star Google reviews from homeowners across Tampa Bay who trust Jusi H2O."
        backgroundImage="/images/happy-family-home.jpeg"
        overlayOpacity={0.8}
      />
      <TestimonialsContent />
      <InlineCTA variant="banner" text="Join Thousands of Happy Customers" message="Schedule your free water test and see why Tampa Bay trusts Jusi H2O." />
      <section className="py-12 px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl font-bold text-text mb-4">See Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/before-after" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Before & After</Link>
          <Link href="/services" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Our Services</Link>
          <Link href="/contact" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Get Started</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
