import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '../../data/constants'

const slides = [
  {
    id: 1,
    headline: 'Tu hijo merece el\nmejor acompañamiento',
    subtext:
      'Terapias de atención, lenguaje, aprendizaje, conducta y emocional en Lima Norte. Sedes en SMP y Comas.',
    cta1: { label: 'Solicitar cita', to: '/contacto', variant: 'white' },
    cta2: { label: 'Conocer servicios', to: '/servicios', variant: 'outline' },
    badge: 'Centro Terapéutico Integral',
  },
  {
    id: 2,
    headline: 'Sus logros\nson los nuestros',
    subtext:
      'Acompañamos a cada niño con un programa 100% personalizado. Porque cada niño tiene su propio ritmo.',
    cta1: { label: 'Conócenos', to: '/equipo', variant: 'white' },
    cta2: { label: 'Ver nuestro equipo', to: '/equipo', variant: 'outline' },
    badge: 'Especialistas certificados',
  },
  {
    id: 3,
    headline: 'Guardería y terapia\nen un solo lugar',
    subtext:
      'Desde 1 año, cuidado integral que combina estimulación temprana y terapia sin traslados ni fragmentación.',
    cta1: { label: 'Ver guardería', to: '/guarderia', variant: 'white' },
    cta2: { label: 'Contáctanos', href: WHATSAPP_URL, variant: 'outline' },
    badge: 'Desde los 12 meses',
  },
]

const SLIDE_INTERVAL = 5500

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (index, dir) => {
      setDirection(dir)
      setCurrent((index + slides.length) % slides.length)
    },
    []
  )

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const id = setTimeout(next, SLIDE_INTERVAL)
    return () => clearTimeout(id)
  }, [current, isPaused, next])

  const slide = slides[current]

  return (
    <section
      className="relative overflow-hidden bg-teal-primary min-h-[92vh] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Slider principal"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #5DCAA5 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #E1F5EE 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-40"
            style={{
              top: `${15 + i * 13}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Portada image (right side, desktop) */}
      <div className="absolute right-0 top-0 bottom-0 w-2/5 hidden lg:block overflow-hidden">
        <img
          src="/demo-anthoaris/images/portada.png"
          alt="Terapeuta con niños de Centro Anthoaris"
          className="h-full w-full object-cover object-center"
          style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0.9) 60%, transparent 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #1D9E75 0%, #1D9E75 10%, rgba(29,158,117,0.4) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Slide content */}
      <div className="container-custom relative z-10 py-20 lg:py-24">
        <div className="max-w-xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={{
                enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
                center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                exit: (d) => ({ x: d < 0 ? 60 : -60, opacity: 0, transition: { duration: 0.4 } }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block mb-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-montserrat font-semibold rounded-full tracking-wide border border-white/30"
              >
                ✦ {slide.badge}
              </motion.span>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-nunito font-extrabold text-white mb-5 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
              >
                {slide.headline.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white/85 font-lato text-lg mb-8 leading-relaxed"
              >
                {slide.subtext}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {slide.cta1.to ? (
                  <Link
                    to={slide.cta1.to}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-primary font-montserrat font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    {slide.cta1.label}
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <a
                    href={slide.cta1.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-primary font-montserrat font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <MessageCircle size={16} />
                    {slide.cta1.label}
                  </a>
                )}

                {slide.cta2.to ? (
                  <Link
                    to={slide.cta2.to}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-montserrat font-semibold text-sm rounded-xl hover:bg-white hover:text-teal-primary active:scale-95 transition-all duration-200"
                  >
                    {slide.cta2.label}
                  </Link>
                ) : (
                  <a
                    href={slide.cta2.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-montserrat font-semibold text-sm rounded-xl hover:bg-white hover:text-teal-primary active:scale-95 transition-all duration-200"
                  >
                    {slide.cta2.label}
                  </a>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom flex items-center gap-4">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="ml-auto flex gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
