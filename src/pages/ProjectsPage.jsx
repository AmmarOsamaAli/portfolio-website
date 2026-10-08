import { site } from '../data/site.js'
import { projects } from '../data/projects.js'
import { publicProjects } from '../utils/projectHelpers.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import WorkList from '../components/projects/WorkList.jsx'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  useDocumentMeta(
    `Work | ${site.name}`,
    'Explore Ammar’s web applications, their purpose, and his contribution to the work.',
  )
  return (
    <div className="container projects-page">
      <header className="page-heading centered-heading">
        <h1>My projects</h1>
        <p>
          See how I turn ideas into working software. Explore the applications,
          understand my contribution, and try them for yourself.
        </p>
      </header>
      <WorkList projects={publicProjects(projects)} />
      <div className="page-end">
        <Link className="text-link" to="/#contact">
          Get in touch
        </Link>
      </div>
    </div>
  )
}
