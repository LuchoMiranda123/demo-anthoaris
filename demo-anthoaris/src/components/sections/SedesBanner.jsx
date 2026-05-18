import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../../utils/animations'

export default function SedesBanner() {
  return (
    <section className="py-16 bg-teal-primary relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-5"
            style={{
              width: 80 + i * 30,
              height: 80 + i * 30,
              top: `${10 + (i % 3) * 30}%`,
              left: `${5 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-montserrat text-white/70 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Cobertura
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-nunito font-bold text-3xl md:text-4xl text-white mb-4"
          >
            Dos sedes para estar cerca de ti
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 font-lato text-lg mb-8 max-w-xl mx-auto">
            Encuentra la sede más conveniente para tu familia en Lima Norte.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['San Martín de Porres', 'Comas'].map((sede) => (
              <motion.div
                key={sede}
                variants={fadeUp}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-5 py-3 rounded-2xl font-montserrat font-semibold text-base"
              >
                <MapPin size={18} className="text-white" />
                {sede}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              to="/sedes"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-teal-primary font-montserrat font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Ver cómo llegar
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
