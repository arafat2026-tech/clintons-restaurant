/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0B0C09',
          900: '#10110D', // Primary brand deep charcoal
          850: '#151712',
          800: '#1C1D18',
          700: '#282A22',
          600: '#3A3D32',
        },
        gold: {
          100: '#FDF7E2',
          200: '#FAEEC1',
          300: '#F4DC85',
          400: '#ECCB52',
          500: '#E8B923', // Primary golden yellow
          600: '#C79A17',
          700: '#B88A27', // Deep metallic gold
          800: '#8C6514',
          900: '#5F4408',
        },
        ivory: {
          50: '#FAF8F4',
          100: '#F5F2E9', // Warm ivory white
          200: '#E8E3D5',
          300: '#D5CEC0',
          400: '#B2ABA0',
          500: '#8E877D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        script: ['"Playfair Display"', 'Georgia', 'serif'], // or styled italics
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(232, 185, 35, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(232, 185, 35, 0.5)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F8DB72 0%, #E8B923 50%, #B88A27 100%)',
        'gold-gradient-subtle': 'linear-gradient(180deg, rgba(232, 185, 35, 0.15) 0%, rgba(232, 185, 35, 0.02) 100%)',
        'dark-radial': 'radial-gradient(circle at center, #1B1D16 0%, #10110D 100%)',
      }
    },
  },
  plugins: [],
}
