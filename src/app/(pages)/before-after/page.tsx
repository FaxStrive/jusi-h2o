import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After",
  description: "See real water filtration results from Jusi H2O customers across Tampa Bay. Before and after case studies.",
};

export default function BeforeAfterPage() {
  return (
    <section className="min-h-screen pt-32 px-6">
      <h1 className="font-heading text-display-sm text-center">Before & After</h1>
    </section>
  );
}
