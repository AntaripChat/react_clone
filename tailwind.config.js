/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
      },
    },
  },
  plugins: [
    // require('daisyui'),
  ],
}