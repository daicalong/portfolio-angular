const colors = require('./colors');

module.exports = {
    theme: {
      extend: {},
      colors: colors,
      fontFamily: {
        'display': ['Open Sans', 'ui-sans-serif'],
        'body': ['Open Sans', 'ui-sans-serif'],
      }
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