'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    title: 'AS/A Levels (British International School Riyadh)',
    type: 'education',
    start: '2019-Q3',
    end: '2021-Q3',
  },
  {
    title: 'BSc Software Engineering (Keele University)',
    type: 'education',
    start: '2021-Q3',
    end: '2025-Q3',
  },
  {
    title: 'DisasterResponsePlatform (Dissertation)',
    type: 'project',
    start: '2024-Q3',
    end: '2025-Q2',
  },
  {
    title: 'Portfolio Website',
    type: 'project',
    start: '2025-Q2',
    end: '2025-Q3',
  },
  {
    title: 'Discord Chatbot – ResistBot',
    type: 'project',
    start: '2017-Q3',
    end: '2018-Q1',
  },
  {
    title: 'PvP Arena Plugin – Emenbee Realms',
    type: 'project',
    start: '2015-Q4',
    end: '2016-Q2',
  },
  {
    title: 'Tekkit SMP Server Hosting',
    type: 'project',
    start: '2025-Q1',
    end: '2025-Q3',
  },
];

const quarters = Array.from({ length: 44 }, (_, i) => {
  const year = 2015 + Math.floor(i / 4);
  const quarter = `Q${(i % 4) + 1}`;
  return `${year}-${quarter}`;
});

const quarterToIndex = (q: string) => quarters.indexOf(q);

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnWidth = 110;
  const barAdjustment = (0); // Reduced length more
  const barOffset = (0); // Shift bars slightly to the left

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const percent = x / width;
      const scrollWidth = containerRef.current.scrollWidth - width;
      containerRef.current.scrollLeft = percent * scrollWidth;
    }
  };

  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -left-[10%] w-[120vw] h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="circuitPattern"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="scale(1)"
            >
              <path
                d="M0 0 L0 20 L20 20 L20 40"
                stroke="#38bdf8"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitPattern)" opacity="0.06" />
        </svg>
      </div>

      <motion.h2
        className="text-left text-5xl font-mono font-bold mb-12 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Timeline
      </motion.h2>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden"
      >
        <div
          className="relative whitespace-nowrap flex flex-col gap-6 px-4"
          style={{ minWidth: `${(quarters.length * columnWidth) + 170}px` }}
        >
          <div className="grid gap-4" style={{ gridTemplateRows: `repeat(${timelineData.length}, auto)` }}>
            {timelineData.map((entry, idx) => {
              const startIndex = quarterToIndex(entry.start);
              const endIndex = quarterToIndex(entry.end);
              const width = endIndex - startIndex;

              return (
                <div key={idx} className="flex items-center h-12">
                  <div className="w-64 font-mono text-sm text-white/80 text-right pr-4 bg-[#0f172a] sticky left-0 z-10">
  {entry.title}
</div>

                  <div
                    className={`h-4 rounded-full ${
                      entry.type === 'education' ? 'bg-emerald-400' : 'bg-cyan-400'
                    }`}
                    style={{
                      marginLeft: `${(startIndex * columnWidth) - barOffset}px`,
                      width: `${(width * columnWidth) - barAdjustment}px`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex text-xs font-mono text-white/50 pl-[256px]">
            {quarters.map((q) => (
              <div key={q} className="text-center" style={{ width: `${columnWidth}px` }}>
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
