"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "whole-house",
    title: "Whole House Filtration",
    description:
      "Our whole-house filtration systems treat every drop of water that enters your home. From the kitchen sink to the shower, every faucet delivers clean, filtered water. These systems remove sediment, chlorine, and other common contaminants, protecting your plumbing, appliances, and family.",
    benefits: [
      "Filters water at every faucet and shower",
      "Protects appliances and plumbing from buildup",
      "Removes chlorine, sediment, and contaminants",
      "Low maintenance with long-lasting filters",
    ],
    image: "https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "reverse-osmosis",
    title: "Reverse Osmosis Systems",
    description:
      "Our reverse osmosis (RO) systems provide the highest level of drinking water purification available for your home. Using multiple filtration stages, RO removes up to 99% of dissolved contaminants including lead, arsenic, fluoride, and more, delivering pure, great-tasting water right from your tap.",
    benefits: [
      "Removes up to 99% of contaminants",
      "Crystal clear, great-tasting drinking water",
      "Multi-stage filtration process",
      "NSF-58 certified systems",
    ],
    image: "https://images.pexels.com/photos/4108727/pexels-photo-4108727.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "water-softeners",
    title: "Water Softeners",
    description:
      "Hard water is one of the most common issues in Tampa Bay. Our water softening systems eliminate calcium and magnesium minerals that cause scale buildup, spots on fixtures, dry skin, and reduced appliance lifespan. Enjoy softer water, cleaner dishes, and longer-lasting appliances.",
    benefits: [
      "Eliminates hard water scale and buildup",
      "Softer skin and hair after bathing",
      "Cleaner dishes and brighter laundry",
      "Extends appliance lifespan",
    ],
    image: "https://images.pexels.com/photos/8374311/pexels-photo-8374311.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "water-testing",
    title: "Professional Water Testing",
    description:
      "Our free in-home water test is the first step to understanding your water. Our trained technicians test for hardness, chlorine, pH, iron, TDS, and other common contaminants. We explain the results in simple terms and help you understand exactly what is in your water, with no obligation.",
    benefits: [
      "Free, no-obligation testing",
      "Tests for 10+ contaminants",
      "Results explained in plain language",
      "Same-day custom recommendations",
    ],
    image: "https://images.pexels.com/photos/247759/pexels-photo-247759.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "commercial",
    title: "Commercial Water Treatment",
    description:
      "We provide water treatment solutions for businesses, restaurants, medical facilities, and commercial properties. From high-capacity filtration systems to specialized treatment for food service, our commercial solutions are designed to meet the unique demands of your operation.",
    benefits: [
      "High-capacity commercial systems",
      "Restaurant and food service solutions",
      "Medical-grade water purification",
      "Ongoing maintenance plans available",
    ],
    image: "https://images.pexels.com/photos/3665354/pexels-photo-3665354.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "well-water",
    title: "Well Water Treatment",
    description:
      "Well water presents unique challenges including bacteria, iron, sulfur, and other naturally occurring contaminants. Our well water treatment systems are specifically designed to address these issues, providing safe, clean water for your entire household.",
    benefits: [
      "Bacteria and coliform treatment",
      "Iron and sulfur removal",
      "pH balancing systems",
      "UV disinfection options",
    ],
    image: "https://images.pexels.com/photos/5177211/pexels-photo-5177211.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "jusicare",
    title: "JusiCare+ Maintenance Program",
    description:
      "Our JusiCare+ program provides ongoing support to keep your water system running at peak performance. From maintenance reminders and filter replacements to periodic system check-ins, we ensure your investment continues to deliver clean water for years to come.",
    benefits: [
      "Regular maintenance reminders",
      "Filter replacement notifications",
      "Periodic system check-ins",
      "Priority service scheduling",
    ],
    image: "https://images.pexels.com/photos/5082870/pexels-photo-5082870.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function ServicesContent() {
  return (
    <section className="py-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={service.id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:[direction:rtl]"
      }`}
    >
      {/* Image */}
      <motion.div
        className="relative lg:[direction:ltr]"
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
        </div>
        {/* Decorative accent */}
        <div className={`absolute -z-10 ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"} w-full h-full rounded-brand-xl bg-primary-100/50`} />
      </motion.div>

      {/* Content */}
      <motion.div
        className="lg:[direction:ltr]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
          {service.title}
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="space-y-3 mb-8">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-text-secondary text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
        >
          Get a Free Quote
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
