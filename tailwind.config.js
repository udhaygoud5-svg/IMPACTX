/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(var(--primary) / <alpha-value>)",
        "primary-container": "rgb(var(--primary-container) / <alpha-value>)",
        "surface": "rgb(var(--surface) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--surface-container-highest) / <alpha-value>)",
        "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
        "background": "rgb(var(--background) / <alpha-value>)",
        "accent-ai": "rgb(var(--accent-ai) / <alpha-value>)",
        "accent-growth": "rgb(var(--accent-growth) / <alpha-value>)",
        "outline-variant": "#2a2a2a",
        "outline": "#444444",
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        syne: ["var(--font-syne)", "Syne", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        "dm-serif": ["var(--font-dm-serif)", "DM Serif Display", "serif"],
        "space-mono": ["var(--font-space-mono)", "Space Mono", "monospace"],
        headline: ["var(--font-syne)", "Syne", "sans-serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
