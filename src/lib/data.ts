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
  { href: '#home' },
  { href: '#about' },
  { href: '#experience' },
  { href: '#projects' },
  { href: '#skills' },
  { href: '#contact' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Meltwater',
    duration: '2024 - Present',
    technologies: ['React', 'Next.js', 'Vue.js', 'Stencil.js', 'TypeScript', 'Jest', 'Redux', 'Zustand', 'Context API', 'Restful APIs', 'Material UI', 'Tailwind CSS', 'Turborepo', 'GitHub Actions', 'Github', 'Figma'],
  },
  {
    id: '2',
    company: 'EPAM Systems',
    duration: '2021 - 2024',
    technologies: ['React', 'Next.js', 'TypeScript', 'Figma', 'GraphQL', 'SCSS', 'Storybook', 'Webpack', 'Jest', 'Docker', 'Atlassian Suite', 'GitLab'],
  },
  {
    id: '3',
    company: 'Startup',
    duration: '2020 - 2021',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'SCSS', 'Express', 'MongoDB', 'Figma', 'GitLab', 'Bulma'],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'WebSocket'],
    githubUrl: 'https://github.com/cyberdev/neural-dashboard',
    liveUrl: 'https://neural.cyberdev.io',
    featured: true,
  },
  {
    id: '2',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
    githubUrl: 'https://github.com/cyberdev/cryptovault',
    liveUrl: 'https://vault.cyberdev.io',
    featured: true,
  },
  {
    id: '3',
    technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer'],
    githubUrl: 'https://github.com/cyberdev/devflow-cli',
    featured: true,
  },
  {
    id: '4',
    technologies: ['React', 'Canvas API', 'IndexedDB', 'Web Workers'],
    githubUrl: 'https://github.com/cyberdev/pixelforge',
    liveUrl: 'https://pixels.cyberdev.io',
    featured: false,
  },
  {
    id: '5',
    technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'CRDT'],
    githubUrl: 'https://github.com/cyberdev/streamsync',
    featured: false,
  },
  {
    id: '6',
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
