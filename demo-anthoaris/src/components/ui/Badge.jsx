export default function Badge({ label, color = '#1D9E75', bg = '#E1F5EE', className = '' }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-montserrat font-semibold tracking-wide ${className}`}
      style={{ color, backgroundColor: bg }}
    >
      {label}
    </span>
  )
}
