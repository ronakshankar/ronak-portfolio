import Reveal from './Reveal';
import { SKILLS, ACCENT } from '../data/constants';

export default function Skills() {
  return (
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
  );
}
