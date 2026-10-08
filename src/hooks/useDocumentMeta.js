import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { safeWebUrl } from '../utils/urlHelpers.js'

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }
  element.content = content
}

export function useDocumentMeta(title, description, noIndex = false) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    const origin = safeWebUrl(site.siteUrl)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (origin && !noIndex) {
      const url = new URL(pathname, origin).href
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = url
      setMeta('property', 'og:url', url)
    } else {
      canonical?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [title, description, pathname, noIndex])
}
