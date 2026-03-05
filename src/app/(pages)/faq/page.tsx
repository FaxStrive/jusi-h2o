import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about water filtration, testing, installation, and maintenance. Get answers from Jusi H2O.",
};

export default function FaqPage() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="font-heading text-display-sm text-center">Frequently Asked Questions</h1>
    </section>
  );
}
