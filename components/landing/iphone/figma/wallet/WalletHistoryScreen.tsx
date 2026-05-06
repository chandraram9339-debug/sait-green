"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./WalletHistoryScreen.module.css";

const transactions = [
  { amount: "+100.00", commission: "-10.00", date: "31.12.2024 00:00" },
  { amount: "+450.11", commission: "-10.00", date: "31.12.2024 00:00" },
  { amount: "+10.22", commission: "-10.00", date: "31.12.2024 00:00" },
  { amount: "+70.00", commission: "-10.00", date: "31.12.2024 00:00" },
  { amount: "+70.00", commission: "-10.00", date: "31.12.2024 00:00" },
  { amount: "+95.55", commission: "-10.00", date: "31.12.2024 00:00" }
];

function StatTab({
  title,
  totalLabel,
  totalAmount,
  countLabel,
  count,
  countUnit,
  active,
  arrowUp
}: {
  title: string;
  totalLabel: string;
  totalAmount: string;
  countLabel: string;
  count: string;
  countUnit: string;
  active?: boolean;
  arrowUp?: boolean;
}) {
  return (
    <div className={`${styles.tab} ${active ? styles.tabActive : ""}`}>
      <p className={styles.tabTitle}>{title}</p>

      <div>
        <span className={styles.totalLabel}>{totalLabel}</span>
        <div className={styles.amountRow}>
          <span className={styles.amount}>{totalAmount}</span>
          <span className={styles.currency}>USDT</span>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <span className={styles.countLabel}>{countLabel}</span>
        <div className={styles.countRow}>
          <span className={styles.count}>{count}</span>
          <span className={styles.countUnit}>{countUnit}</span>
        </div>
      </div>

      <div className={`${styles.arrowBtn} ${arrowUp ? styles.arrowBtnActive : ""}`}>
        {arrowUp ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M7.5 13.3337V13.8337H8.5V13.3337H8H7.5ZM8 13.3337H8.5V2.66699H8H7.5L7.5 13.3337H8Z" fill="#131413"/>
            <path d="M4 6.66699L8 2.66699L12 6.66699" stroke="#131413" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8.5 2.66634V2.16634H7.5V2.66634H8H8.5ZM8 2.66634H7.5L7.5 13.333H8H8.5L8.5 2.66634H8Z" fill="#131413"/>
            <path d="M12 9.33301L8 13.333L4 9.33301" stroke="#131413" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );
}

function TransactionItem({
  title,
  subtitle,
  address,
  amount,
  commission,
  date
}: {
  title: string;
  subtitle: string;
  address: string;
  amount: string;
  commission: string;
  date: string;
}) {
  return (
    <div className={styles.txItem}>
      <div className={styles.txIconWrap} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8H12" stroke="#131413" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className={styles.txTitles}>
        <span className={styles.txTitle}>{title}</span>
        <span className={styles.txSubtitle}>{subtitle}</span>
        <span className={styles.txAddress}>{address}</span>
      </div>

      <div className={styles.txDetails}>
        <div className={styles.amountRow}>
          <span className={styles.amount}>{amount}</span>
          <span className={styles.currency}>USDT</span>
        </div>
        <div className={styles.amountRow} style={{ opacity: 0.9 }}>
          <span className={styles.amount} style={{ fontSize: 13 }}>
            {commission}
          </span>
          <span className={styles.currency}>USDT</span>
        </div>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
          {date}
        </span>
      </div>
    </div>
  );
}

export function WalletHistoryScreen() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let holdUntil = 0;
    const speedPxPerFrame = 0.55;

    const tick = () => {
      const now = performance.now();
      if (now < holdUntil) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
      if (maxScroll <= 1) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const next = el.scrollTop + speedPxPerFrame;
      if (next >= maxScroll) {
        el.scrollTop = 0;
        holdUntil = now + 800;
      } else {
        el.scrollTop = next;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.blobTopLeft} aria-hidden="true" />
          <div className={styles.blobBottomRight} aria-hidden="true" />

          <div className={styles.statusBar}>
            <span className={styles.time}>9:41</span>
            <div className={styles.statusIcons}>
              <svg width="17" height="12" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z" fill="#0A0A0A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z" fill="#0A0A0A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="#0A0A0A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z" fill="#0A0A0A" fillOpacity="0.18"/>
              </svg>
              <svg width="14" height="12" viewBox="0 0 16 14" fill="none" aria-hidden="true">
                <path d="M8.13295 8.93945C8.77245 8.93945 9.39384 9.1075 9.94135 9.42792L10.1632 9.55775C10.3314 9.65617 10.3609 9.88652 10.2231 10.024L8.32897 11.9129C8.21263 12.0289 8.02401 12.0289 7.90767 11.9129L6.02576 10.0362C5.88847 9.89927 5.91709 9.67009 6.08385 9.57094L6.3032 9.44051C6.85574 9.11198 7.48501 8.93945 8.13295 8.93945Z" fill="#0A0A0A"/>
                <path d="M8.13267 5.46973C9.7235 5.46973 11.2509 5.99747 12.4952 6.97479L12.6711 7.11291C12.8113 7.22303 12.8236 7.43052 12.6974 7.55636L11.5666 8.684C11.462 8.7883 11.2965 8.80028 11.1779 8.71214L11.0401 8.60969C10.1997 7.98511 9.18633 7.65008 8.13267 7.65008C7.07251 7.65008 6.05323 7.98928 5.21005 8.62103L5.07207 8.72441C4.95346 8.81327 4.78737 8.80157 4.68247 8.69696L3.5521 7.56974C3.42618 7.44417 3.43813 7.2372 3.57769 7.12687L3.75254 6.98864C4.99979 6.00261 6.53416 5.46973 8.13267 5.46973Z" fill="#0A0A0A"/>
                <path d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z" fill="#0A0A0A"/>
              </svg>
              <svg width="22" height="12" viewBox="0 0 25 14" fill="none" aria-hidden="true">
                <path d="M24 5C24.5523 5 25 5.44772 25 6V8C25 8.55228 24.5523 9 24 9V5Z" fill="#0A0A0A" fillOpacity="0.6"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3 1H20C21.6569 1 23 2.34315 23 4V10C23 11.6569 21.6569 13 20 13H3C1.34315 13 0 11.6569 0 10V4C0 2.34315 1.34315 1 3 1ZM3 2C1.89543 2 1 2.89543 1 4V10C1 11.1046 1.89543 12 3 12H20C21.1046 12 22 11.1046 22 10V4C22 2.89543 21.1046 2 20 2H3Z" fill="#0A0A0A" fillOpacity="0.6"/>
                <rect x="2" y="3" width="19" height="8" rx="1" fill="#0A0A0A"/>
              </svg>
            </div>
          </div>

          <div className={styles.appBar}>
            <button className={styles.backBtn} aria-label="Go back">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 12.8H20.8V11.2H20V12V12.8ZM20 12V11.2H4V12V12.8H20V12Z" fill="#0A0A0A"/>
                <path d="M10 18L4 12L10 6" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.logoText}>PALLADIUM</div>
            <div className={styles.appBarRight}>
              <button className={styles.iconBtn} aria-label="Notifications">
                <span className={styles.notifBadge}>25</span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" aria-hidden="true">
                  <path d="M2 15V7C2 5.14348 2.7375 3.36301 4.05025 2.05025C5.36301 0.737498 7.14348 0 9 0C10.8565 0 12.637 0.737498 13.9497 2.05025C15.2625 3.36301 16 5.14348 16 7V15" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
                  <path d="M0 15H18" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
                  <path d="M7 19H11" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.iconBtn} aria-label="Settings">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 5C5.89543 5 5 5.89543 5 7V8.17157C5 8.70201 4.78929 9.21071 4.41421 9.58579L3.41421 10.5858C2.63317 11.3668 2.63316 12.6332 3.41421 13.4142L4.41421 14.4142C4.78929 14.7893 5 15.298 5 15.8284V17C5 18.1046 5.89543 19 7 19H8.17157C8.70201 19 9.21071 19.2107 9.58579 19.5858L10.5858 20.5858C11.3668 21.3668 12.6332 21.3668 13.4142 20.5858L14.4142 19.5858C14.7893 19.2107 15.298 19 15.8284 19H17C18.1046 19 19 18.1046 19 17V15.8284C19 15.298 19.2107 14.7893 19.5858 14.4142L20.5858 13.4142C21.3668 12.6332 21.3668 11.3668 20.5858 10.5858L19.5858 9.58579C19.2107 9.21071 19 8.70201 19 8.17157V7C19 5.89543 18.1046 5 17 5H15.8284C15.298 5 14.7893 4.78929 14.4142 4.41421L13.4142 3.41421C12.6332 2.63317 11.3668 2.63316 10.5858 3.41421L9.58579 4.41421C9.21071 4.78929 8.70201 5 8.17157 5H7Z" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.balanceSection}>
            <p className={styles.balanceLabel}>Current balance</p>
            <div className={styles.balanceAmount}>
              <span className={styles.balanceNumber}>8725.62</span>
              <span className={styles.balanceCurrency}>USDT</span>
            </div>
            <p className={styles.walletAddress}>TQBw8SGT.......6l48HPv4iB</p>
          </div>
        </header>

        <main className={styles.body}>
          <div className={styles.tabsRow}>
            <StatTab
              title="Deposit"
              totalLabel="Total deposited amount:"
              totalAmount="725.22"
              countLabel="Number of deposits made:"
              count="28"
              countUnit="Times"
            />
            <StatTab
              title="Withdraw"
              totalLabel="Total withdraw amount"
              totalAmount="4250.98"
              countLabel="Number of deposits made:"
              count="534"
              countUnit="Times"
              active
              arrowUp
            />
            <StatTab
              title="Referral"
              totalLabel="Bonuses received from:"
              totalAmount="25.22"
              countLabel="Total number of invited users:"
              count="25"
              countUnit="People"
            />
          </div>

          <div
            ref={scrollRef}
            className={styles.scrollArea}
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {transactions.map((tx, i) => (
              <TransactionItem
                key={i}
                title="Replenishment"
                subtitle="Commission"
                address="UQBw8....SGTF"
                amount={tx.amount}
                commission={tx.commission}
                date={tx.date}
              />
            ))}
          </div>
        </main>

        <div className={styles.bottomGlow} aria-hidden="true" />
        <div className={styles.bottomGlowSmall} aria-hidden="true" />
        <div className={styles.bottomNavWrap}>
          <nav className={styles.bottomNav} aria-label="Navigation">
            <button className={styles.navItem} aria-label="Home">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 20H4V10L12 4L20 10V20Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14V20" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`${styles.navItem} ${styles.navItemActive}`} aria-label="Wallet">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 8H3V20H21V8Z" stroke="#191919" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 8V4H17V8" stroke="#191919" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 14H17" stroke="#191919" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.navItem} aria-label="Analytics">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4V20H20" stroke="white" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M9 13L13 9L16 12L20 8" stroke="white" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.navItem} aria-label="Support">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 4H21.8V3.2H21V4ZM3 4V3.2H2.2V4H3ZM3 21H2.2C2.2 21.3236 2.39491 21.6153 2.69385 21.7391C2.99279 21.8629 3.33689 21.7945 3.56569 21.5657L3 21ZM6 18V17.2H5.66863L5.43431 17.4343L6 18ZM21 18V18.8H21.8V18H21ZM21 4V3.2H3V4V4.8H21V4ZM3 4H2.2V21H3H3.8V4H3ZM3 21L3.56569 21.5657L6.56569 18.5657L6 18L5.43431 17.4343L2.43431 20.4343L3 21ZM6 18V18.8H21V18V17.2H6V18ZM21 18H21.8V4H21H20.2V18H21Z" fill="white"/>
                <path d="M8 11H8.01" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11H12.01" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11H16.01" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

