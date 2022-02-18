
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        textColor: {
            skin: {
              light: 'var(--color-text-light)',
              dark: 'var(--color-text-dark)',
            },
          },
          backgroundColor: {
            skin: {
              fill: 'var(--fill-dark)',
              base: 'var(--color-background)'
            }
          },
        fontFamily: {
          'Rubik': ['Rubik', 'sans-serif'],
        },
        colors: {
          'cl-black-carbon': '#16192C',
          'cl-grey-light': '#D0CECE',
          'cl-grey-dark': '#5E5E5E',
          'cl-blue': '#3B82F6',
          'cl-secondary': '#D3DEF0',
          'cl-red': '#EF233C',
          'cl-blue-dark': '#061C3F',
          'cl-green': '#25A244',
          'cl-pink': '#F72585',
          'cl-yellow': '#FFAA00',
          'cl-cyan': '#00B4D8',
          'cl-orange': '#FF4800',
          'cl-violet': '#7209B7',

          // gradients

          'gr_blue': {
            1 : "rgba(59,130,246,1)",
            2 : "rgba(81,196,233,1)"
          },
          
          'gr_red': {
            1 : "rgba(239,35,60,1)",
            2 : "rgba(239,84,35,1)"
          },
          'gr_pink': {
            1 : "rgba(251,10,40,1)",
            2 : "rgba(249,39,203,1)"
          },
          'gr_cyan': {
            1 : "rgba(0,180,216,1)",
            2 : "rgba(61,242,231,1)"
          },
          'gr_orange': {
            1 : "rgba(255,72,0,1)",
            2 : "rgba(255,187,13,1)"
          },
          'gr_yellow': {
            1 : "rgba(255,170,0,1)",
            2 : "rgba(240,210,54,1)"
          },
          'gr_green': {
            1 : "rgba(37,162,68,1)",
            2 : "rgba(91,223,45,1)"
          },
          'gr_violet': {
            1 : "rgba(114,9,183,1)",
            2 : "rgba(180,9,183,1)"
          },
        },
      },
    },
    plugins: [],
  }