import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const previousPath = useRef(null)
  const positions = useRef(new Map())
  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previousRestoration
    }
  }, [])
  useLayoutEffect(() => {
    const samePage = previousPath.current === location.pathname
    previousPath.current = location.pathname
    const main = document.getElementById('main-content')
    let target = main
    if (location.hash) {
      try {
        target =
          document.getElementById(decodeURIComponent(location.hash.slice(1))) ||
          main
      } catch {
        target = main
      }
    }
    target?.focus({ preventScroll: true })
    if (location.hash && target !== main) {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      target.scrollIntoView({
        behavior: samePage && !reducedMotion ? 'smooth' : 'instant',
        block: 'start',
      })
    } else {
      const position =
        navigationType === 'POP' ? positions.current.get(location.key) : null
      window.scrollTo({ top: position?.y ?? 0, left: 0, behavior: 'instant' })
    }
    function remember() {
      positions.current.set(location.key, { y: window.scrollY })
    }
    window.addEventListener('scroll', remember, { passive: true })
    return () => window.removeEventListener('scroll', remember)
  }, [location, navigationType])
  return null
}
