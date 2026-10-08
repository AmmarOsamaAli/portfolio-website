import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { journey, aboutPrinciples } from '../data/about.js'
import { experience, technicalSkills } from '../data/experience.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { ExternalLink } from '../components/common/Links.jsx'
import Reveal from '../components/common/Reveal.jsx'

export default function AboutPage() {
  useDocumentMeta(
    `About ${site.name} | ${site.identity}`,
    `Meet ${site.name}, a ${site.identity} based in ${site.location}. His approach to useful software and full-stack engineering.`,
  )
  return (
    <div className="about-page container">
      <header className="page-heading centered-heading">
        <p className="eyebrow">The person behind the work</p>
        <h1>About Ammar.</h1>
        <p>{site.about}</p>
      </header>
      {journey.length > 0 && (
        <section className="about-block">
          <h2 className="about-heading">My journey.</h2>
          <ol className="journey-list">
            {journey.map((entry) => (
              <li key={`${entry.year}-${entry.title}`}>
                <p className="eyebrow">{entry.year}</p>
                <div>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
      <section className="about-block">
        <Reveal>
          <h2 className="about-heading">How I approach the work.</h2>
        </Reveal>
        <div className="principles-grid">
          {aboutPrinciples.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
      {experience.length > 0 && (
        <section className="about-block" id="experience" tabIndex={-1}>
          <h2 className="about-heading">Experience.</h2>
          <div className="experience-list">
            {experience.map((entry) => (
              <article key={`${entry.organization}-${entry.period}`}>
                <p className="experience-period">{entry.period}</p>
                <div>
                  <h3>{entry.role}</h3>
                  <p>{entry.organization}</p>
                  {entry.responsibility && <p>{entry.responsibility}</p>}
                  {entry.contribution && <p>{entry.contribution}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {technicalSkills.length > 0 && (
        <section className="about-block">
          <h2 className="about-heading">Technical background.</h2>
          {technicalSkills
            .filter((group) => group.items?.length)
            .map((group) => (
              <p key={group.title}>
                <strong>{group.title}</strong> {group.items.join(' / ')}
              </p>
            ))}
        </section>
      )}
      <div className="about-actions">
        <Link className="button" to="/#contact">
          Start a conversation
        </Link>
        <Link className="text-link" to="/projects">
          Explore my work
        </Link>
        <ExternalLink href={site.cvUrl} className="text-link">
          View CV
        </ExternalLink>
      </div>
    </div>
  )
}
