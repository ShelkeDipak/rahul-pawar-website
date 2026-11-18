import { useState } from 'react'
import { ImageOff } from 'lucide-react'

// Lazy-loaded image with a graceful fallback if the file is missing or fails.
export default function SmartImage({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-ink/5 text-ink/30 ${className}`}
      >
        <ImageOff size={32} aria-hidden="true" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
