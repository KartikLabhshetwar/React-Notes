/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri1: "#D4E2D4",
        pri2: "#ECB390",
        pri3: "#DF7861",
        pri4: "#FCF8E8"
      }
    },
  },
  plugins: [],
}

