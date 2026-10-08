# Ammar — Personal Portfolio V1

A frontend portfolio for freelance software conversations and software engineering opportunities, using one professional identity. Built with React, JavaScript, Vite, React Router, semantic HTML and custom CSS. No backend, CMS, authentication or animation framework.

## Local setup

Use Node.js 22.12+ (Node 24 recommended) and npm.

```sh
npm install
npm run dev
```

The local URL is printed by Vite. For reproducible installs after cloning, use `npm ci` with the committed lockfile.

| Command                | Purpose                                                                    |
| ---------------------- | -------------------------------------------------------------------------- |
| `npm run dev`          | Local development with hot reload                                          |
| `npm run lint`         | ESLint, including React hook rules; zero warnings allowed                  |
| `npm test`             | Content publication, URL safety, project status and form validation checks |
| `npm run format:check` | Check consistent source formatting                                         |
| `npm run format`       | Format editable project files                                              |
| `npm run build`        | Production output in `dist/`                                               |
| `npm run preview`      | Serve the production build locally                                         |

## Structure

```text
src/
  app/          Shared route tree and page shell
  components/   Layout, common links, project presentation, contact
  data/         Identity, projects, capabilities, process, experience
  hooks/        Route-specific document metadata
  pages/        Homepage, work index, dynamic case study, 404
  styles/       Tokens, reset, layout, projects, contact
  utils/        Publication rules, URL safety, form validation
public/
  projects/     Real optimized project media
  cv/           Real CV file when available
tests/          Content and behavior regression checks
```

`DESIGN.md` describes the visual system and its mapping to CSS tokens.

## Content integrity and launch checklist

The supplied brief provides positioning and possible project names, but no verified detailed project narratives, screenshots, employment, education, contact address, CV, or public profile links. Those values are intentionally absent. There are no invented clients, results or credentials.

Before public launch:

1. Add contact methods in `src/data/site.js`, or configure the contact endpoint.
2. Add verified case studies and actual screenshots in `src/data/projects.js`.
3. Add factual experience and credibility items if available.
4. Supply the real CV and profile links if wanted.
5. Set the real HTTPS domain in `site.siteUrl`.
6. Run lint, tests, build and the browser checks below.

Until then, the homepage and work index display a quiet work-in-preparation message. Draft project URLs show the custom 404. Experience, credibility, technical skills, social links and CV stay hidden while absent. Navigation omits Experience until entries are supplied. The stable IDs `work`, `capabilities`, `process`, `about` and `contact` exist; `experience` appears when its content is configured. The application is functional, but proof of work and an actual way to reach Ammar require this factual content.

## Editing site content

- `src/data/site.js`: identity, Bahrain context, positioning, about, credibility and links.
- `src/data/capabilities.js`: capabilities and process. Add only supported capabilities.
- `src/data/experience.js`: verified experience entries and optional skill groups. Each experience object supports `organization`, `role`, `period`, `location`, `responsibility`, `contribution`.
- `src/data/projects.js`: all project content. Components never duplicate project text.

Use empty strings, empty arrays or `null` for unprovided values; keep TODO comments in source, not public copy. Optional links are rendered only with valid HTTPS URLs, validated email, or a root-relative asset URL. Check destinations manually before publishing. All external links open in the current tab. A root-relative CV URL renders only when configured; ensure the file exists.

## Adding a project

Copy `projectTemplate`, give it a unique lowercase hyphenated `slug`, and add it to `projects`. No route changes are required. Do not include Letterpress as Ammar’s work.

To appear publicly, an entry must have `published: true`, `title`, `slug`, `summary`, a supported `projectType`, and a verified `role` (or `contribution` for a Team Project). Mark `featured: true` for the homepage, which displays up to four entries. Lower `priority` numbers appear first; rank strongest client work, solo work, then collaborative work based on actual evidence, rather than year.

Supported types: Solo Project, Team Project, Client Project, Internship Project, Concept Project, University Project. Restaurant work that is not commissioned should use Concept Project. Team projects visibly display **My contribution**.

Other supported fields: `subtitle`, `year`, `status`, `problem`, `audience`, `teamSize`, `features`, `proofPoints`, `stack`, `decisions`, `challenges`, `solutions`, `outcome`, `commercialMetrics`, `learnings`, `engineering`, `heroImage`, `screenshots`, `liveUrl`, `githubUrl`, `demoUrl`. Narrative values are strings; lists are arrays of strings. Engineering entries use `{ title, content }`, where content is a string or string array (Architecture, Data Model, API Design, Authentication / Authorization, Integrations, Deployment, Security / Performance).

