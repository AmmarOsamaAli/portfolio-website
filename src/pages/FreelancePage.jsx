import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import WorkHighlights from '../components/projects/WorkHighlights.jsx'

const services = [
  [
    'Business websites',
    'Make it easier to understand what you offer and take the next step. New websites and redesigns, built for phones and larger screens.',
  ],
  [
    'Web applications',
    'Give people a way to book, manage information, or complete a workflow online, with the screens and data connected.',
  ],
  [
    'Features & integrations',
    'Extend an existing website or application with the functionality it needs, including connections to external services.',
  ],
]

export default function FreelancePage() {
  useDocumentMeta(
    'Freelance Services | Ammar',
    'Websites, web applications, and custom functionality. Explore Ammar’s work and discuss what you need.',
  )
  return (
    <div className="container audience-page">
      <header className="page-heading centered-heading">
        <h1>Software built around your business.</h1>
        <p>
          Tell me what needs to work better. I’ll help define the scope and
          build a website or application around the people who will use it.
        </p>
        <div className="page-actions">
          <Link className="button" to="/contact">
            Discuss a Project
          </Link>
          <Link className="text-link" to="/projects">
            View My Work
          </Link>
        </div>
      </header>
      <section className="audience-section" aria-labelledby="services-title">
        <h2 id="services-title">What I can help with</h2>
        <div className="detail-grid">
          {services.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="audience-section"
        aria-labelledby="freelance-work-title"
      >
        <h2 id="freelance-work-title">See the work</h2>
        <p className="section-description">
          Applications I’ve worked on, with my contribution explained in each
          case study.
        </p>
        <WorkHighlights />
      </section>
      <section className="audience-section" aria-labelledby="process-title">
        <h2 id="process-title">A clear way forward</h2>
        <ol className="delivery-steps">
          <li>
            <h3>Agree on the goal</h3>
            <p>
              Understand the need, the audience, and the constraints. Define
              what is included before building.
            </p>
          </li>
          <li>
            <h3>Build and review</h3>
            <p>
              Work through the agreed scope and review progress, so feedback can
              shape the result.
            </p>
          </li>
          <li>
            <h3>Test and hand over</h3>
            <p>
              Check the key flows and agree on deployment, access, and any
              ongoing support.
            </p>
          </li>
        </ol>
      </section>
      <div className="page-end">
        <Link className="button" to="/contact">
          Tell Me About Your Project
        </Link>
      </div>
    </div>
  )
}
