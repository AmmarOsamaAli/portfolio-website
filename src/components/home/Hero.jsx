import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content container">
        <h1 id="hero-heading">{site.headline}</h1>
        <p className="hero-description">{site.description}</p>
        <div className="hero-actions">
          <Link className="button button-inverse" to="/projects">
            View My Projects
          </Link>
          <Link className="button button-outline" to="/#contact">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
