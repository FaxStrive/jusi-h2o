"use client";

import Link from "next/link";
import Image from "next/image";


const footerLinks = {
  services: [
    { href: "/services/water-softeners", label: "Water Softeners" },
    { href: "/services/water-filtration", label: "Whole House Filtration" },
    { href: "/services/reverse-osmosis", label: "Reverse Osmosis" },
    { href: "/services/water-heater-installation", label: "Water Heater Installation" },
    { href: "/services/leak-repair", label: "Leak Repair" },
    { href: "/services/jusicare", label: "JusiCare+" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/service-area", label: "Service Area" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-primary-800 text-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-secondary-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-section pb-12">
        {/* Top: CTA Bar */}
        <div className="mb-16 p-8 md:p-12 rounded-brand-xl bg-gradient-to-r from-primary-600 to-primary-500 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary/10" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Ready for Better Water?
              </h3>
              <p className="text-primary-100 text-lg">
                Schedule your free in-home water test today.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Get Your Free Test
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo.png"
                alt="Jusi H2O"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="font-heading font-bold text-xl text-white">
                Jusi H<sub className="text-secondary-300">2</sub>O
              </span>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              Professional water testing and whole-home filtration solutions for
              Tampa Bay homeowners. Trusted by 2,500+ families.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578123391295"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.05 1.592.149v3.294a9 9 0 0 0-.949-.04c-1.35 0-1.872.51-1.872 1.842v2.313h2.636l-.454 3.667H13.73v8.126C19.396 22.906 24 18.003 24 12.073 24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 5.277 3.71 9.69 8.654 10.777l.447.84Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jusih2o/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
                          <li><Link href="/service-areas">Service Areas</Link></li>
            </ul>
          </div>

          {/* Newsletter + Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary-300 mb-5">
              Stay Updated
            </h4>
            <p className="text-primary-200 text-sm mb-4">
              Get water quality tips and exclusive offers.
            </p>
            <form
              className="flex gap-2 mb-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-full text-sm text-white placeholder:text-primary-300 focus:outline-none focus:border-secondary-400 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-secondary text-white rounded-full text-sm font-semibold hover:bg-secondary-light transition-colors"
              >
                Join
              </button>
            </form>

            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-primary-300 mb-3">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-primary-200">
              <a
                href="tel:+18133030515"
                className="block hover:text-white transition-colors"
              >
                (813) 303-0515
              </a>
              <a
                href="mailto:support@jusih2o.com"
                className="block hover:text-white transition-colors"
              >
                support@jusih2o.com
              </a>
              <p>7901 4th St N Ste 300, St. Petersburg, FL 33702</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-300">
          <p>2026 Jusi H2O. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
