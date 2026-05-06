"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

export function AnimatedNumber({
  value,
  decimals = 2,
  duration = 1.9,
  from
}: {
  value: number;
  decimals?: number;
  duration?: number;
  from?: number;
}) {
  const mv = useMotionValue(from ?? 0);
  const text = useTransform(mv, (latest) => latest.toFixed(decimals));
  const [rendered, setRendered] = useState(() =>
    (from ?? 0).toFixed(decimals)
  );

  useEffect(() => {
    mv.set(from ?? 0);
    const controls = animate(mv, value, {
      duration,
      ease: [0.12, 0.86, 0.18, 1]
    });
    return () => controls.stop();
  }, [mv, value, duration, from]);

  useEffect(() => {
    const unsub = text.on("change", (v) => setRendered(v));
    return () => unsub();
  }, [text]);

  return <span>{rendered}</span>;
}

