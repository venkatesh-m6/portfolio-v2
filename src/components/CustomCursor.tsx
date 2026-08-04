'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [clickBurst, setClickBurst] = useState(false);

  /* ─── Raw mouse position (inner dot tracks exactly) ─── */
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  /* ─── Spring-lagged position (outer ring trails behind) ─── */
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 16, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 16, mass: 0.6 });

  /* ─── Attach hover listeners to all interactives ─── */
  const refreshInteractives = useCallback(() => {
    const els = document.querySelectorAll<HTMLElement>(
      'a, button, [role="button"], input, textarea, select, label, [data-hover]'
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
    /* Track mouse */
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const onDown = () => {
      setClicking(true);
      setClickBurst(true);
      setTimeout(() => setClickBurst(false), 350);
    };
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    /* Initial scan + watch for DOM changes */
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
  }, [mouseX, mouseY, refreshInteractives]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* ── Outer lagging ring ── */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width:   clicking ? 28 : hovering ? 52 : 38,
            height:  clicking ? 28 : hovering ? 52 : 38,
            opacity: visible ? 1 : 0,
            rotate:  hovering ? 90 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          {/* Outer square ring — rotated 45° = diamond */}
          <div
            className="absolute inset-0 rounded-sm border-2 border-cyber-green"
            style={{
              transform: 'rotate(45deg)',
              boxShadow: hovering
                ? '0 0 18px rgba(16,185,129,0.9), inset 0 0 10px rgba(16,185,129,0.15)'
                : '0 0 8px rgba(16,185,129,0.45)',
              transition: 'box-shadow 0.2s ease',
            }}
          />
          {/* Inner filled diamond (very subtle) visible on hover */}
          {hovering && (
            <div
              className="absolute inset-[6px] rounded-sm bg-cyber-green/10"
              style={{ transform: 'rotate(45deg)' }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* ── Inner precision dot ── */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          animate={{
            width:  clicking ? 3 : 5,
            height: clicking ? 3 : 5,
            scale:  hovering ? 0 : 1,   /* hide dot when hovering — ring takes over */
          }}
          transition={{ duration: 0.12 }}
          className="rounded-full bg-cyber-green"
          style={{ boxShadow: '0 0 8px 2px rgba(16,185,129,0.9)' }}
        />
      </motion.div>

      {/* ── Click burst ripple ── */}
      <AnimatePresence>
        {clickBurst && (
          <motion.div
            key="burst"
            className="fixed top-0 left-0 z-[99997] pointer-events-none"
            style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
            initial={{ width: 10, height: 10, opacity: 0.9 }}
            animate={{ width: 60, height: 60, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div
              className="w-full h-full rounded-sm border border-cyber-green"
              style={{
                transform: 'rotate(45deg)',
                boxShadow: '0 0 12px rgba(16,185,129,0.7)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Corner tick-marks on hover ── */}
      <AnimatePresence>
        {hovering && (
          <motion.div
            key="ticks"
            className="fixed top-0 left-0 z-[99997] pointer-events-none"
            style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {/* four corner L-brackets */}
            {[
              'top-0 left-0 border-t-2 border-l-2 -translate-x-3 -translate-y-3',
              'top-0 right-0 border-t-2 border-r-2  translate-x-3 -translate-y-3',
              'bottom-0 left-0 border-b-2 border-l-2 -translate-x-3  translate-y-3',
              'bottom-0 right-0 border-b-2 border-r-2  translate-x-3  translate-y-3',
            ].map((cls, i) => (
              <div
                key={i}
                className={`absolute w-3 h-3 border-cyber-green ${cls}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
