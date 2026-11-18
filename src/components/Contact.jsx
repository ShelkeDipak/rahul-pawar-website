import { Instagram, MessageCircle, Phone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { INSTAGRAM_HANDLE, PHONE_DISPLAY, links } from '../data/content.js'

const cards = [
  {
    href: links.tel,
    icon: Phone,
    title: 'फोन',
    text: PHONE_DISPLAY,
    external: false,
  },
  {
    href: links.whatsapp,
    icon: MessageCircle,
    title: 'WhatsApp',
    text: PHONE_DISPLAY,
    external: true,
  },
  {
    href: links.instagram,
    icon: Instagram,
    title: 'Instagram',
    text: `@${INSTAGRAM_HANDLE}`,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16" aria-labelledby="contact-title">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 id="contact-title" className="text-3xl font-extrabold sm:text-4xl">
            संपर्क करा
          </h2>
          <p className="mt-3 text-ink/70">तुमच्या खास क्षणांसाठी आजच बोला.</p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {cards.map(({ href, icon: Icon, title, text, external }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.1}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <Icon className="text-accent" size={28} aria-hidden="true" />
                  <span className="font-bold">{title}</span>
                  <span className="break-all text-sm text-ink/70">{text}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
