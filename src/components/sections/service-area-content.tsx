"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const counties = [
  {
    name: "Hillsborough County",
    cities: "Tampa, Brandon, Plant City, Riverview, Temple Terrace",
  },
  {
    name: "Pinellas County",
    cities: "St. Petersburg, Clearwater, Largo, Dunedin, Palm Harbor",
  },
  {
    name: "Manatee County",
    cities: "Bradenton, Palmetto, Lakewood Ranch, Parrish",
  },
  {
    name: "Sarasota County",
    cities: "Sarasota, Venice, North Port, Englewood, Osprey",
  },
  {
    name: "Polk County",
    cities: "Lakeland, Winter Haven, Bartow, Auburndale, Haines City",
  },
];

export function ServiceAreaContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-secondary-50/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Key facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { value: "50-Mile", label: "Service Radius", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            { value: "Same Day", label: "Response Time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { value: "5 Counties", label: "Full Coverage", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((fact, i) => (
            <motion.div
              key={fact.label}
              className="text-center p-8 bg-white rounded-brand-xl border border-border-light"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={fact.icon} />
                </svg>
              </div>
              <div className="font-heading text-3xl font-bold text-primary mb-1">{fact.value}</div>
              <div className="text-text-tertiary text-sm">{fact.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Counties Grid */}
        <div className="mb-16">
          <motion.h2
            className="font-heading text-display-sm text-text text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Counties We Serve
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counties.map((county, i) => (
              <motion.div
                key={county.name}
                className="p-6 bg-white rounded-brand-lg border border-border-light hover:shadow-brand hover:border-primary-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <h3 className="font-heading font-bold text-lg text-text">{county.name}</h3>
                </div>
                <p className="text-text-secondary text-sm">{county.cities}</p>
              </motion.div>
            ))}
          </div>
        </div>

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
            href="tel:7708759932"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Call (770) 875-9932
          </a>
        </motion.div>
      </div>
    </section>
  );
}
