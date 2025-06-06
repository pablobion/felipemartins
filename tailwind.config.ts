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
        'bg': {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          accent: 'var(--bg-accent)',
        },
        'accent': {
          DEFAULT: 'var(--bg-accent)',
          hover: 'var(--accent-hover)',
          light: 'var(--accent-light)',
        },
        'text': {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          dark: 'var(--text-dark)',
        }
      },
    },
  },
  plugins: [],
};

export default config; 