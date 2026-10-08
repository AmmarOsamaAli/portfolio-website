# Ammar — Personal Portfolio

React, JavaScript, Vite, React Router and custom CSS. A portfolio for client conversations and software engineering opportunities, with a centered video hero, selected-work slider, project case studies, separate About page, contact form and black footer.

## Run locally

Use Node.js 22.12+ and npm (Node 24 recommended).

```sh
npm ci
npm run dev
```

`npm run lint` checks with zero warnings allowed. `npm test` checks publication rules, safe URLs, project status and contact validation. `npm run format:check` checks formatting. `npm run build` creates `dist/`; `npm run preview` serves it locally.

## Private project management

Visitors have read-only access. There is no public editor or sign-up flow. Editing and publishing require write access to the existing GitHub repository. This avoids maintaining authentication and a backend for a small personal portfolio.

For guided additions, run:

```sh
npm run project:add
```

The command asks for a title, type, summary, personal contribution, live URL and screenshot. It edits `src/data/projects.js` locally; it does not publish automatically. Preview the result, run lint and build, then commit and push to `main`. You can also edit that data file directly through GitHub. Existing entries can be updated there without route changes.

Copy `projectTemplate` for manual additions. Required publication fields: `published: true`, unique lowercase hyphenated `slug`, `title`, `summary`, supported `projectType`, and `role` or personal `contribution`. `featured: true` includes a project in the homepage slider. Lower `priority` values appear first. Types include Solo, Team, Client, Internship, Concept, University and neutral Software Project. Team work visibly separates personal contribution.

Use actual screenshots in `public/projects/<slug>/`, with accurate dimensions and descriptive alt text:

```js
heroImage: { src: '/projects/example/hero.webp', alt: 'Actual visible interface', width: 1440, height: 950 }
```

Optional narrative fields include problem, audience, features, stack, decisions, challenges, solutions, outcome, learnings and engineering notes. Leave unverified information empty. Do not infer stack, ownership, metrics or dates. Draft entries remain unpublished; their routes display the custom 404. Archived or unavailable demos keep their case studies without a live-application link.

## Content and media

- `src/data/site.js`: identity, contact email, positioning, profile links, hero media and production domain.
- `src/data/about.js`: education, journey and working approach.
- `src/data/experience.js`: fellowship and optional verified skills.
- `src/data/projects.js`: all project content.
- `src/data/capabilities.js`: capability descriptions.
- `src/styles/tokens.css`: shared palette and spacing; `DESIGN.md` describes the design.

Education dates, GPA and General Assembly Middle East fellowship dates were supplied by Ammar. Quizly, GCC Talent and Evently use his supplied live links and real interface screenshots. The silent background video is a recording montage of those interfaces, not stock footage or invented client work. Video is monochrome and subdued behind the hero text; reduced-motion and data-saving preferences use the poster instead. A pause control is available.

University name, detailed individual project responsibilities, stacks, CV and professional profile links remain unspecified. Add verified details before displaying them. Optional links stay hidden while empty. To add a CV, supply the real PDF in `public/cv/` and configure `site.cvUrl`.

## Contact delivery

The form targets `ammarosama080@gmail.com` through FormSubmit AJAX. **Confirm FormSubmit's activation email after the first submission before relying on delivery.** Local browser checks use mocked responses and do not verify real email delivery. See https://formsubmit.co/ and https://formsubmit.co/ajax-documentation.

The form validates inline, prevents duplicate requests, includes a honeypot, times out after 15 seconds, retains text on failure and announces status accessibly. FormSubmit responses must explicitly report success. No form content is logged or stored locally. The third-party provider processes submissions under its own terms.

To use another provider, set the public HTTPS `VITE_CONTACT_FORM_ENDPOINT` in `.env.local` and hosting configuration. It must accept cross-origin JSON POST `{ name, email, message }` and return HTTP 2xx only for accepted submissions. Providers with different contracts require an adapter in `Contact.jsx`. Set `contactProvider` empty to disable the default provider; without an endpoint the form opens a prepared email draft instead, with truthful instructions to send it from the email app.

Vite environment values are public. Never include secrets or private API keys. Keep `.env.local` out of Git.

## Deployment

Use the existing configured `origin` repository and `main`; do not create a new repository. For Vercel, select Vite, install with `npm ci`, build with `npm run build` and serve `dist`. `vercel.json` supplies the SPA rewrite for direct route loads.

Set the real HTTPS production origin in `site.siteUrl` for canonical and Open Graph URLs. No invented domain is supplied. Verify direct loads of `/about`, `/projects` and `/projects/<slug>`, back/forward navigation, unknown routes, media and actual contact delivery. The static SPA shows its custom 404 after the host serves HTML with HTTP 200. Crawlers that do not execute JavaScript may see only the default metadata.

## Browser checks

Check 1440, 1200, 1024, 768, 430, 390 and 360px widths, keyboard navigation, visible focus, project slider boundaries, swipe/left-right keys, video pause, reduced motion, one H1 per route and no horizontal overflow or console errors. Check contact validation, provider failure, retained text, successful acceptance and duplicate-request prevention. Keep `node_modules`, `dist`, local environment files and generated QA artifacts out of Git.
