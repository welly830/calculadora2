const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container: {
      screens: {
        //sm: '500px',
      }
    },
    
    extend: {},
  },

  plugins: [forms, typography, 
    require("daisyui")
  ],
  
};

/* module.exports = {
  plugins: [require("daisyui")],
  
};  */



module.exports = config;