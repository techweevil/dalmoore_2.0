/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['"Oswald"', "Helvetica", "Arial", "Lucida", "sans-serif"],
        monts: ['"Montserrat"', " sans-serif"],
      },

      colors: {
        primary: "#0d6743",
        secondary: "#fff311",
        tertiary: "#f03058",
      },
    },
  },
  plugins: [],
};
