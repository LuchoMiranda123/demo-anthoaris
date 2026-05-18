import { motion } from 'framer-motion'
import { ClipboardList, Sparkles, HeartHandshake } from 'lucide-react'
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    color: '#1D9E75',
    bg: '#E1F5EE',
    title: 'Evaluación',
    desc: 'Conocemos al niño, su historia y necesidades específicas a través de una evaluación integral. Reunimos a la familia para entender su contexto.',
  },
  {
    number: '02',
    icon: Sparkles,
    color: '#378ADD',
    bg: '#E6F1FB',
    title: 'Plan personalizado',
    desc: 'Diseñamos su programa de terapia con objetivos medibles y estrategias adaptadas a su perfil único. Sin soluciones genéricas.',
  },
  {
    number: '03',
    icon: HeartHandshake,
    color: '#D85A30',
    bg: '#FAECE7',
    title: 'Acompañamiento continuo',
    desc: 'Seguimiento constante a padres y ajustes del plan según los avances. Celebramos cada logro, por pequeño que sea.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="font-montserrat text-teal-primary font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Metodología
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-nunito font-bold text-3xl md:text-4xl text-gray-dark">
            Cómo trabajamos
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gray-100">
            <motion.div
              className="h-full bg-teal-medium"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={i % 2 === 0 ? fadeUp : slideInRight}
                className="flex flex-col items-center text-center"
              >
                {/* Number + Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg relative z-10"
                    style={{ backgroundColor: step.bg }}
                  >
                    <step.icon size={30} color={step.color} />
                  </motion.div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-montserrat font-bold text-white shadow-md z-20"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-nunito font-bold text-xl text-gray-dark mb-3">{step.title}</h3>
                <p className="font-lato text-gray-text text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
