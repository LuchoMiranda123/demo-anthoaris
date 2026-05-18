import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/animations'

function LegalPage({ title, children }) {
  return (
    <motion.div {...pageTransition}>
      <Helmet><title>{title} — Centro Anthoaris</title></Helmet>
      <section className="py-16 bg-gray-soft border-b border-gray-100">
        <div className="container-custom">
          <h1 className="font-nunito font-bold text-gray-dark" style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)' }}>{title}</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl font-lato text-gray-text leading-relaxed space-y-6 text-sm">
          {children}
        </div>
      </section>
    </motion.div>
  )
}

export function Privacidad() {
  return (
    <LegalPage title="Política de Privacidad">
      <p>En Centro Anthoaris, cumplimos con la <strong>Ley N.º 29733 — Ley de Protección de Datos Personales del Perú</strong> y su reglamento (D.S. 003-2013-JUS).</p>
      <p><strong>Datos recopilados:</strong> Nombre, correo, teléfono e información relacionada con la consulta terapéutica enviada mediante el formulario de contacto.</p>
      <p><strong>Finalidad:</strong> Gestión de consultas, orientación terapéutica y comunicaciones relacionadas con nuestros servicios. No compartimos datos con terceros salvo obligación legal.</p>
      <p><strong>Derechos ARCO:</strong> Acceso, rectificación, cancelación y oposición. Puedes ejercerlos escribiendo a contacto@centroanthoaris.pe.</p>
      <p><strong>Cookies:</strong> Usamos cookies técnicas necesarias para el funcionamiento del sitio. Ver nuestra <a href="/#/politica-de-cookies" className="text-teal-primary underline">Política de Cookies</a>.</p>
      <p>Última actualización: enero 2025.</p>
    </LegalPage>
  )
}

export function Terminos() {
  return (
    <LegalPage title="Términos y Condiciones">
      <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones de uso.</p>
      <p><strong>Propiedad intelectual:</strong> Todos los contenidos (textos, imágenes, logotipos) son propiedad del Centro Anthoaris o cuentan con licencia de uso. Queda prohibida su reproducción sin autorización.</p>
      <p><strong>Servicios:</strong> La información publicada tiene carácter orientativo. La prestación de servicios terapéuticos está sujeta a evaluación previa por nuestros profesionales.</p>
      <p><strong>Exención de responsabilidad:</strong> El contenido del blog es de carácter informativo y no sustituye el diagnóstico ni el tratamiento profesional.</p>
      <p><strong>Ley aplicable:</strong> Las presentes condiciones se rigen por la legislación peruana.</p>
    </LegalPage>
  )
}

export function Cookies() {
  return (
    <LegalPage title="Política de Cookies">
      <p>Este sitio utiliza cookies para mejorar la experiencia de navegación.</p>
      <p><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio (sesión, preferencias de privacidad). No requieren consentimiento.</p>
      <p><strong>Cookies analíticas:</strong> Si decides aceptarlas, usamos datos anónimos para entender cómo se usa el sitio y mejorar el contenido.</p>
      <p><strong>Gestión:</strong> Puedes rechazar o eliminar las cookies en cualquier momento desde la configuración de tu navegador. La opción "Aceptar" en el banner de cookies guarda tu preferencia en localStorage.</p>
    </LegalPage>
  )
}

export function Reclamaciones() {
  return (
    <LegalPage title="Libro de Reclamaciones">
      <p>De acuerdo con el <strong>Código de Protección y Defensa del Consumidor (Ley N.º 29571)</strong>, el Centro Anthoaris pone a disposición de sus usuarios un Libro de Reclamaciones virtual.</p>
      <p>Para presentar una queja o reclamo, escríbenos a: <strong>contacto@centroanthoaris.pe</strong> con el asunto "RECLAMO" o comunícate al <strong>960 505 741</strong>.</p>
      <p>Atenderemos tu solicitud en un plazo máximo de <strong>15 días hábiles</strong> conforme a la normativa vigente.</p>
      <p>También puedes acudir al <strong>INDECOPI</strong> (Av. De la Floresta 497, San Borja) o ingresar tu queja en <a href="https://www.indecopi.gob.pe" target="_blank" rel="noopener noreferrer" className="text-teal-primary underline">www.indecopi.gob.pe</a>.</p>
    </LegalPage>
  )
}

export function TrabajaConNosotros() {
  return (
    <LegalPage title="Trabaja con nosotros">
      <p>En Centro Anthoaris buscamos constantemente profesionales apasionados por el desarrollo infantil que quieran sumarse a nuestro equipo.</p>
      <p><strong>Perfiles que buscamos:</strong> Terapistas de lenguaje, psicólogos clínicos, terapistas ocupacionales, psicopedagogos y educadores de nivel inicial con experiencia en trabajo con niños.</p>
      <p><strong>¿Cómo postular?</strong> Envía tu CV actualizado a <strong>contacto@centroanthoaris.pe</strong> con el asunto "POSTULACIÓN — [TU ESPECIALIDAD]".</p>
      <p>Revisamos todos los CVs y contactamos a los perfiles que se ajusten a nuestras vacantes actuales.</p>
    </LegalPage>
  )
}
