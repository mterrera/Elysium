const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(hamburger)

//Cuando clickeo en el menu,se desactiva el spread. Esto hace que aparezca el menu.
hamburger.addEventListener('click',()=>{
    menu.classList.toggle("spread")
}) 
//cuando clickeo dentro del menu, no pasa nada. cuando clickeo fuera del menu, se cierra.
window.addEventListener('click',e => {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger ){
        menu.classList.toggle("spread")
    }
})

