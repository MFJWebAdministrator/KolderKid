/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kolder: {
          blue: {
            light: '#4DD2FF',
            DEFAULT: '#00B4FF',
            dark: '#0090CC',
          },
          fire: {
            light: '#FFD700',
            DEFAULT: '#FF4D00',
            dark: '#CC3D00',
          }
        }
      },
    },
  },
  plugins: [],
};