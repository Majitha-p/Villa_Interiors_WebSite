/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "rgb(var(--primary))",
        "primary-hover": "rgb(var(--primary-hover))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border-primary)",
        "border-hover": "var(--border-primary-hover)",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
