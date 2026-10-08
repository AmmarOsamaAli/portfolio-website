// These are source-content slots, not assertions that the projects are complete.
// TODO: Supply verified narratives, personal contributions, stack and real media.
// Set published: true only after review. Incomplete entries never appear publicly.
export const projectTemplate = {
  slug: '',
  title: '',
  subtitle: '',
  year: '',
  projectType: '',
  published: false,
  featured: false,
  priority: 100,
  status: 'demo-unavailable',
  summary: '',
  problem: '',
  audience: '',
  role: '',
  teamSize: null,
  contribution: '',
  features: [],
  proofPoints: [],
  stack: [],
  decisions: [],
  challenges: [],
  solutions: [],
  outcome: '',
  commercialMetrics: [],
  learnings: [],
  engineering: [],
  screenshots: [],
  heroImage: null,
  liveUrl: '',
  githubUrl: '',
  demoUrl: '',
}

export const projects = [
  {
    ...projectTemplate,
    slug: 'restaurant-concept',
    title: 'Restaurant concept',
    projectType: 'Concept Project',
    priority: 10,
  },
  {
    ...projectTemplate,
    slug: 'gcc-talent',
    title: 'GCC Talent',
    projectType: 'Team Project',
    priority: 20,
  },
  {
    ...projectTemplate,
    slug: 'alsaeh-bh',
    title: 'Alsaeh.bh',
    projectType: 'Team Project',
    priority: 30,
  },
]
