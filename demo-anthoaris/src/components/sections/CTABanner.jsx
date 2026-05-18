import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../data/constants'
import { staggerContainer, fadeUp } from '../../utils/animations'

export default function CTABanner({
  title = '¿Tienes dudas? Escríbenos sin compromiso',
  subtitle = 'Nuestro equipo responde por WhatsApp de lunes a sábado. La orientación inicial es gratuita.',
  ctaLabel = 'Escribir por WhatsApp',
}) {
  return (
    <section className="py-20 bg-gray-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 bg-teal-primary transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 bg-teal-medium transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="font-nunito font-bold text-3xl md:text-4xl text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-lato text-gray-secondary text-lg mb-8 max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeUp}>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-montserrat font-semibold text-base rounded-2xl shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={22} fill="white" strokeWidth={0} />
              {ctaLabel}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
