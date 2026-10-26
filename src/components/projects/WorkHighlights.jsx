import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { publicProjects } from '../../utils/projectHelpers.js'
import ProjectMedia from './ProjectMedia.jsx'
import Reveal from '../common/Reveal.jsx'

export default function WorkHighlights({ limit = 2 }) {
  const selected = publicProjects(projects)
    .filter((project) => project.featured)
    .slice(0, limit)
  return (
    <div
      className={`work-highlights${selected.length === 1 ? ' work-highlights--single' : ''}`}
    >
      {selected.map((project) => (
        <Reveal key={project.slug}>
          <article className="work-highlight">
            <Link
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.title} case study`}
            >
              <ProjectMedia image={project.heroImage} title={project.title} />
            </Link>
            <div className="highlight-copy">
              <h3>
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.summary}</p>
              <p className="highlight-contribution">
                <strong>
                  {project.projectType === 'Team Project'
                    ? 'My contribution'
                    : 'My role'}
                  :
                </strong>{' '}
                {project.projectType === 'Team Project'
                  ? project.contribution
                  : project.role}
              </p>
              <Link className="text-link" to={`/projects/${project.slug}`}>
                View case study
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
