/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'btnHover':'0 0 5px #03f40f , 0 0 25px #03f40f, 0 0 50px #03f40f, 0 0 100px #03f40f'
      },
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
              transform:'translateX(200px)',
              opacity:'0'
          },
          '100%':{
            transform:'translateX(0)',
            opacity:'1'
          }
        },
        'BottomToTop':{
          '0%':{
              transform:'translate(0,200px)',
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
        },
        'shadow':{
          '0%':{
            opacity:'0'
          },
          '100%':{
            opacity:'1'
          }
        }

      },
      animation:{
        'leftToRight':'leftToRight 0.5s forwards',
        'RightToLeft':'RightToLeft 0.5s forwards',
        'BottomToTop':'BottomToTop 0.5s forwards',
        'topToButtom':'topToButtom 0.5s forwards',
        'toCenter':'toCenter 1s forwards',
        'shadow':'shadow 2s forwards',
      }
    },
  },
  plugins: [],
}