import { safeAssetUrl, emailUrl } from '../../utils/urlHelpers.js'

export function ExternalLink({ href, children, className = '' }) {
  const url = safeAssetUrl(href) || emailUrl(href)
  if (!url) return null
  return (
    <a className={className} href={url}>
      {children}
    </a>
  )
}
