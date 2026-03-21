import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact Us - Free Water Test",
  description: "Schedule your free in-home water test with Jusi H2O. Call (725) 235-8278 or email support@jusih2o.com. Same-day response in Tampa Bay.",
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
    </>
  );
}
