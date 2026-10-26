// Project facts and contribution scope supplied by Ammar. Team features are not
// claims of individual ownership. Only verified narratives are published.
export const projectTemplate = {
  slug: '',
  title: '',
  subtitle: '',
  year: '',
  projectType: '',
  category: '',
  published: false,
  featured: false,
  priority: 100,
  status: 'demo-unavailable',
  summary: '',
  problem: '',
  solution: '',
  audience: '',
  role: '',
  teamSize: null,
  contribution: '',
  contributions: [],
  proofEmphasis: '',
  features: [],
  proofPoints: [],
  stack: [],
  decisions: [],
  challenges: [],
  solutions: [],
  outcome: '',
  demonstrates: [],
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
    slug: 'quizly',
    title: 'Quizly',
    projectType: 'Team Project',
    teamSize: 2,
    category: 'Real-Time Full-Stack Application',
    priority: 10,
    published: true,
    featured: true,
    status: 'live',
    summary:
      'A real-time multiplayer quiz platform with room-based games, synchronized questions, live scores, and leaderboards.',
    problem:
      'A shared quiz needs more than a list of questions. Players need to join the same session, see the current question together, and receive scores as the game progresses.',
    solution:
      'The team built quiz and question management alongside multiplayer rooms. Players join with a room code and take part in a shared game session with synchronized progression and rankings.',
    audience:
      'Quiz creators, hosts, and players taking part in live multiplayer games.',
    role: 'Full-Stack Developer',
    contribution:
      'Contributed across the React frontend, REST API, authentication, and real-time multiplayer functionality in a two-developer team.',
    contributions: [
      'Worked on frontend development and REST APIs for quizzes, questions, users, and game sessions.',
      'Contributed to MongoDB integration, JWT authentication, and content-ownership controls.',
      'Worked on room logic, Socket.IO integration, and synchronized questions and gameplay.',
      'Contributed to live scoring and leaderboards.',
      'Debugged integration between frontend, backend, database, and real-time behavior.',
    ],
    proofEmphasis: 'Real-time systems',
    proofPoints: [
      'Synchronized gameplay',
      'Socket.IO',
      'JWT & ownership controls',
    ],
    features: [
      'Create, view, update, and delete quizzes, with questions associated with each quiz.',
      'Sign in to access protected actions, with ownership rules for modifying content.',
      'Join a multiplayer room using a room code.',
      'Answer synchronized questions in an active game session.',
      'Follow live scores and leaderboard rankings as gameplay progresses.',
    ],
    stack: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Socket.IO',
      'Git',
      'GitHub',
    ],
    engineering: [
      {
        title: 'Persistent content and active sessions',
        content:
          'Quizzes and questions represent reusable content. Game sessions represent an active multiplayer run, including the room, connected players, current question, and progression. Keeping those concepts distinct supports multiple people playing the same quiz together.',
      },
      {
        title: 'Real-time coordination',
        content:
          'The application combines REST APIs for stored application data with Socket.IO for shared gameplay updates. Room membership, the current question, submitted answers, scores, and progression need to stay aligned between connected clients.',
      },
      {
        title: 'Identity and ownership',
        content:
          'JWT authentication identifies signed-in users. Ownership authorization separately controls protected actions, including changes to content belonging to another user. Signing in does not grant permission to modify everything.',
      },
    ],
    outcome:
      'The team delivered a multiplayer quiz application with quiz management, authenticated actions, live rooms, scoring, and leaderboards. The deployed frontend is linked below.',
    demonstrates: [
      'Real-time communication and multiplayer state coordination.',
      'Full-stack integration across React, REST APIs, MongoDB, and authentication.',
      'Collaboration and debugging across a two-person codebase.',
    ],
    heroImage: {
      src: '/projects/quizly/hero.webp',
      alt: 'Quizly homepage with multiplayer play and a sample question interface.',
      width: 1440,
      height: 950,
    },
    liveUrl: 'https://quizlyfrontend.netlify.app/',
  },
  {
    ...projectTemplate,
    slug: 'gcc-talent',
    title: 'GCC Talent',
    projectType: 'Team Project',
    teamSize: 4,
    category: 'Full-Stack Marketplace',
    priority: 20,
    published: true,
    featured: true,
    status: 'live',
    summary:
      'A GCC freelance marketplace connecting jobs and proposals to contracts, milestone delivery, simulated escrow, and reviews.',
    problem:
      'Freelance work continues beyond a job listing. Clients and freelancers need to move through proposals, hiring, contracts, milestones, deliverables, payment states, and reviews without losing the relationships between them.',
    solution:
      'A four-developer team built a marketplace around that lifecycle. Client and freelancer roles have different actions, while related records connect hiring, delivery, simulated fund release, and reputation.',
    audience:
      'Clients and freelancers in the GCC, with role-aware marketplace functionality and administrative capabilities in the broader application.',
    role: 'Full-Stack Developer',
    contribution:
      'Collaborated on REST APIs, marketplace workflows, authentication, role-based authorization, and simulated payment-release logic in a four-developer team.',
    contributions: [
      'Collaborated on REST APIs and user/profile, job, and proposal functionality.',
      'Contributed to hiring, contract, milestone, deliverable, and review workflows.',
      'Worked on JWT authentication and role-based permission boundaries.',
      'Collaborated on the simulated wallet/escrow workflow and payment-release logic.',
      'Integrated and debugged connected marketplace workflows within the shared codebase.',
    ],
    proofEmphasis: 'Complex business workflows',
    proofPoints: [
      'Proposal-to-contract workflow',
      'Role-based access',
      'Simulated escrow',
    ],
    features: [
      'Create profiles, post and discover jobs, and submit or review proposals.',
      'Move from hiring into contracts with milestones and associated deliverables.',
      'Model fund allocation and release through a simulated wallet/escrow workflow.',
      'Support reviews and reputation within the freelance lifecycle.',
      'Provide different actions and permissions for marketplace roles.',
    ],
    stack: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Git',
      'GitHub',
    ],
    engineering: [
      {
        title: 'Related data and workflow states',
        content:
          'A proposal can lead to hiring and a contract. Contracts contain milestones, milestones connect to deliverables, and simulated payment state follows the delivery workflow. The system therefore coordinates related models and status transitions rather than treating each record as isolated CRUD.',
      },
      {
        title: 'Role-aware access',
        content:
          'Clients and freelancers use different views, actions, and workflows. JWT authentication identifies the user; role-based authorization controls which actions that user can perform.',
      },
      {
        title: 'Simulated wallet and escrow',
        content:
          'The wallet/escrow system models how funds move through milestone-based contracts and simulated payment release. It is a workflow simulation, not real payment processing or deployed financial infrastructure.',
      },
    ],
    outcome:
      'The team delivered a full-stack marketplace connecting proposals, contracts, milestone delivery, simulated payments, and reviews. A deployed application is available to inspect.',
    demonstrates: [
      'Business-process modeling across multiple related entities.',
      'Authentication and role-based authorization in a multi-user application.',
      'Integration and collaboration in a four-developer team.',
    ],
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
    slug: 'evently',
    title: 'Evently',
    projectType: 'Solo Project',
    category: 'Full-Stack Web Application',
    priority: 30,
    published: true,
    featured: true,
    status: 'live',
    summary:
      'A full-stack event-management application with event and invitation workflows, authenticated accounts, and role-based permissions.',
    problem:
      'Managing events involves more than storing dates and descriptions. Users need to manage invitations, sign in, and control who can perform protected actions.',
    solution:
      'I built a server-rendered application connecting event and invitation management to persistent data, authenticated sessions, and role-based authorization.',
    audience:
      'People creating and managing events and their related invitations.',
    role: 'Solo Full-Stack Developer',
    contribution:
      'Built independently from end to end: application structure, backend logic, database models, server-rendered views, authentication, and authorization.',
    contributions: [
      'Structured the application with routes, controllers, models, and views.',
      'Built event creation, viewing, editing, and deletion workflows.',
      'Implemented invitation creation and management with related attendee workflows.',
      'Connected MongoDB/Mongoose persistence to backend logic and EJS views.',
      'Implemented session-based authentication and role-based authorization for protected actions.',
      'Handled frontend/backend integration, debugging, and overall implementation independently.',
    ],
    proofEmphasis: 'End-to-end ownership',
    proofPoints: [
      'Built independently',
      'Sessions & role-based access',
      'MVC architecture',
    ],
    features: [
      'Create, view, edit, and delete events.',
      'Create and manage invitations and related attendee workflows.',
      'Sign in through authenticated user sessions.',
      'Restrict protected functionality according to roles and permissions.',
      'Persist application data and render pages on the server.',
    ],
    stack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'EJS',
      'JavaScript',
      'HTML',
      'Tailwind CSS',
      'Git',
      'GitHub',
    ],
    engineering: [
      {
        title: 'A complete request-to-view flow',
        content:
          'RESTful routes connect requests to controller logic. Controllers work with Mongoose models and MongoDB, then return a response or render an EJS view. I implemented that flow across the application rather than only one layer.',
      },
      {
        title: 'MVC-style separation',
        content:
          'Models represent application data, controllers handle application behavior, and EJS views present the interface. Express provides server-side routing, while MongoDB/Mongoose handles persistent storage.',
      },
      {
        title: 'Sessions and permissions',
        content:
          'Session-based authentication establishes the signed-in user. Role-based authorization separately controls access to protected actions. These checks serve different purposes: identifying a user does not grant unrestricted access.',
      },
    ],
    outcome:
      'An independently built and deployed application connecting event and invitation workflows, persistent storage, authentication, authorization, and server-rendered pages.',
    demonstrates: [
      'Independent ownership of a complete full-stack application.',
      'Backend fundamentals, database integration, and RESTful routing.',
      'Authentication, authorization, and MVC-style application structure.',
    ],
    heroImage: {
      src: '/projects/event-planner/hero.webp',
      alt: 'Evently homepage inviting visitors to discover events and create their own.',
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
    priority: 40,
  },
]
