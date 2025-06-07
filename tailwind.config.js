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
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateY(-20px) rotate(180deg)",
            opacity: "1",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Jika ingin aktifkan custom font:
      // fontFamily: {
      //   sans: "var(--font-sans)",
      //   serif: "var(--font-serif)",
      // },
    },
  },
  plugins: [],
};
