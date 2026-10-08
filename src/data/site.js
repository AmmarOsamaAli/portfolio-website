export const site = {
  name: 'Ammar',
  identity: 'Software Engineer & Full-Stack Developer',
  location: 'Bahrain',
  headline: 'I build websites and web applications.',
  description:
    'I’m Ammar, a software developer. I help businesses build online and turn ideas into working applications.',
  // TODO: Add verified contact/professional URLs. The repository owner is not
  // automatically assumed to be a public contact profile.
  email: 'ammarosama080@gmail.com',
  linkedinUrl: '',
  githubUrl: '',
  whatsappUrl: '',
  cvUrl: '', // TODO: Add /cv/ammar-cv.pdf only after supplying the real file.
  siteUrl: '', // TODO: Set the real HTTPS production origin here, once.
  contactEndpoint: import.meta.env?.VITE_CONTACT_FORM_ENDPOINT ?? '',
  contactProvider: 'formsubmit', // Email confirmation is required by the provider.
  // Education and training supplied by Ammar; no inferred credentials.
  credibility: [
    'Bachelor’s in Software Engineering · 2022–2026',
    'General Assembly Middle East · Software Engineering Bootcamp Fellow',
  ],
  about:
    'I’m Ammar, a Software Engineer & Full-Stack Developer based in Bahrain. My focus is useful web products: understanding the problem, making sensible technical decisions, and building across the frontend and backend.',
}
