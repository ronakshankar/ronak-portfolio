import { Code, Cloud, Server, BarChart2, Zap, Shield } from 'lucide-react';

export const NAV_LINKS = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills'     },
  { id: 'projects',   label: 'Projects'   },
  { id: 'education',  label: 'Education'  },
];

export const STATS = [
  { value: '4+',    label: 'Years Experience' },
  { value: '120',   label: 'TPS in Production' },
  { value: '95%',   label: 'SonarQube Coverage' },
  { value: '100K+', label: 'App Downloads' },
];

export const EXPERIENCE = [
  {
    logo: 'Capital-one-Logo-1.png',
    role: 'Software Engineer',
    company: 'Capital One',
    location: 'McLean, VA',
    period: 'July 2022 – Present',
    color: 'indigo',
    bullets: [
      'Orchestrated microservices on ECS Fargate for customer data pipelines; built OAuth2-secured UI tools improving debugging efficiency by 30%.',
      'Engineered thread-safe Java components (AtomicReference, ConcurrentHashMap) for Spring Boot microservices, boosting transaction throughput by 25%.',
      'Developed atomic pointer-based Golang data structures for concurrent goroutine access using a unified schema.',
      'Designed an agentic Claude Code skill to autonomously triage Jira vulnerability tickets and generate reviewer-ready PRs, eliminating manual remediation across 4 production components.',
      'Led a real-time triaging dashboard across 3 engineering teams, cutting on-call investigation time from ~22 min to under 10 min per incident.',
      'Deployed a fault-tolerant Java AWS Lambda (SQS + DLQ → DynamoDB CRUD) handling 120+ TPS in production.',
      'Rearchitected a flag-based MVP into a fully routed React app (React Router), enabling deep-linking and shareable feature URLs.',
      'Raised SonarQube coverage from 74% → 95% using GitHub Copilot for test generation and refactoring.',
      'Performed West Coast migration during the AWS us-east-1 outage (Oct 2025), resolving a 100% failure rate with zero production impact on rollback.',
      'Resolved a Sev 3 incident via IAM policy roll-forward, dropping error rate from 86% → 0.5%.',
    ],
    tags: ['Java', 'Spring Boot', 'Golang', 'React.js', 'AWS', 'ECS Fargate', 'Lambda', 'DynamoDB', 'Jenkins', 'Splunk'],
  },
  {
    logo: 'WPI_logo.svg.png',
    role: 'Software Engineer (Research)',
    company: 'Worcester Polytechnic Institute',
    location: 'Worcester, MA',
    period: 'May 2021 – May 2022',
    color: 'red',
    bullets: [
      'Reduced pre-processing latency by 40% on a 1TB+ health sensor dataset by engineering a GPU-accelerated Feather-format data pipeline on Linux.',
      'Eliminated manual intervention across all training experiments by automating end-to-end ML workflows via shell scripts and YAML configuration.',
      'Improved classifier generalization by 15% over an imbalanced baseline by designing a synthetic data pipeline validated across 3 adapted GAN architectures.',
    ],
    tags: ['Python', 'PyTorch', 'Linux', 'Shell Scripting', 'GANs'],
  },
  {
    logo: 'market_simplified_logo.jpg',
    role: 'Software Engineer',
    company: 'Market Simplified India Ltd',
    location: 'Chennai, India',
    period: 'June 2019 – July 2020',
    color: 'emerald',
    bullets: [
      'Developed a React Native stock trading app with 100K+ downloads and 4+ app rating across iOS and Android.',
      'Reduced app bundle from 87MB → 35MB and cold-start time ~60% by migrating the JS runtime to the Hermes engine.',
      'Built a custom Pub/Sub data-sync module for 10,000+ DAUs, improving trading insight latency by 45%.',
      'Integrated 8+ REST APIs, reducing manual refresh requirements by 90% across all trading workflows.',
      'Resolved a production overheating issue across 100+ watchlists via a viewport-aware Pub/Sub system that recycled connections on scroll.',
    ],
    tags: ['React Native', 'Redux', 'React Navigation', 'JavaScript', 'Hermes', 'Azure Pipelines'],
  },
];

