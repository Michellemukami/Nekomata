/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/flowbite/**/*.js", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      spacing: {
        '128': '64rem',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'] 
      },
      height: {
        '128': '32rem',
      },
  
    
    }
  },
  plugins: [
    require('flowbite/plugin'),
    
    require('tw-elements/dist/plugin')
  ],
}
