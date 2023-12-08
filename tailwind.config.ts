import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          weak: "var(--primary-weak)",
          light: "var(--primary-light)",
          deep: "var(--primary-deep)",
        },
        grayscale: {
          DEFAULT: "var(--grayscale-gray)",
          white: "var(--grayscale-white)",
          pale: "var(--grayscale-pale-gray)",
          weak: "var(--grayscale-weak-gray)",
          light: "var(--grayscale-lightgray)",
          neutral: "var(--grayscale-neutral-gray)",
          deep: "var(--grayscale-deep-gray)",
          dark: "var(--grayscale-darkgray)",
          black: "var(--grayscale-black)",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
export default config;
