import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Jusi H2O serves Tampa Bay including Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties. Check coverage.",
};

export default function ServiceAreaPage() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="font-heading text-display-sm text-center">Service Area</h1>
    </section>
  );
}
