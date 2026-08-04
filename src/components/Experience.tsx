'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences } from '@/data/experience';
import { Experience } from '@/types';

type FilterType = 'ALL' | 'INTERNSHIP' | 'HACKATHON';

const filters: { key: FilterType; label: string }[] = [
  { key: 'ALL', label: 'All' },
  { key: 'INTERNSHIP', label: 'Internships' },
  { key: 'HACKATHON', label: 'Hackathons' },
];

const typeColors: Record<string, string> = {
  INTERNSHIP: '#10b981',
  HACKATHON: '#a855f7',
  PROJECT: '#06b6d4',
  RESEARCH: '#f59e0b',
};

export default function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');

  const filtered: Experience[] =
    activeFilter === 'ALL'
      ? experiences
      : experiences.filter((e) => e.type === activeFilter);

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-neon-purple/8 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-neon-purple font-mono text-sm tracking-widest uppercase mb-3">
            // 03. timeline
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Experience &amp;{' '}
            <span className="bg-gradient-to-r from-neon-purple to-deep-cyan bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 border ${
                activeFilter === f.key
                  ? 'border-neon-purple bg-neon-purple/10 text-neon-purple shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                  : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/60 via-white/10 to-transparent" />

          <div className="space-y-8">
            {filtered.map((exp, i) => {
              const dotColor = typeColors[exp.type] ?? '#10b981';
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-6 w-4 h-4 rounded-full -translate-x-1/2 border-2 shadow-lg"
                    style={{
                      borderColor: dotColor,
                      backgroundColor: `${dotColor}30`,
                      boxShadow: `0 0 12px ${dotColor}60`,
                    }}
                  />

                  {/* Card */}
                  <div className="group rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl p-6 hover:border-white/18 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        {/* Company logo */}
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                          {exp.logo ? (
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              fill
                              className="object-contain p-1"
                              sizes="48px"
                            />
                          ) : (
                            <span className="text-white/60 font-mono font-bold text-xs">
                              {exp.company.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg group-hover:text-neon-purple transition-colors duration-200">
                            {exp.role}
                          </h3>
                          <p className="text-white/50 text-sm font-mono">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full"
                          style={{
                            color: dotColor,
                            backgroundColor: `${dotColor}18`,
                            border: `1px solid ${dotColor}35`,
                          }}
                        >
                          {exp.type}
                        </span>
                        <span className="text-white/35 text-xs font-mono">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((point, j) => (
                        <li key={j} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                          <span className="text-cyber-green mt-1 flex-shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-white/40 border border-white/10 bg-white/4"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-deep-cyan/25 bg-deep-cyan/5 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-deep-cyan/15 border border-deep-cyan/30 flex items-center justify-center flex-shrink-0">
              <span className="text-deep-cyan font-mono font-bold text-xs">BTech</span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-deep-cyan tracking-widest uppercase mb-1">
                Education
              </p>
              <h3 className="text-white font-bold text-lg">
                Bachelor of Technology — Computer Science & Engineering
              </h3>
              <p className="text-white/50 text-sm font-mono mt-1">
                SRM University-AP · 2023 – 2027
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs font-mono text-white/40">CGPA:</span>
                <span className="text-xl font-extrabold text-cyber-green font-mono">7.99</span>
                <span className="text-xs text-white/30 font-mono">/ 10.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
