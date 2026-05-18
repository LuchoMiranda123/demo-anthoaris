import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blog'
import { pageTransition, staggerContainer, fadeUp } from '../../utils/animations'
import { Clock, User } from 'lucide-react'

export default function BlogIndex() {
  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Blog — Centro Anthoaris</title>
        <meta
          name="description"
          content="Artículos sobre desarrollo infantil, señales tempranas, terapia y crianza. Recursos útiles para familias de Lima Norte."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 bg-blue-brand relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-nunito font-bold text-white mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Blog Anthoaris
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-white/80 font-lato text-lg max-w-xl mx-auto"
          >
            Artículos escritos por nuestros especialistas para orientar a las familias.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-2 w-full" style={{ backgroundColor: post.categoryColor }} />
                <div className="p-7">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-montserrat font-semibold mb-4"
                    style={{ color: post.categoryColor, backgroundColor: post.categoryBg }}
                  >
                    {post.category}
                  </span>
                  <h2 className="font-nunito font-bold text-xl text-gray-dark mb-2 leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-teal-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-lato text-gray-text text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs font-lato text-gray-secondary border-t border-gray-50 pt-4">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: post.categoryColor }}
                      >
                        {post.authorInitials}
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />{post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
