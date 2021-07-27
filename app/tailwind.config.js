module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    primary: {
      'light': '#5e503f',
      'dark': '#c6ac8f'
    },
    text: {
      'light': '#22333b',
      'dark': '#0a0908'
    },
    background: 'eae0d5',
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
