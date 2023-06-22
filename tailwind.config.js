/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        red: "#E0234E",
      },
    },
  },
  plugins: [],
};
