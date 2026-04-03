'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SESSION_KEY = 'jusi_scroll_cta_closed'

export function ScrollRevealCTA() {
  const [show, setShow] = useState(false)
  const dismissed = useRef(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/contact') return
    if (sessionStorage.getItem(SESSION_KEY)) return

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent >= 0.4 && !dismissed.current) {
        setShow(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    if (!show) return
    const timer = setTimeout(() => handleClose(), 15000)
    return () => clearTimeout(timer)
  }, [show])

  const handleClose = () => {
    dismissed.current = true
    setShow(false)
    sessionStorage.setItem(SESSION_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-30"
        >
          <div
            className="relative py-4 px-4 md:px-8"
            style={{
              background: 'linear-gradient(135deg, #1B6B93 0%, #2E8B57 60%, #145273 100%)',
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 md:top-3 md:right-3 text-white/80 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 pr-6">
              <p className="text-white font-semibold text-base md:text-lg text-center md:text-left">
                Tampa Bay&apos;s water has hidden contaminants — Get your <span className="underline decoration-2">FREE</span> water test now!
              </p>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="relative overflow-hidden bg-white text-[#1B6B93] font-bold px-6 py-2.5 rounded-lg text-sm hover:scale-105 transition-transform"
                >
                  <span className="relative z-10">Book Free Test</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  />
                </Link>

                <a
                  href="tel:+18133030515"
                  className="flex items-center gap-1.5 text-white font-semibold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  (813) 303-0515
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
