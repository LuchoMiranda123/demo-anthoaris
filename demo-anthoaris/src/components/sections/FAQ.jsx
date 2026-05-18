import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { homeFaqs } from '../../data/faqs'
import { staggerContainer, fadeUp } from '../../utils/animations'

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-nunito font-semibold text-base text-gray-dark group-hover:text-teal-primary transition-colors pr-4">
          {faq.q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-teal-light text-teal-primary transition-colors group-hover:bg-teal-primary group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-lato text-gray-text text-sm leading-relaxed pb-5 pr-12">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ({ faqs = homeFaqs, title = 'Preguntas frecuentes' }) {
  const [openIndex, setOpenIndex] = useState(0)

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
            Resolvemos tus dudas
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-nunito font-bold text-3xl md:text-4xl text-gray-dark">
            {title}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-2"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
