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
  },
  plugins: [],
};
