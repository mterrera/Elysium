const imagenes = document.querySelectorAll('img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        alert("auch")
        
        //aparecerImagen(imagen.getAttribute('src'))

    })   
})

//const aparecerImagen = (imagen) =>{
  //  imagenesLight.src = imagen;
  //  contenedorLight.classList.toggle('show')
  //  imagenesLight.classList.toggle('showImage')
//}