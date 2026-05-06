import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "sans-serif"
        ],
        outfit: [
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        palladium: {
          green: "#00FF9F",
          green2: "#39FF14",
          cyan: "#00E5FF",
          header: "#2EDD7D",
          bright: "#40FF96",
          card: "#131413",
          ink: "#191919",
          black: "#0A0A0A",
          black2: "#111111"
        }
      },
      boxShadow: {
        glowGreen: "0 0 0 1px rgba(0,255,159,.25), 0 0 40px rgba(0,255,159,.20)",
        glowBright: "0 0 0 1px rgba(64,255,150,.22), 0 0 55px rgba(64,255,150,.28)",
        glowCyan: "0 0 0 1px rgba(0,229,255,.22), 0 0 40px rgba(0,229,255,.18)"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 20% 10%, rgba(0,255,159,0.18), transparent 50%), radial-gradient(circle at 80% 15%, rgba(0,229,255,0.12), transparent 48%), radial-gradient(circle at 50% 80%, rgba(57,255,20,0.08), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;

