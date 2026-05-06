"use client";

import { cn } from "@/lib/utils";

/** Minimal Telegram plane (`/icons/telegram-plane.png`) — neon Telegram blue (#2AABEE), CSS mask */
export function TelegramPremiumIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block shrink-0 bg-[length:contain] bg-center bg-no-repeat",
        "drop-shadow-[0_0_16px_rgba(42,171,238,0.55)] drop-shadow-[0_0_32px_rgba(56,189,248,0.28)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(152deg, #E8F7FE 0%, #B8E9FC 14%, #7DD3FC 32%, #38BDF8 48%, #2AABEE 62%, #229ED9 76%, #1A7FB8 92%, #1476A8 100%)",
        maskImage: "url(/icons/telegram-plane.png)",
        WebkitMaskImage: "url(/icons/telegram-plane.png)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
