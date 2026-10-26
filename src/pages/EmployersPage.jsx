import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { education, fellowship } from '../data/profile.js'
import { site } from '../data/site.js'
import { ExternalLink } from '../components/common/Links.jsx'
import WorkHighlights from '../components/projects/WorkHighlights.jsx'

export default function EmployersPage() {
  useDocumentMeta(
    'For Employers | Ammar',
    'Ammar’s software engineering background, training, and deployed web applications, with individual contributions explained.',
  )
  return (
    <div className="container audience-page">
      <header className="page-heading centered-heading">
        <h1>Meet the engineer behind the work.</h1>
        <p>
          I’m Ammar, a Software Engineer &amp; Full-Stack Developer based in
          Bahrain. My focus is understanding the problem, building across the
          web application, and making the work easy to evaluate.
        </p>
        <div className="page-actions">
          <ExternalLink className="button" href={site.cvUrl}>
            View CV
          </ExternalLink>
          <Link className="button" to="/projects">
            View Projects
          </Link>
          <Link className="text-link" to="/contact">
            Contact Me
          </Link>
        </div>
      </header>
      <section className="audience-section" aria-labelledby="background-title">
        <h2 id="background-title">Education &amp; training</h2>
        <div className="detail-grid detail-grid--two">
          <article>
            <h3>{education.title}</h3>
            <p>
              {education.period} · {education.detail}
            </p>
          </article>
          <article>
            <h3>{fellowship.title}</h3>
            <p>{fellowship.organization}</p>
            <p>{fellowship.period}</p>
          </article>
        </div>
      </section>
      <section className="audience-section" aria-labelledby="engineering-title">
        <h2 id="engineering-title">How I approach engineering</h2>
        <div className="detail-grid">
          <article>
            <h3>Start with the requirements</h3>
            <p>
              Understand the users, constraints, and expected behavior before
              deciding what to build.
            </p>
          </article>
          <article>
            <h3>Connect the whole flow</h3>
            <p>
              Think through the interface, application logic, and data together,
              including validation and failure states.
            </p>
          </article>
          <article>
            <h3>Make ownership clear</h3>
            <p>
              Explain what I contributed, what was collaborative, and the
              reasoning behind the work.
            </p>
          </article>
        </div>
      </section>
      <section
        className="audience-section"
        aria-labelledby="employer-work-title"
      >
        <h2 id="employer-work-title">Work you can inspect</h2>
        <p className="section-description">
          Deployed applications and shared case studies. Collaborative work is
          identified, with individual contribution kept separate from the team’s
          output.
        </p>
        <WorkHighlights />
      </section>
      <div className="page-end">
        <div className="page-actions">
          <ExternalLink className="text-link" href={site.githubUrl}>
            GitHub
          </ExternalLink>
          <ExternalLink className="text-link" href={site.linkedinUrl}>
            LinkedIn
          </ExternalLink>
          <Link className="button" to="/contact">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
