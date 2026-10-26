import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { education, fellowship } from '../data/profile.js'
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
      <section className="home-proof container" aria-labelledby="proof-title">
        <header className="centered-heading">
          <h2 id="proof-title">See what I’ve built.</h2>
          <p>
            Start with a deployed application, then explore the rest of the
            work.
          </p>
        </header>
        <WorkHighlights limit={1} />
        <p className="background-note">
          {education.title} · {fellowship.organization} software engineering
          training
        </p>
        <div className="audience-paths">
          <Link className="audience-path" to="/projects">
            <h3>Explore My Work</h3>
            <p>Applications, contributions, and live demos.</p>
          </Link>
          <Link className="audience-path" to="/freelance">
            <h3>Freelance Services</h3>
            <p>What I can build and how we can work together.</p>
          </Link>
          <Link className="audience-path" to="/employers">
            <h3>For Employers</h3>
            <p>My background and engineering approach.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
