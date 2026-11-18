/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4F1EA',
        ink: '#1F1B16',
        accent: '#C8501B',
        plum: '#6B21A8',
      },
      fontFamily: {
        sans: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
