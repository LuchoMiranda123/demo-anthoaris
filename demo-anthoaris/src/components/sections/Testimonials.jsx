import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { staggerContainer, fadeUp } from '../../utils/animations'

const reviews = [
  {
    name: 'María Elena P.',
    rating: 5,
    text: 'Mi hija empezó con terapia de lenguaje hace 6 meses y los avances son increíbles. El equipo es muy profesional y cálido con los niños. ¡Totalmente recomendados!',
    service: 'Terapia de Lenguaje',
    color: '#1D9E75',
  },
  {
    name: 'Jorge A. M.',
    rating: 5,
    text: 'Llevamos a nuestro hijo a terapia de conducta y la diferencia en casa es notable. Los terapeutas no solo trabajan con el niño, sino que también orientan a los padres.',
    service: 'Terapia de Conducta',
    color: '#7F77DD',
  },
  {
    name: 'Claudia V.',
    rating: 5,
    text: 'La guardería de Anthoaris es excelente. Mi bebé llegó con muchísima ansiedad de separación y en pocas semanas ya entraba contento. El personal es maravilloso.',
    service: 'Guardería',
    color: '#639922',
  },
  {
    name: 'Ricardo S.',
    rating: 5,
    text: 'Mi hijo tenía dificultades de aprendizaje que afectaban su confianza. Gracias a la terapia psicopedagógica ahora disfruta estudiar. Gran cambio en toda la familia.',
    service: 'Terapia de Aprendizaje',
    color: '#EF9F27',
  },
  {
    name: 'Ana L. T.',
    rating: 5,
    text: 'Llevé a mi hija por ansiedad escolar. El proceso fue gradual, con mucho respeto y empatía. Ahora va feliz al colegio. Gracias Anthoaris por acompañarnos.',
    service: 'Terapia Emocional',
    color: '#D85A30',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-amber-brand' : 'text-gray-200'}
          fill={i < rating ? '#EF9F27' : 'none'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-soft">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="font-montserrat text-teal-primary font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Testimonios
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-nunito font-bold text-3xl md:text-4xl text-gray-dark mb-3">
            Lo que dicen las familias
          </motion.h2>
          <motion.p variants={fadeUp} className="font-lato text-gray-text text-lg">
            Una reputación construida con cuidado y compromiso
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-amber-brand" fill="#EF9F27" />
              ))}
            </div>
            <span className="font-nunito font-bold text-gray-dark text-lg">4.9</span>
            <span className="font-lato text-gray-secondary text-sm">(48 reseñas en Google)</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.slice(0, 3).map((review) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 opacity-10"
                style={{ color: review.color }}
              />
              <StarRating rating={review.rating} />
              <p className="font-lato text-gray-text text-sm leading-relaxed mt-4 mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: review.color }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-nunito font-bold text-sm text-gray-dark">{review.name}</p>
                  <span
                    className="text-xs font-montserrat font-medium px-2 py-0.5 rounded-full"
                    style={{ color: review.color, backgroundColor: review.color + '20' }}
                  >
                    {review.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
