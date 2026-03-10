"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/images/dirty-vs-clean-water.jpeg", alt: "Before and after water filtration comparison", category: "before-after" },
  { src: "/images/salt-softener.jpeg", alt: "Water softener salt system installation", category: "installations" },
  { src: "/images/whole-house-filtration.jpeg", alt: "Whole house water filtration system", category: "installations" },
  { src: "/images/ro-filter-system.jpeg", alt: "Reverse osmosis filter system", category: "installations" },
  { src: "/images/water-filter-system.jpeg", alt: "Water filtration equipment", category: "installations" },
  { src: "/images/technician-filter-install.jpeg", alt: "Technician installing filtration system", category: "installations" },
  { src: "/images/water-heater-install.jpeg", alt: "Water heater installation", category: "installations" },
  { src: "/images/plumber-under-sink.jpeg", alt: "Plumber working under sink", category: "installations" },
  { src: "/images/technician-homeowner.jpeg", alt: "Technician consulting with homeowner", category: "service" },
  { src: "/images/technician-arriving.jpeg", alt: "Technician arriving for service call", category: "service" },
  { src: "/images/water-droplet-lab.jpeg", alt: "Water testing in lab", category: "testing" },
  { src: "/images/water-testing.jpeg", alt: "Professional water testing", category: "testing" },
  { src: "/images/filling-glass-tap.jpeg", alt: "Filling glass with clean tap water", category: "results" },
  { src: "/images/filling-glass-faucet.jpeg", alt: "Clean water from kitchen faucet", category: "results" },
  { src: "/images/filling-glass-kitchen.jpeg", alt: "Filling glass in kitchen", category: "results" },
  { src: "/images/kitchen-faucet-running.jpeg", alt: "Kitchen faucet running clean water", category: "results" },
  { src: "/images/ro-faucet-glass.jpeg", alt: "Filling glass at RO faucet", category: "results" },
  { src: "/images/hands-under-faucet.jpeg", alt: "Hands under clean running water", category: "results" },
  { src: "/images/shower-hands.jpeg", alt: "Clean shower water on hands", category: "results" },
  { src: "/images/family-four-water.jpeg", alt: "Family enjoying clean water", category: "families" },
  { src: "/images/family-glasses-cheers.jpeg", alt: "Family holding water glasses", category: "families" },
  { src: "/images/mom-daughter-water.jpeg", alt: "Mother and daughter with water glass", category: "families" },
  { src: "/images/mom-child-washing.jpeg", alt: "Mother and child washing hands", category: "families" },
  { src: "/images/child-drinking-water.jpeg", alt: "Child drinking clean water", category: "families" },
  { src: "/images/happy-family-home.jpeg", alt: "Happy family at home", category: "families" },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "before-after", label: "Before & After" },
  { id: "installations", label: "Installations" },
  { id: "service", label: "Service" },
  { id: "testing", label: "Testing" },
  { id: "results", label: "Results" },
  { id: "families", label: "Families" },
];

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/[0.03] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/[0.05] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-secondary-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Photo Gallery
          </motion.p>
          <motion.h1
            className="font-heading text-display text-white max-w-3xl"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Work in Action
          </motion.h1>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="relative py-section overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(27,107,147,0.03) 0%, transparent 40%, rgba(46,139,87,0.02) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-brand"
                    : "bg-white text-text-secondary border border-border-light hover:border-primary-200 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="group relative aspect-[4/3] rounded-brand-lg overflow-hidden cursor-pointer border border-border-light hover:shadow-brand-lg transition-shadow duration-300"
                  onClick={() => setSelectedImage(galleryImages.indexOf(img))}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full aspect-[4/3] rounded-brand-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            </button>

            {/* Nav arrows */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4l-6 6 6 6" />
                </svg>
              </button>
            )}
            {selectedImage < galleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4l6 6-6 6" />
                </svg>
              </button>
            )}

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <p className="text-white/80 text-sm bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
