import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import CookieBanner from './CookieBanner'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  // Scroll al tope en cada cambio de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
      <CookieBanner />
    </div>
  )
}
