"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export function ContactContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.jusipower.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section ref={ref} className="relative py-section overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-secondary-50/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Embedded GHL Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-brand-xl border border-border-light overflow-hidden" style={{ minHeight: 727 }}>
              <iframe
                src="https://link.jusipower.com/widget/form/8JZyongBJ8twzcD5wqta"
                style={{ width: "100%", height: 727, border: "none", borderRadius: 3 }}
                id="inline-8JZyongBJ8twzcD5wqta"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="A2P Compliance Form"
                data-height="727"
                data-layout-iframe-id="inline-8JZyongBJ8twzcD5wqta"
                data-form-id="8JZyongBJ8twzcD5wqta"
                title="A2P Compliance Form"
              />
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Phone */}
            <div className="p-6 bg-white rounded-brand-xl border border-border-light">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-text mb-1">Phone</h3>
              <a href="tel:8133030515" className="text-lg text-primary font-semibold hover:text-primary-dark transition-colors">
                (813) 303-0515
              </a>
              <p className="text-sm text-text-tertiary mt-1">Same-day response</p>
            </div>

            {/* Email */}
            <div className="p-6 bg-white rounded-brand-xl border border-border-light">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-text mb-1">Email</h3>
              <a href="mailto:support@jusih2o.com" className="text-lg text-primary font-semibold hover:text-primary-dark transition-colors">
                support@jusih2o.com
              </a>
            </div>

            {/* Social */}
            <div className="p-6 bg-white rounded-brand-xl border border-border-light">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-text mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61578123391295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-50 text-primary text-sm font-semibold rounded-full hover:bg-primary-100 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/jusih2o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-50 text-primary text-sm font-semibold rounded-full hover:bg-primary-100 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 bg-white rounded-brand-xl border border-border-light">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-text mb-1">Service Area</h3>
              <p className="text-text-secondary text-sm">
                Tampa Bay, FL -- Hillsborough, Pinellas, Manatee, Sarasota, and Polk counties
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
