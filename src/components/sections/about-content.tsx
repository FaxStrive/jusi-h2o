"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Integrity",
    description: "We believe homeowners deserve honest information about their water. We focus on education and transparency so customers can make the best decision for their home.",
  },
  {
    title: "Quality",
    description: "From testing to installation, we are committed to delivering reliable systems, professional service, and long-term performance homeowners can depend on.",
  },
  {
    title: "Customer First",
    description: "Our customers are more than transactions. We aim to build lasting relationships by providing support, service, and solutions that truly improve everyday life.",
  },
  {
    title: "Innovation",
    description: "We stay committed to modern water treatment technology and smarter residential solutions that help families protect their homes, appliances, and health.",
  },
  {
    title: "Responsibility",
    description: "Clean water is essential to life. We take pride in helping communities access safer, better water through dependable filtration and treatment solutions.",
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "10+", label: "Expert Technicians" },
  { value: "2,500+", label: "Five-Star Reviews" },
  { value: "50mi", label: "Service Radius" },
];

const certifications = [
  { name: "NSF-42", description: "Aesthetic effects (taste, odor, chlorine)" },
  { name: "NSF-44", description: "Cation exchange water softeners" },
  { name: "NSF-53", description: "Health effects (lead, cysts)" },
  { name: "NSF-55", description: "UV treatment systems" },
  { name: "NSF-58", description: "Reverse osmosis systems" },
  { name: "NSF-401", description: "Emerging contaminants" },
];

export function AboutContent() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const certsRef = useRef(null);
  const certsInView = useInView(certsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Origin Story */}
      <section ref={storyRef} className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/40 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-brand-xl overflow-hidden">
                <Image
                  src="/images/hands-under-faucet.jpeg"
                  alt="Hands under clean running water from kitchen faucet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">How We Started</p>
              <h2 className="font-heading text-display-sm text-text mb-6">
                From Home Services to Clean Water
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Founded by Marquis Pendergrass, Jusi H2O was created as a natural expansion of our residential home service solutions. While working with homeowners, Marquis consistently saw the impact that poor water quality had on homes, appliances, and families.
                </p>
                <p>
                  This led us to build a company focused on professional water testing and filtration solutions, providing homeowners with water they can trust. Rather than offering one-size-fits-all systems, we take the time to evaluate a homeowner&apos;s water, explain the results clearly, and recommend the best long-term solution.
                </p>
                <p>
                  Backed by real residential service experience and ongoing customer support through our JusiCare+ program, we focus on building lasting relationships while delivering water homeowners can truly trust.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/family-yard-water.jpeg"
            alt="Family enjoying clean water at home"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary-300 mb-4">Our Mission</p>
          <blockquote className="font-heading text-2xl md:text-3xl text-white leading-relaxed">
            Our mission at Jusi H2O is to improve the quality of life for homeowners by delivering reliable water testing, advanced filtration solutions, and honest guidance that helps families protect their homes, health, and everyday living.
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary-50/30 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            >
              What Drives Us
            </motion.p>
            <motion.h2
              className="font-heading text-display-sm text-text"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Our Values
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="p-8 bg-white rounded-brand-xl border border-border-light hover:shadow-brand-lg hover:border-primary-100 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <span className="font-heading font-bold text-primary text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-text mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clear-water-surface.jpeg"
            alt="Crystal clear water surface"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary-900/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-200 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certsRef} className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-accent-50/30 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={certsInView ? { opacity: 1, y: 0 } : {}}
            >
              Certified Quality
            </motion.p>
            <motion.h2
              className="font-heading text-display-sm text-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={certsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Industry Certifications
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={certsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              WQA Certified with systems meeting the highest NSF standards.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="flex items-center gap-4 p-5 bg-white rounded-brand-lg border border-border-light"
                initial={{ opacity: 0, y: 20 }}
                animate={certsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-primary text-sm">{cert.name}</span>
                </div>
                <p className="text-text-secondary text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