export const SKILLS = [
  {
    category: 'Languages & Frameworks',
    icon: <Code size={20} />,
    color: 'indigo',
    items: ['Java', 'Spring Boot', 'Golang', 'Python', 'JavaScript', 'React.js', 'React Native', 'Redux', 'REST APIs', 'Shell Scripting'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: <Cloud size={20} />,
    color: 'sky',
    items: ['AWS ECS Fargate', 'AWS Lambda', 'AWS SQS / DLQ', 'AWS S3', 'DynamoDB', 'CloudWatch', 'IAM', 'Route 53', 'GitHub Actions', 'Azure Pipelines'],
  },
  {
    category: 'Databases & Storage',
    icon: <Server size={20} />,
    color: 'violet',
    items: ['DynamoDB', 'SQL', 'NoSQL', 'Snowflake', 'Amazon S3', 'Firestore'],
  },
  {
    category: 'Observability & DevOps',
    icon: <BarChart2 size={20} />,
    color: 'emerald',
    items: ['Splunk', 'PagerDuty', 'Jenkins CI/CD', 'CloudWatch', 'Cucumber', 'JUnit 5', 'Claude Code', 'GitHub Copilot'],
  },
];

export const PROJECTS = [
  {
    title: 'Personal Expense Tracker',
    date: 'Aug 2024',
    icon: <Zap size={22} />,
    color: 'indigo',
    description:
      'A modular financial dashboard built with Angular, integrated with a Spring Boot + GraphQL backend. Replaced static JSON endpoints with JPA-backed REST APIs, cutting transaction response times by 40% and improving user insights by 80%.',
    tags: ['Angular', 'GraphQL', 'Spring Boot', 'Spring Data JPA'],
  },
  {
    title: 'Real-Time Inventory Management',
    date: 'Dec 2024',
    icon: <Shield size={22} />,
    color: 'emerald',
    description:
      'Serverless backend on Google Cloud Functions + Firestore delivering 99.9% real-time sync accuracy. Google Pub/Sub drives instant stock updates with inventory change latency under 250ms, improving response efficiency by 30%.',
    tags: ['Google Cloud Functions', 'Firestore', 'Pub/Sub', 'Serverless'],
  },
];

export const EDUCATION = [
  {
    logo: 'WPI_logo.svg.png',
    degree: "Master's in Data Science",
    school: 'Worcester Polytechnic Institute',
    location: 'Worcester, MA',
    period: 'Aug 2020 – May 2022',
  },
  {
    logo: 'Anna_university_logo.jpeg',
    degree: "Bachelor's in Information Technology",
    school: 'Anna University',
    location: 'Chennai, India',
    period: 'Aug 2015 – May 2019',
  },
];

export const ACCENT = {
  indigo: {
    dot:    'bg-indigo-600',
    border: 'border-indigo-200',
    ring:   'ring-indigo-600/20',
    text:   'text-indigo-600',
    badge:  'bg-indigo-50 text-indigo-700',
    icon:   'bg-indigo-50 text-indigo-600',
    tag:    'bg-indigo-900/40 text-indigo-300',
  },
  red: {
    dot:    'bg-red-600',
    border: 'border-red-200',
    ring:   'ring-red-600/20',
    text:   'text-red-600',
    badge:  'bg-red-50 text-red-700',
    icon:   'bg-red-50 text-red-600',
    tag:    'bg-red-900/40 text-red-300',
  },
  emerald: {
    dot:    'bg-emerald-600',
    border: 'border-emerald-200',
    ring:   'ring-emerald-600/20',
    text:   'text-emerald-600',
    badge:  'bg-emerald-50 text-emerald-700',
    icon:   'bg-emerald-50 text-emerald-600',
    tag:    'bg-emerald-900/40 text-emerald-300',
  },
  sky: {
    dot:    'bg-sky-600',
    border: 'border-sky-200',
    ring:   'ring-sky-600/20',
    text:   'text-sky-600',
    badge:  'bg-sky-50 text-sky-700',
    icon:   'bg-sky-50 text-sky-600',
    tag:    'bg-sky-900/40 text-sky-300',
  },
  violet: {
    dot:    'bg-violet-600',
    border: 'border-violet-200',
    ring:   'ring-violet-600/20',
    text:   'text-violet-600',
    badge:  'bg-violet-50 text-violet-700',
    icon:   'bg-violet-50 text-violet-600',
    tag:    'bg-violet-900/40 text-violet-300',
  },
};
