import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { site } from '../data/site.js'

export default function NotFoundPage() {
  useDocumentMeta(
    `Page not found | ${site.name}`,
    'This page does not exist. Return home or explore the work index.',
    true,
  )
  return (
    <section className="container not-found">
      <p className="eyebrow">404</p>
      <h1>This page doesn’t exist.</h1>
      <p>The address may have changed, or this page hasn’t been published.</p>
      <div className="hero-actions">
        <Link className="button" to="/">
          Back Home<span aria-hidden="true">→</span>
        </Link>
        <Link className="text-link" to="/projects">
          View Work<span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
