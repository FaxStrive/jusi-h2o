"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "Whole Home Hard Water Solution",
    location: "Hillsborough County",
    problem:
      "A homeowner experiencing heavy hard water buildup on fixtures and appliances contacted Jusi H2O for testing. Mineral deposits were causing white crusty buildup on faucets, shower heads, and inside appliances like the dishwasher and water heater.",
    solution:
      "After confirming extremely high hardness levels through our in-home water test, we installed a whole-home filtration and conditioning system designed specifically for the hardness level detected.",
    result:
      "Within weeks the homeowner reported softer water, reduced mineral buildup, and improved appliance performance. Fixtures stayed cleaner, soap lathered better, and the water heater began operating more efficiently.",
    image: "https://images.pexels.com/photos/6032817/pexels-photo-6032817.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: [
      { label: "Hardness Reduction", value: "95%" },
      { label: "Install Time", value: "3 hrs" },
      { label: "Monthly Savings", value: "$40+" },
    ],
  },
  {
    title: "Family Water Quality Upgrade",
    location: "Manatee County",
    problem:
      "A family concerned about chlorine and taste in their tap water requested a consultation. They noticed a strong chemical smell when running the tap and their children were reluctant to drink water from the faucet.",
    solution:
      "Our in-home water test identified elevated chlorine levels and other taste-affecting contaminants. We installed a whole-home filtration system along with a dedicated drinking water solution for the kitchen.",
    result:
      "The family immediately noticed improved water taste and smell. Their children started drinking water from the tap again, and they reported the overall household water quality felt significantly better for cooking, bathing, and daily use.",
    image: "https://images.pexels.com/photos/4835235/pexels-photo-4835235.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: [
      { label: "Chlorine Removed", value: "99%" },
      { label: "Install Time", value: "4 hrs" },
      { label: "Family Satisfaction", value: "5/5" },
    ],
  },
];

export function BeforeAfterContent() {
  return (
    <section className="py-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.title} study={study} index={i} />
        ))}
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute ${index % 2 === 0 ? "top-10 -right-10" : "top-10 -left-10"} w-[400px] h-[400px] bg-gradient-to-br from-primary-50/40 to-transparent rounded-full blur-3xl`} />
      </div>

      <motion.div
        className="relative bg-white rounded-brand-xl border border-border-light overflow-hidden shadow-brand-sm hover:shadow-brand-lg transition-shadow duration-500"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 lg:h-auto">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary">
              {study.location}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-text mb-6">
              {study.title}
            </h3>

            <div className="space-y-5 mb-8">
              <div>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-red-500 mb-2">
                  The Problem
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{study.problem}</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary mb-2">
                  Our Solution
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{study.solution}</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-secondary mb-2">
                  The Result
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{study.result}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {study.stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-surface-secondary rounded-brand">
                  <div className="font-heading font-bold text-xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-tertiary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              Get Similar Results
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
