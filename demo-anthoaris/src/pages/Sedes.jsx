import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { SEDES } from '../data/constants'
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations'

export default function Sedes() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Sedes — Centro Anthoaris</title>
        <meta name="description" content="Encuentra el Centro Anthoaris en San Martín de Porres y Comas, Lima Norte. Horarios, teléfonos y ubicación en mapas." />
      </Helmet>

      <section className="py-20 bg-teal-primary">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-nunito font-bold text-white mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Nuestras sedes
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            className="text-white/80 font-lato text-lg max-w-lg mx-auto">
            Dos ubicaciones estratégicas en Lima Norte para estar cerca de ti.
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {SEDES.map((sede) => (
              <motion.div key={sede.name} variants={fadeUp}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Map embed */}
                <div className="h-56 bg-teal-light flex items-center justify-center">
                  <div className="text-center text-teal-primary">
                    <MapPin size={40} className="mx-auto mb-2 opacity-40" />
                    <p className="font-montserrat text-sm font-semibold opacity-60">Mapa próximamente</p>
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="font-nunito font-bold text-xl text-gray-dark mb-1">{sede.name}</h2>
                  <p className="font-lato text-gray-secondary text-sm mb-5">{sede.address}</p>

                  <div className="space-y-3 text-sm font-lato text-gray-text">
                    <div className="flex items-start gap-3">
                      <Phone size={15} className="text-teal-primary mt-0.5 flex-shrink-0" />
                      <span>{sede.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={15} className="text-teal-primary mt-0.5 flex-shrink-0" />
                      <span className="whitespace-pre-line">{sede.hours}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${sede.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-whatsapp text-white font-montserrat font-semibold text-sm rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp esta sede
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
