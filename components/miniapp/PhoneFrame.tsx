"use client";

import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A] shadow-[0_30px_120px_rgba(0,0,0,0.70)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/6 to-transparent" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00FF9F]/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#00E5FF]/10 blur-3xl" />
      <div className="relative p-3">{children}</div>
    </div>
  );
}

