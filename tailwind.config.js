/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066CC",
          dark: "#004C99",
          light: "#E6F1FF",
        },
        secondary: {
          DEFAULT: "#F59E0B",
        },
        dark: "#111827",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "ui-sans-serif",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
