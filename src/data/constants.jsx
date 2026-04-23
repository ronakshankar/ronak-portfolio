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
    role: 'Senior Software Engineer',
    company: 'Capital One',
    location: 'McLean, VA',
    period: 'July 2022 – Present',
    color: 'indigo',
    bullets: [
      'Cut per-incident triage time by 55% across 3 engineering teams, from 22 minutes to under 10, by building a React Flow visualizer over S3-backed execution traces.',
      'Restored service health from 86% to 0.5% error rate on a 1,000+ RPS platform during on-call production support, identifying an IAM misconfiguration and executing a roll-forward deployment.',
      'Scaled transaction throughput 25% across 6 services, from 800 to 1,000+ RPS, by engineering thread-safe Java components using AtomicReference and ConcurrentHashMap.',
      'Sustained zero message loss across 10M+ test events at 120+ TPS by deploying an SQS and DLQ-backed Lambda pipeline for DynamoDB CRUD ID operations.',
      'Eliminated 1,000+ daily duplicate executions across production microservices by implementing a Spring Data JPA deduplication layer validated against AWS RDS PostgreSQL.',
      'Reduced compliance overhead from 2 sprint points to half a day by engineering a Claude Code skill that clones flagged repos, remediates violations and generates reviewer-ready PRs from a single Jira ticket ID.',
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
      'Built a React Native stock trading app serving 10,000+ daily active users across iOS and Android, with real-time data streaming and secure transaction handling.',
      'Cut active WebSocket connections by 70% across 100+ stock watchlists by engineering a viewport-aware Pub/Sub system that eliminated redundant stream overhead on idle views.',
      'Reduced app cold start time by 60% and bundle size from 87MB to 35MB across iOS and Android by migrating the JavaScript runtime from the default engine to Hermes.',
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
    title: 'Distributed Job Orchestrator',
    date: 'Jan 2025',
    icon: <Zap size={22} />,
    color: 'indigo',
    repo: 'https://github.com/ronakshankar/distributed-job-orchestrator',
    description:
      'A distributed job orchestration platform in Java 17 and Spring Boot 3, supporting configurable thread pools up to 20 concurrent workers and REST-based management. Captures immutable per-attempt execution records including duration, stack traces, and thread names via transparent Spring AOP auditing — without modifying worker code.',
    tags: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Spring AOP', 'Testcontainers'],
  },
  {
    title: 'WireTunnel',
    date: 'Mar 2025',
    icon: <Shield size={22} />,
    color: 'emerald',
    repo: 'https://github.com/ronakshankar/goproxy-tunnel',
    description:
      'A high-performance WebSocket-to-TCP protocol proxy in Go using Goroutine pairs per connection, sustaining 2.5GB/hr throughput across 10,000+ simultaneous connections without thread contention. Features a non-blocking observability pipeline using io.Pipe and a Worker Pool to compress and persist traffic metadata, saving 4GB of disk storage daily with zero measurable latency impact.',
    tags: ['Go', 'WebSocket', 'TCP', 'Goroutines', 'io.Pipe'],
  },
];

export const EDUCATION = [
  {
    logo: 'WPI_logo.svg.png',
    degree: 'MS in Computer Science',
    school: 'Worcester Polytechnic Institute',
    location: 'Worcester, MA',
    period: 'Aug 2020 – May 2022',
    photo: 'Graduation from WPI.JPG',
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
