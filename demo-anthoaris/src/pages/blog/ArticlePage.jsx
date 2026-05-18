import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import { pageTransition, fadeUp } from '../../utils/animations'
import CTABanner from '../../components/sections/CTABanner'
import { getArticleSchema } from '../../utils/seo'

export default function ArticlePage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const schema = getArticleSchema({
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    url: `https://luchomiranda123.github.io/demo-anthoaris/#/blog/${post.slug}`,
    image: 'https://luchomiranda123.github.io/demo-anthoaris/images/portada.png',
  })

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{post.title} — Centro Anthoaris</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Header */}
      <section className="py-16 relative" style={{ backgroundColor: post.categoryColor + '22' }}>
        <div className="container-custom max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-gray-secondary hover:text-gray-dark font-montserrat text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={15} /> Volver al blog
          </Link>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-montserrat font-semibold mb-4"
            style={{ color: post.categoryColor, backgroundColor: post.categoryBg }}
          >
            {post.category}
          </span>
          <h1 className="font-nunito font-bold text-gray-dark mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-lato text-gray-secondary">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-nunito"
                style={{ backgroundColor: post.categoryColor }}
              >
                {post.authorInitials}
              </div>
              <span>{post.author} · {post.authorRole}</span>
            </div>
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="prose prose-lg max-w-none font-lato text-gray-text"
            style={{ lineHeight: 1.8 }}
          >
            {post.content.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </motion.div>

          {/* Author bio */}
          <div
            className="mt-12 rounded-2xl p-6 flex items-start gap-4 border"
            style={{ borderColor: post.categoryColor + '30', backgroundColor: post.categoryBg }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-nunito font-bold flex-shrink-0"
              style={{ backgroundColor: post.categoryColor }}
            >
              {post.authorInitials}
            </div>
            <div>
              <p className="font-nunito font-bold text-gray-dark">{post.author}</p>
              <p className="font-montserrat text-xs text-gray-secondary mb-1">{post.authorRole}</p>
              <p className="font-lato text-sm text-gray-text">
                Especialista del Centro Anthoaris comprometida con el desarrollo integral de la infancia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Tienes dudas sobre lo que leíste?"
        subtitle="Escríbenos y un especialista te orientará sin compromiso."
        ctaLabel="Consultar con un especialista"
      />
    </motion.div>
  )
}
