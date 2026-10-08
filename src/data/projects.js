// Names and links supplied by Ammar; descriptions and screenshots checked against
// the publicly accessible interfaces. No stack or precise duties are inferred.
// TODO: Add detailed personal contributions, technical notes and verified results.
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
    published: true,
    featured: true,
    status: 'live',
    summary:
      'Find freelance services and job opportunities across the GCC in one marketplace.',
    problem:
      'Help clients discover relevant services and freelancers find work in the Gulf region.',
    audience: 'Freelancers and clients across the GCC.',
    role: 'Contributing developer',
    contribution:
      'Contributed to the development of GCC Talent as part of a team.',
    outcome:
      'A deployed application with a publicly accessible marketplace interface.',
    heroImage: {
      src: '/projects/gcc-talent/hero.webp',
      alt: 'GCC Talent homepage showing marketplace search and service categories.',
      width: 1440,
      height: 950,
    },
    liveUrl: 'https://gcc-talent.netlify.app/',
  },
  {
    ...projectTemplate,
    slug: 'quizly',
    title: 'Quizly',
    // TODO: Confirm solo/team context. This neutral label asserts neither.
    projectType: 'Software Project',
    priority: 10,
    published: true,
    featured: true,
    status: 'live',
    summary:
      'Create quizzes, invite others, and compete in live multiplayer games.',
    problem:
      'Give people a way to create quizzes, invite others, and play together.',
    audience: 'People creating quizzes and playing together.',
    role: 'Developer', // Ammar states he built this project; precise duties remain unsupplied.
    outcome: 'A deployed frontend available to explore publicly.',
    heroImage: {
      src: '/projects/quizly/hero.webp',
      alt: 'Quizly homepage with quiz creation, multiplayer play, and a sample question interface.',
      width: 1440,
      height: 950,
    },
    liveUrl: 'https://quizlyfrontend.netlify.app/',
  },
  {
    ...projectTemplate,
    slug: 'evently',
    title: 'Evently',
    // TODO: Confirm solo/team context and precise personal responsibilities.
    projectType: 'Software Project',
    priority: 30,
    published: true,
    featured: true,
    status: 'live',
    summary: 'Discover public events in Bahrain and create events of your own.',
    problem: 'Bring event discovery and event creation into one place.',
    audience: 'People discovering and organizing events in Bahrain.',
    role: 'Developer',
    outcome:
      'A deployed web application with a publicly accessible event-discovery homepage.',
    heroImage: {
      src: '/projects/event-planner/hero.webp',
      alt: 'Evently homepage inviting visitors to discover public events and create their own in Bahrain.',
      width: 1440,
      height: 950,
    },
    liveUrl: 'https://event-planner-web-app.onrender.com/',
  },
  {
    ...projectTemplate,
    slug: 'alsaeh-bh',
    title: 'Alsaeh.bh',
    projectType: 'Team Project',
    priority: 30,
  },
]
