import { safeAssetUrl } from '../../utils/urlHelpers.js'

export default function ProjectMedia({ image, title, eager = false }) {
  const src = safeAssetUrl(image?.src)
  // TODO: Supply real screenshots. Never substitute invented product imagery.
  if (!src || !image.alt)
    return (
      <div className="media-placeholder">
        <span>{title}</span>
        <p>Project imagery forthcoming</p>
      </div>
    )
  return (
    <figure className="project-media">
      <img
        src={src}
        alt={image.alt}
        width={image.width || 1600}
        height={image.height || 1000}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        {...(image.srcSet
          ? { srcSet: image.srcSet, sizes: '(max-width: 760px) 100vw, 60vw' }
          : {})}
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}
