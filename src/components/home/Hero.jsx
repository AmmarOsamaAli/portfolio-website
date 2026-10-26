import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import { fellowship } from '../../data/profile.js'
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content container">
        <p className="hero-intro">{site.identity} · Bahrain</p>
        <h1 id="hero-heading">{site.headline}</h1>
        <p className="hero-description">{site.description}</p>
        <div className="hero-actions">
          <Link className="button button-inverse" to="/projects">
            View My Work
          </Link>
          <Link className="button button-outline" to="/#work">
            What I Build
          </Link>
        </div>
        <p className="hero-credibility">
          Software Engineering Graduate · {fellowship.organization}
        </p>
      </div>
    </section>
  )
}
