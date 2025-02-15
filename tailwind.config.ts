import type { Config } from "tailwindcss";

export default {
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
    },
    container: {
      padding:{
        DEFAULT: "2rem",
        sm: "3rem",
        md:"4rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "8rem",
      }

    }
  },
  plugins: [],
} satisfies Config;
