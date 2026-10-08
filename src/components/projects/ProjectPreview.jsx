import { Link } from 'react-router-dom'
import ProjectMedia from './ProjectMedia.jsx'

export default function ProjectPreview({ project }) {
  return (
    <article className="project-preview">
      <ProjectMedia image={project.heroImage} title={project.title} />
      <div className="project-preview-copy">
        <p className="eyebrow">
          {project.projectType}
          {project.year && ` · ${project.year}`}
        </p>
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        <p>{project.summary}</p>
        {project.problem && (
          <p className="project-problem">{project.problem}</p>
        )}
        <p className="contribution">
          <strong>
            {project.projectType === 'Team Project'
              ? 'My contribution'
              : 'My role'}
          </strong>
          <br />
          {project.projectType === 'Team Project'
            ? project.contribution
            : project.role}
        </p>
        {project.proofPoints?.length > 0 && (
          <ul className="proof-points">
            {project.proofPoints.slice(0, 3).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {project.stack?.length > 0 && (
          <p className="stack-line">{project.stack.join(' / ')}</p>
        )}
        <Link className="text-link" to={`/projects/${project.slug}`}>
          View Case Study
        </Link>
      </div>
    </article>
  )
}
