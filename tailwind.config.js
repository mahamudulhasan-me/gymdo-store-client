/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Sans", "sans-serif"],
      },
      colors: {
        primary: "#fb5b21",
      },
    },
  },
  plugins: [],
};
