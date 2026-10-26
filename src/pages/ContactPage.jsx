import Contact from '../components/home/Contact.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'

export default function ContactPage() {
  useDocumentMeta(
    'Contact Ammar',
    'Get in touch with Ammar about freelance work, employment, or a collaboration.',
  )
  return <Contact headingLevel="h1" />
}
