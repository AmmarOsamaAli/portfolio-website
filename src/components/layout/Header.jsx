import { Link, useLocation } from 'react-router-dom'
import { site } from '../../data/site.js'

export default function Header() {
  const { pathname } = useLocation()
  return (
    <header
      className={`site-header${pathname === '/' ? ' site-header--hero' : ''}`}
    >
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label={`${site.name} — home`}>
          {site.name}.
        </Link>
      </div>
    </header>
  )
}
