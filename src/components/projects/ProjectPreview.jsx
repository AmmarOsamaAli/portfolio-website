import { Link } from 'react-router-dom'
import ProjectMedia from './ProjectMedia.jsx'
import { ExternalLink } from '../common/Links.jsx'
import Reveal from '../common/Reveal.jsx'
import { projectLinks } from '../../utils/projectHelpers.js'

export default function ProjectPreview({ project }) {
  const live = projectLinks(project).find(
    (link) => link.label === 'View Live Application',
  )
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
            <p className="project-summary">{project.summary}</p>
          </div>
          <div className="project-preview-detail">
            <p className="contribution">
              <strong>
                {project.projectType === 'Team Project'
                  ? 'My contribution'
                  : 'My role'}
              </strong>
              <span>
                {project.projectType === 'Team Project'
                  ? project.contribution
                  : project.role}
              </span>
            </p>
            <div className="project-actions">
              <Link className="button" to={`/projects/${project.slug}`}>
                Explore the work
              </Link>
              {live && (
                <ExternalLink className="text-link" href={live.url}>
                  Try it live
                </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
