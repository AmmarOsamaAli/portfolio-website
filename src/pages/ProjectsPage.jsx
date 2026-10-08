import { site } from '../data/site.js'
import { projects } from '../data/projects.js'
import { publicProjects } from '../utils/projectHelpers.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import WorkList from '../components/projects/WorkList.jsx'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  useDocumentMeta(
    `Work | ${site.name}`,
    'A curated index of web products, application engineering, and the problems behind the work.',
  )
  return (
    <div className="container projects-page">
      <header className="page-heading centered-heading">
        <h1>My projects</h1>
        <p>
          Web applications I’ve worked on. Open a project to see what it does
          and try the live version.
        </p>
      </header>
      <WorkList projects={publicProjects(projects)} />
      <div className="page-end">
        <Link className="text-link" to="/#contact">
          Discuss a project or role
        </Link>
      </div>
    </div>
  )
}
