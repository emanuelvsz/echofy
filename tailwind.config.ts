import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          black: "#121212",
          dark: "#191414",
          purple: "#2D1B33",
          lightPurple: "#3E2A47",
          green: "#1DB954",
          gray: "#B3B3B3",
        },
      },
      backgroundImage: {
        "gradient-spotify": "linear-gradient(to bottom, #2D1B33, #121212)",
      },
    },
  },
  plugins: [],
};
export default config;
