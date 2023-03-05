/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/flowbite/**/*.js", './node_modules/tw-elements/dist/js/**/*.js'],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
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
      fontSize: {
        sm: '0.93rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
      

    
    }
  },
  plugins: [
    require('flowbite/plugin'),
    
    require('tw-elements/dist/plugin')
  ],
}
