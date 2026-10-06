import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#191a18",
        paper: "#f4f1eb",
        linen: "#e8e3da",
        champagne: "#b89a68",
        brass: "#8e7046",
        slate: "#626761",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(25, 26, 24, 0.10)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
