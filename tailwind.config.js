/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(var(--primary), 0.5), 0 0 25px rgba(var(--primary), 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(var(--primary), 0.8), 0 0 50px rgba(var(--primary), 0.4)' 
          },
        },
      },
    },
  },
  plugins: [],
};