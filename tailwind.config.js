import {colors} from "./src/styles/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: colors
    },
  },
  plugins: [],
}

