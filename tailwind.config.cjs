/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7420",
        secondary: "#191A19"
      },
      backgroundImage: {
       "hero-bg": "url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}
