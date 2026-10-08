import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import { safeAssetUrl } from '../../utils/urlHelpers.js'

export default function Hero() {
  const videoRef = useRef(null)
  const [motionAllowed, setMotionAllowed] = useState(false)
  const [paused, setPaused] = useState(false)
  const videoUrl = safeAssetUrl(site.heroVideo)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () =>
      setMotionAllowed(!media.matches && !navigator.connection?.saveData)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (!motionAllowed || paused) video.pause()
    else
      video.play().catch(() => {
        /* Poster remains visible when autoplay is unavailable. */
      })
  }, [motionAllowed, paused])
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {videoUrl && (
        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          playsInline
          preload="none"
          poster={safeAssetUrl(site.heroPoster) || undefined}
          aria-hidden="true"
          tabIndex={-1}
        >
          {motionAllowed && <source src={videoUrl} type="video/webm" />}
        </video>
      )}
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content container">
        <p className="hero-identity">
          {site.identity}
          <span>Based in {site.location}</span>
        </p>
        <h1 id="hero-heading">{site.headline}</h1>
        <p className="hero-description">{site.description}</p>
        <div className="hero-actions">
          <Link className="button button-inverse" to="/#work">
            View My Work
          </Link>
          <Link className="button button-outline" to="/#contact">
            Contact Me
          </Link>
        </div>
        <Link className="hero-about-link" to="/about">
          Get to know me
        </Link>
      </div>
      {videoUrl && motionAllowed && (
        <button
          className="video-toggle"
          type="button"
          aria-label={
            paused ? 'Play background video' : 'Pause background video'
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? 'Play background' : 'Pause background'}
        </button>
      )}
    </section>
  )
}
