import Reveal from './Reveal.jsx'
import { quote } from '../data/content.js'

export default function Quote() {
  return (
    <section className="px-5 py-16" aria-label="संदेश">
      <Reveal className="mx-auto max-w-3xl text-center">
        <blockquote className="text-2xl font-bold leading-relaxed text-ink sm:text-3xl">
          {quote}
        </blockquote>
      </Reveal>
    </section>
  )
}
