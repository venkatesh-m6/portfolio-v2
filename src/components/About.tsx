'use client';

import { motion } from 'framer-motion';
import { User, GraduationCap, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: User,
      title: 'Who I Am',
      body: 'Full-Stack Developer and AI/ML enthusiast with strong expertise in Python, React, OpenCV, and deep learning. Experienced in building production-ready web applications, AI pipelines, and research-driven solutions.',
      color: '#10b981',
    },
    {
      icon: GraduationCap,
      title: 'Academic Background',
      body: 'BTech Computer Science & Engineering at SRM University-AP (2023–2027), maintaining a CGPA of 7.99/10. Pursuing coursework in data structures, algorithms, machine learning, and distributed systems.',
      color: '#a855f7',
    },
    {
      icon: Code2,
      title: 'What I Build',
      body: 'From full-stack MERN applications to intelligent AI systems — I craft scalable solutions that solve real-world problems. Passionate about clean code, good UX, and shipping things that matter.',
      color: '#06b6d4',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-neon-purple/8 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-neon-purple font-mono text-sm tracking-widest uppercase mb-3">
            // 01. about_me
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            The{' '}
            <span className="bg-gradient-to-r from-neon-purple to-deep-cyan bg-clip-text text-transparent">
              Developer
            </span>{' '}
            Behind
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl p-6 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.color}12, transparent 60%)`,
                  }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}35` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="text-white font-bold text-base mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
