module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backdropFilter: {
        'blur': 'blur(5px)'
      }
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto', 'Arial', 'sans-serif', 'Roboto-mono'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}