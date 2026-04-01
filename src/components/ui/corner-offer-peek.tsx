'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Droplets, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const SESSION_KEY = 'jusi_corner_peek_closed'

export function CornerOfferPeek() {
  const [show, setShow] = useState(false)
  const dismissed = useRef(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    const timer = setTimeout(() => {
      if (!dismissed.current) setShow(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!show) return
    const timer = setTimeout(() => handleClose(), 12000)
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
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-4 right-4 max-md:left-4 max-md:right-auto z-35"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="relative bg-white rounded-xl shadow-2xl border border-[#1B6B93]/20 p-4 w-64"
          >
            <button
              onClick={handleClose}
              className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-[#2E8B57]" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Free Water Test</p>
                <p className="text-xs text-gray-500 mt-0.5">Discover what&apos;s really in your tap</p>
                <Link
                  href="/contact"
                  onClick={handleClose}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B6B93] mt-2 hover:underline"
                >
                  Claim yours <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
