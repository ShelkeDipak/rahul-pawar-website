import Reveal from './Reveal.jsx'
import SmartImage from './SmartImage.jsx'
import { hero, services } from '../data/content.js'

export default function Services() {
  return (
    <section id="services" className="px-5 py-16" aria-labelledby="services-title">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <Reveal className="mx-auto w-full max-w-sm">
          <SmartImage
            src="/images/poster.jpg"
            alt="Rahul Pawar – Social Media & Cinematic Video Creator, services poster"
            width="600"
            height="850"
            className="h-auto w-full rounded-2xl shadow-xl"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-semibold uppercase tracking-widest text-accent">{hero.role}</p>
            <h2 id="services-title" className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Our Services
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((name, i) => (
              <li key={name}>
                <Reveal delay={(i % 6) * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
                     <span className="font-medium">{name}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
