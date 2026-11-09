'use client';

import { useState } from 'react';
import Image from 'next/image';
import { skills, skillCategories } from '@/data/skills';

const certifications = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera · DeepLearning.AI',
    techLogo: '/images/tensorflow-logo.svg',
  },
  {
    name: 'Java SE 17 Developer',
    issuer: 'Oracle Certified',
    techLogo: '/images/java-logo.svg',
  },
  {
    name: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    techLogo: '/images/mongodb-logo.svg',
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filtered =
    activeCategory === 'ALL' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-6 border-t border-white/6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-emerald-400 mb-2">04 / competencies</div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100">
            Technical Stack
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg">
            Languages, frameworks, database systems, and verified certifications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeCategory === cat.key
                  ? 'bg-white/10 text-white border border-white/14'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/4 border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="rounded-lg border border-white/8 bg-[#111319] px-3.5 py-3 hover:border-white/16 transition-colors"
            >
              <div className="text-xs font-mono text-zinc-200">
                {skill.name}
              </div>
              <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                {skill.category.toLowerCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-xs font-mono text-zinc-500 mb-4">
            // verified certifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-white/8 bg-[#111319] p-5 flex items-start gap-3.5 hover:border-white/16 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center p-2 flex-shrink-0">
                  <Image
                    src={cert.techLogo}
                    alt={cert.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-100 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
