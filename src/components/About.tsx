'use client';

import { motion } from 'framer-motion';
import { User, GraduationCap, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: User,
      title: 'Profile & Focus',
      body: 'Full-stack software developer with hands-on experience in building scalable web architectures, REST APIs, and integrated machine learning pipelines.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      body: 'B.Tech in Computer Science & Engineering at SRM University-AP (2023–2027), holding a 7.99 CGPA. Coursework in data structures, algorithms, databases, and applied AI.',
    },
    {
      icon: Code2,
      title: 'Engineering Principles',
      body: 'Committed to production reliability, clear separation of concerns, and clean interface ergonomics. Experienced with the MERN stack, Next.js, and Python ML tooling.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 border-t border-white/6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-emerald-400 mb-2">01 / background</div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100">
            About &amp; Principles
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-lg">
            Engineering foundation, university background, and core technical discipline.
          </p>
        </div>

        {/* 3-Column Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="rounded-xl border border-white/8 bg-[#111319] p-5 flex flex-col justify-between hover:border-white/14 transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-zinc-300 mb-4">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-medium text-zinc-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
