import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-posts";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Water Quality Blog",
  description:
    "Expert articles on Tampa Bay water quality, hard water, well water treatment, reverse osmosis, and water testing. Free guides from the Jusi H2O team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Water Quality Blog | Jusi H2O",
    description:
      "Expert guides on Tampa Bay water quality, hard water, and home water treatment from Jusi H2O.",
    url: "https://jusih2o.com/blog",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        badge="Water Knowledge"
        title="Tampa Bay Water Quality Blog"
        subtitle="Expert guides and local insights on water filtration, hard water, well water, and everything in between — written for Tampa Bay homeowners."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                Featured Article
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden border border-border-light hover:shadow-brand-md transition-all duration-300"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-text-tertiary text-sm">
                      {featured.readTime}
                    </span>
                    <span className="text-text-tertiary text-sm">
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read Article
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-xl border border-border-light hover:border-primary/30 hover:shadow-brand-md transition-all duration-300 overflow-hidden"
              >
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-text-tertiary text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-text-tertiary text-xs">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Questions About Your Tampa Bay Water?
          </h2>
          <p className="text-primary-100 mb-8">
            Schedule a free in-home water test and get personalized answers from our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Your Free Water Test
          </Link>
        </div>
      </section>
    </>
  );
}
