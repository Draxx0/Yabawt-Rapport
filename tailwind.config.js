/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
      },
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
        move: "move 30s linear infinite",
        spinSlow: "spin 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 50%, 100%": { transform: " translateY(0)" },
          "25%": { transform: "translateY(7%)" },
          "77%": { transform: "translateY(-7%)" },
        },
        move: {
          "0%, 50%, 100%": { transform: " translateY(0)" },
          "25%": { transform: "translateX(7%)" },
          "77%": { transform: "translateX(-7%)" },
        },
      },
    },
  },
  plugins: [],
};
