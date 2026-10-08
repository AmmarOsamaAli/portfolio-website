import ProjectPreview from './ProjectPreview.jsx'

export default function WorkList({ projects }) {
  if (!projects.length)
    return (
      <div className="work-empty">
        <p className="empty-title">Case studies are being prepared.</p>
        <p>
          Project details and work will be published here when they’re ready to
          inspect.
        </p>
      </div>
    )
  return (
    <div className="work-list">
      {projects.map((project) => (
        <ProjectPreview key={project.slug} project={project} />
      ))}
    </div>
  )
}
