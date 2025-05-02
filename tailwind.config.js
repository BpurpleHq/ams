/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        'white': '#FFFFFF',
        'dark': '#212121',
        'sparkles':'#2D6E6E'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'headline-1': [
          '70px', 
          {
            lineHeight: '85.33px',
            
            fontWeight: 700
          }
        ],
        'headline-2': [
          '48px', 
          {
            lineHeight: '58.51px',

            fontWeight: 700
          }
        ],
        'headline-3': [
          '24px', 
          {
            lineHeight: '29px',
            fontWeight: 700
          }
        ],
        'headline-4': [
          '20px', 
          {
            lineHeight: '24px',
            fontWeight: 500
          }
        ],
        'body': [
          '16px', 
          {
            fontWeight: 400
          }
        ],
        'body-2': [
          '12px', 
          {
            lineHeight: '15px',
            fontWeight: 400
          }
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        movedown: 'movedown 4s linear 1',
      },
      keyframes: {
        movedown: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': {transform: 'translateY(0)'}
        },
      }
    },
  },
  plugins: [],
}
