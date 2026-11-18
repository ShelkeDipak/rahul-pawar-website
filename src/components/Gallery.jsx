import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import ReelCard from './ReelCard.jsx'
import { gallery } from '../data/content.js'

// Every video dropped into src/assets/reels/ is picked up automatically.
// File name becomes the label: "01-वाढदिवस.mp4" -> "वाढदिवस" (number prefix only sets the order).
const files = import.meta.glob('../assets/reels/*.{mp4,webm,mov,m4v}', {
  query: '?url',
  import: 'default',
  eager: true,
})

const reels = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, url]) => {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '')
    // Label is whatever follows the number prefix; "1.mp4" has no label.
    const label = name.replace(/^\d+[\s._-]*/, '').replace(/[-_]+/g, ' ').trim()
    return { url, label }
  })

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const hasReels = reels.length > 0

  return (
    <section id="gallery" className="px-5 py-16" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            id="gallery-title"
            className="text-center text-3xl font-extrabold text-accent sm:text-4xl"
          >
            {gallery.heading}
          </h2>
        </Reveal>

        {hasReels ? (
          <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
            {reels.map((reel, i) => (
              <li key={reel.url} className="flex flex-col items-center gap-3">
                <Reveal delay={(i % 3) * 0.1} className="w-full">
                  <ReelCard
                    url={reel.url}
                    title={reel.label || `रील ${i + 1}`}
                    index={i}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </Reveal>
                {reel.label && <p className="font-bold text-plum">{reel.label}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
            {gallery.items.map((item, i) => (
              <li key={item.src} className="flex flex-col items-center gap-3">
                <Reveal delay={(i % 3) * 0.1} className="w-full">
                  <motion.figure
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="overflow-hidden rounded-br-3xl rounded-tl-3xl bg-white p-2 shadow-lg"
                  >
                    <SmartImage
                      src={item.src}
                      alt={item.alt}
                      width="400"
                      height="560"
                      className="aspect-[5/7] w-full rounded-br-2xl rounded-tl-2xl object-cover"
                    />
                  </motion.figure>
                </Reveal>
                {item.label && <p className="font-bold text-plum">{item.label}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}