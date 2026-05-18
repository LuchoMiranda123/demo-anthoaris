import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { pageTransition } from '../utils/animations'

export default function NotFound() {
  return (
    <motion.div {...pageTransition}>
      <Helmet><title>Página no encontrada — Centro Anthoaris</title></Helmet>
      <section className="min-h-[60vh] flex items-center justify-center bg-gray-soft">
        <div className="text-center px-6">
          <p className="font-nunito font-extrabold text-teal-primary" style={{ fontSize: '6rem', lineHeight: 1 }}>404</p>
          <h1 className="font-nunito font-bold text-gray-dark text-2xl mt-4 mb-2">Página no encontrada</h1>
          <p className="font-lato text-gray-secondary mb-8">La página que buscas no existe o fue movida.</p>
          <Link to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-primary text-white font-montserrat font-semibold text-sm rounded-xl hover:bg-teal-700 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
