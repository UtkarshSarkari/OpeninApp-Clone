module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans'],
        stylish: ['Fuggles', 'cursive']
      },
      screens: {
        'max-xs': '320px',
        'xs': '370px',
        'sm': '420px',
        'md': '765px',
        'lg': '1020px',
        'xl': '1440px',
        '2xl': '1790px',
        'max-xl': '2560px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
