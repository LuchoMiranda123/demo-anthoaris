import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Brain, MessageSquare, BookOpen, Shield, Heart, CheckCircle2, ArrowLeft, MessageCircle } from 'lucide-react'
import { services } from '../../data/services'
import FAQ from '../../components/sections/FAQ'
import CTABanner from '../../components/sections/CTABanner'
import Badge from '../../components/ui/Badge'
import { pageTransition, staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations'
import { WHATSAPP_URL } from '../../data/constants'

const ICONS = { Brain, MessageSquare, BookOpen, Shield, Heart }

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.id === slug)

  if (!service) return <Navigate to="/servicios" replace />

  const Icon = ICONS[service.icon] || Brain

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{service.name} — Centro Anthoaris</title>
        <meta
          name="description"
          content={`${service.shortDesc} Centro Anthoaris, Lima Norte. Sedes en SMP y Comas.`}
        />
      </Helmet>

      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
            style={{ background: 'white' }}
          />
        </div>
        <div className="container-custom relative z-10">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-montserrat text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Todos los servicios
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <Icon size={36} color="white" />
            </div>
            <div>
              <Badge
                label="Servicio especializado"
                color="white"
                bg="rgba(255,255,255,0.2)"
                className="mb-3"
              />
              <h1 className="font-nunito font-bold text-white mb-2"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
                {service.name}
              </h1>
              <p className="text-white/80 font-lato text-lg">{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* ¿Qué es? */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="font-nunito font-bold text-2xl text-gray-dark mb-4">
                  ¿Qué es la {service.name}?
                </h2>
                <p className="font-lato text-gray-text leading-relaxed">{service.description}</p>
              </motion.div>

              {/* ¿Para quién? */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="font-nunito font-bold text-2xl text-gray-dark mb-4">
                  ¿Para quién es?
                </h2>
                <p className="font-lato text-gray-text mb-4 leading-relaxed">
                  Esta terapia puede ser la indicada si tu hijo presenta alguna de estas señales:
                </p>
                <ul className="space-y-3">
                  {service.forWho.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                      <span className="font-lato text-gray-text text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Metodología */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="font-nunito font-bold text-2xl text-gray-dark mb-4">
                  ¿Cómo trabajamos?
                </h2>
                <div
                  className="rounded-2xl p-6 border-l-4"
                  style={{ backgroundColor: service.colorLight, borderColor: service.color }}
                >
                  <p className="font-lato text-gray-text leading-relaxed">{service.methodology}</p>
                </div>
              </motion.div>

              {/* Objetivos */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="font-nunito font-bold text-2xl text-gray-dark mb-4">
                  Objetivos del tratamiento
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.goals.map((goal, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 rounded-xl"
                      style={{ backgroundColor: service.colorLight }}
                    >
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                      <span className="font-lato text-gray-dark text-sm">{goal}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="sticky top-28 space-y-5"
              >
                {/* CTA Card */}
                <div
                  className="rounded-2xl p-6 text-white"
                  style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                >
                  <h3 className="font-nunito font-bold text-lg mb-2">¿Quieres saber más?</h3>
                  <p className="font-lato text-white/80 text-sm leading-relaxed mb-4">
                    Solicita una evaluación inicial gratuita. Te orientamos sin compromiso.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-white font-montserrat font-semibold text-sm rounded-xl transition-all hover:scale-105 active:scale-95"
                    style={{ color: service.color }}
                  >
                    <MessageCircle size={16} />
                    Solicitar evaluación
                  </a>
                </div>

                {/* FAQ */}
                <div className="bg-gray-soft rounded-2xl p-5">
                  <h3 className="font-nunito font-bold text-base text-gray-dark mb-3">
                    Preguntas frecuentes
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <details key={i} className="group">
                        <summary className="font-lato text-sm text-gray-text cursor-pointer list-none flex justify-between items-start gap-2 hover:text-teal-primary transition-colors">
                          <span>{faq.q}</span>
                          <span className="font-bold text-teal-primary group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                        </summary>
                        <p className="font-lato text-xs text-gray-secondary leading-relaxed mt-2 pl-0">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Sedes */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="font-montserrat font-semibold text-sm text-gray-dark mb-2">📍 Atendemos en</p>
                  <p className="font-lato text-gray-text text-sm">San Martín de Porres y Comas, Lima</p>
                  <Link
                    to="/sedes"
                    className="inline-block mt-2 text-teal-primary font-montserrat font-semibold text-xs hover:underline"
                  >
                    Ver cómo llegar →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Inicia hoy el proceso de ${service.name.toLowerCase()}`}
        subtitle="La evaluación inicial es gratuita. Nuestro equipo te acompañará en cada paso."
        ctaLabel="Solicitar evaluación gratuita"
      />
    </motion.div>
  )
}
