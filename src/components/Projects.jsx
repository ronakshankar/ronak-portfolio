import { ExternalLink, Github } from 'lucide-react';
import Reveal from './Reveal';
import { PROJECTS, ACCENT } from '../data/constants';

export default function Projects() {
  return (
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(t => (
                      <span key={t} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full font-medium border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  {proj.repo && (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-full"
                    >
                      <Github size={15} /> View on GitHub
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
