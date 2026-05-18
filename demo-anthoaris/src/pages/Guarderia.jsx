import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Baby, Sun, Apple, Music, BookOpen, MessageCircle } from 'lucide-react'
import { pageTransition, staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations'
import CTABanner from '../components/sections/CTABanner'
import { WHATSAPP_URL } from '../data/constants'

const features = [
  { icon: Baby, color: '#639922', bg: '#EAF3DE', title: 'Estimulación temprana', desc: 'Actividades diseñadas para el desarrollo cognitivo, motor y sensorial en cada etapa.' },
  { icon: Sun, color: '#EF9F27', bg: '#FAEEDA', title: 'Rutinas saludables', desc: 'Horarios estables, siestas, higiene y hábitos que dan seguridad al niño.' },
  { icon: Apple, color: '#D85A30', bg: '#FAECE7', title: 'Alimentación nutritiva', desc: 'Menús balanceados adaptados a cada edad, con seguimiento nutricional.' },
  { icon: Music, color: '#7F77DD', bg: '#EEEDFE', title: 'Juego y arte', desc: 'Música, pintura, movimiento y juego libre como base del aprendizaje.' },
  { icon: BookOpen, color: '#378ADD', bg: '#E6F1FB', title: 'Pre-lectura y pre-escritura', desc: 'Preparación progresiva para el aprendizaje escolar desde los 3 años.' },
  { icon: MessageCircle, color: '#1D9E75', bg: '#E1F5EE', title: 'Comunicación con la familia', desc: 'Reportes diarios digitales y reuniones periódicas de seguimiento.' },
]

export default function Guarderia() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Guardería Integral — Centro Anthoaris</title>
        <meta
          name="description"
          content="Guardería en Lima Norte con estimulación temprana, alimentación y cuidado integral para niños desde 12 meses. San Martín de Porres y Comas."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 bg-green-brand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-white transform translate-x-1/3 -translate-y-1/3" />
        <div className="container-custom relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-montserrat text-white/70 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Para los más pequeños
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-nunito font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Guardería Integral
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-lato text-lg max-w-xl leading-relaxed"
          >
            Un espacio amoroso, seguro y estimulante para niños desde los 12 meses. Cuidado profesional con mirada terapéutica.
          </motion.p>
        </div>
      </section>

      {/* Edades */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2 className="font-nunito font-bold text-3xl text-gray-dark mb-4">
                ¿Qué ofrecemos?
              </h2>
              <p className="font-lato text-gray-text leading-relaxed mb-4">
                Nuestra guardería no es solo cuidado: es un programa integral donde cada día tiene un propósito. Contamos con educadores especializados en desarrollo infantil temprano y acceso directo a los profesionales terapéuticos del centro.
              </p>
              <p className="font-lato text-gray-text leading-relaxed mb-6">
                Atendemos niños de <strong>12 meses a 5 años</strong>, con grupos reducidos para garantizar atención personalizada.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-brand text-white font-montserrat font-semibold text-sm rounded-xl hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={18} />
                Consultar disponibilidad
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="bg-green-light rounded-2xl p-8">
                <h3 className="font-nunito font-bold text-xl text-gray-dark mb-4">Horario y modalidades</h3>
                <div className="space-y-3 text-sm font-lato text-gray-text">
                  <div className="flex justify-between border-b border-green-brand/20 pb-2">
                    <span>Turno mañana</span><strong>7:30 am – 1:00 pm</strong>
                  </div>
                  <div className="flex justify-between border-b border-green-brand/20 pb-2">
                    <span>Turno tarde</span><strong>1:00 pm – 6:00 pm</strong>
                  </div>
                  <div className="flex justify-between border-b border-green-brand/20 pb-2">
                    <span>Turno completo</span><strong>7:30 am – 6:00 pm</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Días</span><strong>Lunes a Viernes</strong>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-secondary font-lato">
                  * Horarios y vacantes sujetos a disponibilidad en cada sede.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-soft">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="font-nunito font-bold text-3xl text-gray-dark">
              Todo lo que incluye
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: f.bg }}
                >
                  <f.icon size={24} color={f.color} />
                </div>
                <h3 className="font-nunito font-bold text-base text-gray-dark mb-1">{f.title}</h3>
                <p className="font-lato text-gray-text text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Tu bebé merece el mejor inicio"
        subtitle="Consulta disponibilidad en nuestras sedes de SMP y Comas. Te orientamos sin compromiso."
        ctaLabel="Consultar vacantes disponibles"
      />
    </motion.div>
  )
}
