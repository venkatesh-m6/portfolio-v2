'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Precision Engineer Cursor:
 * Clean, subtle, accurate. No excessive glowing bloom or spinning shapes.
 */
export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Raw mouse position for the precision dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring for the outer reticle
  const reticleX = useSpring(mouseX, { stiffness: 260, damping: 24, mass: 0.5 });
  const reticleY = useSpring(mouseY, { stiffness: 260, damping: 24, mass: 0.5 });

  const refreshInteractives = useCallback(() => {
    const els = document.querySelectorAll<HTMLElement>(
      'a, button, [role="button"], input, textarea, select, label, [data-interactive]'
    );
    const on = () => setHovering(true);
    const off = () => setHovering(false);
    els.forEach((el) => {
      el.removeEventListener('mouseenter', on);
      el.removeEventListener('mouseleave', off);
      el.addEventListener('mouseenter', on);
      el.addEventListener('mouseleave', off);
    });
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    refreshInteractives();
    const observer = new MutationObserver(refreshInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY, refreshInteractives, visible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Precision reticle ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{ x: reticleX, y: reticleY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: clicking ? 22 : hovering ? 36 : 26,
            height: clicking ? 22 : hovering ? 36 : 26,
            opacity: visible ? 1 : 0,
            borderColor: hovering ? 'rgba(16, 185, 129, 0.6)' : 'rgba(255, 255, 255, 0.2)',
            backgroundColor: hovering ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="rounded-full border"
        />
      </motion.div>

      {/* Target center dot */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          animate={{
            scale: clicking ? 0.7 : hovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.1 }}
          className="w-1.5 h-1.5 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
