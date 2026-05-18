/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#1D9E75',
        'teal-medium': '#5DCAA5',
        'teal-light': '#E1F5EE',
        'coral-primary': '#D85A30',
        'coral-medium': '#F0997B',
        'coral-light': '#FAECE7',
        'amber-brand': '#EF9F27',
        'amber-light': '#FAEEDA',
        'lavender-brand': '#7F77DD',
        'lavender-light': '#EEEDFE',
        'blue-brand': '#378ADD',
        'blue-light': '#E6F1FB',
        'green-brand': '#639922',
        'green-light': '#EAF3DE',
        'gray-soft': '#F1EFE8',
        'gray-text': '#444441',
        'gray-secondary': '#888780',
        'gray-dark': '#2C2C2A',
        'whatsapp': '#25D366',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

