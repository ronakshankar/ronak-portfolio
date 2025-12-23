import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail,  
  Phone, 
  MapPin, 
  Server, 
  Code, 
  Database, 
  Cloud, 
  Terminal, 
  ExternalLink, 
  ChevronRight, 
  Cpu,
  Layers,
  Smartphone,
  Download,
  Award,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'expertise', 'experience', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollTo(id)}
      className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
        activeSection === id 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-blue-900 cursor-pointer" onClick={() => scrollTo('home')}>
            RS<span className="text-blue-600">.</span>
          </div>
          <div className="hidden md:flex space-x-1">
            <NavLink id="home" label="Home" />
            <NavLink id="expertise" label="Expertise" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="education" label="Education" />
          </div>
          <button 
            onClick={() => window.open('mailto:ronaksankar216@gmail.com')}
            className="bg-slate-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg flex items-center gap-2"
          >
            <Mail size={18} /> Contact Me
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full font-semibold text-sm tracking-wide">
              SENIOR SOFTWARE ENGINEER
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Resilient</span> Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              I build scalable cloud-native systems using <strong>Java, Golang, and React</strong>. Currently solving high-concurrency challenges at Capital One.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('projects')}
                className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2"
              >
                View Work <ChevronRight size={18} />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
                <Download size={18} /> Resume
              </button>
            </div>

            <div className="flex gap-6 pt-4 text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-slate-900 transition-colors"><Github size={24} /></a>
              <a href="mailto:ronaksankar216@gmail.com" className="hover:text-red-500 transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          {/* HEADSHOT AREA */}
          <div className="relative flex justify-center md:justify-end z-10">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-full h-full bg-blue-600 rounded-[2rem] rotate-6 opacity-10"></div>
              <div className="absolute top-0 right-0 w-full h-full bg-indigo-600 rounded-[2rem] -rotate-6 opacity-10"></div>
              
              {/* Image Container */}
              <div className="absolute inset-0 bg-white p-2 shadow-2xl rounded-[2rem] overflow-hidden group">
                <div className="w-full h-full bg-slate-200 rounded-[1.5rem] overflow-hidden">
                  <img 
                    src="professional_headshot.jpg" 
                    alt="Ronak Sankaranarayanan" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.parentNode.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center"><span class="text-4xl mb-2">📸</span><span>professional_headshot.jpg</span></div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Expertise (Java, Golang, React) --- */}
      <section id="expertise" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Technology Stack</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              My engineering strategy is built on three pillars: High-performance backends, concurrent systems, and responsive, secure frontends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Java Card */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Java Ecosystem</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Architecting thread-safe, JVM-optimized microservices using Spring Boot. Implemented atomic access components (AtomicReference) enabling concurrent state management and boosting throughput by 25%.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">Spring Boot</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">AWS Lambda</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">ECS Fargate</span>
              </div>
            </div>

            {/* Golang Card */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                <Terminal size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Golang Concurrency</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Developing atomic pointer-based data structures to enable concurrent access and manipulation across multiple goroutines using a unified schema for cloud-native performance.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded">Goroutines</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded">Unified Schema</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded">Atomic Ops</span>
              </div>
            </div>

            {/* React Card */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">React & Modern UI</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Built secure React.js UIs for tokenized S3 access to visualize 1,000+ workflow files. Developed React Native apps with real-time streaming, achieving 100K+ downloads.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">React.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">React Native</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Redux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Experience Timeline --- */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-12">
            
            {/* Job 1: Capital One */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2"></div>
              
              <div className="md:flex items-start justify-between group">
                {/* Left Side: Title & Logo */}
                <div className="md:w-[45%] mb-4 md:mb-0 md:text-right flex flex-col md:items-end">
                  <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white shadow-md flex items-center justify-center p-1">
                    <img 
                      src="Capital-one-Logo-1.png" 
                      alt="Capital One Logo" 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {e.target.style.display='none'}} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
                  <div className="text-blue-600 font-semibold mb-1">Capital One</div>
                  <div className="text-sm text-slate-500 flex items-center justify-end gap-1">
                    <MapPin size={14} /> McLean, VA | July 2022 - Present
                  </div>
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md -translate-x-[5px] md:-translate-x-1/2 z-10 mt-6"></div>
                
                {/* Right Side: Content */}
                <div className="md:w-[45%] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <ul className="space-y-3 text-sm text-slate-600 list-disc list-outside pl-4">
                    <li>Developed <strong>atomic pointer-based data structures in Golang</strong>, enabling unified schema manipulation across multiple goroutines.</li>
                    <li>Orchestrated microservices on <strong>ECS Fargate</strong> for customer data pipelines, enhancing debugging efficiency by 30% via custom UI tools.</li>
                    <li>Performed critical <strong>West Coast migration</strong> during AWS us-east-1 outage (Oct 2025), resolving 100% failure rate with zero production impact during pullback.</li>
                    <li>Onboarded ephemeral <strong>Platform Testing environments</strong> to mock critical path components between Dev and QA.</li>
                    <li>Integrated GitHub APIs into Jenkins for automated workflow validation, blocking merges on failure.</li>
                    <li>Resolved <strong>50+ production issues</strong> via 200+ hours of on-call support and Sev 3/4 RCA reporting.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Job 2: Market Simplified */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2"></div>
              
              <div className="md:flex items-start justify-between group">
                {/* Left Side: Content (Swapped for alternating layout) */}
                <div className="md:w-[45%] order-2 md:order-1 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <ul className="space-y-3 text-sm text-slate-600 list-disc list-outside pl-4 inline-block text-left">
                    <li>Developed a stock market trading app using <strong>React Native</strong> with 100K+ downloads and a 4+ app rating.</li>
                    <li>Built real-time data sync using Pub/Sub pattern, improving insight latency by 45%.</li>
                    <li>Implemented a smart <strong>subscription/un-subscription model</strong> for live stock updates to reduce device heating and visual lag.</li>
                    <li>Optimized app performance by migrating to <strong>Hermes engine</strong>, cutting app size by ~60%.</li>
                  </ul>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow-md -translate-x-[5px] md:-translate-x-1/2 z-10 mt-6 md:order-2"></div>

                {/* Right Side: Title & Logo */}
                <div className="md:w-[45%] order-1 md:order-3 mb-4 md:mb-0 flex flex-col items-start">
                  <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white shadow-md flex items-center justify-center p-1">
                    <img 
                      src="market_simplified_logo.jpg" 
                      alt="Market Simplified Logo" 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {e.target.style.display='none'}} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
                  <div className="text-blue-600 font-semibold mb-1">Market Simplified India Ltd</div>
                  <div className="text-sm text-slate-500 flex items-center gap-1">
                    <MapPin size={14} /> Chennai, India | June 2019 - July 2020
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Second Photo / About Section --- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* SECOND PHOTO AREA */}
          <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
             <div className="absolute inset-0 bg-slate-900/10 z-10 flex flex-col items-center justify-center text-white text-center p-6 group">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-4 rounded-lg backdrop-blur-sm">
                    <Layers size={32} className="mb-2 mx-auto" />
                    <p className="text-sm font-medium">Full Stack Architecture</p>
                </div>
             </div>
             {/* Placeholder background - Replace src with your lifestyle/action shot */}
             <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                <img 
                    src="action_photo_placeholder.jpg" 
                    alt="Workspace or Action Shot" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.parentNode.innerHTML = '<div class="flex flex-col items-center text-slate-400"><span class="text-4xl mb-2">💻</span><span>Action / Workspace Photo</span></div>';
                    }}
                />
             </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I am a Software Engineer with over 4 years of experience building cloud-native backend systems. I specialize in the intersection of resilience and performance, leveraging tools like <strong>Java, Spring Boot, and AWS</strong> to handle massive scale.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Recently, I've been integrating <strong>AI-driven development</strong> workflows using Github Copilot to enhance code quality and reduce production alerts. Whether it's optimizing transaction throughput or building secure React UIs for internal tools, I focus on delivering tangible business value.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-blue-600">4+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-slate-500">Code Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects --- */}
      <section id="projects" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-slate-400">Innovation & Personal Development</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-blue-400 hover:text-blue-300">
              View Github <ExternalLink size={16} className="ml-2" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 border border-slate-700 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                  <Smartphone size={24} />
                </div>
                <span className="text-xs font-mono text-slate-400 border border-slate-600 px-2 py-1 rounded">Aug 2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Personal Expense Tracker</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A modular UI engineered with <strong>Angular</strong> and integrated with a <strong>Spring Boot</strong> backend to visualize financial data. Improved user insights by 80% through interactive dashboards and reduced transaction response times by 40%.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-indigo-300">Angular</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-indigo-300">GraphQL</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-indigo-300">Spring Boot</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-indigo-300">Spring Data JPA</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 border border-slate-700 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <Cloud size={24} />
                </div>
                <span className="text-xs font-mono text-slate-400 border border-slate-600 px-2 py-1 rounded">Dec 2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-Time Inventory Management</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Constructed backend microservices using <strong>Google Cloud Functions</strong> and <strong>Firestore</strong>. Ensured 99.9% real-time sync accuracy and leveraged <strong>Google Pub/Sub</strong> to reduce inventory update latency to under 250ms.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-emerald-300">Google Cloud</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-emerald-300">Firestore</span>
                <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-emerald-300">Pub/Sub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Education Section --- */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Education</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Masters */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-20 h-20 bg-white rounded-xl shadow-sm p-2 flex items-center justify-center flex-shrink-0">
                    <img 
                      src="WPI_logo.svg.png" 
                      alt="WPI Logo" 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {e.target.style.display='none'}} 
                    />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Master's in Data Science</h3>
                    <p className="text-blue-600 font-medium text-sm">Worcester Polytechnic Institute</p>
                    <p className="text-slate-500 text-xs mt-1">Worcester, MA | Aug 2020 - May 2022</p>
                </div>
            </div>

            {/* Bachelors */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-20 h-20 bg-white rounded-xl shadow-sm p-2 flex items-center justify-center flex-shrink-0">
                    <img 
                      src="Anna_university_logo.jpeg" 
                      alt="Anna University Logo" 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {e.target.style.display='none'}} 
                    />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Bachelor's in Info Tech</h3>
                    <p className="text-blue-600 font-medium text-sm">Anna University</p>
                    <p className="text-slate-500 text-xs mt-1">Chennai, India | Aug 2015 - May 2019</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer / Contact --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Ronak Sankaranarayanan</h4>
            <p className="text-sm opacity-70 mb-4">
              Software Engineer building the next generation of cloud-native financial systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} /> ronaksankar216@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> 774-418-9871
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> McLean, VA
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
                <button onClick={() => scrollTo('expertise')} className="block hover:text-white transition-colors">Expertise</button>
                <button onClick={() => scrollTo('experience')} className="block hover:text-white transition-colors">Experience</button>
                <button onClick={() => scrollTo('projects')} className="block hover:text-white transition-colors">Projects</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-slate-800 text-center text-xs opacity-50">
          © 2025 Ronak Sankaranarayanan. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;