/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      purple: "#8c52ff",
      black: "black",
      white: "white",
    },
  },
  plugins: [],
};
