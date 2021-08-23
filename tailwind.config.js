const colors = require('./colors');

module.exports = {
  theme: {
    extend: {},
    colors: colors,
    fontFamily: {
      'display': ['Open Sans', 'ui-sans-serif'],
      'body': ['Open Sans', 'ui-sans-serif'],
    },
    fontSize: {
      'xs': '1rem',
      'sm': '1.4rem',
      'base': '1.6rem',
      'lg': '1.8rem',
      'xl': '2rem',
      '2xl': '2.4rem',
      '3xl': '3.6rem',
      '4xl': '4.8rem',
      'normalize': '62.5%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
  presets: [
    require('custom-tailwind-config')
  ]
};