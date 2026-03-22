import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/constants';
import { scrollToSection } from '../utils/scroll';

export default function Header() {
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
    scrollToSection(id);
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
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
  );
}
