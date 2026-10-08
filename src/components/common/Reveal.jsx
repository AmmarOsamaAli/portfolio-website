import { useEffect, useRef } from 'react'

export default function Reveal({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return
    element.classList.add('reveal-ready')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}
