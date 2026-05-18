import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ServicesIndex from './pages/services/ServicesIndex'
import ServiceDetail from './pages/services/ServiceDetail'
import Guarderia from './pages/Guarderia'
import Equipo from './pages/Equipo'
import BlogIndex from './pages/blog/BlogIndex'
import ArticlePage from './pages/blog/ArticlePage'
import Testimonios from './pages/Testimonios'
import Sedes from './pages/Sedes'
import Contacto from './pages/Contacto'
import { Privacidad, Terminos, Cookies, Reclamaciones, TrabajaConNosotros } from './pages/legal/LegalPages'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesIndex />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="/guarderia" element={<Guarderia />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-de-privacidad" element={<Privacidad />} />
          <Route path="/terminos-y-condiciones" element={<Terminos />} />
          <Route path="/politica-de-cookies" element={<Cookies />} />
          <Route path="/libro-de-reclamaciones" element={<Reclamaciones />} />
          <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
