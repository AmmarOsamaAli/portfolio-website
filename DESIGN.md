---
version: alpha
name: Ammar portfolio
description: A project-led portfolio for a Bahrain-based software engineer.
colors:
  background: '#F4F2ED'
  surface: '#FAF9F6'
  primary: '#111111'
  secondary: '#62615D'
  border: '#D7D4CC'
  strong: '#B8B4AB'
  accent: '#2450FF'
  error: '#A32920'
  inverseError: '#FFB7B0'
typography:
  sans:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
rounded:
  DEFAULT: '2px'
spacing:
  section-gap: 'clamp(4rem, 7vw, 6.5rem)'
  page-max: '1240px'
components:
  button: {}
  input: {}
  projectPreview: {}
---

# Portfolio design

The latest user instructions govern composition: a plain black centered hero, separate project page, practical service descriptions, contact through the form and a black footer. No About route, background media, education strip, homepage projects, decorative section labels, navigation menus or visible email address.

The hero states what Ammar builds and provides View My Projects and Contact Me actions. Services describe a business website, an application idea and help with an existing product in ordinary language. Introductory text also welcomes engineering employment. The contact heading asks visitors to describe their needs. The footer contains only Ammar and copyright.

Real project screenshots appear on `/projects` and individual case studies. Keep personal contribution factual. There are no invented testimonials, metrics or credentials.

`src/styles/tokens.css` is the runtime source for black/off-white colors, typography and spacing. `src/styles/home.css` owns homepage composition. Major headings center; narrative text and input labels use readable alignment. Controls have visible focus. Columns stack at 760px and form pairs at 600px. Scroll reveals move 12px, never fully hide content, and are disabled for reduced motion.

Contact validates inline, retains text on failure and announces status. Delivery requires provider email activation. Project publishing requires repository write access. No secrets belong in frontend configuration.
