import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ExperienceSection from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Ambient technical canvas
const MatrixBackground = dynamic(() => import('@/components/MatrixBackground'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0c0d11] text-zinc-100 selection:bg-emerald-500/20 selection:text-white">
      {/* Structural architectural grid */}
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0 opacity-40" />

      {/* Subtle ambient canvas */}
      <MatrixBackground />

      {/* Main page content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <ExperienceSection />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
