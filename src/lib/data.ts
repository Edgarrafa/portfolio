import { PersonalInfo, Experience, Project, Skill, NavItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'EDGAR_GALVAN',
  email: 'edgarrafa@gmail.com',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Edgarrafa',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/edgar-rafael-galvan-prado',
      icon: 'linkedin',
    },
  ],
  resumeUrl: '/Edgar_Galvan_Frontend_Developer.pdf',
};

export const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Meltwater',
    role: 'Software Engineer II',
    description: [
      'Developed large-scale data-driven web platforms for social media analytics and publishing.',
      'Built high-performance Vue.js applications with advanced data visualization at scale.',
      'Created reusable Web Components using Stencil.js across multiple teams and applications.',
      'Designed modular charting solutions standardizing data visualization across the organization.',
      'Implemented custom UI components in React 18/19 using Material UI for consistent design systems.',
      'Championed code quality through testing strategies and maintainability best practices.',
    ],
    duration: '2024 - 2026',
    technologies: ['React', 'Next.js', 'Vue.js', 'Stencil.js', 'TypeScript', 'Jest', 'Redux', 'Zustand', 'Context API', 'Restful APIs', 'Material UI', 'Tailwind CSS', 'Turborepo', 'GitHub Actions', 'Github', 'Figma'],
  },
  {
    id: '2',
    company: 'EPAM Systems',
    role: 'Software Engineer',
    description: [
      'Built scalable React component library serving multiple client projects.',
      'Created accessible TypeScript UI components ensuring consistency and maintainability.',
      'Implemented Jest testing and documentation with Storybook for developer adoption.',
      'Developed high-performance Next.js applications optimized for responsiveness and cross-browser compatibility.',
      'Integrated GraphQL APIs optimizing data flows and application performance.',
      'Designed shared utility libraries reducing duplication across projects.',
    ],
    duration: '2021 - 2024',
    technologies: ['React', 'Next.js', 'TypeScript', 'Figma', 'GraphQL', 'SCSS', 'Storybook', 'Webpack', 'Jest', 'Docker', 'Atlassian Suite', 'GitLab'],
  },
  {
    id: '3',
    company: 'Startup',
    role: 'Frontend Intern',
    description: [
      'Developed production Next.js applications with responsive UI and modern components.',
      'Collaborated in a fast-moving team mastering deployment and version control.',
      'Established strong foundations in component based design and frontend best practices.',
      'Gained early exposure to real-world product development and architecture.',
    ],
    duration: '2020 - 2021',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'SCSS', 'Express', 'MongoDB', 'Figma', 'GitLab', 'Bulma'],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'NeuralNet Dashboard',
    description: 'Real-time AI analytics dashboard with interactive visualizations and predictive modeling. Features WebSocket-based live data streaming and GPU-accelerated charts.',
    technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'WebSocket'],
    githubUrl: 'https://github.com/cyberdev/neural-dashboard',
    liveUrl: 'https://neural.cyberdev.io',
    featured: true,
  },
  {
    id: '2',
    title: 'CryptoVault',
    description: 'Secure cryptocurrency portfolio tracker with real-time market data, automated alerts, and portfolio optimization suggestions using machine learning.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
    githubUrl: 'https://github.com/cyberdev/cryptovault',
    liveUrl: 'https://vault.cyberdev.io',
    featured: true,
  },
  {
    id: '3',
    title: 'DevFlow CLI',
    description: 'Command-line tool for automating development workflows. Includes project scaffolding, git hooks management, and CI/CD configuration generation.',
    technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer'],
    githubUrl: 'https://github.com/cyberdev/devflow-cli',
    featured: true,
  },
  {
    id: '4',
    title: 'PixelForge',
    description: 'Browser-based pixel art editor with layer support, animation timeline, and export to various formats including sprite sheets.',
    technologies: ['React', 'Canvas API', 'IndexedDB', 'Web Workers'],
    githubUrl: 'https://github.com/cyberdev/pixelforge',
    liveUrl: 'https://pixels.cyberdev.io',
    featured: false,
  },
  {
    id: '5',
    title: 'StreamSync',
    description: 'Real-time collaborative document editing platform with conflict resolution and version history.',
    technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'CRDT'],
    githubUrl: 'https://github.com/cyberdev/streamsync',
    featured: false,
  },
  {
    id: '6',
    title: 'CloudDeploy',
    description: 'Infrastructure-as-code platform for managing multi-cloud deployments with visual pipeline builder.',
    technologies: ['Go', 'Terraform', 'Kubernetes', 'React'],
    githubUrl: 'https://github.com/cyberdev/clouddeploy',
    liveUrl: 'https://deploy.cyberdev.io',
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Sass', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'Zustand', category: 'frontend' },
  { name: 'React Query', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Jest', category: 'tools' },
];
