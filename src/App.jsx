import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Quote from './components/Quote.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        मुख्य मजकुराकडे जा
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Gallery />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
