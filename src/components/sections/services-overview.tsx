"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Whole House Filtration",
    description: "Complete home water treatment that filters every faucet, shower, and appliance in your home.",
    image: "/images/shower-hands.jpeg",
    href: "/services#whole-house",
  },
  {
    title: "Reverse Osmosis",
    description: "Advanced drinking water purification that removes up to 99% of contaminants.",
    image: "/images/filling-glass-tap.jpeg",
    href: "/services#reverse-osmosis",
  },
  {
    title: "Water Softeners",
    description: "Eliminate hard water to protect your plumbing, appliances, and skin.",
    image: "/images/woman-at-sink.jpeg",
    href: "/services#water-softeners",
  },
  {
    title: "Water Testing",
    description: "Free professional testing to identify exactly what is in your water.",
    image: "/images/water-droplet-lab.jpeg",
    href: "/services#water-testing",
  },
];

export function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-surface-secondary via-white to-surface-secondary">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 bg-gradient-to-r from-primary-50/60 to-transparent rounded-full blur-3xl" />
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
              Our Solutions
            </motion.p>
            <motion.h2
              className="font-heading text-display-sm text-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Water Filtration Systems Built for Your Home
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link href={service.href} className="group block">
                <div className="relative overflow-hidden rounded-brand-xl bg-white border border-border-light hover:border-primary-200 hover:shadow-brand-lg transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-xl text-text group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
