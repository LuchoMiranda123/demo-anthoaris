import { motion } from 'framer-motion'
import Counter from '../ui/Counter'
import { staggerContainer, fadeUp } from '../../utils/animations'

const stats = [
  { value: '500', suffix: '+', label: 'Niños acompañados' },
  { value: '6', suffix: '+', label: 'Años de experiencia' },
  { value: '2', suffix: '', label: 'Sedes en Lima Norte' },
  { value: '6', suffix: '', label: 'Especialidades terapéuticas' },
]

export default function StatsStrip() {
  return (
    <section className="py-14" style={{ background: 'linear-gradient(135deg, #1D9E75 0%, #0f7a5a 100%)' }}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="group">
              <div className="font-nunito font-extrabold text-white mb-1 leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <p className="font-montserrat text-white/75 text-sm font-medium tracking-wide">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
