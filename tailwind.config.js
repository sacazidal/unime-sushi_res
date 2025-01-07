/** @type {import('tailwindcss').Config} */
import plugin from "tailwind-scrollbar";
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
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [plugin],
};
