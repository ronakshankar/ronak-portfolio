import { MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { EDUCATION } from '../data/constants';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <Reveal className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Background</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Education</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 100}>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 hover:border-indigo-200 hover:shadow-md transition-all overflow-hidden">
                {edu.photo && (
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={edu.photo}
                      alt={`${edu.school} graduation`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>
                )}
                <div className="flex gap-5 p-7">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm p-2 flex items-center justify-center flex-shrink-0">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
