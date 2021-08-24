import pitagoras from './pitagoras.js'
const ejecutar = () => {
    const instancia = new pitagoras()
    //ejecute el metodo calcular 
    instancia.calcular()
}
const boton = document.getElementById ("btn_calcular")
boton.addEventListener("click",ejecutar)