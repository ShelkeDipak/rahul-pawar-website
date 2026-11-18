export default function Logo({ size = 44 }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border-2 border-accent bg-cream font-bold text-accent"
      style={{ width: size, height: size, fontFamily: 'Georgia, serif', fontSize: size * 0.38 }}
      aria-hidden="true"
    >
      R
    </span>
  )
}
