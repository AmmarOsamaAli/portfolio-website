# Ammar — Personal Portfolio

React, JavaScript, Vite, React Router and custom CSS. The homepage contains a plain black hero, practical descriptions of development services and a contact form. Projects and case studies have their own pages. There is no About page, header or footer navigation menu, visible email address, or homepage project showcase.

## Local development

Use Node.js 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

Run `npm run lint`, `npm test`, `npm run format:check` and `npm run build` before publishing. `npm run preview` serves the production build. Generated output stays in ignored `dist/`.

## Private project management

Visitors can only view projects. Publishing requires write access to the existing GitHub repository; no public editor, account registration or backend is included.

Run `npm run project:add` for guided local additions, or edit `src/data/projects.js` directly through GitHub. The command asks for verified content, contribution, URL and actual screenshot dimensions. It edits the data file without publishing. Preview, check, commit and push to `main` when ready.

Copy `projectTemplate` for manual additions. A public entry requires `published: true`, unique lowercase hyphenated slug, title, summary, supported project type and role or contribution. Lower priority numbers appear first. Draft entries are hidden and their routes show the custom 404. Team projects identify personal contribution. Do not infer stack, ownership, dates or results.

Actual optimized screenshots live in `public/projects/<slug>/`. Give each image descriptive alt text and accurate intrinsic dimensions. Quizly, GCC Talent and Evently use the live links supplied by Ammar and actual screenshots of those interfaces. Detailed responsibilities and technical narratives remain to be supplied.

## Content

`src/data/site.js` owns identity, positioning, contact destination and domain. The email is used only for form delivery and is not rendered as text or a link. A frontend delivery endpoint is publicly inspectable in browser code. `src/data/capabilities.js` owns plain-language service descriptions. `src/styles/tokens.css` owns shared colors and spacing; `src/styles/home.css` owns homepage composition. Supplied education and fellowship data remain in source for possible later use, but are not published.

## Contact form

The form sends to the configured address through FormSubmit AJAX. Confirm the provider activation email after the first submission before relying on delivery. Browser QA uses intercepted responses; actual email delivery has not been verified. Provider setup: https://formsubmit.co/ and https://formsubmit.co/ajax-documentation.

The form validates fields, blocks duplicate requests, uses a honeypot, times out after 15 seconds and retains text on failure. FormSubmit responses must explicitly report success. No message content is logged or stored locally. The provider processes submissions under its own terms.

An optional public HTTPS `VITE_CONTACT_FORM_ENDPOINT` overrides the provider. It must accept cross-origin JSON POST `{ name, email, message }` and return HTTP 2xx only for accepted requests. Different contracts require an adapter. Vite variables are public: never place secrets or private keys in them. Keep local environment files out of Git.

## Deployment and checks

Use the existing `origin` repository and `main`. For Vercel, use Vite, `npm ci`, `npm run build` and output `dist`. `vercel.json` supplies the SPA rewrite. Set `site.siteUrl` to the real HTTPS domain for canonical URLs.

Check responsive layouts, keyboard focus, reduced motion, direct project/case-study loads, unknown routes, no overflow and no console errors. Verify real contact delivery after activation. The static host returns HTML with HTTP 200 before the client shows its 404. Crawlers without JavaScript may see only default metadata. Keep credentials, environment files, dependencies, builds and QA artifacts out of Git.
