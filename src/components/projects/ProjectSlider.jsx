import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectMedia from './ProjectMedia.jsx'

export default function ProjectSlider({ projects }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  if (!projects.length)
    return (
      <div className="showcase-empty">
        <p>Case studies are being prepared.</p>
        <p>Detailed project walkthroughs will appear here.</p>
      </div>
    )
  function goTo(index) {
    const track = trackRef.current
    const slide = track.children[index]
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: reducedMotion ? 'instant' : 'smooth',
    })
  }
  function onScroll() {
    const track = trackRef.current
    const nearest = [...track.children].reduce(
      (best, slide, index) =>
        Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft) <
        best.distance
          ? {
              index,
              distance: Math.abs(
                slide.offsetLeft - track.offsetLeft - track.scrollLeft,
              ),
            }
          : best,
      { index: 0, distance: Infinity },
    )
    setActive(nearest.index)
  }
  return (
    <div
      className="project-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
    >
      <div
        className="project-track"
        ref={trackRef}
        onScroll={onScroll}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            goTo(Math.min(active + 1, projects.length - 1))
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            goTo(Math.max(active - 1, 0))
          }
        }}
      >
        {projects.map((project, index) => (
          <article
            className="project-slide"
            key={project.slug}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
            inert={index !== active}
          >
            <ProjectMedia image={project.heroImage} title={project.title} />
            <div className="slide-copy">
              <div>
                <p className="eyebrow">{project.projectType}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div>
                <p className="slide-contribution">
                  <strong>
                    {project.projectType === 'Team Project'
                      ? 'My contribution'
                      : 'My role'}
                  </strong>
                  <br />
                  {project.projectType === 'Team Project'
                    ? project.contribution
                    : project.role}
                </p>
                <Link className="button" to={`/projects/${project.slug}`}>
                  View Case Study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {projects.length > 1 && (
        <div className="slider-controls">
          <button
            type="button"
            className="slider-button"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            Previous
          </button>
          <p className="slider-position" role="status" aria-live="polite">
            {String(active + 1).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </p>
          <button
            type="button"
            className="slider-button"
            disabled={active === projects.length - 1}
            onClick={() => goTo(active + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
