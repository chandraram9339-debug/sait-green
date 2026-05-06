"use client";

interface StatsTabsProps {
  activeTab?: string;
}

const tabs = ["24h", "3d", "7d", "1m"];

export default function StatsTabs({ activeTab = "24h" }: StatsTabsProps) {
  return (
    <div className="px-5 pt-5">
      <h2 className="mb-3 font-outfit text-xl font-medium tracking-[0.4px] text-white">
        Trading bot statistics for the period:
      </h2>
      <div className="flex gap-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="flex-1 rounded-3xl py-[10px] font-outfit text-lg font-medium tracking-[0.18px] text-[#40FF96] backdrop-blur-md transition-all"
            style={{
              background: "rgba(25,25,25,0.65)",
              border:
                activeTab === tab
                  ? "1.5px solid rgba(64,255,150,0.4)"
                  : "1.5px solid transparent"
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

