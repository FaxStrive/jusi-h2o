"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { InlineCTA } from "@/components/ui/inline-cta";

const testimonials = [
  {
    quote: "We had no idea how hard our water actually was until Jusi H2O came out and tested it. They walked us through the entire process, showed us the results right there, and explained our options without any pressure. The installation was quick and our water already feels noticeably better.",
    name: "Sara L.",
    location: "Tampa, FL",
  },
  {
    quote: "I've dealt with a lot of home service companies and Jusi H2O was one of the most professional experiences I've had. They showed up on time, tested our water, and installed the system within a couple days. Everything was clean, organized, and done right.",
    name: "Ray and Alissa",
    location: "Sarasota, FL",
  },
  {
    quote: "What I appreciated most was the honesty. They didn't try to sell us something we didn't need. They tested the water, explained the results, and helped us choose the right system for our home.",
    name: "Lily S.",
    location: "Bradenton, FL",
  },
  {
    quote: "From the free water test to the installation, everything was smooth and professional. You can tell they really care about educating homeowners instead of just making a sale.",
    name: "Daniel R.",
    location: "Riverview, FL",
  },
];

const awards = [
  "Locally trusted home water treatment provider serving Tampa Bay and surrounding communities",
  "Trusted residential service provider through the Jusi family of home service companies",
  "Committed to delivering reliable water testing and filtration solutions homeowners can depend on",
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const awardsRef = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Google Rating Banner */}
      <section className="py-12 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-5xl font-heading font-bold text-primary">5.0</div>
              <div>
                <StarRating />
                <p className="text-text-tertiary text-sm mt-1">Google Rating</p>
              </div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center md:text-left">
              <div className="font-heading text-3xl font-bold text-text">2,500+</div>
              <p className="text-text-tertiary text-sm">Verified Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={ref} className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-accent-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-primary-50/30 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="relative p-8 md:p-10 bg-white rounded-brand-xl border border-border-light hover:shadow-brand-lg hover:border-primary-100 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute top-6 right-8 text-7xl font-serif text-primary-100 leading-none select-none">&ldquo;</div>
                <StarRating />
                <p className="mt-5 mb-6 text-text-secondary leading-relaxed text-lg relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="font-heading font-bold text-primary text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-text">{t.name}</p>
                    <p className="text-sm text-text-tertiary">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA variant="button" text="Experience the Jusi H2O Difference" trustLine="Free water test, no pressure, no obligation." />

      {/* Trust Image Banner */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
            <Image
              src="/images/family-four-water.jpeg"
              alt="Happy family enjoying clean water"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Content Side */}
          <div className="relative bg-primary-800 px-8 py-16 lg:px-16 lg:py-20 flex items-center">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary-400/10 rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary-300 mb-4">Trusted by Families</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Over 2,500 Tampa Bay Families Trust Jusi H2O
              </h2>
              <p className="text-primary-200 text-lg max-w-lg">
                From first water test to ongoing maintenance, we build lasting relationships with homeowners who want the best water for their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section ref={awardsRef} className="relative py-section overflow-hidden bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.h2
              className="font-heading text-display-sm text-text"
              initial={{ opacity: 0, y: 20 }}
              animate={awardsInView ? { opacity: 1, y: 0 } : {}}
            >
              Recognition & Trust
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-brand-lg border border-border-light text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
