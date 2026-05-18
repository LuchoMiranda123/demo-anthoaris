import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, MessageSquare, BookOpen, Shield, Heart, Baby, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import { staggerContainer, fadeUp } from '../../utils/animations'

const ICONS = { Brain, MessageSquare, BookOpen, Shield, Heart, Baby }

function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon] || Brain

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300 flex flex-col"
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: service.color }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: service.colorLight }}
        >
          <Icon size={26} color={service.color} />
        </div>

        {/* Content */}
        <h3 className="font-nunito font-bold text-lg text-gray-dark mb-2">{service.name}</h3>
        <p className="font-lato text-gray-text text-sm leading-relaxed mb-5 flex-1">
          {service.shortDesc}
        </p>

        {/* Link */}
        <Link
          to={`/servicios/${service.id}`}
          className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-sm transition-colors"
          style={{ color: service.color }}
        >
          Saber más
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesGrid({ showTitle = true }) {
  return (
    <section className="section-padding bg-gray-soft">
      <div className="container-custom">
        {showTitle && (
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
              Lo que ofrecemos
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-nunito font-bold text-3xl md:text-4xl text-gray-dark mb-4"
            >
              Nuestros servicios terapéuticos
            </motion.h2>
            <motion.p variants={fadeUp} className="font-lato text-gray-text text-lg max-w-2xl mx-auto">
              Programas especializados para niños de 1 a 15 años, diseñados para potenciar su
              desarrollo y calidad de vida.
            </motion.p>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
          {/* Guardería card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300 flex flex-col"
          >
            <div className="h-1.5 w-full bg-green-brand" />
            <div className="p-6 flex flex-col flex-1">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-green-light">
                <Baby size={26} color="#639922" />
              </div>
              <h3 className="font-nunito font-bold text-lg text-gray-dark mb-2">Guardería</h3>
              <p className="font-lato text-gray-text text-sm leading-relaxed mb-5 flex-1">
                Cuidado integral desde 1 año con estimulación temprana y actividades lúdicas.
              </p>
              <Link
                to="/guarderia"
                className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-sm text-green-brand"
              >
                Saber más
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
