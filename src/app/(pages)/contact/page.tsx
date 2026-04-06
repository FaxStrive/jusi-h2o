import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact Us - Schedule Your Free Water Test Today",
  description: "Schedule your free in-home water test with Jusi H2O in Tampa Bay. Call (813) 303-0515 or email support@jusih2o.com. Same-day response across 5 counties.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Schedule Your Free Water Test"
        subtitle="Fill out the form below or give us a call. We respond same-day."
        backgroundImage="/images/mom-child-washing.jpeg"
        overlayOpacity={0.78}
      />
      <ContactContent />
      <section className="py-12 px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl font-bold text-text mb-4">While You Wait, Explore</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/services" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Our Services</Link>
          <Link href="/faq" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">FAQ</Link>
          <Link href="/service-area" className="text-sm text-primary hover:underline font-medium py-2 px-3 rounded-lg bg-primary-50/50 text-center">Service Areas</Link>
        </div>
      </section>
    </>
  );
}
