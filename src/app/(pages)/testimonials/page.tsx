import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what Tampa Bay homeowners say about Jusi H2O water filtration. 2,500+ five-star reviews.",
};

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="font-heading text-display-sm text-center">Testimonials</h1>
    </section>
  );
}
