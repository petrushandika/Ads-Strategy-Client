/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        "bg-light": "#ECF0F1",
        "bg-dark": "#2C3E50",

        "text-primary": "#2C3E50",
        "text-secondary": "#7F8C8D",

        "brand-primary": "#9B59B6",
        "brand-secondary": "#8E44AD",

        "btn-primary": "#8E44AD",
        "btn-danger": "#E74C3C",

        success: "#27AE60",
        warning: "#F39C12",
        error: "#E74C3C",
        info: "#3498DB",

        "border-light": "#BDC3C7",
      },

      // fontFamily: {
      //   sans: "var(--font-sans)",
      //   serif: "var(--font-serif)",
      // },
    },
  },
  plugins: [],
};
