// Configuration is editable, but only deliberate HTTPS destinations are rendered.
export function safeWebUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return ''
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && !url.username && !url.password
      ? url.href
      : ''
  } catch {
    return ''
  }
}

export function safeAssetUrl(value) {
  if (typeof value !== 'string') return ''
  if (/^\/(?!\/)[\w./-]+$/.test(value) && !value.includes('..')) return value
  return safeWebUrl(value)
}

export function emailUrl(value) {
  return typeof value === 'string' &&
    /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(value)
    ? `mailto:${value}`
    : ''
}
