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
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      xrl: { min: '1279px' },
      // => @media (min-width: 1279px) { ... }

      lg: { max: '1062px' },
      // => @media (max-width: 1062px) { ... }

      lmg: { min: '1062px' },
      // => @media (min-width: 1062px) { ... }

      mrd: { max: '915px' },
      // => @media (max-width: 905px) { ... }

      md: { max: '1000px' },
      // => @media (max-width: 767px) { ... }

      msd: { min: '1000px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '760px' },
      // => @media (max-width: 675px) { ... }

      xs: { max: '670px' },
      // => @media (max-width: 479px) { ... }

      xxs: { max: '389px' },
      // => @media (max-width: 375px) { ... }
    },
  },
  plugins: [],
};
