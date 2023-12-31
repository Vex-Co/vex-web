/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '470px',
      
      'sm': '640px',

      'md': '768px',

      'xmd': '948px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
        backgroundImage: {
          'cosmos': "url('/src/images/templates/cosmos1.png')"
        }
  },
  plugins: [],
}
}