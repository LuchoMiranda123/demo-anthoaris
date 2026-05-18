import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, MessageSquare, BookOpen, Shield, Heart, Baby, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import { staggerContainer, fadeUp, pageTransition } from '../../utils/animations'
import CTABanner from '../../components/sections/CTABanner'

const ICONS = { Brain, MessageSquare, BookOpen, Shield, Heart, Baby }

export default function ServicesIndex() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Servicios — Centro Anthoaris</title>
        <meta
          name="description"
          content="Terapia de atención, lenguaje, aprendizaje, conducta, emocional y guardería para niños en Lima Norte."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-teal-primary py-20">
        <div className="container-custom text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat text-white/70 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Nuestros programas
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-nunito font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Servicios terapéuticos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-lato text-lg max-w-xl mx-auto"
          >
            Programas especializados para niños de 1 a 15 años, con enfoque en el avance integral y el bienestar familiar.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-gray-soft">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((s) => {
              const Icon = ICONS[s.icon] || Brain
              return (
                <motion.div
                  key={s.id}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-2 w-full" style={{ backgroundColor: s.color }} />
                  <div className="p-7">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: s.colorLight }}
                    >
                      <Icon size={30} color={s.color} />
                    </div>
                    <h2 className="font-nunito font-bold text-xl text-gray-dark mb-2">{s.name}</h2>
                    <p className="font-lato text-gray-text text-sm leading-relaxed mb-5">{s.heroDesc}</p>
                    <Link
                      to={`/servicios/${s.id}`}
                      className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-sm"
                      style={{ color: s.color }}
                    >
                      Ver servicio completo
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}

            {/* Guardería */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-2 w-full bg-green-brand" />
              <div className="p-7">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 bg-green-light">
                  <Baby size={30} color="#639922" />
                </div>
                <h2 className="font-nunito font-bold text-xl text-gray-dark mb-2">Guardería Integral</h2>
                <p className="font-lato text-gray-text text-sm leading-relaxed mb-5">
                  Cuidado integral desde los 12 meses con estimulación temprana, actividades lúdicas y alimentación.
                </p>
                <Link
                  to="/guarderia"
                  className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-sm text-green-brand"
                >
                  Ver guardería
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  )
}
