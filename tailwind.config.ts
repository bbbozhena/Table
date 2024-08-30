import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-bg": "#FFFFFF",
        "dark-bg": "#1D1E42",
        "light-bg-line": "#F7F6FE",
        "dark-bg-line": "#26264F",
        "light-counter-button": "#E0E0E0",
        "dark-counter-button": "#141432",
        "button-color": "#624DE3",
      },
      spacing: {
        "35p": "35%",
      },
    },
  },
  plugins: [],
};
export default config;
