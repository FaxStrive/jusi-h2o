import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pillars, getPillar, type Pillar } from "@/lib/pillars";

const SITE = "https://jusih2o.com";
const ORG_ID = `${SITE}/#organization`;
const PERSON_ID = `${SITE}/#marquis-pendergrass`;
const AUTHOR_NAME = "Marquis Pendergrass";
const AUTHOR_ROLE = "Founder, Jusi H2O";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const pillar = getPillar(params.slug);
  if (!pillar) return { title: "Not Found" };
  return {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    alternates: { canonical: `${SITE}/water-treatment/${pillar.slug}` },
    openGraph: {
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      url: `${SITE}/water-treatment/${pillar.slug}`,
      type: "article",
      images: [
        {
          url: pillar.heroImage,
          width: 1200,
          height: 630,
          alt: pillar.title,
        },
      ],
    },
  };
}

// Tiny inline-markdown-link parser used for the [text](/path) format used in
// pillar paragraph text. Not a full markdown engine, just enough to render
// inline links inside paragraphs and table cells.
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    if (href.startsWith("/")) {
      parts.push(
        <Link key={`l-${key++}`} href={href} className="text-primary-700 underline hover:text-primary-800">
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={`a-${key++}`} href={href} target="_blank" rel="noopener noreferrer" className="text-primary-700 underline hover:text-primary-800">
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function PillarBody({ pillar }: { pillar: Pillar }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg prose-headings:font-bold">
      <p className="text-sm text-gray-500">Last updated: <time dateTime={pillar.lastUpdated}>{pillar.lastUpdated}</time></p>

      <p data-bluf className="text-lg leading-relaxed font-medium text-gray-800 border-l-4 border-primary-600 pl-4 not-italic">
        {renderInline(pillar.bluf)}
      </p>

      <p>
        <Link href="/contact" className="inline-block bg-primary-600 text-white px-5 py-2.5 rounded-xl font-semibold no-underline hover:bg-primary-700 transition-colors">
          Get a Free In-Home Water Test
        </Link>
      </p>

      {pillar.sections.map((section, i) => (
        <section key={i}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p, j) => (
            <p key={j}>{renderInline(p)}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          )}
          {section.table && (
            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <caption className="text-left text-xs text-gray-500 mb-2 caption-top">{section.table.caption}</caption>
                <thead className="bg-primary-50">
                  <tr>
                    {section.table.headers.map((h, k) => (
                      <th key={k} className="text-left px-4 py-2 font-semibold text-gray-900 border-b border-gray-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, r) => (
                    <tr key={r} className="border-b border-gray-100">
                      {row.map((cell, c) => (
                        <td key={c} className="px-4 py-2 text-gray-700 align-top">{renderInline(cell)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      {/* Decision boundary section */}
      <section className="not-prose my-10 rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-0">{pillar.professionalSection.heading}</h2>
        <ul className="space-y-2 text-gray-800">
          {pillar.professionalSection.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-amber-700 flex-shrink-0">•</span>
              <span>{renderInline(b)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 mb-0">
          <Link href="/contact" className="text-primary-700 underline">Schedule a free in-home water test</Link> or call <a href="tel:+18133030515" className="text-primary-700 underline">(813) 303-0515</a>.
        </p>
      </section>

      {/* FAQs */}
      <h2>Frequently Asked Questions</h2>
      <div className="not-prose space-y-4">
        {pillar.faqs.map((faq, i) => (
          <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary-400 transition-all">
            <summary className="cursor-pointer px-6 py-4 font-bold text-gray-900 hover:bg-gray-50 transition-colors">{faq.q}</summary>
            <div className="px-6 pb-4 pt-2 text-gray-700 leading-relaxed border-t border-gray-200">{renderInline(faq.a)}</div>
          </details>
        ))}
      </div>

      {/* Author block */}
      <aside className="not-prose my-10 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            MP
          </div>
          <div>
            <h3 className="font-bold text-base m-0">{AUTHOR_NAME}</h3>
            <p className="text-sm text-primary-700 m-0 mt-0.5 font-semibold">{AUTHOR_ROLE}</p>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed m-0">
              Marquis Pendergrass founded Jusi H2O in 2011 and has spent the last decade-plus installing water treatment systems across the Tampa Bay region. Pillar content is written from real installations and reviewed for technical accuracy before publication.
            </p>
          </div>
        </div>
      </aside>

      <section className="not-prose my-10 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-600 p-8 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 mt-0">Ready to fix your Tampa Bay water?</h2>
        <p className="text-white/90 mb-5">
          Free in-home water test. No high-pressure sales. A written quote sized to your tested water.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-block bg-white text-primary-700 px-6 py-3 rounded-xl font-bold no-underline hover:bg-white/90 transition-all">
            Schedule a Free Water Test
          </Link>
          <a href="tel:+18133030515" className="inline-block border border-white/30 text-white px-6 py-3 rounded-xl font-semibold no-underline hover:bg-white/10 transition-all">
            (813) 303-0515
          </a>
        </div>
      </section>
    </article>
  );
}

export default function PillarPage({
  params,
}: {
  params: { slug: string };
}) {
  const pillar = getPillar(params.slug);
  if (!pillar) notFound();

  const url = `${SITE}/water-treatment/${pillar.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Water Treatment", item: `${SITE}/water-treatment` },
      { "@type": "ListItem", position: 3, name: pillar.title, item: url },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: pillar.title,
    description: pillar.metaDescription,
    image: `${SITE}${pillar.heroImage}`,
    datePublished: "2026-05-14",
    dateModified: pillar.lastUpdated,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pillar.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-primary-800 to-primary-600">
          <div className="max-w-4xl mx-auto text-white">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/water-treatment" className="hover:text-white">Water Treatment</Link>
              <span>/</span>
              <span className="text-white">{pillar.title}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{pillar.title}</h1>
            <p className="text-white/80 mt-3">By {AUTHOR_NAME}, {AUTHOR_ROLE}</p>
          </div>
        </section>

        <PillarBody pillar={pillar} />
      </main>
    </>
  );
}
