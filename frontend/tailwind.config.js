/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './src/**/*.{js,jsx}',],
  theme: {
    extend: {
      backgroundColor: ['responsive', 'hover'],
      textColor: ['responsive', 'hover'],
    },
  },
  plugins: [],
}

