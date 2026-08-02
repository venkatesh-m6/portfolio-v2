'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[92%] max-w-4xl' : 'w-[96%] max-w-5xl'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-cyber-green to-neon-purple flex items-center justify-center shadow-[0_0_16px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_24px_rgba(16,185,129,0.8)] transition-shadow duration-300">
              <span className="text-xs font-black text-black tracking-tight font-mono">VM</span>
            </div>
            <span className="hidden sm:block text-sm font-semibold text-white/80 group-hover:text-cyber-green transition-colors duration-200 font-mono">
              venkatesh.dev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyber-green bg-cyber-green/10 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                    : 'text-white/60 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-cyber-green text-black hover:bg-emerald-400 transition-colors duration-200 shadow-[0_0_16px_rgba(16,185,129,0.4)]"
            >
              <span className="font-mono">Hire Me</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm"
          >
            <div className="rounded-2xl border border-white/10 bg-obsidian/90 backdrop-blur-xl p-4 shadow-2xl">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-cyber-green hover:bg-cyber-green/8 transition-all duration-200 font-mono text-sm"
                >
                  <span className="text-cyber-green mr-2">{'>'}</span>
                  {link.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10">
                <a
                  href="mailto:manipativenkatesh1@gmail.com"
                  className="block w-full text-center py-3 rounded-xl bg-cyber-green text-black font-bold font-mono text-sm hover:bg-emerald-400 transition-colors"
                >
                  get_in_touch()
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
