/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors : {
        primary: '#14b8a6',
        secondary: '#64748b',
        tertiary: '#334155',
        dark : '#0f172a',
        cream: '#F4F6FF',
        darkblue: '#133E87',
        navy: '#133E87',
        softnavy: '#608BC1'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

