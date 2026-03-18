"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const systems = [
  {
    name: "Water Softener",
    slug: "water-softeners",
    solves: "Hard water (scale, dry skin, appliance damage)",
    coverage: "Whole house",
    maintenanceFreq: "Every 3 months (salt)",
    avgCost: "$800 - $2,500",
    topBenefit: "Protects appliances and plumbing",
    ideal: "Homes with hard water above 7 GPG",
  },
  {
    name: "Whole-House Filter",
    slug: "water-filtration",
    solves: "Chlorine, sediment, VOCs, odor",
    coverage: "Whole house",
    maintenanceFreq: "Every 3-6 months",
    avgCost: "$600 - $2,000",
    topBenefit: "Clean water at every tap and shower",
    ideal: "Municipal water users with taste/odor issues",
  },
  {
    name: "Reverse Osmosis",
    slug: "reverse-osmosis",
    solves: "Lead, arsenic, fluoride, TDS, nitrates",
    coverage: "Drinking water (under-sink)",
    maintenanceFreq: "Every 6-12 months",
    avgCost: "$300 - $1,200",
    topBenefit: "Removes up to 99% of contaminants",
    ideal: "Households wanting the purest drinking water",
  },
  {
    name: "Well Water System",
    slug: "well-water",
    solves: "Iron, sulfur, bacteria, tannins, sediment",
    coverage: "Whole house",
    maintenanceFreq: "Every 6-12 months",
    avgCost: "$1,500 - $4,000+",
    topBenefit: "Comprehensive treatment for private wells",
    ideal: "Homes on private well water in Florida",
  },
  {
    name: "UV Disinfection",
    slug: "water-filtration",
    solves: "Bacteria, viruses, pathogens",
    coverage: "Whole house",
    maintenanceFreq: "Annual (lamp replacement)",
    avgCost: "$400 - $1,000",
    topBenefit: "Chemical-free pathogen elimination",
    ideal: "Well water or immune-compromised households",
  },
];

const columns = [
  { key: "solves", label: "Solves" },
  { key: "coverage", label: "Coverage" },
  { key: "maintenanceFreq", label: "Maintenance" },
  { key: "avgCost", label: "Avg. Cost" },
  { key: "topBenefit", label: "Top Benefit" },
  { key: "ideal", label: "Best For" },
];

export function ServicesComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-primary-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[400px] h-[300px] bg-gradient-to-tr from-secondary-50/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Compare Systems
          </span>
          <h2 className="font-heading text-display-sm text-text max-w-2xl mx-auto">
            Which Water Treatment System Is Right for You?
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Use this guide to understand which system addresses your specific water quality concerns. Not sure? Our free water test tells you exactly what is in your water.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          className="hidden lg:block overflow-hidden rounded-brand-xl border border-border shadow-brand"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-900 text-white">
                <th className="text-left px-6 py-4 font-semibold text-primary-200 uppercase tracking-wider text-xs w-40">
                  System
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="text-left px-4 py-4 font-semibold text-primary-200 uppercase tracking-wider text-xs"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {systems.map((sys, i) => (
                <tr
                  key={sys.name}
                  className={`border-t border-border-light hover:bg-primary-50/40 transition-colors ${
                    i % 2 === 0 ? "bg-white" : "bg-surface-secondary"
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-primary font-heading">
                      {sys.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-text-secondary">{sys.solves}</td>
                  <td className="px-4 py-4 text-text-secondary">{sys.coverage}</td>
                  <td className="px-4 py-4 text-text-secondary">{sys.maintenanceFreq}</td>
                  <td className="px-4 py-4 font-medium text-text">{sys.avgCost}</td>
                  <td className="px-4 py-4 text-text-secondary">{sys.topBenefit}</td>
                  <td className="px-4 py-4 text-text-secondary">{sys.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4">
          {systems.map((sys, i) => (
            <motion.div
              key={sys.name}
              className="bg-white rounded-brand-xl border border-border shadow-brand-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-primary-900 px-5 py-3">
                <span className="font-heading font-bold text-white">{sys.name}</span>
              </div>
              <div className="px-5 py-4 space-y-2">
                {columns.map((col) => (
                  <div key={col.key} className="flex gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-text-tertiary w-28 flex-shrink-0 pt-0.5">
                      {col.label}
                    </span>
                    <span className="text-sm text-text-secondary flex-1">
                      {sys[col.key as keyof typeof sys]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA note */}
        <motion.p
          className="text-center text-text-tertiary text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Prices are estimates and vary based on home size, water conditions, and installation complexity.{" "}
          <a href="/contact" className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors font-medium">
            Get a free exact quote
          </a>{" "}
          after your water test.
        </motion.p>
      </div>
    </section>
  );
}
