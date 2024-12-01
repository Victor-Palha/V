import {colors} from "./src/styles/colors"
import {fonts} from "./src/styles/fonts"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: fonts
    },
  },
  plugins: [],
}

