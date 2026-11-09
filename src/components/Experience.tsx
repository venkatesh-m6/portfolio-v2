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

export default function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');

  const filtered: Experience[] =
    activeFilter === 'ALL'
      ? experiences
      : experiences.filter((e) => e.type === activeFilter);

  return (
    <section id="experience" className="relative py-24 px-6 border-t border-white/6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-emerald-400 mb-2">03 / history</div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100">
            Experience &amp; Milestones
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg">
            Engineering internships, hackathon builds, and academic milestones.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeFilter === f.key
                  ? 'bg-white/10 text-white border border-white/14'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/4 border border-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-white/8 space-y-8">
          {filtered.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] top-6 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-[#0c0d11]" />

              {/* Card */}
              <div className="rounded-xl border border-white/8 bg-[#111319] p-5 hover:border-white/16 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-xs font-mono font-medium text-zinc-400">
                          {exp.company.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-zinc-100">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/4 border border-white/6 text-zinc-400">
                      {exp.type.toLowerCase()}
                    </span>
                    <span className="text-zinc-500">{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1 select-none text-xs">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/6">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/3 border border-white/6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="mt-12 rounded-xl border border-white/8 bg-[#111319] p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-emerald-400 mb-1">Degree Programme</div>
              <h3 className="text-base font-medium text-zinc-100">
                Bachelor of Technology in Computer Science &amp; Engineering
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                SRM University-AP · 2023 – 2027
              </p>
            </div>
            <div className="flex items-baseline gap-2 font-mono sm:text-right">
              <span className="text-xs text-zinc-500">CGPA:</span>
              <span className="text-2xl font-medium text-emerald-400 tabular-nums">7.99</span>
              <span className="text-xs text-zinc-500">/ 10.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
