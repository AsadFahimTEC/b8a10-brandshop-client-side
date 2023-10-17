/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        bebasneue: "'Bebas Neue', sans-serif",
        avenir: "'Sen', sans-serif"
      },
    },
  },
  plugins: [require("daisyui")],
}

