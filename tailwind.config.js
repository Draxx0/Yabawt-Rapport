/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        red: "#E0234E",
      },
      animation: {
        float: "float 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 50%, 100%": { transform: " translateY(0)" },
          "25%": { transform: "translateY(7%)" },
          "77%": { transform: "translateY(-7%)" },
        },
      },
    },
  },
  plugins: [],
};
