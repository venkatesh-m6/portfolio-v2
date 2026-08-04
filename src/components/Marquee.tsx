export default function Marquee() {
  const items = [
    'REACT',
    'NEXT.JS',
    'TYPESCRIPT',
    'NODE.JS',
    'PYTHON',
    'MONGODB',
    'TAILWIND CSS',
    'TENSORFLOW',
    'OPENCV',
    'FRAMER MOTION',
    'POSTGRESQL',
    'FLASK',
    'DOCKER',
    'SCIKIT-LEARN',
    'SALESFORCE',
    'RAZORPAY API',
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-6 border-y border-white/8 my-4"
      aria-hidden="true"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 w-32 h-full z-10 bg-gradient-to-r from-obsidian to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 w-32 h-full z-10 bg-gradient-to-l from-obsidian to-transparent pointer-events-none" />

      <div className="flex animate-marquee gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-4">
            <span className="text-white/60 text-sm font-mono font-semibold tracking-widest uppercase hover:text-cyber-green transition-colors duration-200 cursor-default">
              {item}
            </span>
            <span className="text-cyber-green/40 text-lg font-mono select-none">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
