/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main":"#B2C9AD",
        "main-1":"#4B5945"
      }
    },
  },
  plugins: [],
}