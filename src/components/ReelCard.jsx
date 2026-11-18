import { useEffect, useRef } from 'react'
import { Play } from 'lucide-react'

// One framed, playable reel. Only one reel plays at a time (controlled by the parent).
export default function ReelCard({ url, title, index, activeIndex, setActiveIndex }) {
  const ref = useRef(null)
  const playing = activeIndex === index

  // Pause this video when another reel becomes active.
  useEffect(() => {
    if (!playing && ref.current && !ref.current.paused) ref.current.pause()
  }, [playing])

  const start = () => {
    const video = ref.current
    if (!video) return
    setActiveIndex(index)
    video.play().catch(() => setActiveIndex(null))
  }

  return (
    <div className="overflow-hidden rounded-br-3xl rounded-tl-3xl bg-white p-2 shadow-lg">
      <div className="relative aspect-[9/16] overflow-hidden rounded-br-2xl rounded-tl-2xl bg-ink">
        <video
          ref={ref}
          src={`${url}#t=0.1`}
          preload="metadata"
          playsInline
          controls={playing}
          onEnded={() => setActiveIndex(null)}
          className="h-full w-full object-cover"
          aria-label={title}
        />
        {!playing && (
          <button
            type="button"
            onClick={start}
            aria-label={`${title} – चालू करा`}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg">
              <Play size={28} fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}