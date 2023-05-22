/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':['Poppins'],
        'roboto':['Roboto'],
        'Caveat':['Caveat'],
        'Domine':['Domine'],
        'Alkatra':['Alkatra'],
        'Roboto_Mono':['Roboto Mono'],
      },
      keyframes:{
        'leftToRight':{
          '0%':{
              transform:'translate(-200px,0)',
              opacity:'0'
          },
          '100%':{
            transform:'translate(0,0)',
            opacity:'1'
          }
        },
        'RightToLeft':{
          '0%':{
              transform:'translate(200px,0)',
              opacity:'0'
          },
          '100%':{
            transform:'translate(0,0)',
            opacity:'1'
          }
        },
        'BottomToTop':{
          '0%':{
              transform:'translate(0,100px)',
              opacity:'0'
          },
          '100%':{
            transform:'translate(0,0)',
            opacity:'1'
          }
        },
        'topToButtom':{
          '0%':{
              transform:'translate(0,-100px)',
              opacity:'0'
          },
          '100%':{
            transform:'translate(0,0)',
            opacity:'1'
          }
        },
        'toCenter':{
          '100%':{
            transform:'translateX(0)'
          }
        }

      },
      animation:{
        'leftToRight':'leftToRight 2s forwards',
        'RightToLeft':'RightToLeft 2s forwards',
        'BottomToTop':'BottomToTop 2s forwards',
        'topToButtom':'topToButtom 2s forwards',
        'toCenter':'toCenter 1s forwards',
      }
    },
  },
  plugins: [],
}