import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Return to Jusi H2O homepage or browse our water filtration services.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-6">
      <div className="text-center max-w-lg mx-auto">
        {/* Decorative water drop */}
        <div className="relative inline-flex mb-8">
          <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-12 h-12 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 2C12 2 4 9.5 4 14a8 8 0 0016 0C20 9.5 12 2 12 2z"
              />
            </svg>
          </div>
          <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
            404
          </span>
        </div>

        <h1 className="font-heading text-4xl font-bold text-text mb-4">
          Page Not Found
        </h1>
        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full border border-primary-200 hover:bg-primary-50 transition-colors duration-300"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-full hover:bg-secondary-dark transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light">
          <p className="text-text-tertiary text-sm mb-3">Need help? Call us directly:</p>
          <a
            href="tel:+18133030515"
            className="text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
          >
            (813) 303-0515
          </a>
        </div>
      </div>
    </div>
  );
}
