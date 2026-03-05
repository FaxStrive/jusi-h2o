import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsContent } from "@/components/sections/testimonials-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what Tampa Bay homeowners say about Jusi H2O water filtration. 2,500+ five-star reviews.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        badge="Customer Reviews"
        title="What Our Customers Say"
        subtitle="2,500+ five-star Google reviews from homeowners across Tampa Bay who trust Jusi H2O."
      />
      <TestimonialsContent />
      <CTASection />
    </>
  );
}
