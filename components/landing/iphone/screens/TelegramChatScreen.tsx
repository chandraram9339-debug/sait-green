"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, Search, MoreVertical, Paperclip, Mic, Flame } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function TelegramChatScreen({
  launchUrl,
  chatUrl,
  channelUrl,
  supportUrl
}: {
  launchUrl: string;
  chatUrl: string;
  channelUrl: string;
  supportUrl: string;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const loopCooldownUntilRef = useRef(0);
  const [seed, setSeed] = useState(1);

  const baseText = useMemo<string[]>(
    () => [
      "Hello everyone",
      "Hi",
      "Good morning, bro",
      "how are you doing?",
      "What are your results overnight?",
      "Hello",
      "I haven't looked at the results overnight yet, I'll show you a little later",
      "Hiiii",
      "Good morning",
      "Hi all",
      "My income didn't increase much overnight, I hope palladium will bring me a good percentage today",
      "Hey everyone! I've already made $20 in two days, and my overnight profit was also insignificant",
      "Well, the most important thing is that over the long term, palladium brings in excellent profits🚀🤪",
      "Yes, Vince said she would wait at least a week to see the results.",
      "Camilo",
      "Hello",
      "++++",
      "Camilo is right, I invested for the long term.",
      "Has anyone already connected at least one referral?",
      "no",
      "---",
      "I've already connected three people using my referral link.",
      "I wonder how much profit I will get from them",
      "I don't even know, so check for yourself what profit they will bring",
      "Yes, I will give you feedback as soon as I receive some percentage from my referrals"
    ],
    []
  );

  const schedule = useMemo(() => buildSchedule(seed, baseText), [seed, baseText]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(() => setToastVisible(true), 3000);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (paused) return;
    const baseDelayMs = 700;
    const imageHoldExtraDelayMs = 1500; // hold screenshot ~1.5s longer before continuing

    const now = Date.now();
    const waitForCooldownMs = Math.max(0, loopCooldownUntilRef.current - now);

    const lastItem = count > 0 ? schedule.items[count - 1]?.item : undefined;
    const nextDelayMs =
      waitForCooldownMs > 0
        ? waitForCooldownMs
        : baseDelayMs + (lastItem?.kind === "image" ? imageHoldExtraDelayMs : 0);

    const id = window.setTimeout(() => {
      setCount((c) => {
        const t = Date.now();
        if (t < loopCooldownUntilRef.current) return c;
        if (c >= schedule.items.length) return c;
        const next = c + 1;
        if (next > schedule.items.length) return schedule.items.length;
        if (next === schedule.items.length) {
          // pause briefly then restart the sequence from the beginning
          loopCooldownUntilRef.current = t + 900;
          setSeed((s) => s + 1);
          return 0;
        }
        return next;
      });
    }, nextDelayMs);

    return () => window.clearTimeout(id);
  }, [paused, count, schedule.items]);

  const rendered = schedule.items.slice(0, count);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Smooth follow the newest messages, but hard-reset when looping
    if (count === 0) {
      el.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [count]);

  return (
    <div className="relative flex h-full w-full flex-col font-outfit">
      {/* Telegram wallpaper */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 30% 0%, #D9F4D0 0%, #BFE8B7 42%, #A7DFA9 100%)"
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cg fill='none' stroke='%23000000' stroke-opacity='.55' stroke-width='1'%3E%3Cpath d='M18 44c20-18 36-18 56 0'/%3E%3Cpath d='M140 52c18-14 38-14 56 0'/%3E%3Cpath d='M64 132c18-16 40-16 58 0'/%3E%3Cpath d='M166 150c14-12 30-12 44 0'/%3E%3Cpath d='M24 192c16-14 34-14 50 0'/%3E%3Cpath d='M120 210c16-14 34-14 50 0'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "240px 240px"
        }}
      />

      {/* Top app bar */}
      <div className="relative shrink-0 px-4 pt-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-[#40FF96] shadow-[0_0_0_1px_rgba(0,0,0,.06)]" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[15px] font-semibold text-black">
                PALLADIUM AI
              </div>
              <div className="truncate text-[12px] font-medium text-black/55">
                chat
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-black/70">
            <Search className="h-5 w-5" />
            <MoreVertical className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Chat content */}
      <div
        ref={scrollRef}
        className="relative min-h-0 flex-1 overflow-y-auto px-4 pb-24 pt-4"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        style={{
          scrollbarWidth: "none"
        }}
      >
        <div className="mx-auto w-full max-w-[360px]">
          <TelegramWelcomeCard
            launchUrl={launchUrl}
            chatUrl={chatUrl}
            channelUrl={channelUrl}
            supportUrl={supportUrl}
          />

          <div className="mt-4 space-y-2">
            <AnimatePresence initial={false}>
              {rendered.map((m, i) => (
                <motion.div
                  key={`${i}-${m.item.kind === "text" ? m.item.text : m.item.src}`}
                  initial={{ opacity: 0, y: 10, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <ChatLine
                    name={m.user.name}
                    avatarSrc={m.user.avatarSrc}
                    item={m.item}
                    color={m.user.color}
                    isLast={i === rendered.length - 1}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll down button */}
      <button
        type="button"
        className="absolute bottom-[78px] right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-black/70 shadow-[0_14px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </button>

      {/* Launch toast (appears after 3s) */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={toastVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-[120px] left-4 right-4 flex justify-center"
      >
        <div className="pointer-events-auto w-full max-w-[360px] rounded-2xl bg-white/92 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5 backdrop-blur-[6px]">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[12px] font-semibold text-black">
                Instant access
              </div>
              <div className="truncate text-[12px] text-black/60">
                Join our chat to get started
              </div>
            </div>
            <a
              href={launchUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-xl bg-[#2E6DFF] px-3 py-2 text-[12px] font-semibold text-white hover:brightness-[1.02] active:brightness-[0.98]"
            >
              LAUNCH
            </a>
          </div>
        </div>
      </motion.div>

      {/* Composer */}
      <div className="relative shrink-0 px-4 pb-3">
        <div className="flex items-center gap-2 rounded-2xl bg-white/92 px-3 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5 backdrop-blur-[6px]">
          <button
            type="button"
            className="shrink-0 rounded-xl bg-[#2E6DFF] px-3 py-2 text-[12px] font-semibold text-white"
          >
            Launch
          </button>
          <div className="min-w-0 flex-1 rounded-xl bg-black/5 px-3 py-2 text-[12px] text-black/50">
            Message
          </div>
          <Paperclip className="h-5 w-5 shrink-0 text-black/50" />
          <Mic className="h-5 w-5 shrink-0 text-black/50" />
        </div>
      </div>
    </div>
  );
}

function TelegramWelcomeCard({
  launchUrl,
  chatUrl,
  channelUrl,
  supportUrl
}: {
  launchUrl: string;
  chatUrl: string;
  channelUrl: string;
  supportUrl: string;
}) {
  return (
    <div className="break-words rounded-2xl bg-white px-4 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-black/90">
        <Flame className="h-4 w-4 text-orange-500" />
        <span>Welcome to</span>
        <span className="text-[#1F5EFF] underline underline-offset-2">PALLADIUM AI</span>
      </div>

      <p className="mt-2 text-[13px] leading-[1.35] text-black/80">
        <span className="text-[#1F5EFF] underline underline-offset-2">Palladium AI</span>{" "}
        is an automated{" "}
        <span className="text-[#1F5EFF] underline underline-offset-2">trading system</span>{" "}
        and a curated environment for market understanding.
      </p>

      <p className="mt-2 text-[13px] leading-[1.35] text-black/80">
        Here,{" "}
        <span className="text-[#1F5EFF] underline underline-offset-2">technology</span>{" "}
        and user{" "}
        <span className="text-[#1F5EFF] underline underline-offset-2">experience</span>{" "}
        operate as a unified framework.
      </p>

      <div className="mt-3 space-y-3 text-[13px] leading-[1.35] text-black/80">
        <div>
          <div className="font-semibold text-black/85">CHAT</div>
          <div>Real-time discussions, observations, and shared results.</div>
          <a
            className="inline-flex items-center gap-2 text-[#1F5EFF] underline underline-offset-2"
            href={chatUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Join the chat</span>
          </a>
        </div>
        <div>
          <div className="font-semibold text-black/85">APP</div>
          <div>Access the system and monitor activity in real time.</div>
          <a
            className="inline-flex items-center gap-2 text-[#1F5EFF] underline underline-offset-2"
            href={launchUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Open the app</span>
          </a>
        </div>
        <div>
          <div className="font-semibold text-black/85">CHANNEL</div>
          <div>Updates, model evolution, and key developments. Only relevant information.</div>
          <a
            className="inline-flex items-center gap-2 text-[#1F5EFF] underline underline-offset-2"
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>View the channel</span>
          </a>
        </div>
        <div>
          <div className="font-semibold text-black/85">SUPPORT</div>
          <div>Contact support directly in Telegram.</div>
          <a
            className="inline-flex items-center gap-2 text-[#1F5EFF] underline underline-offset-2"
            href={supportUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Open support</span>
          </a>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-[#FDEFE6] ring-1 ring-black/5">
        <div className="flex items-center gap-3 px-3 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#40FF96]">
            <span className="text-[9px] font-bold tracking-[0.08em] text-black">
              PALLADIUM
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-semibold text-black/85">Telegram</div>
            <div className="truncate text-[12px] font-semibold text-black">
              PALLADIUM AI
            </div>
            <div className="truncate text-[11px] text-black/65">
              THE FUTURE OF TRADING SYSTEM
            </div>
          </div>
          <div className="ml-auto h-10 w-10 shrink-0 rounded-lg bg-[#40FF96] shadow-[0_0_0_1px_rgba(0,0,0,.06)]" />
        </div>
        <a
          href={launchUrl}
          target="_blank"
          rel="noreferrer"
          className="block w-full bg-[#F3B07A] py-3 text-center text-[13px] font-bold tracking-[0.08em] text-black hover:brightness-[1.02] active:brightness-[0.98]"
        >
          LAUNCH APP
        </a>
      </div>

      <div className="mt-2 text-right text-[11px] text-black/40">18:52</div>
    </div>
  );
}

const AVATAR_COLORS = [
  "#2E6DFF",
  "#FF7B2A",
  "#40FF96",
  "#9B5CFF",
  "#00B2FF",
  "#FF3D6E",
  "#16A34A",
  "#111827"
] as const;

type ChatItem =
  | { kind: "text"; text: string }
  | { kind: "image"; src: string; alt: string; caption?: string; reactions?: string[] };

type ChatUser = { name: string; avatarSrc: string; color: string };
type ScheduledItem = { user: ChatUser; item: ChatItem };

function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSchedule(seed: number, baseText: string[]) {
  const rng = mulberry32(seed * 9973 + 17);

  const users: ChatUser[] = [
    { name: "Camilo Rivera", avatarSrc: "/avatars/avatar-01.svg", color: AVATAR_COLORS[0] },
    { name: "Vince Keller", avatarSrc: "/avatars/avatar-02.svg", color: AVATAR_COLORS[1] },
    { name: "Mila Santos", avatarSrc: "/avatars/avatar-03.svg", color: AVATAR_COLORS[2] },
    { name: "Ethan Johnson", avatarSrc: "/avatars/avatar-04.svg", color: AVATAR_COLORS[3] },
    { name: "Ava Martinez", avatarSrc: "/avatars/avatar-05.svg", color: AVATAR_COLORS[4] },
    { name: "Noah Brooks", avatarSrc: "/avatars/avatar-06.svg", color: AVATAR_COLORS[5] }
  ];

  const screenshots: ChatItem[] = [
    {
      kind: "image",
      src: "/screens/balance-2971.93.png",
      alt: "Palladium AI result screenshot",
      caption: "Overnight results — check this.",
      reactions: ["🎉", "🔥", "❤️", "👍"]
    },
    {
      kind: "image",
      src: "/screens/balance-997.55.png",
      alt: "Palladium AI result screenshot",
      caption: "Steady curve today.",
      reactions: ["🚀", "😍", "👍", "💚"]
    },
    {
      kind: "image",
      src: "/screens/balance-470.36.png",
      alt: "Palladium AI result screenshot",
      caption: "Starting small, testing long term.",
      reactions: ["😊", "💪", "❤️", "👏"]
    }
  ];

  const baseItems: ChatItem[] = baseText.map((t) => ({ kind: "text", text: t }));

  // choose random insert points for screenshots (not adjacent)
  const positions: number[] = [];
  const minGap = 5;
  const maxPos = Math.max(10, baseItems.length - 4);
  for (let i = 0; i < screenshots.length; i++) {
    let tries = 0;
    while (tries++ < 60) {
      const p = 5 + Math.floor(rng() * (maxPos - 5));
      if (positions.every((q) => Math.abs(q - p) >= minGap)) {
        positions.push(p);
        break;
      }
    }
  }
  positions.sort((a, b) => a - b);

  const items: ScheduledItem[] = [];
  let sIdx = 0;
  for (let i = 0; i < baseItems.length; i++) {
    if (sIdx < positions.length && i === positions[sIdx]) {
      items.push({
        user: users[Math.floor(rng() * users.length)],
        item: screenshots[sIdx]
      });
      sIdx += 1;
    }
    items.push({
      user: users[Math.floor(rng() * users.length)],
      item: baseItems[i]
    });
  }

  // If a position couldn't be found (rare), append remaining screenshots with spacing
  while (sIdx < screenshots.length) {
    items.push({
      user: users[Math.floor(rng() * users.length)],
      item: { kind: "text", text: "🔥" }
    });
    items.push({
      user: users[Math.floor(rng() * users.length)],
      item: screenshots[sIdx]
    });
    sIdx += 1;
  }

  return { items };
}

function ChatLine({
  name,
  avatarSrc,
  item,
  color,
  isLast
}: {
  name: string;
  avatarSrc: string;
  item: ChatItem;
  color: string;
  isLast: boolean;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="relative mt-0.5 h-8 w-8 shrink-0 overflow-hidden rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-2 ring-white/70">
        <img
          src={avatarSrc}
          alt={name}
          className="h-full w-full"
          style={{ objectFit: "cover", background: color }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold text-black/70">{name}</div>
        {item.kind === "text" ? (
          <div className="mt-1 inline-block max-w-full rounded-2xl bg-white/92 px-3 py-2 text-[13px] leading-[1.25] text-black shadow-[0_12px_40px_rgba(0,0,0,0.16)] ring-1 ring-black/5">
            {item.text}
          </div>
        ) : (
          <div className="mt-1 inline-block max-w-full">
            <div className="overflow-hidden rounded-2xl bg-white/92 shadow-[0_12px_40px_rgba(0,0,0,0.16)] ring-1 ring-black/5">
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="block w-[240px] max-w-full bg-[#0A0A0A]"
                  style={{
                    aspectRatio: "9 / 16",
                    objectFit: "contain",
                    objectPosition: "top center",
                    padding: 6
                  }}
                />
              </div>
              {item.caption ? (
                <div className="px-3 pb-2 pt-2 text-[12px] leading-[1.25] text-black/80">
                  {item.caption}
                </div>
              ) : null}
            </div>

            {item.reactions && item.reactions.length ? (
              <div className="-mt-2 flex flex-wrap gap-1 px-1">
                {item.reactions.map((r) => (
                  <span
                    key={r}
                    className="rounded-full bg-white/92 px-2 py-1 text-[12px] text-black shadow-[0_10px_28px_rgba(0,0,0,0.14)] ring-1 ring-black/5"
                  >
                    {r}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        )}

        {isLast ? (
          <div className="mt-1 text-right text-[10px] text-black/35">now</div>
        ) : null}
      </div>
    </div>
  );
}

