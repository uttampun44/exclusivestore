/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'bodyWidth': '1170px',
      },
      textColor:{
        "secondaryColor" : '#000',
        "primaryColor" : '#fff'
      },
      screens:{
        'tablet': {"min": '768px',  'max': '992px'},
        'mobile' :{'max' : '767px'},
        'laptop' :  {'min' : '1024px', 'max': '1169px'},
         'mini' : {'min' : '320px', 'max': '413px'}
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary' : '#F5F5F5'
      }
    },
  },
  plugins: [],
}