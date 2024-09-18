/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Neuething Sans Test', 'sans-serif'],
<<<<<<< HEAD
    },
      colors: {
        primary: '#4F48EC', // Your primary color
        secondary: '#D97706', // Your secondary color
=======
>>>>>>> 28389d01666afc10fc3869d884c9592788c1af8d
      },
      colors: {
        //primary: '#1D4ED8', // Your primary color
        secondary: '#D97706', // Your secondary color
        primary: '#4F48EC', 
        banner_bg: '#CECCFA',
        gray1: '#1D1D1D87',
        text_color: '#484848',
        deep_text_color: '#282828',
        plain_blue: '#D1DDF7',
        plain_yellow: '#F7EAC9',
        alpino_blue: '#110F36'
      },
      fontFamily: {
        'neuething': ['Neuething-Sans-Test', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'],
  }
}

