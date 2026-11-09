'use client';

import { useEffect, useRef } from 'react';

/**
 * Subtle technical ambient canvas:
 * Very faint, quiet grid points with rare slow pulses, replacing neon matrix rain.
 */
export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let tick = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick += 0.005;

      const spacing = 48;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let x = 0; x <= cols; x++) {
        for (let y = 0; y <= rows; y++) {
          const posX = x * spacing;
          const posY = y * spacing;

          // Gentle spatial wave to give a quiet sense of life without distracting motion
          const dist = Math.sin(x * 0.15 + tick) * Math.cos(y * 0.15 + tick);
          const alpha = 0.025 + Math.max(0, dist * 0.035);

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fillRect(posX, posY, 1, 1);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
