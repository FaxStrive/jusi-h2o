'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface InlineCTAProps {
  variant: 'banner' | 'button' | 'text'
  text: string
  message?: string
  phone?: string
  trustLine?: string
  href?: string
}

export function InlineCTA({
  variant,
  text,
  message,
  phone = '(813) 303-0515',
  trustLine,
  href = '/contact',
}: InlineCTAProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  if (variant === 'banner') {
    return (
      <div ref={ref} className="relative overflow-hidden">
        <div
          className="py-10 sm:py-14"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-accent) 100%)',
          }}
        >
          <motion.div
            className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                {text}
              </p>
              {message && (
                <p className="text-white/60 text-sm mt-2">{message}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-white text-[var(--color-primary-dark)] font-bold px-7 py-3 rounded-lg text-sm hover:scale-105 transition-transform"
              >
                Schedule Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:underline"
              >
                <Phone className="h-4 w-4" />
                {phone}
              </a>
            </div>
            {trustLine && (
              <p className="text-white/40 text-xs">{trustLine}</p>
            )}
          </motion.div>
        </div>
      </div>
    )
  }

  if (variant === 'button') {
    return (
      <div ref={ref} className="py-10 sm:py-12">
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-bold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] bg-[var(--color-accent)] text-white"
          >
            {text}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {trustLine && (
            <p className="text-gray-500 text-xs">{trustLine}</p>
          )}
        </motion.div>
      </div>
    )
  }

  // text variant
  return (
    <div ref={ref} className="py-6 sm:py-8">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline"
        >
          {text}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
}
