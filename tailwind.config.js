/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_blue: '#0066FF',
        coral_red: '#FF6452',
        green: '#399918',
        black: '#00000D',
        light_gray: '#DDDDDD',
        slate_gray: '#6D6D6D',
        pale_blue: '#F5F6FF',
      },
      fontFamily: {
        font_montserrat: ['Montserrat', 'sans-serif'],
        font_palanquin: ['Palanquin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
