import test from 'node:test'
import assert from 'node:assert/strict'
import { publicProjects, projectLinks } from '../src/utils/projectHelpers.js'
import { safeWebUrl, safeAssetUrl, emailUrl } from '../src/utils/urlHelpers.js'
import { validateContact } from '../src/utils/contactHelpers.js'

test('only approved, complete case studies are published, ordered by priority', () => {
  const complete = {
    title: 'Verified project',
    slug: 'verified-project',
    projectType: 'Team Project',
    summary: 'Verified summary',
    contribution: 'Verified contribution',
    published: true,
  }
  const projects = [
    { ...complete, priority: 8 },
    { ...complete, slug: 'stronger', priority: 1 },
    { ...complete, published: false },
    { ...complete, contribution: '' },
  ]
  assert.deepEqual(
    publicProjects(projects).map((p) => p.slug),
    ['stronger', 'verified-project'],
  )
})
test('unsafe or unfinished URLs are hidden', () => {
  for (const value of [
    '',
    '#',
    'javascript:alert(1)',
    'http://example.com',
    'TODO',
    'https://user:password@example.com',
  ])
    assert.equal(safeWebUrl(value), '')
  assert.equal(
    safeWebUrl('https://example.com/work'),
    'https://example.com/work',
  )
  assert.equal(safeAssetUrl('/cv/ammar.pdf'), '/cv/ammar.pdf')
  assert.equal(safeAssetUrl('//example.com/cv.pdf'), '')
  assert.equal(emailUrl('not an email'), '')
  assert.equal(emailUrl('hello@example.com'), 'mailto:hello@example.com')
})
test('archived and unavailable projects never advertise a live application', () => {
  assert.deepEqual(
    projectLinks({
      status: 'archived',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/repo',
    }).map((l) => l.label),
    ['View GitHub'],
  )
  assert.equal(
    projectLinks({ status: 'demo-unavailable', liveUrl: 'https://example.com' })
      .length,
    0,
  )
})
test('contact validation gives actionable field errors', () => {
  assert.deepEqual(
    Object.keys(validateContact({ name: '', email: 'invalid', message: '' })),
    ['name', 'email', 'message'],
  )
  assert.deepEqual(
    validateContact({
      name: 'Visitor',
      email: 'visitor@example.com',
      message: 'I would like to discuss a web application.',
    }),
    {},
  )
})
