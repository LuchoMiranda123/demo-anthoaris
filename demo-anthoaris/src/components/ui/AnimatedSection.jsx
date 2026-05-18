import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { fadeUp } from '../../utils/animations'

/**
 * Wrapper que anima sus hijos cuando entran en el viewport.
 * Props: variant (objeto FM), delay (número), className
 */
export default function AnimatedSection({
  children,
  variant = fadeUp,
  delay = 0,
  className = '',
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        ...variant,
        visible: {
          ...variant.visible,
          transition: {
            ...(variant.visible?.transition || {}),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
