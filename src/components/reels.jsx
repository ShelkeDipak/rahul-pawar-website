import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import Reveal from './Reveal.jsx'

// Every video dropped into src/assets/reels/ is picked up automatically.
const files = import.meta.glob('../assets/reels/*.{mp4,webm,mov,m4v}', {
  query: '?url',
  import: 'default',
  eager: true,
})

const reels = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, url]) => {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '')
    return { url, title: name.replace(/[-_]+/g, ' ').trim() }
  })

function ReelCard({ reel, index, activeIndex, setActiveIndex }) {
  const ref = useRef(null)
  const playing = activeIndex === index

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      setActiveIndex(index)
      video.play().catch(() => setActiveIndex(null))
    } else {
      video.pause()
    }
  }

  // Pause this video whenever another reel becomes the active one.
  if (!playing && ref.current && !ref.current.paused) ref.current.pause()

  return (
    <figure className="overflow-hidden rounded-br-3xl rounded-tl-3xl bg-white p-2 shadow-lg">
      <div className="relative aspect-[9/16] overflow-hidden rounded-br-2xl rounded-tl-2xl bg-ink">
        <video
          ref={ref}
          src={`${reel.url}#t=0.1`}
          preload="metadata"
          playsInline
          controls={playing}
          onPause={() => playing && setActiveIndex(null)}
          onEnded={() => setActiveIndex(null)}
          className="h-full w-full object-cover"
          aria-label={reel.title}
        />
        {!playing && (
          <button
            type="button"
            onClick={toggle}
            aria-label={`${reel.title} – चालू करा`}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg">
              <Play size={28} fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
    </figure>
  )
}

export default function Reels() {
  const [activeIndex, setActiveIndex] = useState(null)

  if (reels.length === 0) return null

  return (
    <section id="reels" className="px-5 py-16" aria-labelledby="reels-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2
            id="reels-title"
            className="text-center text-3xl font-extrabold text-accent sm:text-4xl"
          >
            माझ्या रील्स
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <li key={reel.url}>
              <Reveal delay={(i % 4) * 0.08}>
                <ReelCard
                  reel={reel}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
