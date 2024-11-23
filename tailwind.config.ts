import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'], // ฟอนต์ภาษาอังกฤษ
        'noto-sans': ['"Noto Sans Thai"', 'sans-serif'], // ฟอนต์ภาษาไทย
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
