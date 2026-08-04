import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#070709',
        'cyber-green': '#10b981',
        'neon-purple': '#a855f7',
        'deep-cyan': '#06b6d4',
        'code-green': '#34d399',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(circle, rgba(16,185,129,0.08) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(ellipse at center, rgba(16,185,129,0.05) 0%, transparent 70%)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
};

export default config;
