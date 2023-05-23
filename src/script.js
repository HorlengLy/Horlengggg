const navbar = document.querySelector('#navbar');
function toggleNav(){
    const userScreen = document.body.offsetWidth
    if(userScreen>768) return
    navbar.classList.toggle('right-[-1000px]')
    navbar.classList.toggle('right0')
}


const observerForTile = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('showTileAnimate',entry.isIntersecting)
    })
},
{
    threshold:0
})
const observerForCard = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('showCardAnimate',entry.isIntersecting)
    })
},{
    threshold:.3
})

const dataTiles = document.querySelectorAll('[data-title]')
const dataCards = document.querySelectorAll('[data-card]')

dataTiles.forEach(dataTitle=>{
    observerForTile.observe(dataTitle)
})

dataCards.forEach(dataCard=>{
    observerForCard.observe(dataCard)
})
