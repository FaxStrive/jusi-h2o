"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    figure: "85%",
    label: "of U.S. homes have hard water",
    source: "U.S. Geological Survey",
    sourceUrl: "https://www.usgs.gov/special-topics/water-science-school/science/hardness-water",
    description:
      "Tampa Bay area water is among the hardest in Florida, averaging 150-300 mg/L — well above the 60 mg/L threshold for 'hard' water.",
  },
  {
    figure: "99%",
    label: "of contaminants removed by RO",
    source: "NSF International",
    sourceUrl: "https://www.nsf.org/consumer-resources/articles/water-filter-system-types",
    description:
      "NSF-certified reverse osmosis systems remove up to 99% of dissolved solids including lead, arsenic, nitrates, and fluoride.",
  },
  {
    figure: "29%",
    label: "energy savings from tankless heaters",
    source: "U.S. Department of Energy",
    sourceUrl: "https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters",
    description:
      "Homes using less than 41 gallons of hot water daily can achieve 24-34% energy savings with a tankless water heater versus a storage-tank model.",
  },
  {
    figure: "$400+",
    label: "saved annually by softener owners",
    source: "Water Quality Association",
    sourceUrl: "https://www.wqa.org/",
    description:
      "A water softener can extend appliance life by 30-50%, reduce detergent use by up to 75%, and lower water heating costs — saving hundreds per year.",
  },
];

export function WaterStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden bg-surface-secondary">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-primary-50/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-secondary-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Water Facts
          </span>
          <h2 className="font-heading text-display-sm text-text max-w-2xl mx-auto">
            The Numbers Behind Clean Water
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Research-backed data on water quality in the U.S. and the real impact of professional water treatment.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.article
              key={stat.figure}
              className="relative bg-white rounded-brand-xl p-8 shadow-brand border border-border-light overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary-300" />

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="font-heading text-4xl font-black text-primary leading-none">
                    {stat.figure}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text text-lg leading-tight mb-2">
                    {stat.label}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {stat.description}
                  </p>
                  <cite className="not-italic text-xs text-text-tertiary">
                    Source:{" "}
                    <a
                      href={stat.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
                    >
                      {stat.source}
                    </a>
                  </cite>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-text-muted text-xs mt-8 max-w-2xl mx-auto">
          Statistics reflect general national data. Your local water quality may vary. Schedule a free in-home water test to get results specific to your home.
        </p>
      </div>
    </section>
  );
}
