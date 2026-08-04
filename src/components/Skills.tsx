'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills, skillCategories } from '@/data/skills';

const certifications = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera · DeepLearning.AI',
    techLogo: '/images/tensorflow-logo.svg',   // TensorFlow (subject matter)
    issuerLogo: '/images/coursera-logo.svg',   // Coursera branded SVG
    color: '#0056d2',
    bg: 'rgba(0,86,210,0.10)',
    border: 'rgba(0,86,210,0.28)',
  },
  {
    name: 'Java SE 17 Developer',
    issuer: 'Oracle Certified',
    techLogo: '/images/java-logo.svg',
    issuerLogo: '/images/oracle-logo.svg',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.10)',
    border: 'rgba(249,115,22,0.28)',
  },
  {
    name: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    techLogo: '/images/mongodb-logo.svg',
    issuerLogo: '/images/mongodb-logo.svg',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.10)',
    border: 'rgba(16,185,129,0.28)',
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filtered =
    activeCategory === 'ALL' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-cyber-green/6 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-cyber-green font-mono text-sm tracking-widest uppercase mb-3">
            // 04. technical_stack
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-cyber-green to-neon-purple bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 border ${
                activeCategory === cat.key
                  ? 'border-cyber-green bg-cyber-green/10 text-cyber-green shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                  : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill pills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="group relative rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm p-3 text-center overflow-hidden cursor-default"
              style={{
                '--skill-color': skill.color,
              } as React.CSSProperties}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${skill.color}20, transparent 70%)`,
                  border: `1px solid ${skill.color}40`,
                }}
              />

              <p
                className="text-xs font-mono font-semibold text-white/70 group-hover:text-white transition-colors duration-200 relative z-10"
              >
                {skill.name}
              </p>

              {/* Proficiency bar */}
              <div className="mt-2 h-1 rounded-full bg-white/8 overflow-hidden relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.04 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Level on hover */}
              <p
                className="text-[10px] font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative z-10"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-white/30 font-mono text-xs tracking-widest uppercase mb-6">
            // certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-2xl border backdrop-blur-sm p-5 overflow-hidden transition-all duration-300 cursor-default"
                style={{ borderColor: cert.border, backgroundColor: cert.bg }}
              >
                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${cert.bg}, transparent 65%)` }}
                />

                {/* Logo pair */}
                <div className="flex items-center gap-2.5 mb-4">
                  {/* Tech subject logo */}
                  <div className="w-11 h-11 rounded-xl bg-white/90 shadow p-1.5 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={cert.techLogo}
                      alt={cert.name}
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  {/* Issuer logo */}
                  <div className="w-9 h-9 rounded-lg bg-white/90 shadow p-1 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={cert.issuerLogo}
                      alt={cert.issuer}
                      width={28}
                      height={28}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                {/* Text */}
                <p
                  className="font-bold text-sm leading-snug mb-1.5 group-hover:text-white transition-colors duration-200"
                  style={{ color: cert.color }}
                >
                  {cert.name}
                </p>
                <p className="text-white/40 text-xs font-mono">{cert.issuer}</p>

                {/* Bottom gradient line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
