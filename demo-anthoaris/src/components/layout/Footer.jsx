import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import { PHONE_1, PHONE_2, FACEBOOK_URL, INSTAGRAM_URL, EMAIL } from '../../data/constants'

// Simple social SVG icons (lucide-react 0.475 doesn't export Facebook/Instagram)
function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Guardería', to: '/guarderia' },
  { label: 'Equipo', to: '/equipo' },
  { label: 'Blog', to: '/blog' },
  { label: 'Sedes', to: '/sedes' },
  { label: 'Contacto', to: '/contacto' },
]

const LEGAL_LINKS = [
  { label: 'Política de Privacidad', to: '/politica-de-privacidad' },
  { label: 'Términos y Condiciones', to: '/terminos-y-condiciones' },
  { label: 'Política de Cookies', to: '/politica-de-cookies' },
  { label: 'Libro de Reclamaciones', to: '/libro-de-reclamaciones' },
  { label: 'Trabaja con Nosotros', to: '/trabaja-con-nosotros' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white">
      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/demo-anthoaris/images/logo-transparent.png"
                alt="Centro Anthoaris"
                className="h-14 w-auto bg-teal-primary rounded-xl p-1"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <p className="font-nunito font-bold text-xl text-white mb-1">Centro Anthoaris</p>
            <p className="text-gray-secondary text-sm font-lato mb-4">
              Centro Terapéutico Integral y Guardería
            </p>
            <p className="text-gray-secondary text-sm font-lato mb-5 leading-relaxed">
              <em>"Tu hijo merece el mejor acompañamiento"</em>
            </p>
            <div className="flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-blue-brand transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-coral-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-nunito font-bold text-white mb-4 text-base">Navegación</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-secondary hover:text-teal-medium font-lato text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-nunito font-bold text-white mb-4 text-base">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-secondary font-lato">
                <Phone size={15} className="text-teal-medium mt-0.5 flex-shrink-0" />
                <span>
                  {PHONE_1}
                  <br />
                  {PHONE_2}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-secondary font-lato">
                <Mail size={15} className="text-teal-medium mt-0.5 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-teal-medium transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-secondary font-lato">
                <MapPin size={15} className="text-teal-medium mt-0.5 flex-shrink-0" />
                <span>
                  San Martín de Porres
                  <br />
                  Comas, Lima
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-nunito font-bold text-white mb-2 text-base">
              Recibe consejos para padres
            </h4>
            <p className="text-gray-secondary text-sm font-lato mb-4 leading-relaxed">
              Tips semanales sobre desarrollo infantil y terapias.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
              aria-label="Suscripción a newsletter"
            >
              <input
                type="text"
                placeholder="Tu nombre"
                className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-secondary text-sm font-lato focus:outline-none focus:border-teal-medium"
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-secondary text-sm font-lato focus:outline-none focus:border-teal-medium"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-primary hover:bg-teal-600 text-white rounded-lg font-montserrat font-semibold text-sm transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-secondary text-xs font-lato flex items-center gap-1">
              © 2025 Centro Anthoaris · Hecho con <Heart size={12} className="text-coral-primary" /> en Lima, Perú
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-secondary hover:text-teal-medium text-xs font-lato transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
