import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Jusi H2O`,
      description: post.excerpt,
      url: `https://jusih2o.com/blog/${post.slug}`,
      type: "article",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Jusi H2O",
      url: "https://jusih2o.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-8 transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-primary-200 text-sm">{post.readTime}</span>
            <span className="text-primary-200 text-sm">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-primary-100 text-lg max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-text-secondary prose-li:mb-2 prose-strong:text-text prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border-light flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* In-Article CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary/10">
            <h3 className="font-heading text-xl font-bold text-text mb-2">
              Have Questions About Your Tampa Bay Water?
            </h3>
            <p className="text-text-secondary mb-6">
              Schedule a free in-home water test. Our team tests for 30+
              parameters and gives you a written recommendation at no charge.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105"
            >
              Get Your Free Water Test
            </Link>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col p-5 border border-border-light rounded-xl hover:border-primary/30 hover:shadow-brand-sm transition-all"
              >
                <span className="text-xs text-text-tertiary uppercase tracking-wider mb-2 flex items-center gap-1">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </span>
                <span className="font-semibold text-text group-hover:text-primary transition-colors line-clamp-2 text-sm">
                  {prevPost.title}
                </span>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col p-5 border border-border-light rounded-xl hover:border-primary/30 hover:shadow-brand-sm transition-all sm:text-right"
              >
                <span className="text-xs text-text-tertiary uppercase tracking-wider mb-2 flex items-center gap-1 sm:justify-end">
                  Next
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
                <span className="font-semibold text-text group-hover:text-primary transition-colors line-clamp-2 text-sm">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
