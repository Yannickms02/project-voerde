/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  corePlugins: {
    preflight: true,
  },
  prefix: 'tw-',
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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '130ch', // add required value here
          }
        }
      },
      keyframes: {
        slidein_altar: {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: '.75'
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1'
          },
        },
        slidein_heim: {
          '0%': {
            transform: 'translateX(50%)',
            opacity: '.75'
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1'
          },
        },
        slidein_team: {
          '0%': {
            transform: 'translateY(50%)',
            opacity: '.75'
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1'
          },
        },
      },
      animation: {
        slidein_altar: 'slidein_altar 1s forwards',
        slidein_heim: 'slidein_heim 1s forwards',
        slidein_team: 'slidein_team 1s forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}

