"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "We had no idea how hard our water actually was until Jusi H2O came out and tested it. They walked us through the entire process, showed us the results right there, and explained our options without any pressure.",
    name: "Sara L.",
    location: "Tampa, FL",
  },
  {
    quote:
      "I've dealt with a lot of home service companies and Jusi H2O was one of the most professional experiences I've had. They showed up on time, tested our water, and installed the system within a couple days.",
    name: "Ray and Alissa",
    location: "Sarasota, FL",
  },
  {
    quote:
      "What I appreciated most was the honesty. They didn't try to sell us something we didn't need. They tested the water, explained the results, and helped us choose the right system for our home.",
    name: "Lily S.",
    location: "Bradenton, FL",
  },
  {
    quote:
      "From the free water test to the installation, everything was smooth and professional. You can tell they really care about educating homeowners instead of just making a sale.",
    name: "Daniel R.",
    location: "Riverview, FL",
  },
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

export function TestimonialsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-accent-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-primary-50/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Customer Reviews
            </motion.p>
            <motion.h2
              className="font-heading text-display-sm text-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Trusted by 2,500+ Tampa Bay Families
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full">
              <StarRating />
              <span className="font-bold text-accent-dark">5.0</span>
            </div>
            <span className="text-text-secondary text-sm">on Google</span>
          </motion.div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="relative p-8 bg-white rounded-brand-xl border border-border-light hover:shadow-brand-lg hover:border-primary-100 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-primary-100 leading-none select-none">
                &ldquo;
              </div>

              <StarRating />
              <p className="mt-4 mb-6 text-text-secondary leading-relaxed relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-heading font-bold text-text">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-tertiary">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to full page */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Read All Reviews
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
