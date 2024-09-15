/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Neuething Sans Test', 'sans-serif'],
    },
      colors: {
        primary: '#1D4ED8', // Your primary color
        secondary: '#D97706', // Your secondary color
        grey2: 'rgba(206, 204, 250, 23)',// Grey 2
        textColor: '#484848' // For Texts
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

