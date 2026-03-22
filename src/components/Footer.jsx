import { Linkedin, Github, Mail, Phone, MapPin, Download } from 'lucide-react';
import { NAV_LINKS } from '../data/constants';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
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
                  onClick={() => scrollToSection(id)}
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
  );
}
