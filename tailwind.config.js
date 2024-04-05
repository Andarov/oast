/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        oast:{
          main: '#0B0621',
          primary: '#8951ff',
          midnight:{
            200: '#A8A1C5',
            300: '#6E6889'
          }
        }
      },
      maxWidth:{
        base: '1280px'
      }
    },
  },
  plugins: [],
}