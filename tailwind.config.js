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
          primary:{
            medium: '#8951ff', 
            dark: '#A851FF', 
          },
          midnight:{
            200: '#A8A1C5',
            300: '#6E6889'
          },
          light: '#fbfcff'
        }
      },
      boxShadow: {
        'btn': '0px 1px 2px rgba(24, 39, 75, .04)',
      },
      maxWidth:{
        base: '1280px'
      },
      fontFamily:{
        'dmSans': 'DM Sans, Arial, sans-serif',
        'montserrat': 'Montserrat, Arial, sans-serif',
      }
    },
  },
  plugins: [],
}

