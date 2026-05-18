import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-montserrat font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variants = {
  primary:
    'bg-teal-primary text-white hover:bg-teal-600 focus-visible:ring-teal-primary shadow-md hover:shadow-lg',
  coral:
    'bg-coral-primary text-white hover:bg-orange-700 focus-visible:ring-coral-primary shadow-md hover:shadow-lg',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-teal-primary focus-visible:ring-white',
  'outline-teal':
    'border-2 border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white focus-visible:ring-teal-primary',
  ghost: 'text-teal-primary hover:bg-teal-light focus-visible:ring-teal-primary',
  whatsapp:
    'bg-whatsapp text-white hover:bg-green-600 focus-visible:ring-whatsapp shadow-md hover:shadow-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) {
  const classes = `${baseClasses} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
