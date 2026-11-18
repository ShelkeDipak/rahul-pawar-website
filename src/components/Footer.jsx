import Logo from './Logo.jsx'
import { INSTAGRAM_HANDLE } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center text-sm text-ink/70">
        <Logo size={40} />
        <p>
          © {new Date().getFullYear()} राहुल पवार · @{INSTAGRAM_HANDLE}
        </p>
      </div>
    </footer>
  )
}
