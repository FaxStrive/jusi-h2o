import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsContent } from "@/components/sections/testimonials-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials",
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
      <CTASection />
    </>
  );
}
