import { motion } from 'framer-motion'
import { Puzzle, Target, Users } from 'lucide-react'
import { staggerContainer, fadeUp } from '../../utils/animations'

const pillars = [
  {
    icon: Puzzle,
    color: '#1D9E75',
    bg: '#E1F5EE',
    title: 'Evaluación personalizada',
    desc: 'Cada niño es único. Diseñamos su plan terapéutico desde cero, partiendo de una evaluación integral de sus necesidades y fortalezas.',
  },
  {
    icon: Target,
    color: '#378ADD',
    bg: '#E6F1FB',
    title: 'Intervención especializada',
    desc: 'Terapeutas certificados con metodología basada en evidencia científica. Medimos avances con objetivos claros y verificables.',
  },
  {
    icon: Users,
    color: '#D85A30',
    bg: '#FAECE7',
    title: 'Enfoque familiar',
    desc: 'Los padres son parte activa del proceso. Los orientamos, capacitamos y acompañamos en cada etapa del desarrollo de su hijo.',
  },
]

export default function ValueProposition() {
  return (
    <section className="section-padding bg-white">
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
            ¿Por qué elegir Anthoaris?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-nunito font-bold text-3xl md:text-4xl text-gray-dark"
          >
            Un equipo comprometido con el avance de cada niño
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: pillar.bg }}
              >
                <pillar.icon size={30} color={pillar.color} />
              </div>
              <h3
                className="font-nunito font-bold text-xl mb-3"
                style={{ color: pillar.color }}
              >
                {pillar.title}
              </h3>
              <p className="font-lato text-gray-text text-base leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
