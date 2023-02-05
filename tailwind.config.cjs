/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f5af0',
        secondary: '#16161a',
        tertiary: '#2cb67d',
        background: '#242629',
        dark: '#010101'
      }
    },
  },
  plugins: [],
}
