/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
        logo: '#793d77',
        darkGrey: '#3e3e3f',
        darkPink: '#d73640',
        darkPurple: '#772974',
        lightPurple: '#9a2b81',
        footerbg: '#EFEFEF',
        pcolor: '#7B7A7A',
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
    },
  },
  plugins: [],
};
