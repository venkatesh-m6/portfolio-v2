'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, FileText, Mail, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import Image from 'next/image';

const liveProjects = [
  {
    name: 'SRM Stationery Hub',
    status: '200 OK',
    type: 'Full-Stack Platform',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://srmap-stationery-hub.onrender.com',
    desc: 'Campus stationery procurement system handling real-time order tracking and store inventory.',
  },
  {
    name: 'Resume Screening System',
    status: 'Online',
    type: 'Applied ML Pipeline',
    stack: ['Python', 'Streamlit', 'NLP', 'Scikit-learn'],
    liveUrl: 'https://resumescreeningsystem-mxjo2nvhcwe3raz62yapfj.streamlit.app/',
    desc: 'Automated candidate ranking engine utilizing TF-IDF vectorization and cosine similarity scoring.',
  },
];

export default function Hero() {
  const [hoveredName, setHoveredName] = useState(false);
  const [activeTab, setActiveTab] = useState<'systems' | 'stack' | 'log'>('systems');

  // Smooth cursor tracking for profile photo reveal
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);
  const springConfig = { damping: 24, stiffness: 320, mass: 0.5 };
  const avatarX = useSpring(rawX, springConfig);
  const avatarY = useSpring(rawY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    rawX.set(e.clientX + 16);
    rawY.set(e.clientY - 96);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (58% desktop): Positioning & Content */}
          <div className="lg:col-span-7">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/8 bg-white/4 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-zinc-300 text-xs font-mono">
                Available for engineering opportunities
              </span>
            </div>

            {/* Headline with interactive profile photo reveal */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-100 leading-[1.08]">
                <span
                  className="cursor-none select-none border-b border-dashed border-zinc-600 hover:border-emerald-400 pb-0.5 transition-colors"
                  onMouseEnter={() => setHoveredName(true)}
                  onMouseLeave={() => setHoveredName(false)}
                  onMouseMove={handleMouseMove}
                >
                  Venkatesh Manipati
                </span>
              </h1>

              {/* Cursor-following circular profile photo */}
              <AnimatePresence>
                {hoveredName && (
                  <motion.div
                    className="fixed z-[9999] pointer-events-none"
                    style={{ x: avatarX, y: avatarY }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    aria-hidden="true"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 bg-[#14161d] shadow-2xl">
                        <Image
                          src="/images/Venkatesh.png"
                          alt="Venkatesh Manipati"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover object-top scale-105"
                          priority
                        />
                      </div>
                      <div className="mt-1.5 px-2 py-0.5 rounded bg-[#101216] border border-white/10 text-[10px] font-mono text-zinc-300 whitespace-nowrap">
                        B.Tech CSE &apos;27
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="mt-3 text-lg sm:text-xl font-normal text-zinc-300">
                Full-Stack Engineer &amp; Applied ML Developer
              </p>
            </div>

            {/* Subtitle / Bio */}
            <p className="mt-5 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Final-year Computer Science undergraduate at SRM University-AP. Focused on distributed full-stack architecture with React and Node.js, and deploying applied machine learning pipelines.
            </p>

            {/* Tabular Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md border-y border-white/8 py-4">
              <div>
                <div className="text-xl sm:text-2xl font-medium text-zinc-100 font-mono tabular-nums">
                  5+
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  Production projects
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-medium text-zinc-100 font-mono tabular-nums">
                  3
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  Technical internships
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-medium text-zinc-100 font-mono tabular-nums">
                  7.99
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  CGPA / 10.0
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="px-4 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-emerald-400 transition-colors"
              >
                View Selected Work
              </button>
              <a
                href="/venkatesh_resume.pdf"
                download="Venkatesh_Manipati_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/4 text-zinc-200 text-xs sm:text-sm font-medium hover:bg-white/8 hover:text-white transition-colors"
              >
                <FileText size={15} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="px-4 py-2.5 rounded-lg text-zinc-400 text-xs sm:text-sm font-medium hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Social Icons & Signature */}
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span>// links</span>
              <a
                href="https://github.com/venkatesh-614"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/manipati-venkatesh-468318373/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:manipativenkatesh1@gmail.com"
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right Column (42% desktop): Production System Inspector (The Moment) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/8 bg-[#111319] overflow-hidden shadow-2xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/6 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-xs font-mono text-zinc-400">
                    system-inspector
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  live
                </div>
              </div>

              {/* Inspector Tabs */}
              <div className="flex border-b border-white/6 px-3 bg-white/[0.01]">
                {[
                  { key: 'systems', label: 'Deployed Systems' },
                  { key: 'stack', label: 'Architecture' },
                  { key: 'log', label: 'Runtime Log' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                    className={`px-3 py-2 text-xs font-mono border-b-2 transition-colors ${
                      activeTab === tab.key
                        ? 'border-emerald-500 text-white font-medium'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-5 min-h-[310px] flex flex-col justify-between">
                
                {activeTab === 'systems' && (
                  <div className="space-y-4">
                    {liveProjects.map((p) => (
                      <div
                        key={p.name}
                        className="p-3.5 rounded-lg border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-zinc-200">
                                {p.name}
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                {p.status}
                              </span>
                            </div>
                            <div className="text-xs text-zinc-400 mt-1">
                              {p.desc}
                            </div>
                          </div>
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded text-zinc-400 hover:text-emerald-400 transition-colors"
                            aria-label={`Open ${p.name}`}
                          >
                            <ArrowUpRight size={16} />
                          </a>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/4 text-zinc-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-3.5 text-xs font-mono">
                    <div>
                      <div className="text-zinc-400 mb-1.5 flex items-center gap-1.5">
                        <Layers size={13} className="text-emerald-400" />
                        <span>Core Engineering</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['TypeScript', 'React.js', 'Next.js 14', 'Node.js', 'Express', 'Tailwind CSS'].map((item) => (
                          <span key={item} className="px-2 py-1 rounded bg-white/4 text-zinc-300 border border-white/6">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-zinc-400 mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400" />
                        <span>Data &amp; Machine Learning</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['Python', 'TensorFlow', 'OpenCV', 'Scikit-Learn', 'MongoDB', 'PostgreSQL'].map((item) => (
                          <span key={item} className="px-2 py-1 rounded bg-white/4 text-zinc-300 border border-white/6">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-zinc-400 mb-1.5 flex items-center gap-1.5">
                        <Terminal size={13} className="text-emerald-400" />
                        <span>Infrastructure</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['Docker', 'Git', 'Vercel', 'Render', 'Streamlit Cloud'].map((item) => (
                          <span key={item} className="px-2 py-1 rounded bg-white/4 text-zinc-300 border border-white/6">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'log' && (
                  <div className="p-3 rounded-lg bg-[#0a0b0e] border border-white/6 font-mono text-xs text-zinc-300 space-y-1.5">
                    <div className="text-zinc-400">$ node --version &amp;&amp; git status</div>
                    <div className="text-zinc-400">v20.12.2 (LTS) · branch: main (clean)</div>
                    <div className="text-emerald-400 pt-1">✓ Build artifact verified</div>
                    <div className="text-zinc-400">→ Route (app): / (19.9 kB) pre-rendered</div>
                    <div className="text-zinc-400">→ Deploy latency: 24ms (BOM1 edge)</div>
                    <div className="text-zinc-400 pt-1">
                      Target: venkatesh-manipati.vercel.app
                    </div>
                  </div>
                )}

                {/* Card Footer / Signature */}
                <div className="mt-4 pt-3 border-t border-white/6 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>commit: 19bd311</span>
                  <span>env: production</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
