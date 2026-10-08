---
version: alpha
name: Ammar portfolio
description: An editorial body of work for a Bahrain-based software engineer.
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
  navigation: {}
  projectPreview: {}
---

# Ammar portfolio design

## Intent and register

A professional body of work for business owners, recruiters, and technical hiring managers. One identity: Software Engineer & Full-Stack Developer, based in Bahrain. This is an editorial portfolio/marketing surface, not an admin product. The supplied V1 specification is the design authority.

## Visual language

Left-aligned, broad typography with a narrow factual index beside the homepage thesis. The signature is the relationship between an explicit problem-solving headline and understated frontend-to-backend metadata. Work precedes explanations. Broad project rows carry imagery and contribution, never decorative cards. Rules separate ideas; whitespace establishes hierarchy. No gradients, invented screenshots, metrics, testimonials, stock photos, animation frameworks, or technology walls.

## Tokens and ownership

`src/styles/tokens.css` is the single runtime token source. Update this document and that file together for durable changes. Shared controls and all pages consume those variables directly; there is no generated token adapter.

| Role                              | Value   |
| --------------------------------- | ------- |
| Background                        | #F4F2ED |
| Surface                           | #FAF9F6 |
| Primary text / contact background | #111111 |
| Secondary text                    | #62615D |
| Border                            | #D7D4CC |
| Strong border / inverse secondary | #B8B4AB |
| Accent / focus                    | #2450FF |
| Error                             | #A32920 |
| Error on dark                     | #FFB7B0 |

Helvetica Neue, Helvetica, Arial, sans-serif throughout. Headline: 3–5.5rem, tighter tracking and restrained weight; section headings: 2–3.4rem; body: 1–1.125rem. Case study text has a 68ch reading measure. No external fonts.

Content width: 1240px; gutters: 24px–64px; section spacing: 64px–104px. Controls have a 2px radius, no shadows. Responsive navigation changes below 900px; project rows and case metadata stack at 760px; narrow homepage arrangements at 650px. Layout has natural document scrolling.

## Interaction and content

Native links navigate; native buttons act. Links underline or change emphasis on hover; focus has a visible 2px outline. Motion is limited to 180ms control transitions and 3px link-arrow displacement; reduced motion removes transitions. Mobile menu has keyboard cycling, Escape, link dismissal and scroll locking. Route changes focus the main landmark or destination section. Published projects are ordered by explicit priority and team work requires personal contribution. Empty optional datasets stay hidden. Contact form appears only with an HTTPS endpoint, preserves entered content on failure, validates inline, and announces request status. No secrets in frontend environment configuration.
