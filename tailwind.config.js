/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: "'Kumbh Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
