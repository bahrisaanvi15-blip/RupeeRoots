/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: '#15803D',
        forest: '#166534',
        gold: '#D4AF37',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(21, 128, 61, 0.12)',
      },
    },
  },
  plugins: [],
};
