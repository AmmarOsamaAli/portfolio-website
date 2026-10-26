import { site } from '../data/site.js'
import { projects } from '../data/projects.js'
import { publicProjects } from '../utils/projectHelpers.js'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import WorkList from '../components/projects/WorkList.jsx'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  useDocumentMeta(
    `Work | ${site.name}`,
    'Selected web applications showing the problems they solve, Ammar’s contribution, and the work available to inspect.',
  )
  return (
    <div className="container projects-page">
      <header className="page-heading centered-heading">
        <h1>Selected Work</h1>
        <p>
          A selection of web applications I’ve worked on, showing the problems
          they solve, my contribution, and the engineering behind them.
        </p>
      </header>
      <WorkList projects={publicProjects(projects)} />
      <div className="page-end">
        <Link className="text-link" to="/contact">
          Get in touch
        </Link>
      </div>
    </div>
  )
}
