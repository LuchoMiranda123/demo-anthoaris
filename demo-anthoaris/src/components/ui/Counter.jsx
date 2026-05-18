import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Número animado que cuenta desde 0 hasta `end` cuando entra al viewport.
 */
export default function Counter({ end, suffix = '', duration = 2000, className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const startTime = performance.now()
    const endValue = parseInt(end, 10)

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * endValue))
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString('es-PE')}
      {suffix}
    </span>
  )
}
