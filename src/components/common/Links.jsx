import { site } from '../../data/site.js'
import { safeWebUrl, safeAssetUrl, emailUrl } from '../../utils/urlHelpers.js'

export function ExternalLink({ href, children, className = '' }) {
  const url = safeAssetUrl(href) || emailUrl(href)
  if (!url) return null
  return (
    <a className={className} href={url}>
      {children}
    </a>
  )
}

export function ProfessionalLinks({ contact = false, includeEmail = false }) {
  const links = contact
    ? [
        ['Email', emailUrl(site.email)],
        ['LinkedIn', safeWebUrl(site.linkedinUrl)],
        ['WhatsApp', safeWebUrl(site.whatsappUrl)],
      ]
    : [
        ['GitHub', safeWebUrl(site.githubUrl)],
        ['LinkedIn', safeWebUrl(site.linkedinUrl)],
        ['CV', safeAssetUrl(site.cvUrl)],
        ...(includeEmail ? [['Email', emailUrl(site.email)]] : []),
      ]
  return (
    <div className="professional-links">
      {links
        .filter(([, url]) => url)
        .map(([label, url]) => (
          <a key={label} href={url}>
            {label}
          </a>
        ))}
    </div>
  )
}
