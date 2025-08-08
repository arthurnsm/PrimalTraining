import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anek: ["Anek Tamil", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        geistMono: ["Geist Mono", "monospace"],
        instrument: ["Instrument Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        libre: ["Libre Franklin", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
