import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'
import { publicProjects, projectLinks } from '../utils/projectHelpers.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { ExternalLink } from '../components/common/Links.jsx'
import ProjectMedia from '../components/projects/ProjectMedia.jsx'
import NotFoundPage from './NotFoundPage.jsx'

function NarrativeSection({ title, content }) {
  if (!content || (Array.isArray(content) && !content.length)) return null
  return (
    <section className="narrative-section">
      <h2>{title}</h2>
      {Array.isArray(content) ? (
        <ul>
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </section>
  )
}

function CaseStudy({ project }) {
  useDocumentMeta(`${project.title} | ${site.name}`, project.summary)
  const engineering = [
    ...(project.engineering || []),
    { title: 'Important Technical Decisions', content: project.decisions },
    { title: 'Difficult Problems', content: project.challenges },
    { title: 'How They Were Solved', content: project.solutions },
    { title: 'What I Learned', content: project.learnings },
  ].filter(
    (section) =>
      section.content &&
      (!Array.isArray(section.content) || section.content.length),
  )
  return (
    <article className="container case-study">
      <Link className="text-link back-link" to="/projects">
        <span aria-hidden="true">←</span> All work
      </Link>
      <header className="page-heading">
        <p className="eyebrow">{project.projectType}</p>
        <h1>{project.title}</h1>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        <p>{project.summary}</p>
        <div className="case-links">
          {projectLinks(project).map((link) => (
            <ExternalLink
              key={link.label}
              href={link.url}
              className="text-link"
            >
              {link.label}
            </ExternalLink>
          ))}
        </div>
        {project.status === 'archived' && (
          <p className="status-note">Archived Project</p>
        )}
        {project.status === 'demo-unavailable' && (
          <p className="status-note">Live demo unavailable</p>
        )}
      </header>
      <ProjectMedia image={project.heroImage} title={project.title} eager />
      <div className="case-layout">
        <div className="case-narrative">
          <NarrativeSection title="The Project" content={project.summary} />
          <NarrativeSection title="The Problem" content={project.problem} />
          <NarrativeSection title="Who It Was For" content={project.audience} />
          <NarrativeSection
            title={
              project.projectType === 'Team Project'
                ? 'My contribution'
                : 'My Role'
            }
            content={
              project.projectType === 'Team Project'
                ? project.contribution
                : project.role
            }
          />
          <NarrativeSection title="What I Built" content={project.features} />
          <NarrativeSection title="Outcome" content={project.outcome} />
          {engineering.length > 0 && (
            <section className="engineering-notes">
              <p className="eyebrow">Technical detail</p>
              <h2>Engineering Notes</h2>
              {engineering.map((section) => (
                <div className="engineering-subsection" key={section.title}>
                  <h3>{section.title}</h3>
                  {Array.isArray(section.content) ? (
                    <ul>
                      {section.content.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              ))}
            </section>
          )}
          {project.projectType === 'Concept Project' &&
            project.commercialMetrics?.length > 0 && (
              <>
                <p className="metric-note">
                  Proposed success metrics — not achieved results.
                </p>
                <NarrativeSection
                  title="What I would measure in production"
                  content={project.commercialMetrics}
                />
              </>
            )}
        </div>
        <aside className="project-meta" aria-label="Project details">
          <dl>
            {[
              ['Type', project.projectType],
              ['Role', project.role],
              ['Year', project.year],
              ['Team', project.teamSize],
              ['Stack', project.stack?.join(' / ')],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
          </dl>
          {projectLinks(project).map((link) => (
            <ExternalLink
              key={link.label}
              href={link.url}
              className="text-link"
            >
              {link.label}
            </ExternalLink>
          ))}
        </aside>
      </div>
      {project.screenshots?.length > 0 && (
        <section className="project-gallery" aria-label="Project screenshots">
          {project.screenshots.map((image) => (
            <ProjectMedia key={image.src} image={image} title={project.title} />
          ))}
        </section>
      )}
      <div className="page-end">
        <Link className="text-link" to="/projects">
          Explore more work<span aria-hidden="true">→</span>
        </Link>
        <Link className="text-link" to="/#contact">
          Contact Me<span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default function ProjectCaseStudyPage() {
  const { slug } = useParams()
  const project = publicProjects(projects).find((item) => item.slug === slug)
  return project ? <CaseStudy project={project} /> : <NotFoundPage />
}
