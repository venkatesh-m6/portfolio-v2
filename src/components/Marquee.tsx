export default function Marquee() {
  const items = [
    'React',
    'Next.js 14',
    'TypeScript',
    'Node.js',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'TensorFlow',
    'OpenCV',
    'Docker',
    'Scikit-learn',
    'Express',
    'REST APIs',
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-4 border-y border-white/6 my-2 bg-white/[0.01]"
      aria-hidden="true"
    >
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 w-24 h-full z-10 bg-gradient-to-r from-[#0c0d11] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full z-10 bg-gradient-to-l from-[#0c0d11] to-transparent pointer-events-none" />

      <div className="flex animate-marquee gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-4">
            <span className="text-zinc-400 text-xs font-mono hover:text-zinc-200 transition-colors cursor-default">
              {item}
            </span>
            <span className="text-zinc-700 text-xs font-mono select-none">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
