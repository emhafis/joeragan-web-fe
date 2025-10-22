/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b72828",
        secondary: "#e5212f",
        textBasic: "#2b2b2bff",
        textGray: "#5d5d5dff"
      },
    },
  },
  plugins: [],
}

