/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      screens: {
        'xxl': '1440px', // Custom screen size for 1440px
      },
      colors: {
        lightBackground: '#c6b297',  // Define light mode colors
        lightText: '#5e574f',
        darkBackground: '#0c0404',
        darkText: '#ffffff',
        'slight': '#9d8563',
        'fblack': '#7f7f7f',
        'cwhite': '#dbdbd9',
        'dwhite': '#dcdcda',
      },
    },
  },
  plugins: [],
}
