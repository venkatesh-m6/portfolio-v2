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

// Dynamically import canvas-heavy component to avoid SSR issues
const MatrixBackground = dynamic(() => import('@/components/MatrixBackground'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-obsidian">
      {/* Global dot-grid overlay */}
      <div className="fixed inset-0 bg-dot-grid pointer-events-none z-0 opacity-40" />

      {/* Matrix rain canvas */}
      <MatrixBackground />

      {/* Main content above backgrounds */}
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
