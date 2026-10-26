import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import Hero from '../components/home/Hero.jsx'
import WorkHighlights from '../components/projects/WorkHighlights.jsx'

export default function HomePage() {
  useDocumentMeta(
    `${site.name} | ${site.identity}`,
    'Bahrain-based software engineer building websites and web applications. Explore the work, freelance services, and professional background.',
  )
  return (
    <>
      <Hero />
      <section
        className="home-proof container"
        id="work"
        tabIndex={-1}
        aria-labelledby="proof-title"
      >
        <header className="centered-heading">
          <h2 id="proof-title">Selected Work</h2>
          <p>Deployed applications, with my role and contribution explained.</p>
        </header>
        <WorkHighlights />
        <h2 className="audience-paths-heading">
          Looking for something specific?
        </h2>
        <div className="audience-paths">
          <Link className="audience-path" to="/freelance">
            <h3>Freelance Services</h3>
            <p>For businesses looking for websites or software.</p>
          </Link>
          <Link className="audience-path" to="/employers">
            <h3>For Employers</h3>
            <p>
              My experience, engineering approach, and professional background.
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}
