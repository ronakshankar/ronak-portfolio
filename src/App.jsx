import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Server,
  Code,
  Cloud,
  Terminal,
  ExternalLink,
  ChevronDown,
  Cpu,
  Download,
  Menu,
  X,
  ArrowUpRight,
  Zap,
  Shield,
  BarChart2,
} from 'lucide-react';

/* ─────────────────────────────────────────
   Scroll-animation helper
───────────────────────────────────────── */
const useFadeIn = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const NAV_LINKS = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills'     },
  { id: 'projects',   label: 'Projects'   },
  { id: 'education',  label: 'Education'  },
];

const STATS = [
  { value: '4+',    label: 'Years Experience' },
  { value: '120',   label: 'TPS in Production' },
  { value: '95%',   label: 'SonarQube Coverage' },
  { value: '100K+', label: 'App Downloads' },
];

const EXPERIENCE = [
  {
    logo: 'Capital-one-Logo-1.png',
    role: 'Software Engineer',
    company: 'Capital One',
    location: 'McLean, VA',
    period: 'July 2022 – Present',
    color: 'indigo',
    // photo: 'inside-capital-one.JPG',
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

const SKILLS = [
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

const PROJECTS = [
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

const EDUCATION = [
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

/* ─────────────────────────────────────────
   Color maps (Tailwind can't use dynamic class names)
───────────────────────────────────────── */
const ACCENT = {
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

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const ids = ['home', ...NAV_LINKS.map(l => l.id)];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileOpen(false);
  };

  /* ── Nav ── */
  return (
    <div className="bg-white text-slate-800 antialiased">

      {/* ────────── NAVBAR ────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group"
          >
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
              RS
            </span>
            <span className={`font-semibold text-slate-800 transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
              Ronak S.
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/ronak-portfolio/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
            >
              <Download size={15} /> Resume
            </a>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1 shadow-xl">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="w-full text-left px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                {label}
              </button>
            ))}
            <a
              href="/ronak-portfolio/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-3 mt-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>
        )}
      </header>

      {/* ────────── HERO ────────── */}
      <section
        id="home"
        className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              Software Engineer · McLean, VA
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Ronak <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">
                Sankaranarayanan
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Building <strong className="text-slate-200">resilient, high-throughput</strong> systems at Capital One —
              from concurrent Golang data structures to fault-tolerant AWS Lambda services at <strong className="text-slate-200">120 TPS</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('experience')}
                className="flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-full font-semibold hover:bg-indigo-100 transition-colors shadow-xl"
              >
                See My Work <ArrowUpRight size={17} />
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="flex items-center gap-2 border border-slate-700 text-slate-300 px-7 py-3.5 rounded-full font-semibold hover:border-slate-500 hover:text-white transition-colors"
              >
                About Me
              </button>
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a href="https://www.linkedin.com/in/ronaksankar/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors"><Linkedin size={22} /></a>
              <a href="https://github.com/ronakshankar" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github size={22} /></a>
              <a href="mailto:ronaksankar216@gmail.com" className="text-slate-500 hover:text-red-400 transition-colors"><Mail size={22} /></a>
            </div>
          </div>

          {/* Right – headshot */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-indigo-600/40 to-violet-600/30 rounded-[2.5rem] blur-xl" />
              {/* Card */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <img
                  src="professional_headshot.jpg"
                  alt="Ronak Sankaranarayanan"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-lg leading-tight">Ronak Sankaranarayanan</p>
                  <p className="text-indigo-300 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ────────── ABOUT ────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <Reveal className="order-2 md:order-1">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="inside-capital-one.JPG"
                alt="Ronak at Capital One"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                <p className="text-white font-semibold text-sm">Capital One HQ</p>
                <p className="text-white/70 text-xs">McLean, Virginia</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-8">
            <Reveal>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">About</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
                Engineering at the intersection of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  performance & resilience
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-slate-600 leading-relaxed">
                I'm a Software Engineer with 4+ years of experience building cloud-native backend systems and full-stack applications. At Capital One, I work on high-concurrency microservices in <strong>Java & Golang</strong>, fault-tolerant AWS infrastructure, and developer-experience tooling.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                I hold a Master's in Data Science from WPI where I also worked as a research engineer on GPU-accelerated ML pipelines. I care deeply about code quality, automated testing, and delivering measurable business impact.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                    <div className="text-3xl font-extrabold text-indigo-600">{value}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────── EXPERIENCE ────────── */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">

          <Reveal className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Career</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Professional Experience</h2>
          </Reveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-12">
              {EXPERIENCE.map((job, i) => {
                const ac = ACCENT[job.color];
                return (
                  <Reveal key={job.company} delay={i * 80}>
                    <div className="md:pl-20 relative">
                      {/* Timeline dot */}
                      <div className={`hidden md:flex absolute left-0 top-1 w-14 h-14 rounded-2xl bg-white border-2 ${ac.border} shadow-sm items-center justify-center p-1.5 ring-4 ${ac.ring}`}>
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="max-w-full max-h-full object-contain"
                          onError={e => { e.target.style.display = 'none'; }}
                        />
                      </div>

                      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">

                        {/* Card header */}
                        <div className="p-6 pb-0">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                              <div className={`font-semibold text-sm mt-0.5 ${ac.text}`}>{job.company}</div>
                            </div>
                            <div className="text-right space-y-0.5">
                              <div className="text-sm text-slate-500 flex items-center justify-end gap-1.5">
                                <MapPin size={13} /> {job.location}
                              </div>
                              <div className={`text-xs font-semibold px-3 py-1 rounded-full ${ac.badge}`}>{job.period}</div>
                            </div>
                          </div>
                        </div>

                        {/* Capital One photo banner */}
                        {job.photo && (
                          <div className="mx-6 mt-4 h-32 rounded-2xl overflow-hidden">
                            <img
                              src={job.photo}
                              alt="Capital One"
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        )}

                        {/* Bullets */}
                        <div className="p-6">
                          <ul className="space-y-2.5">
                            {job.bullets.map((b, j) => (
                              <li key={j} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${ac.dot}`} />
                                <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                              </li>
                            ))}
                          </ul>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-slate-100">
                            {job.tags.map(t => (
                              <span key={t} className={`text-xs px-3 py-1 rounded-full font-medium ${ac.badge}`}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ────────── SKILLS ────────── */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Capabilities</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Technical Skills</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS.map((cat, i) => {
              const ac = ACCENT[cat.color];
              return (
                <Reveal key={cat.category} delay={i * 70}>
                  <div className={`p-6 rounded-3xl border ${ac.border} bg-white hover:shadow-lg transition-shadow`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ac.icon}`}>
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-slate-900">{cat.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map(item => (
                        <span key={item} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${ac.badge}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────── PROJECTS ────────── */}
      <section id="projects" className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6">

          <Reveal className="flex justify-between items-end mb-14">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">Portfolio</span>
              <h2 className="text-4xl font-extrabold text-white mt-2">Featured Projects</h2>
            </div>
            <a
              href="https://github.com/ronakshankar"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              View GitHub <ExternalLink size={15} />
            </a>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((proj, i) => {
              const ac = ACCENT[proj.color];
              return (
                <Reveal key={proj.title} delay={i * 100}>
                  <div className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${ac.icon} bg-opacity-20`}
                        style={{ background: 'rgba(99,102,241,0.15)' }}>
                        <span className="text-indigo-400">{proj.icon}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 border border-slate-700 px-3 py-1 rounded-full">{proj.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{proj.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map(t => (
                        <span key={t} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full font-medium border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────── EDUCATION ────────── */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <Reveal className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Background</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Education</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.school} delay={i * 100}>
                <div className="flex gap-5 p-7 rounded-3xl border border-slate-100 bg-slate-50 hover:border-indigo-200 hover:shadow-md transition-all">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm p-2.5 flex items-center justify-center flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="max-w-full max-h-full object-contain"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug">{edu.degree}</h3>
                    <p className="text-indigo-600 font-semibold text-sm mt-0.5">{edu.school}</p>
                    <p className="text-slate-500 text-xs mt-1.5 flex items-center gap-1.5">
                      <MapPin size={12} /> {edu.location}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{edu.period}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── FOOTER ────────── */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">RS</span>
                <span className="text-white font-semibold">Ronak Sankaranarayanan</span>
              </div>
              <p className="text-sm leading-relaxed opacity-70 mb-5">
                Software Engineer building high-throughput, resilient cloud-native systems.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ronaksankar/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="https://github.com/ronakshankar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
                <a href="mailto:ronaksankar216@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <a href="mailto:ronaksankar216@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail size={15} /> ronaksankar216@gmail.com
                </a>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} /> 774-418-9871
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={15} /> McLean, VA
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                {NAV_LINKS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="block hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href="/ronak-portfolio/resume.pdf"
                  download
                  className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors mt-2"
                >
                  <Download size={14} /> Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center text-xs opacity-40">
            © {new Date().getFullYear()} Ronak Sankaranarayanan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
