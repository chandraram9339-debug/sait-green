"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export function IphoneEmulator({
  heightClassName = "h-[580px] md:h-[640px]",
  autoPlayMs = 4500,
  contentScale = 0.92,
  contentPaddingPx = 10,
  showDots = true,
  draggable = true,
  children
}: {
  heightClassName?: string;
  autoPlayMs?: number;
  contentScale?: number;
  contentPaddingPx?: number;
  showDots?: boolean;
  draggable?: boolean;
  children: React.ReactNode;
}) {
  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(1);
  const canDrag = draggable && slides.length > 1;
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect();
      setW(Math.max(1, rect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const go = useCallback(
    (next: number) => {
      const n = (next + slides.length) % slides.length;
      animRef.current?.stop();

      // Special-case: smooth autoplay wrap from last -> first
      const isForwardWrap = slides.length > 1 && next === index + 1 && index === slides.length - 1 && n === 0;
      if (isForwardWrap) {
        animRef.current = animate(x, -slides.length * w, {
          type: "spring",
          stiffness: 260,
          damping: 26,
          onComplete: () => {
            x.set(0);
            setIndex(0);
          }
        });
        return;
      }

      setIndex(n);
      animRef.current = animate(x, -n * w, { type: "spring", stiffness: 260, damping: 26 });
    },
    [slides.length, w, x, index]
  );

  // Autoplay
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => go(index + 1), autoPlayMs);
    return () => window.clearInterval(id);
  }, [index, autoPlayMs, slides.length, go]);

  // Keep x in sync when width changes
  useEffect(() => {
    animRef.current?.stop();
    x.set(-index * w);
  }, [w, index, x]);

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className={cn(
          "relative w-full max-w-[420px] select-none md:max-w-[460px]",
          heightClassName
        )}
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="relative h-full w-full"
          whileHover={{ rotateX: 2.5, rotateY: -3 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Shadow */}
          <div className="absolute inset-0 -z-10 translate-y-6 rounded-[56px] bg-black/60 blur-2xl" />

          {/* Metallic frame */}
          <div className="absolute inset-0 rounded-[56px] bg-gradient-to-b from-white/10 via-white/5 to-white/10 ring-1 ring-white/10" />
          <div className="absolute inset-[6px] rounded-[50px] bg-[#0A0A0A] ring-1 ring-white/10" />

          {/* Screen glass */}
          <div className="absolute inset-[10px] overflow-hidden rounded-[44px] bg-[#0A0A0A] ring-1 ring-white/10">
            {/* Glass reflection */}
            <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[120%] w-[120%] rotate-12 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />
            <div className="pointer-events-none absolute -right-1/3 top-0 h-[60%] w-[80%] -rotate-12 bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-60" />

            {/* Dynamic inner glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#40FF96]/10 blur-3xl" />

            <div ref={containerRef} className="relative h-full w-full overflow-hidden">
              <motion.div
                className="flex h-full w-full"
                drag={canDrag ? "x" : false}
                dragConstraints={
                  canDrag ? { left: -(slides.length - 1) * w, right: 0 } : undefined
                }
                dragElastic={canDrag ? 0.06 : 0}
                style={{ x }}
                onDragEnd={
                  canDrag
                    ? (_, info) => {
                        const threshold = Math.min(140, w * 0.22);
                        const dx = info.offset.x;
                        if (dx < -threshold) return go(index + 1);
                        if (dx > threshold) return go(index - 1);
                        return go(index);
                      }
                    : undefined
                }
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                {slides.map((child, i) => (
                  <div key={i} className="h-full w-full shrink-0">
                    <div
                      className="h-full w-full"
                      style={{ padding: contentPaddingPx }}
                    >
                      <div className="h-full w-full overflow-hidden rounded-[34px] bg-[#0A0A0A] ring-1 ring-white/6">
                        <div
                          className="h-full w-full"
                          style={{
                            transform: `scale(${contentScale})`,
                            transformOrigin: "top left",
                            width: `${100 / contentScale}%`,
                            height: `${100 / contentScale}%`
                          }}
                        >
                          {child}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dynamic island */}
            <div className="pointer-events-none absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black/65 ring-1 ring-white/10" />
          </div>
        </motion.div>
      </motion.div>

      {showDots ? <Dots count={slides.length} active={index} onSelect={go} /> : null}
    </div>
  );
}

function Dots({
  count,
  active,
  onSelect
}: {
  count: number;
  active: number;
  onSelect: (idx: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          className={cn(
            "h-2.5 w-2.5 rounded-full border border-white/10 transition-all",
            i === active
              ? "bg-[#40FF96] shadow-[0_0_0_1px_rgba(64,255,150,.20),0_0_22px_rgba(64,255,150,.28)]"
              : "bg-white/10 hover:bg-white/15"
          )}
          aria-label={`Go to screen ${i + 1}`}
        />
      ))}
    </div>
  );
}

