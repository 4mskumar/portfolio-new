/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lili: ["Lilita One", 'serif'],
        outfit: ["Outfit", 'serif']
      }
    },
  },
  plugins: [],
}