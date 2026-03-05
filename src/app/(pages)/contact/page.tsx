import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jusi H2O for a free in-home water test. Call (770) 875-9932 or email support@jusih2o.com. Tampa Bay.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Schedule Your Free Water Test"
        subtitle="Fill out the form below or give us a call. We respond same-day."
        gradient="from-primary-900 via-primary-800 to-primary-700"
      />
      <ContactContent />
    </>
  );
}
