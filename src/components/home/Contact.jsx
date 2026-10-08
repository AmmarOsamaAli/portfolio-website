import { useEffect, useRef, useState } from 'react'
import { site } from '../../data/site.js'
import { emailUrl, safeWebUrl } from '../../utils/urlHelpers.js'
import { validateContact } from '../../utils/contactHelpers.js'
import { ProfessionalLinks } from '../common/Links.jsx'

function ContactForm({ endpoint }) {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const controllerRef = useRef(null)
  const submittingRef = useRef(false)
  useEffect(() => () => controllerRef.current?.abort(), [])

  async function submit(event) {
    event.preventDefault()
    if (submittingRef.current) return
    const form = event.currentTarget
    const data = new FormData(form)
    const values = Object.fromEntries(data)
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('idle')
      form.elements.namedItem(Object.keys(nextErrors)[0]).focus()
      return
    }
    // Quietly discard honeypot submissions; never send form content to logs.
    if (values.website) {
      setStatus('success')
      form.reset()
      return
    }
    submittingRef.current = true
    setStatus('submitting')
    const controller = new AbortController()
    controllerRef.current = controller
    const timeout = window.setTimeout(() => controller.abort(), 15000)
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
        signal: controller.signal,
      })
      if (!response.ok) throw new Error('Contact request failed')
      setStatus('success')
      form.reset()
    } catch {
      if (controllerRef.current === controller) setStatus('error')
    } finally {
      window.clearTimeout(timeout)
      submittingRef.current = false
      controllerRef.current = null
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={submit}
      noValidate
      aria-label="Contact Ammar"
      aria-busy={status === 'submitting'}
    >
      <div className="form-pair">
        {[
          ['name', 'Name', 'text', 'name'],
          ['email', 'Email', 'email', 'email'],
        ].map(([name, label, type, autoComplete]) => (
          <div className="field" key={name}>
            <label htmlFor={`contact-${name}`}>{label}</label>
            <input
              id={`contact-${name}`}
              name={name}
              type={type}
              autoComplete={autoComplete}
              required
              disabled={status === 'submitting'}
              maxLength={name === 'name' ? 120 : 254}
              aria-invalid={Boolean(errors[name])}
              aria-describedby={errors[name] ? `${name}-error` : undefined}
            />
            <p className="field-error" id={`${name}-error`}>
              {errors[name] || '\u00a0'}
            </p>
          </div>
        ))}
      </div>
      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          className="contact-textarea-resize-none"
          id="contact-message"
          name="message"
          rows={6}
          required
          disabled={status === 'submitting'}
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onInput={(event) => {
            event.currentTarget.style.height = 'auto'
            event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`
          }}
        />
        <p id="message-error" className="field-error">
          {errors.message || '\u00a0'}
        </p>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="form-bottom">
        <button
          className="button button-inverse"
          disabled={status === 'submitting'}
          type="submit"
        >
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
          <span aria-hidden="true">↗</span>
        </button>
        <div className="form-status" role="status" aria-live="polite">
          {status === 'success' &&
            'Your message has been sent. Thank you for getting in touch.'}
          {status === 'error' &&
            'Your message could not be sent. Please try again in a moment. Your message is still here.'}
        </div>
      </div>
    </form>
  )
}

export default function Contact() {
  const endpoint = safeWebUrl(site.contactEndpoint)
  const hasMethods =
    emailUrl(site.email) ||
    safeWebUrl(site.linkedinUrl) ||
    safeWebUrl(site.whatsappUrl)
  return (
    <section
      className="contact-section"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact-heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">
            Let’s build
            <br />
            something useful.
          </h2>
        </div>
        <div className="contact-content">
          <p>
            If you have a project, product, or software role where my experience
            could be useful, I’d be happy to hear about it.
          </p>
          {emailUrl(site.email) && (
            <a className="button button-inverse" href={emailUrl(site.email)}>
              Contact Me<span aria-hidden="true">↗</span>
            </a>
          )}
          <ProfessionalLinks contact />
          {!hasMethods && !endpoint && (
            <p className="contact-pending">
              Contact details will be published here soon.
            </p>
          )}
        </div>
        {endpoint && <ContactForm endpoint={endpoint} />}
      </div>
    </section>
  )
}
