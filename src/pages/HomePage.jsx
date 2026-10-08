import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'
import { experience, technicalSkills } from '../data/experience.js'
import { capabilities, process } from '../data/capabilities.js'
import { publicProjects } from '../utils/projectHelpers.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { ExternalLink } from '../components/common/Links.jsx'
import WorkList from '../components/projects/WorkList.jsx'
import Contact from '../components/home/Contact.jsx'

export default function HomePage() {
  useDocumentMeta(
    `${site.name} | ${site.identity}`,
    `${site.name} is a ${site.identity} based in ${site.location}, building web products that solve real business and user problems.`,
  )
  const featured = publicProjects(projects)
    .filter((project) => project.featured)
    .slice(0, 4)
  return (
    <>
      <section className="hero container" aria-labelledby="hero-heading">
        <p className="hero-identity">
          {site.identity} <span>based in {site.location}</span>
        </p>
        <div className="hero-grid">
          <div>
            <h1 id="hero-heading">{site.headline}</h1>
            <p className="hero-description">{site.description}</p>
            <div className="hero-actions">
              <Link className="button" to="/#work">
                View My Work<span aria-hidden="true">↘</span>
              </Link>
              <Link className="text-link" to="/#contact">
                Contact Me<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/illustrations/product-system.svg"
              width="480"
              height="420"
              alt="A web product connects the user interface, application logic, and database."
            />
            <figcaption>The parts of a full-stack web product.</figcaption>
          </figure>
        </div>
      </section>
      {site.credibility.length > 0 && (
        <section
          className="credibility container"
          aria-label="Professional background"
        >
          {site.credibility.map((fact) => (
            <p key={fact}>{fact}</p>
          ))}
        </section>
      )}
      <section
        className="section container home-work"
        id="work"
        tabIndex={-1}
        aria-labelledby="work-heading"
      >
        <div className="work-heading">
          <div>
            <h2 id="work-heading">Selected Work</h2>
          </div>
          <Link className="text-link" to="/projects">
            All work<span aria-hidden="true">→</span>
          </Link>
        </div>
        <WorkList projects={featured} />
      </section>
      <section
        className="section container home-capabilities"
        id="capabilities"
        tabIndex={-1}
      >
        <SectionHeader label="Capabilities" title="What I Build" />
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <div className="capability" key={capability.title}>
              <img
                className="capability-visual"
                src={capability.image}
                alt=""
                width="320"
                height="180"
                loading="lazy"
                decoding="async"
              />
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {technicalSkills.length > 0 && (
          <div className="technical-skills">
            {technicalSkills
              .filter((group) => group.items?.length)
              .map((group) => (
                <p key={group.title}>
                  <strong>{group.title}</strong> {group.items.join(' / ')}
                </p>
              ))}
          </div>
        )}
      </section>
      {experience.length > 0 && (
        <section className="section container" id="experience" tabIndex={-1}>
          <SectionHeader label="Background" title="Experience" />
          <div className="experience-list">
            {experience.map((entry) => (
              <article key={`${entry.organization}-${entry.period}`}>
                <p className="experience-period">
                  {entry.period}
                  {entry.location && (
                    <>
                      <br />
                      {entry.location}
                    </>
                  )}
                </p>
                <div>
                  <h3>{entry.role}</h3>
                  <p className="organization">{entry.organization}</p>
                  {entry.responsibility && <p>{entry.responsibility}</p>}
                  {entry.contribution && <p>{entry.contribution}</p>}
                </div>
              </article>
            ))}
          </div>
          <ExternalLink href={site.cvUrl} className="text-link">
            View CV
          </ExternalLink>
        </section>
      )}
      <section
        className="section container home-process"
        id="process"
        tabIndex={-1}
      >
        <SectionHeader label="Approach" title="How I Work" />
        <ol className="process-list">
          {process.map(([title, description], index) => (
            <li key={title}>
              <span className="process-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="section container home-about"
        id="about"
        tabIndex={-1}
      >
        <SectionHeader
          label="About"
          title="Useful software. Thoughtful engineering."
        >
          <p className="about-copy">{site.about}</p>
        </SectionHeader>
      </section>
      <Contact />
    </>
  )
}
