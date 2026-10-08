import { readFile, writeFile } from 'node:fs/promises'
import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'node:process'
import { format } from 'prettier'
import { projects, projectTemplate } from '../src/data/projects.js'
import { safeWebUrl, safeAssetUrl } from '../src/utils/urlHelpers.js'

// Owner-side tool only: never imported by the browser or exposed as an endpoint.
const prompt = createInterface({ input: stdin, output: stdout })
async function required(label) {
  let value = ''
  while (!value) value = (await prompt.question(`${label}: `)).trim()
  return value
}
try {
  console.log(
    'Add a verified project. This edits your local project data; it does not publish to GitHub.',
  )
  const title = await required('Project title')
  const suggestedSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  const slug =
    (await prompt.question(`URL slug [${suggestedSlug}]: `)).trim() ||
    suggestedSlug
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new Error(
      'Use lowercase letters, numbers, and single hyphens for the slug.',
    )
  if (projects.some((project) => project.slug === slug))
    throw new Error(
      'A project already uses that slug. Edit the existing entry instead.',
    )
  const types = [
    'Solo Project',
    'Team Project',
    'Client Project',
    'Internship Project',
    'Concept Project',
    'University Project',
  ]
  console.log(types.map((type, index) => `${index + 1}. ${type}`).join('\n'))
  const projectType = types[Number(await required('Project type number')) - 1]
  if (!projectType) throw new Error('Choose a type from 1 to 6.')
  const summary = await required('What is the application?')
  const contribution = await required(
    projectType === 'Team Project'
      ? 'What did you personally contribute?'
      : 'What was your role?',
  )
  const rawLiveUrl = (
    await prompt.question('Verified live HTTPS URL (optional): ')
  ).trim()
  const liveUrl = safeWebUrl(rawLiveUrl)
  if (rawLiveUrl && !liveUrl)
    throw new Error('The live URL must be a valid HTTPS address.')
  const rawImage = (
    await prompt.question(
      'Actual screenshot path, e.g. /projects/your-slug/hero.webp (optional): ',
    )
  ).trim()
  const imageUrl = safeAssetUrl(rawImage)
  if (rawImage && !imageUrl)
    throw new Error('Use a root-relative screenshot path or HTTPS URL.')
  const alt = imageUrl
    ? await required('Describe what the screenshot shows')
    : ''
  const width = imageUrl
    ? Number(await required('Screenshot width in pixels'))
    : 0
  const height = imageUrl
    ? Number(await required('Screenshot height in pixels'))
    : 0
  if (
    imageUrl &&
    (!Number.isInteger(width) ||
      !Number.isInteger(height) ||
      width < 1 ||
      height < 1)
  )
    throw new Error('Screenshot dimensions must be positive whole numbers.')
  const featured =
    (await prompt.question('Feature on the homepage? [y/N]: '))
      .trim()
      .toLowerCase() === 'y'
  const published =
    (
      await prompt.question(
        'Are these facts verified and ready to publish? [y/N]: ',
      )
    )
      .trim()
      .toLowerCase() === 'y'
  const project = {
    ...projectTemplate,
    title,
    slug,
    projectType,
    summary,
    role: projectType === 'Team Project' ? '' : contribution,
    contribution: projectType === 'Team Project' ? contribution : '',
    liveUrl,
    status: liveUrl ? 'live' : 'demo-unavailable',
    featured,
    published,
    heroImage: imageUrl ? { src: imageUrl, alt, width, height } : null,
  }
  const target = new URL('../src/data/projects.js', import.meta.url)
  const source = await readFile(target, 'utf8')
  const updated = source.replace(
    /export const projects = [\s\S]*$/,
    `export const projects = ${JSON.stringify([...projects, project], null, 2)}\n`,
  )
  if (updated === source)
    throw new Error('Project data structure changed. No file was modified.')
  await writeFile(
    target,
    await format(updated, { parser: 'babel', singleQuote: true, semi: false }),
    'utf8',
  )
  console.log(
    'Project added. Check npm run dev, then lint, build, commit and push when ready.',
  )
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
} finally {
  prompt.close()
}
