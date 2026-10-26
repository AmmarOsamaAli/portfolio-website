import { Link } from 'react-router-dom'
import ProjectMedia from './ProjectMedia.jsx'
import { ExternalLink } from '../common/Links.jsx'
import Reveal from '../common/Reveal.jsx'
import { projectLinks, projectContext } from '../../utils/projectHelpers.js'

export default function ProjectPreview({ project }) {
  const live = projectLinks(project).find(
    (link) => link.label === 'View Live Application',
  )
  const contribution =
    project.contribution || (project.role !== 'Developer' ? project.role : '')
  const proof = (
    project.proofPoints?.length ? project.proofPoints : project.stack || []
  ).slice(0, 4)
  return (
    <Reveal>
      <article className="project-preview">
        <Link
          className="project-image-link"
          to={`/projects/${project.slug}`}
          aria-label={`Explore ${project.title}`}
        >
          <ProjectMedia image={project.heroImage} title={project.title} />
          <span className="project-image-action" aria-hidden="true">
            Explore {project.title}
          </span>
        </Link>
        <div className="project-preview-copy">
          <div>
            <h2>
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            </h2>
            <p className="project-context">{projectContext(project)}</p>
            <p className="project-summary">{project.summary}</p>
            {proof.length > 0 && (
              <ul className="project-proof" aria-label="Project capabilities">
                {proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="project-preview-detail">
            {contribution && (
              <p className="contribution">
                <strong>My contribution</strong>
                <span>{contribution}</span>
              </p>
            )}
            {(project.proofEmphasis || project.outcome) && (
              <p className="project-outcome">
                <strong>
                  {project.proofEmphasis ? 'Evidence' : 'Available to inspect'}
                </strong>
                <span>{project.proofEmphasis || project.outcome}</span>
              </p>
            )}
            <div className="project-actions">
              <Link className="button" to={`/projects/${project.slug}`}>
                View Case Study
              </Link>
              {live && (
                <ExternalLink className="text-link" href={live.url}>
                  Live App
                </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
