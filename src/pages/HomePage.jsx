import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'
import { capabilities } from '../data/capabilities.js'
import { publicProjects } from '../utils/projectHelpers.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import Hero from '../components/home/Hero.jsx'
import ProjectSlider from '../components/projects/ProjectSlider.jsx'
import Contact from '../components/home/Contact.jsx'
import Reveal from '../components/common/Reveal.jsx'

export default function HomePage() {
  useDocumentMeta(
    `${site.name} | ${site.identity}`,
    `${site.name}, ${site.identity} in ${site.location}. Websites and full-stack applications built around real business and user needs.`,
  )
  const featured = publicProjects(projects).filter(
    (project) => project.featured,
  )
  return (
    <>
      <Hero />
      {site.credibility.length > 0 && (
        <div className="credibility container">
          {site.credibility.map((fact) => (
            <p key={fact}>{fact}</p>
          ))}
        </div>
      )}
      <section
        className="showcase section container"
        id="work"
        tabIndex={-1}
        aria-labelledby="work-heading"
      >
        <Reveal>
          <header className="centered-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading">The work behind the words.</h2>
            <p>Explore the problem, the decisions, and what I built.</p>
          </header>
        </Reveal>
        <ProjectSlider projects={featured} />
        <div className="section-action">
          <Link className="text-link" to="/projects">
            View all projects
          </Link>
        </div>
      </section>
      <section
        className="section capability-section"
        id="capabilities"
        tabIndex={-1}
        aria-labelledby="capabilities-heading"
      >
        <div className="container">
          <Reveal>
            <header className="centered-heading">
              <p className="eyebrow">Capabilities</p>
              <h2 id="capabilities-heading">Useful at every layer.</h2>
              <p>From a customer’s first click to the application behind it.</p>
            </header>
          </Reveal>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