`commercialMetrics` are displayed only for concept work as proposed production measurements, never achieved results. Use `outcome` solely for verified delivery or results. Do not infer stack, ownership, dates, team sizes or impact.

Statuses: `live`, `archived`, `demo-unavailable`. Only `live` renders a live-application URL; archived/unavailable projects retain case studies and any real GitHub/demo links. Review external availability manually; no automatic network checks or invented URLs are used.

## Adding screenshots

Place actual optimized WebP screenshots in `public/projects/<slug>/`. Use `hero.webp`, `screen-01.webp`, and so on. Media objects have:

```js
{ src: '/projects/your-slug/hero.webp', alt: 'Describe the actual visible interface', width: 1600, height: 1000, caption: '' }
```

Set `heroImage` to one media object and `screenshots` to an array. Optional `srcSet` supports responsive image variants (supply real root-relative asset paths and width descriptors). Use accurate intrinsic dimensions to reserve space. Below-the-fold images load lazily; the case-study hero loads eagerly. If no image is supplied, the case study uses a neutral frame labelled “Project imagery forthcoming.” Never generate fake screenshots.

## Contact form

Copy `.env.example` to `.env.local` and set `VITE_CONTACT_FORM_ENDPOINT` to a public HTTPS third-party endpoint. If it is empty or invalid, the form is hidden. Configure email, LinkedIn or WhatsApp in `site.js` for direct contact. Without either, the page displays a short contact-in-preparation message.

The endpoint must accept a cross-origin JSON `POST` with `{ name, email, message }`, support the necessary CORS/preflight headers, and return HTTP 2xx only when submission has been accepted. Test your provider’s documented contract; providers requiring other field names, form encoding, or response semantics need an adapter in `Contact.jsx`. There is no fake success response. Configure provider-side abuse protection in addition to the local honeypot. Requests time out after 15 seconds. Failed submissions retain entered values; status is announced to assistive technology. No form content is logged or stored locally.

Vite variables are public and compiled into the frontend. Never add API secrets, credentials or private keys. Set the same public endpoint in Vercel’s environment variables and redeploy. No analytics, cookie tracking or separate backend is included.

## CV

Put the actual PDF in `public/cv/ammar-cv.pdf`, then set `site.cvUrl` to `/cv/ammar-cv.pdf`. The link is otherwise hidden. No placeholder CV is included.

## Deployment to the existing repository and Vercel

1. Push the finished project to the existing configured GitHub repository (`origin`), on `main`. Do not create a new repository.
2. Import that repository into Vercel and select the Vite preset.
3. Build command: `npm run build`. Output directory: `dist`. Install command: `npm ci`. Select a compatible Node version.
4. Configure `VITE_CONTACT_FORM_ENDPOINT` only if using the form; it must be public.
5. Deploy. `vercel.json` supplies the SPA rewrite recommended in the [Vercel Vite documentation](https://vercel.com/docs/frameworks/frontend/vite), so direct client-route requests resolve to the app.
6. Connect the real custom domain in Vercel, follow its DNS instructions, and set `site.siteUrl` to that HTTPS origin. Redeploy. Canonical URLs and Open Graph URLs derive from this single setting; without it, they are omitted. No fake domain or sitemap is generated. `robots.txt` allows crawling, and unknown/draft routes set `noindex` in client metadata.
7. Verify HTTPS, the preferred-domain redirect, homepage and asset delivery.
8. Directly load and refresh `/projects` and a published `/projects/<slug>`. Check an unknown route and unknown project slug for the custom 404. Because this is a frontend SPA, the host serves its HTML with HTTP 200 before the client displays the 404; a server-generated 404 status is outside this static architecture.
9. Test cross-route anchor links (for example `/projects` → `/#capabilities`), browser back/forward, CV download and actual contact delivery.

Client metadata is updated on navigation; preview crawlers that do not execute JavaScript may only see the default HTML title and description. Server rendering is deliberately not part of this V1 stack.

## Browser acceptance checks

Check widths 1440, 1200, 1024, 768, 430, 390 and 360px, including 200% zoom: no overflow, readable case-study text, stacked media/metadata and usable controls. Keyboard-test the skip link, visible focus, mobile menu open/close, focus cycling, Escape, link dismissal and restored body scrolling. Test reduced motion. Confirm one H1 per route, logical headings, image alt text, no console errors and no broken media requests.

With a configured endpoint, test blank fields, invalid email, successful delivery, provider failure, network failure and duplicate submission prevention. With a published project, verify ownership, status-dependent links, narrative sections, engineering notes and media. Keep actual credentials, local environment files, `node_modules`, build output and generated testing artifacts out of Git.
