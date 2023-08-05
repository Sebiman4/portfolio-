const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        current: 'currentColor',
        primary: '#14b8a6',
        dark: '#0f172a',
        purple: '#6603fc',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

