'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { projects } from '@/data/projects';

const filters = ['All', 'AI / ML', 'Full Stack', 'Systems', 'Ed-Tech'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 px-6 border-t border-white/6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-emerald-400 mb-2">02 / projects</div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100">
            Selected Work
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg">
            Production systems, full-stack architectures, and machine learning pipelines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                active === f
                  ? 'bg-white/10 text-white border border-white/14'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/4 border border-transparent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl border border-white/8 bg-[#111319] p-5 flex flex-col justify-between hover:border-white/16 transition-colors"
            >
              <div>
                {/* Meta Top Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/4 border border-white/6 text-zinc-400">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{project.status.toLowerCase()}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-medium text-zinc-100 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/3 border border-white/6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/6 flex items-center justify-between gap-3 text-xs font-mono">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500 hover:text-zinc-950 transition-colors"
                    >
                      <ExternalLink size={12} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
