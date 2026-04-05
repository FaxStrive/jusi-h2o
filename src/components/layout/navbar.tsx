"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/services/water-softeners", label: "Water Softeners" },
  { href: "/services/water-filtration", label: "Whole House Filtration" },
  { href: "/services/reverse-osmosis", label: "Reverse Osmosis" },
  { href: "/services/water-heater-installation", label: "Water Heater Installation" },
  { href: "/services/leak-repair", label: "Leak Repair" },
  { href: "/services/commercial-plumbing", label: "Commercial Plumbing" },
  { href: "/services/water-testing", label: "Water Testing" },
  { href: "/services/well-water", label: "Well Water Treatment" },
  { href: "/services/jusicare", label: "JusiCare+" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/service-area", label: "Service Area" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { label: "Blog", href: "/blog" },
  { label: "(pages)/blog", href: "/(pages)/blog" },
  { label: "Service Areas", href: "/service-areas" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // Build the full mobile nav list with Services inserted at position 2
  const mobileLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services", isDropdown: true },
    { href: "/about", label: "About" },
    { href: "/before-after", label: "Before & After" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/service-area", label: "Service Area" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        className={cn(
          "w-full transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-brand-sm"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Jusi H2O"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
              priority
            />
            <span
              className={cn(
                "font-heading font-bold text-xl tracking-tight transition-colors duration-300",
                isScrolled || isOpen ? "text-primary" : "text-white"
              )}
            >
              Jusi H<sub className="text-secondary">2</sub>O
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                isScrolled
                  ? "text-text-secondary hover:text-primary hover:bg-primary-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1",
                  isScrolled
                    ? "text-text-secondary hover:text-primary hover:bg-primary-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                Services
                <svg
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-brand-lg border border-border-light overflow-hidden"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="py-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-primary-50 transition-colors duration-150"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  isScrolled
                    ? "text-text-secondary hover:text-primary hover:bg-primary-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "ml-3 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-dark shadow-brand-sm"
                  : "bg-white/15 text-white backdrop-blur-sm border border-white/20 hover:bg-white/25"
              )}
            >
              Free Water Test
            </Link>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link
              href="/contact"
              className={cn(
                "hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-dark shadow-brand-sm"
                  : "bg-white/15 text-white backdrop-blur-sm border border-white/20 hover:bg-white/25"
              )}
            >
              Free Water Test
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                className={cn(
                  "block h-[2px] w-6 rounded-full transition-colors duration-300",
                  isScrolled || isOpen ? "bg-primary-700" : "bg-white"
                )}
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.span
                className={cn(
                  "block h-[2px] w-6 rounded-full transition-colors duration-300",
                  isScrolled || isOpen ? "bg-primary-700" : "bg-white"
                )}
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={cn(
                  "block h-[2px] w-6 rounded-full transition-colors duration-300",
                  isScrolled || isOpen ? "bg-primary-700" : "bg-white"
                )}
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white overflow-auto lg:hidden"
            style={{ height: "100vh" }}
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-60" />
              <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary-50 opacity-40" />
            </div>

            <div className="relative h-full flex flex-col justify-center px-8 md:px-16 pt-20">
              <nav className="space-y-1">
                {mobileLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {link.isDropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="group flex items-center py-3 w-full"
                        >
                          <span className="text-sm font-body text-text-tertiary mr-4 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-heading text-2xl md:text-4xl font-bold text-text transition-colors duration-300 group-hover:text-primary">
                            Services
                          </span>
                          <svg
                            className={cn(
                              "w-5 h-5 ml-3 text-text-tertiary transition-transform duration-300",
                              mobileServicesOpen && "rotate-180"
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              className="pl-12 space-y-0.5 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                              {serviceLinks.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 text-base font-medium text-text-secondary hover:text-primary transition-colors"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center py-3"
                      >
                        <span className="text-sm font-body text-text-tertiary mr-4 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-2xl md:text-4xl font-bold text-text transition-colors duration-300 group-hover:text-primary">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 text-text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1">Phone</p>
                  <a href="tel:+18133030515" className="text-lg font-semibold text-text hover:text-primary transition-colors">
                    (813) 303-0515
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1">Email</p>
                  <a href="mailto:support@jusih2o.com" className="text-lg font-semibold text-text hover:text-primary transition-colors">
                    support@jusih2o.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
