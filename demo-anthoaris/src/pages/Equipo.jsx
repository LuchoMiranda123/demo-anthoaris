import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { team } from '../data/team'
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations'
import CTABanner from '../components/sections/CTABanner'

export default function Equipo() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Nuestro Equipo — Centro Anthoaris</title>
        <meta
          name="description"
          content="Conoce al equipo de profesionales del Centro Anthoaris: terapistas de lenguaje, conducta, aprendizaje, emocional y atención especializada en Lima Norte."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 bg-lavender-brand relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-montserrat text-white/70 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Profesionales certificados
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-nunito font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Nuestro equipo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-lato text-lg max-w-xl mx-auto leading-relaxed"
          >
            Especialistas comprometidos con el desarrollo de cada niño, con formación universitaria y actualización continua.
          </motion.p>
        </div>
      </section>

      {/* Team grid */}
      <section className="section-padding bg-gray-soft">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-nunito font-bold text-2xl"
                  style={{ backgroundColor: member.specialtyColor }}
                >
                  {member.initials}
                </div>

                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-montserrat font-semibold mb-3"
                  style={{ color: member.specialtyColor, backgroundColor: member.specialtyBg }}
                >
                  {member.specialty}
                </span>

                <h2 className="font-nunito font-bold text-lg text-gray-dark mb-0.5">{member.name}</h2>
                <p className="font-montserrat text-gray-secondary text-xs mb-2">{member.role}</p>
                <p className="font-lato text-gray-secondary text-xs mb-4">{member.university}</p>

                <p className="font-lato text-gray-text text-sm leading-relaxed">{member.approach}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Nuestro equipo está listo para acompañarte"
        subtitle="Agenda una consulta inicial y conoce al especialista ideal para tu hijo."
        ctaLabel="Solicitar consulta inicial"
      />
    </motion.div>
  )
}
