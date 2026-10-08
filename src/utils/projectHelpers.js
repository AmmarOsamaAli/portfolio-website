import { safeWebUrl } from './urlHelpers.js'

const projectTypes = [
  'Solo Project',
  'Team Project',
  'Client Project',
  'Internship Project',
  'Concept Project',
  'University Project',
]

export function publicProjects(projects) {
  return projects
    .filter(
      (project) =>
        project.published === true &&
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug) &&
        project.title?.trim() &&
        project.summary?.trim() &&
        projectTypes.includes(project.projectType) &&
        (project.projectType === 'Team Project'
          ? project.contribution?.trim()
          : project.role?.trim()),
    )
    .sort((a, b) => (a.priority ?? 100) - (b.priority ?? 100))
}

export function projectLinks(project) {
  return [
    {
      label: 'View Live Application',
      url: project.status === 'live' ? project.liveUrl : '',
    },
    { label: 'View GitHub', url: project.githubUrl },
    { label: 'View Demo', url: project.demoUrl },
  ]
    .map((link) => ({ ...link, url: safeWebUrl(link.url) }))
    .filter((link) => link.url)
}
