"use client";

import { motion } from "framer-motion";

const points = [
  // Step-like growth to mimic mini-app equity curve
  { x: 0, y: 58 },
  { x: 18, y: 58 },
  { x: 32, y: 60 },
  { x: 46, y: 59 },
  { x: 64, y: 54 },
  { x: 76, y: 52 },
  { x: 92, y: 46 },
  { x: 108, y: 40 },
  { x: 124, y: 34 },
  { x: 138, y: 28 },
  { x: 154, y: 22 },
  { x: 168, y: 18 },
  { x: 182, y: 14 },
  { x: 200, y: 8 }
];

function toPath() {
  const d = points
    .map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  return d;
}

export function GrowthChart() {
  const d = toPath();
  return (
    <div className="relative">
      <svg
        viewBox="0 0 200 80"
        className="h-[160px] w-full"
        preserveAspectRatio="none"
        aria-label="Growth chart"
      >
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00FF9F" stopOpacity="0.95" />
            <stop offset="1" stopColor="#00FF9F" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00FF9F" stopOpacity="0.20" />
            <stop offset="1" stopColor="#00FF9F" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* grid */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1={(i * 200) / 4}
            y1="0"
            x2={(i * 200) / 4}
            y2="80"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={(i * 80) / 4}
            x2="200"
            y2={(i * 80) / 4}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        <motion.path
          d={`${d} L 200 80 L 0 80 Z`}
          fill="url(#fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.path
          d={d}
          fill="none"
          stroke="url(#line)"
          strokeWidth="3.25"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/8" />
    </div>
  );
}

