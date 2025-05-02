/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        main: "1220px",
      },
      backgroundColor: {
        main: "#517FA1",
      },
      colors: {
        main: "#517FA1",
        secondary: "#18375D",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    flex: {
      2: "2 2 0%",
      3: "3 3 0%",
      4: "4 4 0%",
      5: "5 5 0%",
    },
    keyframes: {
      "slide-top": {
        "0%": {
          transform: "translateY(40px)",
        },
        "100%": {
          transform: "translateY(0px)",
        },
      },
    },
    animation: {
      "slide-top":
        "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    },
  },
  plugins: ["@tailwindcss/line-clamp"],
};
