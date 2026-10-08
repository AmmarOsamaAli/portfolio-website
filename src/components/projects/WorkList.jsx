import ProjectPreview from './ProjectPreview.jsx'

export default function WorkList({ projects }) {
  if (!projects.length)
    return (
      <div className="work-empty">
        <p className="empty-title">Case studies are being prepared.</p>
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
