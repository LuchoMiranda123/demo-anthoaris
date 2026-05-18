import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

const STORAGE_KEY = 'anthoaris_cookies_accepted'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-gray-dark text-white rounded-2xl shadow-2xl p-5"
        >
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
          <div className="flex gap-3 mb-3">
            <Cookie size={20} className="text-amber-brand flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-nunito font-bold text-sm mb-1">Usamos cookies</p>
              <p className="text-gray-secondary text-xs font-lato leading-relaxed">
                Utilizamos cookies para mejorar tu experiencia. Al continuar, aceptas su uso según
                nuestra{' '}
                <a href="#/politica-de-cookies" className="text-teal-medium underline">
                  política de cookies
                </a>
                .
              </p>
            </div>
          </div>
          <button
            onClick={accept}
            className="w-full py-2 bg-teal-primary hover:bg-teal-600 text-white rounded-xl font-montserrat font-semibold text-sm transition-colors"
          >
            Aceptar y continuar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
