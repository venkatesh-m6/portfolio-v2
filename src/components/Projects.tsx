'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  ShoppingCart,
  Utensils,
  Database,
  Train,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { projects } from '@/data/projects';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const iconMap: Record<string, React.ElementType> = {
  Brain,
  ShoppingCart,
  Utensils,
  Database,
  Train,
};

const categoryColors: Record<string, string> = {
  'AI / ML': '#a855f7',
  'Full Stack': '#10b981',
  'Systems': '#f59e0b',
  'Ed-Tech': '#06b6d4',
};

const statusColors: Record<string, string> = {
  ACTIVE: '#10b981',
  COMPLETED: '#06b6d4',
  IN_PROGRESS: '#f59e0b',
};

const filters = ['All', 'AI / ML', 'Full Stack', 'Systems', 'Ed-Tech'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-cyber-green font-mono text-sm tracking-widest uppercase mb-3">
            // 02. selected_work
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Projects &amp;{' '}
            <span className="bg-gradient-to-r from-cyber-green to-deep-cyan bg-clip-text text-transparent">
              Builds
            </span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg">
            A collection of systems, platforms, and experiments built with production-grade code.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 border ${
                active === f
                  ? 'border-cyber-green bg-cyber-green/10 text-cyber-green shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                  : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => {
            const Icon = iconMap[project.icon] ?? Zap;
            const catColor = categoryColors[project.category] ?? '#10b981';
            const statusColor = statusColors[project.status] ?? '#10b981';

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl p-6 overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:border-white/20"
              >
                {/* Radial hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${catColor}12, transparent 60%)`,
                  }}
                />

                {/* Top bar */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${catColor}18`,
                      border: `1px solid ${catColor}35`,
                    }}
                  >
                    <Icon size={20} style={{ color: catColor }} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: statusColor }}
                    />
                    <span className="text-[10px] font-mono tracking-widest" style={{ color: statusColor }}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Category label */}
                <span
                  className="inline-block px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase mb-2"
                  style={{
                    color: catColor,
                    backgroundColor: `${catColor}15`,
                    border: `1px solid ${catColor}30`,
                  }}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyber-green transition-colors duration-200 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-white/40 border border-white/10 bg-white/4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="flex items-center gap-1.5 text-white/50 hover:text-cyber-green transition-colors duration-200 text-sm font-mono"
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border border-cyber-green/40 text-cyber-green bg-cyber-green/10 hover:bg-cyber-green hover:text-black hover:shadow-[0_0_16px_rgba(16,185,129,0.5)] transition-all duration-200"
                    >
                      <ExternalLink size={11} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {/* Neon bottom border on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${catColor}, transparent)` }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
