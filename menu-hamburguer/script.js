let btnMobile = document.getElementById('menu')
let nav = document.getElementById('nav')

function teste(){
    let hamburguer = document.getElementById('hamburguer')

    hamburguer.classList.toggle('active')

    if(hamburguer.classList.contains('active')){
        nav.classList.add('links-visible')
    } else {
        nav.classList.remove('links-visible')
    }
}