/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define a font family with fallback
        'comic': ['"Comic Sans MS"', '"Comic Neue"', 'cursive'],
      },
    },
  },
  plugins: [],
}
