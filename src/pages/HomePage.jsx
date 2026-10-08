import { site } from '../data/site.js'
import { capabilities } from '../data/capabilities.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import Hero from '../components/home/Hero.jsx'
import Contact from '../components/home/Contact.jsx'
import Reveal from '../components/common/Reveal.jsx'
export default function HomePage() {
  useDocumentMeta(
    `${site.name} | ${site.identity}`,
    'Ammar builds websites and web applications with clear interfaces, thoughtful engineering, and attention to detail.',
  )
  return (
    <>
      <Hero />
      <section
        className="section capability-section"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <Reveal>
            <header className="centered-heading">
              <h2 id="services-heading">
                Built around what people need to do.
              </h2>
              <p>
                Find information. Create an account. Complete a task. I build
                the screens and the software behind them, so each step is clear
                and the pieces work together.
              </p>
            </header>
          </Reveal>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
