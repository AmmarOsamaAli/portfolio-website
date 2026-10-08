import { site } from '../data/site.js'
import { capabilities } from '../data/capabilities.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import Hero from '../components/home/Hero.jsx'
import Contact from '../components/home/Contact.jsx'
import Reveal from '../components/common/Reveal.jsx'
export default function HomePage() {
  useDocumentMeta(
    `${site.name} | ${site.identity}`,
    'Ammar builds websites and web applications for businesses and is available for software engineering opportunities.',
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
              <h2 id="services-heading">Need a website or an application?</h2>
              <p>
                I can build it with you. I work on what people see and use, and
                the software that runs behind it. I am also interested in
                software engineering roles where I can contribute to a team.
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
