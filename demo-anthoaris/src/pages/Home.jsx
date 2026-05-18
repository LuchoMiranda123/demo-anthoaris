import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import HeroSlider from '../components/sections/HeroSlider'
import ValueProposition from '../components/sections/ValueProposition'
import ServicesGrid from '../components/sections/ServicesGrid'
import SedesBanner from '../components/sections/SedesBanner'
import HowWeWork from '../components/sections/HowWeWork'
import StatsStrip from '../components/sections/StatsStrip'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTABanner from '../components/sections/CTABanner'
import { pageTransition } from '../utils/animations'
import { getLocalBusinessSchema } from '../utils/seo'

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Centro Anthoaris — Terapia Integral y Guardería Lima Norte</title>
        <meta
          name="description"
          content="Centro Anthoaris: terapia de atención, lenguaje, aprendizaje, conducta y emocional para niños. Guardería desde 1 año. Sedes en San Martín de Porres y Comas, Lima Norte."
        />
        <meta property="og:title" content="Centro Anthoaris — Terapia Integral y Guardería Lima Norte" />
        <meta
          property="og:description"
          content="Terapias especializadas para niños de 1 a 15 años en Lima Norte. Acompañamiento integral y personalizado."
        />
        <meta property="og:image" content="https://luchomiranda123.github.io/demo-anthoaris/images/portada.png" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(getLocalBusinessSchema())}
        </script>
      </Helmet>

      <HeroSlider />
      <ValueProposition />
      <ServicesGrid />
      <SedesBanner />
      <HowWeWork />
      <StatsStrip />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </motion.div>
  )
}
