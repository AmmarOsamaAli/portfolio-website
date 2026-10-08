import { useEffect, useRef, useState } from 'react'
import { site } from '../../data/site.js'
import { emailUrl, safeWebUrl } from '../../utils/urlHelpers.js'
import { validateContact } from '../../utils/contactHelpers.js'

function ContactForm({ endpoint, email }) {
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
    if (!endpoint) {
      if (!email) return
      const subject = encodeURIComponent(
        `Portfolio enquiry from ${values.name.trim()}`,
      )
      const body = encodeURIComponent(
        `${values.message.trim()}\n\nFrom: ${values.name.trim()}\nReply to: ${values.email.trim()}`,
      )
      window.location.href = `${email}?subject=${subject}&body=${body}`
      setStatus('email')
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
      if (new URL(endpoint).hostname === 'formsubmit.co') {
        const result = await response.json()
        if (result.success !== true && result.success !== 'true')
          throw new Error('Contact provider did not accept the message')
      }
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
          disabled={status === 'submitting' || (!endpoint && !email)}
          type="submit"
        >
          {status === 'submitting'
            ? 'Sending…'
            : endpoint
              ? 'Send Message'
              : 'Open Email Draft'}
        </button>
        <div className="form-status" role="status" aria-live="polite">
          {status === 'success' &&
            'Your message has been submitted. Thank you for getting in touch.'}
          {status === 'email' &&
            'Your email app will open with your message. Send it there to contact me.'}
          {status === 'error' &&
            'Your message could not be sent. Please try again in a moment. Your message is still here.'}
        </div>
      </div>
      {!endpoint && email && (
        <p className="delivery-notice">
          Opens your email app with a prepared message. You review and send it
          there.
        </p>
      )}
      {!endpoint && !email && (
        <p className="delivery-notice">
          Message delivery is being configured. Please check back shortly.
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  const endpoint =
    safeWebUrl(site.contactEndpoint) ||
    (site.contactProvider === 'formsubmit' && emailUrl(site.email)
      ? `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`
      : '')
  return (
    <section
      className="contact-section"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact-heading centered-heading">
          <h2 id="contact-heading">Let’s talk.</h2>
        </div>
        <div className="contact-content">
          <p>
            Start a conversation. Share what you have in mind, and I’ll get back
            to you.
          </p>
        </div>
        <ContactForm endpoint={endpoint} email={emailUrl(site.email)} />
      </div>
    </section>
  )
}
