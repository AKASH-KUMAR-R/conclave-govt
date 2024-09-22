/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5F6F9'
        },
        secondary: {
          // DEFAULT: '#7E52E8',
          DEFAULT: '#0041e8',
          500: 'rgba(0, 65, 232, 0.4)',
          // shade: '#E1E0FF',
          shade: '#668df1'
        }
      }
    },
  },
  plugins: [],
}