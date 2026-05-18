import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, Quote, MessageCircle } from 'lucide-react'
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations'
import { WHATSAPP_URL } from '../data/constants'

const ALL_REVIEWS = [
  { name: 'María Elena P.', rating: 5, text: 'Mi hija empezó con terapia de lenguaje hace 6 meses y los avances son increíbles. El equipo es muy profesional y cálido con los niños. ¡Totalmente recomendados!', service: 'Terapia de Lenguaje', color: '#1D9E75' },
  { name: 'Jorge A. M.', rating: 5, text: 'Llevamos a nuestro hijo a terapia de conducta y la diferencia en casa es notable. Los terapeutas no solo trabajan con el niño, sino que también orientan a los padres.', service: 'Terapia de Conducta', color: '#7F77DD' },
  { name: 'Claudia V.', rating: 5, text: 'La guardería de Anthoaris es excelente. Mi bebé llegó con muchísima ansiedad de separación y en pocas semanas ya entraba contento. El personal es maravilloso.', service: 'Guardería', color: '#639922' },
  { name: 'Ricardo S.', rating: 5, text: 'Mi hijo tenía dificultades de aprendizaje que afectaban su confianza. Gracias a la terapia psicopedagógica ahora disfruta estudiar. Gran cambio en toda la familia.', service: 'Terapia de Aprendizaje', color: '#EF9F27' },
  { name: 'Ana L. T.', rating: 5, text: 'Llevé a mi hija por ansiedad escolar. El proceso fue gradual, con mucho respeto y empatía. Ahora va feliz al colegio. Gracias Anthoaris por acompañarnos.', service: 'Terapia Emocional', color: '#D85A30' },
  { name: 'Sandra M.', rating: 5, text: 'Excelente atención en la sede de Comas. La evaluación inicial fue muy detallada y el plan terapéutico muy bien explicado. Recomiendo a todas las mamás del cono norte.', service: 'Terapia de Atención', color: '#378ADD' },
  { name: 'Luis C.', rating: 5, text: 'Llevamos a nuestro hijo por problemas de atención y el cambio ha sido enorme. Lo que más valoro es la comunicación constante con los padres. Siempre están disponibles.', service: 'Terapia de Atención', color: '#378ADD' },
  { name: 'Pamela R.', rating: 5, text: 'La terapia de lenguaje ha hecho que mi hija pueda comunicarse con fluidez. Antes era muy frustrante para ella no poder expresarse. Hoy es otra niña.', service: 'Terapia de Lenguaje', color: '#1D9E75' },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < rating ? 'text-amber-brand' : 'text-gray-200'} fill={i < rating ? '#EF9F27' : 'none'} />
      ))}
    </div>
  )
}

export default function Testimonios() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Testimonios — Centro Anthoaris</title>
        <meta name="description" content="Experiencias reales de las familias del Centro Anthoaris. Terapias en Lima Norte que cambian vidas." />
      </Helmet>

      <section className="py-20 bg-amber-light">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-nunito font-bold text-gray-dark mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Lo que dicen las familias
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-brand" fill="#EF9F27" />)}
            <span className="font-nunito font-bold text-xl text-gray-dark">4.9</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-lato text-gray-secondary">
            +48 reseñas en Google Maps
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ALL_REVIEWS.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote size={32} className="absolute top-5 right-5 opacity-10" style={{ color: r.color }} />
                <StarRating rating={r.rating} />
                <p className="font-lato text-gray-text text-sm leading-relaxed mt-3 mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: r.color }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-nunito font-bold text-sm text-gray-dark">{r.name}</p>
                    <span className="text-xs font-montserrat font-medium px-2 py-0.5 rounded-full"
                      style={{ color: r.color, backgroundColor: r.color + '20' }}>
                      {r.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-soft text-center">
        <div className="container-custom">
          <h2 className="font-nunito font-bold text-2xl text-gray-dark mb-3">¿Quieres ser parte de estas historias?</h2>
          <p className="font-lato text-gray-text mb-6">Escríbenos hoy. La primera orientación es gratuita.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-whatsapp text-white font-montserrat font-semibold rounded-xl hover:bg-green-600 transition-colors">
            <MessageCircle size={18} fill="white" strokeWidth={0} />
            Escribir al WhatsApp
          </a>
        </div>
      </section>
    </motion.div>
  )
}
