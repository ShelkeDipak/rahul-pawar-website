import { Instagram, Phone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { hero, links, INSTAGRAM_HANDLE } from '../data/content.js'

export default function Hero() {
  return (
    <section id="home" className="px-5 pb-16 pt-32 text-center sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            {hero.greeting}
            <span className="text-accent">!</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg font-medium text-ink/80 sm:text-xl">{hero.tagline}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg font-semibold leading-relaxed text-accent sm:text-2xl">
            {hero.intro}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm italic tracking-wide text-accent hover:underline"
          >
            <Instagram size={16} aria-hidden="true" />
            {INSTAGRAM_HANDLE}
          </a>
        </Reveal>
        <Reveal delay={0.4} className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={links.tel} className="btn btn-primary">
            <Phone size={18} aria-hidden="true" /> संपर्क करा
          </a>
          <a href="#services" className="btn btn-outline">
            Services पहा
          </a>
        </Reveal>
      </div>
    </section>
  )
}
