/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Oswald", "Helvetica", "Arial", "Lucida", "sans-serif"],
        monts: ['"Montserrat"', " sans-serif"],
      },
    },
  },
  plugins: [],
};
