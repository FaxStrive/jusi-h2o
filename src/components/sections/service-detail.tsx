"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailProps {
  title: string;
  description: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  process: { step: string; description: string }[];
  image: string;
  faqs: { q: string; a: string }[];
}

export function ServiceDetail({
  title,
  description,
  longDescription,
  benefits,
  process,
  image,
  faqs,
}: ServiceDetailProps) {
  const overviewRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <>
      {/* Overview Section */}
      <section ref={overviewRef} className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/40 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                {description}
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-4">
                {longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105"
                >
                  Get a Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+18133030515"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-full hover:bg-primary-100 transition-colors"
                >
                  Call (813) 303-0515
                </a>
              </div>
            </motion.div>
            <motion.div
              ref={imageRef}
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden shadow-brand-lg">
                <motion.div className="absolute inset-0" style={{ y: imageY }}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full rounded-brand-xl bg-primary-100/50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="relative py-section overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-white pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-secondary-50/30 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Key Benefits
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="p-8 bg-white rounded-brand-xl border border-border-light hover:shadow-brand hover:border-primary-200 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-text mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-primary-50/30 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              How It Works
            </span>
            <h2 className="font-heading text-display-sm text-text">
              Our Process
            </h2>
          </motion.div>
          <div className="space-y-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center text-lg">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="font-heading font-bold text-lg text-text mb-1">
                    {step.step}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section ref={faqRef} className="relative py-section overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-surface pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-display-sm text-text">
                Common Questions
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={faq.q}
                  className="group p-6 bg-white rounded-brand-lg border border-border-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <summary className="font-heading font-semibold text-text cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
