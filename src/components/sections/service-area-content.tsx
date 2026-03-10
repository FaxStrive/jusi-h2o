"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const counties = [
  {
    name: "Hillsborough County",
    isPrimary: true,
    cities: [
      "Tampa", "Brandon", "Plant City", "Riverview", "Temple Terrace",
      "Lutz", "Valrico", "Seffner", "Lithia", "Thonotosassa",
    ],
  },
  {
    name: "Pinellas County",
    cities: [
      "St. Petersburg", "Clearwater", "Largo", "Dunedin", "Palm Harbor",
      "Tarpon Springs", "Safety Harbor", "Seminole", "Pinellas Park",
    ],
  },
  {
    name: "Manatee County",
    cities: [
      "Bradenton", "Palmetto", "Lakewood Ranch", "Parrish",
      "Ellenton", "Anna Maria",
    ],
  },
  {
    name: "Sarasota County",
    cities: [
      "Sarasota", "Venice", "North Port", "Englewood", "Osprey",
      "Siesta Key", "Nokomis",
    ],
  },
  {
    name: "Polk County",
    cities: [
      "Lakeland", "Winter Haven", "Bartow", "Auburndale", "Haines City",
      "Mulberry", "Lake Wales",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function CountyCard({ county }: { county: (typeof counties)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleCities = expanded ? county.cities : county.cities.slice(0, 5);

  return (
    <motion.div
      className="rounded-brand-xl border border-border-light bg-white/80 backdrop-blur-sm p-6 hover:shadow-brand-lg hover:border-primary-200 transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center gap-3 mb-1">
        <h3 className="font-heading text-xl font-bold text-text">
          {county.name}
        </h3>
        {county.isPrimary && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-primary px-2.5 py-0.5 rounded-full">
            Primary
          </span>
        )}
      </div>
      <p className="text-sm text-text-secondary mb-4">
        <span className="text-lg font-bold text-primary">{county.cities.length}+</span> cities served
      </p>

      <div className="flex flex-wrap gap-2">
        {visibleCities.map((city) => (
          <span
            key={city}
            className="text-xs bg-surface-secondary text-text-secondary px-2.5 py-1 rounded-full border border-border-light"
          >
            {city}
          </span>
        ))}
      </div>

      {county.cities.length > 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          {expanded ? "Show less" : `Show all ${county.cities.length} cities`}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </motion.div>
  );
}

export function ServiceAreaContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 30% 35%, rgba(27, 107, 147, 0.04) 0%, transparent 55%),
              radial-gradient(ellipse 55% 55% at 80% 60%, rgba(46, 139, 87, 0.04) 0%, transparent 50%),
              linear-gradient(180deg, transparent 0%, var(--color-surface) 45%, transparent 100%)
            `,
          }}
        />
        <motion.div
          className="absolute top-[30%] right-[5%] w-[220px] h-[220px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(46, 139, 87, 0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ y: [0, -12, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Key facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              value: "50-Mile",
              label: "Service Radius",
              icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
            },
            {
              value: "Same Day",
              label: "Response Time",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              value: "5 Counties",
              label: "Full Coverage",
              icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          ].map((fact, i) => (
            <motion.div
              key={fact.label}
              className="text-center p-8 bg-white rounded-brand-xl border border-border-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={fact.icon}
                  />
                </svg>
              </div>
              <div className="font-heading text-3xl font-bold text-primary mb-1">
                {fact.value}
              </div>
              <div className="text-text-tertiary text-sm">{fact.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Counties Header */}
        <motion.h2
          className="font-heading text-display-sm text-text text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          Counties We Serve
        </motion.h2>
        <motion.p
          className="text-text-secondary text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          Serving the greater Tampa Bay region with premium water testing and
          filtration services.
        </motion.p>

        {/* Counties Grid - PureAgua card style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {counties.map((county) => (
            <CountyCard key={county.name} county={county} />
          ))}
        </motion.div>

        {/* Not in area? */}
        <motion.div
          className="text-center p-8 bg-primary-50 rounded-brand-xl border border-primary-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="font-heading text-xl font-bold text-text mb-2">
            Not sure if we serve your area?
          </h3>
          <p className="text-text-secondary mb-4">
            Give us a call and we will let you know if we can help.
          </p>
          <a
            href="tel:8133030515"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Call (813) 303-0515
          </a>
        </motion.div>
      </div>
    </section>
  );
}
