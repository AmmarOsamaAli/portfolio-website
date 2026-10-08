import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import { ProfessionalLinks } from '../common/Links.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="wordmark">
            {site.name}
            <span aria-hidden="true">.</span>
          </Link>
          <p>
            {site.identity}
            <br />
            {site.location}
          </p>
        </div>
        <ProfessionalLinks includeEmail />
        <p className="copyright">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
