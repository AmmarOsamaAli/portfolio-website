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

A professional portfolio for business owners, recruiters and engineering teams. The user's latest redesign instructions govern composition: retain black/off-white, center major headings, remove the top navigation and decorative arrows, use a background video, separate About from the homepage and finish with a black footer.

The hero centers identity, positioning and two direct actions over a monochrome montage recorded from the three supplied project interfaces. A dark overlay and slight blur preserve text contrast. The wordmark is the only header link. Selected work follows with real screenshots, concise project descriptions, contribution and case-study links. Native horizontal scrolling, snap alignment, Previous/Next controls and a position counter support touch and keyboard access. Three capability columns explain practical value; the contact form closes the homepage. Footer links provide Work, About Me and Contact destinations.

About has its own route, with the supplied degree, GPA, fellowship dates and a concise working approach. Project case studies retain reading measures and factual content. No invented testimonials, metrics, stock imagery or decorative schematic illustrations.

`src/styles/tokens.css` is the runtime token source. Shared colors remain #F4F2ED background, #FAF9F6 surface, #111111 primary, #62615D secondary, #D7D4CC border and #B8B4AB strong border. Blue #2450FF remains the existing interaction/focus accent; error colors are functional. Typography uses Helvetica Neue, Helvetica and Arial with no external fonts. Controls have a 2px radius. Content width is 1240px; sections use generous responsive spacing. Major headings center; narrative text and labels remain left-aligned for reading.

`src/styles/home.css` owns the hero, slider, centered headings, About and footer composition. Responsive columns stack at 760px, and form pairs stack at 600px. Native page scrolling is preserved. Focus is visibly outlined; route changes focus the main landmark or destination section. Scroll reveals move only 12px and never fully hide content. Reduced motion disables reveals and video playback. Data-saving preferences avoid loading the video. No carousel autoplay or animation framework.

Contact remains visible and validates inline, preserves entered content on failed delivery, prevents duplicate requests and announces status. Publishing projects requires repository write access; there is no visitor editing UI. Real delivery requires confirmation of the provider activation email. No secrets belong in frontend configuration.
