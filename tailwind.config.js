/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
        bebas: ["Bebas Neue", "serif"],
        inter: ["Inter", "serif"],
        poppins: ["Poppins", "serif"],
      },
      fontSize: {
        xxs: "10px",
      },
      lineHeight: {
        xs: "0.02em",
      },
      container: {
        "2xl": "1280px",
        xl: "1024px",
        lg: "768px",
        md: "640px",
        sm: "480px",
      },
    },
  },
  plugins: [],
};
