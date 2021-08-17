const mostrar = () => {
    const miobjeto = {
        nombre:"pepe",
        apellido:"argento",
        dni=14051147
    } 
    console.log(`
    nombre: ${miobjeto.nombre}
    apellido: ${miobjeto.apellido}
    dni: ${miobjeto.dni}
    `)
}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar)