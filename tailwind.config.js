/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary)) / 1',
        surface0: 'rgb(var(--color-surface0)) / 1'
      }
    },
  },
  plugins: [],
}

