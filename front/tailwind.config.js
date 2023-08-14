/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeout: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, visibility: 'hidden' }
        },
      },
      animation: {
        fadein:  'fadein  1s ease-in-out forwards 1.5s',
        fadeout: 'fadeout 1s ease-in-out forwards 1.5s'
      }
    },
  },
  plugins: [],
}

