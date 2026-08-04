'use client';

import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Mail, Code2, Brain, Database, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const GithubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const floatingCards = [
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    subtitle: 'MERN • Next.js',
    color: '#10b981',
    glowColor: 'rgba(16,185,129,0.25)',
    delay: 0,
  },
  {
    icon: Brain,
    title: 'AI / ML',
    subtitle: 'TensorFlow • OpenCV',
    color: '#a855f7',
    glowColor: 'rgba(168,85,247,0.25)',
    delay: 0.5,
  },
  {
    icon: Database,
    title: 'Database Design',
    subtitle: 'MongoDB • PostgreSQL',
    color: '#06b6d4',
    glowColor: 'rgba(6,182,212,0.25)',
    delay: 1.0,
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    subtitle: 'Docker • Git',
    color: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.25)',
    delay: 1.5,
  },
];

const typewriterTexts = [
  'Building Next-Gen Systems.',
  'Crafting MERN Experiences.',
  'Deploying AI Solutions.',
  'Architecting the Future.',
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredName, setHoveredName] = useState(false);

  // Cursor-following spring values
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);
  const springConfig = { damping: 20, stiffness: 280, mass: 0.6 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset so avatar centre sits above-right of cursor tip
    rawX.set(e.clientX + 20);
    rawY.set(e.clientY - 80);
  };

  useEffect(() => {
    const current = typewriterTexts[textIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (isDeleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else if (!isDeleting && displayed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayed.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, textIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient radial glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-cyber-green/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-deep-cyan/5 blur-[160px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-green/30 bg-cyber-green/8 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span className="text-cyber-green text-xs font-mono tracking-widest uppercase">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-2">
                {/* Hover entire name to reveal cursor-following circular profile photo */}
                <span
                  className="cursor-none select-none"
                  onMouseEnter={() => setHoveredName(true)}
                  onMouseLeave={() => setHoveredName(false)}
                  onMouseMove={handleMouseMove}
                >
                  <span className={`transition-colors duration-200 ${
                    hoveredName ? 'text-cyber-green' : 'text-white'
                  }`}>
                    Venkatesh
                  </span>
                  <br />
                  <span className={`transition-colors duration-300 ${
                    hoveredName
                      ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-cyber-green via-deep-cyan to-neon-purple bg-clip-text text-transparent'
                  }`}>
                    Manipati
                  </span>
                </span>
              </h1>

              {/* Cursor-following circular profile photo — rendered in fixed portal */}
              <AnimatePresence>
                {hoveredName && (
                  <motion.div
                    className="fixed z-[9999] pointer-events-none"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    aria-hidden="true"
                  >
                    {/* Outer neon ring */}
                    <div className="relative w-28 h-28">
                      {/* Spinning gradient ring */}
                      <div
                        className="absolute inset-0 rounded-full p-[3px]"
                        style={{
                          background:
                            'conic-gradient(from 0deg, #10b981, #06b6d4, #a855f7, #10b981)',
                          animation: 'spin 3s linear infinite',
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-obsidian" />
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full blur-md bg-cyber-green/30" />
                      {/* Photo */}
                      <div className="absolute inset-[3px] rounded-full overflow-hidden">
                        <Image
                          src="/images/Venkatesh.png"
                          alt="Venkatesh Manipati"
                          fill
                          className="object-cover object-top scale-110"
                          sizes="112px"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-4 h-14 flex items-center">
                <span className="text-2xl lg:text-3xl font-bold text-white/90 font-mono">
                  {displayed}
                  <span className="animate-blink text-cyber-green ml-0.5">|</span>
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-white/50 text-lg leading-relaxed max-w-lg"
            >
              BTech CSE Final Year @ SRM University-AP · Full-Stack Developer & AI/ML Enthusiast.
              Building production-grade systems that scale.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {[
                { value: '5+', label: 'Projects Built' },
                { value: '3+', label: 'Internships' },
                { value: '7.99', label: 'CGPA' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-cyber-green font-mono">{stat.value}</div>
                  <div className="text-xs text-white/40 font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyber-green to-deep-cyan text-black font-bold text-sm shadow-[0_0_24px_rgba(16,185,129,0.4)] hover:shadow-[0_0_36px_rgba(16,185,129,0.7)] hover:scale-105 transition-all duration-300"
              >
                Explore Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm backdrop-blur-sm hover:border-cyber-green/50 hover:bg-cyber-green/8 hover:text-cyber-green transition-all duration-300"
              >
                <Mail size={16} />
                Get in Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-white/30 text-xs font-mono">// connect</span>
              {[
                { icon: GithubIcon, href: 'https://github.com/venkatesh-614', label: 'GitHub' },
                {
                  icon: LinkedinIcon,
                  href: 'https://www.linkedin.com/in/manipati-venkatesh-468318373/',
                  label: 'LinkedIn',
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full border border-white/10 text-white/50 hover:text-cyber-green hover:border-cyber-green/40 hover:bg-cyber-green/8 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Floating Cards Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.2 + i * 0.15 },
                    scale: { duration: 0.5, delay: 0.2 + i * 0.15 },
                    y: {
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: card.delay,
                    },
                  }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 cursor-default overflow-hidden group"
                  style={{ boxShadow: `0 0 30px ${card.glowColor}` }}
                >
                  {/* Radial hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${card.glowColor}, transparent 70%)`,
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${card.color}20`, border: `1px solid ${card.color}40` }}
                  >
                    <Icon size={20} style={{ color: card.color }} />
                  </div>
                  <p className="text-white font-semibold text-sm">{card.title}</p>
                  <p className="text-white/40 text-xs font-mono mt-1">{card.subtitle}</p>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-20"
                    style={{ backgroundColor: card.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-mono">scroll_down</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
