import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../../data/site.js'
import { experience } from '../../data/experience.js'
import { ProfessionalLinks } from '../common/Links.jsx'

const navigation = [
  ['Work', 'work'],
  ['Capabilities', 'capabilities'],
  ...(experience.length ? [['Experience', 'experience']] : []),
  ['About', 'about'],
  ['Contact', 'contact'],
]

function MobileMenu({ close, buttonRef }) {
  const menuRef = useRef(null)
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menuRef.current.querySelector('a')?.focus()
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        close()
        buttonRef.current?.focus()
      }
      if (event.key === 'Tab') {
        const items = [
          buttonRef.current,
          ...menuRef.current.querySelectorAll('a'),
        ].filter(Boolean)
        const first = items[0]
        const last = items.at(-1)
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    function onResize() {
      if (window.matchMedia('(min-width: 900px)').matches) close()
    }
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [close, buttonRef])
  return (
    <nav
      ref={menuRef}
      id="mobile-navigation"
      className="mobile-menu"
      aria-label="Mobile navigation"
    >
      {navigation.map(([label, id]) => (
        <Link key={id} to={`/#${id}`} onClick={close}>
          {label}
          <span aria-hidden="true">↗</span>
        </Link>
      ))}
      <Link to="/projects" onClick={close}>
        All work<span aria-hidden="true">→</span>
      </Link>
      <ProfessionalLinks />
    </nav>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const location = useLocation()
  const close = useCallback(() => setOpen(false), [])
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label={`${site.name} — home`}>
          {site.name}
          <span aria-hidden="true">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <Link
              key={id}
              to={`/#${id}`}
              aria-current={
                location.pathname === '/' && location.hash === `#${id}`
                  ? 'location'
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-secondary">
          <ProfessionalLinks />
        </div>
        <button
          ref={buttonRef}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        {open && <MobileMenu close={close} buttonRef={buttonRef} />}
      </div>
    </header>
  )
}
