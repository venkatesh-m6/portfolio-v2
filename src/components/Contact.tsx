'use client';

import { motion } from 'framer-motion';
import { Mail, Terminal, ArrowRight } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactLinks = [
  {
    id: 'email-link',
    icon: Mail,
    label: 'Send Email',
    href: 'mailto:manipativenkatesh1@gmail.com',
    color: '#10b981',
    glowColor: 'rgba(16,185,129,0.3)',
    display: 'manipativenkatesh1@gmail.com',
  },
  {
    id: 'linkedin-link',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manipati-venkatesh-468318373/',
    color: '#0ea5e9',
    glowColor: 'rgba(14,165,233,0.3)',
    display: 'linkedin.com/in/manipati-venkatesh',
  },
  {
    id: 'github-link',
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/venkatesh-614',
    color: '#a855f7',
    glowColor: 'rgba(168,85,247,0.3)',
    display: 'github.com/venkatesh-614',
  },
];

const terminalLines = [
  { prompt: '$', text: 'whoami', delay: 0 },
  { prompt: '>', text: 'Venkatesh Manipati — MERN Stack Dev', delay: 0.4, color: '#10b981' },
  { prompt: '$', text: 'cat status.json', delay: 0.8 },
  { prompt: '>', text: '{ "available_for_hire": true }', delay: 1.2, color: '#f59e0b' },
  { prompt: '$', text: 'echo $LOCATION', delay: 1.6 },
  { prompt: '>', text: 'Andhra Pradesh, India 🇮🇳', delay: 2.0, color: '#06b6d4' },
  { prompt: '$', text: 'ping venkatesh --hire', delay: 2.4 },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyber-green/6 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyber-green font-mono text-sm tracking-widest uppercase mb-3">
            // 05. get_in_touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-cyber-green via-deep-cyan to-neon-purple bg-clip-text text-transparent">
              Build Together
            </span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto">
            Open to full-time roles, internships, and exciting collaborations. Let&apos;s connect
            and build something remarkable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-cyber-green/20 bg-black/60 backdrop-blur-xl overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, transparent 50%, rgba(168,85,247,0.08) 100%)',
              }}
            />
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/4">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <Terminal size={12} className="ml-2 text-white/40" />
              <span className="text-white/30 text-xs font-mono ml-1">venkatesh — terminal</span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-2">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: line.delay }}
                  className="flex gap-3"
                >
                  <span className="text-cyber-green select-none">{line.prompt}</span>
                  <span style={{ color: line.color ?? 'rgba(255,255,255,0.7)' }}>{line.text}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 2.8 }}
                className="flex gap-3"
              >
                <span className="text-cyber-green">$</span>
                <span className="text-white/50 animate-pulse">_</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-4"
          >
            {contactLinks.map(({ id, icon: Icon, label, href, color, glowColor, display }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between p-5 rounded-xl border border-white/8 bg-white/4 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}18`, border: `1px solid ${color}35` }}
                  >
                    <span style={{ color }}>
                      <Icon />
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{label}</p>
                    <p className="text-white/35 text-xs font-mono mt-0.5">{display}</p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-200"
                />
              </a>
            ))}

            {/* Resume download */}
            <a
              id="resume-download"
              href="/venkatesh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 flex items-center justify-center gap-3 p-4 rounded-xl border border-cyber-green/30 bg-cyber-green/8 text-cyber-green font-semibold font-mono text-sm hover:bg-cyber-green hover:text-black hover:border-cyber-green transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_32px_rgba(16,185,129,0.5)]"
            >
              <span>Download Resume</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
