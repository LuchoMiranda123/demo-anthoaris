import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios', hasDropdown: true },
  { label: 'Guardería', to: '/guarderia' },
  { label: 'Equipo', to: '/equipo' },
  { label: 'Blog', to: '/blog' },
  { label: 'Sedes', to: '/sedes' },
  { label: 'Contacto', to: '/contacto' },
]

const SERVICE_LINKS = [
  { label: 'Terapia de Atención', to: '/servicios/terapia-de-atencion', color: '#378ADD' },
  { label: 'Terapia de Lenguaje', to: '/servicios/terapia-de-lenguaje', color: '#1D9E75' },
  { label: 'Terapia de Aprendizaje', to: '/servicios/terapia-de-aprendizaje', color: '#EF9F27' },
  { label: 'Terapia de Conducta', to: '/servicios/terapia-de-conducta', color: '#7F77DD' },
  { label: 'Terapia Emocional', to: '/servicios/terapia-emocional', color: '#D85A30' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  return (
    <>
      {/* Top bar */}
      <div className="bg-teal-primary text-white hidden md:block">
        <div className="container-custom flex items-center justify-between py-2 text-xs font-montserrat">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              960 505 741 / 913 085 500
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              Sedes: SMP y Comas
            </span>
          </div>
          <span className="opacity-80">Lun–Vie: 8am–7pm · Sáb: 8am–2pm</span>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/demo-anthoaris/images/logo-transparent.png"
                alt="Centro Anthoaris"
                className="h-14 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <div className="hidden sm:block">
                <p className="font-nunito font-bold text-teal-primary text-lg leading-tight">
                  Anthoaris
                </p>
                <p className="font-montserrat text-gray-secondary text-xs leading-tight">
                  Centro Terapéutico Integral
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div key={link.to} className="relative group">
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-gray-text font-montserrat font-medium text-sm rounded-lg hover:text-teal-primary hover:bg-teal-light transition-colors"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <Link
                            to="/servicios"
                            className="block px-4 py-3 text-sm font-montserrat font-semibold text-teal-primary border-b border-gray-100 hover:bg-teal-light transition-colors"
                          >
                            Ver todos los servicios
                          </Link>
                          {SERVICE_LINKS.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-text hover:bg-gray-soft transition-colors"
                            >
                              <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: s.color }}
                              />
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-3 py-2 font-montserrat font-medium text-sm rounded-lg transition-colors ${
                        isActive
                          ? 'text-teal-primary bg-teal-light'
                          : 'text-gray-text hover:text-teal-primary hover:bg-teal-light'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button variant="coral" size="sm" to="/contacto">
                  Solicitar cita
                </Button>
              </div>
              <button
                className="lg:hidden p-2 rounded-lg text-gray-dark hover:bg-gray-soft transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menú"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[96px] left-0 right-0 z-40 bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <nav className="container-custom py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 font-montserrat font-medium text-sm rounded-xl transition-colors ${
                      isActive
                        ? 'text-teal-primary bg-teal-light'
                        : 'text-gray-text hover:text-teal-primary hover:bg-gray-soft'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-2">
                <Button variant="coral" size="md" to="/contacto" className="w-full justify-center">
                  Solicitar cita
                </Button>
              </div>
              <div className="pt-2 text-xs text-gray-secondary font-montserrat text-center pb-2">
                📞 960 505 741 / 913 085 500
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
