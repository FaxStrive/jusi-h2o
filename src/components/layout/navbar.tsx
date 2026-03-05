"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/before-after", label: "Before & After" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/service-area", label: "Service Area" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
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

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-dark shadow-brand-sm"
                  : "bg-white/15 text-white backdrop-blur-sm border border-white/20 hover:bg-white/25"
              )}
            >
              Free Water Test
            </Link>

            {/* Hamburger Button */}
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

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-60" />
              <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary-50 opacity-40" />
            </div>

            <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <nav className="space-y-1">
                {navLinks.map((link, i) => (
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
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center py-3 md:py-4"
                    >
                      <span className="text-sm font-body text-text-tertiary mr-4 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-text transition-colors duration-300 group-hover:text-primary">
                        {link.label}
                      </span>
                      <motion.span
                        className="ml-4 h-[2px] bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: 48 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Menu Footer */}
              <motion.div
                className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 text-text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:7708759932"
                    className="text-lg font-semibold text-text hover:text-primary transition-colors"
                  >
                    (770) 875-9932
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:support@jusih2o.com"
                    className="text-lg font-semibold text-text hover:text-primary transition-colors"
                  >
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
