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
          Find freelance work, play a quiz, or discover an event. See what each
          application does, how I contributed, and explore the live version.
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
