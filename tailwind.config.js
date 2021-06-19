// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      width: {
        "w-140": "29rem",
        "w-150": "36rem",
      },
      
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
