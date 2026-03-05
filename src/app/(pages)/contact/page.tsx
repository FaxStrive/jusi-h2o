import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jusi H2O for a free in-home water test. Call (770) 875-9932 or email support@jusih2o.com.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="font-heading text-display-sm text-center">Contact Us</h1>
    </section>
  );
}
