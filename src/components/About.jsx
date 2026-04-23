import Reveal from './Reveal';
import { STATS } from '../data/constants';

export default function About() {
  return (
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
              I'm a Senior Software Engineer with 4+ years of experience building cloud-native backend systems and full-stack applications. At Capital One, I own production distributed systems at 1,000+ RPS, engineering high-concurrency microservices in <strong>Java & Golang</strong>, fault-tolerant AWS infrastructure, and agentic AI automation.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              I hold an MS in Computer Science from WPI where I also worked as a research engineer on GPU-accelerated ML pipelines. I care deeply about code quality, automated testing, and delivering measurable business impact.
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
  );
}
