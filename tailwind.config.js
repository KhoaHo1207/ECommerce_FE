/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        main: "1220px",
      },
      backgroundColor: {
        main: "#0F172A",
      },
      colors: {
        main: "#0F172A",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
