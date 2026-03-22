import { Linkedin, Github, Mail, ChevronDown, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
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
              onClick={() => scrollToSection('experience')}
              className="flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-full font-semibold hover:bg-indigo-100 transition-colors shadow-xl"
            >
              See My Work <ArrowUpRight size={17} />
            </button>
            <button
              onClick={() => scrollToSection('about')}
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
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
