import type { Config } from "tailwindcss";
import { addIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)"],
        rounded: ["var(--font-rounded)"],
        app: ["var(--font-geist-sans)", "var(--font-rounded)"],
      },
    },
  },
  plugins: [
    addIconSelectors({
      prefixes: ["line-md"],
      iconSelector: ".{prefix}__{name}",
    }),
  ],
};
export default config;
