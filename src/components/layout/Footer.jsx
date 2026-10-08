import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import { ProfessionalLinks } from '../common/Links.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="wordmark">
            {site.name}.
          </Link>
          <p>
            {site.identity}
            <br />
            {site.location}
          </p>
        </div>
        <ProfessionalLinks includeEmail />
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/projects">Work</Link>
          <Link to="/about">About Me</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        <p className="copyright">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
