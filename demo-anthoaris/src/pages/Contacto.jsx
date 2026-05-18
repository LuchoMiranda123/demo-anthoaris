import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { pageTransition, staggerContainer, fadeUp, slideInRight } from '../utils/animations'
import { PHONE_1, PHONE_2, EMAIL, WHATSAPP_URL } from '../data/constants'

// Replace with your Formspree form ID to enable email delivery
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_ID'

export default function Contacto() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    try {
      const form = e.target
      const data = Object.fromEntries(new FormData(form))
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setSent(true)
      form.reset()
    } catch (_) {
      // silently fail for demo; production should show error state
    } finally {
      setSending(false)
    }
  }

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Contáctanos — Centro Anthoaris</title>
        <meta name="description" content="Contacta al Centro Anthoaris por WhatsApp, teléfono o formulario. Sedes en San Martín de Porres y Comas, Lima Norte." />
      </Helmet>

      <section className="py-20 bg-coral-primary relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-nunito font-bold text-white mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Contáctanos
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            className="text-white/80 font-lato text-lg max-w-lg mx-auto">
            Estamos para orientarte sin compromiso. La consulta inicial es gratuita.
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Form */}
            <motion.div variants={fadeUp}>
              <h2 className="font-nunito font-bold text-2xl text-gray-dark mb-6">
                Envíanos un mensaje
              </h2>
              {sent ? (
                <div className="bg-teal-light rounded-2xl p-8 text-center">
                  <p className="text-3xl mb-3">🎉</p>
                  <h3 className="font-nunito font-bold text-xl text-teal-primary mb-2">¡Mensaje enviado!</h3>
                  <p className="font-lato text-gray-text">Te responderemos en menos de 24 horas. También puedes escribirnos por WhatsApp para una respuesta más rápida.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-montserrat text-xs font-semibold text-gray-dark mb-1">Nombre *</label>
                      <input required name="nombre" type="text" placeholder="Tu nombre"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-lato text-gray-dark focus:outline-none focus:border-teal-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block font-montserrat text-xs font-semibold text-gray-dark mb-1">Teléfono</label>
                      <input name="telefono" type="tel" placeholder="9XX XXX XXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-lato text-gray-dark focus:outline-none focus:border-teal-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-montserrat text-xs font-semibold text-gray-dark mb-1">Correo electrónico *</label>
                    <input required name="email" type="email" placeholder="correo@ejemplo.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-lato text-gray-dark focus:outline-none focus:border-teal-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block font-montserrat text-xs font-semibold text-gray-dark mb-1">Servicio de interés</label>
                    <select name="servicio"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-lato text-gray-dark focus:outline-none focus:border-teal-primary transition-colors bg-white">
                      <option value="">Selecciona una opción</option>
                      <option>Terapia de Atención</option>
                      <option>Terapia de Lenguaje</option>
                      <option>Terapia de Aprendizaje</option>
                      <option>Terapia de Conducta</option>
                      <option>Terapia Emocional</option>
                      <option>Guardería</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-montserrat text-xs font-semibold text-gray-dark mb-1">Mensaje *</label>
                    <textarea required name="mensaje" rows={4} placeholder="Cuéntanos brevemente la situación de tu hijo..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-lato text-gray-dark focus:outline-none focus:border-teal-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={sending}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-primary text-white font-montserrat font-semibold text-sm rounded-xl hover:bg-teal-700 transition-colors disabled:opacity-60">
                    <Send size={16} />
                    {sending ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div variants={slideInRight} className="space-y-6">
              <h2 className="font-nunito font-bold text-2xl text-gray-dark">
                Información de contacto
              </h2>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-green-light rounded-2xl hover:bg-green-200 transition-colors group">
                <div className="w-12 h-12 bg-whatsapp rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-nunito font-bold text-gray-dark text-sm">WhatsApp</p>
                  <p className="font-lato text-gray-text text-sm">+51 960 505 741 — Respuesta inmediata</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-blue-light rounded-2xl">
                <div className="w-12 h-12 bg-blue-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-nunito font-bold text-gray-dark text-sm">Teléfonos</p>
                  <p className="font-lato text-gray-text text-sm">{PHONE_1}</p>
                  <p className="font-lato text-gray-text text-sm">{PHONE_2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-teal-light rounded-2xl">
                <div className="w-12 h-12 bg-teal-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-nunito font-bold text-gray-dark text-sm">Sedes</p>
                  <p className="font-lato text-gray-text text-sm">San Martín de Porres, Lima</p>
                  <p className="font-lato text-gray-text text-sm">Comas, Lima</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-amber-light rounded-2xl">
                <div className="w-12 h-12 bg-amber-brand rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-nunito font-bold text-gray-dark text-sm">Horarios de atención</p>
                  <p className="font-lato text-gray-text text-sm">Lun – Vie: 7:30 am – 7:00 pm</p>
                  <p className="font-lato text-gray-text text-sm">Sáb: 8:00 am – 2:00 pm</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
