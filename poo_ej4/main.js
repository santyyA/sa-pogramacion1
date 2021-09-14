import Anime from './anime.js'
const mostrar = () =>{
    const fotos = new Anime();
    fotos.obtenerFotos();
}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", mostrar)