import { MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { EXPERIENCE, ACCENT } from '../data/constants';

export default function Experience() {
  return (
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
  );
}
